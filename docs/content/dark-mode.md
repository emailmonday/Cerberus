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

Cerberus defines dark mode styles in each template’s <head>. These styles can override styles for components (like buttons and text) and create utility classes that can be applied anywhere in a template’s HTML.

## Examples

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

In this example, the color of the `<p>` tag is automatically changed and the background of the `<td>` is changed using a utility class.

Cerberus provides a pattern for creating and applying dark mode styles. These dark mode patterns are meant to be edited and built upon.

## Removing Dark Mode

If you’d rather not include dark mode, you can safely remove the dark mode styles inside the `<head>`:

<pre><code class="language-css" data-lang="CSS">/* Dark Mode Styles : BEGIN */
@media (prefers-color-scheme: dark) {
  …
}
/* Dark Mode Styles : END */</code></pre>
