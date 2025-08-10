const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="admin@giftedtechnexus.co.ke"
global.location="Eldoret,Kenya."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/Giftedmaurice/gifted-bot-md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/54efddccf41281ad7ec51.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254728782591" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349023371564";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349023371564";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254728782591,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://qr-scan.giftedtechnexus.co.ke/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Gifted Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©²⁰²⁴ ɢɪғᴛᴇᴅ ʙᴏᴛ ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ɢɪғᴛᴇᴅ ᴛᴇᴄʜ』*\n https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o"),
 
  author : process.env.PACK_AUTHER|| "ɢɪғᴛᴇᴅ ᴛᴇᴄʜ",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "ɢɪғᴛᴇᴅ ᴛᴇᴄʜ",
  ownername:process.env.OWNER_NAME|| "It's GiftedTech",

  sessionName:process.env.SESSION_ID || "Gifted~H4sIAAAAAAAAA5VU3ZKiRhR+lVTfYu3wL1I1VSs/IigqIo4zqVy00GCDAjYNglvzLLnKM+S18ggpdCa7lU02E66aQ3PO933nO+cLyAtcoRnqgPoFlAQ3kKL+SLsSARVodRwjAgYgghQCFXh2PDwz1yqzRa0JYDW+7PXc9VtcInHOXx/qbUvHdBIgLngErwNQ1vsjDn+QMDRsbpEqlGeX6CwnuaQ/68widqihSHbTOs3UKg4P/iyeso/gtc8IMcF5YpYHdEIEHmeoW0FMPgbfnIzO/Hxz5ZTWPzhWLW86lo9jbjuHnJM05XTS2utL45Ag+Rj8S7rlG0ipy2nsk+4xkj72knS+oPx6VlhMtXraha3hHqtDdYdf4SRHkR2hnGLafVh3NFYkae0oUYDd+VPjs4kcuIWvSXttY7aHNjt7BpM9M3WQfQx4Fkgd1yznpyzOnkNvV4tmEY2GpsOuww31io00nc7l0i0n3rfAV+TdK9n/0T2ZFLxwLbpnrmm8ubxZMwE+NfbzNrMse+rOOboxlKrGM8v8GHyNSha7yWN8tJhZymwfZlbrl7qydlK0k2Ed5nGRzhb7p4P7FT6kNfkRyuXDaoOuL09EeYnFke6mxDUPdqzsMFcZuPDMs2WKx8XO4FErSOE0cbP4jF+WDcusdbRFJN3Z5wMqkmQXLyDDVPI+1JPHG6MMdXYEVO51AAhKcEUJpLjI+5gsDACMGh+FBNGbukDuTvLmkK4oLEgXnq8idkmit6ejOfLqZPoi7iLoibLGdMUjGICSFCGqKhRNcUUL0rmoqmCCKqD+fGtUz5mgU0GRgyOgAl4QRywvCENOksXP1afLAdIKluWnHFEwADEpTi4CKiU1GoDbH9pY4oeywpojntM53dBllud0YcIr8pAbi1JP8XSvusEnVFF4KoHKDSVREVlZkV9/GYActfTun561wA1AjElFg7wujwWM3s31/hGGYVHn1O/yUO8PiAD1mzCiFOdJ1VOrc0jCA26Q3vMAagyPFfpLaERQ9M7lbXnoRdT33xgGz0v5iQU99j7R9+Ko8vfyHG/XJHEksbzCiSwrciNV/tyHByCHfSrg4gj99Mevv/3eC/MGua8QIQrxsQIq0Be6zi5Zy1yuFLHyLGvsJmM9GYOvFN8te/cErxvDmBHFJN05kldmk2GcTtnRREwvl9FsX7nTxWE+F5lYv3ni70mACgiPHaXRZ0uH1yz3RIyJPTGDeLPwsokhZlEmmEKd+qv9i5G9HM6rTUqdPZbMdBfa84lk5AieCLNR/JRSFu2Fa4CGWu/vAYhQg0P0bTFOsyvLkVgPW2i8atYnPFuQxajxRyNcGlobH5Z6MjST9TF2hFFKyINmN4Q/brfDlb8Y0o0frUWf309a69ruLlLATlptfB+m2zAf35YofvM5vr3GGN120lsf/rOZd+C959jXwTc53rbcv62fKEkY4aFe2jbXoWD2oiFBbEerNbIVd+WfhoZ2ffY7ZpVfzuC1N395hDQuyAmoAOYRKW5mIUXdm9jO4+IHxXTNtjXvzvwIKzr+Ohj/NGvC/daKFOUUVgegAiFZBU7Wu7wbl6VPIX2fMzDun7nugtc/AbiYWFgKCAAA",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "GIFTED",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
