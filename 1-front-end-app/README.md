# SwingDev MaStaż - Front-end task

Let's start with some story behind why do we want you to build something on the already existing app?

We want to recruit interns to whom we can give as much knowledge as possible.
That's why we look for candidates who will get the most out of our internship.
People, who:
- Are self-reliant and can find the solution on their own
- Love to learn in real-life conditions
- Have a knack for user experience
- Are not afraid of taking up any challenge, even if there's a huge chance for failure

The task we prepared for you will allow us to check if you tick all the boxes
and if we make a perfect match. Based on our experience, we know that an actual
app will tell us much more about you than any purely theoretical test.

## What we've prepared for you:
This is a simple client-side application to view random Gravatars. We'd like you to implement
some new features on top of what we have now.

## Features to implement:
- the application should be responsive, not scale down when we resize the browser window. Tip:
[see this article and learn how to change this behavior](https://www.w3schools.com/css/css_rwd_viewport.asp).
You can use any method you like to archive that, play with CSS or JS, whatever you think is better suited for this job!
Remember to check how it looks on mobile.
- `Facewall` text should always be visible and pinned to the top of a page. What does it mean? Enter [our website](www.swing.dev) and scroll down a bit.
Did you notice that the menu is always visible at the top? That's what we want to have on our page. The menu should have a white background,
have a full window width, and should overlay the avatars as you scroll.
- once you click on an avatar, it starts to spin. That's for sure a cool behavior, but we'd like to show some details
about the image that the user clicked on. Add a [modal](https://webdesign.tutsplus.com/articles/modal-and-modeless-boxes-in-web-design--webdesign-2282)
that will pop up once the user clicks on an avatar with an email inside, that was used to generate a clicked avatar.
Tip: open `gravatar-url.js` and look at how we generate URLs.

## Bonus points:
- there is a place for improvement when it comes to a number of active [event listeners](https://www.w3schools.com/js/js_htmldom_eventlistener.asp).
Try to investigate and improve it.
- improve app UI/UX

## Getting started
App requires to have `node` (4.x.x) and `npm ` (2.x.x) installed.

Start with installing the dependencies:
1. Run `npm install` to install all required packages.

## Running
1. Use `npm start` to start the dev server.
2. Open `http://127.0.0.1:8080`
3. Start adding features! 💃🏻
