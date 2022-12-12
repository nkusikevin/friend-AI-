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
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { AsyncStorage } from "react-native";

const EditProfile = () => {
	const [user, SetUser] = useState<any>(null);
	const [data, setData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const navigation = useNavigation();

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
	useEffect(() => {
		if (user) {
			setData({ ...data, username: user.username, email: user.email });
		}
	}, [user]);

	return (
		<ScrollView style={styles.container}>
			<View style={styles.profile}>
				<TouchableOpacity
					onPress={() => {
						navigation.goBack();
					}}
					style={styles.backButton}>
					<Ionicons name='arrow-back' size={25} color='#0049E4' />
				</TouchableOpacity>

				<View style={styles.profileImage}>
					<Image
						style={styles.Image}
						source={{ uri: `${user && user.avatar}` }}
					/>
					<Text style={styles.editPic}>Change Picture</Text>
				</View>
			</View>

			<View style={styles.form}>
				<View style={styles.name}>
					<Text style={styles.nameText}>Name</Text>
					<TextInput
						style={styles.nameInput}
						placeholder='Kevin'
						value={data.username}
						onChangeText={(val) => setData({ ...data, username: val })}
					/>
				</View>

				<View style={styles.email}>
					<Text style={styles.emailText}>Email</Text>
					<TextInput
						style={styles.emailInput}
						placeholder=''
						value={data.email}
						onChangeText={(val) => setData({ ...data, email: val })}
					/>
				</View>

				{/* <View style={styles.password}>
					<Text style={styles.passwordText}>Password</Text>
					<TextInput style={styles.passwordInput} placeholder='' />
				</View>

				<View style={styles.confirmPassword}>
					<Text style={styles.confirmPasswordText}>Confirm Password</Text>
					<TextInput style={styles.confirmPasswordInput} placeholder='' />
				</View> */}

				<View style={styles.saveChanges}>
					<TouchableOpacity
						style={styles.saveChangesButton}
						// onPress={() => navigation.navigate("Settings")}
					>
						<Text style={styles.saveChangesButtonText}>Save Changes</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

export default EditProfile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#e3f5f9",
	},
	profile: {
		position: "relative",
		marginBottom: 50,
		backgroundColor: "#9696D0",
		paddingHorizontal: 20,
		height: 200,
	},
	form: {
		padding: 24,
		marginBottom: 100,
	},
	backButton: {
		marginTop: 30,
		padding: 10,
		width: 50,
		borderRadius: 10,
		backgroundColor: "white",
		marginBottom: 20,
	},
	editProfile: {
		marginTop: 24,
		marginBottom: 24,
	},
	editProfileText: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#000",
	},
	profileImage: {
		width: 100,
		height: 100,
		alignSelf: "center",
		marginBottom: 27,
		position: "absolute",
		bottom: -70,
	},
	Image: {
		width: 100,
		height: 100,
		borderRadius: 50,
		borderColor: "white",
		borderWidth: 2,
	},
	editPic: {
		color: "black",
		fontSize: 14,
		textAlign: "center",
		marginTop: 5,
		marginBottom: 5,
	},
	name: {
		marginBottom: 24,
	},
	nameText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#000",
		marginBottom: 5,
	},
	nameInput: {
		fontSize: 16,
		color: "#A0A0A0",
		borderBottomWidth: 1,
		borderBottomColor: "#000",
	},
	email: {
		marginBottom: 24,
	},

	emailText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#000",
		marginBottom: 5,
	},
	emailInput: {
		fontSize: 16,
		color: "#A0A0A0",
		borderBottomWidth: 1,
		borderBottomColor: "#000",
	},
	password: {
		marginBottom: 24,
	},
	passwordText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#000",
		marginBottom: 5,
	},
	passwordInput: {
		fontSize: 16,
		color: "#A0A0A0",
		borderBottomWidth: 1,
		borderBottomColor: "#000",
	},
	confirmPassword: {
		marginBottom: 24,
	},
	confirmPasswordText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#000",
		marginBottom: 5,
	},
	confirmPasswordInput: {
		fontSize: 16,
		color: "#A0A0A0",
		borderBottomWidth: 1,
		borderBottomColor: "#000",
	},
	saveChanges: {
		marginTop: 24,
		marginBottom: 24,
	},
	saveChangesButton: {
		backgroundColor: "#9696D0",
		padding: 16,
		borderRadius: 16,
	},
	saveChangesButtonText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#fff",
		alignSelf: "center",
	},
});
