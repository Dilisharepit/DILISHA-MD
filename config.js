const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID ||"put your session id here",
ALIVE_IMG: process.env.ALIVE_IMG ||"https://telegra.ph/file/cad7038fe82e47f79c609.jpg",
ALIVE_MSG: process.env.ALIVE_MSG ||"I AM ALIVE NOW 💫",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS ||"true",
MODE: process.env.MODE ||"public",
};
