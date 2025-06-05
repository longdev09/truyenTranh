import bgFooter from "../../../assets/bg-footer.jpg";

const azItems = [
  { label: "All" },
  { label: "0-9" },
  ...Array.from({ length: 26 }, (_, i) => ({
    label: String.fromCharCode(65 + i),
  })),
];

const liClass =
  "bg-[var(--color-bg-item)] p-2 hover:bg-[var(--bg-btn-hover)] cursor-pointer rounded-sm font-semibold group-hover:text-white duration-300";

export default function Footer() {
  return (
    <footer
      style={{ backgroundImage: `url(${bgFooter})` }}
      className="bg-cover bg-center px-6 md:px-12 py-[40px] md:py-[80px] w-full"
    >
      <div className="flex flex-col gap-4">
        <div className="hidden sm:flex flex-col">
          <div className="flex-row items-center gap-3">
            <h1 className="text-white text-2xl font-bold uppercase">
              A - Z list
            </h1>
            <span className="text-[var(--color-text-item)]">
              Tìm kiếm thứ tự anime theo tên bảng chữ cái từ A đến Z.
            </span>
          </div>
          <ul className="flex flex-wrap gap-2">
            {azItems.map((item, index) => (
              <li key={index} className={`${liClass} group`}>
                <span className="text-[var(--color-text-item)] text-lg font-semibold group-hover:text-white duration-300">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <div className="mt-2">{/* <Logo /> */}</div>
          <div className="flex flex-col text-[#555353] gap-2 text-sm items-center sm:items-start">
            <span>Copyright © 2025 Longdev</span>
            <span>
              The website is built for learning purposes, non-commercial
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
