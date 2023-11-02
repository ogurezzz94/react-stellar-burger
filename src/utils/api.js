export const getIngridientsApi = async ({link, met}) => {
  const res = await fetch(link, {
    method: met.toUpperCase(),
  });
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`ошибка ответа сервера, статус: ${res.status}, ${res}`);
  }
};
