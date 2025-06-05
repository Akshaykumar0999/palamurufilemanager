import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://filemanagerapi.onrender.com/CategoryType";

// --- GET ---
export const fetchcategoryType = createAsyncThunk(
  "categoryType/fetchcategoryType",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

// --- CategoryType ---
export const createCategoryType = createAsyncThunk(
  "categoryType/createCategoryType",
  async (newCategoryType) => {
    const response = await axios.CategoryType(API_URL, newCategoryType);
    return response.data;
  }
);

// --- PUT ---
export const updateCategoryType = createAsyncThunk(
  "categoryType/updateCategoryType",
  async (updatedCategoryType) => {
    const response = await axios.put(
      `${API_URL}/${updatedCategoryType.id}`,
      updatedCategoryType
    );
    return response.data;
  }
);

// --- DELETE ---
export const deleteCategoryType = createAsyncThunk(
  "categoryType/deleteCategoryType",
  async (CategoryTypeId) => {
    await axios.delete(`${API_URL}/${CategoryTypeId}`);
    return CategoryTypeId;
  }
);

const CategoryTypeSlice = createSlice({
  name: "categoryType",
  initialState: {
    categoryType: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(fetchcategoryType.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchcategoryType.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categoryType = action.payload;
      })
      .addCase(fetchcategoryType.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // CategoryType
      .addCase(createCategoryType.fulfilled, (state, action) => {
        state.categoryType.unshift(action.payload);
      })

      // PUT
      .addCase(updateCategoryType.fulfilled, (state, action) => {
        const index = state.categoryType.findIndex(
          (CategoryType) => CategoryType.id === action.payload.id
        );
        if (index !== -1) {
          state.categoryType[index] = action.payload;
        }
      })

      // DELETE
      .addCase(deleteCategoryType.fulfilled, (state, action) => {
        state.categoryType = state.categoryType.filter(
          (CategoryType) => CategoryType.id !== action.payload
        );
      });
  },
});

export default CategoryTypeSlice.reducer;