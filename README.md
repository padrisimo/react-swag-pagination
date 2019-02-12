# react-swag-pagination

> such a cool paginator component

[![NPM](https://img.shields.io/npm/v/react-swag-pagination.svg)](https://www.npmjs.com/package/react-swag-pagination) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add react-swag-pagination
```

You can choose between the Pagination and the SimplePagination component, the firstone is a classic paginator wich mutates in compact when the steps are smaller than 6 and the lastone is a slim version.

## Demo
https://padrisimo.github.io/react-swag-pagination/

## Usage

#### Paginator

```jsx
import React, { Component } from 'react';
import { Pagination } from 'react-swag-pagination';

export default class App extends Component {
  state = {
    page: 15,
    steps: 20
  }

  nav = page => this.setState({page});
  next = () => this.setState({page: this.state.page + 1 });
  last = () => this.setState({ page: this.state.steps });
  first = () => this.setState({page: 1});
  
  render() {
    const { steps, page } = this.state;
    return (
      <div>
        <div>{page}</div>
        <Pagination 
          steps={steps} 
          defaultStep={page}
          callbackNav={this.nav}
          callbackNext={this.next}
          callbackLast={this.last}
          callbackFirst={this.first}
          font="sans-serif"
          color="#8bc34a"
           />
      </div>
    )
  }
}

```

#### SimplePagination


```jsx
import React, { Component } from 'react';
import { SimplePagination } from 'react-swag-pagination';

export default class App extends Component {
  state = {
    page: 1,
    steps: 5
  }

  nav = page => this.setState({page});
  next = () => this.setState({page: this.state.page + 1 });
  
  render() {
    const { steps, page } = this.state;
    return (
      <div>
        <div>{page}</div>
        <SimplePagination 
          steps={steps} 
          defaultStep={page}
          callbackNav={this.nav}
          callbackNext={this.next}
          font="serif"
          color="indigo"
           />
      </div>
    )
  }
}

```

## Pagination Props

| props         | type   | default                                     |
|---------------|--------|---------------------------------------------|
| steps         | Int    | 6                                           |
| defaultStep   | Int    | 1                                           |
| callbackPrev  | func   | () => console.log('previous page')          |
| callbackNext  | func   | () => console.log('next page')              |
| callbackFirst | func   | () => console.log('first page')             |
| callbackLast  | func   | () => console.log('last page')              |
| callbackNav   | func   | (page) => console.log('go to page ', page)} |
| color         | String | #2196f3                                     |
| font          | String | Roboto                                      |

## SimplePagination Props

| props        | type   | default                                     |
|--------------|--------|---------------------------------------------|
| steps        | Int    | 5                                           |
| defaultStep  | Int    | 2                                           |
| callbackPrev | func   | () => console.log('previous page')          |
| callbackNext | func   | () => console.log('next page')              |
| callbackNav  | func   | (page) => console.log('go to page ', page)} |
| color        | String | #2196f3                                     |
| font         | String | Roboto                                      |

## License

MIT © [padrisimo](https://github.com/padrisimo)
