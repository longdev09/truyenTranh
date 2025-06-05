import { ItemMenu } from "../../constants/manga";

const Menu = () => {
  return (
    <ul className="flex flex-row items-center">
      {ItemMenu.map((item, index) => (
        <li className="text-[var(--color-text-muted)] duration-300 font-semibold text-sm group hover:text-[var(--color-text-hover)] cursor-pointer">
          <div className="px-3 py-4" key={index}>
            {item}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
