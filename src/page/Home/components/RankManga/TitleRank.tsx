import { IoMdTrophy } from "react-icons/io";
import Title from "../../../../components/ui/Title.ui";
import Tab from "../../../../components/common/Tab/Tab";

type TitleRankProp = {
  tab: number;
  handle: (val: number) => void;
};

const TitleRank = ({ handle, tab }: TitleRankProp) => {
  const listTab = [{ text: "Top" }, { text: "Thích" }, { text: "Mới" }];

  return (
    <div className="mb-4 flex flex-row justify-between">
      <Title icon={<IoMdTrophy />} text={"Bảng xếp hạng"} />
      <Tab listTab={listTab} onClick={(v) => handle(v)} value={tab} />
    </div>
  );
};

export default TitleRank;
