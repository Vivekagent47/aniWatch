import Axios, { BaseUrl } from "@/utils/Axios";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  console.log(BaseUrl);

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

export const register = async ({
  email,
  password,
  first_name,
  last_name,
}: {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}) => {
  const response = await Axios({
    method: "POST",
    url: "/auth/signup",
    data: {
      email,
      password,
      first_name,
      last_name,
    },
  });

  return response.data;
};
