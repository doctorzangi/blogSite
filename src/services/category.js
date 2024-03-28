import { httpPostR, httpGet, httpDelete, httpPut } from "../../rest-api";

const apiUrlPrefix = "api/user/";

const CategoryService = {
  list: async () => {
    const response = await httpGet(`${apiUrlPrefix}/categories/`);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to list Categories, please try again later",
        ];
      }

      return response;
    }

    return response.data;
  },

  add: async (reqBody) => {
    const response = await httpPostR(`${apiUrlPrefix}/categories/`, reqBody, true);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to create Category, please try again later",
        ];
      }

      return response;
    }

    return response.data;
  },

  update: async ({ reqBody, id }) => {
    const response = await httpPut(
      `${apiUrlPrefix}/categories/${id}/`,
      reqBody,
      true
    );

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to update Category, please try again later",
        ];
      }

      return response;
    }

    return response.data;
  },

  delete: async (id) => {
    const response = await httpDelete(`${apiUrlPrefix}/categories/${id}/`);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to delete Category, please try again later",
        ];
      }

      return response;
    }

    if (response?.status !== 200) {
      return {
        error: true,
        message: ["Unable to delete Category, please try again later"],
      };
    }

    return response.data;
  },

  detail: async (id) => {
    const response = await httpGet(`${apiUrlPrefix}/categories/${id}/`);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = ["Unable to get Category, please try again later"];
      }

      return response;
    }

    return response.data;
  },
};

export default CategoryService;
