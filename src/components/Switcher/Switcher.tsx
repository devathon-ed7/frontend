export const Switcher = ({ isChecked, onCheckboxChange }) => {
  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={onCheckboxChange}
            className="sr-only"
          />
          <div
            className={`box block h-8 w-14 rounded-full ${
              isChecked ? "bg-cello-500" : "bg-neutral-300"
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full transition ${isChecked ? "translate-x-full bg-white" : "bg-neutral-800"}`}
          ></div>
        </div>
      </label>
    </>
  );
};
