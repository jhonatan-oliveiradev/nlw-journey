import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../lib/axios";

import { Button } from "../../../components/button";

import { CheckCircle2, Loader, UserCog } from "lucide-react";

interface Participant {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
}

export const Guests = () => {
  const { tripId } = useParams();

  const [participants, setParticipants] = useState<Participant[]>();

  useEffect(() => {
    api
      .get(`trips/${tripId}/participants`)
      .then((response) => setParticipants(response.data.participants));
  }, [tripId]);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>
      <div className="space-y-5">
        {participants?.map((participant, index) => (
          <div
            key={participant.id}
            className="flex items-center justify-between"
          >
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                {participant.name ?? `Convidado ${index}`}
              </span>
              <span className="block truncate text-sm lowercase text-zinc-400">
                {participant.email}
              </span>
            </div>
            {participant.is_confirmed ? (
              <CheckCircle2 className="size-5 shrink-0 text-green-400" />
            ) : (
              <Loader className="size-5 shrink-0 animate-pulse text-zinc-400 duration-[5000ms]" />
            )}
          </div>
        ))}
      </div>
      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
};
