import { createSlice } from "@reduxjs/toolkit";
import { MangadexTypes } from "../../../types";
import { updateManga, updateStatistics } from "./mangaThunck";

const initialState = {
  mangas: {} as Record<string, MangadexTypes.ExtendManga>,
  statistics: {} as Record<string, MangadexTypes.Statistics>,
};

export const mangaSlice = createSlice({
  name: "mangaSlice",
  initialState,
  extraReducers: (buider) => {
    buider.addCase(updateManga.fulfilled, (state, action) => {
      if (action.payload) {
        for (const m of action.payload) {
          const odlMangas = state.mangas[m.id]; // lay ra di lieu cu
          if (odlMangas) {
            state.mangas[m.id] = { ...odlMangas, ...m };
          } else {
            state.mangas[m.id] = m;
          }
        }
      }
    });

    buider.addCase(updateStatistics.fulfilled, (state, action) => {
      state.statistics = {
        ...state.statistics, // Giữ lại dữ liệu cũ
        ...action.payload, // Ghi đè những giá trị mới
      };
    });
  },
  reducers: {},
});
export const {} = mangaSlice.actions;
export default mangaSlice.reducer;
