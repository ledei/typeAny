import { users } from "../data/users.json";
import { User } from "../types/User";
import { sessions } from "../data/workoutSession.json";
import { Session } from "../types/Session";

type fetchUserInputProps = {
  username: string;
};

type authUserInputProps = {
  username: string;
  password: string;
};

const fetchUser = async ({ username }: fetchUserInputProps): Promise<User> => {
  const findUserData = users.find((user) => user.username === username);

  return findUserData as User;
};

const authUser = async (userDeatils: authUserInputProps): Promise<boolean> => {
  const findUser = users.find((user) => user.username === userDeatils.username);
  if (findUser === undefined) return false;
  if (findUser.password !== userDeatils.password) return false;
  return true;
};

const fetchSessions = async (): Promise<Session[]> => {
  const session = sessions as Session[];
  if (session === undefined) throw new Error("something went wrong with session");
  return session;
};

const requestService = { fetchUser, authUser, fetchSessions };

export default requestService;
