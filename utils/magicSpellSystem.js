// utils/magicSpellSystem.js
import { getRandomWord } from '/utils/wordPool';

const spellEffects = {
  'protect': (power) => ({ type: 'defense', value: power * 10 }),
  'improve': (power) => ({ type: 'boost', value: power * 5 }),
  'disappear': (power) => ({ type: 'evasion', value: power * 8 }),
  // ... 더 많은 주문 효과 추가
};

export const createSpell = (word1, word2) => {
  const spellPower = word1.difficulty + word2.difficulty;
  const spellName = `${word1.word} ${word2.word}`;
  const spellEffect = spellEffects[word1.word] || spellEffects[word2.word] || (() => ({ type: 'damage', value: spellPower * 3 }));

  return {
    name: spellName,
    power: spellPower,
    effect: spellEffect(spellPower)
  };
};

export const castSpell = (spell, target) => {
  switch (spell.effect.type) {
    case 'damage':
      target.hp -= spell.effect.value;
      break;
    case 'defense':
      target.defense += spell.effect.value;
      break;
    // ... 다른 효과들 구현
  }
  return `${spell.name} 주문을 사용했습니다! ${spell.effect.type}: ${spell.effect.value}`;
};