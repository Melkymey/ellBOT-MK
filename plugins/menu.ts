export default async function ({ cmd, prefix, pushname, botSettings, reply, sock, jid, msg }: any) {
    if (cmd !== "menu" && cmd !== "help") return false;

    const menu = `
╭━━━━━━━━━━━━━━━━━━━━╮
┃     🔰 *ellbot_MK* 🔰
╰━━━━━━━━━━━━━━━━━━━━╯

👤 *User:* ${pushname}
📡 *Status:* Online
⚡ *Prefix:* ${prefix}

╭─── *SETTINGS* ───
│ ⚙️ *${prefix}setai* <on/off> [${botSettings.aiEnabled ? '✅' : '❌'}]
│ ⚙️ *${prefix}setsticker* <on/off> [${botSettings.stickerEnabled ? '✅' : '❌'}]
│ ⚙️ *${prefix}setautosticker* <on/off> [${botSettings.autoSticker ? '✅' : '❌'}]
│ ⚙️ *${prefix}setautoread* <on/off> [${botSettings.autoRead ? '✅' : '❌'}]
│ ⚙️ *${prefix}setautoreact* <on/off> [${botSettings.autoReaction ? '✅' : '❌'}]
│ ⚙️ *${prefix}setemoji* <emoji> [${botSettings.reactionEmoji}]
╰────────────────

╭─── *CORE AI* ───
│ 🤖 *${prefix}ai* <tanya>
│ 🎨 *${prefix}aiimg* <prompt>
│ 🎨 *${prefix}sticker* (reply media)
│ 👤 *${prefix}owner* (kontak owner)
╰────────────────

╭─── *DOWNLOADER* ───
│ 🎵 *${prefix}tiktok* <url>
│ 📺 *${prefix}ytmp3* <url>
│ 🎥 *${prefix}ytmp4* <url>
╰────────────────

╭─── *TOOLS* ───
│ 📈 *${prefix}profile* (cek level)
│ 🏆 *${prefix}leaderboard* (top level)
│ 📝 *${prefix}nulis* <teks>
│ 🎨 *${prefix}ttp* <teks>
│ 🔗 *${prefix}tourl* <balas foto>
│ 📱 *${prefix}toqr* <teks/link>
│ 📖 *${prefix}wiki* <query>
│ 📝 *${prefix}tr* <lang> <teks>
│ 📄 *${prefix}buatcv* <data>
╰────────────────

╭─── *GROUP* ───
│ 👥 *${prefix}hidetag* <pesan>
│ 🚪 *${prefix}kick* @user
│ ➕ *${prefix}add* 62xxx
╰────────────────

_Bot Status: Stable v2.0_
`.trim();
    
    const menuImagePath = "./media/menu.jpg";
    const fs = await import("fs");
    
    if (fs.existsSync(menuImagePath)) {
        await sock.sendMessage(jid, { 
            image: { url: menuImagePath }, 
            caption: menu 
        }, { quoted: msg });
    } else {
        // Fallback to text with a placeholder image link if you want, 
        // or just send the menu text. Let's use a nice remote placeholder for now.
        const fallbackImage = "https://w0.peakpx.com/wallpaper/582/283/HD-wallpaper-whatsapp-aesthetic-green-whatsapp-logo.jpg";
        await sock.sendMessage(jid, { 
            image: { url: fallbackImage }, 
            caption: menu 
        }, { quoted: msg });
    }
    
    return true;
}
