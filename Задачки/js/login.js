let login = prompt("Кто пишел?", "");
console.log(login);
if (login === "Админ") {
  let password = prompt("Пароль?", "");
  if (password === "Чёрный Властелин") {
    alert("Добро пожаловать!");
  } else if (password === null) {
    alert("Вход отменён");
  } else alert("Пароль неверен");
} else if (login === null) {
  alert("вход отменен");
} else {
  console.log(login);
  alert("я вас не знаю");
}
