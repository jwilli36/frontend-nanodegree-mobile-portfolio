After the 1st revision I try again.


Optimization

Index Page


CSS

Inlined all of the CSS into the head of the document and added the HTML media="print" external style sheet link for print styles.

JS

Added the HTML async attribute to all script tags .

Images

Resized images that were too large and compressed all images with the Caesium image compression tool.


Browser Caching

Leveraged browser caching by including an .htaccess file in the root of the website. 
The file contains expires headers, which sets long expiration times for all CSS, JavaScript and images.
*******Input Browser Caching file but couldnt get it to work properly********

Sliding Pizzas

// Changes the value for the size of the pizza above the slider
//Changed QuerySelectorAll with getElementsByClassName improving performance for Dom Querying
//recalculated modular
//moved scroll outside of loop to avoid recalculation


function updatePositions() {
  frame++;
  window.performance.mark("mark_start_frame");

  var items = document.getElementsByClassName('.mover');
  var runScroll = document.body.runScroll / 1250;
  var runit = 0;
  
  for (var i = 0; i < items.length; i++) {
	  
	  runit <= 5 ? runit++ : runit=0;
	  
    var phase = Math.sin( runScroll + (runit));

   items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
  }

  // User Timing API to the rescue again. Seriously, it's worth learning.
  // Super easy to create custom metrics.
  window.performance.mark("mark_end_frame");
  window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
  if (frame % 10 === 0) {
    var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
    logAverageFrame(timesToUpdatePosition);
  }
}

// runs updatePositions on scroll
window.addEventListener('scroll', updatePositions);
   

// Generates the sliding pizzas when the page loads.
 //Reduced amount of sliding Pizza elements generated from 200 down to 31.
 //Removed height and width styles from the generated pizza elements 


document.addEventListener('DOMContentLoaded', function() {
  var cols = 8;
  var s = 256;
  for (var i = 0; i < 31; i++) {
    var elem = document.createElement('img');
    elem.className = 'mover';
    elem.src = "images/pizza.png";
    //elem.style.height = "100px";
    //elem.style.width = "73.333px";
    elem.basicLeft = (i % cols) * s;
    elem.style.top = (Math.floor(i / cols) * s) + 'px';
	
    document.querySelector("#movingPizzas1").appendChild(elem);
  }
  updatePositions();
});




  // User Timing API to the rescue again. Seriously, it's worth learning.
  // Super easy to create custom metrics.
  window.performance.mark("mark_end_frame");
  window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
  if (frame % 10 === 0) {
    var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
    logAverageFrame(timesToUpdatePosition);
  }
}
Removed height and width styles from the generated pizza elements and resized the pizza image to 100 x 100 to prevent the browser from having to resize the images.

document.addEventListener('DOMContentLoaded', function() {
  var cols = 8;
  var s = 256;
  for (var i = 35; i--;) {
    var elem = document.createElement('img');
    elem.className = 'mover';
    elem.src = "../public/img/pizza-slider.png";
    elem.basicLeft = (i % cols) * s;
    elem.style.top = (Math.floor(i / cols) * s) + 'px';
    document.querySelector("#movingPizzas1").appendChild(elem);
  }
  updatePositions();
});
Added the updatePositions function as a parameter to the window.requestAnimationFrame 
method in the scroll event listener.

window.addEventListener('scroll', updatePositions) 
   
});
Resized Pizzas

Tried to make these changes to resize the pizzas in under 5ms:

Moved the determineDx function call inside the changePizzaSizes function out of the loop. 
Moved the newwidth calculation inside the changePizzaSizes function out of the loop.
Created a new variable to hold all of the .randomPizzaContainer elements in the 
document and looped through the elements to apply the new width value.
Optimized loop inside the changePizzaSizes function.


function changePizzaSizes(size) {
  var randomPie = document.getElementsByClassName("randomPizzaContainer");
  var dx = determineDx(randomPie[0], size);
  var newwidth = (randomPie[0].offsetWidth + dx)+ 'px';
	  
    for (var i = 0; i < randomPie.length; i++) {
	
      randomPie[i].style.width = newwidth;
    }
  }
  changePizzaSizes(size);
 




Critical Fold CSS

CSS-Tricks: Authoring Critical Above-the-Fold CSS
CSS Optimization

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














