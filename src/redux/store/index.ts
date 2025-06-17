import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import mangaSlice from "../features/manga/mangaSlice";

export const store = configureStore({
  reducer: {
    mangaSlice: mangaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// dung ts nen bat buoc phai dinh nghia
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // js thuan se la useSelect
export const useAppDispatch = () => useDispatch<AppDispatch>(); // js thuan se la useDispatch
