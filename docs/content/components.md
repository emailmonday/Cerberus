+++
title = "Components"
description = "About John Doe, a good human"
template = "default-template.html"
[extra]
page_id = "components"
+++

# Components

## Tables

`<table>`s are still the most dependable way to create layouts for HTML emails.

<figure>
  <pre><code class="language-html" data-lang="HTML">&lt;table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"&gt;
  &lt;tr&gt;
    &lt;td&gt; … &lt;/td&gt;
    &lt;td&gt; … &lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
  <div class="example example-padded"">
    <table width="100%">
      <tr>
        <td width="50%">Column 1</td>
        <td width="50%">Column 2</td>
      </tr>
    </table>
  </div>
</figure>

<table class="data-table">
  <tr><th>Attribute</th><th>Description</th></tr>
  <tr><td><code>role="presentation"</code></td><td>Tells screen readers to skip over the table’s tags and move straight into the content.</td></tr>
  <tr><td><code>cellspacing="0"</code></td><td>Negates unwanted spacing</td></tr>
  <tr><td><code>cellpadding="0"</code></td><td>Negates unwanted padding</td></tr>
  <tr><td><code>border="0"</code></td><td>Negates unwanted borders</td></tr>
  <tr><td><code>width="100%"</code></td><td>(Optional) Forces table take up all available horizontal space.</td></tr>
</table>


## Spacers

The best way to control spacing between components in HTML email is to use `padding` (applied to `<td>`’s) and `margin` (applied to `<h>` tags, `<p>`’s, `<ol>`’s, `<li>`’s, etc.).

However `padding` and `margin` cannot be used reliably to space out `<table>`’s or `<tr>`’s. In these cases, it's best to use a spacer to create separation.

<pre><code class="language-html" data-lang="HTML">&lt;tr&gt;
  &lt;td aria-hidden="true" height="30" style="font-size: 0; line-height: 0px;"&gt;
    &amp;nbsp;
  &lt;/td&gt;
&lt;/tr&gt;</code></pre>

<table class="data-table">
  <tr><th>Attribute</th><th>Description</th></tr>
  <tr><td><code>height</code></td><td>Size of the spacer.</td></tr>
  <tr><td><code>aria-hidden="true"</code></td><td>Hide the <code>&amp;nbsp;</code> from screen readers.</td></tr>
  <tr><td><code>&amp;nbsp;</code></td><td>Some email clients will collapse the spacer’s height if there’s no content.</td></tr>
  <tr><td><code>style="font-size: 0px;line-height: 0px;"</code></td><td>Some clients will add additional space inherited from the <code>&amp;nbsp;</code>’s <code>font-size</code> and <code>line-height</code>.</td></tr>
</table>

## Typography

