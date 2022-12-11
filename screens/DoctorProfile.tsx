import {
	TouchableOpacity,
	TextInput,
	Text,
	View,
	Pressable,
	StyleSheet,
	Image,
	ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CalendarStrip from "react-native-calendar-strip";
import React from "react";
import { useState } from "react";

const DoctorProfile = () => {
	const navigation = useNavigation();
	const availableHours = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];
	const [selectedTime, setSelectedTime] = useState("");

	return (
		<ScrollView style={styles.container}>
			<LinearGradient
				style={styles.topCard}
				start={{ x: 1, y: 1 }}
				end={{ x: 0, y: 1 }}
				colors={["rgba(255,255,255,1)", "rgba(238,226,255,1)"]}>
				<TouchableOpacity
					onPress={() => {
						navigation.goBack();
					}}
					style={styles.backButton}>
					<Ionicons name='arrow-back' size={25} color='#0049E4' />
				</TouchableOpacity>
				<View style={styles.docdits}>
					<View>
						<Text style={styles.docName}>Dr. Misoke Kiela</Text>
						<Text style={styles.docTitle}>Psychotherapist</Text>
						<Text style={styles.docWork}>Private Therapist</Text>
						<View style={styles.docAvaila}>
							<EvilIcons name='calendar' size={24} color='#9CA0AA' />
							<Text style={{ color: "#9CA0AA", marginLeft: 5 }}>
								Monday-Friday
							</Text>
						</View>
						<View style={styles.docAvailablityTime}>
							<EvilIcons name='clock' size={24} color='#9CA0AA' />
							<Text style={{ color: "#9CA0AA", marginLeft: 5 }}>
								8:00am-5:00pm
							</Text>
						</View>
					</View>
					<View style={styles.docCommunication}>
						<TouchableOpacity style={styles.docCom}>
							<Ionicons name='call' size={24} color='#0049E4' />
						</TouchableOpacity>
						<TouchableOpacity style={styles.docCom}>
							<Ionicons name='videocam' size={24} color='#0049E4' />
						</TouchableOpacity>
						<TouchableOpacity style={styles.docCom}>
							<Ionicons name='chatbox-ellipses' size={24} color='#0049E4' />
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.docImage}>
					<Image
						style={styles.docImg}
						source={require("../assets/images/doc.jpg")}
					/>
				</View>
			</LinearGradient>
			<View style={styles.docExperiance}>
				<View style={styles.docExCard}>
					<Text style={styles.docExTittle}>Patients</Text>
					<View style={styles.docStats}>
						<MaterialIcons name='groups' size={24} color='#2A8AF7' />
						<Text style={styles.docExNumber}> 500+</Text>
					</View>
				</View>
				<View style={styles.docExCard}>
					<Text style={styles.docExTittle}>Experience</Text>
					<View style={styles.docStats}>
						<FontAwesome5 name='briefcase-medical' size={24} color='#2A8AF7' />
						<Text style={styles.docExNumber}> 3 Years</Text>
					</View>
				</View>
				<View style={styles.docExCard}>
					<Text style={styles.docExTittle}>Review</Text>
					<View style={styles.docStats}>
						<Entypo name='star' size={24} color='#2A8AF7' />
						<Text style={styles.docExNumber}> 5+</Text>
					</View>
				</View>
			</View>
			<View style={styles.schedule}>
				<Text style={styles.scheduleTit}>Select Schedule</Text>
				<View style={{ flex: 1 }}>
					<CalendarStrip
						calendarAnimation={{ type: "sequence", duration: 30 }}
						daySelectionAnimation={{
							type: "border",
							duration: 200,
							borderWidth: 1,
							borderHighlightColor: "#0049E4",
						}}
						style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
						calendarHeaderStyle={{ color: "blue" }}
						dateNumberStyle={{ color: "blue" }}
						dateNameStyle={{ color: "blue" }}
						highlightDateNumberStyle={{ color: "white" }}
						highlightDateNameStyle={{ color: "white" }}
						highlightDateNumberContainerStyle={{ backgroundColor: "blue" }}
						highlightDateContainerStyle={{ backgroundColor: "blue" }}
						disabledDateNameStyle={{ color: "grey" }}
						disabledDateNumberStyle={{ color: "grey" }}
						iconContainer={{ flex: 0.1 }}
						selectedDate={new Date()}
					/>
				</View>
				<View style={{ borderColor: "#C6C6C6", borderWidth: 1 }}></View>
			</View>
			<View>
				<TextInput
					style={styles.input}
					placeholder='Reason for Appointment...'
					placeholderTextColor='#838282'
					keyboardType='default'
				/>

				<View style={styles.timePicker}>
					<Text style={styles.timePickerText}>Select Time</Text>
				</View>
				<View style={styles.timePickerContainer}>
					{availableHours.map((item, index) => {
						return (
							<TouchableOpacity
								key={index}
								style={[
									styles.timePickerBtn,
									{
										backgroundColor: selectedTime === item ? "#2A8AF7" : "#fff",
									},
								]}
								onPress={() => {
									setSelectedTime(item);
								}}>
								<Text
									style={[
										styles.timePickerBtnText,
										{
											color: selectedTime === item ? "#fff" : "#000",
										},
									]}>
									{item}
								</Text>
							</TouchableOpacity>
						);
					})}
				</View>

				<TouchableOpacity style={styles.bookBtn}>
					<Text style={styles.bookBtnText}>Make an Appointment</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default DoctorProfile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#e3f5f9",
		padding: 20,
	},
	topCard: {
		borderTopRightRadius: 24,
		borderTopLeftRadius: 24,
		height: 330,
		width: "100%",
		paddingHorizontal: 20,
	},
	docdits: {
		marginBottom: 20,
	},
	backButton: {
		marginTop: 20,
		padding: 10,
		width: 50,
		borderRadius: 10,
		backgroundColor: "white",
		marginBottom: 20,
	},
	docName: {
		fontSize: 25,
		fontWeight: "bold",
		marginBottom: 6,
	},
	docTitle: {
		fontSize: 16,
		color: "#494343",
		marginBottom: 6,
	},
	docAvaila: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 6,
	},
	docAvailablityTime: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	docWork: {
		fontSize: 16,
		color: "#9CA0AA",
		marginBottom: 10,
	},
	docCommunication: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
	},
	docCom: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "white",
		width: 50,
		height: 50,
		borderRadius: 10,
		justifyContent: "center",
		padding: 10,
	},

	docImage: {
		width: 100,
		height: 100,
		borderRadius: 50,
		position: "absolute",
		right: 20,
		bottom: 90,
	},
	docImg: {
		width: 100,
		height: 100,
		borderRadius: 50,
		borderColor: "#2A8AF7",
		borderWidth: 3,
	},
	docExperiance: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
	},
	docExCard: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "white",
		width: 104,
		height: 60,
		borderRadius: 10,
		justifyContent: "center",
		paddingVertical: 10,
	},
	docExTittle: {
		fontSize: 16,
		color: "#9CA0AA",
		marginBottom: 6,
	},
	docExNumber: {
		fontSize: 16,
		fontWeight: "bold",
		marginLeft: 5,
		color: "#616060",
	},
	docStats: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	scheduleTit: {
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 30,
		marginBottom: 2,
	},
	schedule: {
		width: "100%",
	},
	input: {
		borderWidth: 2,
		borderColor: "#2A8AF7",
		borderRadius: 10,
		padding: 10,
		marginTop: 20,
		marginBottom: 20,
		placeholderTextColor: "#838282",
		height: 60,
	},
	bookBtn: {
		backgroundColor: "#2A8AF7",
		padding: 10,
		borderRadius: 10,
		marginBottom: 100,
	},
	bookBtnText: {
		color: "white",
		textAlign: "center",
		paddingVertical: 5,
	},
	timePicker: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 10,
	},
	timePickerText: {
		fontSize: 16,
		color: "#9CA0AA",
		marginBottom: 6,
	},
	timePickerContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	timePickerBtn: {
		backgroundColor: "white",
		width: 80,
		height: 50,
		borderRadius: 10,
		justifyContent: "center",
		padding: 10,
	},
	timePickerBtnText: {
		fontSize: 13,
		color: "#525252",
	},
});
