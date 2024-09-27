import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

// 메인 화면 컴포넌트
const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>단어 마법학교</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Icon name="settings-outline" size={24} color="#8B5CF6" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.characterContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/200' }}
          style={styles.characterImage}
        />
      </View>
      
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('WordExploration')}>
          <Icon name="book-outline" size={24} color="#FFFFFF" />
          <Text style={styles.menuButtonText}>단어 탐험</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('MagicSpell')}>
          <Icon name="wand-outline" size={24} color="#FFFFFF" />
          <Text style={styles.menuButtonText}>마법 주문</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('MagicBattle')}>
          <Icon name="sword-outline" size={24} color="#FFFFFF" />
          <Text style={styles.menuButtonText}>마법 대결</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Shop')}>
          <Icon name="cart-outline" size={24} color="#FFFFFF" />
          <Text style={styles.menuButtonText}>상점</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Gold: 1000</Text>
        <Text style={styles.footerText}>마법석: 50</Text>
      </View>
    </SafeAreaView>
  );
};

// 다른 화면들 (예시)
const WordExplorationScreen = () => (
  <View style={styles.screenContainer}>
    <Text>단어 탐험 화면</Text>
  </View>
);

const MagicSpellScreen = () => (
  <View style={styles.screenContainer}>
    <Text>마법 주문 화면</Text>
  </View>
);

const MagicBattleScreen = () => (
  <View style={styles.screenContainer}>
    <Text>마법 대결 화면</Text>
  </View>
);

const ShopScreen = () => (
  <View style={styles.screenContainer}>
    <Text>상점 화면</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={styles.screenContainer}>
    <Text>설정 화면</Text>
  </View>
);

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
        <Stack.Screen name="MagicSpell" component={MagicSpellScreen} />
        <Stack.Screen name="MagicBattle" component={MagicBattleScreen} />
        <Stack.Screen name="Shop" component={ShopScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A78BFA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  characterContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  characterImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#F9D162',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 16,
  },
  menuButton: {
    backgroundColor: '#8B5CF6',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '45%',
    marginBottom: 16,
  },
  menuButtonText: {
    color: '#FFFFFF',
    marginTop: 8,
  },
  footer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  footerText: {
    color: '#FFFFFF',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;