It’s safe and accessible to use semantic HTML tags like `<h>`, `<p>`, and `<ul>` for text in email just as we do for the web. The main difference in email is that [CSS should be written inline](https://stackoverflow.design/email/guidelines/faq#why-do-we-have-to-write-css-inline?) to specify intended styles (like the color of an anchor tag) and zero out unintended defaults (like the default margin around a `<p>` tag).

### Headlines

<figure>
  <pre><code class="language-html" data-lang="HTML">&lt;h1 style=""&gt;Heading level 1&lt;/h1&gt;
&lt;h2 style=""&gt;Heading level 2&lt;/h2&gt;
&lt;h3 style=""&gt;Heading level 3&lt;/h3&gt;</code></pre>
  <div class="example example-padded"">
    <strong style="display: block; font-size: 3rem; margin: 0 0 40px; padding: 0; border: 0;">Heading 1</strong>
    <strong style="display: block; font-size: 2.25rem; margin: 0 0 30px; padding: 0; border: 0;">Heading 2</strong>
    <strong style="display: block; font-size: 1.75rem; margin: 0; padding: 0; border: 0;">Heading 3</strong>
  </div>
</figure>

### Paragraphs

<figure>
  <pre><code class="language-html" data-lang="HTML">&lt;p style=""&gt;Paragraph text&lt;/p&gt;
&lt;p style=""&gt;More paragraph text&lt;/p&gt;</code></pre>
  <div class="example example-padded"">
  <p>Paragraph text lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius eros suscipit, tincidunt leo eget, consequat libero.</p>
  <p>More paragraph text</p>
  </div>
</figure>

### Lists

<figure>
  <pre><code class="language-html" data-lang="HTML">&lt;ul style="padding: 0; margin: 0 0 15px 0; list-style-type: disc;"&gt;
  &lt;li style="margin: 0 0 10px 30px;"&gt;Unordered list item&lt;/li&gt;
  &lt;li style="margin: 0 0 10px 30px;"&gt;Unordered list item&lt;/li&gt;
  &lt;li style="margin: 0 0 10px 30px;"&gt;Unordered list item&lt;/li&gt;
&lt;/ul&gt;
&nbsp;
&lt;ol style="padding: 0; margin: 0 0 15px 0; list-style-type: decimal;"&gt;
  &lt;li style="margin: 0 0 10px 30px;"&gt;Ordered list item&lt;/li&gt;
  &lt;li style="margin: 0 0 10px 30px;"&gt;Ordered list item&lt;/li&gt;
  &lt;li style="margin: 0 0 10px 30px;"&gt;Ordered list item&lt;/li&gt;
&lt;/ol&gt;</code></pre>
<div class="example example-padded"">
  <ul>
    <li>Unordered list item</li>
    <li>Unordered list item</li>
    <li>Unordered list item</li>
  </ul>
  <ol>
    <li>Ordered list item</li>
    <li>Ordered list item</li>
    <li>Ordered list item</li>
  </ol>
</div>
</figure>

### Links

<figure>
  <pre><code class="language-html" data-lang="HTML">&lt;a href="" style="color: teal;"&gt;Link text&lt;/a&gt;</code></pre>
  <div class="example example-padded"">
    <a href="$" style="color: teal;">Link text</a>
  </div>
</figure>

#### Auto-detected links

Some email clients auto-detect certain text strings (like dates, times, and locations) and automatically convert them into hyperlinks. We can’t *remove* the link, but we can make the link *appear* like the text around it by negating a few CSS styles.

<figure>
  <pre><code class="language-html" data-lang="HTML">&lt;style&gt;
  a[x-apple-data-detectors],  /* iOS */
  .aBn,  /* Gmail */
  .unstyle-auto-detected-links a {
    border-bottom: 0 !important;
    cursor: default !important;
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
&lt;/style&gt;
&nbsp;
&lt;p class="unstyle-auto-detected-links"&gt;
  Our mailing address is 123 Fake St.
&lt;/p&gt;</code></pre>
  <div class="example example-padded"">
    <p style="">Our mailing address is <a href="https://www.google.com/maps/place/123+Fake+Street,+Oak+Lawn,+IL+60453/@41.7252322,-87.7508841,17z/data=!3m1!4b1!4m5!3m4!1s0x880e3bd3bb6db18d:0x6582323d7a833d16!8m2!3d41.7252282!4d-87.7486954" style="border-bottom: 0 !important; cursor: default !important; color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important;">123 Fake St</a>.</p>
    <p>The mail address is a link ☝️</p>
  </div>
</figure>


In this example, some email clients will detect "123 Fake St." as a location and automatically add an unstyled `<a href="">` tag that links to a maps product like Google Maps or Apple Maps. We can't prevent this from happening, but we can make the link appear like the surrounding body text by including a `unstyle-auto-detected-links` class in the container tag.

<aside data-emoji="💁🏻">Using <code>class="unstyle-auto-detected-links"</code> applies styles defined in the <code>&lt;style&gt;</code> tag, so only email clients that support <code>&lt;style&gt;</code> in <code>&lt;head&gt;</code> will render these styles.</aside>

### Prevent Text Wrapping

A non-breaking space (`&nbsp;`) can be used to prevent a group of words from breaking onto multiple lines. Useful for keeping names together and preventing typographic orphans and widows.

<pre><code class="language-html" data-lang="HTML"> I want these&amp;nbsp;words to stay together and prevent&amp;nbsp;widows.</code></pre>

🙏 [Rob Berinti’s TEDC ’15 talk on Typography](https://drive.google.com/open?id=0B2uzG2bvD431aWsyTXRnVG94S3c)

### Web fonts

Sometimes we use web fonts in emails to match the aesthetic of a marketing campaign or announcement. Web fonts [don’t have great support in email clients](https://www.campaignmonitor.com/css/text-fonts/font-face/), so here’s how we ensure our web font displays in as many email clients as possible:

1. Include an external stylesheet at the top of the email’s `<head>` tag. Sites like Google Fonts provide this code.
2. Windows Outlook sometimes chokes on web font references and defaults everything to Times New Roman. To avoid this, wrap the web font reference in a `<!--[if !mso]>` tag (so Windows Outlook ignores it) and define a fallback font for Windows Outlook inside a `<!--[if mso]>` tag.
3. Lastly, reference the web font at the beginning of the font stack, followed by a system fallback font for email clients that can’t display (and ignore) the web font.

<figure>
  <pre><code class="language-html" data-lang="HTML">&lt;head&gt;
  &lt;!--[if mso]&gt;
  &lt;style&gt;
    * {
      font-family: sans-serif !important;
    }
  &lt;/style&gt;
  &lt;![endif]--&gt;
&nbsp;
  &lt;!--[if !mso]&gt;
  &lt;link href='https://fonts.googleapis.com/css2?family=Lobster&display=swap' rel='stylesheet' type='text/css'&gt;
  &lt;![endif]--&gt;
&lt;/head&gt;
&nbsp;
&lt;body&gt;
  &lt;p style="font-family: 'Lobster', cursive;"&gt;Text in Lobster in email clients that support web fonts.&lt;/p&gt;
&lt;/body&gt;</code></pre>
  <div class="example example-padded" style="text-align: center;">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
    <p style="font-family: 'Lobster', cursive; font-size: 2rem;">Text in Lobster in email clients that support web fonts.</p>
    <p style="font-size: 1rem; line-height: 1.5; color: #64748B; max-width: 500px; margin-left: auto; margin-right: auto;">But seriously please don't actually use Lobster in your email, I'm just trying to show how web fonts work.</p>
  </div>
</figure>

## Images

All email clients can display `.png`, `.gif`, and `.jpg` images displayed with the `<img>` tag. `.svg` images are not well supported, regardless of how they’re referenced, so avoid using these.

Most images should be coded responsive by default, meaning they’ll scale down proportionately in small viewports. It’s safest to code all images this way, even if they don’t end up scaling in practice. However if we’re confident that an image will never scale, we can display a non-responsive image using less code.

<figure>
  <pre><code class="language-html" data-lang="HTML">&lt;!-- Responsive --&gt;
&lt;img src="https://fakeimg.pl/1280x600" width="640" height="" alt="alt_text" border="0" style="width: 100%; max-width: 640px; height: auto; display: block;" class="g-img"&gt;
&nbsp;
&lt;!-- Static --&gt;
&lt;img src="https://fakeimg.pl/256" width="128" height="128" alt="alt_text" border="0" style="display: block;"&gt;</code></pre>
  <div class="example example-padded"">
    <img src="https://fakeimg.pl/600x200" style="width: 100%; max-width: 100%;">
    <br>
    <img src="https://fakeimg.pl/200">
  </div>
</figure>

<table class="data-table">
  <tr><th>Name</th><th>Type</th><th>Notes</th></tr>
  <tr><td><code>src</code></td><td><code>attribute</code><td>Use full <code>https://</code> absolute path reference.</td></tr>
  <tr><td><code>height</code></td><td><code>attribute</code><td>Set to intended desktop width.</td></tr>
  <tr><td><code>width</code></td><td><code>attribute</code><td>Optional. Use only for images that won’t scale.</td></tr>
  <tr><td><code>border</code></td><td><code>attribute</code><td>Always set to 0 to avoid blue outlines on image links.</td></tr>
  <tr><td><code>alt</code></td><td><code>attribute</code><td>Always include but can be left empty if image is ornamental (Eg. <code>alt=""</code>).</td></tr>
  <tr><td><code>width</code></td><td><code>inline CSS</code><td>[Responsive] Always set to <code>100%</code> for responsive images. Optional for static images.</td></tr>
  <tr><td><code>max-width</code></td><td><code>inline CSS</code><td>[Responsive] Always set to intended desktop width. Optional for static images.</td></tr>
  <tr><td><code>height</code></td><td><code>inline CSS</code><td>[Responsive] Always set to <code>auto</code> for responsive images. Optional for static images.</td></tr>
  <tr><td><code>display</code></td><td><code>inline CSS</code><td>Generally good practice to use <code>display:block;</code> when possible since it negates a few pixels of unwanted space below images in some clients.</td></tr>
  <tr><td><code>.g-img</code></td><td><code>class</code><td>Advisable for images larger than ~300px wide. Prevents <a href="https://www.emailonacid.com/blog/article/email-development/prevent-gmail-from-displaying-image-download-button-in-email/">gmail from displaying an image download icon over images</a>.</td></tr>
</table>

<aside data-emoji="💁🏻">Every image that should <b>scale down</b> in small screens should have a <code>width: 100%; max-width: (desktop-width)px;</code> in it's <code>style=""</code> attribute. <code>(desktop-width)px;</code> is the largest size an image should appear in on desktop. This allows images to scale down when their desktop width exceeds the width of its container.</aside>

## Backgrounds

### Background Colors

Solid background colors are very well supported in email clients using the `bgcolor` attribute, or `background-color` or `background` CSS properties.

<figure>
  <pre><code class="language-html" data-lang="HTML">&lt;!-- Using HTML attributes --&gt;
&lt;table bgcolor="#9C36B5"&gt;
  &lt;tr&gt;
    &lt;td&gt; … &lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
&nbsp;
&lt;!-- Using inline CSS --&gt;
&lt;table style="background-color: #9C36B5;"&gt;
  &lt;tr&gt;
    &lt;td&gt; … &lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
  <div class="example" style="background-color: #9C36B5; padding: 6em 3em; text-align: center;">
    <strong style="font-size: 3rem; color: #fff;">My text</strong>
  </div>
</figure>

### Background Images

Background images allow us to place additional HTML content on top of them, one of the few reliable ways to provide layering possibilities in email. A benefit of using background images over foreground images is, when paired with a background color, the HTML content on top of the background image remains accessible even when images are disabled.

Background images can be complicated to implement in email, as many properties need to be defined once in CSS and *again* in VML for Windows Outlook and Win10 Mail.

<figure>
  <pre><code class="language-html" data-lang="HTML">&lt;td valign="middle" style="background-image: url('https://www.website.com/path/to/image.png'); background-position: center center; background-size: cover; background-color: #000000;"&gt;
    &lt;!--[if gte mso 9]&gt;
    &lt;v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:680px;height:220px;"&gt;
    &lt;v:fill type="tile" src="https://www.website.com/path/to/image.png" color="#000000"/&gt;
    &lt;v:textbox inset="0,0,0,0"&gt;
    &lt;![endif]--&gt;
    &lt;div&gt;
      &lt;table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"&gt;
        &lt;tr&gt;
          &lt;td style="padding: 60px; color: #ffffff; font-family: arial, sans-serif; font-size: 15px; text-align: center;"&gt;
            Foreground HTML content.
          &lt;/td&gt;
        &lt;/tr&gt;
      &lt;/table&gt;
    &lt;/div&gt;
    &lt;!--[if gte mso 9]&gt;
    &lt;/v:textbox&gt;
    &lt;/v:rect&gt;
    &lt;![endif]--&gt;
  &lt;/td&gt;</code></pre>
  <div class="example" style="background: url('/images/figure-unsplash.avif') center center repeat; padding: 6em 3em; text-align: center;">
    <strong style="font-size: 3rem; color: #fff;">My text</strong>
  </div>
</figure>

<table class="data-table">
  <tr><th>Name</th><th>Type</th><th>Notes</th></tr>
  <tr><td><code>background-image</code></td><td><code>inline CSS</code><td>Always set and use full <code>https://</code> reference.</td></tr>
  <tr><td><code>background-position</code></td><td><code>inline CSS</code><td>Optional to set the size of the image.</td></tr>
  <tr><td><code>background-size</code></td><td><code>inline CSS</code><td>Optional to set the position of the image.</td></tr>
  <tr><td><code>background-color</code></td><td><code>inline CSS</code><td>Always set to make foreground HTML legible if background image doesn’t load.</td></tr>
  <tr><td><code>width</code></td><td><code>VML in <code>&lt;v:rect&gt;</code></code><td>Always set to full container width. VML doesn’t account for padding, adjust as necessary.</td></tr>
  <tr><td><code>height</code></td><td><code>VML in <code>&lt;v:rect&gt;</code></code><td>Always set to full container height. VML doesn’t account for padding, adjust as necessary.</td></tr>
  <tr><td><code>src</code></td><td><code>VML in <code>&lt;v:fill&gt;</code></code><td>Always set and use full <code>https://</code> reference.</td></tr>
  <tr><td><code>color</code></td><td><code>VML in <code>&lt;v:fill&gt;</code></code><td>Always set to make foreground HTML legible if background image doesn’t load.</td></tr>
</table>

<aside data-emoji="💁🏻">Windows Outlook and Win10 Mail cannot scale background images, so the image referenced in VML should be prepared @1x. Most other email clients can scale background images defined in CSS, so using @2x images is advisable.</aside>

## Buttons

Buttons are the primary way for users to take action from an email. Buttons should have ample click / tap space and describe their actions. Creating a button that displays consistently across email clients requires multiple HTML tags.

<figure>
  <pre><code class="language-html" data-lang="HTML">&lt;style&gt;
  .button-td-primary:hover,
  .button-td-primary:focus {
    background: #555555 !important;
  }
&lt;/style&gt;
  &nbsp;
&lt;table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: auto;"&gt;
  &lt;tr&gt;
    &lt;td class="button-td button-td-primary" style="border-radius: 4px; background: #222222;"&gt;
      &lt;a class="button-a button-a-primary" href="https://google.com/" style="background: #222222; border: 1px solid #000000; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; display: block; border-radius: 4px;"&gt;Primary Button&lt;/a&gt;
    &lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
  <div class="example example-padded">
    <style>
      .ex-button:hover,
      .ex-button:focus {
        background: #555555 !important;
      }
      @media (prefers-color-scheme: dark) {
        .ex-button {
          background: #ffffff !important;
          color: #222222 !important;
        }
        .ex-button:hover {
          background: #cccccc !important;
        }
      }
    </style>
    <a href="#" class="ex-button" style="background: #222; color: #fff; padding: 13px 17px; display: inline-block; border-radius: 4px; text-decoration: none; transition: all 100ms ease-in;">Button Text</a>
  </div>
</figure>
<table class="data-table">
  <tr><th>Name</th><th>Description</th></tr>
  <tr><td><code>.button-td</code></td><td>Provides transition effects on <code>:hover</code> where supported.</td></tr>
  <tr><td><code>.button-a</code></td><td>Provides transition effects on <code>:hover</code> where supported.</td></tr>
  <tr><td><code>.button-td-primary</code></td><td>Also provides <code>:hover</code> and dark mode styles where supported.</td></tr>
  <tr><td><code>.button-a-primary</code></td><td>Also provides <code>:hover</code> and dark mode styles where supported.</td></tr>
</table>

<aside data-emoji="💁🏻">
  Some styles are duplicated between the <code>&lt;a&gt;</code> and its parent <code>&lt;td&gt;</code>. Desktop Outlook and Office 365 on Windows don't style links as block levels tags, so we need to style the <code>&lt;td&gt;</code> to match the <code>&lt;a&gt;</code> to make it appear as a button.
  <img src="/images/figure-button.svg" alt="">
</aside>
