import { useAppSelector } from "../../../../redux/store";
import MangaCard from "./MangaCard";
import TitleUpdate from "./TitleUpdate";
import { useUpdateManga } from "./hooks/useUpdateManga";

const UpdateManga = () => {
  const { mangas, statistics } = useAppSelector((state) => state.mangaSlice);
  const { updates, page, isCurrentlyLoading, handlePrevPage, handleNextPage } =
    useUpdateManga();

  return (
    <div className="mb-10">
      <TitleUpdate
        handlePrev={handlePrevPage}
        handleNext={handleNextPage}
        page={page}
      />
      <div className="mt-3 grid grid-cols-6 gap-4">
        {Object.entries(updates).map(([mangaId, chapters]) => {
          return (
            <MangaCard
              key={mangaId}
              mangaId={mangaId}
              chapters={chapters}
              manga={mangas[mangaId]}
              statistics={statistics[mangaId]}
              isLoading={isCurrentlyLoading}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UpdateManga;
