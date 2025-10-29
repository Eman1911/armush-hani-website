# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended)
4. Follow the instructions to connect your Gmail account
5. **Note down your Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** פנייה חדשה מהאתר - {{subject}}

**Content:**
```
שלום,

קיבלת פנייה חדשה מהאתר:

שם: {{from_name}}
אימייל: {{from_email}}
טלפון: {{phone}}
נושא: {{subject}}
הודעה:
{{message}}

---
נשלח מהאתר של ערמוש האני
```

4. **Note down your Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find "Public Key" section
3. **Note down your Public Key** (e.g., `abc123def456`)

## Step 5: Update Configuration
1. Open `/src/config/emailjs.ts`
2. Replace the placeholder values:
   - `YOUR_SERVICE_ID` → Your actual Service ID
   - `YOUR_TEMPLATE_ID` → Your actual Template ID  
   - `YOUR_PUBLIC_KEY` → Your actual Public Key

## Step 6: Test
1. Save the file
2. Go to your contact page
3. Fill out and submit the form
4. Check your email (eman@hanielec.com) for the message!

## Troubleshooting
- Make sure all IDs are correct
- Check that Gmail is properly connected
- Verify the template variables match exactly
- Check browser console for any errors
