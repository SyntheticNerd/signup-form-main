# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![Inactive State](./readMeImgs/Screenshot-Inactive.png?raw=true)
![Active State](./readMeImgs/Screenshot-Active.png?raw=true)

### Links

- Solution URL: [https://github.com/SyntheticDesigner/signup-form-main](https://github.com/SyntheticDesigner/signup-form-main)
- Live Site URL: [https://syntheticdesigner.github.io/signup-form-main/](https://syntheticdesigner.github.io/signup-form-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
  - [Holy Albatross](https://heydonworks.com/article/the-flexbox-holy-albatross/)
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Making forms can be fun and create a lot of opportunities to interact with the user. I know I tend to dislike filling out forms of any kind on a website, and I believe many feel the same. Making forms interactive can be means of breaking the monotony of filling out field after field. This is not my first time working with dynamic forms I have implemented similar solutions with vanilla JS. This project relies heavily on the `useState` hook in order to update the form information and determine validity.

```javascript
const input = { value: "", valid: false };
const [email, setEmail] = useState(input);
const [fName, setFName] = useState(input);
const [lName, setLName] = useState(input);
const [password, setPassword] = useState(input);
const [validForm, setValidForm] = useState(true);
```
 Tracked the validity of each individual input as well as its value separately from the form itself by using an object in the state.

Took advantage of the html input type features and the js `checkValidity()` function to determine validity.

```javascript
const isValid = (target) => {
    if (target.value.length && target.checkValidity()) {
      return true;
    } else {
      return false;
    }
  };
}
```
Diet Implementation of the Holy Albatross
```css
parent {
  display: flex;
  gap: 64px;
  align-items: center;
  flex-wrap: wrap;

  & > section {
    flex-basis: 400px;
    flex-grow: 1;
  }
}
```

### Useful resources

- [Kevin Powell on the Holy Albatross](https://youtu.be/fuiEYR6Hoe0) - This gave me the inspiration for how to handle the media changes. I wanted to make the page mobile friendly without media queries.


## Author

- Website - [Andrew Schroepfer](https://syntheticdesigner.github.io/)
- Social - [Linkedin](https://www.linkedin.com/in/andrew-schroepfer/)

