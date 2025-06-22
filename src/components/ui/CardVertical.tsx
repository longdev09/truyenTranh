import { FaHeartbeat, FaStar } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { MangadexTypes } from "../../types";
import { DateUtils, MangadexUtils } from "../../utils";

const CartVertical = (props: {
  imgAvata?: string;
  title?: string;
  author?: string;
  date?: string;
  rating?: string;
  follow?: string;
  chapter?: MangadexTypes.Chapter[];
  isLoading: boolean;
}) => {
  return (
    <div className={`${props.isLoading ? "opacity-55" : " "} `}>
      <div
        className="relative inset-0 bg-[var(--color-bg-item)] group hover:bg-[var(--bg-item-hover)] duration-300 
     cursor-pointer overflow-hidden rounded-lg border border-[var(--border-item)]"
      >
        <div className="overflow-hidden">
          <div className="relative pb-[140%]">
            <img
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 duration-300 rounded-sm "
              src={props.imgAvata}
            />
          </div>
        </div>
        <div className="p-2 flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h2 className="text-white group-hover:text-[var(--color-text-main)] font-bold text-[13px] line-clamp-1 duration-300 ">
              {props.title ? props.title : ""}
            </h2>
            {props.author ? (
              <span className="text-white text-[12px] italic">
                {props.author}
              </span>
            ) : (
              ""
            )}
            {props.date ? (
              <div className="flex items-center gap-2 text-[12px] text-[var(--color-text-sub)]">
                <MdOutlineAccessTime />
                <span className="mt-[2px]">{props.date}</span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-row gap-2">
            <div className="bg-[#4f2986] flex items-center -skew-x-12 text-white px-1  text-[9px] gap-1">
              <span>
                <FaStar />
              </span>
              <span>{props.rating}</span>
            </div>

            <div className="bg-yellow-700 flex items-center -skew-x-12 text-white px-1 text-[9px] gap-1">
              <span>
                <FaHeartbeat />
              </span>
              <span>{props.follow}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-1 flex flex-col gap-1">
        {props.chapter &&
          props.chapter.slice(0, 3).map((item, index) => {
            const title = MangadexUtils.getChapterTitle(item);
            const date = DateUtils.formatDate(item.attributes.readableAt);
            return (
              <div
                key={index}
                className="cursor-pointer flex justify-between opacity-70 group-hover:opacity-100 text-gray-400 transition duration-300 text-[10px] rounded-md hover:text-white"
              >
                <span className="line-clamp-1">{title}</span>
                <span className="line-clamp-1">{date}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CartVertical;
