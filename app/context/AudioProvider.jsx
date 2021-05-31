import React, { Component, createContext } from 'react'
import { Text, View, Alert } from 'react-native'
import * as MediaLibrary from 'expo-media-library';


export const AudioContext = createContext()
export class AudioProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            audioFiles: [],
        }
    }

    permissionAlert = () => {
        Alert.alert("permission Required", "This app need to read audio Files",
            [
                // below Text represent Button on alert
                {
                    text: 'i m Ready',
                    onPress: () => this.handlePermission(),
                }, {
                    text: 'cancle',
                    onPress: () => this.permissionAlert(),
                },
            ]
        )
    }

    getAudioFiles = async () => {
        //getAssestAsync collects the data of its mediaType
        let media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
        })

        media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
            //Bydefault Medialibrary takes 20 item at a time,
            //to show total item we use totalCount
            first: media.totalCount
        })
        this.setState({ ...this.state, audioFiles: media.assets })
    }

    handlePermission = async () => {
        const permission = await MediaLibrary.getPermissionsAsync()
        if (permission.granted) {
            // We want to show the Audio files..
            this.getAudioFiles()
        }

        if (!permission.granted) {
            const res = await MediaLibrary.requestPermissionsAsync();
            if (res.granted) {
                this.getAudioFiles()
            } else {
                this.permissionAlert()
            }
        }
    }

    componentDidMount() {
        this.handlePermission()
    }

    render() {
        return (
            <AudioContext.Provider value={{ audioFiles: this.state.audioFiles }}>
                {this.props.children}
            </AudioContext.Provider>

        )
    }
}

export default AudioProvider
