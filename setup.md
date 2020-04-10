---
title: How To Setup A Mutual Aid Website
layout: single
classes: wide
---

Key technical tips on organizing tools to use for volunteering in your local community.  We also have resources on the non-technical side: [finding volunteers and organizing the human side of the work](/local).

## What Are Your Site's Goals?

Much like any major project, do some planning first.  This includes thinking through the overall mission/goal statements - write them down!, and figuring out who your core volunteers are.  Whatever technology choices you make need to fit both your goals (outreach, needs matching, advocacy) with your available volunteer resources.  Consider both what your **core volunteers** are passionate about, as well as their skillsets.  If only one person knows how to use some bit of technology, it's a single point of failure to consider.

Also, consider your **audience** size and location - both physically, and online. Many people love Facebook groups - but some people refuse to use Facebook.  Same goes for most other messaging and group tools.  So when thinking about outreach, ensure you have publicly-viewable URLs to share.  This is where the Twitter / Instagram model of having an implicitly public timeline is an advantage.  Audience size also matters: if you're building a hyper-local volunteer pod with a few hundred people, you can get away with a Google Doc or similar homepage.  If you're serving a larger community, you'll need a dedicated and performant landing page to welcome people.

## Communications

How do people find out about your group?  While some outreach may be flyers, phone trees, or yard signs, a lot of people will find you online.  You both want newcomers to your site to find the information they need, and to feel comfortable trusting your site.

A key way to make a site more professional looking as well as performant is to ensure your main landing page is at a stable URL (your own domain name is best) and is not a complex document.  Google Docs have been slow across the board recently with all the new users there.  That's not a good UX experience for newcomers.

There are two conceptual things to do here:

- **Mentally break up your site design.**  Large and complex pages tend to make people's eyes glaze over, and are harder to manage for your core volunteers.  Break up your design, and think of having a few key landing pages: the homepage, Get Help, and Volunteer Here are great starts.  Then focus on designing those three or so pages well, with short, concise descriptions.  From there, use action words and very clear links out to any other coordination forms or spreadsheets you use, where volunteer teams may do daily work.

