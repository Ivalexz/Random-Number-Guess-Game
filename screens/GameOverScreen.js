import {View, StyleSheet, Text, Pressable} from 'react-native'
import { startGameHandler } from '../App';

/*
* Виводити кількість раундів,
* яка знадобилась користувачу щоб відгадати число
*
* Виводити число, яке потрібно відгадати
*
* Додати функцію, яка буде перезапускати цю гру
*/

const GameOverScreen = ({onStartNewGame, userNumber, roundsScore}) => {
    return (
        <View style={styles.gameOverScreen}>
           <Text style={styles.gameOverText}>Game Over</Text>
           <Text style={styles.infoText}>Rounds score: {roundsScore}</Text>
           <Text style={styles.infoText}>Number: {userNumber}</Text>
           <Pressable style={styles.RestartBtn} onPress={onStartNewGame}><Text style={styles.RestartText}>Restart</Text></Pressable>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    gameOverScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    gameOverText: {
        fontSize:40,
        fontWeight:800,
        color: 'white',
        marginBottom:15,
    },
    infoText:{
        fontSize:25,
        fontWeight:500,
        color: 'white',
        marginBottom:10,
    },
    RestartBtn:{
        marginTop:10,
        height: 40,
		width: 170,
		borderColor: '#ddb52f',
		borderWidth: 2,
        borderRadius:10,
    },
    RestartText:{
        fontSize:20,
        color: "white",
        fontWeight:700,
        paddingVertical: 3, 
        paddingHorizontal: 50,
    }
});