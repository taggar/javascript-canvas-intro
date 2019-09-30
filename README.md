Text taken from the orioginal assignment.

Javascript Canvas
=================

## Introduction

When you want to do advanced animations, games, data visualizations, photo manipulation or real-time video processing in the browser you will need a canvas.

## About this challenge

| Repository        | `javascript-canvas-intro`  |
|-------------------|----------------------------|
| Type of challenge | Learning                   |
| Duration          | 3 days                     |


## Learning objectives

### What and why
* What is canvas
* What can be done with it
* Why would we want to use it
* What is a context
* What is WebGL
* What is a tainted canvas

### How

* How to get a context
* How to draw lines, rectangles, text, images, ...
* How to clear a canvas
* How to make it interactive

## Instructions

### Setup

* Create an HTML page called index.html
* Create a repository
* Don't forget a good readme 😉
* Commit now, and often

### Setup the canvas

* Create an HTML page random.html
* Link random.html in index.html
* Add a canvas element
* Make it fill the whole screen

### Drawing
* After 1 second, draw a red line from (x: 15, y: 60) to (x: 50, y: 150) with a width of 5 pixels
* On page load, make the background black without using css
* After 2 seconds add an image in a random location
* Make the image twice as big
* After 3 seconds add some text somewhere, again without using html or css
* After 4 seconds, clear the canvas
* After 5 seconds draw a circle somewhere
* After 6 seconds, every second, it should add a random line, in a random color, with a random width between 1 and 5 pixels
* Now make it add a line every 10ms

### Interactive
* Create a new file called interactive.html
* Link it in the index and add some minor styling to the index
* When we move the mouse, a big yellow-filled circle should appear at the postion of the mouse using a full screen canvas like in the last excercise
* Now make the previous ones disappear when we draw a new one
* Whenever space is pressed, a black box should show, it should be gone when space is not pressed

### requestAnimationFrame or setInterval(1000/60)
* If we press down space, move the mouse and then release space it should show the black box the whole time we were pressing space, without flickering and there should be a yellow circle following our mouse

### Text input

* When we type something on the keyboard, it should appear on the canvas, and it should stay there until we refresh the page


### Bonus
* Add more info the index page
* Save the text we type in localStorage and display it on pageload
* Add a delete button

## Result

https://taggar.github.io/javascript-canvas-intro/
