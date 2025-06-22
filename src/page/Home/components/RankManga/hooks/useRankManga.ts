import { useEffect } from "react";
import { MangadexApi } from "../../../../../api";
import { useFetchManga } from "../../../../../hooks/mangadex";
import { useAppDispatch } from "../../../../../redux/store";
import { updateStatistics } from "../../../../../redux/features/manga/mangaThunck";

export const useRankManga = () => {
  const dispatch = useAppDispatch();
  const { data: mangaListTop } = useFetchManga({
    order: {
      followedCount: MangadexApi.Static.Order.DESC,
    },
    contentRating: [
      MangadexApi.Static.MangaContentRating.SAFE,
      MangadexApi.Static.MangaContentRating.SUGGESTIVE,
    ],
    hasAvailableChapters: "true",
    availableTranslatedLanguage: ["vi"],
    limit: 9,
  });

  useEffect(() => {
    if (mangaListTop && mangaListTop?.length > 0) {
      dispatch(updateStatistics({ manga: mangaListTop.map((m) => m.id) }));
    }
  }, [mangaListTop]);
};
