import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../../components/button";

interface CreateActivityModalProps {
  closeCreateActiveModal: () => void;
}

export const CreateActivityModal = ({
  closeCreateActiveModal,
}: CreateActivityModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <Button
              size="icon"
              variant="ghost"
              onClick={closeCreateActiveModal}
            >
              <X className="size-4 text-zinc-400" />
            </Button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos os convidados podem visualizar as atividades.
          </p>
        </div>

        <form className="space-y-3">
          <div className="flex h-14 w-full flex-1 items-center gap-2 rounded-lg border-zinc-800 bg-zinc-950 px-4">
            <Tag className="size-5 text-zinc-400" />
            <input
              type="text"
              name="title"
              className="placeholder:zinc-400 w-auto flex-1 bg-transparent text-lg outline-none"
              placeholder="Qual a atividade?"
            />
          </div>

          <div className="flex h-14 flex-1 items-center gap-2 rounded-lg bg-zinc-950 px-4">
            <Calendar className="size-5 text-zinc-400" />
            <input
              type="datetime-local"
              name="occurs_at"
              className="placeholder:zinc-400 w-36 flex-1 bg-transparent text-lg outline-none"
              placeholder="Data e horário da atividade"
            />
          </div>

          <Button size="full" type="submit">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  );
};
