import {ImageBackground} from 'react-native';
import LottieView from 'lottie-react-native';

const Splash = () => {
  return (
    <ImageBackground
      style={{flex: 1, justifyContent: 'space-between'}}
      source={require('../assets/images/splashBackground.png')}>
      <LottieView
        style={{height: 300, width: 400}}
        source={require('../assets/animations/splash-logo-animation.json')}
        autoPlay
        loop={false}
      />
      <LottieView
        style={{height: 200, width: 400}}
        source={require('../assets/animations/welcome-txt-animation.json')}
        autoPlay
        loop={false}
      />
      <LottieView
        style={{height: 300, width: 400}}
        source={require('../assets/animations/splash-bottom-animation.json')}
        autoPlay
        loop={false}
      />
    </ImageBackground>
  );
};

export default Splash;
