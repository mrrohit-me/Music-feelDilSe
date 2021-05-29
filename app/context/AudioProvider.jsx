import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'
import * as MediaLibrary from 'expo-media-library';

export class AudioProvider extends Component {
    constructor(props) {
        super(props)
    }

    permissionAlert = () => {
        Alert.alert("permission Required", "This app need to read audio Files",
            [
                // below Text represent Button on alert
                {
                    text: 'i m Ready',
                    onPress: () => this.getPermission()
                }, {
                    text: 'cancle',
                    onPress: () => this.permissionAlert()
                }
            ]
        )
    }

    getPermission = async () => {
        const permission = await MediaLibrary.getPermissionsAsync()
        if (permission.granted) {
            // We want to show the Audio files..
        }

        if (!permission.granted && permission.canAskAgain) {
            const { status } = await MediaLibrary.requestPermissionsAsync();

            if (status === 'denied' && canAskAgain) {
                // we are going to show alert that you need to allow this permission to use app
                this.permissionAlert()
            }

            if (status === 'granted') {
                // we want to get all the audio files
            }

            if (status === 'denied' && !canAskAgain) {
                // we want to display some error to user
            }
        }
    }

    componentDidMount() {
        this.getPermission()
    }

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

export default AudioProvider
