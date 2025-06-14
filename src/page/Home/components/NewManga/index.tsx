import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, Pagination } from "swiper/modules";
import { MangadexApi } from "../../../../api";
import { useFetchManga } from "../../../../hooks/mangadex";
import NewItem from "./NewItem";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/scrollbar";
// @ts-ignore
import "swiper/css/autoplay";
// @ts-ignore
import "swiper/css/pagination";
import "../../../../styles/swiper-custom.css";

import { MangadexUtils } from "../../../../utils";
const NewManga = () => {
  const { data: mangaList } = useFetchManga({
    order: {
      createdAt: MangadexApi.Static.Order.DESC, // lấy theo thòi gian tạo sóm nhất
    },
    contentRating: [], // xếp hạng nội dung
    limit: 12, // giới hạn 12 phần tử
  });

  return (
    <>
      <Swiper
        modules={[Scrollbar, Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
      >
        {mangaList &&
          mangaList.map((item, index) => {
            const title = MangadexUtils.getTitle(item);
            const description = MangadexUtils.getDescription(item);
            const author = MangadexUtils.getAuthor(item);
            const imgBg = MangadexUtils.getCoverImageBg(item);
            console.log(imgBg);
            return (
              <SwiperSlide key={index}>
                <NewItem
                  title={title}
                  description={description}
                  tag={item.attributes.tags}
                  author={author}
                  imgBg={imgBg}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default NewManga;
