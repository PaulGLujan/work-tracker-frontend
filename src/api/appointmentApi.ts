import { del, get, post } from "./restMethods";
import { Appointment, CreateAppointment } from "../types/appointmentTypes";
import { RespStatus } from "../types/apiTypes";

export const getAppointmentsByUserId = async (
  userId: number
): Promise<Appointment[]> => {
  try {
    return await get(`appointment/${userId}`);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createAppointment = async (
  appointment: CreateAppointment
): Promise<{ status: RespStatus; id: number | null }> => {
  try {
    return await post("appointment", appointment);
  } catch (error) {
    console.error(error);
    return { status: "failed", id: null };
  }
};

export const deleteAppointment = async (
  id: number
): Promise<{ status: RespStatus }> => {
  try {
    return await del(`appointment/${id}`);
  } catch (error) {
    console.error(error);
    return { status: "failed" };
  }
};
