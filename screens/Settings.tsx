import {
	TouchableOpacity,
	TextInput,
	Text,
	View,
	Pressable,
	StyleSheet,
	Image,
	ScrollView,
	Platform,
	PlatformColor,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AsyncStorage } from "react-native";
import React, { useState, useEffect } from "react";

const Settings = () => {
	const navigation = useNavigation();
	const [user, SetUser] = useState<any>(null);
	let userInfo: any;

	useEffect(() => {
		async function fetchData() {
			const user: any = await AsyncStorage.getItem("userinfo");

			if (user) {
				// console.log(JSON.parse(user).user.username);
				SetUser(JSON.parse(user).user);
				userInfo = JSON.parse(user);
			}
		}
		fetchData();

		return () => {
			console.log("");
		};
	}, []);
	const handleLogout = async () => {
		await AsyncStorage.removeItem("userinfo");
		navigation.navigate("SignIn");
	};

	return (
		<ScrollView style={styles.container}>
			<View style={styles.profile}>
				<Image
					style={styles.profileImage}
					source={{ uri: `${user && user.avatar}` }}
				/>
				<Text style={styles.profileName}>{user && user.username}</Text>
				<Text style={styles.profileEmail}>{user && user.email}</Text>

				<TouchableOpacity
					style={styles.editProfile}
					onPress={() => navigation.navigate("EditProfile")}>
					<Text style={styles.editProfileText}>Edit Profile</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.settings}>
				<View style={styles.setting}>
					<Text style={styles.settingText}>Notifications</Text>
					<Pressable style={styles.settingButton}>
						<Text style={styles.settingButtonText}>On</Text>
					</Pressable>
				</View>
				<View style={styles.setting}>
					<Text style={styles.settingText}>Language</Text>
					<Pressable style={styles.settingButton}>
						<Text style={styles.settingButtonText}>English</Text>
					</Pressable>
				</View>
				{/* <View style={styles.setting}>
					<Text style={styles.settingText}>Currency</Text>
					<Pressable style={styles.settingButton}>
						<Text style={styles.settingButtonText}>USD</Text>
					</Pressable>
				</View> */}
				<View style={styles.setting}>
					<Text style={styles.settingText}>Dark Mode</Text>
					<Pressable style={styles.settingButton}>
						<Text style={styles.settingButtonText}>Off</Text>
					</Pressable>
				</View>
				<View style={styles.setting}>
					<Text style={styles.settingText}>Help</Text>
					<Pressable style={styles.settingButton}>
						<Text style={styles.settingButtonText}>FAQ</Text>
					</Pressable>
				</View>
				<View style={styles.setting}>
					<Text style={styles.settingText}>Logout</Text>
					<Pressable
						style={styles.settingButton}
						onPress={() => handleLogout()}>
						<Text style={styles.settingButtonText}>Logout</Text>
					</Pressable>
				</View>
			</View>
		</ScrollView>
	);
};

export default Settings;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#e3f5f9",
		padding: 24,
	},
	profile: {
		alignItems: "center",
		backgroundColor: "#FFF8E4",
		paddingHorizontal: 24,
		paddingVertical: 24,
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1.5,
		},
		shadowOpacity: 0.2,
		shadowRadius: 2.84,
		elevation: 5,
	},
	profileImage: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	profileName: {
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 10,
	},
	profileEmail: {
		fontSize: 16,
		color: "#666",
		marginTop: 5,
	},
	settings: {
		marginTop: 20,
		marginBottom: 100,
	},
	setting: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
		borderRadius: 10,
		backgroundColor: "#fff",
		marginBottom: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1.5,
		},
		shadowOpacity: 0.2,
		shadowRadius: 2.84,
		elevation: 5,
	},
	settingText: {
		fontSize: 16,
	},
	settingButton: {
		padding: 10,
		borderRadius: 10,
		backgroundColor: "#e3f5f9",
	},
	settingButtonText: {
		fontSize: 16,
	},
	editProfile: {
		padding: 10,
		borderRadius: 10,
		backgroundColor: "#e3f5f9",
		marginTop: 10,
	},
	editProfileText: {
		fontSize: 16,
	},
});
