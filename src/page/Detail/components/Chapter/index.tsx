import { useEffect, useState } from "react";
import { MangadexApi } from "../../../../api";
import DataLoading from "../../../../components/common/DataLoading";
import ItemChapter from "../../../../components/ui/ItemChapter";
import { useFetchMangaFeed } from "../../../../hooks/mangadex";
import { MangadexTypes } from "../../../../types";
import { DateUtils, MangadexUtils } from "../../../../utils";

const ListChapter = ({ mangaId }: { mangaId: string }) => {
  const {
    data: chapterList,
    error,
    isLoading,
  } = useFetchMangaFeed(mangaId, {
    order: { chapter: MangadexApi.Static.Order.DESC },
  });

  const [chapterFormat, setChapterFormat] =
    useState<Record<string, MangadexTypes.ExtendChapter[]>>();

  useEffect(() => {
    if (chapterList && chapterList.length > 0)
      setChapterFormat(MangadexUtils.getFormatChapterList(chapterList));
  }, [chapterList]);

  return (
    <div className="bg-[#2b2929] flex flex-col rounded-xl border border-[#2e2c2c] relative">
      <div className="absolute bg-fuchsia-300 bottom-[100%] right-0">
        <div className="w-[300px] h-[100px]"></div>
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

      {/* <div
        className="p-3 flex justify-center"
        style={{ borderTop: "1px solid #2e2c2c" }}
      >
        <Pagination
          pageCount={Math.ceil(total / 26)}
          onPageChange={handleSetPage}
          forcePage={page - 1}
        />
      </div> */}
    </div>
  );
};

export default ListChapter;
