Website Optimization

Joffrey Williams

Instructions



A. To view the portfolio website download all the files and open index.html in your browser.

B. To view the pizza website download all of the files and open views/pizza.html in your browser

C. Once you are at the pizza.html site you can slider to change the pizza sizes to Small/Medium/
   or Large



Optimizations to index.html

1. Inlined all of the CSS into the head of the document and added the HTML media="print" external 
   style sheet link for print styles.

2. Added the HTML async attribute to all script tags.

3. Resized images that were too large and compressed all images with the Caesium image compression tool.

4. Leveraged browser caching by including an .htaccess file in the root of the website.
 
   ***The file contains expires headers, which sets long expiration times for all CSS, 
      JavaScript and images.


Optimizations to Main.js

1. Modified the code to calculate the number of pizzas needed to fill the webpage based on browser inner dimensions.

2.Moved the document.body request out of for loop in the changePizzaSizes and updatePositions 
functions. This prevents the browser from having to render the page every time the loop 
iterates.

3.Changed all instances of querySelector to the more efficient getElementById and 
  getElementByClassName depending on whether a class or id is needed.

4. Used Background visibility: hidden on the .mover class.


5. Used Gulp to minify css files.


Critical Fold CSS

CSS-Tricks: Authoring Critical Above-the-Fold CSS
CSS Optimization

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight
https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth

http://api.jquery.com/innerheight/
http://api.jquery.com/innerWidth/
Google Developers: Optimize CSS Delivery
Gift of Speed: Lazy Load CSS
Gift of Speed: Inline CSS
Critical Path CSS Generator By Jonas Ohlsson
Loading CSS Asynchronously By Dean Hume
CSS Media Queries

CSS Tricks: CSS Media Queries & Using Available Space
Build Tools


Minify your final CSS file using Gulp.js By Ashit Vora
Compressing your Images using Gulp.js By Ashit Vora
Introduction to Gulp.js with practical examples By Julien Renaux

Image Optimization


Asynchronous and deferred JavaScript execution explained By Peter Beverloo
CSS Tricks: Async Attribute and Scripts At The Bottom
Webfonts

WOFF - Web Open Font Format Browser Support
GZIP Compression


Check GZIP Compression
HTTP Caching



Layout & Rendering

Jank Free
Gone In 60 Frames Per Second: A Pinterest Paint Performance Case Study By Addy Osmani
[VIDEO] Gone in 60fps - Making A Site Jank-Free By Addy Osmani
JavaScript Loop

Loop iteration performance
JavaScript Switch


Mozilla Developer Network: document.querySelector
Mozilla Developer Network: document.querySelectorAll
CSS Transform

CSS Tricks - Transform
Treehouse: Increase Your Site’s Performance with Hardware-Accelerated CSS
Force Hardware Acceleration in WebKit with translate3d By David Walsh
Animations

HTML5 Rocks: High Performance Animations By Paul Lewis and Paul Irish
requestAnimationFrame

Fixing a parallax scrolling website to run in 60 FPS By Krister Kari
Mozilla Developer Network: window.requestAnimationFrame
Chrome Devtools

Cheatsheet
Performance profiling with the Timeline
Chrome Office Hours

[VIDEO] Paul Lewis & Paul Irish investigate rendering problems
Udacity Office Hours

[VIDEO] Office Hours: P3 and P4, Strategies for Web Optimization














