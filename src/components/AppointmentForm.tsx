import { FormEvent, useState } from "react";

type AppointmentFormProps = {
  onSubmit: (startTime: string, endTime: string) => void;
};

const AppointmentForm = ({ onSubmit }: AppointmentFormProps) => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(startTime, endTime);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Start Time:
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </label>
      <br />
      <label>
        End Time:
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AppointmentForm;
