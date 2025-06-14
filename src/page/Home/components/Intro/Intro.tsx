import Media from "../../../../components/ui/Media";
import ListSocial from "../../../../constants/social";

const Intro = () => {
  return (
    <div className="w-full px-4 py-3 mt-14 gap-3  bg-black rounded-xl   flex flex-col">
      <h3 className="text-[var(--color-text-item)] font-semibold  text-[12px]">
        Trang web được xây dựng cho mục đích học tập, phi thương mại. Liên hệ
        với tôi. Hãy kết nối
      </h3>
      <div className="flex flex-wrap gap-4 items-center">
        {ListSocial.map((item, index) => (
          <Media
            link={item.url}
            icon={item.icon}
            name={item.name}
            gradient={item.gradient}
            bg={item.bg}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Intro;
