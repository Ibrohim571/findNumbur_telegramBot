// const TelegramApi = require("node-telegram-bot-api");

// const api = "5685573286:AAEEanULqFWa32lUy7Gsh-mDFNkX0QUb-sg";

// const bot = new TelegramApi(api, { polling: true });
// const chats = {};

// function gameBot(again) {
//   bot.on("message", async (msg) => {
//     const text = msg.text;
//     const chatId = msg.chat.id;

//     // bot buttonlar uchun
//     const gameOptions = {
//       reply_markup: JSON.stringify({
//         inline_keyboard: [
//           [
//             { text: "1", callback_data: "1" },
//             { text: "2", callback_data: "2" },
//             { text: "3", callback_data: "3" },
//           ],
//           [
//             { text: "4", callback_data: "4" },
//             { text: "5", callback_data: "5" },
//             { text: "6", callback_data: "6" },
//           ],
//           [
//             { text: "7", callback_data: "7" },
//             { text: "8", callback_data: "8" },
//             { text: "9", callback_data: "9" },
//           ],
//           [{ text: "0", callback_data: "0" }],
//         ],
//       }),
//     };

//     bot.setMyCommands([
//       { command: "/start", description: "Dasturni boshlash" },
//       { command: "/info", description: "Siz haqizda malumot" },
//       { command: "/game", description: "Start playing game" },
//     ]);

//     if (text == "/start") {
//       return await bot.sendMessage(
//         chatId,
//         `Welcome to my bot ${msg.from.first_name}`
//       );
//     }

//     if (text.includes("hello") || text.includes("salom")) {
//       return await bot.sendMessage(
//         chatId,
//         "https://tlgrm.eu/_/stickers/6ac/d6a/6acd6a14-1b98-49c6-84fc-64764f82e23d/192/6.webp"
//       );
//     }
//     if (text === "/game" || again == true) {
//       await bot.sendMessage(
//         chatId,
//         "I have chosen the number which is from 0 to 9"
//       );
//       const randomNumber = Math.floor(Math.random() * 10);
//       chats[chatId] = randomNumber;
//       return bot.sendMessage(chatId, "Find the number", gameOptions);
//     }

//     // if (text.includes("/example")) {
//     //   // await bot.sendPhoto(chatId, "./image/supernova.jpg");
//     //   bot.sendPhoto({
//     //     chatId: 738766438,
//     //     // to: "738766438",
//     //     file: "./image/400119700970_274171.jpg",
//     //   });

//     //   // return bot.sendVideo(chatId, "./video/2_5265240944067741387.mp4");
//     // }

//     return bot.sendMessage(chatId, "Tushinarsiz malumot");
//   });
// }

// gameBot(false);

// bot.on("callback_query", (msg) => {
//   const data = msg.data;
//   const chatId = msg.message.chat.id;

//   if (data == chats[chatId]) {
//     return bot.sendMessage(chatId, `congratulate you have found ${data}`);
//   } else {
//     bot.sendMessage(chatId, `unfortunately you haven't found ${data}`);
//     gameBot(true);
//     return;
//   }
// });

// // 429429Ka! sffdssdfsdf

// *************------------------*****************
// experement

const telegramBot = require("node-telegram-bot-api");
const token = "5685573286:AAEEanULqFWa32lUy7Gsh-mDFNkX0QUb-sg";
const bot = new telegramBot(token, { polling: true });
const cron = require("node-cron");

let chatId = -111111111;
cron.schedule(
  "59 6 15 * * 2",
  () => {
    bot.sendMessage(chatId, "some string value");
  },
  {
    scheduled: true,
    timezone: "Etc/UTC",
  }
);

cron.schedule(
  "59 1 12 * * 7",
  () => {
    bot.sendMessage(chatId, "some different string value");
  },
  {
    scheduled: true,
    timezone: "Etc/UTC",
  }
);

// The part below this comment line works perfectly fine on both groups

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const message = msg.text.trim().toLocaleLowerCase();

  switch (message) {
    case "xx":
      bot.sendMessage(chatId, "text");
      break;
    case "xx":
      bot.sendMessage(chatId, "text");
      break;
    case "#whoareyou":
      bot.sendMessage(chatId, "text");
      break;
  }
});
