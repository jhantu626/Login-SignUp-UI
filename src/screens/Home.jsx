import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('./../../assets/logo.png')} style={styles.logo} />
      <Image
        source={require('./../../assets/Image.png')}
        style={styles.bannerImage}
      />
      <Text style={styles.title}>Lorem, ipsum dolor.</Text>
      <Text style={styles.subTitle}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi
        adipisci, culpa porro laboriosam!
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={[styles.btnWrapper, {backgroundColor: colors.primary}]}>
          <Text style={styles.loginBtnTxt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={[styles.btnWrapper]}>
          <Text style={styles.signupBtnTxt}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  logo: {
    width: 113,
    height: 39,
    marginVertical: 20,
  },
  bannerImage: {
    width: 231,
    height: 250,
  },
  title: {
    fontSize: 36,
    fontFamily: fonts.SemiBold,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.primary,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    paddingHorizontal: 20,
    textAlign: 'center',
    fontFamily: fonts.Light,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    borderWidth: 2,
    borderColor: colors.secondary,
    width: '80%',
    height: 60,
    borderRadius: 100,
  },
  btnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 98,
  },
  loginBtnTxt: {
    color: colors.white,
    fontFamily: fonts.SemiBold,
    fontSize: 18,
  },
  signupBtnTxt: {
    fontFamily: fonts.SemiBold,
    fontSize: 18,
  },
});

export default Home;
