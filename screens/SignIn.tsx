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

export default function SignIn({ navigation }: RootTabScreenProps<"SignIn">) {
	const handleSignIn = () => {
		//navigate to home when clicked
		navigation.navigate("Homes");
	};
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Hello Again!</Text>
			<Text style={styles.subtitle}>Welcome back you've been missed</Text>
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
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={handleSignIn}
				style={styles.appButtonContainer}>
				<Text style={styles.appButtonText}>Sign in</Text>
			</TouchableOpacity>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					marginBottom: 24,
				}}>
				<View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
				<View>
					<Text
						style={{ width: "100%", textAlign: "center", fontWeight: "bold" }}>
						Or continue with{" "}
					</Text>
				</View>
				<View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
			</View>

			<View style={styles.socialIcons}>
				<SocialIcon
					type='google'
					raised={false}
					iconSize={20}
					style={{ marginRight: 10 }}
				/>
				<SocialIcon
					type='twitter'
					raised={false}
					iconSize={20}
					style={{ marginRight: 10 }}
				/>
				<SocialIcon
					type='facebook'
					raised={false}
					iconSize={20}
					style={{ marginRight: 10 }}
				/>
			</View>
			<View style={styles.reDirecter}>
				<Text style={styles.asker}>Not a Member?</Text>
				<Pressable onPress={() => navigation.navigate("SignUp")}>
					<Text style={styles.Relink}>Register Now</Text>
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
	},
	subtitle: {
		fontSize: 16,
		textAlign: "center",
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
