import { BackTo } from "../../components/BackTo/BackTo";

export const CreateRoleView = () => {
  return (
    <>
      <div className="flex h-full flex-col px-8 py-8">
        <BackTo>Roles</BackTo>

        <h1 className="text-3xl">Crear un nuevo rol</h1>
        <div className="mt-8 flex w-full flex-col space-y-4 rounded-md border-solid border-neutral-200 px-4 py-8 shadow-lg">
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-neutral-700">Nombre</label>
            <input type="text" className="h-10 rounded-md bg-neutral-200 p-4 focus:bg-blue-200" />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-neutral-700">Descripción</label>
            <textarea className="rounded-md bg-neutral-200 p-4 focus:bg-blue-200"></textarea>
          </div>
        </div>
      </div>
    </>
  );
};
