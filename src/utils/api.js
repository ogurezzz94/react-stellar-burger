export const getIngridientsApi = async () => {
  const res = await fetch("https://norma.nomoreparties.space/api/ingredients", {
    method: "GET",
  });
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`ошибка ответа сервера, статус: ${res.status}, ${res}`);
  }
};
