import {Text, View, useColorScheme} from 'react-native';

const HomePage = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      className={`${isDarkMode ? 'bg-slate-900' : 'bg-gray-300'} min-h-screen`}>
      <Text className="text-center my-5">Welcome</Text>
    </View>
  );
};

export default HomePage;
