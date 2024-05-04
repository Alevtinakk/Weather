const { Markup } = require("telegraf");

function getMainKeyboard() {
  return Markup.keyboard([
    [`🚀 Узнать погоду`],
    [`🐈 узнать своё местоположение `],
  ])
    .oneTime()
    .resize();
}

function getSettingsKeyboard() {
  return Markup.inlineKeyboard([
    [Markup.button.callback("👨Пол👩", "gender")],
    [Markup.button.callback("📅Возраст", "age")],
  ]);
}

module.exports = { getMainKeyboard, getSettingsKeyboard };
