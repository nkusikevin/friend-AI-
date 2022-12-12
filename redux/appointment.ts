import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//get single note
const url = "http://192.168.1.104:3000/api/appointment";

export const getAllAppoint = createAsyncThunk(
	"doctor/getAllAppoint",

	async (id: any, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${url}/user/${id}`);
			return response.data;
		} catch (error) {
			//@ts-ignore
			return rejectWithValue(error.response.data);
		}
	}
);

export const createAppointment = createAsyncThunk(
	"doctor/createAppointment",
	async (data: any, { rejectWithValue }) => {
		try {
			const response = await axios.post(url, data);
			return response.data;
		} catch (error) {
			//@ts-ignore
			return rejectWithValue(error.response.data);
		}
	}
);

export const AppointmentSlice = createSlice({
	name: "AppointmentSlice",
	initialState: {
		appointments: null,
		appointment: null,
		error: null,
		loading: false,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(createAppointment.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(createAppointment.fulfilled, (state, action) => {
			state.loading = false;
			state.appointment = action.payload;
		});
		builder.addCase(createAppointment.rejected, (state, action: any) => {
			state.loading = false;
			state.appointments = null;
			state.error = action.payload;
		});
		builder.addCase(getAllAppoint.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getAllAppoint.fulfilled, (state, action) => {
			state.loading = false;
			state.appointments = action.payload;
		});
		builder.addCase(getAllAppoint.rejected, (state, action: any) => {
			state.loading = false;
			state.appointments = null;
			state.error = action.payload;
		});
	},
});

// export const selectNotes = (state) => state.notes_list;

export default AppointmentSlice.reducer;
