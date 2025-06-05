import Login from "../../ui/Login.ui";
import Logo from "../../ui/Logo.ui";
import Menu from "../../ui/Menu.ui";
import SearchManga from "../../ui/SearchManga.ui";

export default function Header() {
  return (
    <div className="bg-[var(--color-bg-item)]">
      <div className="container py-1">
        <div className="flex flex-row gap-2.5 items-center">
          <Logo width={55} sizeText={20} isText />
          <Menu />
          <SearchManga />
          <Login />
        </div>
      </div>
    </div>
  );
}
