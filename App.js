import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

// 메인 화면 컴포넌트
const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* ... 이전 코드와 동일 ... */}
    </SafeAreaView>
  );
};

// 다른 화면들 (예시)
const WordExplorationScreen = () => (
  <View style={styles.screenContainer}>
    <Text>단어 탐험 화면</Text>
  </View>
);

// ... 다른 화면 컴포넌트들 ...

// 앱의 메인 컴포넌트
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="WordExploration" component={WordExplorationScreen} />
        {/* ... 다른 화면들 ... */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  // ... 스타일 정의 ...
});

export default App;