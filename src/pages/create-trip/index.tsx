import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { InviteGuestsModal } from "./components/invite-guests-modal";
import { ConfirmTripModal } from "./components/confirm-trip-modal";

import { DestinationAndDateStep } from "./components/steps/destination-and-date-step";
import { InviteGuestsSteps } from "./components/steps/invite-guests-step";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export function CreateTripPage() {
  const navigate = useNavigate();

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  function createTrip(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    navigate("/trips/:tripdId");
  }

  function addNewEmailToInvite(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
    };

    const email = target.email.value;

    if (!email) return;

    if (emailsToInvite.includes(email)) {
      alert("Este e-mail já foi convidado!");

      return;
    }

    setEmailsToInvite([...emailsToInvite, email]);

    target.email.value = "";
  }

  function removeEmailFromInvites(email: string) {
    setEmailsToInvite(emailsToInvite.filter((e) => e !== email));
  }

  return (
    <div className="mx-auto flex h-screen items-center justify-center bg-hero bg-center bg-no-repeat">
      <div className="w-full max-w-3xl space-y-10 px-6 text-center">
        <Header />
        <div className="space-y-4">
          <DestinationAndDateStep
            isGuestsInputOpen={isGuestsInputOpen}
            openGuestsInput={openGuestsInput}
            closeGuestsInput={closeGuestsInput}
          />

          {isGuestsInputOpen && (
            <InviteGuestsSteps
              openGuestsModal={openGuestsModal}
              emailsToInvite={emailsToInvite}
              openConfirmTripModal={openConfirmTripModal}
            />
          )}
        </div>

        <Footer />
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          emailsToInvite={emailsToInvite}
          removeEmailFromInvites={removeEmailFromInvites}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
        />
      )}
    </div>
  );
}
