import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
export default Profile;
