import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../../components/button";

interface InviteGuestsStepsProps {
  openGuestsModal: () => void;
  emailsToInvite: string[];
  openConfirmTripModal: () => void;
}

export const InviteGuestsSteps = ({
  openGuestsModal,
  emailsToInvite,
  openConfirmTripModal,
}: InviteGuestsStepsProps) => {
  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 text-left shadow-shape">
      <button
        type="button"
        onClick={openGuestsModal}
        className="flex flex-1 items-center gap-2"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100">
            {emailsToInvite.length === 1
              ? `${emailsToInvite.length} pessoa convidada`
              : `${emailsToInvite.length} pessoas convidadas`}
          </span>
        ) : (
          <span className="text-lg text-zinc-400">Quem estará na viagem?</span>
        )}
      </button>

      <div className="h-6 w-px bg-zinc-800"></div>

      <Button
        onClick={openConfirmTripModal}
        className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-all hover:bg-lime-400"
      >
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  );
};
