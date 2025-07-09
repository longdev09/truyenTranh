import { AiFillLike } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Title from "../../components/ui/Title.ui";
import ListChapter from "./components/Chapter";
import Heading from "./components/Heading";

const Detail = () => {
  const { id_manga } = useParams();

  if (!id_manga) {
    return;
  }

  return (
    <div className="relative inset-0 overflow-hidden">
      <div className="relative">
        <div className="absolute w-full h-[700px] ">
          <img
            className="w-full h-full object-cover object-[0px_30%] blur-[10px] opacity-50"
            src={
              "https://mangadex.org/covers/7485fd24-e676-42d4-8005-98366bf596bd/ba309aeb-e812-46c0-bd75-0118f4165f91.png.256.jpg"
            }
          />
        </div>

        <div className=" relative inset-0 container">
          <Heading mangaId={id_manga} />
        </div>
      </div>

      <div className="container pt-[40px] pb-[200px]">
        <div className="relative bottom-[100px] ">
          <div className="flex flex-row gap-9">
            <div className="w-[70%]">
              <ListChapter mangaId={id_manga} />
            </div>
            <div className="w-[30%]">
              <Title text="Bạn cũng có thể thích" icon={<AiFillLike />} />
              {/* <RandomManga /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
