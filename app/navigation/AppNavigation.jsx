import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AudioList from '../screens/AudioList';
import Player from '../screens/Player';
import Playlist from '../screens/Playlist';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator()

export default function AppNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name='AudioList' 
                component = {AudioList}
                options = {{
                    tabBarIcon:()=>{
                        return(
                            <Ionicons name="headset" size={22} color="black" />
                        )
                    },
                    
                }}
            />

            <Tab.Screen 
                name='Player' 
                component = {Player}
                options = {{
                    tabBarIcon: ()=>{
                        return(
                            <FontAwesome5 name="compact-disc" size={22} color="black" />
                        )
                    }
                }}
            />

            <Tab.Screen 
                name='Playlist' 
                component = {Playlist}
                options = {{
                    tabBarIcon: ()=>{
                        return(
                            <MaterialIcons name="library-music" size={22} color="black" />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

