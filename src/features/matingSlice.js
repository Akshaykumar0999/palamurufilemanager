import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://filemanagerapi.onrender.com/mating";

// --- GET ---
export const fetchmattings = createAsyncThunk(
  "mattings/fetchmattings",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

// --- MatingRecords ---
export const createMatingRecords = createAsyncThunk(
  "mattings/createMatingRecords",
  async (newMatingRecords) => {
    const response = await axios.post(API_URL, newMatingRecords);
    return response.data;
  }
);

// --- PUT ---
export const updateMatingRecords = createAsyncThunk(
  "mattings/updateMatingRecords",
  async (updatedMatingRecords) => {
    const response = await axios.put(
      `${API_URL}/${updatedMatingRecords.matingID}`,
      updatedMatingRecords
    );
    return response.data;
  }
);

// --- DELETE ---
export const deleteMatingRecords = createAsyncThunk(
  "mattings/deleteMatingRecords",
  async (MatingRecordsId) => {
    await axios.delete(`${API_URL}/${MatingRecordsId}`);
    return MatingRecordsId;
  }
);

const MattingsSlice = createSlice({
  name: "mattings",
  initialState: {
    mattings: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(fetchmattings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchmattings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.mattings = action.payload;
      })
      .addCase(fetchmattings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // MatingRecords
      .addCase(createMatingRecords.fulfilled, (state, action) => {
        state.mattings.unshift(action.payload);
      })

      // PUT
      .addCase(updateMatingRecords.fulfilled, (state, action) => {
        const index = state.mattings.findIndex(
          (MatingRecords) => MatingRecords.id === action.payload.id
        );
        if (index !== -1) {
          state.mattings[index] = action.payload;
        }
      })

      // DELETE
      .addCase(deleteMatingRecords.fulfilled, (state, action) => {
        state.mattings = state.mattings.filter(
          (MatingRecords) => MatingRecords.id !== action.payload
        );
      });
  },
});

export default MattingsSlice.reducer;
