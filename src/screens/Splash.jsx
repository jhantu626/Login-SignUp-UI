import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../utils/colors';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 4000);
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.animation}
        source={require('./../../assets/lotties/splashAnimation.json')}
        autoPlay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 300,
    height: 300,
  },
});

export default Splash;
