import { Text, View, StyleSheet, Image } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import React from "react";

const DoctorCard = () => {
	return (
		<View style={styles.docCardContainer}>
			<View style={styles.docCardOwner}>
				<Image
					style={styles.logo}
					source={require("../assets/images/profile.jpg")}
				/>
				<View>
					<Text style={styles.docName}>Dr. Misoke Kiela</Text>
					<Text style={styles.docTitle}>Special cycologist</Text>
				</View>
			</View>
			<View style={styles.docAppointment}>
				<SimpleLineIcons name='clock' size={24} color='#3E3E3E' />
				<Text style={styles.appointmentTime}>Thu, February at 09:25 -9:45</Text>
			</View>
		</View>
	);
};

export default DoctorCard;

const styles = StyleSheet.create({
	logo: {
		width: 50,
		height: 50,
		borderRadius: 50,
		marginRight: 20,
	},
	docCardContainer: {
		display: "flex",
		width: 320,
		height: 145,
		backgroundColor: "#EEE2FF",
		padding: 10,
		borderRadius: 20,
		marginBottom: 10,
		marginTop: 10,
		marginRight: 20,
	},
	docCardOwner: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		marginVertical: 10,
	},
	docName: {
		fontSize: 20,
		fontWeight: "bold",
	},
	docTitle: {
		fontSize: 15,
		fontWeight: "500",
		color: "#3E3E3E",
	},
	docAppointment: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		paddingVertical: 3,
		width: "80%",
		borderRadius: 20,
	},
	appointmentTime: {
		fontSize: 12,
		fontWeight: "bold",
		color: "#3E3E3E",
		marginLeft: 10,
	},
});
