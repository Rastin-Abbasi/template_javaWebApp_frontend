const WeChatBot = require('./wechatBot');

// Create an instance of WeChatBot
const weChatBot = new WeChatBot();

// Simulate receiving meeting notes from frontend
const meetingNotes = "Meeting notes from frontend";

// Simulate processing meeting notes
const processedMinutes = "Processed meeting minutes";

// Send processed minutes to WeChat bot
weChatBot.sendFormattedMessage(processedMinutes);
