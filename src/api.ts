export const getAlertTimes = async (startTime: string, duration: number) => {
  const unixTimeStamp = new Date(startTime).getTime();
  const url = `/alertTimes/${unixTimeStamp}/${duration}`;

  const requestOptions = {
    method: "GET",
  };

  return fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
