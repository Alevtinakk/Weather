require("dotenv").config();
const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
const axios = require("axios");

const bot = new Telegraf(process.env.TG_API_KEY);
bot.start((ctx) => ctx.reply("Welcome"));
bot.on("message", async (ctx) => {
  if (ctx.message.location) {
    console.log(ctx.message.location);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${ctx.message.location.latitude}&lon=${ctx.message.location.longitude}&units=metric&lang=ru&appid=${process.env.WEATHER_API_KEY}`;
    const response = await axios.get(url);
    console.log(response);
    ctx.reply(`${response.data.main.temp}, ${response.data.name}`);
    const img =
      "https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713744000&semt=ais";
    ctx.sendPhoto(img);
  }
});
bot.launch();
// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
