import Axios from "@/utils/Axios";

export const login = async (email: string, password: string) => {
  const response = await Axios({
    method: "POST",
    url: "/auth/login",
    data: {
      email,
      password,
    },
  });

  return response.data;
};

export const register = async (
  email: string,
  password: string,
  first_name: string,
  last_name: string,
) => {
  const response = await Axios({
    method: "POST",
    url: "/auth/register",
    data: {
      email,
      password,
      first_name,
      last_name,
    },
  });

  return response.data;
};
