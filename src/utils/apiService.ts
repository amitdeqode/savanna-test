const config = (method: string, data: unknown) => ({
  method: method,
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export const get = async (url: string) => {
  const res = await fetch(url);
  return await res.json();
};

export const post = async (url: string, data: unknown) => {
  const res = await fetch(url, config('POST', data));
  return await res.json();
};

export const put = async (url: string, data: unknown) => {
  const res = await fetch(url, config('PUT', data));
  return await res.json();
};

export const patch = async (url: string, data: unknown) => {
  const res = await fetch(url, config('PATCH', data));
  return await res.json();
};

export const deleteApi = async (url: string) => {
  await fetch(url, {
    method: 'DELETE',
  });
  return;
};
