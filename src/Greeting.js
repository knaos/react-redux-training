import React from 'react';

export class Greeting extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      user: 'Atanas',
      countHistory: []
    };
  }
  funnyName = 'Funny name';
  increment = event => {
    const { count, countHistory } = this.state;
    let newCount = count + 1;
    this.setState({ count: newCount, countHistory: [...countHistory, count] });
  };
  countTemplate() {
    let countTemplate = <h3>Count: {this.state.count}</h3>;
    if (this.state.count > 0) {
      return countTemplate;
    }
    return 'Nothing :(';
  }
  render() {
    let { name } = this.props;
    let { countHistory } = this.state;
    return (
      <div>
        <h2>Greetings stranger, {this.funnyName + name}</h2>
        <div>{this.props.class}</div>
        <button onClick={this.increment}>Increment</button>
        {this.countTemplate()}
        <div>
          <h5>History:</h5>
          <ul>
            {countHistory.map((count, index) => {
              return <li key={index}>{count}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
