import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";
import { fillColor, parseSubject } from "~/utils/parseData";
import Subject from "~/interfaces/Subject";

export const ContentApp = () => {
  const getData = (): Subject[] => {
    const trElements = Array.from(document.querySelectorAll(".body-table tr"));
    const data = trElements.map((trElement) =>
      parseSubject(Array.from(trElement.querySelectorAll("td")))
    );

    return fillColor(data);
  };

  const handleButtonClick = () => {
    console.log(getData());
  };

  return (
    <div>
      <div className="fixed right-0 bottom-0 m-5 z-100 flex items-end font-sans select-none leading-1em">
        <button
          className="flex w-10 h-10 rounded-full shadow cursor-pointer border-none bg-blue-400 hover:bg-blue-500"
          onClick={handleButtonClick}
        >
          <DocumentArrowDownIcon className="text-white" />
        </button>
      </div>
    </div>
  );
};
