+++
title = "The Templates"
description = "Cerberus includes fluid, responsive, and hybrid templates, which descriptions and use cases for each."
template = "default-template.html"
[extra]
page_id = "templates"
+++

# The Templates

## Fluid Template

![example image](/images/template-fluid.svg "Fluid email template.")

This template focuses on a fluid layout that sizes itself using percentage-based widths to shrink horizontally on narrow screens. This email layout does not reconfigure at different screen sizes.

Good for simple transactional emails and single column layouts. If you want a basic template to handle rich text and images, this is a good baseline.

## Responsive Template

![example image](/images/template-responsive.svg "Responsive email template.")

Good for more complicated, shape-shifting email layouts that work on *some* mobile clients.

This template uses media queries to reconfigure the layout for different screen sizes for email clients that support media queries. However, mobile clients that don’t support media queries or the `<style>` tag will display a shrunk version of the desktop layout instead. This applies to some versions of Gmail ([still](https://litmus.com/blog/gmail-to-support-responsive-email-design)) and Yahoo, as well as a number of international email clients ([more info on that here](https://emails.hteumeuleu.com/should-we-stop-inlining-styles-in-emails-8c3b64f0d407#.57mlzfimq)).

If you’re already comfortable with media queries, the learning curve is relatively low. If total device coverage isn’t required, you can create a responsive email the same way you create a responsive website.

## Hybrid Template

![example image](/images/template-hybrid.svg "Hybrid email template.")

This template uses a hybrid approach to reconfigure the layout for different screen sizes for email clients regardless of media query support. At its core, it uses max-width and min-width to impose rigid baselines (allowing some movement) and imposes a fixed, wide width for Outlook who is shackled to the desktop anyway. Once a mobile-friendly baseline is set, media queries progressively enhance the email further in clients that support it.

If you have some email design experience, this template optimizes every popular email client. All the extra Outlook code can make these templates quite large and your maths have to be spot on for multi-column layouts.

## Archived Templates

Templates in the archived-versions folder are not currently being maintained and should be considered unsupported and deprecated. They are kept around for historical purposes. 💫

## Known Issues

Not necessarily bugs with the code in this repo, but a few things that could trip you up.

- Some ESPs don’t like URLs in HTML comments ([example](https://github.com/TedGoas/Cerberus/issues/222)). In this case, you can remove the URLs or even the entire HTML comment.

### CSS Inliners

I recommend against using a CSS inliner with Cerberus. Here’s why:

- Cerberus is supposed to be simple and should not require a dependency like a CSS inliner.
- The placement of Cerberus’s CSS is already optimized. The CSS in the <head> is meant only for email clients that parse CSS in this location. It doesn’t need to be inlined.
- There are some CSS selectors like :hover that don’t inline so well and cause errors in some CSS inliners.
- Inlining leads to code bloat. Not only does this impact download speeds, but some email clients like Gmail and iOS Outlook truncate messages after they exceed a certain file size.

I’m a fan of using snippets, available in most code editors. I understand CSS inliners help many folks, but if you use one with Cerberus, please do so at your own risk. I recommend [Lee Munroe’s CSS inliner](https://htmlemail.io/inline/) and hear good things about [Roadie](https://github.com/Mange/roadie).
