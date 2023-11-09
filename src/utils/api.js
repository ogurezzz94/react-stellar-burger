import { BASE_URL } from "./baseUrl";
import { checkResponse } from "./checkResponse";

const request = (url, data) => fetch(url, data).then(checkResponse);

export const getIngridientsApi = () => request(`${BASE_URL}ingredients`);

export const postOrderApi = (payload) => {
  return request(`${BASE_URL}orders`, {
    method: "POST",
    body: JSON.stringify({
      ingredients: payload,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
