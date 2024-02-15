+++
title = "Best Practices"
description = "Emails don’t need to look the same in every email client, but there are some guidelines to make sure they render properly in email clients and are as accessible as possible."
template = "default-template.html"
[extra]
page_id = "best-practices"
+++

# Best Practices

[Emails don’t need to look the same in every email client](http://doemailshavetolookthesameineveryclient.com/), but there are some guidelines to make sure they render properly in email clients and are as accessible as possible.

## General rules and principles

Cerberus strives to support email clients with low levels of HTML & CSS support (namely Microsoft Outlook, a [few versions of Gmail](https://emails.hteumeuleu.com/trying-to-make-sense-of-gmail-css-support-after-the-2016-update-53c15151063a), and a handful of [mostly non-US clients](https://emails.hteumeuleu.com/should-we-stop-inlining-styles-in-emails-8c3b64f0d407)). It’s safest to code emails like it’s 1999 (still).

That means:

- CSS2 instead of CSS3
- `<table>`s instead of `<div>`s
- Raster images (like PNGs) instead of vector (like SVGs)
- Inline CSS instead of embedded styles or external stylesheets

[Can I Email?](https://www.caniemail.com/) and [Campaign Monitor’s guide to CSS](https://www.campaignmonitor.com/css/) are good references for HTML & CSS support in email.

## HTML and CSS

1. **Use `<table border="0" cellpadding="0" cellspacing="0" role="presentation">` when creating new tables.** This negates any unwanted spacing and borders and tells screen readers to skip over the table’s tags and move straight into the content.
2. **When in doubt, nest another table.** For finer control of your HTML, nest tables when building emails.
3. **Each `<td>` that contains text should have basic font properties inlined.** Do not rely on inheritance from parent elements for `font-family`, `font-size`, `font-weight`, `line-height` and `color` properties. Outlook on Windows is known to reset these properties to values from `<body>` every time you nest text in another table.
4. **Use padding for spacing in table cells.** Margins aren’t fully supported on tables and container elements.
5. **Use margin for typography.** Margins *are* fully supported for headlines, paragraphs, and lists.
6. **Use `align` for layout instead of `float`, `grid`, or `flexbox`.** Floats aren’t supported in Outlook and email clients don’t have good support for modern CSS layout properties in general.
7. **HTML attributes are still relevant.** Most styling is done using CSS. But because some email clients use antiquated rendering engines, they tend to better understand HTML attributes like `align`, `valign`, `height`, and `width`.
8. **Define color as `#ffffff` instead of `#fff` or `rgb(1,2,3)`.** Six-digit hex is supported in inline CSS as well as HTML attributes like `bgcolor` that are still supported in email.
9. **Don’t forget about [preview text](https://stackoverflow.design/email/guidelines/faq#what-is-preview-text?).** We can specify the text that appears beneath subject lines in many email clients. If preview text is not included, this space will be populated by the email’s content.

## Images

1. **Save images as PNG, GIF, or JPG instead of SVG.** SVG has almost no support in email, no matter how it’s referenced (inline, Base64, `.svg`).
2. Save images as @2x and scale them down using HTML attributes. Since SVG isn’t supported, a 20x20 raster image coded like `<img src="40x40-image.png" height="20" width="20">` displays crisply on high-definition screens.

## Accessibility

1. Include `role="presentation"` on all tables used for layout. This prevents screen readers from reading aloud the structure of each table cell.
2. **Include `aria-hidden="true"` on presentational elements.** This prevents screen readers from reading aloud something that's not content.
3. **Use HTML1 semantic tags whenever possible.** Tags like `<p>` and `<h>` allow screen readers to quickly jump from section to section. Tags like `<strong>` and `<em>` give text more importance.
4. **Include an `alt` attribute on every image.** Be descriptive and use `alt` to help readers “see” the email if images aren’t displayed. Use an empty `alt=""` for images a screen reader should skip (eg. decorative images). Screenreaders will dictate the filename of images without an `alt` attribute (eg. "icon dash checkmark dot png"). [More on alt text](https://stackoverflow.design/content/examples/alt-text/).
5. **Avoid “Click Here” or “Learn More” link copy.** It helps an email avoid spam filters and gives context about the link to folks using screen readers or dictation software.
6. **Create a plain text version of every email.** It helps us avoid spam filters, some email clients don’t support HTML, and some people just prefer plain text. They also respond better to things like changing font size, family, and color, and work well with screen magnifiers.

## Testing

Tools to ensure emails look as they should when they’re sent.

- [Litmus](https://www.litmus.com/) and [Email on Acid](https://www.emailonacid.com/) allow us to preview screenshots of our emails across 90+ email clients on multiple devices. Both have code editors built in (Eg. [Litmus Builder](https://litmus.com/email-builder)), which helps troubleshoot and fix bugs in actual email clients.
- [Parcel](https://useparcel.com/) - A web-based code editor built specifically for email development.
- [Putsmail](https://putsmail.com/) - Send yourself test emails.
