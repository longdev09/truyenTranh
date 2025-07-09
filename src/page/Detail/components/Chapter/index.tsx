import DataLoading from "../../../../components/common/DataLoading";
import ItemChapter from "../../../../components/ui/ItemChapter";
import { DateUtils, MangadexUtils } from "../../../../utils";
import useMangaFeed from "./hooks/useMangaFeed";

const ListChapter = ({ mangaId }: { mangaId: string }) => {
  const { chapterFormat, isLoading } = useMangaFeed({ mangaId });

  return (
    <div className="relative">
      <div className="absolute bg-[#2b2929] bottom-[100%] right-0 flex rounded-t-xl pb-[30px] mb-[-30px]">
        <div className="p-3 inline-block w-[126px] text-center bg-[#5a2e98] rounded-tl-xl cursor-pointer">
          <span className="text-white text-sm font-bold ">CHAPTER</span>
        </div>
        <div className="p-3 inline-block w-[126px] text-center cursor-pointer">
          <span className="text-white text-sm font-bold">VOLUME</span>
        </div>
      </div>
      <div className="bg-[#2b2929] overflow-hidden rounded-xl border border-[#2e2c2c]">
        <div className="bg-[#2b2929] p-5 flex flex-row items-center justify-between">
          <div>sdsd</div>
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm chương..."
              className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#5a2e98] focus:ring-1 focus:ring-[#5a2e98]"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <DataLoading isLoading={isLoading} height="200px">
          <ul className="flex flex-col overflow-auto max-h-[600px] relative z-30">
            {chapterFormat &&
              Object.entries(chapterFormat)
                .sort(([a], [b]) => parseFloat(b) - parseFloat(a))
                .map(([, chapterList]) => (
                  <ItemChapter
                    id={chapterList[0].id}
                    translatedLanguage={
                      chapterList[0].attributes.translatedLanguage
                    }
                    roleColor={MangadexUtils.getRoleColor(
                      chapterList[0].user.attributes.roles[0]
                    )}
                    titleChapter={chapterList[0].attributes.title}
                    nameChapter={chapterList[0].attributes.chapter}
                    date={DateUtils.formatDate(
                      chapterList[0].attributes.updatedAt
                    )}
                    flag={chapterList[0].attributes.translatedLanguage}
                    nameScan={
                      chapterList[0].scanlation_group?.attributes?.name ||
                      "no group"
                    }
                    dateTime={DateUtils.formatDateTime(
                      chapterList[0].attributes.readableAt
                    )}
                    username={chapterList[0].user.attributes.username}
                  />
                ))}
          </ul>
        </DataLoading>
      </div>
    </div>
  );
};

export default ListChapter;
