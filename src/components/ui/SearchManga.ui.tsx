import { useState } from "react";
import { FaSearch } from "react-icons/fa";
const SearchManga = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className=" flex-1 relative inset-0 bg-[var(--color-bg-main)] rounded-md">
      <div className=" w-full h-10 flex flex-row items-center relative z-50 px-4 gap-3">
        <span className="text-[var(--color-text-muted)] font-black text-base">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="Tìm truyện ..."
          className="text-xs outline-none w-full bg-[var(--color-bg-main)] text-[var(--color-text-muted)] placeholder-muted font-medium"
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
      </div>

      <div
        className={`h-[300px] w-full border border-[var(--color-border)] rounded-md bg-[var(--color-bg-main)] absolute z-10 top-0 pt-[30px]
           transition-all duration-300 ease-in-out overflow-hidden
           ${
             isActive
               ? "opacity-100 max-h-[300px]"
               : "opacity-0 max-h-0 border-opacity-0"
           }`}
      >
        {/* <div className="animate-slide-down">
              Heheh
            </div> */}
      </div>
    </div>
  );
};

export default SearchManga;
