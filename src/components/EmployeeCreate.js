import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <View style={{ marginTop: 75 }}>
        <Card>
          <CardSection>
            <Input
              label="Name"
              value={this.props.name}
              onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
            />
          </CardSection>

          <CardSection>
            <Input
              label="phone number"
              value={this.props.phone}
              onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
            />
          </CardSection>

          <CardSection style={{ flexDirection: 'column' }}>
            <Text style={styles.pickerLabelStyle}> Pick a Shift </Text>
            <Picker
              placeholder='Pick a Shift...'
              selectedValue={this.props.shift}
              onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
            >
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
          </CardSection>

          <CardSection>
            <Button>
              Create
            </Button>
          </CardSection>

        </Card>
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
