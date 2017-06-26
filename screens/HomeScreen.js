import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  render() {

    let width = Dimensions.get('window').width
    let height = Dimensions.get('window').height

    return (
      <View style={styles.container}>
        <View style={styles.feedBackground}>
          <Image style={{ height: height-120, position: 'absolute'}} source={require('../assets/images/timeline.png')} />
        </View>
        <ScrollView>
          <View style={styles.feedBox} >
            <View style={styles.feedBoxTitleBar}>
              <Text style={styles.feedBoxTitleText}>6h ago</Text>
            </View>
            <View style={styles.feedBoxBody}>
              <Text style={[styles.feedBoxBodyText, styles.feedBoxBodyTextLabel]}>
                Burana
              </Text>
              <Text style={[styles.feedBoxBodyText, styles.feedBoxBodyTextQuantity]}>
                225mg
              </Text>
            </View>
          </View>
          <View style={styles.feedBox} >
            <View style={[styles.feedBoxTitleBar, styles.lowImpact]}>
              <Text style={styles.feedBoxTitleText}>9h ago</Text>
            </View>
            <View style={styles.feedBoxBody}>
              <Text style={[styles.feedBoxBodyText, styles.feedBoxBodyTextLabel]}>
                Orfiril
              </Text>
              <Text style={[styles.feedBoxBodyText, styles.feedBoxBodyTextQuantity]}>
                150mg
              </Text>
            </View>
          </View>
          <View style={styles.feedBox} >
            <View style={styles.feedBoxTitleBar}>
              <Text style={styles.feedBoxTitleText}>6h ago</Text>
            </View>
            <View style={styles.feedBoxBody}>
              <Text style={[styles.feedBoxBodyText, styles.feedBoxBodyTextLabel]}>
                Burana
              </Text>
              <Text style={[styles.feedBoxBodyText, styles.feedBoxBodyTextQuantity]}>
                225mg
              </Text>
            </View>
          </View>
          <View style={styles.feedBox} >
            <View style={[styles.feedBoxTitleBar, styles.lowImpact]}>
              <Text style={styles.feedBoxTitleText}>9h ago</Text>
            </View>
            <View style={styles.feedBoxBody}>
              <Text style={[styles.feedBoxBodyText, styles.feedBoxBodyTextLabel]}>
                Orfiril
              </Text>
              <Text style={[styles.feedBoxBodyText, styles.feedBoxBodyTextQuantity]}>
                150mg
              </Text>
            </View>
          </View>
          <View style={styles.feedBox} >
            <View style={styles.feedBoxTitleBar}>
              <Text style={styles.feedBoxTitleText}>6h ago</Text>
            </View>
            <View style={styles.feedBoxBody}>
              <Text style={[styles.feedBoxBodyText, styles.feedBoxBodyTextLabel]}>
                Burana
              </Text>
              <Text style={[styles.feedBoxBodyText, styles.feedBoxBodyTextQuantity]}>
                225mg
              </Text>
            </View>
          </View>
          <View style={styles.feedBox} >
            <View style={[styles.feedBoxTitleBar, styles.lowImpact]}>
              <Text style={styles.feedBoxTitleText}>9h ago</Text>
            </View>
            <View style={styles.feedBoxBody}>
              <Text style={[styles.feedBoxBodyText, styles.feedBoxBodyTextLabel]}>
                Orfiril
              </Text>
              <Text style={[styles.feedBoxBodyText, styles.feedBoxBodyTextQuantity]}>
                150mg
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.quickButtons}>
          <TouchableHighlight style={styles.tertiaryButton}>
            <Text style={styles.tertiaryButtonLabel}>M</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonLabel}>L</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.primaryButton}>
            <Text style={styles.primaryButtonLabel}>K</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will run slightly slower but
          you have access to useful development tools. {learnMoreButton}.
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    Linking.openURL(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    Linking.openURL(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingTop: 40,
  },
  feedBackground: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  feedBox: {
    width: '90%',
    marginLeft: '5%',
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 40,
    marginTop: 40,
  },
  feedBoxTitleBar: {
    backgroundColor: '#09c',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 30,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  feedBoxTitleText: {
    color: '#fff',
    marginLeft: 4,
    fontSize: 14,
  },
  feedBoxBody: {
    margin: 4,
    flexDirection: 'row',
    flex: 1,
  },
  feedBoxBodyText: {
    fontSize: 23,
  },
  feedBoxBodyTextLabel: {
    flex: 0.7,
    fontWeight: 'bold',
  },
  feedBoxBodyTextQuantity: {
    flex: 0.3,
    textAlign: 'right',
  },
  quickButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 20,
    paddingRight: 20,
  },
  primaryButton: {
    backgroundColor: '#ff0000',
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  primaryButtonLabel: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#0bc',
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  secondaryButtonLabel: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
  },
  tertiaryButton: {
    backgroundColor: '#999',
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  tertiaryButtonLabel: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
  },
  lowImpact: {
    backgroundColor: '#999',
  },
});
