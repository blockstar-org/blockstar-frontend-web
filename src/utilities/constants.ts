export const baseApi =
  "https://backend-blockstar1-dev.rapidinnovation.tech/api/v1/";

export const variables = {
  accessToken: "accessToken",
  resetToken: "resetToken",
};

export const durationOptionsMap = {
  "1 min": 1,
  "2 mins": 2,
  "3 mins": 3,
  "5 mins": 5,
  "10 mins": 10,
  "15 mins": 15,
};

export const token =
  localStorage.getItem(variables.accessToken) ||
  sessionStorage.getItem(variables.accessToken);

  export function capitalizeFirstLetter(string) {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
}