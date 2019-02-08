import React, { Component } from 'react'

import { Pagination, SimplePagination } from 'react-swag-pagination'

export default class App extends Component {
  render() {
    return (
      <div>
        <Pagination />
        <Pagination steps={20} defaultStep={15} />
        <SimplePagination />
      </div>
    )
  }
}
