const normalText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const fontStyles = [
    { name: "Math Bold", chars: "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙" },
    { name: "Math Italic", chars: "𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍" },
    { name: "Math Bold Italic", chars: "𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁" },
    { name: "Monospace", chars: "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉" },
    { name: "Gothic / Fraktur", chars: "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ" },
    { name: "Bold Gothic", chars: "𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅" },
    { name: "Double Struck", chars: "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ" },
    { name: "Cursive", chars: "𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵" },
    { name: "Bold Cursive", chars: "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩" },
    { name: "Small Caps", chars: "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ" },
    { name: "Circled", chars: "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ" },
    { name: "Parenthesized", chars: "⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵🄐🄑🄒🄓🄔🄕🄖🄗🄘🄙🄚🄛🄜🄝🄞🄟🄠🄡🄢🄣🄤🄥🄦🄧🄨🄩" },
    { name: "Squared", chars: "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉" },
    { name: "Dark Squared", chars: "🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉" },
    { name: "Fullwidth", chars: "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ" },
    { name: "Sci-Fi / Alien", chars: "ΛßᄃDΣFGΉIJKᄂMПӨPQЯƧƬЦVЩXYZΛßᄃDΣFGΉIJKᄂMПӨPQЯƧƬЦVЩXYZ" },
    { name: "Medieval", chars: "𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅" },
    { name: "Sans-Serif Bold", chars: "𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭" },
    { name: "Sans-Serif Italic", chars: "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡" },
    { name: "Sans-Serif Bold Italic", chars: "𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕" },
    { name: "Superscript / Tiny", chars: "ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻ" },
    { name: "Dark Circled", chars: "🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩" },
    { name: "Regional Blocks", chars: "🇦🇧🇨🇩🇪🇫🇬🇭🇮🇯🇰🇱🇲🇳🇴🇵🇶🇷🇸🇹🇺🇻🇼🇽🇾🇿🇦🇧🇨🇩🇪🇫🇬🇭🇮🇯🇰🇱🇲🇳🇴🇵🇶🇷🇸🇹🇺🇻🇼🇽🇾🇿" },
    { name: "Asian Aesthetic", chars: "卂乃匚刀乇下Ꮆ卄丨丁长ㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂丫乙卂乃匚刀乇下Ꮆ卄丨丁长ㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂丫乙" },
    { name: "Greek Vibes", chars: "αвc∂єƒgнιנкℓмησρqяѕтυνωχуzΑΒCDEƑGHIJKLMΝΟΡQRSΤUVMXYZ" },
    { name: "Cyrillic Vibes", chars: "аъсdэfghїјкlмиорqяѕтцѵшхуzДБСDЄFGНІЈКLМИОРQЯЅТЦVШХУZ" },
    { name: "Currency", chars: "₳฿₵₯€₣₲ⱧłJ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾҰⱫ₳฿₵₯€₣₲ⱧłJ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾҰⱫ" },
    { name: "Demonic / Gothic", chars: "ǟɮƈɖɛʄɢɦɨʝӄʟʍռօքզʀֆȶʊʋաӼʏʐǟɮƈɖɛʄɢɦɨʝӄʟʍռօքզʀֆȶʊʋաӼʏʐ" },
    { name: "Squiggles", chars: "ąҍçժҽƒցհìʝҟʆʍղօքզɾʂէմѵահ×վՀȺβ↻ᎠƐƑƓǶįلҠꝈⱮហටφＱའՏͲԱỼచჯӋɀ" },
    { name: "Upside Down", chars: "ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz∀qƆpƎℲפHIſʞ˥WNOԀQᴚS⊥∩ΛMX⅄Z" },
    { name: "Math Sans-Serif", chars: "𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹" },
    { name: "Super Blocky", chars: "ᗩᗷᑕᗪᕮᖴGᕼIᒍKᒪᗰᑎOᑭQᖇᔕTᑌᐯᗯ᙭YᘔᗩᗷᑕᗪᕮᖴGᕼIᒍKᒪᗰᑎOᑭQᖇᔕTᑌᐯᗯ᙭Yᘔ" },
    { name: "Thai Wavy", chars: "ค๒ς๔єfgђเןкl๓ภ๏קợгรtยשฬאץzค๒ς๔ЄFGHIJКLMNOPQЯSТUVWХYZ" },
    { name: "Slash Through", chars: "ȺƀđɇfǥħiɉkłmnøpqɍsŧuvwxyƶȺɃȻĐɆFǤĦIɈKŁMNØPQɌSŦUVWXYƵ" },
    { name: "Dotted Top", chars: "ȧḃċḋėḟġḣïjklṁnȯṗqrsṫuvwẋẏżȦḂĊḊĖḞĠḢÏJKLṀNȮṖQRSṪUVWẊẎŻ" },
    { name: "Dotted Bottom", chars: "ạḅcḍẹfghịjklṃnọpqṛṣṭụṿwxyẓẠḄCḌẸFGHỊJKLṂNỌPQṚṢṬỤṾWXYẒ" },
    { name: "Braille Secret", chars: "⠁⠃⠉⠙⠑⠋⠛⠓⠊⠚⠅⠇⠍⠝⠕⠏⠟⠗⠎⠞⠥⠧⠺⠭⠽⠵⠁⠃⠉⠙⠑⠋⠛⠓⠊⠚⠅⠇⠍⠝⠕⠏⠟⠗⠎⠞⠥⠧⠺⠭⠽⠵" },
    { name: "Pirate Hooks", chars: "ąƀƈđęƒɠɦįĵƙłɱŋǫpqɾşŧųvωҳƴżĄƁƇĐĘƑƓĦĮĴƘŁⱮŊǪPQɌŞŦŲVΩҲƳŻ" },
    { name: "Elven Macrons", chars: "āƀčđēfḡħījklmñōpqršŧūvwxȳžĀɃČĐĒFḠĦĪJKLMÑŌPQRŠŦŪVWXȲŽ" },
    { name: "Subscript / Base", chars: "ₐbcdₑf₉ₕᵢⱼₖₗₘₙₒₚqᵣₛₜᵤᵥwₓyzₐBCDₑF₉ₕᵢⱼₖₗₘₙₒₚQᵣₛₜᵤᵥWₓYZ" },
    { name: "Ancient Runes", chars: "ᚫᛒᚳᛞᛖᚠᚷᚻᛁᛃᚴᛚᛗᚾᚩᛈᛩᚱᛋᛏᚢᚡᚹᛉᚣᛉᚫᛒᚳᛞᛖᚠᚷᚻᛁᛃᚴᛚᛗᚾᚩᛈᛩᚱᛋᛏᚢᚡᚹᛉᚣᛉ" },
    { name: "Reversed Mirror", chars: "AdɔbɘꟻgHijklmnoqpᴙꙅTuvwxyzAᗺƆᗡƎꟻGHIJK⅃MИOꟼỌЯƧTUVWXYZ" },
    { name: "Hacker / Leetspeak", chars: "4bcd3f9h1jklmn0pqr57uvwxy24BCD3F9H1JKLMN0PQR57UVWXY2" },
    { name: "Viking Heavy", chars: "åßçðê£ghïjklmñöpqr§†uvw×¥zÅßÇÐÊ£GHÏJKLMÑÖPQR§†UVW×¥Z" },
    { name: "Geometric", chars: "ΔbcdΣfghijklmΠopqrstuvwXyΖΔBCDΣFGHIJKLMΠOPQRSTUVWXΥΖ" },
    { name: "Alien Abstract", chars: "ꭺꮪꮯꭰꭼꮁꮐꮋꭵꮻꮶꮮꮇꮑꮎꮲꮗꭱꮥꭲꮼꮩꮃꭴꮍꮓꭺꮪꮯꭰꭼꮁꮐꮋꭵꮻꮶꮮꮇꮑꮎꮲꮗꭱꮥꭲꮼꮩꮃꭴꮍꮓ" },
    { name: "Russian Aesthetic", chars: "авсdеfgнίјкlмиорqяѕтцvшхуzАВСDЕFGНΊЈКLМИОРQЯЅТЦVШХУZ" },
    { name: "Curvy Horns", chars: "ăbcđĕfghĭjklmnŏpqrsťŭvwxyzĂBCĐĔFGHĬJKLMNŎPQRSŤŬVWXYZ" },
    { name: "Vampiric Sharp", chars: "ǟɮƈɖɛʄɢɦɨʝӄʟʍռօքզʀֆȶʊʋաӼʏʐǞƁƇƉƐƑGHƖJKLMƝOPQRSƬUVWXYZ" },
    { name: "Casual Handwritten", chars: "αвcdefghιjкlмnopqrѕтυvwxyzABCDEFGHΙJKLΜNOPQRSTUνWXYZ" },
    { name: "Acute Accents", chars: "ábćdéfghíjklmnópqrstúvwxýzáßćdéfghíjklmnópqrstúvwxýz" },
    { name: "Grave Accents", chars: "àbèdèfghìjklmnòpqrstùvwxỳzÀBÈDÈFGHÌJKLMNÒPQRSTÙVWXỲZ" },
    { name: "Circumflex", chars: "âbĉdêfghîĵklmnôpqrstûvwxŷzÂBĈDÊFGHÎĴKLMNÔPQRSTÛVWXŶZ" },
    { name: "Tilde Swag", chars: "ãbçdẽfghĩjklmñõpqrstũvwxỹzÃBÇDẼFGHĨJKLMÑÕPQRSTŨVWXỸZ" },
    { name: "Umlaut / Metal", chars: "äbëdëfghïjklmnöpqrstüvwxÿzÄBËDËFGHÏJKLMNÖPQRSTÜVWXŸZ" },
    { name: "Macron Lines", chars: "ābēdēfghījkļmnōpqrstūvwxȳzĀBĒDĒFGHĪJKĻMNŌPQRSTŪVWXȲZ" },
    { name: "Breve Curves", chars: "ăbĕdĕfghĭjklmnŏpqrstŭvwxўzĂBĔDĔFGHĬJKLMNŎPQRSTŬVWXЎZ" },
    { name: "Ring Above", chars: "åbcdéfghijlmnópqrstůvwxyzÅBCDÉFGHIJLMNÓPQRSTŮVWXYZ" },
    { name: "Stroke / Slash", chars: "øbødøfghijłmnøpqrstøvwxyzØBØDØFGHIJŁMNØPQRSTØVWXYZ" },
    { name: "Cherokee Vibe", chars: "ꭺᏸꮯꮷꭼꮓꮆꮋꭵꮻꮶꮮꮇꮑꮎꮲꮗꭱꮥꭲꮼꮩꮃꭴꮍꮓꭺᏸꮯꮷꭼꮓꮆꮋꭵꮻꮶꮮꮇꮑꮎꮲꮗꭱꮥꭲꮼꮩꮃꭴꮍꮓ" },
    { name: "Coptic Ancient", chars: "ⲁⲃⲥⲇⲉⲓⲅϩⲓⲋⲕⲗⲙⲛⲟⲣⲫⲣⲥⲧⲩⲩⲱⲭⲯⲍⲀⲂⲤⲆⲈⲒⲄⲎⲒⲊⲔⲖⲘⲚⲞⲢⲪⲢⲤⲦⲨⲨⲰⲬPsiⲌ" },
    { name: "Armenian Mix", chars: "աբcdեfghիյklmնoրqrstuvwxyzԱԲCDԵFGHԻՅKLMՆOՐQRSTUVWԽYZ" },
    { name: "Greek Lower", chars: "αβγδεζηθικλμνξοπρστυφχψωαβγδεζηθικλμνξοπρστυφχψω" },
    { name: "Cyrillic Heavy", chars: "абцдєфгхийклмнопягстувшхузабцдєфгхийклмнопягстувшхуз" },
    { name: "Hebrew Lookalike", chars: "ค๒ς๔єŦﻮђเןкɭ๓ภ๏קợгรՇยשฬאץչค๒ς๔єŦﻮђเןкɭ๓ภ๏קợгรՇยשฬאץչ" },
    { name: "Math Sans Bold", chars: "𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭" },
    { name: "Math Sans Italic", chars: "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡" },
    { name: "Math Sans B-Italic", chars: "𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕" },
    { name: "Math Fraktur Bold", chars: "𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅" },
    { name: "White Parenthesized", chars: "⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵🄐🄑🄒🄓🄔🄕🄖🄗🄘🄙🄚🄛🄜🄝🄞🄟🄠🄡🄢🄣🄤🄥🄦🄧🄨🄩" },
    { name: "Wavy / Squiggle", chars: "ค๒ς๔єŦﻮђเןкɭ๓ภ๏קợгรՇยשฬאץչค๒ς๔єŦﻮђเןкɭ๓ภ๏קợгรՇยשฬאץչ" },
    { name: "Boxy / Edgy", chars: "卂乃匚刀乇下Ꮆ卄丨丁长ㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂丫乙卂乃匚刀乇下Ꮆ卄丨丁长ㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂丫乙" },
    { name: "Inverted Caps", chars: "aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZ" },
    { name: "Alternating Caps", chars: "AbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYz" },
    { name: "Spaced Out", chars: "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ" },
    { name: "Microscopic", chars: "ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻ" },
    { name: "Hooks & Tails", chars: "ąɓƈđęƒɠɧįĵƙłɱŋǫpqřşŧųvŵҳƴżĄƁƇĐĘƑƓĦĮĴƘŁⱮŊǪPQŘŞŦŲVŴҲƳŻ" },
    { name: "Old English", chars: "aƀcđefgħijkłmnøpqrsŧuvwxyzAɃCĐEFGĦIJKŁMNØPQRSŦUVWXYZ" },
    { name: "Satanic", chars: "ǟɮƈɖɛʄɢɦɨʝӄʟʍռօքզʀֆȶʊʋաӼʏʐǞƁƇƉƐƑGHƖJKLMƝOPQRSƬUVWXYZ" },
    { name: "Tall & Skinny", chars: "ꭺᏸꮯꮷꭼꮓꮆꮋꭵꮻꮶꮮꮇꮑꮎꮲꮗꭱꮥꭲꮼꮩꮃꭴꮍꮓꭺᏸꮯꮷꭼꮓꮆꮋꭵꮻꮶꮮꮇꮑꮎꮲꮗꭱꮥꭲꮼꮩꮃꭴꮍꮓ" },
    { name: "Viking Runes", chars: "ᛅᛒᚴᛏᛂᚠᚵᚼᛁᛃᚴᛚᛘᚾᚮᛕᛩᚱᛋᛐᚢᚡᚥᛪᚤᛎᛅᛒᚴᛏᛂᚠᚵᚼᛁᛃᚴᛚᛘᚾᚮᛕᛩᚱᛋᛐᚢᚡᚥᛪᚤᛎ" },
    { name: "Phonetic Ext", chars: "æɓçðɛƒɠɦɪʝƙʆɱŋɔpqɾʂʈʊʋʍxyʐÆƁÇÐƐƑƓĦIꞲƘꝈⱮŊƆPQƦꟅƬƱƲⱮXYꙄ" },
    { name: "Double Bubbles", chars: "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩" },
    { name: "Squares & Blocks", chars: "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉" },
    { name: "Tiny Capitals", chars: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘꞯʀꜱᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘꞯʀꜱᴛᴜᴠᴡxʏᴢ" },
    { name: "Swirly", chars: "ąҍçժҽƒցհìʝҟʆʍղօքզɾʂէմѵահ×վՀĄƁÇԺҼƑGHIJKLMNOPQRSŤUVWXYZ" },
    { name: "Blocky 2", chars: "ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭQᖇSTᑌᐯᗯ᙭YᘔᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭQᖇSTᑌᐯᗯ᙭Yᘔ" },
    { name: "Tails Below", chars: "ąbçdęfghįjklmnǫpqrştųvwxyzĄBÇDĘFGHĮJKLMNǪPQRŞTŲVWXYZ" },
    { name: "Strikethrough Safe", chars: "a̶b̶c̶d̶e̶f̶g̶h̶i̶j̶k̶l̶m̶n̶o̶p̶q̶r̶s̶t̶u̶v̶w̶x̶y̶z̶A̶B̶C̶D̶E̶F̶G̶H̶I̶J̶K̶L̶M̶N̶O̶P̶Q̶R̶S̶T̶U̶V̶W̶X̶Y̶Z̶" }, 
    { name: "Underlined Safe", chars: "a̲b̲c̲d̲e̲f̲g̲h̲i̲j̲k̲l̲m̲n̲o̲p̲q̲r̲s̲t̲u̲v̲w̲x̲y̲z̲A̲B̲C̲D̲E̲F̲G̲H̲I̲J̲K̲L̲M̲N̲O̲P̲Q̲R̲S̲T̲U̲V̲W̲X̲Y̲Z̲" },
    { name: "Double Underline", chars: "a̳b̳c̳d̳e̳f̳g̳h̳i̳j̳k̳l̳m̳n̳o̳p̳q̳r̳s̳t̳u̳v̳w̳x̳y̳z̳A̳B̳C̳D̳E̳F̳G̳H̳I̳J̳K̳L̳M̳N̳O̳P̳Q̳R̳S̳T̳U̳V̳W̳X̳Y̳Z̳" },
    { name: "Overlined Safe", chars: "a̅b̅c̅d̅e̅f̅g̅h̅i̅j̅k̅l̅m̅n̅o̅p̅q̅r̅s̅t̅u̅v̅w̅x̅y̅z̅A̅B̅C̅D̅E̅F̅G̅H̅I̅J̅K̅L̅M̅N̅O̅P̅Q̅R̅S̅T̅U̅V̅W̅X̅Y̅Z̅" },
    { name: "Crosshatch / Jail", chars: "a͓b͓c͓d͓e͓f͓g͓h͓i͓j͓k͓l͓m͓n͓o͓p͓q͓r͓s͓t͓u͓v͓w͓x͓y͓z͓A͓B͓C͓D͓E͓F͓G͓H͓I͓J͓K͓L͓M͓N͓O͓P͓Q͓R͓S͓T͓U͓V͓W͓X͓Y͓Z͓" },
    { name: "Arrow Below", chars: "a͎b͎c͎d͎e͎f͎g͎h͎i͎j͎k͎l͎m͎n͎o͎p͎q͎r͎s͎t͎u͎v͎w͎x͎y͎z͎A͎B͎C͎D͎E͎F͎G͎H͎I͎J͎K͎L͎M͎N͎O͎P͎Q͎R͎S͎T͎U͎V͎W͎X͎Y͎Z͎" },
    { name: "Dots Below", chars: "a̤b̤c̤d̤e̤f̤g̤h̤i̤j̤k̤l̤m̤n̤o̤p̤q̤r̤s̤t̤ṳv̤w̤x̤y̤z̤A̤B̤C̤D̤E̤F̤G̤H̤I̤J̤K̤L̤M̤N̤O̤P̤Q̤R̤S̤T̤ṲV̤W̤X̤Y̤Z̤" },
    { name: "Tilde Below", chars: "a̰b̰c̰d̰ḛf̰g̰h̰ḭj̰k̰l̰m̰n̰o̰p̰q̰r̰s̰t̰ṵv̰w̰x̰y̰z̰A̰B̰C̰D̰ḚF̰G̰H̰ḬJ̰K̰L̰M̰N̰O̰P̰Q̰R̰S̰T̰ṴV̰W̰X̰Y̰Z̰" },
    { name: "Sunburst", chars: "a҉b҉c҉d҉e҉f҉g҉h҉i҉j҉k҉l҉m҉n҉o҉p҉q҉r҉s҉t҉u҉v҉w҉x҉y҉z҉A҉B҉C҉D҉E҉F҉G҉H҉I҉J҉K҉L҉M҉N҉O҉P҉Q҉R҉S҉T҉U҉V҉W҉X҉Y҉Z҉" },
    { name: "Glitch Mild", chars: "a̷b̷c̷d̷e̷f̷g̷h̷i̷j̷k̷l̷m̷n̷o̷p̷q̷r̷s̷t̷u̷v̷w̷x̷y̷z̷A̷B̷C̷D̷E̷F̷G̷H̷I̷J̷K̷L̷M̷N̷O̷P̷Q̷R̷S̷T̷U̷V̷W̷X̷Y̷Z̷" },
    { name: "Glitch Heavy", chars: "a̴b̴c̴d̴e̴f̴g̴h̴i̴j̴k̴l̴m̴n̴o̴p̴q̴r̴s̴t̴u̴v̴w̴x̴y̴z̴A̴B̴C̴D̴E̴F̴G̴H̴I̴J̴K̴L̴M̴N̴O̴P̴Q̴R̴S̴T̴U̴V̴W̴X̴Y̴Z̴" },
    { name: "Zalgo Lite", chars: "a̾b̾c̾d̾e̾f̾g̾h̾i̾j̾k̾l̾m̾n̾o̾p̾q̾r̾s̾t̾u̾v̾w̾x̾y̾z̾A̾B̾C̾D̾E̾F̾G̾H̾I̾J̾K̾L̾M̾N̾O̾P̾Q̾R̾S̾T̾U̾V̾W̾X̾Y̾Z̾" }
];

const decorations = [
    { name: "None", left: "", right: "" },
    { name: "Classic Wings", left: "꧁༺ ", right: " ༻꧂" },
    { name: "Butterfly", left: "Ƹ̵̡Ӝ̵̨̄Ʒ ", right: " Ƹ̵̡Ӝ̵̨̄Ʒ" },
    { name: "Fairy Wings", left: "ʚ ", right: " ɞ" },
    { name: "Tiny Swirls", left: "༄ ", right: " ༄" },
    { name: "Wind", left: "彡 ", right: " 彡" },
    { name: "Crescent Swirl", left: "╰☆╮ ", right: " ╭☆╯" },
    { name: "Majestic", left: "♔ ", right: " ♔" },
    { name: "Royal Crown", left: "👑 ", right: " 👑" },
    { name: "Tribal", left: "❖ ", right: " ❖" },
    { name: "Spades", left: "♤ ", right: " ♤" },
    { name: "Thick Brackets", left: "【 ", right: " 】" },
    { name: "Hollow Brackets", left: "〖 ", right: " 〗" },
    { name: "Double Arrows", left: "《 ", right: " 》" },
    { name: "Sharp Brackets", left: "「 ", right: " 」" },
    { name: "White Brackets", left: "『 ", right: " 』" },
    { name: "Math Brackets", left: "⦗ ", right: " ⦘" },
    { name: "Target Brackets", left: "⌔ ", right: " ⌔" },
    { name: "Crosshair", left: "⊕ ", right: " ⊕" },
    { name: "Barcode", left: "║▌║█║▌│║▌ ", right: " ║▌║█║▌│║▌" },
    { name: "Dotted Lines", left: "┊┊┊ ", right: " ┊┊┊" },
    { name: "Crossed Swords", left: "⚔ ", right: " ⚔" },
    { name: "Sniper", left: "︻╦╤─ ", right: " ─╤╦︻" },
    { name: "Pistol", left: "⌐╦╦═─ ", right: " ─═╦╦¬" },
    { name: "Skull & Crossbones", left: "☠ ", right: " ☠" },
    { name: "Biohazard", left: "☣ ", right: " ☣" },
    { name: "Radioactive", left: "☢ ", right: " ☢" },
    { name: "Iron Cross", left: "✠ ", right: " ✠" },
    { name: "Scythe", left: "⸸ ", right: " ⸸" },
    { name: "Axe", left: "🪓 ", right: " 🪓" },
    { name: "Shield", left: "🛡 ", right: " 🛡" },
    { name: "Fire", left: "🔥 ", right: " 🔥" },
    { name: "Lightning", left: "⚡ ", right: " ⚡" },
    { name: "Snowflake", left: "❄ ", right: " ❄" },
    { name: "Dark Star", left: "★ ", right: " ★" },
    { name: "Hollow Star", left: "☆ ", right: " ☆" },
    { name: "Shooting Star", left: "🌠 ", right: " 🌠" },
    { name: "Sparkles", left: "✨ ", right: " ✨" },
    { name: "Cherry Blossom", left: "✿ ", right: " ✿" },
    { name: "Lotus", left: "❁ ", right: " ❁" },
    { name: "Clover", left: "☘ ", right: " ☘" },
    { name: "Audio Bars", left: "ılı.lıllılı. ", right: " .ılıllılı.ılı" },
    { name: "Headphones", left: "🎧 ", right: " 🎧" },
    { name: "Music Notes", left: "♫♪ ", right: " ♪♫" },
    { name: "Treble Clef", left: "𝄞 ", right: " 𝄞" },
    { name: "Playback", left: "▶ ", right: " ◀" },
    { name: "Record", left: "⏺ ", right: " ⏺" },
    { name: "Equalizer", left: "⑆ ", right: " ⑆" },
    { name: "Vinyl", left: "💿 ", right: " 💿" },
    { name: "Mic", left: "🎤 ", right: " 🎤" },
    { name: "Sharp Tone", left: "♯ ", right: " ♯" },
    { name: "TTV Tag", left: "TTV - ", right: "" },
    { name: "FaZe Tag", left: "FaZe ", right: "" },
    { name: "OpTic Tag", left: "OpTic ", right: "" },
    { name: "NRG Tag", left: "NRG ", right: "" },
    { name: "TSM Tag", left: "TSM ", right: "" },
    { name: "NotGamer", left: "Not", right: "" },
    { name: "ImGamer", left: "Im", right: "" },
    { name: "xX Gamer Xx", left: "xX ", right: " Xx" },
    { name: "OG Tag", left: "OG | ", right: "" },
    { name: "Pro Tag", left: "[PRO] ", right: "" },
    { name: "Bear Face", left: "ʕ•ᴥ•ʔ ", right: "" },
    { name: "Cat Face", left: "(=^･ｪ･^=) ", right: "" },
    { name: "Blush Face", left: "(✿◠‿◠) ", right: "" },
    { name: "Sparkle Heart", left: "💖 ", right: " 💖" },
    { name: "Black Heart", left: "♥ ", right: " ♥" },
    { name: "Hollow Heart", left: "♡ ", right: " ♡" },
    { name: "Ribbon", left: "🎀 ", right: " 🎀" },
    { name: "Angel Halo", left: "👼 ", right: " 👼" },
    { name: "Paw Prints", left: "🐾 ", right: " 🐾" },
    { name: "Kiss", left: "💋 ", right: " 💋" },
    { name: "Loading...", left: "████████ ", right: " 100%" },
    { name: "Error", left: "[ERROR] ", right: "" },
    { name: "System", left: "sys. ", right: " .exe" },
    { name: "Warning", left: "⚠ ", right: " ⚠" },
    { name: "Hypnotic", left: "@@ ", right: " @@" },
    { name: "Eyes", left: "👁 ", right: " 👁" },
    { name: "Alien", left: "👽 ", right: " 👽" },
    { name: "Ghost", left: "👻 ", right: " 👻" },
    { name: "Demon", left: "👺 ", right: " 👺" },
    { name: "Matrix", left: "010 ", right: " 010" },
    { name: "Diamonds", left: "♦ ", right: " ♦" },
    { name: "Black Squares", left: "■ ", right: " ■" },
    { name: "Hollow Squares", left: "□ ", right: " □" },
    { name: "Triangles", left: "▼ ", right: " ▼" },
    { name: "Circles", left: "● ", right: " ●" },
    { name: "Hollow Circles", left: "○ ", right: " ○" },
    { name: "Hexagon", left: "⬡ ", right: " ⬡" },
    { name: "Rhombus", left: "❖ ", right: " ❖" },
    { name: "Checkerboard", left: "░ ", right: " ░" },
    { name: "Grid", left: "╬ ", right: " ╬" },
    { name: "Moon Phase", left: "☾ ", right: " ☽" },
    { name: "Sun", left: "☀ ", right: " ☀" },
    { name: "Cloud", left: "☁ ", right: " ☁" },
    { name: "Umbrella", left: "☂ ", right: " ☂" },
    { name: "Anchor", left: "⚓ ", right: " ⚓" },
    { name: "Scales", left: "⚖ ", right: " ⚖" },
    { name: "Swords Crossed", left: "⚔️ ", right: " ⚔️" },
    { name: "Fleur-de-lis", left: "⚜ ", right: " ⚜" },
    { name: "Infinity", left: "∞ ", right: " ∞" },
    { name: "Yin Yang", left: "☯ ", right: " ☯" }
];

// ==========================================
// 2. TAB NAVIGATION LOGIC
// ==========================================
const tabFontsBtn = document.getElementById('tab-fonts-btn');
const tabStealthBtn = document.getElementById('tab-stealth-btn');
const fontSection = document.getElementById('font-section');
const stealthSection = document.getElementById('stealth-section');

function switchTab(showSection, hideSection, activeBtn, inactiveBtn) {
    activeBtn.classList.add('active');
    inactiveBtn.classList.remove('active');
    
    hideSection.classList.remove('active-section');
    hideSection.classList.add('hidden-section');
    
    showSection.classList.remove('hidden-section');
    showSection.classList.add('active-section');
}

tabFontsBtn.addEventListener('click', () => switchTab(fontSection, stealthSection, tabFontsBtn, tabStealthBtn));
tabStealthBtn.addEventListener('click', () => switchTab(stealthSection, fontSection, tabStealthBtn, tabFontsBtn));


// ==========================================
// 3. FONT GENERATOR LOGIC
// ==========================================
const textInput = document.getElementById('textInput');
const resultsContainer = document.getElementById('resultsContainer');
const decorationSelect = document.getElementById('decorationSelect');

function convertText(text, targetChars) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let index = normalText.indexOf(char);
        if (index !== -1) {
            const targetArray = Array.from(targetChars);
            result += targetArray[index];
        } else {
            result += char;
        }
    }
    return result;
}

