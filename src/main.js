import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';
import '../style/main.scss';

// const faker = require('faker');

class HeaderComponent extends React.Component {
  render() {
    return (
      <header>
        <h1>Generate Cowsay Lorem</h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    const cowText = faker.lorem.word();
    const cowMessage = cowsay.say({
      text: cowText,
      e: 'oO',
      T: 'U',
    });

    this.state = {
      content: cowMessage,
    };
    this.cowTalk = this.cowTalk.bind(this);
  }

  cowTalk() {
    this.setState(() => {
      return {
        content: cowsay.say({
          text: faker.lorem.word(),
          e: 'oO',
          T: 'U',
        }),
      };
    });
  }

  render() {
    return (
      <div>
      <HeaderComponent/>
        <pre>{ this.state.content }</pre>


    <button onClick={ this.cowTalk}>click me</button>
    </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
