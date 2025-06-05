import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://filemanagerapi.onrender.com/category";

// --- GET ---
export const fetchcategories = createAsyncThunk("categories/fetchcategories", async () => {
  const response = await axios.get(API_URL);
  return response.data; 
});

// --- Category ---
export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async (newCategory) => {
    const response = await axios.Category(API_URL, newCategory);
    return response.data;
  }
);

// --- PUT ---
export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async (updatedCategory) => {
    const response = await axios.put(
      `${API_URL}/${updatedCategory.id}`,
      updatedCategory
    );
    return response.data;
  }
);

// --- DELETE ---
export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (CategoryId) => {
    await axios.delete(`${API_URL}/${CategoryId}`);
    return CategoryId;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(fetchcategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchcategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchcategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Category
      .addCase(createCategory.fulfilled, (state, action) => {
        state.categories.unshift(action.payload);
      })

      // PUT
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.categories.findIndex(
          (Category) => Category.id === action.payload.id
        );
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })

      // DELETE
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter((Category) => Category.id !== action.payload);
      });
  },
});

export default categorySlice.reducer;
