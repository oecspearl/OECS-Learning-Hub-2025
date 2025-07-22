"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { User, Session } from '@supabase/supabase-js'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signOut: async () => {},
})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('🔐 AuthProvider: Initializing authentication...')
    
    // Check if Supabase client is available
    if (!supabase) {
      console.error('❌ AuthProvider: Supabase client not initialized')
      setLoading(false)
      return
    }

    console.log('✅ AuthProvider: Supabase client is available')

    // Get initial session
    const getInitialSession = async () => {
      try {
        console.log('🔍 AuthProvider: Getting initial session...')
        if (!supabase) {
          console.error('❌ AuthProvider: Supabase client not available for session')
          return
        }
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('❌ AuthProvider: Error getting initial session:', error)
        } else {
          console.log('✅ AuthProvider: Initial session retrieved:', session ? 'User logged in' : 'No session')
          setSession(session)
          setUser(session?.user ?? null)
        }
      } catch (error) {
        console.error('❌ AuthProvider: Exception getting initial session:', error)
      } finally {
        setLoading(false)
      }
    }

    getInitialSession()

    // Listen for auth changes
    if (supabase) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange((event: string, session: Session | null) => {
        console.log('🔄 AuthProvider: Auth state changed:', event, session ? 'User logged in' : 'No session')
        setSession(session)
        setUser(session?.user ?? null)
        setLoading(false)
      })

      return () => {
        console.log('🧹 AuthProvider: Cleaning up auth subscription')
        subscription.unsubscribe()
      }
    } else {
      console.error('❌ AuthProvider: Cannot set up auth listener - Supabase client not available')
      setLoading(false)
    }
  }, [])

  const signOut = async () => {
    console.log('🚪 AuthProvider: Signing out...')
    if (supabase) {
      try {
        const { error } = await supabase.auth.signOut()
        if (error) {
          console.error('❌ AuthProvider: Error signing out:', error)
        } else {
          console.log('✅ AuthProvider: Sign out successful')
        }
      } catch (error) {
        console.error('❌ AuthProvider: Exception during sign out:', error)
      }
    } else {
      console.error('❌ AuthProvider: Cannot sign out - Supabase client not available')
    }
  }

  const value = {
    user,
    session,
    loading,
    signOut,
  }

  console.log('🔐 AuthProvider: Current state:', {
    user: user ? `${user.email} (${user.id})` : 'null',
    session: session ? 'active' : 'null',
    loading
  })

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
} 