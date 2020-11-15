import JwtDecode from "jwt-decode";

export const handleLoginResponse = (response) => {
  if (response.error || response.type !== "success") {
    return;
  }

  const decodedJwtIdToken = JwtDecode(response.params.id_token);
  console.log(decodedJwtIdToken);

  return {
    idToken: decodedJwtIdToken,
    accessToken: response.params.access_token,
  };
};

export const toQueryString = (params) =>
  "?" +
  Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
