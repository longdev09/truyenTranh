import { useState } from "react";
import useFetchMangaId from "../../../../hooks/mangadex/useFetchMangaId";
import { MangadexTypes } from "../../../../types";
import { MangadexUtils } from "../../../../utils";
import InfoManga from "../InfoManga";

const Heading = ({ mangaId }: { mangaId: string }) => {
  const { data } = useFetchMangaId({ mangaId });
  const [showDescribe, setShowDescribe] = useState<boolean>(false);
  const author = MangadexUtils.getAuthor(data);
  const language = MangadexUtils.getTranslateISOLanguage(
    data?.attributes.originalLanguage
  );
  const status = MangadexUtils.getStatus(data?.attributes.status);
  const avata = MangadexUtils.getCoverImageAvata(data);
  const title = MangadexUtils.getTitle(data);
  const decribe = MangadexUtils.getDescription(data as MangadexTypes.Manga);
  const nameOther = MangadexUtils.getMangaAltTitles(data);

  return (
    <div className=" flex flex-row w-full gap-9 pt-3.5 py-[90px]">
      <div className="flex flex-row gap-5 w-[70%]">
        <div className="overflow-hidden flex-none w-[250px]">
          <div className="relative pb-[160%]">
            <img
              className="absolute inset rounded-lg object-cover"
              src={avata}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-row gap-2 text-[var(--color-text-main)] text-sm font-semibold cursor-pointer">
            <a className="hover:text-[var(--color-text-sub)] hover:underline">
              Trang chủ
            </a>
            <span>/</span>
            <a className="hover:text-[var(--color-text-sub)] hover:underline">
              Truyện tranh
            </a>
          </div>
          <div className="flex flex-col gap-2.5">
            <h2 className="text-3xl font-bold text-white">{title}</h2>
            <div className="flex flex-wrap gap-2 items-center">
              {data?.attributes.tags.map((item, index) => (
                <div
                  key={index}
                  className="bg-[var(--bg-btn)] py-[1px] px-2 rounded-md"
                >
                  <span className="uppercase text-[10px] text-white font-semibold">
                    {item.attributes.name["en"]}
                  </span>
                </div>
              ))}
            </div>
            {/* describe */}
            <div className="font-semibold">
              <p
                className={`text-[var(--color-text-item)] text-[13px]  leading-6  ${
                  showDescribe ? "line-clamp-4" : "line-clamp-2"
                }`}
              >
                {decribe}
              </p>
              <span
                onClick={() => setShowDescribe(!showDescribe)}
                className="border-b-2 border-[var(--color-text-main)] text-sm py-1 text-[var(--color-text-item)] hover:text-white cursor-pointer duration-300"
              >
                Đọc thêm +
              </span>
            </div>
          </div>
          {/* btn */}
          {/* <div className="flex flex-row items-center gap-2 ">
          <Button
            variant="primary"
            icon={<FaLocationArrow />}
            name="Đọc ngay"
          />
          <Button variant="secondary" icon={<FaBookmark />} name="Thư viện" />
        </div> */}

          {/* <div className="flex flex-row gap-3">
            <Rating icon={<FaStar />} rating={rating} />
            <Rating icon={<FaHeart />} rating={fl} />
          </div> */}
        </div>
      </div>
      <InfoManga
        info={{
          author: author,
          status: status,
          language: language,
          nameOther: nameOther[0],
        }}
      />
    </div>
  );
};

export default Heading;
