import { Link } from "react-router-dom";
import "./CreateRoleView.css";

export const CreateRoleView = () => {
  return (
    <>
      <div className="flex h-full flex-col px-8 py-8">
        <Link
          to={-1}
          className="mb-8 flex w-fit items-center rounded-md border-2 border-solid border-blue-500 px-2 py-2 text-blue-500"
        >
          <span className="arrow-left-icon"></span>
          <span className="ml-2">Roles</span>
        </Link>
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
