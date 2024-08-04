import { useParams } from "react-router-dom";
import { BackTo } from "../../components/BackTo/BackTo";

export const UpdateRoleView = () => {
  const { id } = useParams();
  return (
    <>
      <div className="flex h-full flex-col px-8 py-8">
        <BackTo>Roles</BackTo>
        {id}
      </div>
    </>
  );
};
