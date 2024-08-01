export const UserView = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-neutral-200 p-4">
        <h1>Usuarios</h1>
        <div>
          <button className="rounded-md bg-blue-500 px-2 py-1 text-sm text-white">+ Nuevo</button>
        </div>
      </div>
    </div>
  );
};
