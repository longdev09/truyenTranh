import { useEffect, useMemo, useState } from "react";
import { useFetchLastUpdate } from "../../../../../hooks/mangadex";
import { MangadexApi } from "../../../../../api";
import { MangadexTypes } from "../../../../../types";
import { useAppDispatch } from "../../../../../redux/store";
import {
  updateManga,
  updateStatistics,
} from "../../../../../redux/features/manga/mangaThunck";

export const useUpdateManga = () => {
  const [page, setPage] = useState(0);
  const [isPageChanging, setIsPageChanging] = useState(false);
  const dispatch = useAppDispatch();
  const { data: chapterListManga, isLoading } = useFetchLastUpdate({
    page,
    contentRating: [
      MangadexApi.Static.MangaContentRating.SAFE,
      MangadexApi.Static.MangaContentRating.SUGGESTIVE,
      MangadexApi.Static.MangaContentRating.EROTICA,
      MangadexApi.Static.MangaContentRating.SUGGESTIVE,
    ],
  });

  const updates = useMemo(() => {
    const result: Record<string, MangadexTypes.ExtendChapter[]> = {};
    if (chapterListManga)
      for (const ch of chapterListManga) {
        const mangaId = ch.manga?.id;
        if (!mangaId) continue;
        if (!result[mangaId]) {
          result[mangaId] = [];
        }
        result[mangaId].push(ch);
      }
    return result;
  }, [chapterListManga]);

  useEffect(() => {
    if (chapterListManga && chapterListManga?.length > 0) {
      const manga = chapterListManga
        .filter((c) => c.manga && c.manga.id)
        .map((c) => c.manga!.id);
      dispatch(
        updateManga({
          ids: manga,
        })
      );
      dispatch(
        updateStatistics({
          manga: manga,
        })
      );
      setIsPageChanging(false);
    }
  }, [chapterListManga]);

  const handlePrevPage = () => {
    setIsPageChanging(true);
    if (page > 0) setPage(page - 1);
  };
  const handleNextPage = () => {
    setIsPageChanging(true);
    setPage(page + 1);
  };
  const isCurrentlyLoading = isLoading || isPageChanging;

  return {
    updates,
    page,
    isCurrentlyLoading,
    handlePrevPage,
    handleNextPage,
  };
};
