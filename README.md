# First Template Takiacademy

This is a solution to this [challenge](https://projects.invisionapp.com/share/5DFUZ25XHZN#/screens/282343926).
 Live Site URL [Here](https://adembc.github.io/First-Template-Takiacademy/).

Notice : SVG files will not be shown while hosting the website [Read more](https://www.sitepoint.com/why-hosting-your-svgs-is-hard-and-how-to-beat-it/).

## Table of contents

- [First Template Takiacademy](#first-template-takiacademy)
  - [Table of contents](#table-of-contents)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox
- Javascript
- [Font Awesome](https://fontawesome.com) -  the web's most popular icon set and toolkit

### What I learned

While working through this project I've learned how to create scroll box slider using vanila javascript and how to hide html element by toggling class

```css
main .container > div .boxes-container {
  display: flex;
  gap: calc((100% - 1000px) / 3);
  overflow-x: scroll;
}
main .container > div .boxes-container::-webkit-scrollbar {
  width: 0;
  height: 0;
}
```

```js
nextBtnLinks.onclick = () => {
  toScroll =
    linksContainer.querySelectorAll("li a")[counter + 1].offsetWidth +
    (linksContainer.offsetWidth - 120 * 7) / 6;
  linksContainer.scrollLeft += toScroll;
  counter++;
  checkLinks();
};
prevBtnLinks.onclick = () => {
  toScroll =
    linksContainer.querySelectorAll("li a")[counter - 1].offsetWidth +
    (linksContainer.offsetWidth - 120 * 7) / 6;
  linksContainer.scrollLeft -= toScroll;
  counter--;
  checkLinks();
};
function checkLinks() {
  if (counter == 6) {
    prevBtnLinks.classList.add("hide");
  } else {
    prevBtnLinks.classList.remove("hide");
  }
  if (counter == numberOfLinks - 1) {
    nextBtnLinks.classList.add("hide");
  } else {
    nextBtnLinks.classList.remove("hide");
  }
}
}
```

### Continued development

Learning more about JavaScript Built-in Functions to avoide creating function that already exist and save time and energy "scrollLeft".

### Useful resources

- [W3schools](https://www.w3schools.com/howto/howto_css_menu_horizontal_scroll.asp) - This helped me for creating scrolling list
