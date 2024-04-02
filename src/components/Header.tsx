import { customAxios } from "@/libs/axios";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const router = useRouter();
  const { user, initUser } = useAuthStore();
  console.log(user);
  const handleLogin = () => {
    router.push("/auth/login");
  };
  const handleLogout = async () => {
    await customAxios.getInstance().get("/auth/logout");
    localStorage.removeItem("UAT");
    localStorage.removeItem("URT");
    initUser();
    router.push("/");
  };
  return (
    <header>
      <div>
        {user ? (
          <button
            className="border border-gray-200 rounded-lg px-3 py-1"
            type="button"
            onClick={handleLogout}
          >
            로그아웃
          </button>
        ) : (
          <button
            className="border border-gray-200 rounded-lg px-3 py-1"
            type="button"
            onClick={handleLogin}
          >
            로그인
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
