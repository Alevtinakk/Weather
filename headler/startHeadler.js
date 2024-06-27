const User = require("../models/users");

async function startHeadler(ctx) {
  const telegramUser = ctx.update.message.from;
  try {
    console.log(telegramUser.id.toString());
    const user = await User.findOne({ userId: telegramUser.id.toString() });
    if (!user) {
      const newUser = new User({
        userId: telegramUser.id.toString(),
        firstName: telegramUser.first_name,
        lastName: telegramUser.last_name,
        
      });
      await newUser.save();
      ctx.reply("Добро пожаловать в бот");
    } else {
      ctx.reply("Вы уже есть в БД");
    }
  } catch (error) {
    console.error("ошибка при регистрации пользователя", error);
    ctx.reply("ошибка при регистрации пользователя");
  }
}

module.exports = startHeadler;
