import { httpPostR, httpGet, httpDelete, httpPut } from "../../rest-api";

const apiUrlPrefix = "admin/account";

const UserService = {
  list: async () => {
    const response = await httpGet(`${apiUrlPrefix}/user/`);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to list Users, please try again later",
        ];
      }

      return response;
    }

    return response.data;
  },

  add: async (reqBody) => {
    const response = await httpPostR(`${apiUrlPrefix}/user/`, reqBody, true);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to create User, please try again later",
        ];
      }

      return response;
    }

    return response.data;
  },

  update: async ({ reqBody, id }) => {
    const response = await httpPut(
      `${apiUrlPrefix}/user/${id}/change/`,
      reqBody,
      true
    );

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to update User, please try again later",
        ];
      }

      return response;
    }

    return response.data;
  },

  delete: async (id) => {
    const response = await httpDelete(`${apiUrlPrefix}/user/${id}/delete/`);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to delete User, please try again later",
        ];
      }

      return response;
    }

    if (response?.status !== 200) {
      return {
        error: true,
        message: ["Unable to delete User, please try again later"],
      };
    }

    return response.data;
  },

  detail: async (id) => {
    const response = await httpGet(`${apiUrlPrefix}/user/${id}/change/`);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = ["Unable to get User, please try again later"];
      }

      return response;
    }

    return response.data;
  },
};

export default UserService;
