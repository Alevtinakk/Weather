const { Context } = require("telegraf");

const img = [
  "https://i.pinimg.com/236x/2a/f5/3d/2af53d8f1be483dd0e05b7b18142c33c.jpg",
  "https://i.ucrazy.org/files/pics/2023.10/2023-10-17-21-53-072.webp",
  "https://s00.yaplakal.com/pics/pics_original/8/5/0/17512058.jpg",
  "https://s0.rbk.ru/v6_top_pics/media/img/5/31/756806793338315.png",
  "https://media.istockphoto.com/id/1062947134/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D0%B1%D0%BE%D1%80-%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D1%8F-%D0%B1%D0%BB%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B8-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5-%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B5-%D0%BB%D1%83%D1%87%D0%B8-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B0.jpg?s=612x612&w=0&k=20&c=rSRPoCl78qvsYxaRhOa0xS_z10jDDnJvhteWLM5w8yo=",
  "https://n1s1.hsmedia.ru/c6/cb/07/c6cb075801788a8aa6743e7c1d533f59/600x600_1_3385da3571b5694b6829c4da5493ed8e@1200x1200_0xac120004_2890328431678722594.jpeg",
  "https://media.istockphoto.com/id/1419410282/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%82%D0%B8%D1%85%D0%B8%D0%B9-%D0%BB%D0%B5%D1%81-%D0%B2%D0%B5%D1%81%D0%BD%D0%BE%D0%B9-%D1%81-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%BC%D0%B8-%D1%8F%D1%80%D0%BA%D0%B8%D0%BC%D0%B8-%D1%81%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BB%D1%83%D1%87%D0%B0%D0%BC%D0%B8.jpg?s=612x612&w=0&k=20&c=JekK-RNumyvN0CDJ1WMyF3-FEFyNH8LUsr5nG8WTwWg=",
];

function imgRandom(ctx) {
  const rdm = img[Math.floor(Math.random() * img.length)];

  const index = img.indexOf(rdm);

  img.splice(index, 1);
  ctx.reply(rdm);
  return rdm;
}

module.exports = imgRandom;
