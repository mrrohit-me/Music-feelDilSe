import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList, StyleSheet, SafeAreaView } from 'react-native'
import AudioListItem from '../components/AudioListItem';
import { AudioContext } from '../context/AudioProvider';
import Screen from '../components/Screen'

export class AudioList extends Component {
    //contextType lets consume the context value using {this.context}
    static contextType = AudioContext;
    render() {
        return (
            <Screen>

                {this.context.audioFiles.map(item => <AudioListItem title={item.filename} duration={item.duration} Key={item.id} handleOptions={() => {
                    console.log('opening Console')
                }} />)
                    // (<Text style={{ padding: 10, borderBottomColor: 'red', borderBottomWidth: 2 }} key={item.id}>
                    //     {item.filename}
                    // </Text>))
                }

            </Screen>


            // <Screen>
            //     <FlatList
            //         data={this.context.audioFiles}
            //         renderItem={({ item }) => <AudioListItem title={item.filename} duration={item.duration} Key={item.id} />}
            //         keyExtractor={item => item.id}
            //     />
            // </Screen>
        )
    }
}

export default AudioList


