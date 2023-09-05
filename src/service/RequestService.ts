import { users } from "../data/users.json";
import { User } from "../types/User";

type requestInputProps = {
  username: string;
  password: string;
};
const fetchUser = async ({ username }: requestInputProps): Promise<User> => {
  const findUserData = users.find((user) => user.username === username);

  return findUserData as User;
};

const authUser = async (userDeatils: requestInputProps): Promise<boolean> => {
  const findUser = users.find((user) => user.username === userDeatils.username);
  if (findUser === undefined) return false;
  if (findUser.password !== userDeatils.password) return false;
  return true;
};

const requestService = { fetchUser, authUser };

export default requestService;
