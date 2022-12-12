import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import TopHeader from "../components/TopHeader";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppoint } from "../redux/appointment";
import { AppDispatch } from "../store";
import { AsyncStorage } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

const SmallCard = ({ appoint }: any) => {
	return (
		<View style={styles.docCardContainer}>
			<View style={styles.docCardOwner}>
				<View>
					<Image
						style={styles.Slogo}
						source={{ uri: `${appoint && appoint.doctor.avatar}` }}
					/>
				</View>
				<View>
					<Text style={styles.docName}>
						Dr. {appoint && appoint.doctor.username}
					</Text>
					<Text style={styles.docTitle}>
						{appoint && appoint.doctor.specialization}
					</Text>
					<View style={styles.SdocAppointment}>
						<SimpleLineIcons name='clock' size={24} color='black' />
						<Text style={styles.SappointmentTime}>
							{appoint && appoint.date} at {appoint && appoint.time}
						</Text>
					</View>
				</View>
				<MaterialCommunityIcons
					name='dots-horizontal'
					size={24}
					color='black'
					style={{ marginLeft: -40 }}
				/>
			</View>
		</View>
	);
};

const Schedule = () => {
	const [user, SetUser] = useState<any>(null);
	const [appoints, setAppoint] = useState<any>(null);
	const dispatch = useDispatch<AppDispatch>();
	const Appoint = useSelector((state: any) => state.appointment);
	const { appointments, loading, error } = Appoint;

	useEffect(() => {
		async function fetchData() {
			const user: any = await AsyncStorage.getItem("userinfo");

			if (user) {
				SetUser(JSON.parse(user).user);
			}
		}
		fetchData();

		return () => {
			console.log("");
		};
	}, []);

	useFocusEffect(
		React.useCallback(() => {
			if (user) {
				dispatch(getAllAppoint(user._id));
			}
			return () => console.log("");
		}, [user])
	);
	useEffect(() => {
		if (appointments) {
			setAppoint(appointments.appointments);
		}
	}, [appointments]);

	return (
		<ScrollView style={styles.container}>
			<TopHeader />
			<View style={styles.topCard}>
				<View style={styles.topCardIcons}>
					<MaterialCommunityIcons
						name='dots-horizontal'
						size={24}
						color='black'
					/>
					<FontAwesome5 name='bell' size={24} color='black' />
				</View>
				<View style={styles.middleSection}>
					<View>
						<Image
							style={styles.logo}
							source={require("../assets/images/doc1.jpg")}
						/>
					</View>
					<Text style={styles.topCardDocName}>Dr. Misoke Kiela</Text>
					<Text style={styles.topCardDocNamePos}>Clinical Psychologist</Text>
					<View style={styles.docAppointment}>
						<SimpleLineIcons name='clock' size={24} color='#3E3E3E' />
						<Text style={styles.appointmentTime}>Today, 09:00-09:45</Text>
					</View>
				</View>
			</View>
			<View style={{ marginBottom: 80 }}>
				{appoints &&
					appoints.map((appoint: any) => <SmallCard appoint={appoint} />)}
			</View>
		</ScrollView>
	);
};

export default Schedule;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#e3f5f9",
		padding: 24,
	},
	logo: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	topCard: {
		display: "flex",
		width: 320,
		height: 280,
		backgroundColor: "white",
		padding: 20,
		borderRadius: 20,
		marginBottom: 10,
		marginTop: 10,
		marginRight: 20,
	},
	middleSection: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	topCardIcons: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
	},
	topCardDocName: {
		fontSize: 25,
		fontWeight: "bold",
		marginBottom: 10,
	},
	topCardDocNamePos: {
		fontSize: 12,
		fontWeight: "500",
		color: "#3E3E3E",
		marginBottom: 10,
	},
	docAppointment: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: "#ADC8F3",
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 20,
	},
	appointmentTime: {
		fontSize: 10,
		fontWeight: "bold",
		color: "#3E3E3E",
		marginLeft: 10,
	},
	Slogo: {
		width: 50,
		height: 50,
		borderRadius: 50,
		marginRight: 20,
	},
	docCardContainer: {
		display: "flex",
		width: 320,
		height: 120,
		backgroundColor: "#E5F2FF",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		padding: 10,
		borderRadius: 20,
		marginBottom: 10,
		marginTop: 10,
	},
	docCardOwner: {
		display: "flex",
		flexDirection: "row",
	},
	docName: {
		fontSize: 20,
		fontWeight: "600",
	},
	docTitle: {
		fontSize: 15,
		fontWeight: "500",
		color: "#3E3E3E",
	},
	SdocAppointment: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		paddingVertical: 2,
		borderRadius: 20,
		width: "90%",
		marginTop: 20,
	},
	SappointmentTime: {
		fontSize: 12,
		color: "#3E3E3E",
		marginLeft: 10,
	},
});
