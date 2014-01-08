Cerberus
========

###A few responsive email patterns that go a long way

Coding regular emails is hard enough by itself. Making them responsive shouldn't add to the headache. A few simple, but solid patterns are all that's needed to optimize emails for small screens.

**That's what Cerberus is.**

It's just a few responsive email patterns that go a long way. The code blocks are compartmentalized so that they may be used, reused, and nested to build an email. Everything has good email client support, including Outlook, Android, and even mobile Gmail.

There are two templates, one that relies media queries and one that does not.

I wrote [a blog post](http://www.tedgoas.com/blog/cerberus-responsive-email-templates/) that goes into more detail on why I made this. Cerberus is [Responsive Email XX](https://github.com/TedGoas/Responsive-Email-XX)'s successor.

***

###`template-default.html`
![wireframe](https://raw.github.com/TedGoas/Cerberus/master/assets/wireframe-default.png)
* Forces columns into rows
* Uses fluid images
* Includes two breakpoints
* Works most everywhere for desktop
* Relies on media queries for narrow screens

***

###`template-fluid.html`
![wireframe](https://raw.github.com/TedGoas/Cerberus/master/assets/wireframe-fluid.png)
* Works most everywhere, including Mobile Gmail and Android 4.4 Mail
* Fluid layout using `max-width` to shrink email's width
* Fixed, wide layout for Outlook and Lotus 8

***

### Tools and Resources
* [Guide to CSS Support](http://www.campaignmonitor.com/css) from Campaign Monitor.
* [HTML Email Boilerplate](http://htmlemailboilerplate.com/) from Sean Powell.
* [Bulletproof Email Background Images](http://backgrounds.cm/) from Stig Morten Myre.
* [Image-Less Buttons](http://codepen.io/Omgitsonlyalex/pen/cKEyx) from Alex Ilhan.
* [Placeholder Images](http://placehold.it/) by Brent Spore.
* [Responsive HTML Emails: a Different Strategy](http://blog.fogcreek.com/responsive-html-emails-a-different-strategy/) by Fog Creek.

### Download, Fork, Commit.
If you can make this better, please download, fork, and submit a pull request. I'd love to work on this with a few folks and get it as solid as can be.