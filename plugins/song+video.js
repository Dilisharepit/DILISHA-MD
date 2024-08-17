 const {cmd , commands} = require('../command')


cmd({
    pattern: "song",
    desc: "Check bot online or no.",
    category: "download song",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply("please give me a url or title")
const search = await yts(q)
const data = search.videos[0];
const url  = data.url

let desc = `
😈 *ᎠᏆᏞᏆՏᎻᎪ-ᎷᎠ song downloader*😈

tittle: ${data.title}
despcription: ${data.description}
time: ${data.time}
ago: ${data.ago}
views: ${data.views}

MADE BY 😈DILISHA_GIMSHAN😈
`

await conn.sendmessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

// send audio + document message
await conn.sendmessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},quoted:mek})
await conn.sendmessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"MADE IN DILISHA💞}quoted:mek})



}catch(e){
console.log(e)
reply('${e}')
}
})

//=========video-dl===========//

cmd({
    pattern: "video",
    desc: "Check bot online or no.",
    category: "download video",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply("please give me a url or title")
const search = await ytv(q)
const data = search.videos[0];
const url  = data.url

let desc = `
😈 *ᎠᏆᏞᏆՏᎻᎪ-ᎷᎠ video downloader*😈

tittle: ${data.tittle}
despcription: ${data.description}
time: ${data.time}
ago: ${data.ago}
views: ${data.views}

MADE BY 😈DILISHA_GIMSHAN😈
`

await conn.sendmessage(from,{image:{url: data. thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

// send video + document message
await conn.sendmessage(from,{video: {url:downloadUrl},mimetype:"video/mp4",caption:"MADE BY DILISHA💞},quoted:mek})
await conn.sendmessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4"},quoted:mek})





}catch(e){
console.log(e)
reply('${e}')
}
})
