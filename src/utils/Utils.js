import resolveConfig from 'tailwindcss/resolveConfig';

export const tailwindConfig = () => {
  // Tailwind config
  return resolveConfig('./src/css/tailwind.config.js')
}

export const hexToRGB = (h) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};

export const formatValue = (value) => Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 3,
  notation: 'compact',
}).format(value);

export const getUserDetailsFromJwt = (token) => {
  try {
    let tokenToDecode = token;
    if (!tokenToDecode) {
      tokenToDecode = getLoginToken();
    }

    const decoded = jwt.verify(
      tokenToDecode,
      process.env.REACT_APP_JWT_SECRET_KEY
    );
    return decoded;
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      console.log("Token has expired:", err.message);
    } else {
      console.log("Error decoding token:", err.message);
    }
    return "";
  }
};

export const getLoginToken = () => {
  return JSON.parse(localStorage.getItem("userToken"));
};

export const removeLoginToken = () => {
  localStorage.removeItem("userToken");
  return true;
};

export const setLoginToken = (token) => {
  localStorage.setItem("userToken", JSON.stringify(token));
};

// export const getRefreshToken = () => {
//   return JSON.parse(localStorage.getItem("refreshToken"));
// };

// // Set the refresh token in local storage
// export const setRefreshToken = (token) => {
//   localStorage.setItem("refreshToken", JSON.stringify(token));
// };

// // Remove the refresh token from local storage
// export const removeRefreshToken = () => {
//   localStorage.removeItem("refreshToken");
// };