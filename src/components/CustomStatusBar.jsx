import {StatusBar} from 'react-native';
import Colors from '../assets/Colors';


const CustomStatusBar = () => {
  return (
    <StatusBar
      animated={true}
      backgroundColor="rgba(255,255,255,0.1)"
      barStyle="light-content"
      showHideTransition={'slide'}
    />
  );
};

export default CustomStatusBar;
