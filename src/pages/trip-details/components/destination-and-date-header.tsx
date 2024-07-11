import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../../lib/axios";

import { Button } from "../../../components/button";

import { MapPin, Calendar, Settings2 } from "lucide-react";
import { format } from "date-fns";

interface Trip {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
  is_confirmed: boolean;
}

export function DestinationAndDateHeader() {
  const { tripId } = useParams();

  const [trip, setTrip] = useState<Trip | undefined>();

  useEffect(() => {
    api.get(`trips/${tripId}`).then((response) => setTrip(response.data.trip));
  }, [tripId]);

  const displayedDate = trip
    ? format(trip.starts_at, "d' de 'LLL")
        .concat(" até ")
        .concat(format(trip.ends_at, "d' de 'LLL"))
    : null;

  return (
    <div className="mx-auto flex h-16 justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">{trip?.destination}</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-200">{displayedDate}</span>
        </div>

        <div className="h-6 w-px bg-zinc-800"></div>

        <Button variant="secondary">
          Alterar local e data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  );
}