- Consider using traditional technologies for your landing pages.  One fast and free way to host static web pages is [GitHub Pages](https://guides.github.com/features/pages/).  They take a tiny bit of tech skill to get setup, but once done, they are zero maintenance, fast, and won't go down.  There are plenty of other web hosting solutions, including [Google Sites](https://sites.google.com/new) and similar places.  Focus on keeping content directly on the landing pages simpler and action focused - and then link people to your working areas.  Remember, the web is all about **linking**.  You can also embed parts of a Google doc into a plain web page too.

**Other key communication tips**

- Social media: many people don't use Facebook, so consider adding a twitter / instagram feed for key announcements
- Be sure to list contact people or monitored email addresses.  It's important for new users to understand who's running your site.
- Always have a prominent About This Site / Who We Are section.  It really helps newcomers to trust your group if they know who's running it.  When practical, also include contact information here.

## Consider Your Own Domain Name

Having your own domain name for a group makes it much easier to share the address, and looks more professional.  Domain names are about 10USD/year, and are fairly simple to point to your site.  More importantly, once setup, they're stable.  While tinyurl or bit.ly may be convenient short-term, those link shortners do go down sometiems, making them less reliable.

**TODO basic instructions on pointing domain names**

## Use A License

In the US, everything you write down is copyrighted.  Legally, other people can't re-use your writing except thru small bits of "fair use".  It's simple to use a license for your website so that you explicitly allow other people to re-use or share all your content.

There are plenty of guides for using [open source](https://opensource.org/licenses) or [Creative Commons licenses](http://creativecommons.org/).  For most content, I [recommend CC-BY license](https://creativecommons.org/licenses/by/4.0/), which is the simplest license that merely asks anyone else using your stuff to credit you. Note that when you give other people a license, you still maintain your own copyright: you can always re-use your own work. You can also use [CC0 public domain declaration](https://creativecommons.org/share-your-work/public-domain/), where you explicitly forego copyright.

Applying a license to your site is as simple as putting a license declaration in the footer of your webpages.


## Using GitHub Pages

**Section in progress**

## Embedding Google Docs In Sites

**Section in progress**

## More Website Management and Legal Resources 

- [EFF Guide to privacy and licensing during COVID-19](https://www.eff.org/issues/covid-19)
- [Guide for using the free tier of AirTable to provide needs/volunteers matching](https://openreferral.org/delivering-open-referral-solutions-with-airtable/), from OpenReferral

## Domain Name Forwarding - Improve Your Web Address

When spreading the word, having a memorable URL address to your site makes a lot of tasks easier.  While some groups use bit.ly or tinyurl.com, with just a tiny bit more effort and about $10/year you can have your own domain name pointing anywhere.  This is an advantage both for privacy (not having a URL shortener track clicks) and for reliability (because sometimes tinyurl goes down).

Domain names are cheap, although most domain name registries (where you 'buy' a domain name) require credit cards for the signup.  Whoever signs up is the owner.  **Pro Tip:** Always select "_domain privacy_" for your registration - if the domain registrar charges you for that, find another registrar.  Otherwise, the owner's name and address submitted becomes public in the registry data.

Importantly, where you store your content (Google Docs, WordPress, GitHub, etc.) can be completely separate from where you register your domain name.  Think of registering a domain name simply as being able to change the forwarding address of a telephone number or web search.  Once you own a domain at a registrar, you can simply tell them to just foward traffic to another place.  This should cost about $10 - $15/year, just to "own" the domain name.  Note that you do **not** need to purchase hosting with your domain registration.

### How-To Forward A Domain To Your Site

If you already have a Google Doc or the like somewhere, and are buying a domain name, here's the help docs that explain the process - which differs for every registrar.  Important: be patient: making changes to a domain name registry record often takes several hours or a day.

The process will be:
- Figure out the web address URL you want to point to.
- Choose your name for the domain.
- Go to the registrar's site and check the name is available.  Try .org, .net, or other extensions if needed.
- Signup for an account at the registrar and buy _just_ the domain name; you don't (necessarily) need any of their hosting or other packages.
  - **Important: DO NOT LOSE the email or login instructions** for the domain registrar!  They may be very hard to change if you loose your login.
- Once the registrar has completed setup of the name (takes ~15 min), to into their control panel and setup a Redirect or Domain Forwarding to the web address URL of your actual content, and submit the change.
- Wait.  It may take up to a day for this to be registered.  Be sure to check that the domain name goes where you want before sending out any messaging about it! 

There are many domain hosts, but these are the ones I personally recommend:

- [Google Domains](https://support.google.com/domains/answer/4522141)
- [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/385/2237/how-to-redirect-a-url-for-a-domain)
- [DreamHost](https://help.dreamhost.com/hc/en-us/articles/215455377-How-do-I-redirect-my-domain-)
- [IONOS Hosting](https://www.ionos.com/help/domains/forwarding-a-domain/forwarding-a-domain-to-a-different-domain/)

Note: I avoid GoDaddy; their business model seems to be spamming you with innovative ways to say "buy more".

> **Mutual Aid Is About Local Self Sufficiency**

## Mapping Tips

Mutual aid is local, and displaying maps often helps route volunteers and those in need alike.  There are plenty of mapping websites out there - the key factor is choosing one that your core organizing volunteers are comfortable maintaining.

### Mapping Grocery Stock Levels

How to easily use uMap / OpenStreetMap / Google Sheets to show stock levels (out of TP! has cleaners!) of nearby supermarkets.

*IN PROGRESS - WORKING NOTES*

<iframe width="100%" height="500px" frameborder="0" allowfullscreen src="//umap.openstreetmap.fr/en/map/arlington-groceries-report_443024?scaleControl=true&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"></iframe><p><a href="//umap.openstreetmap.fr/en/map/arlington-groceries-report_443024">See full screen</a></p>



