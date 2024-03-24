import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import notfound from "@/assets/beam-note.svg";
import { CreateItemBtn } from "../inventory-management/create";
export const NoItems = (isBackend = false) => {
  const navigate = useNavigate();
  return (
    <div className=" p-4 min-h-[500px]">
      <img src={notfound} className=" mx-auto" height={300} width={300} />
      <h2 className=" text-center font-semibold text-xl text-black">
        No Items Found!
      </h2>
      <div className=" flex justify-center mt-5">
        {isBackend ? (
          <CreateItemBtn>
            <Button size="sm">Create Item</Button>
          </CreateItemBtn>
        ) : (
          <Button
            size="sm"
            onClick={() => {
              navigate("/inventory-management");
            }}
          >
            Go to your inventory{" "}
          </Button>
        )}
      </div>
    </div>
  );
};