decorations.forEach((dec, index) => {
    let option = document.createElement('option');
    option.value = index;
    option.text = dec.name === "None" ? "No Decoration" : `${dec.name}: ${dec.left} Name ${dec.right}`;
    decorationSelect.appendChild(option);
});

function updateResults() {
    const inputText = textInput.value;
    resultsContainer.innerHTML = ""; 
    if (inputText.trim() === "") return; 

    const activeDec = decorations[decorationSelect.value];

    fontStyles.forEach(style => {
        let converted = convertText(inputText, style.chars);
        let finalOutput = `${activeDec.left}${converted}${activeDec.right}`;

        const card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = `
            <div>
                <div class="font-name">${style.name}</div>
                <div class="output-text">${finalOutput}</div>
            </div>
            <button class="copy-btn neon-btn" onclick="copyToClipboard(this, '${finalOutput.replace(/'/g, "\\'")}')">Copy</button>
        `;
        resultsContainer.appendChild(card);
    });
}

window.copyToClipboard = function(buttonElement, textToCopy) {
    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = buttonElement.innerText;
        buttonElement.innerText = "Copied!";
        buttonElement.classList.add('copied');
        setTimeout(() => {
            buttonElement.innerText = originalText;
            buttonElement.classList.remove('copied');
        }, 2000);
    });
}

