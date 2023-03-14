import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

type TimeEntryAlertProps = {
  show: boolean;
  timeStart: Date;
  timeEnd: Date;
  onConfirm: (timeStart: Date, timeEnd: Date) => void;
};

const TimeEntryAlert = ({
  show,
  timeStart,
  timeEnd,
  onConfirm,
}: TimeEntryAlertProps) => {
  return (
    <Alert show={show}>
      <Alert.Heading>Working?</Alert.Heading>
      <p>
        It's now {timeStart.toLocaleString()}. The work period runs until{" "}
        {timeEnd.toLocaleString()} Are you working?
      </p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button
          onClick={() => {
            onConfirm(timeStart, timeEnd);
          }}
        >
          Yep!
        </Button>
      </div>
    </Alert>
  );
};

export default TimeEntryAlert;
