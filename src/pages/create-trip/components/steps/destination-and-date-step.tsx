import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../../components/button";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  openGuestsInput: () => void;
  closeGuestsInput: () => void;
}

export const DestinationAndDateStep = ({
  isGuestsInputOpen,
  openGuestsInput,
  closeGuestsInput,
}: DestinationAndDateStepProps) => {
  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="placeholder:zinc-400 bg-transparent text-lg outline-none"
        />
      </div>
      <div className="flex w-40 items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Quando?"
          className="placeholder:zinc-400 w-auto bg-transparent text-lg outline-none"
        />
      </div>

      <div className="h-6 w-px bg-zinc-800"></div>

      {isGuestsInputOpen ? (
        <Button
          variant="secondary"
          onClick={closeGuestsInput}
          className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 transition-all hover:bg-zinc-700"
        >
          Alterar local e data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button
          onClick={openGuestsInput}
          className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-all hover:bg-lime-400"
        >
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
};
