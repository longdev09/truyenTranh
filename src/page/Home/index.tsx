import Intro from "./components/Intro/Intro";
import NewManga from "./components/NewManga";
import UpdateManga from "./components/UpdateManga";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className="container">
        {/* truyện cập nhật */}
        <NewManga />
        <div className="flex flex-row ">
          <div className="w-full flex flex-col gap-6">
            <Intro />
            <UpdateManga />
          </div>

          <div className="w-[35%]">sdsd</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
