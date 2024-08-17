const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "Check bot online or no.",
    category: "download song",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply("please give me a url or tittle")
const search = await yts(q)
const data = search.videos[0];
const url  = data.url

let desc = ' 
😈 *ᎠᏆᏞᏆՏᎻᎪ-ᎷᎠ song downloader*😈

tittle: ${data.tittle}
despcription: ${data.description}
time: ${data.time}
ago: ${data.ago}
views: ${data.views}

MADE BY 😈DILISHA_GIMSHAN😈

await conn.sendmessage(from,{image:{url: data. thumbnail},caption:desc,{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

// send audio message
await conn.sendmessage(from,{audio: {url:downloadUrl}mimetype:"audio/mpeg"}quoted:mek})





}catch(e){
console.log(e)
reply('${e}')
}
})
