import { AtSign, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../../components/button";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export const ConfirmTripModal = ({
  closeConfirmTripModal,
  createTrip,
}: ConfirmTripModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação da viagem
            </h2>
            <Button variant="ghost" size="icon">
              <X
                className="size-4 text-zinc-400"
                onClick={closeConfirmTripModal}
              />
            </Button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="font-semibold text-zinc-100">
              Florianópolis, Brasil
            </span>{" "}
            nas datas de{" "}
            <span className="font-semibold text-zinc-100">
              16 a 27 de Agosto de 2024
            </span>
            , preencha seus dados abaixo:
          </p>
        </div>

        <form
          onSubmit={createTrip}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex w-full flex-1 items-center gap-2 rounded-lg border-zinc-800 bg-zinc-950 px-4 py-2.5">
            <User className="size-5 text-zinc-400" />
            <input
              type="text"
              name="name"
              className="placeholder:zinc-400 w-auto flex-1 bg-transparent text-lg outline-none"
              placeholder="Seu nome completo"
            />
          </div>

          <div className="flex w-full flex-1 items-center gap-2 rounded-lg border-zinc-800 bg-zinc-950 px-4 py-2.5">
            <AtSign className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              className="placeholder:zinc-400 w-auto flex-1 bg-transparent text-lg outline-none"
              placeholder="Seu e-mail pessoal"
            />
          </div>

          <Button
            size="full"
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-all hover:bg-lime-400"
          >
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  );
};
