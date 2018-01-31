import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { Card, CardSection, Inputs, Button } from './commons';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Inputs
            placeholder="John Doe"
            label="Name"
            currentValue={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Inputs
            placeholder="0805 113 3456"
            label="Phone"
            currentValue={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerLabel}>Shift</Text>
            <Picker
              selectedValue={this.props.shift}
              onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
            >
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednessday" value="Wednessday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
        </CardSection>
        <CardSection>
          <Button
            pressAction={this.onButtonPress.bind(this)}
          >
            Create
        </Button>
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  pickerLabel: {
    fontSize: 18,
    paddingLeft: 20
  }
};
const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  return { name, phone, shift };
};
export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
