import { useQuery } from "@tanstack/react-query";
import { MangadexApi } from "../../api";
import { useMemo } from "react";
import { MangadexUtils } from "../../utils";
import { MangadexTypes } from "../../types";

const useFetchLastUpdate = (options: {
  page: number;
  contentRating: MangadexApi.Static.MangaContentRating[];
}) => {
  const { page } = options;

  let offset = 100 * page;
  if (offset > 10000) {
    offset = 10000 - 100;
  }

  const option: MangadexTypes.GetChapterRequestOptions = {
    includes: ["scanlation_group"],
    contentRating: options.contentRating,
    order: {
      readableAt: MangadexApi.Static.Order.DESC,
    },
    translatedLanguage: ["vi"],
    limit: 100,
    offset,
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchChapter", page],
    queryFn: () => MangadexApi.Chapter.getChapterList(option),
    placeholderData: (previousData) => previousData,
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

export default useFetchLastUpdate;
