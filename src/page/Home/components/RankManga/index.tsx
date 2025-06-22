import { useEffect, useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MangadexApi } from "../../../../api";
import CardHorizontalmini from "../../../../components/ui/CardHorizontalmini";
import { useFetchManga } from "../../../../hooks/mangadex";
import { updateStatistics } from "../../../../redux/features/manga/mangaThunck";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { MangadexUtils } from "../../../../utils";
import TitleRank from "./TitleRank";
import { TabPane } from "../../../../components/common/Tab";

const RankManga = () => {
  const [tab, setTab] = useState<number>(0);
  const dispatch = useAppDispatch();
  const { statistics } = useAppSelector((state) => state.mangaSlice);
  const sortFields = ["followedCount", "rating", "createdAt"];
  const sortField = sortFields[tab];
  const { data: mangaListTop } = useFetchManga({
    order: {
      [sortField]: MangadexApi.Static.Order.DESC,
    },
    contentRating: [
      MangadexApi.Static.MangaContentRating.SAFE,
      MangadexApi.Static.MangaContentRating.SUGGESTIVE,
    ],
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
      <TitleRank tab={tab} handle={(index) => setTab(index)} />

      <TabPane index={0} value={tab}>
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
      </TabPane>
      <TabPane index={1} value={tab}>
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
      </TabPane>
      <TabPane index={2} value={tab}>
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
      </TabPane>
    </div>
  );
};

export default RankManga;
