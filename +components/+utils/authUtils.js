export const handleLoginResponse = (response) => {
  if (response.error || response.type !== "success") {
    return;
  }

  return response.params;
};

export const toQueryString = (params) =>
  "?" +
  Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
