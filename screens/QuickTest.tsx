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
import React, { useState } from "react";
import TopHeader from "../components/TopHeader";
import { Octicons } from "@expo/vector-icons";
import DocSearchCard from "../components/DocSearchCard";
const QuickTest = () => {
	const [search, setSearch] = useState("");
	const searchOptions = [
		"All Doctors",
		"Gynecologist",
		"Divorce",
		"Cycologist",
		"Family",
		"Psychologist",
	];
	return (
		<ScrollView style={styles.container}>
			<TopHeader />
			<View style={styles.searchBar}>
				<Octicons name='search' size={24} color='#3E3E3E' />
				<TextInput
					style={styles.searchInput}
					placeholder='Find Doctor or Service'
					placeholderTextColor={"#3E3E3E"}
					underlineColorAndroid={"transparent"}
				/>
			</View>
			<Text style={styles.tittle}>Doctors</Text>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				style={styles.scrollOptions}>
				{searchOptions.map((item, index) => {
					return (
						<TouchableOpacity style={styles.searchOption} key={index}>
							<Text style={styles.searchOptionText}>{item}</Text>
						</TouchableOpacity>
					);
				})}
			</ScrollView>
			<View style={{ marginBottom: 100 }}>
				<DocSearchCard />
				<DocSearchCard />
				<DocSearchCard />
				<DocSearchCard />
				<DocSearchCard />
				<DocSearchCard />
				<DocSearchCard />
				<DocSearchCard />
			</View>
		</ScrollView>
	);
};

export default QuickTest;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#e3f5f9",
		padding: 24,
	},
	searchBar: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "#B8BDD0",
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
	tittle: {
		fontSize: 20,
		color: "black",
		marginTop: 5,
		fontWeight: "bold",
	},
	searchOption: {
		borderColor: "#0049E4",
		borderWidth: 1,
		borderRadius: 50,
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginRight: 4,
	},
	searchOptionText: {
		fontSize: 16,
		color: "#0049E4",
		fontWeight: "bold",
	},
	scrollOptions: {
		marginVertical: 20,
	},
});
