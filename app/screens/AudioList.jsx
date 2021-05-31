import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList, StyleSheet, SafeAreaView } from 'react-native'
import { AudioContext } from '../context/AudioProvider'

export class AudioList extends Component {
    //contextType lets consume the context value using {this.context}
    static contextType = AudioContext;
    render() {
        return (
            <ScrollView>
                {this.context.audioFiles.map(item =>
                (<Text style={{ padding: 10, borderBottomColor: 'red', borderBottomWidth: 2 }} key={item.id}>
                    {item.filename}
                </Text>))
                }
            </ScrollView>


            // <SafeAreaView>
            //     <FlatList
            //         data={this.context.audioFiles}
            //         renderItem={({ item }) => <Text>{item.filename}</Text>}
            //         keyExtractor={item => item.id}
            //     />
            // </SafeAreaView>
        )
    }
}

export default AudioList


