import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Color from './constants/color';
import StartGame from './components/screens/StartGame';
import { LinearGradient } from 'expo-linear-gradient';
import Game from '../components/screens/Game';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const pickedNyNmberHandler = (num) => {
    setUserNumber(num);
  }
    
  let screen = <StartGame onPickNumber={pickedNyNmberHandler}/>;
  if (userNumber) {
    screen = <Game/>
  }
  return (
    <LinearGradient style={styles.container} colors={['#4e0329', '#ddb52f']}>
      <ImageBackground>
        <StartGame />
      </ImageBackground>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Color.accent500,
  },
});
