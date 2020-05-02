---
title: How To Setup LibraryHelp Chat On A Site
permalink: /setup/chat/
layout: single
classes: 
toc: true
sidebar:
  nav: adminnav
---

In late April Jenny from the [COVID Resource Librarian volunteer group](https://www.covidresourcelibrarian.com/) reached out to me to ask if our local mutual aid website wanted to partner with them to provide "ask a librarian" chats.  After verifying they're legit (there are definitely some scams or corporate types looking to capitalize on local groups these days), I took her up on the offer.

## What Is COVID Resource Librarian?

Briefly: chat volunteers are taking an existing "ask a librarian" chat system and creating COVID-specific portals to integrate with local aid groups for free.  As chat volunteesr, they're good at quickly finding relevant information online to help answer questions - and they tend to be good at finding _vetted_ and _well-written_ information.  They use the existing [commercial LibraryH3lp chat system](https://libraryh3lp.com/) to provide this service, which many libraries use for normal work.  They are also working with existing professional librarians to get more volunteers to answer questions.

Remember: these are knowledgeable volunteers (some are librarians, some are not) somewhere in the US, not local volunteers.  They can help direct people chatting to useful resources or information - including local information about your group - but they can't do needs matching or any direct volunteering locally.  They can help funnel many questions to the right contact person in your group, which would help people more easily find where to go.

## How Does The Chat Work

LibraryH3lp provides a [simple chat interface](https://libraryh3lp.com/features) with a free widget, used by many local libraries to provide online help on their websites.  The widget is in an iframe and should work well on any normal browsers.  There is queue management, so their chat volunteers can keep track of where questions are coming from and can use localized resources depending on the question.  The chat volunteers could either point people to a relevant CDC or scientific paper for general questions, or could point them directly to [Arlington Helps pods guide](https://www.arlingtonhelps.org/pods) if someone were asking about helping neighbors in town.

### Staffed By Volunteers

This service is run by chat volunteers around the US; in terms of scheduling (i.e. when they are available and timeliness of responses), they note: 

> We try to stay online as much as possible, but please bear with us if we are not online at all hours. We will do our best to reply to messages sent while we are offline within two hours, and by 10 am EST if sent after 10 pm EST. Our volunteers are currently located in the United States.

When no chat volunteers are online, the chat widget will redriect questioners to send an email to the librarians, who will then answer when back online.  Personally, I've chatted with them several times during the day Eastern time and always gotten quick and helpful answers.

### Technology And Privacy

The chat widget itself should work on any regular browser, so other than being a tool meant for people already online, it should suit any mutual aid group.  The chat also works on mobile devices; and if there are technology issues, LibraryH3lp may be able to provide basic tech support to your core volunteers to ensure the system works well for you.

The LibraryH3lp system is a commercial company with their own [privacy policy](https://libraryh3lp.com/privacy-notice).  By default chats are encrypted between the user and the librarians, and no signin or personal information is needed to use the chat tool.  Since this company supports professional librarians, they likely have a pretty good reputation for protecting privacy as a general statement.

COVID Resource Librarians have their own [About page and policy for their chat service](https://www.covidresourcelibrarian.com/about), and they have changed their settings to not store IP addresses.  However, if your mutual aid group works with undocumented people or those who have a strong and _specific_ need for complete online privacy, you will need to decide for yourself if this service is appropriate.  They do log chat text for their own internal use (presumably so they can provide better support to common questions).

## Provide Local Links To Common Questions

While librarians and other chat volunteesr are superheroes when it comes to helping people find resources, the real value in this system is customizing it for your own group.  Since each chat instance is tied to your local group's website, the librarians answering chats can provide both general resources, _as well as any resources your group provides_!  This is where the power could come for some groups.

For example, in Arlington, we already have some well-written and vetted **local** resources, like [where to buy food](/food/), or how to contact the health department.  I plan to create a list of what I think will be common questions, and then provide a link to the resource to answer that question.  Some groups may have common questions like "Who do I ask to buy emergency groceries?" which should lead to the person being given a contact email address or intake form.

## How To Integrate Chat In Your Site

Note: **before** integrating chat, you will need to request the librarians create a queue for your group.  Since they are volunteers, this is not yet open to groups in general; I think they are piloting with a handful of groups in the Boston area first to see how they can scale their volunteer pool.  Once setup, they will email you a link to the queue, and a code snippet you could use to embed within your website.

There are three ways to add chat to your site, _after_ the librarians have setup a portal for your group:

- Link to a custom page on their website.  This is simply providing a link to `https://www.covidresourcelibrarian.com/your-group-id` from your site, which sends users to a new chat landing page. You can request that they customize your chat landing page with any of the following: name of your group, area that you serve, a short description of your group, link to your website, and your logo. 
- Link to a popup page of your-group-id.  This opens a new small browser window with a minimal frame, just for the chat itself.  It _should_ work for most browsers, even for people who use normal pop-up blockers. 
- Integrate the chat widget directly into a `<div>` on your site.  They provide a simple iframe embed where you can do a little bit of customization.  The advantage here is that it fits inside your site, meaning the local connection feel is still there.

Note: I've found Jenny and the volunteers here very responsive, so they will try to customize things to work with your site if they can - just ask!

## Sample Embed

<div class="pullrightbox notice--info">
  <noscript>Live chat requires Javascript to work.</noscript>
  Got questions? Chat here!
  <div class="needs-js">chat loading...</div><!-- Place this div in your web page where you want your chat widget to appear. -->
</div>

This is a sample embedded chat bubble that opens a pop-out chat box which works on desktop or mobile.  Be sure to check the script element below for how the our queue is loaded, and the ?query string that determines some skin settings.


<!-- Place this script as near to the end of your BODY as possible. -->
<script type="text/javascript">
  (function() {
    var x = document.createElement("script"); x.type = "text/javascript"; x.async = true;
    x.src = (document.location.protocol === "https:" ? "https://" : "http://") + "libraryh3lp.com/js/libraryh3lp.js?15091";
    var y = document.getElementsByTagName("script")[0]; y.parentNode.insertBefore(x, y);
  })();
</script>


### Credits

- [COVID Resource Librarian Volunteers](https://www.covidresourcelibrarian.com/) - volunteering their time
- [Library H3lp](https://libraryh3lp.com/) - the underlying chat software and services (offered for free to mutual aid groups in this program)
- National and Massachusetts Mutual Aid Slack groups - where many other group coordinators are volunteering help and advice to each other

