import React from "react";

export const ChangePasswordForm: React.FC = () => {
  return (
    <form className="mt-8">
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-xs font-bold" htmlFor="nome">
          Nome
        </label>
        <input
          className="border border-black p-4 h-11 rounded-md font-semibold"
          type="text"
          id="nome"
          placeholder="Insira o nome"
        />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-xs font-bold" htmlFor="email">
          Email
        </label>
        <input
          className="border border-black p-4 h-11 rounded-md font-semibold"
          type="text"
          id="email"
          placeholder="Insira o email"
        />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-xs font-bold" htmlFor="telefone">
          Telefone
        </label>
        <input
          className="border border-black p-4 h-11 rounded-md font-semibold"
          type="text"
          id="telefone"
          placeholder="Insira o telefone"
        />
      </div>

      <div className="flex flex-col mt-10">
        <span className="text-xl block mb-6">Pedir nova password</span>
        <button className="text-purple rounded-3xl border border-purple w-36 text-sm h-11 hover:text-white hover:bg-black hover:border-black">
          Nova password
        </button>
      </div>
    </form>
  );
};
