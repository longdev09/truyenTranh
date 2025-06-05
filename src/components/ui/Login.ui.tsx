import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const Login = () => {
  return (
    <div className="bg-[var(--bg-btn)] rounded-lg hover:bg-[var(--bg-btn-hover)]">
      <Link
        to={"/"}
        className="flex flex-row items-center px-3 py-2 text-white text-sm font-semibold gap-2 group"
      >
        <span>Đăng nhập</span>
        <span>
          <FaArrowRight />
        </span>
      </Link>
    </div>
  );
};

export default Login;
