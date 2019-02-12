import React, { Component } from 'react';
import { Pagination } from 'react-swag-pagination';

export default class PaginationScreen extends Component {
  state = {
    page: 15,
    steps: 20
  }

  nav = page => this.setState({ page });
  next = () => this.setState({ page: this.state.page + 1 });
  last = () => this.setState({ page: this.state.steps });
  first = () => this.setState({ page: 1 });

  render() {
    const { steps, page } = this.state;
    return (
      <div>
        <div>{this.state.page}</div>

        <Pagination
          steps={steps}
          defaultStep={page}
          callbackNav={this.nav}
          callbackNext={this.next}
          callbackLast={this.last}
          callbackFirst={this.first}
          color="#8bc34a"
        />
      </div>
    )
  }
}
