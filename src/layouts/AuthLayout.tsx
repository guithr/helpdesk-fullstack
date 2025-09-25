import { Outlet } from "react-router-dom";
import bgLogin from "../assets/images/bg-login.png";
import logoDark from "../assets/logos/Logo_IconDark.svg";
import Text from "../components/ui/text";

export function AuthLayout() {
  return (
    <div
      className="min-h-screen flex items-center bg-cover bg-center justify-center md:justify-end"
      style={{ backgroundImage: `url(${bgLogin})` }}
    >
      <div
        className={`
          min-h-screen
         bg-white
          w-full md:w-auto 
          rounded-t-[20px] md:rounded-tl-[20px]
          mt-8 md:mt-3
          px-6 py-8 md:px-[140px] md:py-12
          `}
      >
        <div className="flex justify-center items-center gap-3 mb-6 md:mb-8">
          <img src={logoDark} alt="Logo da empresa" className="w-10 h-10" />
          <Text variant="text-xl" className="text-blue-dark">
            HelpDesk
          </Text>
        </div>

        <Outlet />
      </div>
    </div>
  );
}
