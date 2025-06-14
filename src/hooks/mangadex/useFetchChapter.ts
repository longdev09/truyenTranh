import { useQuery } from "@tanstack/react-query";
import { MangadexApi } from "../../api";
import { MangadexTypes } from "../../types";
import { useMemo } from "react";
import { MangadexUtils } from "../../utils";

const useFetchChapter = (options: MangadexTypes.GetChapterRequestOptions) => {
  if (!options.includes) {
    options.includes = [MangadexApi.Static.Includes.SCANLATION_GROUP];
  }
  if (!options.order) {
    options.order = {
      readableAt: MangadexApi.Static.Order.DESC,
    };
  }
  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchChapter"],
    queryFn: () => MangadexApi.Chapter.getChapterList(options),
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

export default useFetchChapter;
