import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import Input from './input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { username, password, email } = values;
    const user = { username, password, email };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        <fieldset>
          <Field
            label='Email Address'
            component={Input}
            type="email"
            name="email" />

          <Field
            label='Username'
            component={Input}
            type="text"
            name="username"
            validate={[required, nonEmpty, isTrimmed]}
          />

          <Field
            label='Password'
            component={Input}
            type="password"
            name="password"
            validate={[required, passwordLength, isTrimmed]}
          />

          <Field
            label='Password Again'
            component={Input}
            type="password"
            name="passwordConfirm"
            validate={[required, nonEmpty, matchesPassword]}
          />
        </fieldset>
        <button
          className="register-btn btn-highlight"
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Register
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
