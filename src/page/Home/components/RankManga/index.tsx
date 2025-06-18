import Title from "../../../../components/ui/Title.ui";
import { IoMdTrophy } from "react-icons/io";
import { useFetchManga } from "../../../../hooks/mangadex";
import { MangadexApi } from "../../../../api";
import { MangadexUtils } from "../../../../utils";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { useEffect } from "react";
import { updateStatistics } from "../../../../redux/features/manga/mangaThunck";
import { MdOutlineStarPurple500 } from "react-icons/md";
import CardHorizontalmini from "../../../../components/ui/CardHorizontalmini";

const RankManga = () => {
  const dispatch = useAppDispatch();
  const { statistics } = useAppSelector((state) => state.mangaSlice);

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

  return (
    <div>
      <Title icon={<IoMdTrophy />} text={"Bảng xếp hạng"} />

      <div className="flex flex-col gap-4 ">
        {mangaListTop?.map((item, index) => {
          const title = MangadexUtils.getTitle(item);
          const author = MangadexUtils.getAuthor(item);
          const imgBg = MangadexUtils.getCoverImageBg(item);
          const rating = MangadexUtils.getRating(
            statistics[item.id]?.rating.bayesian
          );
          return (
            <CardHorizontalmini
              id={item.id}
              icon={<MdOutlineStarPurple500 />}
              rank={index + 1}
              title={title}
              author={author}
              imgBg={imgBg}
              key={index}
              num={rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RankManga;
