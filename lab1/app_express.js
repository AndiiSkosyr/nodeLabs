// підключення express
const express = require("express");
// створюємо об’єкт додатка
const app = express();
// визначаємо обробник для маршруту "/"
app.get("/", (request, response) => {
     
    // відправляємо відповідь
    response.send("<h2>Привет Express!</h2>");
});
// починаємо прослуховувати підключення на 3000 порту
app.listen(3000);