textInput.addEventListener('input', updateResults);
decorationSelect.addEventListener('change', updateResults);

document.getElementById('clearBtn').addEventListener('click', () => {
    textInput.value = '';
    decorationSelect.value = 0;
    updateResults();
    textInput.focus();
});

document.getElementById('randomBtn').addEventListener('click', () => {
    if (textInput.value.trim() === "") textInput.value = "ZeroFont";
    decorationSelect.value = Math.floor(Math.random() * decorations.length);
    updateResults();
});


// ==========================================
// 4. STEALTH MODE (ZERO-WIDTH STEGANOGRAPHY)
// ==========================================

// The Android-Safe Invisible Characters
const zeroPad = '\u200B';  // Zero-Width Space
const zeroOne = '\u2060';  // Word Joiner (Safe)
const zeroZero = '\uFEFF'; // Zero-Width No-Break Space (Safe)

const publicTextInput = document.getElementById('publicTextInput');
const secretTextInput = document.getElementById('secretTextInput');
const encodeBtn = document.getElementById('encodeBtn');
const encodeFeedback = document.getElementById('encodeFeedback');

const decodeInput = document.getElementById('decodeInput');
const decodeBtn = document.getElementById('decodeBtn');
const decodeOutput = document.getElementById('decodeOutput');

