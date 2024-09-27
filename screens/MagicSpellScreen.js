// screens/MagicSpellScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getRandomWord } from '/utils/wordPool';
import { createSpell, castSpell } from '../utils/magicSpellSystem';

export default function MagicSpellScreen() {
  const [word1, setWord1] = useState(null);
  const [word2, setWord2] = useState(null);
  const [spell, setSpell] = useState(null);
  const [result, setResult] = useState('');

  const selectWords = () => {
    setWord1(getRandomWord());
    setWord2(getRandomWord());
    setSpell(null);
    setResult('');
  };

  const combineWords = () => {
    if (word1 && word2) {
      const newSpell = createSpell(word1, word2);
      setSpell(newSpell);
    }
  };

  const useSpell = () => {
    if (spell) {
      const target = { hp: 100, defense: 0 }; // 예시 타겟
      const spellResult = castSpell(spell, target);
      setResult(spellResult);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>마법 주문 만들기</Text>
      <Button title="단어 선택하기" onPress={selectWords} />
      {word1 && word2 && (
        <View>
          <Text>{word1.word} + {word2.word}</Text>
          <Button title="주문 만들기" onPress={combineWords} />
        </View>
      )}
      {spell && (
        <View>
          <Text>주문: {spell.name} (파워: {spell.power})</Text>
          <Button title="주문 사용하기" onPress={useSpell} />
        </View>
      )}
      {result && <Text>{result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});