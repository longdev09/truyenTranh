interface tab {
  text: string;
}

type TabProps = {
  onClick: (val: number) => void;
  value: number;
  listTab: tab[];
};

const Tab = ({ onClick, value, listTab }: TabProps) => {
  return (
    <div className="bg-[var(--bg-item)] p-[3px] rounded-sm flex">
      <div className="flex flex-row tems-center  items-center gap-1">
        {listTab.map((item, index) => (
          <span
            onClick={() => onClick(index)}
            key={index}
            className={`hover:bg-[var(--bg-btn-hover)] text-[11px] duration-200 cursor-pointer rounded-sm px-2 py-1 font-bold ${
              value == index
                ? "text-[var(--color-text-white)]"
                : "text-[var(--color-text-muted)] "
            } ${value == index ? "bg-[var(--bg-btn)]" : ""}`}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tab;
