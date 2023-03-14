import { Appointment } from "../types/appointmentTypes";

type AppointmentTableProps = {
  appointments: Appointment[];
};

const AppointmentTable = ({ appointments }: AppointmentTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appt) => (
          <tr key={appt.id}>
            <td>{appt.title}</td>
            <td>{appt.description}</td>
            <td>{new Date(appt.startTime).toLocaleString()}</td>
            <td>
              {appt.endTime ? new Date(appt?.endTime).toLocaleString() : ""}
            </td>
            <td>{appt.userId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentTable;
