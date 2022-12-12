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
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DocSearchCard = ({ doc }: any) => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => {
					//@ts-ignore
					navigation.navigate("DoctorProfile", { id: doc?._id });
				}}>
				<Image style={styles.Slogo} source={{ uri: `${doc && doc.avatar}` }} />
			</TouchableOpacity>
			<View>
				<View style={styles.topDocName}>
					<Text style={styles.docName}>Dr. {doc && doc.username}</Text>
					<MaterialCommunityIcons
						name='heart-multiple-outline'
						size={24}
						color='#0048E2'
					/>
				</View>
				<View
					style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}></View>
				<Text style={styles.docTitle}>{doc && doc.specialization}|CHUK</Text>
				<View style={styles.DocreviewContainer}>
					<View style={styles.Docreview}>
						<FontAwesome name='star-half-o' size={24} color='#0048E2' />
						<Text style={styles.docRating}>4.5 (1,000 reviews)</Text>
					</View>
					{/* <Entypo name='info-with-circle' size={24} color='#0048E2' /> */}
				</View>
			</View>
		</View>
	);
};

export default DocSearchCard;

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "white",
		borderRadius: 20,
		width: 330,
		paddingHorizontal: 20,
		paddingVertical: 15,
		marginBottom: 10,
		marginTop: 10,
	},
	Slogo: {
		width: 100,
		height: 100,
		borderRadius: 10,
		marginRight: 20,
	},
	docName: {
		fontSize: 16,
		fontWeight: "bold",
		marginRight: 10,
	},
	docTitle: {
		fontSize: 12,
		fontWeight: "500",
		color: "#494343",
		marginTop: 10,
	},
	topDocName: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
	},
	docRating: {
		fontSize: 15,
		fontWeight: "500",
		color: "#676767",
		marginLeft: 10,
	},
	Docreview: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 10,
	},
	DocreviewContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 14,
	},
});
