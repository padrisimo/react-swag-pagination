import React, { Component } from 'react';
import GithubCorner from 'react-github-corner';


const Sandbox = `<iframe src="https://codesandbox.io/embed/oqxlyq6v7z?fontsize=9" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>`;

const SandboxCompact = `<iframe src="https://codesandbox.io/embed/p38pjyv8pq?fontsize=9" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>`; 

const SandboxSimple =`<iframe src="https://codesandbox.io/embed/ll2xn3xkll?fontsize=9" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>`;

export default class App extends Component {
  state = {
    page: 15,
    steps: 20
  }

  nav = page => this.setState({ page });
  next = () => this.setState({ page: this.state.page + 1 });
  last = () => this.setState({ page: this.state.steps });
  first = () => this.setState({ page: 1 });
  setIframe = iframe => ({ __html: iframe })

  render() {
    const { steps, page } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'Roboto'
        }}>
        <h1>React Swag Pagination</h1>
        <h2>Pagination Component</h2>
        <div style={{padding: '0 0 3em  0'}}>Find abobe a simple use of the component when you can navigate easyly using the props.</div>

        <div
          dangerouslySetInnerHTML={this.setIframe(Sandbox)}
          style={{ width: '1080px' }}
        />

        <div style={{padding: '3em'}}>When the number of steps is smaller than 7 the same component get compacted</div>
        <div
          dangerouslySetInnerHTML={this.setIframe(SandboxCompact)}
          style={{ width: '1080px' }}
        />
        <h2>SimplePagination Component</h2>
        <div style={{padding: '0 0 3em  0'}}>Optionally you can use a slim paginator instead.</div>
        <div
          dangerouslySetInnerHTML={this.setIframe(SandboxSimple)}
          style={{ width: '1080px' }}
        />
        <div style={{padding: '3em'}}>MIT © bien perro code by<a href="https://github.com/padrisimo" target="_blank"> padrisimo</a></div>

        <GithubCorner href="https://github.com/padrisimo/react-swag-pagination" />
      </div>
    )
  }
}
