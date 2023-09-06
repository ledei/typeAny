import { sessions } from "../data/workoutSession.json";
import { Session } from "../types/Session";

import requestService from "./RequestService";

type sessionRegister = {
  title: Session["title"];
  username: string;
};

const sessionRegister = async ({ title, username }: sessionRegister): Promise<string> => {
  const sessionData = sessions.find((session) => session.title === title);
  if (sessionData == undefined) throw new Error("User not found in userData todos");
  const userData = await requestService.fetchUser({ username });

  const isBooked = userData.booked.find((session) => session.title === title);
  if (isBooked !== undefined) return "its already added";
  (sessionData as Session).registerd.push(userData);
  userData.booked.push(sessionData);
  console.log(userData);

  return "added";
};

const sessionService = { sessionRegister };

export default sessionService;
