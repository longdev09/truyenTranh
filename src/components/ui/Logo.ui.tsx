import logo from "../../assets/images/Logo-removebg-preview.png";

interface LogoProps {
  width?: number;
  isText?: boolean;
  sizeText?: number;
}

const Logo = ({ width = 80, isText, sizeText = 36 }: LogoProps) => {
  return (
    <div className="flex flex-row items-center gap-1">
      <img style={{ width: `${width}px` }} className="h-auto" src={logo} />

      {isText ? (
        <span
          style={{ fontSize: `${sizeText}px` }}
          className=" font-bold uppercase bg-gradient-to-r from-[#5a2e98] to-yellow-700 bg-clip-text text-transparent"
        >
          Manga
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Logo;
