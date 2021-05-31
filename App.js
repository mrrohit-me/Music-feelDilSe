import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./app/navigation/AppNavigation";
import AudioContext from "./app/context/AudioProvider"

export default function App() {
	return (
		<AudioContext>
			<NavigationContainer>
				<AppNavigation />
			</NavigationContainer>
		</AudioContext>
	);
}
