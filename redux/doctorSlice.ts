import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncStorage } from "react-native";
import axios from "axios";

//get single note
const url = "http://192.168.1.104:3000/api/doctor";

export const getDoctors = createAsyncThunk("doctor/getDoctor", async () => {
	const response = await axios.get(url);
	return response.data;
});

export const getSingleDoctor = createAsyncThunk(
	"doctor/getSingleDoctor",
	async (id: any, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${url}/${id}`);

			return response.data;
		} catch (error) {
			//@ts-ignore

			return rejectWithValue(error.response.data);
		}
	}
);

export const doctorSlice = createSlice({
	name: "doctorSlice",
	initialState: {
		doctors: null,
		doctor: null,
		error: null,
		loading: false,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getDoctors.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getDoctors.fulfilled, (state, action) => {
			state.loading = false;
			state.doctors = action.payload;
		});
		builder.addCase(getDoctors.rejected, (state, action: any) => {
			state.loading = false;
			state.doctors = null;
			state.error = action.payload;
		});
		builder.addCase(getSingleDoctor.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getSingleDoctor.fulfilled, (state, action) => {
			state.loading = false;
			state.doctor = action.payload;
		});
		builder.addCase(getSingleDoctor.rejected, (state, action: any) => {
			state.loading = false;
			state.doctor = null;
			state.error = action.payload;
		});
	},
});

// export const selectNotes = (state) => state.notes_list;

export default doctorSlice.reducer;
