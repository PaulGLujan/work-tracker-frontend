export interface CreateAppointment {
  title?: string;
  description?: string;
  startTime: string;
  endTime?: string;
  userId: number;
}

export interface Appointment extends CreateAppointment {
  id: number;
  createdAt: string;
  updatedAt: string;
}
