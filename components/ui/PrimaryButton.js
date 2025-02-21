import { Text, View, Pressable, StyleSheet } from "react-native";

function PrimaryButton(props) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={props.onPress} android_ripple={{color: '#640233'}} 
            style={({pressed}) => pressed ? [styles.buttonInnercontainer, styles.pressed] : styles.buttonInnercontainer}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden' // It will clip the ripple efect 
        // which will go out side of the conatiner
    },
    buttonInnercontainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: { // For iOS ripple effect
        opacity: 0.75,
    }
});