// UX FIX: Double click to instantly clear the phantom text
decodeInput.addEventListener('dblclick', () => {
    decodeInput.value = '';
    decodeOutput.innerText = "...";
    decodeOutput.style.color = "#00ff41";
    decodeOutput.classList.add('blinking-cursor');
});

// ENCODE LOGIC
encodeBtn.addEventListener('click', () => {
    const coverText = publicTextInput.value || "Have a great day!";
    const secretText = secretTextInput.value;

    if (!secretText) {
        encodeFeedback.innerText = "[!] Please enter a secret message.";
        encodeFeedback.style.color = "#ef4444";
        return;
    }

    // 1. Convert secret to binary
    let binaryStr = secretText.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');

    // 2. Map binary to Android-safe invisible characters
    let invisibleStr = binaryStr.split('').map(bit => {
        if (bit === '0') return zeroZero;
        if (bit === '1') return zeroOne;
        if (bit === ' ') return zeroPad;
        return '';
    }).join('');

    // 3. Combine and copy
    const finalPayload = coverText + invisibleStr;
    
    navigator.clipboard.writeText(finalPayload).then(() => {
        encodeFeedback.innerText = ">> ENCRYPTION SUCCESSFUL. PAYLOAD IN CLIPBOARD.";
        encodeFeedback.style.color = "#00ff41";
        
        encodeBtn.innerText = "LOCKED & LOADED 🔒";
        encodeBtn.style.backgroundColor = "rgba(0, 255, 65, 0.2)";
        
        setTimeout(() => {
            encodeBtn.innerText = "Encrypt & Copy to Clipboard";
            encodeBtn.style.backgroundColor = "transparent";
            encodeFeedback.innerText = "";
        }, 3000);
    });
});

