// utils/wordPool.js
const wordPool = [
    { word: 'major', meaning: '주요한', partOfSpeech: '형용사', difficulty: 1, attribute: '중요도' },
    { word: 'display', meaning: '전시하다', partOfSpeech: '동사', difficulty: 2, attribute: '보여주기' },
    // ... 더 많은 단어들 추가
  ];
  
  export const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordPool.length);
    return wordPool[randomIndex];
  };
  
  export const getWordsByDifficulty = (difficulty) => {
    return wordPool.filter(word => word.difficulty === difficulty);
  };
  
  export const getWordsByAttribute = (attribute) => {
    return wordPool.filter(word => word.attribute === attribute);
  };
  
  export default wordPool;