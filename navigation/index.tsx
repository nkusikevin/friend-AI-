/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import HomeScreen from "../screens/Home";
import Settings from "../screens/Settings";
import Schedule from "../screens/Schedule";
import QuickTest from "../screens/QuickTest";
import EditProfile from "../screens/EditProfile";
import Appointment from "../screens/Appointment";
import DoctorProfile from "../screens/DoctorProfile";
import {
	RootStackParamList,
	RootTabParamList,
	RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export default function Navigation() {
	const scheme = useColorScheme();
	const MyDarkTheme = {
		dark: true,
		colors: {
			primary: "rgb(255, 45, 85)",
			background: "rgb(1, 1, 1)",
			card: "rgb(18, 18, 18)",
			text: "rgb(255, 255, 255)",
			border: "rgb(39, 39, 41)",
			notification: "rgb(255, 69, 58)",
		},
	};

	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={scheme === "dark" ? MyDarkTheme : DefaultTheme}>
			<RootNavigator />
		</NavigationContainer>
	);
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */

function Homes() {
	return (
		<Tab.Navigator
			initialRouteName='Home'
			screenOptions={{
				tabBarActiveBackgroundColor: "#ADC8F3",
				headerStyle: {
					height: 0,
				},
				tabBarStyle: {
					backgroundColor: "#F0F7F8",
					borderTopWidth: 0,
					display: "flex",
					position: "absolute",
					marginHorizontal: 16,
					marginBottom: 16,
					borderRadius: 16,
					justifyContent: "center",
					alignItems: "center",
					height: 60,
				},
				tabBarItemStyle: {
					width: "50%",
					borderRadius: 10,
				},
			}}>
			<Tab.Screen
				name='Home'
				//@ts-ignore
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome name='home' color='gray' size={30} />
					),
					tabBarActiveTintColor: "red",
					tabBarLabel: () => null,
				}}
			/>
			<Tab.Screen
				name='QuickTest'
				//@ts-ignore
				component={QuickTest}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome name='heartbeat' color='gray' size={30} />
					),
					tabBarLabel: () => null,
				}}
			/>
			<Tab.Screen
				name='Schedule'
				//@ts-ignore
				component={Schedule}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome name='calendar' color='gray' size={30} />
					),
					tabBarLabel: () => null,
				}}
			/>

			<Tab.Screen
				name='Settings'
				//@ts-ignore
				component={Settings}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome name='cog' color='gray' size={30} />
					),
					tabBarLabel: () => null,
				}}
			/>
		</Tab.Navigator>
	);
}

function RootNavigator() {
	return (
		<Stack.Navigator initialRouteName='SignIn'>
			<Stack.Screen
				name='SignIn'
				component={SignIn}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='SignUp'
				component={SignUp}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='DoctorProfile'
				component={DoctorProfile}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='EditProfile'
				component={EditProfile}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='Homes'
				component={Homes}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='NotFound'
				component={NotFoundScreen}
				options={{ title: "Oops!" }}
			/>
			<Stack.Group screenOptions={{ presentation: "modal" }}>
				<Stack.Screen name='Modal' component={ModalScreen} />
			</Stack.Group>
		</Stack.Navigator>
	);
}
