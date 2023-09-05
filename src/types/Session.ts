import { User } from "./User";

export interface Session {
  title: string;
  desc: string;
  start: number;
  end: number;
  date: Date;
  spots: number;
  registerd: User[];
}
