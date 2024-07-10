import { Button } from "../../../components/button";

import { MapPin, Calendar, Settings2 } from "lucide-react";

export const DestinationAndDateHeader = () => {
  return (
    <div className="mx-auto flex h-16 justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">Florianópolis, Brasil</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-200">17 a 23 de Agosto</span>
        </div>

        <div className="h-6 w-px bg-zinc-800"></div>

        <Button variant="secondary">
          Alterar local e data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  );
};
