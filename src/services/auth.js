import { httpPost, httpPostR } from "../../rest-api";

const apiPrefix = "api/user";

const AuthService = {
  login: async (reqBody) => {
    const response = await httpPost(`${apiPrefix}/login/`, reqBody);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = ["Unable to login, please try again later"];
      }

      return response;
    }

    return response.data;
  },

  register: async (formData) => {
    const response = await httpPostR(`${apiPrefix}/register/`, formData);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = ["Unable to register, please try again later"];
      }

      return response;
    }

    return response.data;
  },

  refreshToken: async (refreshToken) => {
    try {
      const response = await httpPost(`${apiPrefix}/`, {
        refreshToken,
      });

      if (response?.error) {
        // Handle any errors that occurred during the refresh token process
        console.error("Error refreshing token:", response.error);
        return { error: true, message: response.error.message };
      }

      // Assuming the new access token is in the response data
      return { error: false, accessToken: response.data.accessToken };
    } catch (error) {
      console.error("Error refreshing token:", error);
      return { error: true, message: "Failed to refresh token" };
    }
  },

  resetPassword: async (formData) => {
    const response = await httpPostR(`${apiPrefix}/resetpassword/`, formData);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to reset password, please try again later",
        ];
      }

      return response;
    }

    if (response?.status !== 200) {
      return {
        error: true,
        message: ["Unable to reset password, please try again later"],
      };
    }

    return response.data;
  },
  
  //http://127.0.0.1:8000/admin/account/user/10/password/
  changePassword: async ({id, formData}) => {
    const response = await httpPostR(`${apiPrefix}/user/${id}/password/`, formData);

    if (response?.error) {
      if (response?.error?.message && response?.error?.message.length < 0) {
        response.error.message = [
          "Unable to Change password, please try again later",
        ];
      }

      return response;
    }

    if (response?.status !== 200) {
      return {
        error: true,
        message: ["Unable to Change password, please try again later"],
      };
    }

    return response.data;
  },

};

export default AuthService;
