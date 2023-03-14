import { del, get, post } from "./restMethods";
import { CreateTimeEntry, TimeEntry } from "../types/timeEntryTypes";
import { RespStatus } from "../types/apiTypes";

export const getTimeEntriesByUserId = async (
  userId: number
): Promise<TimeEntry[]> => {
  try {
    return await get(`timeentry/${userId}`);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createTimeEntry = async (
  timeEntry: CreateTimeEntry
): Promise<{ status: RespStatus; id: number | null }> => {
  try {
    return await post("timeentry", timeEntry);
  } catch (error) {
    console.error(error);
    return { status: "failed", id: null };
  }
};

export const deleteAppointment = async (
  id: number
): Promise<{ status: RespStatus }> => {
  try {
    return await del(`timeentry/${id}`);
  } catch (error) {
    console.error(error);
    return { status: "failed" };
  }
};
