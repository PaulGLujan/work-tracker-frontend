export interface CreateTimeEntry {
  startTime: string;
  endTime: string;
  userId: number;
}

export interface TimeEntry extends CreateTimeEntry {
  id: number;
  duration: {
    minutes: number;
  };
  createdAt: string;
  updatedAt: string;
}
