const form = document.querySelector(".form");
const nameUser = document.querySelector("#name");
const secondName = document.querySelector("#secondName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const agree = document.querySelector("#agree");

form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();
  fetch('https://polinashneider.space/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: sevrukekaterina2511'
            },
            body: JSON.stringify({
                name: `${nameUser.value}`,
                secondName: `${secondName.value}`,
                email: `${email.value}`,
                phone: `${phone.value}`,
                agree: `${agree.value}`,
            })
        })
        .then((result) => {
            return result.json()
        })
        .then((data) => {
            console.log(data);
        })
        .catch(() => {
            form.reset();
            alert("Была найдена ошибка. Пожалуйста, повторите ввод данных ещё раз!");
        })
        .finally(() => {
            form.reset();
            alert("Анкета отправлена!");
        })
  // Здесь твой код
});
