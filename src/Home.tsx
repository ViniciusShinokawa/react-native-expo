import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';


export default function Home() {
   

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <img style={styles.img} src="https://intercol.ind.br/assets/images/Logo-light%20copiar.png" alt="" />
            </View>

            <view>ASDASDASD</view>
         
        </View>
    );
}

const styles = StyleSheet.create({
    img:{
        width: 300
    },
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },


    input: {
        
        marginTop: 5,
        borderWidth: 1,
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        width: '100%', // Ajustado para 100% para ocupar toda a largura
        color: '#ffffff',
        borderColor:'#FF7607'
        
    },
    titulo: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FF7607',
    },

    shadowProp: { 
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    container2: {
        
        backgroundColor: '#25292e',
        width:'40%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    }
});