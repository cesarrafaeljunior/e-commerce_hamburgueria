import { apiAcess } from "./Axios/axios";

export const getProducts = (sucessResponse, errorResponse) => {
  apiAcess
    .get("products")
    .then(({ data }) => sucessResponse(data))
    .catch((error) => errorResponse(error));
};
