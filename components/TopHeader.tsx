import { View, StyleSheet, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

const TopHeader = () => {
	return (
		<View style={styles.container}>
			<View style={styles.topHeaderLeft}>
				<Image
					style={styles.logo}
					source={require("../assets/images/profile.jpg")}
				/>
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
