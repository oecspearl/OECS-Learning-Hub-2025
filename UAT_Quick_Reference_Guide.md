# OECS Learning Hub - UAT Quick Reference Guide

## Quick Start Checklist

### Pre-Testing Setup
- [ ] Test environment access confirmed
- [ ] Test accounts created and verified
- [ ] Test data prepared
- [ ] Browser compatibility confirmed
- [ ] Defect tracking system access

### Essential Test Accounts
| Role | Email | Password | Dashboard Path |
|------|-------|----------|----------------|
| Admin | admin@oecs.edu | admin123 | `/dashboard/admin` |
| Teacher | teacher@oecs.edu | teacher123 | `/dashboard/teacher` |
| Specialist | specialist@oecs.edu | specialist123 | `/dashboard/admin` |
| Principal | principal@oecs.edu | principal123 | `/dashboard/admin` |

## Critical Test Paths

### 1. User Journey - Teacher
1. **Login** → `/login` → teacher@oecs.edu / teacher123
2. **Dashboard** → Verify teacher-specific features
3. **Curriculum** → `/curriculum` → Browse by grade/subject
4. **Lesson Planning** → `/planner/create` → Create lesson plan
5. **Assessment** → `/quiz` → Generate quiz
6. **AI Assistant** → Open Pearl → Ask questions
7. **Resources** → `/resources` → Upload/organize resources

### 2. User Journey - Administrator
1. **Login** → `/login` → admin@oecs.edu / admin123
2. **Dashboard** → Verify admin features
3. **User Management** → `/dashboard/admin/users` → Manage users
4. **System Settings** → `/dashboard/admin/settings` → Configure system
5. **Analytics** → `/dashboard/admin/analytics` → View reports

## Key Features to Test

### High Priority
- [ ] **Authentication** - Login/logout, password reset
- [ ] **Role-based Access** - Verify permissions for each role
- [ ] **Lesson Planning** - Create, edit, save lesson plans
- [ ] **AI Assistant** - Pearl chat functionality
- [ ] **Curriculum Navigation** - Browse by grade/subject

### Medium Priority
- [ ] **Assessment Tools** - Quiz generation and management
- [ ] **Cross-Curricular Planning** - Multi-subject integration
- [ ] **Resource Management** - Upload, organize, share
- [ ] **Dashboard Analytics** - Reports and insights

### Low Priority
- [ ] **Accessibility Features** - Keyboard navigation, screen readers
- [ ] **Performance** - Page load times, responsiveness
- [ ] **Mobile Compatibility** - Tablet and phone testing

## Common Test Scenarios

### Lesson Plan Creation
```
1. Go to /planner/create
2. Fill form: Subject=Mathematics, Grade=3, Topic=Fractions
3. Click "Generate Lesson Plan"
4. Verify AI-generated content
5. Save lesson plan
6. Edit and verify changes persist
```

### Quiz Generation
```
1. Go to /quiz
2. Fill form: Title=Math Quiz, Subject=Mathematics, Grade=4
3. Set question count=10, difficulty=Medium
4. Click "Generate Quiz"
5. Verify questions are appropriate
6. Test editing capabilities
```

### AI Assistant Testing
```
1. Generate a lesson plan first
2. Open Pearl AI assistant
3. Ask: "How can I improve this lesson plan?"
4. Verify context-aware response
5. Ask follow-up questions
6. Test conversation continuity
```

## Defect Reporting Quick Template

```
**Defect ID**: [Auto-generated]
**Title**: [Brief description]
**Severity**: [Critical/High/Medium/Low]
**Environment**: [Browser/OS/Device]
**Steps**:
1. [Step 1]
2. [Step 2]
3. [Step 3]
**Expected**: [What should happen]
**Actual**: [What actually happened]
**Screenshots**: [If applicable]
```

## Performance Benchmarks

### Page Load Times
- **Homepage**: < 2 seconds
- **Dashboard**: < 3 seconds
- **Lesson Plan Creation**: < 5 seconds
- **AI Generation**: < 10 seconds
- **Curriculum Pages**: < 3 seconds

### Browser Support
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## Accessibility Checklist

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Enter/Space activate buttons
- [ ] Escape close modals/dropdowns
- [ ] Arrow keys navigate menus

### Screen Reader
- [ ] Proper heading hierarchy
- [ ] Form labels associated
- [ ] Alt text for images
- [ ] ARIA labels where needed

### Visual Accessibility
- [ ] High contrast mode works
- [ ] Font size adjustable
- [ ] Color contrast adequate
- [ ] Focus indicators visible

## Error Handling Tests

### Common Error Scenarios
1. **Network Disconnection** - Verify graceful handling
2. **Invalid Form Data** - Check validation messages
3. **Server Errors** - Verify user-friendly error pages
4. **Session Timeout** - Test re-authentication flow
5. **File Upload Errors** - Test various file types/sizes

## Security Testing Points

### Authentication
- [ ] Password requirements enforced
- [ ] Session timeout working
- [ ] Role-based access control
- [ ] Secure password reset

### Data Protection
- [ ] Sensitive data encrypted
- [ ] Input validation/sanitization
- [ ] SQL injection prevention
- [ ] XSS protection

## Mobile Testing Checklist

### Responsive Design
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

### Touch Interactions
- [ ] Tap targets adequate size
- [ ] Swipe gestures work
- [ ] Pinch-to-zoom functional
- [ ] Virtual keyboard handling

## Integration Testing

### Cross-Feature Interactions
1. **Lesson Plan → Assessment** - Create quiz from lesson
2. **Curriculum → Lesson Plan** - Link standards to lessons
3. **AI Assistant → Resources** - Suggest resources via Pearl
4. **Dashboard → Analytics** - View usage statistics

## Test Data Requirements

### Sample Content Needed
- **Lesson Plans**: 5-10 per subject/grade
- **Assessments**: 3-5 per subject/grade
- **Resources**: 20+ files (PDF, images, docs)
- **Users**: 2-3 per role type

## Sign-off Criteria

### Must Pass
- [ ] All critical test cases
- [ ] No security vulnerabilities
- [ ] Performance benchmarks met
- [ ] Accessibility standards met

### Should Pass
- [ ] All high-priority test cases
- [ ] Cross-browser compatibility
- [ ] Mobile responsiveness
- [ ] Error handling

### Nice to Have
- [ ] All medium-priority test cases
- [ ] Advanced features working
- [ ] Performance optimizations
- [ ] Enhanced accessibility

---

## Emergency Contacts

**Test Manager**: [Contact Info]
**Development Lead**: [Contact Info]
**System Administrator**: [Contact Info]
**Business Stakeholder**: [Contact Info]

---

*Use this guide alongside the main UAT protocols document for comprehensive testing coverage.* 