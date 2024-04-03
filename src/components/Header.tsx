import { customAxios } from "@/libs/axios";
import { useAuthStore } from "@/store/authStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const router = useRouter();
  const { user, initUser } = useAuthStore();

  const handleLogin = () => {
    router.push("/auth/login");
  };

  const handleRegister = () => {
    router.push("/auth/register");
  };
  const handleLogout = async () => {
    await customAxios.getInstance().get("/auth/logout");
    localStorage.removeItem("UAT");
    localStorage.removeItem("URT");
    initUser();
    router.push("/");
  };
  return (
    <header className="flex">
      <section className="flex-initial w-48">
        <h2
          className="
        text-3xl
        text-emerald-400
        cursor-pointer
        "
          role="presentation"
        >
          <Link href="/">EmbedEase</Link>
        </h2>
      </section>
      <section className="flex-1 flex justify-end items-center gap-5">
        <Link className="font-semibold" href="#">
          소개
        </Link>
        <Link className="font-semibold" href="#">
          요금제
        </Link>
        {user ? (
          <button
            className="text-white
             border
              bg-emerald-400
               border-emerald-400
                rounded-lg 
                px-3
                 py-2
                 hover:bg-emerald-500
                 hover:border-emerald-500"
            type="button"
            onClick={handleLogout}
          >
            로그아웃
          </button>
        ) : (
          <>
            <button
              className="
            text-white
             border
              bg-emerald-400
               border-emerald-400
                rounded-lg 
                px-3
                 py-2
                 hover:bg-emerald-500
                 hover:border-emerald-500
                 "
              type="button"
              onClick={handleLogin}
            >
              로그인
            </button>
            <button
              className="
            text-white
             border
              bg-emerald-500
               border-emerald-500
                rounded-lg 
                px-3
                 py-2
                 hover:bg-emerald-600
                 hover:border-emerald-600
                 "
              type="button"
              onClick={handleRegister}
            >
              회원가입
            </button>
          </>
        )}
      </section>
    </header>
  );
};

export default Header;
