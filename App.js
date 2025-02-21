import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import Color from './constants/color';
import StartGame from './components/screens/StartGame';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './components/screens/GameScreen';
import GameOver from './components/screens/GameOver';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }
  function gameOverHandler(num) {
    setGameIsOver(true);
    setGuessRounds(num);
  }
  const pickedMyNmberHandler = (num) => {
    setUserNumber(num);
    setGameIsOver(false);
  }
  let screen = <StartGame onPickNumber={pickedMyNmberHandler}/>;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  if (gameIsOver && userNumber) {
    screen = <GameOver roundsNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler}/>
  }
  return (
    <LinearGradient style={styles.container} colors={['#4e0329', '#ddb52f']}>
      <ImageBackground source={require('./assets/images/background.png')} 
      resizeMode='cover' style={styles.container} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
