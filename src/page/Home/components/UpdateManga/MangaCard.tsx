import CartVertical from "../../../../components/ui/CardVertical";
import { MangadexTypes } from "../../../../types";
import { MangadexUtils } from "../../../../utils";

interface MangaCardProps {
  mangaId: string;
  chapters: MangadexTypes.ExtendChapter[];
  manga: any; // Type này tùy thuộc vào structure của manga object
  statistics: any; // Type này tùy thuộc vào structure của statistics object
  isLoading: boolean;
}

const MangaCard = ({
  chapters,
  manga,
  statistics,
  isLoading,
}: MangaCardProps) => {
  const name = MangadexUtils.getTitle(manga);
  const imgAvata = MangadexUtils.getCoverImageAvata(manga);
  const rating = MangadexUtils.getRating(statistics?.rating.bayesian);
  const follow = MangadexUtils.getFollow(statistics?.follows);

  return (
    <CartVertical
      imgAvata={imgAvata}
      title={name}
      rating={rating}
      follow={follow}
      chapter={chapters}
      isLoading={isLoading}
    />
  );
};

export default MangaCard;
