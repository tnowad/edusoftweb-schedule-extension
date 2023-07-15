import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { fillColor, parseSubject } from "~/utils/parseData";
import { Button, Alert, Typography } from "@material-tailwind/react";
import Subject from "~/interfaces/Subject";
import "~/styles";
import { storage } from "webextension-polyfill";

export const ContentApp = () => {
  const [showAlert, setShowAlert] = useState(false);
  const getData = (): Subject[] => {
    const trElements = Array.from(document.querySelectorAll(".body-table tr"));
    const data = trElements.map((trElement) =>
      parseSubject(Array.from(trElement.querySelectorAll("td")))
    );

    return fillColor(data);
  };

  const handleButtonClick = () => {
    setShowAlert(true);
    const data = getData();
    storage.local.set({ subject: data });
  };

  return (
    <div>
      <div className="fixed right-0 bottom-0 m-5 z-100 flex items-end font-sans select-none leading-1em">
        <Button
          color="blue"
          variant="outlined"
          className="rounded-full"
          onClick={handleButtonClick}
          nonce={() => {}}
          onResize={() => {}}
          onResizeCapture={() => {}}
        >
          {" "}
          Sync Schedule
        </Button>
      </div>
      {showAlert && (
        <div className="fixed top-5 right-5 z-50">
          <Alert
            icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
            color="blue"
            className="max-w-screen-md !bg-light-50"
            variant="ghost"
            onClose={() => setShowAlert(false)}
          >
            <Typography h="3">Successful sync schedule.</Typography>
          </Alert>
        </div>
      )}
    </div>
  );
};
