import { useEffect, useState } from "react";
import { callbackAtTime } from "../utils";
import { getAlertTimes } from "../api";

function WorkingPage() {
  const [showPrompt, setShowPrompt] = useState(false);

  const logSuccess = () => {
    console.log("event fired!");
    setShowPrompt(true);
  };

  const handleOkayClick = () => {
    setShowPrompt(false);
  };
  useEffect(() => {
    callbackAtTime(new Date("January 15, 2023 16:18:00 GMT-08:00"), logSuccess);
    getAlertTimes("January 15, 2023 16:18:00 GMT-08:00", 3);
  }, []);

  if (showPrompt) {
    return (
      <div className="flex w-full justify-center rounded border bg-green-100 p-3 shadow">
        <h1 className="text-base">Working?</h1>
        <button
          className="flex items-center gap-x-1 border px-3 py-1.5"
          onClick={handleOkayClick}
        >
          Okay
        </button>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-center rounded border bg-amber-100 p-3 shadow">
      <h1 className="text-base">Keep on rolling...</h1>
    </div>
  );
}

export default WorkingPage;
