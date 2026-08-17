# F5.One Studio — One Page Website

A lightweight, responsive website intended for GitHub Pages.

## Files

- `index.html` — website structure
- `style.css` — styling
- `script.js` — booking form / WhatsApp logic
- `CNAME` — GitHub Pages custom domain (`f5one.in`)
- `assets/` — add your property photographs here

## Image filenames

Add your final photographs using these filenames:

- `assets/hero.jpg`
- `assets/gallery-01.jpg`
- `assets/gallery-02.jpg`
- `assets/gallery-03.jpg`
- `assets/gallery-04.jpg`
- `assets/gallery-05.jpg`
- `assets/gallery-06.jpg`

You can use JPG, PNG or WebP. If you change the filenames, update them in `index.html`.

## Booking behaviour

The booking form currently does not need a backend.

When the visitor submits it, the website opens WhatsApp with a pre-filled booking enquiry containing:

- Name
- Phone
- Date
- Duration
- Shoot type
- Team size
- Shoot details

WhatsApp destination:
+91 84479 80353

This is ideal for the first version because you can manually approve every shoot before accepting payment.

## GitHub Pages deployment

1. Create a new GitHub repository.
2. Upload all files in this folder.
3. Open repository **Settings**.
4. Go to **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select `main` and `/ (root)`.
7. Save.
8. GitHub will provide the live website URL.

## Custom domain

The brand can be written as `F5.One`, but the website domain must stay `f5one.in`.
Keep the root `CNAME` file exactly as:

```text
f5one.in
```

In GitHub, add the same domain under:

GitHub Repository → Settings → Pages → Custom Domain

Also update your registrar's DNS records according to GitHub Pages instructions.

## Future upgrade

When needed, the booking form can be connected to:

- Google Sheets via Google Apps Script
- Email notifications
- Calendar availability
- Razorpay deposit/payment
- Automated booking confirmations
