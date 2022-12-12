import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AsyncStorage } from "react-native";

const TopHeader = () => {
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

	return (
		<View style={styles.container}>
			<View style={styles.topHeaderLeft}>
				<Image style={styles.logo} source={{ uri: `${user && user.avatar}` }} />
			</View>
			<View style={styles.topHeaderRight}>
				<FontAwesome5 name='bars' size={30} color='black' />
			</View>
		</View>
	);
};

export default TopHeader;

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		marginBottom: 16,
	},
	topHeaderLeft: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	topHeaderRight: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	logo: {
		width: 50,
		height: 50,
		borderRadius: 50,
	},
});
