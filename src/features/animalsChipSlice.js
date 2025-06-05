import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://filemanagerapi.onrender.com/FemaleandMaleT";

// --- GET ---
export const fetchAnimalChips = createAsyncThunk(
  "animalChip/fetchAnimalChips",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

// --- AnimalChipRecords ---
export const createAnimalChipRecords = createAsyncThunk(
  "animalChip/createAnimalChipRecords",
  async (newAnimalChipRecords) => {
    const response = await axios.post(API_URL, newAnimalChipRecords);
    return response.data;
  }
);

// --- PUT ---
export const updateAnimalChipRecords = createAsyncThunk(
  "animalChip/updateAnimalChipRecords",
  async (updatedAnimalChipRecords) => {
    const response = await axios.put(
      `${API_URL}/${updatedAnimalChipRecords.AnimalChipID}`,
      updatedAnimalChipRecords
    );
    return response.data;
  }
);

// --- DELETE ---
export const deleteAnimalChipRecords = createAsyncThunk(
  "animalChip/deleteAnimalChipRecords",
  async (AnimalChipRecordsId) => {
    await axios.delete(`${API_URL}/${AnimalChipRecordsId}`);
    return AnimalChipRecordsId;
  }
);

const AnimalChipSlice = createSlice({
  name: "chipIDs",
  initialState: {
    chipIDs: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(fetchAnimalChips.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAnimalChips.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.chipIDs = action.payload;
      })
      .addCase(fetchAnimalChips.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // AnimalChipRecords
      .addCase(createAnimalChipRecords.fulfilled, (state, action) => {
        state.chipIDs.unshift(action.payload);
      })

      // PUT
      .addCase(updateAnimalChipRecords.fulfilled, (state, action) => {
        const index = state.chipIDs.findIndex(
          (AnimalChipRecords) => AnimalChipRecords.id === action.payload.id
        );
        if (index !== -1) {
          state[index] = action.payload;
        }
      })

      // DELETE
      .addCase(deleteAnimalChipRecords.fulfilled, (state, action) => {
        state = state.chipIDs.filter(
          (AnimalChipRecords) => AnimalChipRecords.id !== action.payload
        );
      });
  },
});

export default AnimalChipSlice.reducer;
