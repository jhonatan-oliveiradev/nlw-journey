import { useState } from "react";

import { CreateActivityModal } from "./components/create-activity-modal";
import { ImportantLinks } from "./components/important-links";
import { Guests } from "./components/guests";

import { Plus } from "lucide-react";
import { Activities } from "./components/activities";
import { DestinationAndDateHeader } from "./components/destination-and-date-header";
import { Button } from "../../components/button";

export function TripDetailsPage() {
  const [isCreateActiveModalOpen, setIsCreateActiveModalOpen] = useState(false);

  function openCreateActiveModal() {
    setIsCreateActiveModalOpen(true);
  }

  function closeCreateActiveModal() {
    setIsCreateActiveModalOpen(false);
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <Button onClick={openCreateActiveModal}>
              <Plus className="size-5" />
              Cadastrar atividade
            </Button>
          </div>

          <Activities />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks />
          <div className="h-px w-full bg-zinc-800"></div>
          <Guests />
        </div>
      </main>

      {isCreateActiveModalOpen && (
        <CreateActivityModal closeCreateActiveModal={closeCreateActiveModal} />
      )}
    </div>
  );
}
