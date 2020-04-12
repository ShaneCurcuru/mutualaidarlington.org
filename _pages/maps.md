---
title: How To Setup Grocery Store In-Stock Maps
permalink: /setup/maps/
layout: single
toc: true
sidebar:
  nav: adminnav
---

Even for neighbors still able to shop, it's a struggle to find common things that are in stock in the supermarkets you're willing or able to get to.  How do you build a crowdsourced "what's in stock" tool without writing code?

## uMap and Google Docs To The Rescue

I've built a no-code way that's reasonably simple to setup using free tools from uMap and the ubiquitous Google Forms and Sheets.  This certainly isn't as customizeable as a proper mapping application, but it fits the bill and is free and low maintenance - essentially just checking for spam entries.

uMap builds atop OpenStreetMap, a popular open source mapping alternative to Google maps.  uMap adds a free hosted layer that lets you plot pins or areas atop a basic map, where you can include wiki-like syntax in the description field for a map pin.  uMap allows `iframe` includes along with links, which means we can embed a Google Sheet into the tooltip popup for a pin.

## How To Setup A Grocery Stock Map

There are two sides to this: the map, and the Forms/Sheets for instock reports.  Don't worry, these are all simple steps you can do just with a web browser and email address.

### Create The Map Of Stores
- [Create an account on OpenStreetMap](https://www.openstreetmap.org/user/new) with an email address and display name.
- Use your OpenStreetMap account to [login to uMap](https://umap.openstreetmap.fr/login/openstreetmap/).
- Click [Create A Map](https://umap.openstreetmap.fr/en/map/new/) to make a new Untitled Map.
- Scroll and zoom your map to roughly where you'll want to display.
- Click the pencil icon in top menu bar by "Untitled map", to open the "**Edit map properties**" panel on the right side of the screen.  
  - Enter a **Name** and **Description** for your map.  Be sure to click the (?) icon by the Description field to see the wiki-like text formatting you can use.
  - _(optional)_ Set the **Default Shape Properties** section to have a Color, Icon shape, and Icon symbol for any pins you create - I chose grocery cart icons, since I'm only tracking grocery stores.
  - Set the **Default Interaction Options** so that Popup shape is set to Popup (large).  I also set Display Label to Always, and Labels are clickable to On since they make it easier to use the map.
  - Under **Credits** be sure to choose a License and edit the Short credits line to have a link to your mutual aid site (or wherever).  Example line from my map: `by [[https://mutualaidarlington.org/|Mutual Aid Arlington volunteers]]`
  - Click **x Close** to close the panel.
- Use the **drop pin tool** on top of the right-hand tool palette to put down pins for **each of the stores** you want to track.  Provide a Name for each store, leave the Descriptions blank - we'll fill them in once we build the Sheets to display.
- Zoom and Pan the map to the view you want to show to users.
- In the right hand tool palette, click the diagonal two-arrows pointing at a ball icon (this sets the default zoom and location of the map displayed to users)
 - Click **Save** in the top menubar to save the map onto uMaps servers.  
 - Test out your map by clicking the **share icon** in the left-hand tool palette (you may need to click down arrow to expand the palette, not all tools are displayed by default).
   - There, you'll see HTML code to Embed The Map onto another web page, or you can simply copy the Short URL into your browser window to see the end-user view (which is much simpler than the uMap editor view).

### Create Intake Forms And Display Sheets For Each Store

I only had a handful of stores, but I wanted to display all the key information about each store in the map pin popups themselves.  So I ended up building a spreadsheet with columns like Store Name, Town/Location, Phone Number, Store Homepage, and then Input Form and Display Sheet.

For each store, you're going to build a common Google Form to capture reports from neighbors, and a Google Sheet to then pretty-display the results.  So for **each store**, do these steps:

- **Create a Google Form** to ask people to report conditions in that store.  I ask people for the time they shopped on that day (i.e. only from today), and then simple questions about crowds, stock levels (of TP and cleaners), and then a freeform field to add extra notes.  See my [example instock form you can copy](https://docs.google.com/forms/d/1d9RFprh9f1VUk-aacTVIZLbK6Dn8cZ6RR-hKx_5VQ3Y/edit?usp=sharing).
- Be sure to double-check the theme, settings, and options for the form to suit your group's needs.
- Click on Send and then copy the sharable **Form URL** to the form for later use.
- Click on the **Responses** entry at the top of the form design.
- Click on the **green Create Spreadsheet** at the top right, and Create a new Spreadsheet (remember what the name is)
  - This will create a Google Sheet with pre-filled column headers, and is where the Form will dump any new responses.
- **Open the Google Sheet** you just created.  Note the column headings are the form questions, and the sheet name in the bottom tab is "Form Responses 1".  This is where the data will go, but it's not a very pretty display for users.
  - Click + plus at the bottom left to create a new Sheet (in this same Spreadsheet) and name it "Store Report" (or whatever you like).
  - _Since this sheet is going to be displayed in popups, we want to simplify the display so it fits in smaller screens._
  - In the new Store Report sheet, enter these column headings in A1..F1 like so:
  - | Date | Time | Crowds? | TP stocked? | Cleaners? | Other notes on what's in or out of stock? |
  - _Now we need to display the data from the Form Responses 1 sheet here on this simpler sheet._
  - In cell B2, enter this formula: `='Form Responses 1'!B2`
  - Copy cell B2 to C2..F2
  - In cell A1, let's make the Timestamp date prettier.  Enter this formula: `=if(isblank('Form Responses 1'!A2),"",DATEVALUE('Form Responses 1'!A2))`  _Note that we only display the date; people may enter a Form several hours after they get home from shopping, so the Timestamp may not be when they were in the store._  I also set the Format - Number - More Formats - More Date And Time Formats to be prettier with this: custom format `Day(Tuesday), Month Day(5)`
  - Copy cells A2..F2 down to rows 3 through 100 (or however far you want to go!)
  - Optionally, you can assign Format - Conditional Formatting to the "TP? column, so that when the value is "None", it displays in red.
  - Hide the first "Form Responses 1" sheet - we don't need people seeing that.
  - Select View - Freeze - 1 Row to ensure headers always stay if scrolled.
  - Click Share to open the Share With Others panel.
    - Click Get Shareable Link, and make sure it says "Anyone With The Link Can View".  
    - Copy the shareable link URL, and then **edit** the link text.  We're going to remove the end of the URL and replace it with "preview".
      - Example URL from Shareable link: `https://docs.google.com/spreadsheets/d/1t8TmnH57F0PlG8O70UoPAUh4ieyUUPIxT54mZ-AZCHY/edit?usp=sharing`
      - Remove the part after the last `/` character: ~~`edit?usp=sharing`~~
      - Add the word `preview` so the whole URL now looks like: `https://docs.google.com/spreadsheets/d/1t8TmnH57F0PlG8O70UoPAUh4ieyUUPIxT54mZ-AZCHY/preview`
      - Copy this **Sheet URL** for later use.

### Tie Forms/Sheets To Map Pins

For each store, go back to your uMap map and edit each store's pin.  You're going to fill in the Description field for each pin with code that displays information about the store, a link to Make A Report, and an embedded Sheet showing recent reports made.  If you get stuck, read the (?) formatting help for the Description field for pins.

Here's the full text I used in the Description field for one supermarket:

```
[[https://locations.traderjoes.com/ma/arlington/505/|Website]] +1-781-646-9138
*Senior hours 8AM - 9AM* Regular hours 9AM - 7PM
[[https://forms.gle/AYehDZpKdWsZzYqJ8|Make a Report!]]
{% raw %}{{{https://docs.google.com/spreadsheets/d/1fSx_1oio9Uc4OtGXghu9nw8Ob4MxjZ0BfyymyQOBX_Y/preview|300*400}}}{% endraw %}
```

Explaining that line by line, we have:

1. A URL link to the stores's homepage, and then the store's phone number
2. The hours the store is open, including Seniors/at-risk hours
3. A URL link to the Google **Form URL**, titled "Make a Report!"
4. An embedded view of the Google **Sheet URL** we built earlier.  Note the `|300*400` at the end is the requested size of the embedded view of the spreadsheet in pixels - height by width.

Save each store pin and then Save the whole map.

## Deploy The Map On Your Site

- In uMap, click on the Sharing icon in the left tool palette.
  - Review the Iframe Export Options.
    - I recommend setting width to 100% (although may depend on your site design)
    - I set my height to 300px because we have a fairly small town.
    - I turned just the "Display the zoom control" to Always, but turned the rest of the settings to hidden.
  - Copy the entire text from the "Embed the map" editbox.  Example, mine looks like:

```html
<iframe width="100%" height="300px" frameborder="0" allowfullscreen 
src="//umap.openstreetmap.fr/en/map/arlington-groceries-report_443024?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"></iframe>
<p><a href="//umap.openstreetmap.fr/en/map/arlington-groceries-report_443024">See full screen</a></p>
```

Copy and paste that chunk of HTML into your webpage (possibly inside a `<div>    </div> ` if your style requires it) and you're all set!

Then it's all about communcations.  Be sure to test the forms out, and then provide some instructions and encouragement for neighbors to submit their own reports to the tool when they go shopping.  Remember: you also will need to maintain the underlying spreadsheets.  After a lot of entries are made, you probably want to delete the older entries - be sure to only edit the Form Responses 1 sheets (bu deleting earlier rows), _not_ the Store Report sheet.

Bonus features: Next, I'd like to make a simple view that shows which stores _should_ have TP (or cleaners, or whatever) in stock today.  You could do that by using Google Sheet APIs to grab the last 5 or so rows of any sheet that has data in it, or something.

### Credits

- [@UtahValleyMutualAid](http://twitter.com/utahmutualaid) for showing me how easy uMap was to configure.
- [uMap](https://umap.openstreetmap.fr/), an open source mapping and hosting tool from France.
- [Open Street Map](https://www.openstreetmap.org/) - a wiki-like open source mapping site, covering the whole world.
- Google, because they're already widely used by other mutual aid groups for Forms and Sheets.
- [Peet's Coffee](http://whyilovepeets.com/) for their fresh roasted beans keeping this open source peep going. 

Apologies to those non-English speakers reading this, I realize several instructions assume US English options above and LTR reading order.

### Example: Arlington, MA

Here's the map I built for my home town, covering just the few major grocery stores nearby.

<iframe width="100%" height="500px" frameborder="0" allowfullscreen src="//umap.openstreetmap.fr/en/map/arlington-groceries-report_443024?scaleControl=true&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"></iframe><p><a href="//umap.openstreetmap.fr/en/map/arlington-groceries-report_443024">See map full screen</a></p>



