import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {AppBar} from '../components/AppBar';
import {AppStyles} from '../utils/AppStyles';
import {BasePagestyles} from '../utils/BasePageStyles';
import {Themes} from '../utils/Themes';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import FileViewer from 'react-native-file-viewer';
import DocumentPicker from 'react-native-document-picker';

class QrScanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userCard: {
        title: 'Shyam curren',
      },
      flashLight: false,
    };
  }

  onSuccess = e => {
    Linking.openURL(e.data).catch(err => {});
  };

  selectOneFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      if (res) {
        let uri = res.uri;
        if (Platform.OS === 'ios') {
          uri = res.uri.replace('file://', '');
        }
        console.log('URI : ' + uri);
        FileViewer.open(uri)
          .then(() => {
            console.log('Success');
          })
          .catch(_err => {
            console.log(_err);
          });
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };

  render() {
    return (
      <LinearGradient
        colors={[AppStyles.color.primaryLight, AppStyles.color.white]}
        start={{x: 0.02, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={BasePagestyles.baseContainer}>
        <SafeAreaView />
        <View style={styles.primary_background}>
          <AppBar
            backIcon={true}
            backIconColor={AppStyles.color.white}
            title={"Let's Pay!"}
            titleColor={AppStyles.color.white}
            menu={true}
            menuIconColor={AppStyles.color.greyLight}
          />
          <View style={styles.card_container}>
            <View style={styles.user_card_left_container}>
              <View style={styles.user_profile_container}>
                <Icon name={'user'} color={AppStyles.color.primary} size={25} />
              </View>
            </View>
            <View style={styles.user_card_center_container}>
              <Text style={[Themes.textWhite, Themes.boldFont]}>
                {this.state.userCard.title}
              </Text>
              <Text style={[Themes.textWhite, styles.card_number]}>
                **** **** **** 3849
              </Text>
            </View>
            <View style={styles.user_card_right_container}>
              <Avatar.Icon
                icon="chevron-down-circle"
                size={40}
                color={AppStyles.color.white}
                style={[Themes.iconStyle, BasePagestyles.left10]}
              />
            </View>
          </View>
        </View>

        <QRCodeScanner
          onRead={this.onSuccess}
          flashMode={
            this.state.flashLight ? RNCamera.Constants.FlashMode.torch : null
          }
          containerStyle={styles.qr_container}
          cameraStyle={styles.camera_style}
        />
        <View style={styles.footer}>
          <Text style={[Themes.textBlack, Themes.boldFont, styles.qr_text]}>
            Place the QR code inside the frame
          </Text>
          <View style={styles.buttons_container}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack('')}
              style={styles.button}>
              <Avatar.Icon
                icon="close"
                size={25}
                color={AppStyles.color.primary}
                style={{backgroundColor: AppStyles.color.primaryLight}}
              />
              <Text style={[Themes.textGreyMedium, styles.closeText]}>
                Close
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({flashLight: !this.state.flashLight});
              }}
              style={
                this.state.flashLight
                  ? [styles.button, {backgroundColor: AppStyles.color.primary}]
                  : styles.button
              }>
              <Avatar.Icon
                icon="flash"
                size={30}
                color={
                  this.state.flashLight
                    ? AppStyles.color.white
                    : AppStyles.color.primary
                }
                style={Themes.iconStyle}
              />
              <Text
                style={
                  this.state.flashLight
                    ? Themes.textWhite
                    : Themes.textGreyMedium
                }>
                Flashlight
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selectOneFile()}
              style={styles.button}>
              <Avatar.Icon
                icon="file"
                size={30}
                color={AppStyles.color.primary}
                style={Themes.iconStyle}
              />
              <Text style={Themes.textGreyMedium}>Open File</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  primary_background: {
    height: '53%',
    width: '100%',
    backgroundColor: AppStyles.color.primary,
    borderBottomStartRadius: 100 / 2,
    borderBottomEndRadius: 100 / 2,
  },
  card_container: {
    marginBottom: '5%',
    alignSelf: 'center',
    width: '92%',
    backgroundColor: AppStyles.color.primaryLight,
    flexDirection: 'row',
    padding: 15,
    borderRadius: 15,
  },
  user_card_left_container: {
    justifyContent: 'center',
    marginRight: 10,
  },
  user_profile_container: {
    height: 40,
    width: 40,
    backgroundColor: AppStyles.color.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  user_card_center_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  card_number: {
    marginTop: 5,
  },
  user_card_right_container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  qr_container: {
    borderRadius: 20,
  },
  camera_style: {
    height: 180,
    marginTop: -70,
    width: 200,
    alignSelf: 'center',
    borderTopRightRadius: 50,
  },
  footer: {
    padding: 5,
    paddingBottom: 10,
    justifyContent: 'center',
  },
  qr_text: {
    textAlign: 'center',
    marginBottom: 25,
  },
  buttons_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    height: 75,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppStyles.color.white,
    borderRadius: 15,
  },
  closeText: {
    bottom: -3,
  },
});
export default QrScanner;
