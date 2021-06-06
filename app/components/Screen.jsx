import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Screen = ({ children }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                {children}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        paddingTop: StatusBar.currentHeight,
    }
})

export default Screen