/*

THIS BOT WAS MADE BY ODOONG

github_link: github.com/Odoong
kakaotalk_ID: undefinde231
discord: code_admin#7813

*/
function response(room, text, sender, groupchat, chat, imageDB, packageName) {
    const reduce = '\u200b'.repeat(500); 
    const enter = '\n'; 
    const FS = FileStream; 
    if (text == 'Ostart' || text == 'O시작') {
        try {
            let admin_path = 'sdcard/admin.txt'; 
            let prefix_path = 'sdcard/prefix.txt'; 
            let link_path = 'sdcard/link.txt';
            let sense_path = 'sdcard/link_sense.txt';
            FS.write(
                admin_path,
                '[!] ADMIN LIST ' + reduce + enter.repeat(2)
            );
            FS.write(
                prefix_path,
                '.'
            );
            FS.write(
                link_path,
                '[!] LINK ' + enter.repeat(2)
            );
            FS.write(
                sense_path,
                'off'
            );
            chat.reply(
                '[!] START! O BOT!' + reduce + enter.repeat(2) + 
                'This bot was made by ODOONG' + enter + 
                '기본 접두사는 . 입니다'
            );
        } catch (e) {
            chat.reply(
                '[!] ERROR   ' + reduce + enter.repeat(2) + 
                '➤  ' + e.message 
            );
        }
    }
}
