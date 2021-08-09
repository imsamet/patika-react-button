# patika-react-button

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/patika-react-button.svg)](https://www.npmjs.com/package/patika-react-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save patika-react-button
```

## Usage

```jsx
import React, { Component } from 'react'

import Button from 'patika-react-button'
import 'patika-react-button/dist/index.css'

class Example extends Component {
  render() {
    return <Button>Button</Button>
  }
}
```

## Properties

```bash
Size

Type: string
Values: 'sm', 'md', 'lg'
Example
```
```jsx
class Example extends Component {
  render() {
    return <Button size="md">Button</Button>
  }
}
```

```bash
Color

Type: string
Values: 'success', 'primary', 'warning', 'danger'
Example
```
```jsx
class Example extends Component {
  render() {
    return <Button color="success">Button</Button>
  }
}
```

```bash
Round

Type: bool
Example
```
```jsx
class Example extends Component {
  render() {
    return <Button round>Button</Button>
  }
}
```

```bash
Light

Type: bool
Example
```
```jsx
class Example extends Component {
  render() {
    return <Button light>Button</Button>
  }
}
```

## License

MIT © [imsamet](https://github.com/imsamet)
