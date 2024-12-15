import {ImageBackground, StyleSheet} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from 'expo-linear-gradient';
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
    const [userNumber, setUserNumber] = useState(null);
    const [gameIsOver, setGameIsOver] = useState(true);
    const [roundsScore, setRoundsScore]=useState(0);   //кількість раундів щоб відгадати число

    const startGameHandler = (chosenNumber) => {
        console.log('Setting userNumber with:', chosenNumber);
        setUserNumber(chosenNumber);
        setGameIsOver(false);
        setRoundsScore(0)
    }
    const gameOverHandler = (allRounds) => {
        setGameIsOver(true);
        setRoundsScore(allRounds)
    }

    //==============Додати функцію, яка буде перезапускати цю гру============
    const restartGame = ()=>{
        setUserNumber(null)
        setGameIsOver(true)
        setRoundsScore(0)
    }

    let screen;

    if (!userNumber) {
        screen = <StartGameScreen onPickNumber={startGameHandler}/>
    } 
    else if (gameIsOver) {
        screen = <GameOverScreen onStartNewGame={restartGame} userNumber={userNumber} roundsScore={roundsScore}/>;
    } 
    else {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
    }
    return (
        <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
            <ImageBackground
                style={styles.rootScreen}
                resizeMode='cover'
                imageStyle={styles.imageStyle}
                source={require('./assets/background.png')}>
                {screen}
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    imageStyle: {
        opacity: 0.15
    }
});
