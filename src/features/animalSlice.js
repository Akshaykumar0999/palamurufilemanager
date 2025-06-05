import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://filemanagerapi.onrender.com/animal";

// --- GET ---
export const fetchAnimals = createAsyncThunk(
  "animals/fetchAnimals",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

// --- AnimalsRecords ---
export const createAnimalsRecords = createAsyncThunk(
  "animals/createAnimalsRecords",
  async (newAnimalsRecords) => {
    const response = await axios.post(API_URL, newAnimalsRecords);
    return response.data;
  }
);
    
// --- PUT ---
export const updateAnimalsRecords = createAsyncThunk(
  "animals/updateAnimalsRecords",
  async (updatedAnimalsRecords) => {
    const response = await axios.put(
      `${API_URL}/${updatedAnimalsRecords.AnimalsID}`,
      updatedAnimalsRecords
    );
    return response.data;
  }
);

// --- DELETE ---
export const deleteAnimalsRecords = createAsyncThunk(
  "animals/deleteAnimalsRecords",
  async (AnimalsRecordsId) => {
    await axios.delete(`${API_URL}/${AnimalsRecordsId}`);
    return AnimalsRecordsId;
  }
);

const AnimalSlice = createSlice({
  name: "animals",
  initialState: {
    animals: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(fetchAnimals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAnimals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.animals = action.payload;
      })
      .addCase(fetchAnimals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // AnimalsRecords
      .addCase(createAnimalsRecords.fulfilled, (state, action) => {
        state.animals.unshift(action.payload);
      })

      // PUT
      .addCase(updateAnimalsRecords.fulfilled, (state, action) => {
        const index = state.animals.findIndex(
          (AnimalsRecords) => AnimalsRecords.id === action.payload.id
        );
        if (index !== -1) {
          state[index] = action.payload;
        }
      })

      // DELETE
      .addCase(deleteAnimalsRecords.fulfilled, (state, action) => {
        state = state.animals.filter(
          (AnimalsRecords) => AnimalsRecords.id !== action.payload
        );
      });
  },
});

export default AnimalSlice.reducer;
