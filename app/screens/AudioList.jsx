import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AudioProvider from '../context/AudioProvider'

export default function AudioList() {
    return (
        <View style={styles.container}>
            <Text>AudioList</Text>
            <AudioProvider />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

