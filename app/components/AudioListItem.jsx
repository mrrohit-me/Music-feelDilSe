import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { Entypo } from '@expo/vector-icons';

const getThumbnailText = (filename) => filename[0]
const AudioListItem = ({ title, duration, Key, handleOptions }) => {


    const convertTime = (minutes) => {
        if (minutes) {
            const hrs = minutes / 60;
            const minute = hrs.toString().split('.')[0];
            console.log(minute)
            const percent = parseInt(hrs.toString());
            console.log(percent)
            const sec = Math.ceil((60 * percent) / 100);

            if (parseInt(minute) < 10 && sec < 10) {
                return `0${minute}:0${sec}`;
            }

            if (parseInt(minute) < 10) {
                return `0${minute}:${sec}`;
            }

            if (parseInt(sec) < 10) {
                return `${minute}:0${sec}`;
            }

            return `${minute}:${sec}`;
        }
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <View style={styles.thumbnail}>
                        <Text style={styles.thumbnailText}>{getThumbnailText(title)}</Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text numberOfLines={1} style={styles.title}>{title}</Text>
                        <Text style={styles.timeText}>{convertTime(duration)}</Text>
                    </View>
                </View>
                <View style={styles.rightContainer}>
                    <Entypo
                        onPress={handleOptions}
                        name="dots-three-vertical"
                        size={24}
                        color="black" />
                </View>
            </View>
            <View style={styles.seperator} />
        </>
    )
}

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: width - 20,
        backgroundColor: '#fff',
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    rightContainer: {
        flexBasis: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    thumbnail: {
        height: 50,
        backgroundColor: 'grey',
        flexBasis: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 5,
    },
    thumbnailText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
    },
    titleContainer: {
        width: width - 80,
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        color: 'black'
    },
    timeText: {
        fontSize: 14,
        color: 'grey'
    },
    seperator: {
        width: width - 20,
        backgroundColor: '#333',
        opacity: 0.3,
        height: 0.5,
        alignSelf: 'center',
        marginTop: 10,
    }
})

export default AudioListItem
