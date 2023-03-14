const BASE_URL = "";

export const get = async (endpoint: string): Promise<any> => {
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  return await response.json();
};

export const post = async (endpoint: string, body: object): Promise<any> => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};

export const del = async (endpoint: string): Promise<any> => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "DELETE",
  });
  return await response.json();
};

export const patch = async (endpoint: string, body: object): Promise<any> => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await response.json();
};
