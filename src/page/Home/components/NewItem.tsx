import { MangadexTypes } from "../../../types";

interface NewItemProp {
  id?: string;
  title?: string;
  imgBg?: string;
  tag?: MangadexTypes.MangaTag[];
  description?: string;
  author?: string;
  type?: string;
}

const NewItem = (props: NewItemProp) => {
  return (
    <div className="flex flex-row gap-8 h-[500px] py-6">
      <div className="w-[35%] flex flex-col justify-center">
        <div className="space-y-4">
          <h2 className="text-[46px] leading-tight font-extrabold line-clamp-2 text-[var(--color-text-white)]">
            {props.title || "Untitled Manga"}
          </h2>

          <div className="h-20">
            {props.description ? (
              <p className="text-[var(--color-text-muted)] line-clamp-3 text-base">
                {props.description}
              </p>
            ) : (
              <p className="text-[var(--color-text-muted)] text-base opacity-70">
                No description available
              </p>
            )}
          </div>

          <div className="h-10 flex flex-wrap gap-2 items-center">
            {props.tag && props.tag.length > 0 ? (
              props.tag.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="bg-[var(--bg-btn)] py-1 px-3 rounded-md"
                >
                  <span className="uppercase text-xs text-[var(--color-text-white)] font-semibold">
                    {item.attributes.name["en"]}
                  </span>
                </div>
              ))
            ) : (
              <div className="text-[var(--color-text-muted)] text-sm">
                No tags available
              </div>
            )}
          </div>

          <div className="h-8 flex items-center">
            {props.author ? (
              <span className="text-[var(--color-text-main)] font-bold italic text-lg">
                {props.author}
              </span>
            ) : (
              <span className="text-muted italic text-lg">Unknown Author</span>
            )}
          </div>
        </div>
      </div>

      <div className="w-[65%] h-full flex items-center">
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            src={props.imgBg}
            alt={props.title}
            className="object-cover w-full h-full"
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/400x600?text=No+Image";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewItem;
