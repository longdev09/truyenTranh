import Intro from "./components/Intro/Intro";
import NewManga from "./components/NewManga";
import RankManga from "./components/RankManga";
import UpdateManga from "./components/UpdateManga";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className="container">
        <NewManga />
        <div className="flex flex-row mt-14 gap-4">
          <div className="w-full flex flex-col gap-6">
            <Intro />
            <UpdateManga />
          </div>
          <div className="w-[35%]">
            <RankManga />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
