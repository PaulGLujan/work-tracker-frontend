import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { callbackAtTime } from "../utils";
import { createTimeEntry } from "../api/timeEntryApi";
import TimeEntryAlert from "../components/TimeEntryAlert";

const App = () => {
  const [show, setShow] = useState(false);
  const timeStamp = new Date();
  const endTime = new Date(timeStamp.getTime() + 15 * 60 * 1000);

  useEffect(() => {
    const later = new Date();
    later.setSeconds(later.getSeconds() + 5);
    callbackAtTime(later, () => {
      setShow(true);
    });
  }, []);

  const onConfirm = (timeStart: Date, timeEnd: Date) => {
    setShow(false);
    createTimeEntry({
      startTime: timeStart.toISOString(),
      endTime: timeEnd.toISOString(),
      userId: 1,
    });
  };

  return (
    <div>
      <TimeEntryAlert
        show={show}
        onConfirm={onConfirm}
        timeStart={timeStamp}
        timeEnd={endTime}
      />
      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </div>
  );
};

export default App;
