import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {Title, Avatar} from 'react-native-paper';

import {AppBar} from '../components/AppBar';
import {AppStyles} from '../utils/AppStyles';
import {BasePagestyles} from '../utils/BasePageStyles';
import {Themes} from '../utils/Themes';
import {Images} from '../utils/Images';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import Icon_MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDetails: {
        name: 'M. Wildan Wari',
        accountBalance: 569.467,
        cardNumber: 4111234598765285,
      },
      data: [
        {
          id: 1,
          logo: Images.paypal,
          title: 'Paypal Income',
          date: '2011-08-12T20:17:46.384Z',
          status: 'profit',
          amount: 6.456,
        },
        {
          id: 2,
          logo: Images.paypal,
          title: 'Paypal Income',
          date: '2011-08-12T20:17:46.384Z',
          status: 'loss',
          amount: 6.456,
        },
        {
          id: 3,
          logo: Images.paypal,
          title: 'Paypal Income',
          date: '2011-08-12T20:17:46.384Z',
          status: 'loss',
          amount: 6.456,
        },
        {
          id: 4,
          logo: Images.paypal,
          title: 'Paypal Income',
          date: '2011-08-12T20:17:46.384Z',
          status: 'loss',
          amount: 6.456,
        },
        {
          id: 5,
          logo: Images.paypal,
          title: 'Paypal Income',
          date: '2011-08-12T20:17:46.384Z',
          status: 'loss',
          amount: 6.456,
        },
        {
          id: 6,
          logo: Images.paypal,
          title: 'Paypal Income',
          date: '2011-08-12T20:17:46.384Z',
          status: 'loss',
          amount: 6.456,
        },
        {
          id: 7,
          logo: Images.paypal,
          title: 'Paypal Income',
          date: '2011-08-12T20:17:46.384Z',
          status: 'loss',
          amount: 6.456,
        },
      ],
    };
  }

  render() {
    const renderItem = ({item}) => {
      return (
        <View
          style={
            item.id == 1
              ? styles.last_taransaction_item_card
              : styles.last_taransaction_item
          }>
          <View style={styles.last_taransaction_left_container}>
            <View style={styles.product_image_container}>
              <Image source={item.logo} style={styles.product_image} />
            </View>
          </View>
          <View style={styles.last_taransaction_center_container}>
            <Text style={[Themes.textBlack, Themes.boldFont]}>
              {item.title}
            </Text>
            <Text style={[Themes.textGreyMedium, styles.transaction_date_text]}>
              {moment.utc(item.date).format('DD MMM, YYYY')}
            </Text>
          </View>
          <View style={styles.last_taransaction_right_container}>
            {item.status == 'loss' ? (
              <Text
                style={[
                  Themes.textRedLight,
                  styles.last_taransaction_amount_text,
                ]}>
                - {item.amount}
              </Text>
            ) : (
              <Text
                style={[
                  Themes.textPrimaryMedium,
                  styles.last_taransaction_amount_text,
                ]}>
                + {item.amount}
              </Text>
            )}
          </View>
        </View>
      );
    };
    return (
      <LinearGradient
        colors={[AppStyles.color.white, AppStyles.color.primaryLight]}
        start={{x: 0, y: 0.2}}
        end={{x: 2, y: 0}}
        style={[BasePagestyles.baseContainer, styles.baseContainer]}>
        <SafeAreaView />
        <View style={styles.primary_background}>
          <AppBar
            userGreet={true}
            menu={true}
            menuIconColor={AppStyles.color.greyLight}
          />

          <View style={styles.container}>
            <View style={styles.card_container}>
              <LinearGradient
                colors={[
                  AppStyles.color.secondary,
                  AppStyles.color.primaryWhiteShade,
                  AppStyles.color.primaryLight,
                  AppStyles.color.secondary,
                ]}
                style={styles.card}
                start={{x: 0, y: 1.2}}
                end={{x: 1.2, y: 0}}>
                <View style={styles.card_inner_top_container}>
                  <View style={BasePagestyles.flex}>
                    <Text style={[Themes.textWhite]}>Balance</Text>
                    <Title style={[Themes.textWhite, Themes.boldFont]}>
                      $ {this.state.cardDetails.accountBalance}
                    </Title>
                    <Text numberOfLines={1} style={[Themes.textWhite]}>
                      **** **** **** 2415
                    </Text>
                  </View>
                  <View style={styles.card_inner_top_rignt_container}>
                    <Avatar.Icon
                      icon="sim"
                      size={50}
                      color={AppStyles.color.white}
                      style={[Themes.iconStyle, BasePagestyles.left10]}
                    />
                  </View>
                </View>
                <View style={BasePagestyles.height5} />
                <View style={styles.card_inner_top_container}>
                  <View style={BasePagestyles.flex}>
                    <Text style={[Themes.textWhite]}>Card Holder</Text>
                    <Text style={[Themes.textWhite, Themes.boldFont]}>
                      {this.state.cardDetails.name}
                    </Text>
                  </View>
                  <View style={styles.card_icon_container}>
                    <Icon
                      name={'credit-card'}
                      style={styles.card_icon}
                      color={AppStyles.color.white}
                      size={25}
                    />
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View>
        </View>
        <View style={styles.send_money_outter_container}>
          <Text
            style={[Themes.textWhite, Themes.boldFont, styles.send_money_text]}>
            Send Money
          </Text>
          <View style={styles.send_money_container}>
            <LinearGradient
              colors={[AppStyles.color.primaryLight, AppStyles.color.white]}
              locations={[0, 0.6]}
              style={styles.send_money_option_container}>
              <TouchableOpacity
                style={[styles.send_money_option, Themes.whiteBg]}>
                <Icon
                  name={'user'}
                  color={AppStyles.color.secondary}
                  size={30}
                />
              </TouchableOpacity>
              <Text
                numberOfLines={1}
                style={[
                  BasePagestyles.marginHorizontal10,
                  Themes.textGreyMedium,
                  styles.send_money_option_text,
                ]}>
                Louis
              </Text>
            </LinearGradient>

            <LinearGradient
              colors={[AppStyles.color.primaryLight, AppStyles.color.white]}
              locations={[0, 0.6]}
              style={styles.send_money_option_container}>
              <TouchableOpacity
                style={[styles.send_money_option, Themes.whiteBg]}>
                <Icon
                  name={'user'}
                  color={AppStyles.color.secondary}
                  size={30}
                />
              </TouchableOpacity>
              <Text
                numberOfLines={1}
                style={[
                  BasePagestyles.marginHorizontal10,
                  Themes.textGreyMedium,
                  styles.send_money_option_text,
                ]}>
                Gilberto
              </Text>
            </LinearGradient>
            <LinearGradient
              colors={[AppStyles.color.primaryLight, AppStyles.color.white]}
              locations={[0, 0.6]}
              style={styles.send_money_option_container}>
              <TouchableOpacity style={styles.send_money_option}>
                <Icon name={'plus'} color={AppStyles.color.white} size={29} />
              </TouchableOpacity>
              <Text
                style={[
                  BasePagestyles.marginHorizontal10,
                  Themes.textGreyMedium,
                  styles.send_money_option_text,
                ]}>
                Add New
              </Text>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.transaction_list_container}>
          <View style={styles.last_taransaction_container}>
            <Text style={[Themes.textBlack, Themes.boldFont]}>
              Last Transaction
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <Icon_MaterialCommunityIcons
                name={'dots-horizontal'}
                color={AppStyles.color.geryMedium}
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={this.state.data}
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() => {
            return (
              <View style={styles.no_data_container}>
                <Text>No data found</Text>
              </View>
            );
          }}
        />
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  baseContainer: {
    marginBottom: '17%',
  },
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: AppStyles.color.redLight,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 0,
    padding: 15,
  },
  primary_background: {
    height: '53%',
    width: '100%',
    backgroundColor: AppStyles.color.primary,
    borderBottomStartRadius: 100 / 2,
    borderBottomEndRadius: 100 / 2,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card_container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: '15%',
  },
  card: {
    width: '92%',
    borderRadius: 25,
    padding: '5%',
  },
  card_inner_top_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card_inner_top_rignt_container: {
    flex: 1,
    alignItems: 'flex-end',
  },
  card_icon_container: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginLeft: 15,
  },
  card_icon: {
    right: 5,
  },
  send_money_outter_container: {
    marginTop: -65,
  },
  send_money_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
  transaction_list_container: {
    marginTop: 20,
  },
  send_money_option_container: {
    width: '25%',
    borderRadius: 15,

    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  send_money_option: {
    width: '75%',
    padding: 5,
    borderRadius: 10,
    backgroundColor: AppStyles.color.secondary,

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  send_money_text: {
    marginLeft: 15,
    marginBottom: 10,
  },
  flatList: {
    paddingTop: 5,
  },
  no_data_container: {
    marginTop: '10%',
    alignItems: 'center',
  },
  last_taransaction_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  send_money_option_text: {
    marginVertical: 5,
  },
  last_taransaction_item_card: {
    marginBottom: '5%',
    alignSelf: 'center',
    width: '92%',
    backgroundColor: AppStyles.color.white,
    flexDirection: 'row',
    padding: 15,
    borderRadius: 15,
    elevation: 12,
  },
  last_taransaction_item: {
    marginBottom: '5%',
    alignSelf: 'center',
    width: '92%',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 15,
  },
  last_taransaction_left_container: {
    flex: 0.5,
    justifyContent: 'center',
  },
  product_image_container: {
    height: 40,
    width: 40,
    backgroundColor: AppStyles.color.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  product_image: {
    height: 25,
    width: 25,
  },
  last_taransaction_center_container: {
    flex: 1,
    justifyContent: 'center',
  },
  transaction_date_text: {
    marginTop: 5,
  },
  last_taransaction_right_container: {
    flex: 0.5,
    justifyContent: 'center',
  },
  last_taransaction_amount_text: {
    marginTop: 5,
    fontWeight: 'bold',
  },
});
export default Home;
