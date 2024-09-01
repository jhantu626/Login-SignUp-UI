import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackActions, useNavigation } from '@react-navigation/native';
import { fonts } from '../utils/fonts';
import { colors } from '../utils/colors';

const Login = () => {
  const [isPassword, setIsPassword] = useState(true);

  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TouchableOpacity
        style={styles.btnWrapper}
        onPress={() => navigation.dispatch(StackActions.pop())}>
        <Icon name="arrow-back-outline" color="black" size={40} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Hey,</Text>
        <Text style={styles.headingText}>Wellcome</Text>
        <Text style={styles.headingText}>Back</Text>
      </View>

      {/* Form  */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Icon name="mail-outline" size={25} color={colors.secondary} />
          <TextInput
            keyboardType="email-address"
            placeholder="Enter username/email"
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name={isPassword ? 'lock-closed' : 'lock-open'}
            size={25}
            color={colors.secondary}
          />
          <TextInput
            secureTextEntry={isPassword}
            placeholder="Enter username/email"
            style={styles.textInput}
          />
          <TouchableOpacity onPress={() => setIsPassword(prev => !prev)}>
            <Icon name={isPassword ? 'eye' : 'eye-off'} size={25} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
          <Text style={styles.forgetTxt}>Forget Password?</Text>
        </TouchableOpacity>
        {/* Login Btn */}
        <TouchableOpacity style={styles.loginBtnWrapper}>
          <Text style={styles.loginTxt}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.continueText}>or continue with</Text>
        <TouchableOpacity style={styles.googleBtnContainer}>
          <Image
            style={styles.googleIcon}
            source={require('./../../assets/google.png')}
          />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 11,
    backgroundColor: colors.white,
    padding: 20,
  },
  btnWrapper: {
    height: 40,
    width: 40,
    backgroundColor: colors.gray,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginVertical: 20,
  },
  headingText: {
    fontSize: 32,
    color: colors.primary,
    fontFamily: fonts.SemiBold,
  },
  formContainer: {
    gap: 20,
  },
  inputContainer: {
    height: 55,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 100,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    fontFamily: fonts.Light,
    color: 'black',
  },
  forgetTxt: {
    fontSize: 14,
    fontFamily: fonts.SemiBold,
  },
  loginBtnWrapper: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  loginTxt: {
    fontSize: 18,
    color: colors.white,
    fontFamily: fonts.SemiBold,
    padding: 10,
  },
  continueText: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: colors.primary,
  },
  googleBtnContainer: {
    borderWidth: 2,
    borderColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  googleIcon: {
    width: 25,
    height: 25,
  },
  googleText: {
    fontSize: 15,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    marginBottom: 20,
  },
  accountText: {
    color: colors.primary,
    fontFamily: fonts.Regular,
  },
  signupText: {
    color: colors.primary,
    fontFamily: fonts.SemiBold,
  },
});

export default Login;
