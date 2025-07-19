// Create a utility function to handle image paths safely
export function getSafeImagePath(path: string): string {
    // List of known available images
    const availableImages = [
      "/Pearl_A.png",
      "/Pearl_sign.png",
      "/diverse-avatars.png",
      "/oecsnavlogo.png",
      "/placeholder-4d0eb.png",
      "/placeholder-34akh.png",
      "/placeholder-dzl0x.png",
      "/placeholder-ip3jd.png",
      "/placeholder-2qkf4.png",
      "/placeholder-wxkp3.png",
      "/placeholder-m5w1r.png",
      "/placeholder-nnht8.png",
      "/placeholder-oti02.png",
      "/placeholder-h9shi.png",
      "/placeholder-z3jap.png",
      "/placeholder-9gvl3.png",
    ]
  
    // If the requested path is in our list, return it
    if (availableImages.includes(path)) {
      return path
    }
  
    // If the path is psticker.png, return Pearl_sign.png as fallback
    if (path === "/psticker.png") {
      return "/Pearl_sign.png"
    }
  
    // For other missing images, return a default placeholder
    return "/placeholder-z3jap.png"
  }
  