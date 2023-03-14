import React, { useEffect, useState } from "react";
import { Appointment } from "./types/appointmentTypes";
import {
  getAppointmentsByUserId,
  createAppointment,
} from "./api/appointmentApi";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentTable from "./components/AppointmentTable";

const App: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const handleSubmit = (startTime: string, endTime: string) => {
    createAppointment({
      startTime: new Date(startTime).toISOString(),
      endTime: new Date(endTime).toISOString(),
      userId: 1,
    });
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    const appointments = await getAppointmentsByUserId(1);
    setAppointments(appointments);
  };

  return (
    <>
      <AppointmentForm onSubmit={handleSubmit} />
      <AppointmentTable appointments={appointments} />
    </>
  );
};

export default App;
