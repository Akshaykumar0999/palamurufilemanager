import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from "../features/Categories/categorySlice";
import catgeoryTypeReducer from "../features/Categories/categoryTypeSlice";
import mattingsReducer from "../features/matingSlice";
import chipIDsReducer from "../features/animalsChipSlice";
import animalsReducer from "../features/animalSlice";
const store = configureStore({
  reducer: {
    categories: categoryReducer,
    categoryType: catgeoryTypeReducer,
    mattings: mattingsReducer,
    chipIDs: chipIDsReducer,
    animals: animalsReducer,
  },
});

export default store;