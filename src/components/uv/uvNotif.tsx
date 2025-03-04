import { useTranslation } from "react-i18next";

import { Button } from "../ui/button";
import VisualHidden from "../ui/visual-hidden";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

import useGlobalStore from "@/store/global/globalStore";

const UvNotif = () => {
  /*======================== Props ======================== */

  const { t } = useTranslation();

  /*======================== Store ======================== */

  const notif = useGlobalStore((state) => state.notif);
  const resetGlobalStore = useGlobalStore((state) => state.resetState);

  /*======================== Return ======================== */

  return (
    <Dialog open={notif.isOpen} onOpenChange={() => resetGlobalStore("notif")}>
      <DialogContent className="bg-white rounded-md p-4 px-8 font-poppins">
        <VisualHidden>
          <DialogTitle />
        </VisualHidden>
        <p className="m-0 text-gray37 text-xs whitespace-nowrap">
          {t(notif.message)}
        </p>
        <DialogFooter className="flex-center">
          <Button
            variant="outline"
            onClick={() => resetGlobalStore("notif")}
            className="h-auto py-2 w-32 text-xs font-semibold"
          >
            {t("close")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UvNotif;
