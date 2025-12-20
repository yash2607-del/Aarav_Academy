# Email Setup Instructions for Aarav Academy

## 📧 Setting Up Email Notifications for Query Form

Follow these steps to enable email notifications when students submit queries through your website.

---

## Step 1: Install Backend Dependencies

Navigate to the Server folder and install required packages:

```bash
cd Server
npm install
```

This will install:
- `express` - Web server framework
- `nodemailer` - Email sending library
- `cors` - Enable cross-origin requests
- `dotenv` - Environment variable management

---

## Step 2: Configure Email Settings

### For Gmail Users (Recommended):

1. **Enable 2-Step Verification** on your Google Account:
   - Go to https://myaccount.google.com/security
   - Click on "2-Step Verification" and turn it ON

2. **Create an App Password**:
   - Visit https://myaccount.google.com/apppasswords
   - Select "Mail" as the app and "Other" as the device
   - Name it "Aarav Academy"
   - Click "Generate"
   - Copy the 16-character password (no spaces)

3. **Update `.env` file** in the Server folder:

```env
PORT=5000

# Your Gmail address
EMAIL_USER=your-email@gmail.com

# The 16-character App Password (not your regular Gmail password)
EMAIL_PASS=abcd efgh ijkl mnop

# Email address where queries will be received
ADMIN_EMAIL=founder@aaravacademy.com
```

### For Other Email Providers:

Replace the `service` in [server.js](../Server/server.js#L18) with your provider:
- `'gmail'` - Gmail
- `'outlook'` - Outlook/Hotmail
- `'yahoo'` - Yahoo Mail

Or configure SMTP manually:
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.yourprovider.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

---

## Step 3: Start the Backend Server

### Development Mode (with auto-restart):
```bash
cd Server
npm run dev
```

### Production Mode:
```bash
cd Server
npm start
```

You should see: `Server is running on port 5000`

---

## Step 4: Start the Frontend

In a new terminal:

```bash
cd Client
npm run dev
```

---

## Step 5: Test the Setup

1. Open your website (usually http://localhost:5173)
2. Fill out the query form with test data
3. Click "Submit Enquiry"
4. Check:
   - Success message appears on the website
   - Admin receives an email with query details
   - Student receives a confirmation email

---

## 🎯 What Happens When a Query is Submitted?

1. **Student fills the form** with their details
2. **Frontend sends data** to the backend server
3. **Backend sends two emails**:
   - 📩 **To Admin**: Full query details with student information
   - ✅ **To Student**: Confirmation email thanking them for their interest
4. **Success message** is displayed to the student

---

## 🔧 Troubleshooting

### "Network error" when submitting:
- Make sure the backend server is running on port 5000
- Check if `http://localhost:5000/api/health` returns a response

### "Authentication failed" email error:
- Verify you're using an **App Password**, not your regular Gmail password
- Ensure 2-Step Verification is enabled
- Check for typos in EMAIL_USER and EMAIL_PASS

### Emails not received:
- Check spam/junk folder
- Verify ADMIN_EMAIL is correct in .env
- Check server terminal for error messages

### CORS errors:
- Ensure backend server is running
- Verify the fetch URL in QueryForm.jsx matches your backend URL

---

## 🚀 Production Deployment

When deploying to production:

1. **Update the API URL** in [QueryForm.jsx](../Client/src/components/QueryForm.jsx#L32):
   ```javascript
   const response = await fetch('https://your-backend-url.com/api/send-query', {
   ```

2. **Set environment variables** on your hosting platform (Heroku, Vercel, etc.)

3. **Use a dedicated email service** for better deliverability:
   - SendGrid
   - Mailgun
   - Amazon SES

---

## 📝 Customization

### Change Email Template:
Edit the HTML in [server.js](../Server/server.js#L43-L90) to customize the email design.

### Add More Fields:
1. Update the form in [QueryForm.jsx](../Client/src/components/QueryForm.jsx)
2. Add fields to the email template in [server.js](../Server/server.js)

### Change Response Time:
Modify the timeout in [QueryForm.jsx](../Client/src/components/QueryForm.jsx#L39):
```javascript
setTimeout(() => { ... }, 5000); // 5 seconds
```

---

## 🔒 Security Notes

- ✅ Never commit `.env` file to Git (already in .gitignore)
- ✅ Use App Passwords instead of regular passwords
- ✅ Keep your EMAIL_PASS secret
- ✅ Use environment variables for sensitive data

---

## 📞 Need Help?

If you encounter any issues, check:
1. Server terminal for error messages
2. Browser console for frontend errors
3. Email provider's security settings
4. Firewall/antivirus settings

---

**Happy Teaching! 📚✨**
