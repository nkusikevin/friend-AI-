import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncStorage } from "react-native";
import axios from "axios";

//get single note
const url = "http://192.168.1.104:3000/api/user";

//user login action

export const login = createAsyncThunk(
	"users/login",
	async (user: any, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${url}/login`, user);
			await AsyncStorage.setItem("userinfo", JSON.stringify(response.data));
			return response.data;
		} catch (error) {
			//@ts-ignore
			return rejectWithValue(error.response.data);
		}
	}
);

//user register action
export const register = createAsyncThunk(
	"users/register",
	async (user: any, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${url}/register`, user);
			return response.data;
		} catch (error) {
			//@ts-ignore
			return rejectWithValue(error.response.data);
		}
	}
);

export const usersSlice = createSlice({
	name: "noteSlice",
	initialState: {
		user: null,
		error: null,
		loading: false,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(login.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(login.fulfilled, (state, action) => {
			state.loading = false;
			state.user = action.payload;
		});
		builder.addCase(login.rejected, (state, action: any) => {
			state.loading = false;
			state.user = null;
			state.error = action.payload;
		});
		builder.addCase(register.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(register.fulfilled, (state, action) => {
			state.loading = false;
			state.user = action.payload;
		});
		builder.addCase(register.rejected, (state, action: any) => {
			state.loading = false;
			state.error = action.payload;
		});
	},
});

// export const selectNotes = (state) => state.notes_list;

export default usersSlice.reducer;
