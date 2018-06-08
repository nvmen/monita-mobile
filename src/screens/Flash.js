/**
 * Monita Blog App
 * @author: Men Nguyen
 * @Url: https://www.monita.vn
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';
import colors from '../styles/colors'; 
import { transparentHeaderStyle } from '../styles/navigation';
import iPhoneSize from '../helpers/utils';

const size = iPhoneSize();
const headingTextSize = 30;

if (size === 'small') {
  headingTextSize = 26;
}

class Flash extends Component {

    static navigationOptions = ({ navigation }) => ({     
      headerStyle: transparentHeaderStyle,
      headerTintColor: colors.white,
    });  
    constructor(props) {
      super(props);
      this.state = {       
      };
    }  
   
    render() {       
        const background = formValid ? colors.green01 : colors.darkOrange;        
      return (
        <KeyboardAvoidingView
          style={[{backgroundColor: background}, styles.wrapper]}
          behavior="padding"
         >
          <View style={styles.scrollViewWrapper}>
            <Text>Men Nguyen XXX</Text>
          </View>
        </KeyboardAvoidingView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    wrapper: {
      display: 'flex',
      flex: 1,
    },
    scrollViewWrapper: {
      marginTop: 70,
      flex: 1,
      padding: 0,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    scrollView: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 20,
      flex: 1,
    },
    loginHeader: {
      fontSize: headingTextSize,
      color: colors.white,
      fontWeight: '300',
      marginBottom: 40,
    },
    notificationWrapper: {
        position: 'absolute',
        bottom: 0,
      left: 0,
      right: 0,
    }
  });
  
  const mapStateToProps = (state) => {
    return {
      
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Flash);