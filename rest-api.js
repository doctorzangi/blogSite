
import axios from "axios";
import { getLoginToken } from "./src/utils/Utils";

const appBaseUrl = process.env.BACKEND_API_URL;

export const httpGet = async (url) => {
  try {
    return await axios.get(`http://127.0.0.1:8000/${url}`, {
      headers: generateHeaders(),
    });
  } catch(error) {
    let messageArray = [];
      
    if (error?.response?.data?.errors) {
      messageArray = error.response.data.errors;
    } else if (error?.response?.data?.message) {
      messageArray.push(error.response.data.message);
    }

    return { error: true, message: messageArray };
  }
}

export const httpPost = async (url, reqBody, isMultipart = false, token = "", onUploadProgress = null) => {
  try {
    const config = {
      headers: generateHeaders(token, isMultipart),
    };

    // Safely include the onUploadProgress callback if it's a function
    if (typeof onUploadProgress === 'function') {
      config.onUploadProgress = progressEvent => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        console.log('Percent complete', percentCompleted);
        onUploadProgress(percentCompleted);
      };
    }

    return await axios.post(`http://127.0.0.1:8000/${url}`, reqBody, config);
  } catch (error) {
    let messageArray = [];
      
    if (error?.response?.data?.errors) {
      messageArray = error.response.data.errors;
    } else if (error?.response?.data?.message) {
      messageArray.push(error.response.data.message);
    }

    return { error: true, message: messageArray };
  }
};

export const httpPostR = async (url, reqBody, onUploadProgress = null) => {
  try {
    const config = {};

    // Safely include the onUploadProgress callback if it's a function
    if (typeof onUploadProgress === 'function') {
      config.onUploadProgress = progressEvent => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        console.log('Percent complete', percentCompleted);
        onUploadProgress(percentCompleted);
      };
    }

    return await axios.post(`http://127.0.0.1:8000/${url}`, reqBody, config);
  } catch (error) {
    let messageArray = [];
      
    if (error?.response?.data?.errors) {
      messageArray = error.response.data.errors;
    } else if (error?.response?.data?.message) {
      messageArray.push(error.response.data.message);
    }

    return { error: true, message: messageArray };
  }
};


export const httpPut = async (url, reqBody, isMultipart = false, token = "") => {
  try {
    return await axios.put(
      `http://127.0.0.1:8000/${url}`, 
      reqBody, 
      {
        headers: generateHeaders(token, isMultipart),
      }
    );
  } catch(error) {
    let messageArray = [];
      
    if (error?.response?.data?.errors) {
      messageArray = error.response.data.errors;
    } else if (error?.response?.data?.message) {
      messageArray.push(error.response.data.message);
    }

    return { error: true, message: messageArray };
  }
}

export const httpDelete = async (url, reqBody) => {
  try {
    return await axios.delete(
      `http://127.0.0.1:8000/${url}`, 
      {
        data: reqBody,
        headers: generateHeaders(),
      }
    );
  } catch(error) {
    let messageArray = [];
      
    if (error?.response?.data?.errors) {
      messageArray = error.response.data.errors;
    } else if (error?.response?.data?.message) {
      messageArray.push(error.response.data.message);
    }

    return { error: true, message: messageArray };
  }
}

export const generateHeaders = (token = "", isMultipart = false) => {
  let requestHeaders = {};
  let loginToken = token ? token : getLoginToken();

  if (loginToken) {
    requestHeaders['Authorization'] = `Bearer ${loginToken}`;
  }
  requestHeaders["Content-Type"] = isMultipart ? "multipart/form-data" : "application/json";

  return requestHeaders;
}

// Add a new function in rest-api.js to generate headers for Stripe requests
export const generateStripeHeaders = () => {
  return {
    "Authorization": `Bearer ${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`,
    "Content-Type": "application/x-www-form-urlencoded"
  };
}
