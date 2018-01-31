import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, Inputs, CardSection, Button, Spinner } from './commons';
import {
  emailChanged,
  passwordChanged,
  loginUser
} from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }
  onSubmit() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  renderButton() {
    if (this.props.loading) {
      return (<Spinner size="large" />);
    }
    return (
      <Button pressAction={this.onSubmit.bind(this)}>
        Log In
    </Button>);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Inputs
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            currentValue={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Inputs
            label="Password"
            secureTextEntry
            placeholder="password"
            onChangeText={this.onPasswordChanged.bind(this)}
            currentValue={this.props.password}
          />
        </CardSection>
        <Text style={styles.errorTextStyles}>{this.props.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  errorTextStyles: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'center'
  }
};
const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {
    email,
    password,
    error,
    loading
  };
};
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
