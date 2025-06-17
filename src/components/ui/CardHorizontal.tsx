// import { useFetchMangaFeed } from "../../hooks/mangadex";
import { FaHeartbeat, FaStar } from "react-icons/fa";
import { MangadexTypes } from "../../types";
import { DateUtils, MangadexUtils } from "../../utils";
const CartHorizontal = (props: {
  imgAvata: string;
  name: string;
  id: string;
  rating: string;
  follow: string;
  chapter: MangadexTypes.Chapter[];
}) => {
  return (
    <div className="group w-full overflow-hidden bg-[var(--bg-item)] hover:bg-[var(--bg-item-hover)] duration-300 cursor-pointer border border-[var(--border-item)] rounded-md ">
      <div className=" flex flex-row ">
        <div className="overflow-hidden w-[250px]">
          <div className="relative pb-[130%]">
            <img
              className="absolute w-full h-full rounded-md "
              src={props.imgAvata}
            />
          </div>
        </div>

        <div className="px-4 w-full py-3 flex flex-col ">
          <div className="flex flex-col gap-2.5 ">
            <div className="flex flex-row gap-2">
              <div className="bg-[#4f2986] flex items-center -skew-x-12 text-white px-2 py-1 text-[10px] gap-1">
                <span>
                  <FaStar />
                </span>
                <span className="mt-1">{props.rating}</span>
              </div>

              <div className="bg-yellow-700 flex items-center -skew-x-12 text-white px-2 py-1 text-[10px] gap-1">
                <span>
                  <FaHeartbeat />
                </span>
                <span className="mt-1">{props.follow}</span>
              </div>
            </div>
            <p className="line-clamp-1 text-white my-2 text-base group-hover:text-[var(--color-text-main)] font-bold">
              {props.name}
            </p>
          </div>
          {props.chapter &&
            props.chapter.slice(0, 3).map((item, index) => {
              const title = MangadexUtils.getChapterTitle(item);
              const date = DateUtils.formatDate(item.attributes.readableAt);
              return (
                <div
                  key={index}
                  className="  my-1 cursor-pointer flex justify-between bg-[#111010e3] opacity-70 group-hover:opacity-100 text-gray-400 transition duration-300 text-xs px-2  py-2 rounded-md hover:text-white"
                >
                  <span className="line-clamp-1">{title}</span>
                  <span className="line-clamp-1">{date}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CartHorizontal;