// DECODE LOGIC
decodeBtn.addEventListener('click', () => {
    const mixedText = decodeInput.value;
    
    // 1. Extract ONLY the safe invisible characters using updated Regex
    const invisibleText = mixedText.replace(/[^\u200B\u2060\uFEFF]/g, '');
    
    if (!invisibleText) {
        decodeOutput.innerText = "ERROR: NO HIDDEN DATA DETECTED.";
        decodeOutput.style.color = "#ef4444";
        decodeOutput.classList.remove('blinking-cursor');
        return;
    }

    // 2. Translate safe invisible chars back to binary
    const binaryStr = invisibleText.split('').map(char => {
        if (char === zeroZero) return '0';
        if (char === zeroOne) return '1';
        if (char === zeroPad) return ' ';
        return '';
    }).join('');

    // 3. Translate binary back to text
    const revealedText = binaryStr.split(' ').map(bin => {
        return String.fromCharCode(parseInt(bin, 2));
    }).join('');

    // Show output
    decodeOutput.innerText = revealedText;
    decodeOutput.style.color = "#0df";
    decodeOutput.classList.remove('blinking-cursor');
});

// Reset the blinking cursor when typing in decoder
decodeInput.addEventListener('input', () => {
    decodeOutput.innerText = "...";
    decodeOutput.style.color = "#00ff41";
    decodeOutput.classList.add('blinking-cursor');
});
