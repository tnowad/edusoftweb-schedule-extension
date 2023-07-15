import "~/styles";
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";
export const ContentApp = () => {
  return (
    <div className="fixed right-0 bottom-0 m-5 z-100 flex items-end font-sans select-none leading-1em">
      <button className="flex w-10 h-10 rounded-full shadow cursor-pointer border-none bg-blue-400 hover:bg-blue-500">
        <DocumentArrowDownIcon className="text-white" />
      </button>
    </div>
  );
};
