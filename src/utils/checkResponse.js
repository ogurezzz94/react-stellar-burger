export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(
      `ошибка ответа сервера, статус: ${res.status}, ${res}`
    );
  }
};
