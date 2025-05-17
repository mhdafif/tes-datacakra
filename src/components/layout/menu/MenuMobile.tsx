import { FileStack, House, LogOut, Newspaper } from "lucide-react";
import { useNavigate } from "react-router-dom";

import useMenu from "./useMenu";

import { cn } from "@/config/utils-shadcn";

import { EPath } from "@/router/useRouter";

const MenuMobile = () => {
  /*======================== Props ======================== */

  const navigate = useNavigate();
  const { pathname, handleLogout } = useMenu();

  /*======================== Return ======================== */

  return (
    <div className="laptop:hidden fixed bottom-0 w-full bg-darkNavy">
      <div className="flex items-center justify-around py-3 text-offWhite">
        <House
          className={cn("h-7 w-7", pathname === EPath.home && "text-darkBlue")}
          onClick={() => navigate(EPath.home)}
        />
        <Newspaper
          className={cn(
            "h-7 w-7",
            pathname.includes(EPath.articles) && "text-darkBlue"
          )}
          onClick={() => navigate(EPath.articles)}
        />
        <FileStack
          className={cn(
            "h-7 w-7",
            pathname.includes(EPath.category) && "text-darkBlue"
          )}
          onClick={() => navigate(EPath.category)}
        />
        <LogOut className="h-7 w-7" onClick={handleLogout} />
      </div>
    </div>
  );
};

export default MenuMobile;
