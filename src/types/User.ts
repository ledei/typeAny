import { Session } from "./Session";

export type UserRole = "USER" | "ADMIN";

export interface User {
  username: string;
  password: string;
  role: UserRole;
  booked: Session[];
}
