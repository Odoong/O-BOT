/*

THIS BOT WAS MADE BY ODOONG

github_link: github.com/Odoong
kakaotalk_ID: undefinde231
discord: code_admin#7813

*/
function response(room, text, sender, groupchat, chat, imageDB, packageName) {
    const Jsoup = org.jsoup.Jsoup; 
    const Thread = java.lang.Thread; 
    const reduce = '\u200b'.repeat(500); 
    const none = '';
    const delay = Date.now(); 
    const enter = '\n'; 
    const line = '_'.repeat(32); 
    const ID = imageDB.profileHash; 
    const FS = FileStream; 
    const prefix = FS.read('sdcard/prefix.txt'); 
    const admin = FS.read('sdcard/admin.txt'); 
    const join_path = 'sdcard/@' + sender + '.txt';
    if (text == prefix + 'bot' || text == prefix + '봇') {
        try {
            chat.reply(
                '[!] O BOT LIVE   ' + reduce + enter.repeat(2) + 
                'O BOT Version' + enter + 
                '➤  1'
            );
        } catch (e) {
            chat.reply(
                '[!] ERROR   ' + reduce + enter.repeat(2) + 
                '➤  ' + e.message 
            );
        }
    }
    if (text == prefix + 'join' || text == prefix + '인증') {
        try {
            if (admin.includes(ID)) {
                chat.reply(
                    '[!] ' + sender + '님은 이미 관리자입니다!'
                );
            } else { 
                let key = Math.floor(Math.random() * 10000 + 1);
                FS.write(
                    join_path,
                    '[!] User Name: ' + sender + enter + 
                    '[!] User ID: ' + ID + enter + 
                    '[!] Key' + enter + 
                    '➤  ' + key
                );
                Api.makeNoti(
                    '[!] 인증번호',
                    sender + '님의 인증번호는 ' + key + '입니다!',
                    key
                );
                chat.reply(
                    '[!] 인증번호 발송 완료!' + enter + 
                    '(제한시간 3분)   ' + reduce + enter + 
                    '3분안에 인증번호를 채팅방에 보내주세요!'
                );
                Thread.sleep(3 * 60000);
                FS.remove(
                    join_path
                );
            }
        } catch (e) {
            chat.reply(
                '[!] ERROR   ' + reduce + enter.repeat(2) + 
                '➤  ' + e.message 
            );
        }
    }
    if (text) {
        try {
            if ((FS.read(join_path) ? true : false) == true) {
                if (Number) {
                    if (text == FS.read(join_path).split('➤  ')[1]) {
                        let admin_path = 'sdcard/admin.txt';
                        FS.append(
                            admin_path,
                            '[!] Admin Name: ' + sender + enter + 
                            '[!] ID: ' + ID + enter.repeat(2)
                        );
                        chat.reply(
                            '[!] SUCCESS' + enter + 
                            '인증 완료! 관리자가 되셨습니다!'
                        );
                        FS.remove(
                            join_path
                        );
                    }
                }
            }
        } catch (e) {
            chat.reply(
                '[!] ERROR   ' + reduce + enter.repeat(2) + 
                '➤  ' + e.message 
            );
        }
    }
    if (text.startsWith(prefix + 'k') || text.startsWith(prefix + '키')) {
        try {
            let user = text.substr(3);
            let Kjoin_path = 'sdcard/' + user + '.txt';
            chat.reply(
                FS.read(Kjoin_path)
            );
        } catch (e) {
            chat.reply(
                '[!] ERROR   ' + reduce + enter.repeat(2) + 
                '➤  ' + e.message 
            );
        }
    }
    if (text.startsWith(prefix + 'adminP') || text.startsWith(prefix + '임명')) {
        try {
            if (admin.includes(ID)) {
                let user = text.split(' ')[1].replace();
                let admin_path = 'sdcard/admin.txt';
                let user_path = 'sdcard/user_id/' + user + '.txt';
                let admin_info = FS.read(user_path).split('[!] Name: ')[1];
                if (admin.includes(admin_info)) {
                    chat.reply(
                        '[!] ' + user.replace(/@/, '') + '님은 이미 관리자에요!'
                    );
                } else {
                    FS.append(
                        admin_path,
                        '[!] Admin Name: ' + admin_info + enter.repeat(2)
                    );
                    chat.reply(
                        '[!] ' + user.replace(/@/, '') + '님을 관리자로 임명했습니다!'
                    );
                }
            }
        } catch (e) {
            chat.reply(
                '[!] 존재하지 않는 유저에요!'
            );
        }
    }
    if (text == prefix + 'adlist' || text == prefix + '관리자목록') {
        try {
            let admin_path = 'sdcard/admin.txt';
            chat.reply(
                FS.read(admin_path)
            );
        } catch (e) {
            chat.reply(
                '[!] ERROR   ' + reduce + enter.repeat(2) + 
                '➤  ' + e.message 
            );
        }
    }
    if (text.startsWith(prefix + 'ev') || text.startsWith(prefix + '이발')) {
        try {
            if (admin.includes(ID)) {
                let script = text.substr(4);
                let result = eval(script);
                chat.reply(
                    result
                );
                chat.reply(
                    'Delay: ' + (Date.now() - delay) + 'ms'
                );
            }
        } catch (e) {
            chat.reply(
                '[!] ERROR   ' + reduce + enter.repeat(2) + 
                '➤  ' + e.message 
            );
        }
    }
    if (text == prefix + 'information' || text == prefix + '정보') {
        try {
            if (admin.includes(ID)) {
                chat.reply(
                    '[!] ' + sender + '님의 정보   ' + reduce + enter.repeat(2) + 
                    '[!] Status' + enter + 
                    '➤ admin' + enter + 
                    '[!] User ID' + enter + 
                    '➤ ' + ID +  enter + 
                    '[!] Name' + enter + 
                    '➤ ' + sender
                );
            } else {
                chat.reply(
                    '[!] ' + sender + '님의 정보   ' + reduce + enter.repeat(2) + 
                    '[!] Status' + enter + 
                    '➤ normal' + enter + 
                    '[!] User ID' + enter + 
                    '➤ ' + ID + enter + 
                    '[!] Name' + enter + 
                    '➤ ' + sender
                );
            }
        } catch (e) {
            chat.reply(
                '[!] ' + sender + '님의 정보   ' + reduce + enter.repeat(2) + 
                '[!] Status' + enter + 
                '➤ normal' + enter + 
                '[!] User ID' + enter + 
                '➤ ' + ID + enter + 
                '[!] Name' + enter + 
                '➤ ' + sender
            );
        }
    }
    if (text) {
        try {
            let log_path = 'sdcard/' + room + '.txt';
            FS.write(
                log_path,
                '[!] 이름: ' + sender + enter + 
                '[!] 아이디: ' + ID + enter + 
                '[!] 보낸 메세지' + enter + 
                '➤  ' + text + enter + 
                line + enter.repeat(2) + 
                FS.read(log_path)
            );
        } catch (e) {
            Api.makeNoti(
                '[!] 저장공간 초과!',
                room + '방의 채팅기록이 삭제되었습니다!'
            );
        }
    }
    if (text == prefix + 'log' || text == prefix + '로그' || text == prefix + '채팅기록') {
        try {
            let room_path = 'sdcard/' + room + '.txt';
            chat.reply(
                '[!] 방: ' + room + enter +
                '채팅기록   ' + reduce + enter.repeat(2) + 
                FS.read(
                    room_path
                )
            );
        } catch (e) {

        }
    }
    if (text == prefix + 'logreset' || text == prefix + '로그리셋' || text == prefix + '기록삭제') {
        try {
            if (admin.includes(ID)) {
                let reset_path = 'sdcard/' + room + '.txt'
                FS.remove(
                    reset_path
                );
                chat.reply(
                    '[!] ' + room + '방의 채팅기록이 삭제되었습니다!'
                );
            }
        } catch (e) {
            chat.reply(
                '[!] ERROR   ' + reduce + enter.repeat(2) + 
                '➤  ' + e.message 
            );
        }
    }
    if (text.startsWith(prefix + 'sr') || text.startsWith(prefix + '검색')) {
        let words = text.substr(4);
        let search_word = words.replace(/ /g, '+');
        let search = encodeURI(search_word);
        let google = 'https://www.google.co.kr/search?q=' + search;
        let naver = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=' + search;
        let youtube = 'https://www.youtube.com/results?search_query=' + search;
        chat.reply(
            '[!] 검색어: ' + words + enter + 
            '검색 결과입니다!   ' + reduce + enter.repeat(2) + 
            '[!] Google' + enter + 
            '➤ ' + google + enter + 
            '[!] Naver' + enter + 
            '➤ ' + naver + enter +
            '[!] Youtube' + enter + 
            '➤ ' + youtube
        );
    }
    if (text.startsWith(prefix + 'tr') || text.startsWith(prefix + '번역')) {
        try {
            let sentence = text.substr(4);
            let papago = Api.papagoTranslate('ko', 'en', sentence);
            chat.reply(
                '[!] 번역결과' + enter + 
                '➤ ' + papago
            );
        } catch (e) {
            chat.reply(
                '[!] ERROR   ' + reduce + enter.repeat(2) + 
                '➤  ' + e.message 
            );
        }
    }
    if (text == prefix + 'covid' || text == prefix + '코로나') {
        let url1 = Jsoup.connect('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=코로나%20확진자').get();
        let url2 = Jsoup.connect('https://www.seoul.go.kr/coronaV/coronaStatus.do').get();
        let KRinfor = url1.select('div.main_tab_area > div > div > ul > li.info_01 > p').text();
        let KRdead = url1.select('div.main_tab_area > div > div > ul > li.info_04 > p').text(); 
        let KRinforplus = url1.select('div.main_tab_area > div > div > ul > li.info_02 > p').text();
        let KRdeadplus = url1.select('div.main_tab_area > div > div > ul > li.info_03 > p').text();
        let infor = url2.select('div > div.cell.cell1 > div.num.num1 > p.counter').text();
        let dead = url2.select('div > div.cell.cell6 > div > p.counter').text();
        let ext = url2.select('div > div.cell.cell5 > div.num.num8 > p.counter').text();
        let inforplus = url2.select('div > div.cell.cell1 > div.num.num10 > p.counter').text();
        let extplus = url2.select('div > div.cell.cell5 > div.num.num11 > p.counter').text();
        chat.reply(
            '[!] 코로나 현황' + enter.repeat(2) + 
            'Korea' + enter + 
            '━━━━━━━━━━━━━━━'+ enter + 
            '일일 확진자 [ ' + KRinfor + ' ]명' + enter + 
            '일일 사망자 [ ' + KRdead + ' ]명' + enter + 
            '재원 위중증 [ ' + KRinforplus + ' ]명' + enter + 
            '신규 입원자 [ ' + KRdeadplus + ' ]명' + enter + 
            '━━━━━━━━━━━━━━━'+ enter + 
            'Seoul' + enter + 
            '━━━━━━━━━━━━━━━' + enter + 
            '누적 확진자 [ ' + infor + ' ]명' + enter + 
            '누적 사망자 [ ' + dead + ' ]명' + enter + 
            '누적 격리해제자 [ ' + ext + ' ]명' + enter + 
            '어제 기준 [ ' + inforplus + ' ]명 추가 확진' + enter + 
            '어제 기준 [ ' + extplus + ' ]명 추가 격리해제' + enter + 
            '━━━━━━━━━━━━━━━'
        );
    }
    if (text.startsWith(prefix + 'word') || text.startsWith(prefix + '단어')) {
        try {
            let word = text.split(' ')[1];
            let url = org.jsoup.Jsoup.connect('https://dict.naver.com/search.dict?dicQuery=' + word).get();
            let diword = url.select('#content > div.kr_dic_section.search_result.dic_kr_entry > ul > li:nth-child(1) > p:nth-child(1) > a:nth-child(1) > span > strong').text();
            let info1_1 = url.select('#content > div.kr_dic_section.search_result.dic_kr_entry > ul > li:nth-child(1) > p:nth-child(2)').text();
            let info1_2 = url.select('#content > div.kr_dic_section.search_result.dic_kr_entry > ul > li:nth-child(2) > p:nth-child(2)').text();
            let info2_1 = url.select('#content > div.en_dic_section.search_result.dic_en_entry > dl > dd:nth-child(2)').text();
            let info2_2 = url.select('#content > div.en_dic_section.search_result.dic_en_entry > dl > dd:nth-child(4)').text();
            chat.reply(
                '[ ' + word + ' ] 국어사전 검색결과' + reduce + enter.repeat(3) +
                line + enter +
                '사전 단어:  ' + diword + enter +
                line + enter.repeat(2) + 
                '정보 (1):  ' + info1_1 + enter.repeat(2) +
                '정보 (2):  ' + info1_2 + enter.repeat(2) +
                line + enter +
                '영어사전 결과' + enter + 
                line +  enter.repeat(2) +
                '정보 (1):  ' + info2_1 + enter.repeat(2) +
                '정보 (2):  ' + info2_2 + enter.repeat(2) +
                line + enter +
                'URL:' + enter + 
                'https://dict.naver.com/search.nhn?query=' + word
              );
        } catch (e) {
            chat.reply(
                '[!] ERROR   ' + reduce + enter.repeat(2) + 
                '➤  ' + e.message 
            );
        }
    }
    if (text.startsWith(prefix = 'prefix') || text.startsWith(prefix + '접두사')) {
        try {
            if (admin.includes(ID)) {
                let prefix_path = 'sdcard/prefix.txt';
                let change = text.split(' ')[1].slice(0, 1);
                FS.write(
                    prefix_path,
                    change
                );
                chat.reply(
                    '[!] 접두사가 ' + enter + 
                    '➤ ' + change + ' 으로 바뀌었습니다!'
                );
            }
        } catch (e) {
            chat.reply(
                '[!] ERROR   ' + reduce + enter.repeat(2) + 
                '➤  ' + e.message 
            );
        }
    }
    if (text.startsWith(prefix + 'wt') || text.startsWith(prefix + '날씨')) {
        try {
            let area = text.substr(4);
            let url = Jsoup.connect('https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=' + area + '+날씨').get();
            let explain = url.select('#weatherColl > div.coll_cont > div > div.wrap_region.today > div.wrap_cont > div:nth-child(1) > div.cont_weather > div > div.info_temp > div > span > span.desc_temp > span').text();
            let temperature = url.select('#weatherColl > div.coll_cont > div > div.wrap_region.today > div.wrap_cont > div:nth-child(1) > div.cont_weather > div > div.info_temp > div > span > span.desc_temp > strong').text();
            let dust = url.select('#weatherColl > div.coll_cont > div > div.wrap_region.today > div.wrap_cont > div:nth-child(1) > div.cont_weather > div > div.info_another > a > dl > dd').text();
            let info = url.select('#weatherColl > div.coll_cont > div > div.wrap_region.today > div.wrap_cont > div:nth-child(1) > div.cont_weather > div > div.info_temp > p').text();
            chat.reply(
                '[!] ' + area + ' 날씨' + enter.repeat(1) + 
                line + enter + 
                '[!] 온도: ' + temperature + enter + 
                '[!] 미세먼지: ' + dust + enter + 
                '[!] 현제 상황: ' + explain + enter + 
                '[!] 비교' + enter + 
                '➤  ' + info + enter + 
                line
            );
        } catch (e) {
            chat.reply(
                '[!] ERROR   ' + reduce + enter.repeat(2) + 
                '➤  ' + e.message 
            );
        }
    }
    if (text.startsWith(prefix + 'op') || text.startsWith(prefix + '전적')) {
        try {
            let games = text.split(' ')[1];
            if (games == 'L' || games == '롤') {
                let nickname = text.substr(6);
                let lol =  Jsoup.connect('https://www.op.gg/summoners/kr/' + nickname).get();
                let in_name = lol.select('#__next > div.css-nvyacf.e1y28yym3 > div.profile > div.info > span').text();
                let rank = lol.select('#__next > div.css-nvyacf.e1y28yym3 > div.profile > div.info > div.rank > a').text();
                let profiles = lol.select('#__next > div.css-nvyacf.e1y28yym3 > div.face > div > img').attr('src');
                let info1 = lol.select('li:nth-child(2) > div > div.info').text();
                let info2 = lol.select('li:nth-child(3) > div > div.info').text();
                let info3 = lol.select('li:nth-child(4) > div > div.info').text();
                let kda1 = lol.select('li:nth-child(2) > div > div.kda').text();
                let kda2 = lol.select('li:nth-child(3) > div > div.kda').text();
                let kda3 = lol.select('li:nth-child(4) > div > div.kda').text();
                chat.reply(
                    '[!] USER_NAME: ' + in_name + enter + 
                    '[!] 롤 검색결과!   ' + reduce + enter.repeat(2) + 
                    '[!] 프로필 이미지 ' + enter + 
                    profiles + enter.repeat(2) + 
                    '[!] 래더 랭킹 ' + enter + 
                    rank + enter.repeat(2) + 
                    '[!] 승 / 패 전적 ' + enter + 
                    '_____________________________________________' + enter + 
                    '최근전적_1' + enter + 
                    info1 + enter.repeat(2) + 
                    '최근전적_2' + enter + 
                    info2 + enter.repeat(2) + 
                    '최근전적_3' + enter + 
                    info3 + enter + 
                    '_____________________________________________' + enter + 
                    '[!] 킬데스 전적 ' + enter + 
                    '최근킬뎃_1' + enter + 
                    kda1 + enter.repeat(2) + 
                    '최근킬뎃_2' + enter + 
                    kda2 + enter.repeat(2) + 
                    '최근킬뎃_3' + enter + 
                    kda3 + enter + 
                    '_____________________________________________'
                );
            }
            if (games == 'BG' || games == '배그') {
                let nickname = text.substr(7);
                let battle = Jsoup.connect('https://pubg.op.gg/user/' + nickname).get();
                let in_name = battle.select('#userNickname').text();
                let average = battle.select('div:nth-child(1) > div > div > div.user-content-layer__recent-matches > div > div > div:nth-child(2) > div > div').text();
                let profiles = battle.select('body > div.pubg.pubg--player > section > div:nth-child(2) > div > div > div > div > div.player-summary__desc-img > span > img').text();
                let info1 = battle.select('div:nth-child(1) > div > div > div.user-content-layer__matches-list > ul > li:nth-child(1) > div.matches-item__summary > div.matches-item__column.matches-item__column--rank > div > div.matches-item__ranking').text();
                let info2 = battle.select('div:nth-child(1) > div > div > div.user-content-layer__matches-list > ul > li:nth-child(2) > div.matches-item__summary > div.matches-item__column.matches-item__column--rank > div > div.matches-item__ranking').text();
                let info3 = battle.select('div:nth-child(1) > div > div > div.user-content-layer__matches-list > ul > li:nth-child(2) > div.matches-item__summary > div.matches-item__column.matches-item__column--rank > div > div.matches-item__ranking').text();
                let kda1 = battle.select('div:nth-child(1) > div > div > div.user-content-layer__matches-list > ul > li:nth-child(1) > div.matches-item__summary').text();
                let kda2 = battle.select('div:nth-child(1) > div > div > div.user-content-layer__matches-list > ul > li:nth-child(2) > div.matches-item__summary').text();
                let kda3 = battle.select('div:nth-child(1) > div > div > div.user-content-layer__matches-list > ul > li:nth-child(3) > div.matches-item__summary').text();
                chat.reply(
                    '[!] USER_NAME: ' + in_name + enter + 
                    '[!] 배틀그라운드 검색 결과!   ' + reduce + enter.repeat(2) + 
                    '[!] 프로필 이미지 ' + enter + 
                    profiles + enter.repeat(2) + 
                    '[!] 평균 랭크 ' + enter + 
                    average + enter.repeat(2) + 
                    '[!] 최근 3게의 게임 전적' + enter + 
                    '_____________________________________________' + enter + 
                    '전적_1' + enter.repeat(2) + 
                    '[!] 등수 ' + enter + 
                    info1 + enter + 
                    '[!] 정보' + enter + 
                    kda1 + enter.repeat(2) + 
                    '전적_2' + enter.repeat(2) + 
                    '[!] 등수 ' + enter + 
                    info2 + enter + 
                    '[!] 정보' + enter + 
                    kda2 + enter.repeat(2) +                     
                    '전적_3' + enter.repeat(2) + 
                    '[!] 등수 ' + enter + 
                    info3 + enter + 
                    '[!] 정보' + enter + 
                    kda3 + enter + 
                    '_____________________________________________'
                );
            }
        } catch (e) {
            chat.reply(
                '[!] 검색결과가 없습니다!'
            );
        }
    }
    if (text.includes('https://') || text.includes('.com') || text.includes('kro.kr')) {
        try {
            let sense_path = 'sdcard/link_sense.txt';
            if (FS.read(sense_path).includes('on')) {
                chat.reply(
                    '[!] 링크가 감지되었습니다!   ' + reduce + enter.repeat(2) + 
                    sender + '님이 보낸 메세지' + enter + 
                    '➤  ' + text
                );
            }
        } catch (e) {
            chat.reply(
                '[!] ERROR   ' + reduce + enter.repeat(2) + 
                '➤  ' + e.message 
            );
        }
    }
    if (text == prefix + 'sense on' || text == prefix + '감지시작') {
        try {
            if (admin.includes(ID)) {
                let sense_path = 'sdcard/link_sense.txt';
                if (FS.read(sense_path).includes('off')) {
                    FS.write(
                        sense_path,
                        'on'
                    );
                    chat.reply(
                        '[!] 링크감지가 시작되었습니다!   ' + reduce + enter.repeat(2) + 
                        '중지하려면 ' + prefix + '감지중지 를 보내주세요.'
                    );
                } else if (FS.read(sense_path).includes('on')) {
                    chat.reply(
                        '[!] 이미 링크감지가 켜져있습니다!'
                    );
                }
            }
        } catch (e) {
            chat.reply(
                '[!] ERROR   ' + reduce + enter.repeat(2) + 
                '➤  ' + e.message 
            );
        }
    }
    if (text == prefix + 'sense off' || text == prefix + '감지중지') {
        try {
            if (admin.includes(ID)) {
                let sense_path = 'sdcard/link_sense.txt';
                if (FS.read(sense_path).includes('on')) {
                    FS.write(
                        sense_path,
                        'off'
                    );
                    chat.reply(
                        '[!] 링크감지가 중지되었습니다!   ' + reduce + enter.repeat(2) + 
                        '시작하려면 ' + prefix + '감지시작 을 보내주세요.'
                    );
                } else if (FS.read(sense_path).includes('off')) {
                    chat.reply(
                        '[!] 이미 링크감지가 꺼져있습니다!'
                    );
                }
            }
        } catch (e) {
            chat.reply(
                '[!] ERROR   ' + reduce + enter.repeat(2) + 
                '➤  ' + e.message 
            );
        }
    }
    if (text == prefix + 'restart' || text == prefix + '재시작') {
        try {
            if (admin.includes(ID)) {
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
                Api.reload();
                chat.reply(
                    '[!] RESTART! O BOT!' + reduce + enter.repeat(2) + 
                    'This bot was made by ODOONG' + enter + 
                    '기본 접두사는 . 입니다'
                );
            }
        } catch (e) {
            chat.reply(
                '[!] ERROR   ' + reduce + enter.repeat(2) + 
                '➤  ' + e.message 
            );
        }
    }
    if (text == prefix + 'adminR' || text == prefix + '어드민리셋') {
        try{
            if (admin.includes(ID)) {
                let adminR_path = 'sdcard/admin.txt';
                FS.write(
                    adminR_path,
                    none
                );
                chat.reply(
                    '[!] 관리자 목록이 초기화 되었습니다!' + enter + 
                    prefix + '인증 으로 관리자가 되어보세요!'
                );
            }
        } catch (e) {
            chat.reply(
                '[!] ERROR   ' + reduce + enter.repeat(2) + 
                '➤  ' + e.message 
            );
        }
    }
    if (text == prefix + 'random' || text == prefix + '뽑기') {
        try {
            let words = ['당첨', '꽝'];
            let random = words[Math.floor(Math.random() * words.length)];
            chat.reply(
                '[!] ' + sender + '님의 뽑기 결과!   ' + reduce + enter.repeat(2) + 
                '➤  ' + random
            );
        } catch (e) {
            chat.reply(
                '[!] ERROR   ' + reduce + enter.repeat(2) + 
                '➤  ' + e.message 
            );
        }
    }
    if (text) {
        try {
            let saveID_path = 'sdcard/user_id/@' + sender + '.txt';
            if ((FS.read(saveID_path) ? true : false) == false) {
                FS.write(
                    saveID_path,
                    '[!] User Information' + enter + 
                    '[!] Name: ' + sender + enter + 
                    '[!] ID: ' + ID
                );
            }
        } catch (e) {
            Api.makeNoti(
                '[!] 유저 아이디',
                '[!] 수집중 문제가 발생하였습니다!'
            );
        }
    }
    if (text.startsWith(prefix + 'ui') || text.startsWith(prefix + '유저')) {
        try {
            let search_user = text.substr(4);
            let user_path = 'sdcard/user_id/' + search_user + '.txt';
            if ((FS.read(user_path) ? true : false) == true) {
                chat.reply(
                    FS.read(user_path)
                );
            } else {
                chat.reply(
                    '[!] 해당 유저는 찾을 수 없습니다!' + enter + 
                    '@유저 형태로 검색해주세요!'
                );
            }
        } catch (e) {
            chat.reply(
                '[!] ERROR   ' + reduce + enter.repeat(2) + 
                '➤  ' + e.message 
            );
        }
    }
    if (text == 'Oprefix' || text == 'O접두사') {
        try {
            chat.reply(
                '[!] 현재 접두사' + enter + 
                '➤  ' + prefix + ' 입니다!'
            );
        } catch (e) {
            chat.reply(
                '[!] ERROR   ' + reduce + enter.repeat(2) + 
                '➤  ' + e.message 
            );
        }
    }
    if (text == prefix + 'help' || text == prefix + '도움말' || text == prefix + '명령어') {
        chat.reply(
            'O BOT 명령어 목록   ' + reduce + enter.repeat(2) + 
            '접두사는 [ ' + prefix + ' ] 입니다.' + enter + 
            line + enter + 
            prefix + '인증' + enter + 
            '인증번호를 보냅니다!' + enter + 
            '인증번호를 받으면 채팅방에 인증번호를 보내세요!' + enter.repeat(2) + 
            '관리자는 ' + prefix + '키 @(유저) 형태로 그 유저의 인증번호를 볼 수 있습니다!' + enter.repeat(2) + 
            prefix + '임명 @(임명할 유저) 형식으로 관리자를 임명 할 수 있습니다! (관리자만 가능)' + enter.repeat(2) + 
            prefix + '어드민리셋 으로 관리자 목록을 초기화합니다!' + enter.repeat(2) + 
            prefix + '정보' + enter + 
            '자신의 정보를 봅니다. (권한 확인, 이름과 아이디 확인)' + enter.repeat(2) + 
            prefix + '유저' + enter + 
            prefix + '유저 @(검색할 유저) 형식으로 보내면 그 사람의 정보를 보내줍니다!' + enter.repeat(2) +
            prefix + '관리자목록' + enter + 
            '관리자들의 이름, 아이디를 보내줍니다!' + enter.repeat(2) +  
            prefix + '로그 or ' + prefix + '채팅기록' + enter + 
            '위에 삭제된 메세지가 궁금하시다면 ' + prefix + '로그 아니면 ' + prefix + '채팅기록 을 보내주세요!' + enter.repeat(2) + 
            '채팅기록을 삭제하고 싶다면 ' + prefix + '로그리셋 or ' + prefix + '기록삭제 를 보내주세요!' + enter.repeat(2) + 
            prefix + '검색' + enter + 
            prefix + '검색 (검색할것) 형태로 보내주세요 그 검색결과를 보내줍니다!' + enter.repeat(2) + 
            prefix + '전적' + enter + 
            prefix + '전적 (롤 or 배그) (닉네임) 형식으로 그 사람의 전적을 보내줍니다!' + enter.repeat(2) + 
            prefix + '번역' + enter +
            prefix + '번역 (번역할 글자) 번역 결과를 보내줍니다!' + enter.repeat(2) + 
            prefix + '코로나' + enter + 
            '대한민국 코로나 현황, 서울 코로나 현황을 보내줍니다!' + enter.repeat(2) + 
            prefix + '단어' + enter + 
            prefix + '단어 (검색할 단어) 국어사전 단어를 보내줍니다!' + enter.repeat(2) + 
            prefix + '접두사' + enter + 
            prefix + '접두사 (설정할접두사) 로 접두사를 바꿉니다 기본 접두사는 . 입니다!' + enter.repeat(2) + 
            prefix + '날씨' + enter +
            prefix + '날씨 (지역) 로 그 지역의 날씨를 확인합니다!' + enter.repeat(2) + 
            prefix + '감지시작 or ' + prefix + '감지중지' + enter + 
            '링크를 감지 on off 를 설정합니다. (홍보성 링크 감지)' + enter.repeat(2) + 
            prefix + '뽑기' + enter + 
            '당첨, 꽝 둘 중 하나의 결과를 뽑습니다!' + enter +
            line + enter + 
            'MADE BY ODOONG'
        );
    }
}
