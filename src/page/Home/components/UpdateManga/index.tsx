import { useEffect, useMemo } from "react";
import { MdOutlineTimer } from "react-icons/md";
import { MangadexApi } from "../../../../api";
import CartHorizontal from "../../../../components/ui/CardHorizontal";
import Title from "../../../../components/ui/Title.ui";
import { useFetchLastUpdate } from "../../../../hooks/mangadex";
import {
  updateManga,
  updateStatistics,
} from "../../../../redux/features/manga/mangaThunck";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { MangadexTypes } from "../../../../types";
import { MangadexUtils } from "../../../../utils";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const UpdateManga = () => {
  const dispatch = useAppDispatch();
  const { mangas, statistics } = useAppSelector((state) => state.mangaSlice);

  const { data: chapterListManga } = useFetchLastUpdate({
    page: 0,
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
    }
  }, [chapterListManga]);

  return (
    <div className="mb-10">
      <div className="flex flex-row">
        <Title icon={<MdOutlineTimer />} text={"Truyện mới cập nhật"} />
        <div className="flex flex-row items-center">
          <span>
            <FaAngleRight />
          </span>
          <span>
            <FaAngleLeft />
          </span>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-4">
        {Object.entries(updates).map(([mangaId, chapter]) => {
          const name = MangadexUtils.getTitle(mangas[mangaId]);
          const imgAvata = MangadexUtils.getCoverImageAvata(mangas[mangaId]);
          const rating = MangadexUtils.getRating(
            statistics[mangaId]?.rating.bayesian
          );
          const follow = MangadexUtils.getFollow(statistics[mangaId]?.follows);
          return (
            <CartHorizontal
              imgAvata={imgAvata}
              name={name}
              id={mangaId}
              rating={rating}
              follow={follow}
              chapter={chapter}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UpdateManga;
