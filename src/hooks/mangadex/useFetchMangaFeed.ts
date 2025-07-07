import { useQuery } from "@tanstack/react-query";
import { MangadexApi } from "../../api";
import { useMemo } from "react";
import { MangadexUtils } from "../../utils";
import { MangadexTypes } from "../../types";

const useFetchMangaFeed = (
  mangaId: string,
  options: MangadexTypes.GetMangaIdFeedRequestOptions
) => {
  options.includes = [
    MangadexApi.Static.Includes.SCANLATION_GROUP,
    MangadexApi.Static.Includes.USER,
  ];
  options.contentRating = [
    MangadexApi.Static.MangaContentRating.EROTICA,
    MangadexApi.Static.MangaContentRating.PORNOGRAPHIC,
    MangadexApi.Static.MangaContentRating.SAFE,
    MangadexApi.Static.MangaContentRating.SUGGESTIVE,
  ];
  options.translatedLanguage = ["vi"];

  const { data, isLoading, error } = useQuery({
    queryKey: ["feedManga", mangaId, options],
    queryFn: () => MangadexApi.Manga.getMangaFeed(options, mangaId),
  });

  const formatData = useMemo(() => {
    if (data?.result == "ok") {
      return data.data.map(
        (manga) =>
          MangadexUtils.extendRelationship(manga) as MangadexTypes.ExtendChapter
      );
    }
  }, [data]);
  return { data: formatData, isLoading, error };
};

export default useFetchMangaFeed;
