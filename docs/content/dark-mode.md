+++
title = "Dark Mode"
description = "A guide to adding, using, and removing dark mode support to Cerberus's email templates using the prefers-color-scheme CSS media feature and utility classes."
template = "default-template.html"
[extra]
page_id = "dark-mode"
+++

# Dark Mode

Cerberus includes patterns for dark mode using the `prefers-color-scheme` media feature to detect if the user’s operating system has requested a light or dark color theme.

## Overview

Cerberus defines dark mode styles in each template’s `<head>` in the form of immutable utility classes. These utility classes can be applied to HTML tags to override their default light mode CSS styles and apply new styles for dark mode.

<figure>
  <pre><code class="language-html" data-lang="HTML">&lt;style&gt;
  @media (prefers-color-scheme: dark) {
    .my-class {
      color: white !important;
    }
  }
&lt;/style&gt;
&nbsp;
&lt;p style="color: #000000;" class="my-class"&gt;
  Text that is black in light mode and white in dark mode.
&lt;/p&gt;
</code></pre>
</figure>

Cerberus provides a few patterns for dark mode, which are meant to be edited and built upon.

<aside data-emoji="💁🏻">
Similar to responsive utility classes, dark mode utility classes are suffixed with <code>!important</code> to ensure they override inline styles.
</aside>

## Examples

### Changing colors

In this example, the color of the `<p>` tag is automatically changed and the background of the `<td>` is changed using a CSS utility class:

<figure>
  <pre><code class="language-html" data-lang="HTML">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;style&gt;
      @media (prefers-color-scheme: dark) {
        .darkmode-bg {
          background: #222222 !important;
        }
        p {
          color: #F7F7F9 !important;
        }
      }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;table&gt;
      &lt;tr&gt;
        &lt;td style="background-color: #F7F7F9; color: #111;" class="darkmode-bg"&gt;
          &lt;p&gt;Some text goes here.&lt;/p&gt;
        &lt;/td&gt;
      &lt;/tr&gt;
    &lt;/table&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
  <div class="example example-padded">
    <table width="100%">
      <tr>
        <td width="50%" style="padding: 20px; text-align: center;">
          Text in light mode
        </td>
        <td width="50%" style="background-color: #000; color: #eee; padding: 20px; text-align: center;">
          Text in dark mode
        </td>
      </tr>
    </table>  
  </div>
</figure>

### Swapping images

Since `.svg` graphics are not well supported in email clients, email relies on raster images like `.png`, `.jpg`, and `.gif`. Since we can't use a single raster image and recolor it based on the color scheme preference, we include two separate image files (one for light mode and one for dark mode) and display one at a time using the `prefers-color-scheme` media feature.

<figure>
  <pre><code class="language-html" data-lang="HTML">&lt;style&gt;
  @media (prefers-color-scheme: dark) {
    .display-only-in-dark-mode {
      display: inline-block !important;
    }
    .display-only-in-light-mode {
      display: none !important;
    }
  }
&lt;/style&gt;
&nbsp;
&lt;img src="logo-light-mode.png" class="display-only-in-light-mode"&gt;
&lt;!--[if !mso]&gt;&lt;!--&gt;
&lt;img src="logo-dark-mode.png" class="display-only-in-dark-mode"&gt;
&lt;!--&lt;![endif]--&gt;
</code></pre>
  <div class="example example-padded">
    <table width="100%">
      <tr>
        <td width="50%" style="background-color: #eee; padding: 20px; text-align: center;">
          <img src="https://fakeimg.pl/300x80/333/ddd/?text=Light+Mode" style="width: 100%;">
        </td>
        <td width="50%" style="background-color: #000; color: #eee; padding: 20px; text-align: center;">
        <img src="https://fakeimg.pl/300x80/EEE/333/?text=Dark+Mode" style="width: 100%;">
        </td>
      </tr>
    </table>  
  </div>
</figure>

<aside data-emoji="💁🏻">
Windows Outlook doesn't support the CSS to hide and display images using the <code>prefers-color-scheme</code> media feature, so it displays both light <i>and</i> dark mode images simultaneously. We can avoid this by <b>hiding</b> the second image file from Outlook using <code>&lt;!--[if !mso]&gt;&lt;!--&gt;</code> tags. Unfortunately this means we can't swap light and dark mode images in Windows Outlook (at least I haven't found a way to do so yet).
</aside>


## Removing Dark Mode

If you’d rather not include dark mode, you can safely remove the dark mode styles inside the `<head>`:

<pre><code class="language-css" data-lang="CSS">/* Dark Mode Styles : BEGIN */
@media (prefers-color-scheme: dark) {
  …
}
/* Dark Mode Styles : END */</code></pre>
