import { MdOutlineTimer } from "react-icons/md";
import Title from "../../../../components/ui/Title.ui";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
type TitleUpdateProps = {
  handlePrev: () => void;
  handleNext: () => void;
  page: number;
};

const TitleUpdate = ({ handlePrev, handleNext, page }: TitleUpdateProps) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <Tooltip id="my-tooltip" />
      <Title icon={<MdOutlineTimer />} text={"Truyện mới cập nhật"} />
      <div className="flex flex-row gap-3 text-xl items-center text-[var(--color-text-muted)] cursor-pointer ">
        <span
          data-tooltip-id="my-tooltip"
          data-tooltip-content={page > 0 ? `Trang ${page}` : "Trang 1"}
          onClick={handlePrev}
          className={` ${
            page == 0
              ? "text-[#373737]"
              : "hover:text-[var(--color-text-hover)]"
          } `}
        >
          <FaAngleLeft />
        </span>
        <span
          data-tooltip-id="my-tooltip"
          data-tooltip-content={`Trang ${page + 2}`}
          onClick={handleNext}
          className="hover:text-[var(--color-text-hover)]"
        >
          <FaAngleRight />
        </span>
      </div>
    </div>
  );
};

export default TitleUpdate;
