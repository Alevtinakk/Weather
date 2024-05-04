require("dotenv").config();
const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
const axios = require("axios");
const helpHeadler = require("./headler/helpHeadler");
const botComands = require("./botComands");
const { getMainKeyboard, getSettingsKeyboard } = require("./utils");
const developnemtheadler = require("./developmentHeadler");

const bot = new Telegraf(process.env.TG_API_KEY);
bot.start((ctx) => ctx.reply("Welcome"));
bot.command("help", helpHeadler);

bot.telegram.setMyCommands(botComands);
bot.action("age", developnemtheadler);

bot.on("message", async (ctx) => {
  const mainKeyboard = getMainKeyboard();
  const inlineKeyboard = getSettingsKeyboard();
  ctx.reply("Выберите действие", inlineKeyboard);

  if (ctx.message.location) {
    console.log(ctx.message.location);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${ctx.message.location.latitude}&lon=${ctx.message.location.longitude}&units=metric&lang=ru&appid=${process.env.WEATHER_API_KEY}`;
    const response = await axios.get(url);
    console.log(response);
    ctx.reply(`${response.data.main.temp}, ${response.data.name}`);
    const img_sun =
      "https://media.istockphoto.com/id/1354219060/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B5-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B9-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B9-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B5%D0%B1-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B0-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=HcdcUPOaGO3_BQSxkyAcBdMaDLx23r9gN294LzOV8Wk=";
    const img_snow =
      "https://w7.pngwing.com/pngs/286/136/png-transparent-weather-forecasting-rain-snow-snow-weather-blue-text-cloud.png";
    const img_windy =
      "https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-windy-weather-image_2238627.jpg";
    if (response.data.main.temp > 20) {
      ctx.sendPhoto(img_sun);
    } else if (response.data.wind.speed > 10) {
      ctx.sendPhoto(img_windy);
    } else if (response.data.main.temp < 8) {
      ctx.sendPhoto(img_snow);
    }
  }
});
bot.launch();
// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
