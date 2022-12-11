import { StyleSheet } from "react-native";
import { SocialIcon } from "react-native-elements";
import {
	TouchableOpacity,
	TextInput,
	Text,
	View,
	Pressable,
} from "react-native";
import { RootTabScreenProps } from "../types";

export default function SignUp({ navigation }: RootTabScreenProps<"SignUp">) {
	const handleSignUp = () => {};
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Hello Welcome to Friend Ai🫶</Text>
			<Text style={styles.subtitle}>SignUp</Text>
			<TextInput
				style={styles.textinput}
				placeholder='Your Names'
				placeholderTextColor={"black"}
				underlineColorAndroid={"transparent"}
			/>
			<TextInput
				style={styles.textinput}
				placeholder='Your Email'
				keyboardType='email-address'
				placeholderTextColor={"black"}
				underlineColorAndroid={"transparent"}
			/>
			<TextInput
				style={styles.textinput}
				placeholder='Password'
				secureTextEntry={true}
				placeholderTextColor={"black"}
				underlineColorAndroid={"transparent"}
			/>
			<TextInput
				style={styles.textinput}
				placeholder='Confirm Password'
				secureTextEntry={true}
				placeholderTextColor={"black"}
				underlineColorAndroid={"transparent"}
			/>
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={handleSignUp}
				style={styles.appButtonContainer}>
				<Text style={styles.appButtonText}>Sign Up</Text>
			</TouchableOpacity>

			<View style={styles.reDirecter}>
				<Text style={styles.asker}>Already a Member?</Text>
				<Pressable onPress={() => navigation.navigate("SignIn")}>
					<Text style={styles.Relink}>Sign in</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#e3f5f9",
		padding: 24,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 16,
	},
	subtitle: {
		fontSize: 22,
		textAlign: "center",
		fontWeight: "bold",
		marginBottom: 24,
	},
	textinput: {
		backgroundColor: "white",
		borderRadius: 6,
		padding: 16,
		margin: 2,
		width: "100%",
		color: "black",
		marginBottom: 24,
	},
	appButtonContainer: {
		backgroundColor: "red",
		paddingHorizontal: 3,
		paddingVertical: 2,
		width: "100%",
		borderRadius: 7,
		padding: 16,
		marginBottom: 24,
	},
	appButtonText: {
		textAlign: "center",
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
		padding: 16,
	},
	socialIcons: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 24,
	},
	asker: {
		fontSize: 16,
		textAlign: "center",
	},
	Relink: {
		fontSize: 16,
		textAlign: "center",

		color: "blue",
	},
	reDirecter: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
});
