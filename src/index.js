import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './register-form';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {
        email: '',
        password: '',
        gender: '',
        isProgrammer: false
      }
    };
  }

  onInputChange = keyValuePair => {
    const newUser = Object.assign({}, this.state.user, {
      [keyValuePair.key]: keyValuePair.value
    });

    this.setState({ user: newUser });
  };

  onRegisterFormSubmit = user => {
    console.log('Submitted!', user);
  };

  render() {
    const { user } = this.state;
    const dashboard = (
      <div>
        <h5>This is your todolist</h5>
        <ul>
          <li>Feed dog</li>
          <li>Feed cat</li>
          <li>Feed dog</li>
        </ul>
      </div>
    );

    const logOutButton = <button>Log out user: Atanas</button>;

    return (
      <div>
        <Greeting name={'Katerina'} logOutButton={logOutButton}>
          {dashboard}
        </Greeting>
        <RegisterForm
          user={user}
          onChange={this.onInputChange}
          onSubmit={this.onRegisterFormSubmit}></RegisterForm>
      </div>
    );
  }
}

class Greeting extends React.Component {
  render() {
    const { children, name, logOutButton } = this.props;
    return (
      <div>
        <aside>{logOutButton}</aside>
        <h1>Greetings, {name}!</h1>
        {children}
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById('root'));
