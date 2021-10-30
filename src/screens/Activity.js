import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import {Title} from 'react-native-paper';
import {AppBar} from '../components/AppBar';
import {AppStyles} from '../utils/AppStyles';
import {BasePagestyles} from '../utils/BasePageStyles';
import {Themes} from '../utils/Themes';
import {Images} from '../utils/Images';
import LinearGradient from 'react-native-linear-gradient';
import DropDown from '../components/Dropdown';
import moment from 'moment';
import {LineChart, XAxis, Grid} from 'react-native-svg-charts';

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: '',
      monthList: [
        '6 month',
        '5 month',
        '4 month',
        '3 month',
        '2 month',
        '1 month',
      ],
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
    const data = [
      50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80,
    ];
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
            backIcon={true}
            backIconColor={AppStyles.color.black}
            title={'Activities'}
            titleColor={AppStyles.color.black}
            menu={true}
            menuIconColor={AppStyles.color.black}
          />
          <View style={styles.profit_status_contaier}>
            <View style={BasePagestyles.flex}>
              <Title style={Themes.textPrimaryMedium}>$ 4.620</Title>
              <Text style={Themes.textGreyMedium}>
                <Text style={[Themes.textRedLight, Themes.boldFont]}>-20%</Text>{' '}
                than last month
              </Text>
            </View>
            <View style={styles.dropdown_container}>
              <DropDown
                defaultLabel={'Select months'}
                list={this.state.monthList}
                selectedValue={this.state.selectedMonth}
                setValue={async v => {
                  this.setState({selectedMonth: v});
                }}
              />
            </View>
          </View>

          <View style={styles.chart_container}>
            <LineChart
              style={BasePagestyles.flex}
              data={data}
              gridMin={0}
              contentInset={styles.chart_content_inset}
              svg={styles.line_chart_svg}>
              <Grid />
            </LineChart>
            <XAxis
              style={styles.x_axis}
              data={data}
              formatLabel={(value, index) => index}
              contentInset={styles.x_axis_content_inset}
              svg={styles.x_axis_svg}
            />
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
  primary_background: {
    width: '100%',
    backgroundColor: AppStyles.color.white,
    borderBottomStartRadius: 100 / 2,
    borderBottomEndRadius: 100 / 2,
    elevation: 9,
  },
  flatList: {
    paddingTop: 15,
  },
  no_data_container: {
    marginTop: '10%',
    alignItems: 'center',
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
  profit_status_contaier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  dropdown_container: {
    backgroundColor: AppStyles.color.greyLight,
    borderRadius: 10,
    alignItems: 'center',
  },
  chart_container: {
    height: 200,
    padding: 20,
  },
  chart_content_inset: {
    top: 10,
    bottom: 10,
  },
  x_axis: {
    marginHorizontal: -10,
  },
  x_axis_content_inset: {
    left: 10,
    right: 10,
  },
  x_axis_svg: {
    fontSize: 10,
    fill: 'black',
  },
  line_chart_svg: {
    stroke: 'rgb(134, 65, 244)',
  },
});
export default Activity;
