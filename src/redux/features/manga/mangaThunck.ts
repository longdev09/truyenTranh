// chua cac thunck

import { createAsyncThunk } from "@reduxjs/toolkit";
import { MangadexTypes } from "../../../types";
import { MangadexApi } from "../../../api";
import { MangadexUtils } from "../../../utils";
import { RootState } from "../../store";

// lay danh sach truyen toi da la 100 limit
export const updateManga = createAsyncThunk(
  "manga/updateManga",
  async (options: MangadexTypes.GetSearchMangaRequestOptions) => {
    if (options.ids?.length === 0) {
      return;
    }
    if (!options.includes) {
      options.includes = [MangadexApi.Static.Includes.COVER_ART];
    }

    if (!options.includes.includes(MangadexApi.Static.Includes.COVER_ART)) {
      options.includes.push(MangadexApi.Static.Includes.COVER_ART);
    }

    options.limit = 100;
    options.contentRating = [
      MangadexApi.Static.MangaContentRating.EROTICA,
      MangadexApi.Static.MangaContentRating.PORNOGRAPHIC,
      MangadexApi.Static.MangaContentRating.SAFE,
      MangadexApi.Static.MangaContentRating.SUGGESTIVE,
    ];

    //call api

    try {
      const { data } = await MangadexApi.Manga.getMangaList(options);
      if (data) {
        return data.map(
          (manga) =>
            MangadexUtils.extendRelationship(manga) as MangadexTypes.ExtendManga
        );
      }
    } catch (error) {
      throw error;
    }
  }
);

// lay thong tin danh gia
export const updateStatistics = createAsyncThunk(
  "manga/updateStatistics",
  async (option: MangadexTypes.GetStatisticsRequestOptions, { getState }) => {
    const state = getState() as RootState;
    const statistics = state.mangaSlice.statistics;
    if (option.manga.length == 0) {
      return;
    }
    option.manga = [...new Set(option.manga.filter((id) => !statistics[id]))]; // lấy lại những id manga chưa có trong danh sách

    try {
      const data = await MangadexApi.Statistics.getStatistics(option);
      return data.statistics;
    } catch (error) {
      throw error;
    }
  }
);
