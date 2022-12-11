import {
	TouchableOpacity,
	TextInput,
	Text,
	View,
	Pressable,
	StyleSheet,
	ScrollView,
} from "react-native";
import React from "react";
import { RootTabScreenProps } from "../types";
import { FontAwesome } from "@expo/vector-icons";
import TopHeader from "../components/TopHeader";
import CalendarStrip from "react-native-calendar-strip";
import DoctorCard from "../components/DoctorCard";

const Home = ({ navigation }: RootTabScreenProps<"Home">) => {
	return (
		<ScrollView style={styles.container} scrollEventThrottle={16}>
			<TopHeader />
			<Text style={styles.title}>Hello Kevin! 👋</Text>
			<View style={styles.searchBar}>
				<FontAwesome name='search' size={24} color='#3E3E3E' />
				<TextInput
					style={styles.searchInput}
					placeholder='Find Doctor or Service'
					placeholderTextColor={"#3E3E3E"}
					underlineColorAndroid={"transparent"}
				/>
			</View>
			<Text style={styles.title}>How is Your mood today</Text>
			<View style={styles.moodContainer}>
				<Pressable style={styles.moodButton}>
					<Text style={styles.moodText}>😢</Text>
				</Pressable>
				<Pressable style={styles.moodButton}>
					<Text style={styles.moodText}>😔</Text>
				</Pressable>
				<Pressable style={styles.moodButton}>
					<Text style={styles.moodText}>😊</Text>
				</Pressable>
				<Pressable style={styles.moodButton}>
					<Text style={styles.moodText}>😐</Text>
				</Pressable>
				<Pressable style={styles.moodButton}>
					<Text style={styles.moodText}>😠</Text>
				</Pressable>
			</View>

			<View style={styles.card}>
				<Text style={styles.cardTitle}>Did you know?</Text>

				<Text style={styles.cardDate}>Can strees help some times</Text>
				<Text style={styles.subtext}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
					voluptatibus maiores, dignissimos fugit expedita non neque nemo
					ratione, repudiandae, soluta modi sunt atque nam esse reiciendis vel
					quia inventore. Impedit, laboriosam ad!
				</Text>
				<Text style={styles.subtext}>Written by: Ruberwa Blaise</Text>
			</View>
			<View style={styles.card} nativeID='progress'>
				<Text style={styles.progressTitle}>Track your progress</Text>

				<View style={styles.progressContainer}>
					<View>
						<Text style={styles.progressItemTitle}>Last time</Text>
						<View style={styles.progressItemFirst}>
							<View style={styles.progressItem}>
								<Text style={styles.progressItemValue}>Doctor:None</Text>
								<Text style={styles.progressItemValue}>
									Friend Ai: Quick Test
								</Text>
								<Text style={styles.progressItemValue}>Mood:Amazing</Text>
							</View>
						</View>
					</View>
					<View>
						<Text style={styles.progressItemTitle}>Today</Text>
						<View style={styles.progressItemSecond}>
							<View style={styles.progressItem}>
								<Text style={styles.progressItemValue}>Doctor:None</Text>
								<Text style={styles.progressItemValue}>
									Friend Ai: Quick Test
								</Text>
								<Text style={styles.progressItemValue}>Mood:Amazing</Text>
							</View>
						</View>
					</View>
					<View>
						<Text style={styles.progressItemTitle}>Tommorow</Text>
						<View style={styles.progressItemThird}>
							<View style={styles.progressItem}>
								<Text style={styles.progressItemValue}>Doctor:None</Text>
								<Text style={styles.progressItemValue}>
									Friend Ai: Quick Test
								</Text>
								<Text style={styles.progressItemValue}>Mood:Amazing</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.progressContent}>
					<Text style={styles.progressContentTitle}>
						According to the terms of your progress Your are emotional balanced
						than the last time you vissited this app Keep tracking your daily
						progress
					</Text>
				</View>
				<View style={{ width: "100%" }}>
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
			</View>
			<Text style={styles.AppointTitle}>My Appointments</Text>

			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				<DoctorCard />
				<DoctorCard />
			</ScrollView>
			<View style={styles.friendAiCard}>
				<View style={styles.friendAiCardtop}>
					<Text style={styles.friendAiCardTitle}>Friend AI</Text>
					<FontAwesome name='chevron-right' size={16} color='#3E3E3E' />
				</View>
				<Text style={styles.friendAiCardDesc}>
					Meet that One friend that can not betray you and will always be their
					for you
				</Text>
				<TouchableOpacity style={styles.friendAiCardButton}>
					<Text style={{ color: "white", fontWeight: "bold" }}>Get in</Text>
					<FontAwesome
						name='heartbeat'
						size={20}
						color='white'
						style={{ marginLeft: 9 }}
					/>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#e3f5f9",
		padding: 24,
	},
	title: {
		fontSize: 16,
		color: "black",
		marginTop: 16,
	},
	searchBar: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 10,
		padding: 10,
		marginTop: 16,
		marginBottom: 20,
	},
	searchInput: {
		marginLeft: 10,
		fontSize: 16,
		color: "black",
	},
	moodContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 16,
	},
	moodButton: {
		backgroundColor: "#ADC8F3",
		padding: 10,
		borderRadius: 10,
		width: 60,
		height: 60,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	moodText: {
		fontSize: 35,
		color: "black",
	},
	card: {
		backgroundColor: "#fff",
		paddingHorizontal: 16,
		paddingVertical: 16,
		borderRadius: 10,
		marginTop: 16,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	cardTitle: {
		fontSize: 16,
		color: "black",
		textShadowColor: "#585858",
		textShadowOffset: { width: 5, height: 5 },
		textShadowRadius: 10,
	},
	cardDate: {
		fontSize: 12,
		color: "black",
		textShadowColor: "#585858",
		textShadowOffset: { width: 5, height: 5 },
		textShadowRadius: 10,
		marginTop: 8,
	},
	subtext: {
		fontSize: 12,
		color: "black",
		marginTop: 8,
	},
	progressTitle: {
		fontSize: 16,
		color: "gray",
	},
	progressContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 16,
	},
	progressItem: {
		backgroundColor: "white",
		padding: 1,
		width: 100,
		height: 80,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	progressItemTitle: {
		fontSize: 16,
		color: "black",
	},
	progressItemValue: {
		fontSize: 10,
		color: "black",
		marginBottom: 5,
	},
	progressItemFirst: {
		borderColor: "black",
		// borderWidth: 2,
		borderRightWidth: 1,
		borderBottomWidth: 1,
		borderTopWidth: 1,
	},
	progressItemSecond: {
		borderColor: "black",
		borderBottomWidth: 1,
		borderTopWidth: 1,
	},
	progressItemThird: {
		borderColor: "black",
		// borderWidth: 2,
		borderLeftWidth: 1,
		borderBottomWidth: 1,
		borderTopWidth: 1,
	},
	progressContent: {
		backgroundColor: "white",
		width: 300,
		height: 80,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 10,
		marginTop: 16,
		marginBottom: 5,
	},
	progressContentTitle: {
		fontSize: 13,
		color: "black",
		textAlign: "center",
	},
	AppointTitle: {
		fontSize: 16,
		fontWeight: "bold",
		color: "gray",
		marginTop: 16,
	},
	friendAiCard: {
		backgroundColor: "#F8E5DB",
		width: "100%",
		padding: 16,
		paddingHorizontal: 10,
		marginTop: 16,
		borderRadius: 20,
		marginBottom: 120,
	},
	friendAiCardTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#3E3E3E",
		textAlign: "left",
		marginBottom: 10,
	},
	friendAiCardDesc: {
		fontSize: 12,
		color: "#3E3E3E",
		textAlign: "left",
	},
	friendAiCardButton: {
		backgroundColor: "#00D1FF",
		color: "white",
		padding: 10,
		borderRadius: 10,
		width: 100,
		height: 40,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
	},
	friendAiCardtop: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});
