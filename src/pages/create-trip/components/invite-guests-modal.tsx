import { FormEvent } from "react";

import { Button } from "../../../components/button";

import { AtSign, Plus, X } from "lucide-react";

interface InviteGuestsModalProps {
  emailsToInvite: string[];
  closeGuestsModal: () => void;
  addNewEmailToInvite: (e: FormEvent<HTMLFormElement>) => void;
  removeEmailFromInvites: (email: string) => void;
}

export const InviteGuestsModal = ({
  emailsToInvite,
  closeGuestsModal,
  addNewEmailToInvite,
  removeEmailFromInvites,
}: InviteGuestsModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <Button variant="ghost" size="icon">
              <X className="size-4 text-zinc-400" onClick={closeGuestsModal} />
            </Button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>
        {emailsToInvite.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {emailsToInvite.map((email) => (
              <div
                key={email}
                className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5"
              >
                <span className="lowercase text-zinc-300">{email}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  type="button"
                  onClick={() => removeEmailFromInvites(email)}
                >
                  <X className="size-4 text-zinc-400" />
                </Button>
              </div>
            ))}
          </div>
        )}

        <div className="h-px w-full bg-zinc-800"></div>

        <form
          onSubmit={addNewEmailToInvite}
          className="flex items-center gap-2 rounded-lg border-zinc-800 bg-zinc-950 p-2.5"
        >
          <div className="flex flex-1 items-center gap-2 px-2">
            <AtSign className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              className="placeholder:zinc-400 w-auto flex-1 bg-transparent text-lg outline-none"
              placeholder="Digite o e-mail do convidado"
            />
          </div>
          <Button
            type="submit"
            className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-all hover:bg-lime-400"
          >
            Convidar
            <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
};
