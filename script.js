const form = document.querySelector(".form");
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
                name: "Екатерина",
                secondName: "Sevruk",
                email: "sevruk@gmail.com",
                phone: 79990009900,
                agree: true
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
