import { useEffect, useState } from "react";
import { MangadexApi } from "../../../../../api";
import { useFetchMangaFeed } from "../../../../../hooks/mangadex";
import { MangadexTypes } from "../../../../../types";
import { MangadexUtils } from "../../../../../utils";

const useMangaFeed = ({ mangaId }: { mangaId: string }) => {
  const [chapterFormat, setChapterFormat] =
    useState<Record<string, MangadexTypes.ExtendChapter[]>>();
  const {
    data: chapterList,
    error,
    isLoading,
  } = useFetchMangaFeed(mangaId, {
    order: { chapter: MangadexApi.Static.Order.DESC },
  });

  useEffect(() => {
    if (chapterList && chapterList.length > 0)
      setChapterFormat(MangadexUtils.getFormatChapterList(chapterList));
  }, [chapterList]);

  return { chapterFormat, error, isLoading };
};

export default useMangaFeed;
