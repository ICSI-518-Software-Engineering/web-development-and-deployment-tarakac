import { Loader2 } from "lucide-react";

export const LoadingItem = () => {
  return (
    <div className="min-h-[500px] w-full flex justify-center text-black items-center flex-col ">
      <Loader2 className=" animate-spin my-2" size={44} />
      <span className=" text-lg">Loading...</span>
    </div>
  );
};
