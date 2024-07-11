import { useState } from "react";

import { DateRange, DayPicker } from "react-day-picker";
import { ptBR } from "date-fns/locale/pt-BR";
import { format } from "date-fns";

import { Button } from "../../../../components/button";

import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";

import "react-day-picker/dist/style.css";
interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  eventStartAndEndDates: DateRange | undefined;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
  setDestination: (destination: string) => void;
  setEventStartAndEndDates: (dates: DateRange | undefined) => void;
}

export const DestinationAndDateStep = ({
  closeGuestsInput,
  isGuestsInputOpen,
  openGuestsInput,
  setDestination,
  setEventStartAndEndDates,
  eventStartAndEndDates,
}: DestinationAndDateStepProps) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  function openDatePicker() {
    return setIsDatePickerOpen(true);
  }

  function closeDatePicker() {
    return setIsDatePickerOpen(false);
  }

  const displayedDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d' de ' LLL")
          .concat(" até ")
          .concat(format(eventStartAndEndDates.to, "d' de ' LLL"))
      : null;

  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="placeholder:zinc-400 flex-1 bg-transparent text-lg outline-none"
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>
      <button
        onClick={openDatePicker}
        disabled={isGuestsInputOpen}
        className="flex w-60 items-center gap-2 text-left"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="w-auto text-lg text-zinc-400">
          {displayedDate || "Quando?"}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-zinc-400">
                  Selecione a data
                </h2>
                <Button variant="ghost" size="icon">
                  <X
                    className="size-4 text-zinc-400"
                    onClick={closeDatePicker}
                  />
                </Button>
              </div>
              <div className="h-px w-full bg-zinc-800"></div>
              <DayPicker
                mode="range"
                locale={ptBR}
                className="selected:bg-lime-300"
                selected={eventStartAndEndDates}
                onSelect={setEventStartAndEndDates}
              />
            </div>
          </div>
        </div>
      )}

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
