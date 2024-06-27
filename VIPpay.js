const User = require("./models/users");

const payVip = async (ctx) => {
  try {
    const userId = String(ctx.from.id);
    await User.findOneAndUpdate(
      { userId },
      { VIPstate: true },
      { upsert: true, new: true }
    );
    await ctx.reply("Ваш VIP статус был обновлён");
  } catch (error) {
    console.log(error);
    await ctx.reply("Произошла ошибка при обновление статуса");
  }
};

module.exports = payVip;
