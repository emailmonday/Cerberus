+++
title = "Outlook Conditional CSS"
description = "Some versions of Windows Outlook use Microsoft Word as a rendering engine, which can lead to some odd rendering issues. Outlook conditional comments allow us to add or exclude code that is only read by these versions of Outlook."
template = "default-template.html"
[extra]
page_id = "outlook"
+++

# Outlook Conditional CSS

Windows Outlook 2003 and above use Microsoft Word as a rendering engine, which can lead to some weird rendering issues. Outlook conditional comments allow us to add bits of HTML that are only read by the Word-based versions of Outlook.

## Basic syntax

We can use **MSO** (**M**icro**s**oft **O**ffice) tags to add HTML / CSS anywhere in an email template. This code will be ignored by other email clients. Here’s what it looks like:

<pre><code class="language-html" data-lang="HTML">&lt;!--[if mso]&gt;
  &lt;table&gt;&lt;tr&gt;&lt;td&gt;
    /* Outlook-specific HTML content goes here. */
  &lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;
&lt;![endif]--&gt;</code></pre>

Only Outlook will render this table.

MSO tags can also be used to add styles targeting Outlook ([Outlook supports CSS in the `<head>`](https://www.campaignmonitor.com/css/style-element/style-in-head/)):

<pre><code class="language-html" data-lang="HTML">&lt;!--[if mso]&gt;
  &lt;style&gt;
    .example-class {
      /* Outlook-specific CSS goes here. */
    }
  &lt;/style&gt;
&lt;![endif]--&gt;</code></pre>

It’s the same thing we used to do to [target old versions of Internet Explorer](https://www.quirksmode.org/css/condcom.html), except it targets Microsoft Office.

## Ghost tables

The main way we use MSO tags in our emails is to create “ghost tables” so [hybrid emails](https://stackoverflow.design/email/base/responsiveness#hybrid-design) don’t fall apart in Outlook. Hybrid design uses `inline-block`, `max-width`, `min-width` to stack table columns. Outlook doesn’t support these CSS properties, so we use MSO tags to create “ghost tables” that apply a fixed width just for Outlook.

<pre><code class="language-html" data-lang="HTML">&lt;!--[if mso]&gt;
&lt;table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"&gt;
&lt;tr&gt;
&lt;td width="340"&gt;
&lt;![endif]--&gt;
  &lt;div style="display:inline-block; width:100%; min-width:200px; max-width:340px;"&gt;
    Outlook can’t render the CSS in this DIV but other email clients can, so we wrap this in a ghost table that replicates the DIV’s desktop style. In this case, a container 340px wide.
  &lt;/div&gt;
&lt;!--[if mso]&gt;
&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
&lt;![endif]--&gt;</code></pre>

Without the ghost table above, Outlook would display the `<div>` at 100% width. [Learn how we use ghost tables to make our emails responsive](https://stackoverflow.design/email/base/responsiveness#hybrid-design).

## Targeting specific Outlook versions

We usually target *all* versions of Outlook using `<!--[if mso]>`. But sometimes when testing emails in Litmus, an email looks ok in one Outlook version but is broken in another. It’s not common but it happens, and there are a few ways to target specific versions of Outlook while omitting others.

## Outlook versions

Using Microsoft Office version numbers allows you to target a specific Outlook version.

<table class="data-table">
  <tr><th>Outlook version(s)</th><th>Code</th></tr>
  <tr><td>All Windows Outlook</td><td><code>&lt;!--[if mso]&gt; your code &lt;![endif]--&gt;</code></td></tr>
  <tr><td>Outlook 2000</td><td><code>&lt;!--[if mso 9]&gt; your code &lt;![endif]--&gt;</code></td></tr>
  <tr><td>Outlook 2002</td><td><code>&lt;!--[if mso 10]&gt; your code &lt;![endif]--&gt;</code></td></tr>
  <tr><td>Outlook 2003</td><td><code>&lt;!--[if mso 11]&gt; your code &lt;![endif]--&gt;</code></td></tr>
  <tr><td>Outlook 2007</td><td><code>&lt;!--[if mso 12]&gt; your code &lt;![endif]--&gt;</code></td></tr>
  <tr><td>Outlook 2010</td><td><code>&lt;!--[if mso 14]&gt; your code &lt;![endif]--&gt;</code></td></tr>
  <tr><td>Outlook 2013</td><td><code>&lt;!--[if mso 15]&gt; your code &lt;![endif]--&gt;</code></td></tr>
  <tr><td>Outlook 2016</td><td><code>&lt;!--[if mso 16]&gt; your code &lt;![endif]--&gt;</code></td></tr>
</table>

## Conditional logic

Using operators allows you to create conditional expressions for targeting multiple Outlook versions.

<aside data-emoji="💁🏻">
⚠️ Cerberus is a relatively simple design and doesn't use these very often, if at all. But they’re here if you need them every once in a while.
</aside>

<table class="data-table">
  <tr><th>Code</th><th>Description</th><th>Example</th></tr>
  <td><code>&lt;gt&gt;</code></td><td>greater than</td><td><code>&lt;!--[if gt mso 14]&gt;<br>Everything above Outlook 2010<br> &lt;![endif]--&gt;</code></td></tr>
  <td><code>&lt;lt&gt;</code></td><td>less than</td><td><code>&lt;!--[if lt mso 14]&gt;<br>Everything below Outlook 2010<br> &lt;![endif]--&gt;</code></td></tr>
  <td><code>&lt;gte&gt;</code></td><td>greater than or equal to</td><td><code>&lt;!--[if gte mso 14]&gt;<br>Outlook 2010 and above<br>&lt;![endif]--&gt;</code></td></tr>
  <td><code>&lt;lte&gt;</code></td><td>less than or equal to</td><td><code>&lt;!--[if lte mso 14]&gt;<br>Outlook 2010 and below<br>&lt;![endif]--&gt;</code></td></tr>
  <td><code>&lt;|&gt;</code></td><td>or</td><td><code>&lt;!--[if (mso 12)|(mso 16)]&gt;<br>Outlook 2007 / 2016 only<br>&lt;![endif]--&gt;</code></td></tr>
  <td><code>&lt;!&gt;</code></td><td>not</td><td><code>&lt;!--[if !mso]>&gt;!--&gt;<br>All Outlooks will ignore this<br> &lt;![endif]--&gt;</code></td></tr>
</table>
