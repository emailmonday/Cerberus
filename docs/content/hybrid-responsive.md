+++
title = "Hybrid vs. Responsive"
description = "Hybrid email design is similar to responsive email design, but without the use of media queries. Instead, the hybrid design uses fluid tables and images with max-width properties to create email layouts."
template = "default-template.html"
[extra]
page_id = "hybrid-responsive"
+++

# Hybrid vs. Responsive

## Responsive

Media queries are a standard way to optimize layouts for small screen sizes on the web. In the email world, though, there are some small screen scenarios where media queries aren’t supported (eg. [some Gmail Apps](https://cdn-images-1.medium.com/max/2000/1*JGe_A7b8LiHZfeSGzNZE9w.png)) or only partially supported (eg. some Android device native mail apps).

<table class="data-table">
  <tr><th>Class</th><th>Description</th></tr>
  <tr><td><code>stack-column</code></td><td>Makes table columns 100% wide and stacks them in source order.</td></tr>
  <tr><td><code>stack-column-center</code></td><td>Makes table columns 100% wide, stacks them in source order, and centers everything inside.</td></tr>
</table>

<aside data-emoji="💁🏻">
  Media queries are a standard way to optimize layouts for small screen sizes on the web. In the email world, though, there are some small screen scenarios where media queries aren’t supported (eg. <a href="https://cdn-images-1.medium.com/max/2000/1*JGe_A7b8LiHZfeSGzNZE9w.png">some Gmail Apps</a> or only partially supported (eg. some Android device native mail apps).
</aside>

## Hybrid

Hybrid design uses `inline-block`, `max-width`, `min-width`, and [ghost tables](https://stackoverflow.design/email/base/mso#ghost-tables) stack columns without media queries while imposing a fixed, desktop width for Outlook.

<pre><code class="language-html" data-lang="HTML">&lt;tr&gt;
  &lt;td&gt;
    &lt;!--[if mso]&gt;
    &lt;table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"&gt;
    &lt;tr&gt;
    &lt;td width="300"&gt;
    &lt;![endif]--&gt;
    &lt;div style="display:inline-block; width:100%; min-width:200px; max-width:300px;"&gt;
      Column 1
    &lt;/div&gt;
    &lt;!--[if mso]&gt;
    &lt;/td&gt;
    &lt;td width="300"&gt;
    &lt;![endif]--&gt;
    &lt;div style="display:inline-block; width:100%; min-width:200px; max-width:300px;"&gt;
      Column 2
    &lt;/div&gt;
    &lt;!--[if mso]&gt;
    &lt;/td&gt;
    &lt;/tr&gt;
    &lt;/table&gt;
    &lt;![endif]--&gt;
  &lt;/td&gt;
&lt;/tr&gt;</code></pre>

In this example, the two columns will display side-by-side on wide, desktop displays and stack on top of each other in narrow, mobile displays.

Once a hybrid baseline is set, media queries can be used to fine-tune a responsive email layout further in email clients that support it.

🙏 [Fabio Carneiro’s TEDC15 talk files](https://github.com/fcarneiro/tedc15_template), as well as [Action Rocket's](http://labs.actionrocket.co/the-hybrid-coding-approach) and [Nicole Merlin's](http://webdesign.tutsplus.com/tutorials/creating-a-future-proof-responsive-email-without-media-queries--cms-23919) articles on hybrid email design.
