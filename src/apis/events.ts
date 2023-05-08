import Axios from "@/utils/Axios";

export const getEvents = async () => {
  const response = await Axios({
    method: "GET",
    url: "/events",
  });

  return response.data;
};

export const getEvent = async (id: string) => {
  const response = await Axios({
    method: "GET",
    url: `/events/${id}`,
  });

  return response.data;
};
