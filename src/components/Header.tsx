import { customAxios } from "@/libs/axios";
import { useRouter } from "next/navigation";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/auth/login");
  };
  const handleLogout = async () => {
    await customAxios.getInstance().get("/auth/logout");
    localStorage.removeItem("UAT");
    localStorage.removeItem("URT");
    router.push("/");
  };
  return (
    <header>
      <div>
        <button
          className="border border-gray-200 rounded-lg px-3 py-1"
          type="button"
          onClick={handleLogin}
        >
          로그인
        </button>
        <button
          className="border border-gray-200 rounded-lg px-3 py-1"
          type="button"
          onClick={handleLogout}
        >
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default Header;
