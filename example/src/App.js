import React, { Component } from 'react'

import { Pagination, SimplePagination } from 'react-swag-pagination'

export default class App extends Component {
  state = {
    page: 1
  }

  nav = page => this.setState({page})
  next = () => this.setState({page: this.state.page + 1 })
  
  render() {
    return (
      <div>
        <div>{this.state.page}</div>
        <Pagination
          callbackNav={this.nav}
          callbackNext={this.next}
        />
        <Pagination 
          steps={20} 
          defaultStep={15}
          callbackNav={this.nav}
          callbackNext={this.next}
           />
        <SimplePagination 
          font="'Trebuchet MS', Helvetica, sans-serif"
          callbackNav={this.nav}
          callbackNext={this.next}
          />
      </div>
    )
  }
}
