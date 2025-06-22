import { ReactNode } from "react";

const textRank = [
  { number: 1, color: "#ba4b5f" },
  { number: 2, color: "#41aa92" },
  { number: 3, color: "#9e7b41" },
];

const getColor = (num: number) => {
  const rank = textRank.find((item) => item.number === num);
  return rank ? rank.color : "#464646"; // Màu trắng cho các số khác
};

const CardHorizontalmini = (props: {
  title: string;
  imgBg: string;
  icon: ReactNode;
  num: string;
  author: string;
  rank: number;
  id: string;
}) => {
  return (
    <div
      className="group cursor-pointer border border-[var(--border-item)] flex flex-row gap-3 items-center
     bg-[var(--color-bg-item)] group hover:bg-[var(--bg-item-hover)] rounded-lg "
    >
      <div
        className={`w-[60px] px-3 text-center  font-extrabold text-transparent text-6xl`}
        style={{
          WebkitTextStroke: `2px ${getColor(props.rank)}`,
          opacity: 0.8,
        }}
      >
        {props.rank}
      </div>
      <div className="w-[70px] h-[80px] overflow-hidden  flex-shrink-0">
        <img
          className="w-full h-full object-cover"
          src={props.imgBg}
          alt={props.title}
        />
      </div>
      <div className="flex flex-col gap-1 flex-grow overflow-hidden">
        <span className="text-white group-hover:text-[var(--color-text-main)] font-semibold line-clamp-1">
          {props.title}
        </span>
        <div className="flex flex-row text-[var(--color-text-main)] items-center gap-1">
          <span className="flex-shrink-0">{props.icon}</span>
          <span className="mt-1">{props.num}</span>
        </div>
        <div className="text-[var(--color-text-item)] italic text-[12px]">
          <span>{props.author}</span>
        </div>
      </div>
    </div>
  );
};

export default CardHorizontalmini;
