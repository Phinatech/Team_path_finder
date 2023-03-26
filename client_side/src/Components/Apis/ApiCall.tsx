import axios from "axios";
import { UserData } from "../Alllnterface";

const localUrl = "http://localhost:4660";

export const createUser = async ({ name, email, password }: any) => {
  return await axios
    .post(`${localUrl}/api/user/register`, {
      name,
      email,
      password,
    })
    .then((res) => {
      return res.data;
    });
};
