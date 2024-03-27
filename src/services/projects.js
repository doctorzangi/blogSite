import { httpPostR, httpGet, httpDelete, httpPut } from "../../rest-api";


const apiUrlPrefix = "api/user/";

const ProjectService = {
  list: async () => {
    const response = await httpGet(`${apiUrlPrefix}/projects/`);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to list wishlist, please try again later",
        ];
      }

      return response;
    }

    return response.data;
  },

  add: async (reqBody) => {
    const response = await httpPostR(
      `${apiUrlPrefix}/projects/`,
      reqBody,
      true
    );

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to create Project, please try again later",
        ];
      }

      return response;
    }

    return response.data;
  },

  update: async ({reqBody, id}) => {
    const response = await httpPut(`${apiUrlPrefix}/projects/${id}/`, reqBody, true);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to update user, please try again later",
        ];
      }

      return response;
    }

    return response.data;
  },

  delete: async (id) => {
    const response = await httpDelete(`${apiUrlPrefix}/projects/${id}/`);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to delete user, please try again later",
        ];
      }

      return response;
    }

    if (response?.status !== 200) {
      return {
        error: true,
        message: ["Unable to delete agent user, please try again later"],
      };
    }

    return response.data;
  },

  detail: async (id) => {
    const response = await httpGet(`${apiUrlPrefix}/projects/${id}/`);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to get user details, please try again later",
        ];
      }

      return response;
    }

    return response.data;
  },
};

export default ProjectService;