---
title: Styling in React (CSS-in-JS) 💅
date: '2019-03-13'
template: 'post'
draft: false
slug: 'styling-in-react'
category: 'React'
tags:
  - 'React'
  - 'Styling'
  - 'Styled Components'

description: '
  React is a good tool for building flexible and reuseable UI components. However organizing styles in react can be difficult sometimes, I have surf the internet severally looking for a better way of writing my CSS for the past 4 month I picked up react, but I seems to fall back to my default ways i.e writing all my css in the global file (index.css) then using inline styling to alter any changes, as the Project grows in complexity working with my method of styling becomes stressful and not efficient, as it is difficult for me to maintain the code base anymore and the fact that some styles conflict can be hectic to trace...here comes my saviour'.
---

This article was originally published by myself on [Codeburst](https://codeburst.io/styling-in-react-css-in-js-47a68c15a770)

![](https://res.cloudinary.com/chisom5/image/upload/v1618336928/styled.png)

## Quick Summary

React is a good tool for building flexible and reuseable UI components. However organizing styles in react can be difficult sometimes, I have surf the internet severally looking for a better way of writing my CSS for the past 4 month I picked up react, but I seems to fall back to my default ways i.e writing all my css in the global file (index.css) then using inline styling to alter any changes, as the Project grows in complexity working with my method of styling becomes stressful and not efficient, as it is difficult for me to maintain the code base anymore and the fact that some styles conflict can be hectic to trace...here comes my saviour.

## Introducing styled-components

Styled-components is a CSS-in-JS library just like other libraries such as (Radium) etc. that utilises tagged template literals to style your components. it is a way of writing your CSS that’s scoped to a single component, and not leak to any other element in the page. and you don’t have to worry about class name collision. It provides the following features:

- Automatic critical CSS: styled-components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically.

- No class name bugs: styled-components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.

- Painless maintenance: you never have to hunt across different files to find the styling affecting your component, so maintenance is a piece of cake no matter how big your codebase is.

- conditional rendering: styled-components has something that SASS, LESS, BIM, SMACSS and other approaches don’t have which is conditional rendering. it can decide a style at render time based on the value of the props.

- Easier deletion of CSS: It can be hard to know whether a class name is used somewhere in your codebase. styled-components makes it obvious, as every bit of styling is tied to a specific component. If the component is unused (which tooling can detect) and gets deleted, all its styles get deleted with it.

## Getting started

To begin this awesomeness, It takes only a single command "npm install styled-components" or "yarn add styled-components" you can as well use an alternative [CDN installation](https://unpkg.com/styled-components@5.2.3/dist/styled-components.min.js) if you are not using module bundler. That’s it! then the next thing to do is to import want you’ve install by doing 

```js
import styled from 'styled-components'

```
in your style file or your react component file

## Writing your first styled component 

After the styled has been imported above, then the next thing is to get our hands dirty 

```css
export const Button = styled.button `
    width: 130px;
    border: none;
    outline: none;
    cursor:pointer;
    border-radius: 5px;
    padding: 10px 15px;
`
```
To use our newly created styled-component we have to import it in the react component as 
```js
import {Button} from ‘./pathname’;
```
or if the style is written in our react component, then no need to import, we just use the styled-component created directly as 
```js 
<Button> Submit </Button>
 ```
 Coming from CSS, If you’re familiar with importing CSS into your components (e.g. like CSSModules) you’ll be used to doing something like this:
 ```js
 import React,{Component} from 'react'
import styles from './styles.css'
class Counter extends Component {
  state = { count: 0 }
  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });
  render() {
    return (
      <div className={styles.counter}>
        <p className={styles.paragraph}>{this.state.count}</p>
        <button className={styles.button} onClick={this.increment}>
          +
        </button>
        <button className={styles.button} onClick={this.decrement}>
          -
        </button>
      </div>
    )
  }
}
export default Counter;
```
Because a Styled Component is the combination of the element and the rules that style it.

``` js
import React,{Component} from 'react'
import styled from 'styled-components'
const CounterContainer= styled.div`
  /* your css style here*/
`
const Paragraph = styled.p`
  /* your css style here */
`
const Button = styled.button`
  /* your css style here */
`
 class Counter extends Component {
  state = { count: 0 }
  increment = () => this.setState({ count: this.state.count + 1 })
  decrement = () => this.setState({ count: this.state.count - 1 })
render() {
    return (
      <CounterContainer>
        <Paragraph>{this.state.count}</Paragraph>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
      </CounterContainer>
    )
  }
}
export default Counter;
```
## Using props to customize components

Styled-components makes use of props over classes when it comes to customizing the behaviour of a component, this makes styled-component flexible.
Let’s introduce this props property into our first styled-component above (i.e Button )

For example, we have 

```js
import React,{Component} from 'react'
import styled from 'styled-components';
const Input = styled.input ` 
   width: ${props => props.width};
   height: ${props => props.height || 120px;};
   border-radius: 5px;
   border: 1px solid #cecece;
   box-sizing: border-box;
`
const Button = styled.button `
    width: ${props => props.width};
    border: none;
    color: ${props => props.btnColor};    
    outline: none;   
    cursor:pointer;
    border-radius: 5px;
    padding: 10px 15px;
`
class Form extends Component {
  render(){
    return (
            <div>
               <Input type="text" width="250px"/>
               <Button width="200px"  btnColor="green">Submit</Button>
            </div>
          )
        }
}
export default Form;
```
So base on the value of props our input and button can have different style. so our button now have customize color.

styled components allow React developers to write plain CSS in React components without having to worry about clashing of class names.

### Conclusion

That’s it for styled-components, It is just like your regular CSS you already know and loved, no need for learning another programming language just like I thought then. There are lots of other properties in styled-components which is not treated in this article such as Extending an existing styled component, Animation etc. for deep learning about styled-component checkout their offical website. The fact that I could keep record of my styles and nothing conflict gives me the great peace of mind I have ever wanted.

I hope you enjoyed working through this tutorial, you could always read more on Styling React Components from the references below. If you have any questions, you can leave it in the comments section below and I’ll be happy to answer every single one.


## Resources

- [Best Practices for Styling React Components](https://app.pluralsight.com/guides/best-practices-styling-react-components) by Chris Parker.
- [Styled Components](https://flaviocopes.com/styled-components/) by Flavio Copes.
- [Styling React](https://coursework.vschool.io/styling-in-react/) by Course Work
- [Four ways to style react components](https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822) by Agata Krzywda.
- [Styled Components vs Stylesheets](https://getstream.io/blog/styled-components-vs-css-stylesheets/) by getstream.io
