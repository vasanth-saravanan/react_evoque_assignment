import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Title} from 'react-native-paper';

import {AppStyles} from '../utils/AppStyles';
import {BasePagestyles} from '../utils/BasePageStyles';
import Icon_Feather from 'react-native-vector-icons/Feather';
import Icon_MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backIcon: this.props.backIcon,
      backIconColor: this.props.backIconColor,
      userGreet: this.props.userGreet,
      title: this.props.title,
      titleColor: this.props.titleColor,
      menu: this.props.menu,
      menuIconColor: this.props.menuIconColor,
    };
  }

  render() {
    return (
      <View style={styles.header}>
        {this.state.backIcon != null ? (
          <View style={BasePagestyles.flex}>
            <Icon_Feather
              name={'arrow-left'}
              color={this.state.backIconColor}
              size={25}
            />
          </View>
        ) : null}

        {this.state.userGreet != null ? (
          <View style={styles.userGreet_container}>
            <Icon_Feather
              name={'user'}
              color={AppStyles.color.primary}
              size={25}
              style={styles.userGreet_icon}
            />
            <Text style={styles.greet_text}>Hello,</Text>
            <Text numberOfLines={1} style={styles.username}>
              Wildan!
            </Text>
          </View>
        ) : null}

        {this.state.title != null ? (
          <View style={styles.title_container}>
            <Title style={{color: this.state.titleColor}}>
              {this.state.title}
            </Title>
          </View>
        ) : null}

        {this.state.menu != null ? (
          <TouchableOpacity style={styles.menu_container}>
            <Icon_MaterialCommunityIcons
              name={'dots-horizontal'}
              color={this.state.menuIconColor}
              size={25}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: AppStyles.color.transparent,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 0,
    padding: 15,
  },
  userGreet_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userGreet_icon: {
    backgroundColor: AppStyles.color.white,
    borderRadius: 5,
  },
  greet_text: {
    marginLeft: 5,
    color: AppStyles.color.greyLight,
  },
  username: {
    marginLeft: 3,
    fontWeight: 'bold',
    color: AppStyles.color.white,
  },
  title_container: {
    flex: 1,
    alignItems: 'center',
  },
  menu_container: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
