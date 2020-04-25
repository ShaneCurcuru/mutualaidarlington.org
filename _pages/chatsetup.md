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

Briefly: volunteer librarians are taking their existing "ask a librarian" chat system and creating COVID-specific portals to integrate with local aid groups for free.  As librarians, they're good at quickly finding relevant information online to help answer questions - and as librarians, they tend to be good at finding _vetted_ and _well-written_ information.  They use the existing [commercial LibraryH3lp chat system](https://libraryh3lp.com/) to provide this service, which many libraries use for normal work.

Remember: these are librarians, not local volunteers.  They can help direct people chatting to useful resources or information - including local information about your group - but they can't do needs matching or any direct volunteering locally.  They can help funnel many questions to the right contact person in your group, which would help people more easily find where to go.

## How Does The Chat Work

LibraryH3lp provides a [simple chat interface](https://libraryh3lp.com/features) with a free widget, used by many local libraries to provide online help on their websites.  The widget is in an iframe and should work well on any normal browsers.  There is queue management, so librarians can keep track of where questions are coming from and can use localized resources depending on the question.  The librarians could either point people to a relevant CDC or scientific paper for general questions, or could point them directly to [Arlington Helps pods guide](https://www.arlingtonhelps.org/pods) if someone were asking about helping neighbors in town.

### Staffed By Volunteers

This service is run by volunteer librarians around the US.  They are only online certain hours, and there will likely be capacity limits or delays in getting answers sometimes.  When no librarian is online, the chat widget will redriect questioners to send an email to the librarians, who will then answer when back online.

Key question for some groups will be what timezone expectations are supported versus the local aid population.

### Technology And Privacy

The chat widget itself should work on any regular browser, so other than being a tool meant for people already online, it should suit any mutual aid group.  The chat also works on mobile devices; and if there are technology issues, LibraryH3lp may be able to provide basic tech support to your core volunteers to ensure the system works well for you.

The LibraryH3lp system is a commercial company with their own [privacy policy](https://libraryh3lp.com/privacy-notice).  By default chats are encrypted between the user and the librarians, and no signin or personal information is needed to use the chat tool.  Since this company supports professional librarians, they likely have a pretty good reputation for protecting privacy as a general statement.

COVID Resource Librarians have their own [About page and policy for their chat service](https://www.covidresourcelibrarian.com/about), and they have changed their settings to not store IP addresses.  However, if your mutual aid group works with undocumented people or those who have a strong and _specific_ need for complete online privacy, you will need to decide for yourself if this service is appropriate.  They do log chat text for their own internal use (presumably so they can provide better support to common questions).

## Provide Local Links To Common Questions

While librarians are superheroes when it comes to helping people find resources, the real value in this system is customizing it for your own group.  Since each chat instance is tied to your local group's website, the librarians answering chats can provide both general resources, _as well as any resources your group provides_!  This is where the power could come for some groups.

For example, in Arlington, we already have some well-written and vetted **local** resources, like [where to buy food](/food/), or how to contact the health department.  I plan to create a list of what I think will be common questions, and then provide a link to the resource to answer that question.  Some groups may have common questions like "Who do I ask to buy emergency groceries?" which should lead to the person being given a contact email address or intake form.

## How To Integrate Chat In Your Site

Note: **before** integrating chat, you will need to request the librarians create a queue for your group.  Since they are volunteers, this is not yet open to groups in general; I think they are piloting with a handful of groups in the Boston area first to see how they can scale their volunteer pool.  Once setup, they will email you a link to the queue, and a code snippet you could use to embed within your website.

There are three ways to add chat to your site, _after_ the librarians have setup a portal for your group:

- Link to a custom page on their website.  This is simply linking to `https://www.covidresourcelibrarian.com/your-group-id` once it's setup.  Users would see their generic page with a chat window (TBD: Asking how much customization the group can provide).  The advantage here is that the librarians answering the chats would then have your local links to provide as answers too.
- Link to a popup page of your-group-id.  This opens a new browser window with a minimal frame, just for the chat itself.
- Integrate the chat widget directly into a `<div>` on your site.  They provide a simple iframe embed where you can do a little bit of customization.  The advantage here is that it fits inside your site, meaning the local connection feel is still there.

### Credits

- [COVID Resource Librarian Volunteers](https://www.covidresourcelibrarian.com/) - volunteering their time
- [Library H3lp](https://libraryh3lp.com/) - the underlying chat software and services (offered for free to mutual aid groups in this program)
- National and Massachusetts Mutual Aid Slack groups - where many other group coordinators are volunteering help and advice to each other

