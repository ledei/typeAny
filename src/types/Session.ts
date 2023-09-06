import { User } from "./User";

export interface Session {
  title: string;
  desc: string;
  start: number;
  end: number;
  date: string;
  spots: number;
  registerd: User[];
}
