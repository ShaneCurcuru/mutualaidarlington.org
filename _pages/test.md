---
title: Test Page - Please Ignore
permalink: /admin/test/
layout: single
sidebar:
  nav: adminnav
header:
  overlay_image: /assets/images/tech.jpg
  caption: "Photo: [**John Schnobrich / Unsplash**]"
---

This is currently a scratch page for testing new integrations to the site.

## Obfuscated Mailto: Links

To improve allowing users to directly contact volunteers while attempting to minimize bots harvesting publicly available email addresses, we're using a simple JavaScript to allow people to mailto: without exposing the address in the HTML.

## Test Section

Below is a link to Shane's email without showing the email until you get to your mail client (which should get launched automatically).

<a href="javascript:obMail('c2hhbmVAY3VyY3VydS5jb20=','Test body here.');" class="btn btn--success">Email to Shane</a>

Limitations: won't work if JavaScript is disabled; may not always work depending on what default mail client users have.

## Contact Site Admins 

Propose a GitHub PR or email [](mailto:?Subject=MutualAidArlington Test Suggestion) with your suggestions.

**Thanks!**

<script src="/assets/js/obmail.js"></script>