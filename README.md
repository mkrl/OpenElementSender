# OpenElementSender
A small OpenCMS module that hides all the tables on the web page and adds an option to open them in a new separate window. This was originally made for a government organization's site to fit the requirements for visually impaired people.

Requirements
------------

- [OpenCMS](http://www.opencms.org/) 6+
- [jsoup](https://github.com/jhy/jsoup)
- A web-server running Java 7+ (most likely may work  in older versions)
- jQuery 1.6+ (client-side)

Installation
------------

1. Put `viewer.jsp` into any folder on your web server
2. Change `"jspaddr"` variable in the `element_sender.js` to match your JSP path
3. Include `element_sender.js` in templates you want to de-tableise:

 `<script src="<cms:link>/js/element_sender.js</cms:link>" type="text/javascript"></script>`
4. If required, add custom css rules to `viewer.jsp` for a more pleasant look


Other notes
-----------

If you want some text to be displayed above the download button, specify "data-name" attribute for desired tables. This will display additional heading for each table hidden.

This script grabs page URL and gets a table index and then sends it via HTTP-request to the Java servelet that shows the element.
This can be used for any elements, just throw it other parameter and a desired DOM element index.

If you have any tables in your page template, you will most likely have to add `+1` to the counter inside of the `element_sender`. By default, JS script only searches for tables in `page_content` div classes. The JSP part grabs the whole page.
