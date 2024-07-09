import {
  ArrowRight,
  AtSign,
  Calendar,
  MapPin,
  Plus,
  Settings2,
  UserRoundPlus,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState([""]);

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

  function addNewEmailToInvite(e: FormEvent) {
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

  // const guests = [
  //   {
  //     id: 1,
  //     email: "jessica.white44@yahoo.com",
  //   },
  //   {
  //     id: 2,
  //     email: "erik_leffler3@gmail.com",
  //   },
  //   {
  //     id: 3,
  //     email: "rebekah.conn21@gmail.com",
  //   },
  //   {
  //     id: 4,
  //     email: "emile.mayer25@yahoo.com",
  //   },
  //   {
  //     id: 5,
  //     email: "justus_hessel81@hotmail.com",
  //   },
  //   {
  //     id: 6,
  //     email: "hellen_graham@yahoo.com",
  //   },
  //   {
  //     id: 7,
  //     email: "kole.schiller27@yahoo.com",
  //   },
  // ];

  return (
    <div className="mx-auto flex h-screen items-center justify-center bg-hero bg-center bg-no-repeat">
      <div className="w-full max-w-3xl space-y-10 px-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <img src="/public/nlw-journey-logo.svg" alt="plann.er" />
          <p className="text-lg text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className="space-y-4">
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
              <button
                onClick={closeGuestsInput}
                className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 transition-all hover:bg-zinc-700"
              >
                Alterar local e data
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                onClick={openGuestsInput}
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-all hover:bg-lime-400"
              >
                Continuar
                <ArrowRight className="size-5" />
              </button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 text-left shadow-shape">
              <button
                type="button"
                onClick={openGuestsModal}
                className="flex flex-1 items-center gap-2"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className="text-lg text-zinc-400">
                  Quem estará na viagem?
                </span>
              </button>

              <div className="h-6 w-px bg-zinc-800"></div>

              <button
                onClick={openGuestsInput}
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-all hover:bg-lime-400"
              >
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er, você automaticamente concorda
          <br /> com nossos{" "}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-zinc-300 underline">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                <button>
                  <X
                    className="size-4 text-zinc-400"
                    onClick={closeGuestsModal}
                  />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
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
                    <button
                      type="button"
                      onClick={() => removeEmailFromInvites(email)}
                    >
                      <X className="size-4 text-zinc-400" />
                    </button>
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
              <button
                type="submit"
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-all hover:bg-lime-400"
              >
                Convidar
                <Plus className="size-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
