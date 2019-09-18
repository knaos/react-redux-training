import React from 'react';

export default class RegisterForm extends React.Component {
  onSubmit = event => {
    event.preventDefault();
    const { user } = this.props;
    this.props.onSubmit(user);
  };

  onChange = event => {
    if (event.target.type === 'checkbox') {
      const { name, checked } = event.target;
      this.props.onChange({
        key: name,
        value: checked
      });
    } else {
      const { name, value } = event.target;
      this.props.onChange({ key: name, value: value });
    }
  };

  render() {
    const { email, password, gender, isProgrammer } = this.props.user;

    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            value={email}
            onChange={this.onChange}
            id='email'
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={this.onChange}
          />
        </div>
        <div>
          <label>Gender</label>
          <select name='gender' value={gender} onChange={this.onChange}>
            <option>Please choose your gender</option>
            <option value='0'>Male</option>
            <option value='1'>Female</option>
          </select>
        </div>
        <div>
          <input
            type='checkbox'
            name='isProgrammer'
            checked={isProgrammer}
            onChange={this.onChange}
          />{' '}
          Are you a programmer?
        </div>
        <hr></hr>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}
