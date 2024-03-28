import { httpPostR, httpGet, httpDelete, httpPut } from "../../rest-api";

const apiUrlPrefix = "api/user/";

const AuthorService = {
  list: async () => {
    const response = await httpGet(`${apiUrlPrefix}/authers/`);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to list Authors, please try again later",
        ];
      }

      return response;
    }

    return response.data;
  },

  add: async (reqBody) => {
    const response = await httpPostR(`${apiUrlPrefix}/authers/`, reqBody, true);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to create Author, please try again later",
        ];
      }

      return response;
    }

    return response.data;
  },

  update: async ({ reqBody, id }) => {
    const response = await httpPut(
      `${apiUrlPrefix}/authers/${id}/`,
      reqBody,
      true
    );

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to update Author, please try again later",
        ];
      }

      return response;
    }

    return response.data;
  },

  delete: async (id) => {
    const response = await httpDelete(`${apiUrlPrefix}/authers/${id}/`);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to delete Author, please try again later",
        ];
      }

      return response;
    }

    if (response?.status !== 200) {
      return {
        error: true,
        message: ["Unable to delete Author, please try again later"],
      };
    }

    return response.data;
  },

  detail: async (id) => {
    const response = await httpGet(`${apiUrlPrefix}/authers/${id}/`);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = ["Unable to get Author, please try again later"];
      }

      return response;
    }

    return response.data;
  },
};

export default AuthorService;
