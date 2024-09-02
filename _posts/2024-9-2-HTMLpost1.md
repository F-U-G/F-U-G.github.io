---
layout: post
title: Learning to Build a Webpage
--- 

Today I will share with you my progress learning HTML. Hyper text markup language is the standard markup language that most of the internet uses. I will cover some of the basic elements and attributes that I learned, as well as the basic layout of webpages. In the future I will also cover CSS and JavaScript as they are essential for web development.

### W3Schools
www.w3schools.com This is what I've been using to learn HTML and so far it has been going very well. The exercises to practice have been invaluable in my learning process. It also has windows where you can practice coding with examples they give you. It makes learning new concepts much easier. 

### Elements
HTML consists of elements. elements look like this:
![_config.yml]({{ site.baseurl }}/images/headelement.png)
Elements consist of a start tag, a end tag, and content between the tags. Example:
![_config.yml]({{ site.baseurl }}/images/Headingelement.png)
Notice how the second tag has a forward slash? That denotes a closing tag. Some elements are empty meaning they don't have a closing tag. For example "br"(line break element) consists of just a start tag. 

Elements can be nested within each other. Example:
![_config.yml]({{ site.baseurl }}/images/Nestedelement.png)
The heading and paragraph elements are nested within the body element.

### Attributes
Attributes are used to provide additional information in a start tag. All HTML elements can have attributes. They usually come in name/value pairs: name="value". Example:
![_config.yml]({{ site.baseurl }}/images/Linkelement.png)
This element "a" is used to link a URL. This element uses the "href" attribute with the value being the actual URL text. In this case I pasted the YouTube URL. 

### Closing Thoughts
So far I'm really liking HTML. It's so easy to get started with and requires no extra software, just a notepad and web browser. I think this is a great place to start If you've never coded before. If you find any of this interesting I highly recommend giving it a shot. Check out W3Schools and see how easy this really is. 

My goal with HTML and web development is to eventually rebuild this website but with my own code. I also have plans to help some friends build their own websites for their businesses. 

Next time I'll talk about the basics of CSS as well as some of the projects I'm doing to learn. Anyways here's some of the notes I took, cya next time.

### Notes:
##### Some basic elements:

!DOCTYPE html
	Declares this an HTML5 document

html
	The root element of the HTML page

head
	Contains meta info

title
	Specifies the title of the page that goes into the browser bar

body
	The visible contents of a page

h1
	Defines a large heading
	You can put 1-6 after the h, the bigger the number the smaller the text
	Using the style attribute you can change font size or color

p
	Used to make a paragraph 
	Ignores lines and extra spaces

br
	A line break, this is an empty element with no closing tag

hr
	Adds a line that spreads across the page

pre
	Defines preformatted text
	Preserves spaces and lines unlike the "p" element


##### Some basic attributes:

href
	Used in the a tag for hyperlinks, href specifies the URL.

src
	Specifies the path to the image to be displaye in the img tag.
	There are two ways to specify the URL in src, 
	1: Links to an image on an external website
	2: Links to an image within the same website. If the URL begins with a / then it is relative to the domain, if it does not then it is pulled from the same page(Its better to go with the domain as it wont break if you change the domain).

alt
	alternate text for an image if it cant be displayed.

style
	Adds style to an element, such as color, font, size.
	Example style="color:red;"

lang
	specifies the language. Example for english: lang="en" 

title
	Can be used to display a tooltip when hovering over text.
	Example: title="tooltip text"
