import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { text } from 'react-native-communications';
import { Card, CardSection, Button, Comfirm } from './commons';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';

class EmployeeEdit extends Component {
  state = {
    showModal: false
  }
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }
  onTextPress() {
    const { shift, phone } = this.props;
    text(phone, `You have a shift on ${shift}`);
  }
  onAccept() {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  }
  onDecline() {
    this.setState({
      showModal: false
    });
  }
  render() {
    const { showModal } = this.state;
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button
            pressAction={this.onButtonPress.bind(this)}
          >
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button
            pressAction={this.onTextPress.bind(this)}
          >
            Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button
            pressAction={() => this.setState({ showModal: !showModal })}
          >
            Fire Employee
          </Button>
        </CardSection>
        <Comfirm
          visible={showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete user?
        </Comfirm>
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps,
  {
    employeeUpdate,
    employeeSave,
    employeeDelete
  })(EmployeeEdit);
