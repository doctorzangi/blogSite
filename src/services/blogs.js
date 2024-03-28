import { httpPostR, httpGet, httpDelete, httpPut } from "../../rest-api";


const apiUrlPrefix = "api/user/";

const BlogService = {
  list: async () => {
    const response = await httpGet(`${apiUrlPrefix}/blogposts/`);

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
      `${apiUrlPrefix}/blogposts/`,
      reqBody,
      true
    );

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to create Blog, please try again later",
        ];
      }

      return response;
    }

    return response.data;
  },

  update: async ({reqBody, id}) => {
    const response = await httpPut(`${apiUrlPrefix}/blogposts/${id}/`, reqBody, true);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to update Blog, please try again later",
        ];
      }

      return response;
    }

    return response.data;
  },

  delete: async (id) => {
    const response = await httpDelete(`${apiUrlPrefix}/blogposts/${id}/`);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to delete Blog, please try again later",
        ];
      }

      return response;
    }

    if (response?.status !== 200) {
      return {
        error: true,
        message: ["Unable to delete Blog, please try again later"],
      };
    }

    return response.data;
  },

  detail: async (id) => {
    const response = await httpGet(`${apiUrlPrefix}/blogposts/${id}/`);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to get Blog, please try again later",
        ];
      }

      return response;
    }

    return response.data;
  },
};

export default BlogService;