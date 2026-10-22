ITA.levels.push({id:'B1',name:'Intermedio',topics:[
{id:'r-b1-casi',t:'I sei casi: quadro d\'insieme',b:`
<p>Il russo ha sei casi. Il caso dice <b>che ruolo</b> ha la parola nella frase, al posto delle preposizioni e dell'ordine delle parole in italiano.</p>
<table><tr><th>caso</th><th>domanda</th><th>uso principale</th><th>книга</th><th>брат</th></tr>
<tr><td>nominativo</td><td>кто? что?</td><td>soggetto</td><td>книга</td><td>брат</td></tr>
<tr><td>genitivo</td><td>кого? чего?</td><td>«di», нет, quantità, у, из, от, до</td><td>книги</td><td>брата</td></tr>
<tr><td>dativo</td><td>кому? чему?</td><td>«a» qualcuno, età, к, по</td><td>книге</td><td>брату</td></tr>
<tr><td>accusativo</td><td>кого? что?</td><td>oggetto, moto в/на, giorno</td><td>книгу</td><td>брата</td></tr>
<tr><td>strumentale</td><td>кем? чем?</td><td>с «con», professione, strumento</td><td>книгой</td><td>братом</td></tr>
<tr><td>prepositivo</td><td>о ком? о чём? где?</td><td>в/на stato, о «di cosa si parla»</td><td>книге</td><td>брате</td></tr></table>
<p>Consiglio: impara le preposizioni insieme al caso: <i lang="ru">из + gen., к + dat., с + strum., о + prep.</i></p>`,
ex:[
['Я думаю о ___ (сестра). Quale caso?','prepositivo',['genitivo','dativo','prepositivo'],'О + prepositivo: о сестре.'],
['Я думаю о ___ (сестра).','сестре',null,'Prepositivo femminile: -е.'],
['Я иду к ___ (сестра).','сестре',null,'К + dativo: сестре (stessa forma del prepositivo per i femminili in -а).'],
['Я живу у ___ (сестра).','сестры',null,'У + genitivo: сестры.'],
['Я гуляю с ___ (сестра).','сестрой',null,'С + strumentale: сестрой.'],
['Я люблю ___ (сестра).','сестру',null,'Oggetto: accusativo -у.'],
['Письмо от ___ (брат).','брата',null,'От + genitivo.']]},
{id:'r-b1-agg-decl',t:'La declinazione degli aggettivi (singolare)',b:`
<table><tr><th>caso</th><th>m. / n.</th><th>f.</th></tr>
<tr><td>nom.</td><td>новый / новое</td><td>новая</td></tr>
<tr><td>gen.</td><td>нов<b>ого</b> (si legge «-ovo»)</td><td>нов<b>ой</b></td></tr>
<tr><td>dat.</td><td>нов<b>ому</b></td><td>нов<b>ой</b></td></tr>
<tr><td>acc.</td><td>= nom. (inanimato) / = gen. (animato)</td><td>нов<b>ую</b></td></tr>
<tr><td>strum.</td><td>нов<b>ым</b></td><td>нов<b>ой</b></td></tr>
<tr><td>prep.</td><td>(о) нов<b>ом</b></td><td>(о) нов<b>ой</b></td></tr></table>
<p>Aggettivi molli: <i lang="ru">синего, синему, синим, о синем; синей, синюю</i>. Dopo ж, ш, ч, щ non accentati: <i lang="ru">хорошего, хорошему, хорошим, о хорошем</i>.</p>
<p>I possessivi seguono uno schema simile: <i lang="ru">моего, моему, моим, о моём; моей, мою</i>.</p>`,
ex:[
['Я живу в ___ доме. (новый)','новом',null,'Prepositivo maschile: -ом.'],
['У меня нет ___ машины. (красный)','красной',null,'Genitivo femminile: -ой.'],
['Я звоню ___ другу. (старый)','старому',null,'Dativo maschile: -ому.'],
['Я читаю ___ книгу. (интересный)','интересную',null,'Accusativo femminile: -ую.'],
['Он гуляет с ___ собакой. (большой)','большой',null,'Strumentale femminile: -ой.'],
['Я вижу ___ брата. (мой)','моего',null,'Accusativo maschile animato = genitivo: моего.'],
['Мы говорим о ___ фильме. (русский)','русском',null,'Prepositivo: русском.']]},
{id:'r-b1-plurale-casi',t:'I casi al plurale',b:`
<table><tr><th>caso</th><th>desinenza</th><th>esempi</th></tr>
<tr><td>nom.</td><td>-ы/-и, -а/-я</td><td>столы, книги, окна</td></tr>
<tr><td>gen.</td><td>vedi sotto</td><td>столов, книг, окон, музеев, словарей</td></tr>
<tr><td>dat.</td><td>-ам / -ям</td><td>столам, книгам, друзьям</td></tr>
<tr><td>acc.</td><td>= nom. (inanimati) / = gen. (animati)</td><td>вижу столы / вижу студентов</td></tr>
<tr><td>strum.</td><td>-ами / -ями</td><td>столами, книгами, друзьями</td></tr>
<tr><td>prep.</td><td>-ах / -ях</td><td>о столах, в книгах, о друзьях</td></tr></table>
<p><b>Genitivo plurale</b>, il più difficile:</p>
<p>• maschile in consonante dura: <b>-ов</b> (<i lang="ru">студентов, городов</i>); in -й: <b>-ев</b> (<i lang="ru">музеев</i>); in ж, ш, ч, щ, ь: <b>-ей</b> (<i lang="ru">врачей, словарей</i>);<br>• femminile in -а e neutro in -о: <b>nessuna desinenza</b> (<i lang="ru">книг, мам, окон, писем</i>; spesso compare una vocale mobile);<br>• femminile in -ь: <b>-ей</b> (<i lang="ru">тетрадей</i>); in -ия: <b>-ий</b> (<i lang="ru">станций</i>).</p>
<p>Irregolari utili: <i lang="ru">люди → людей, дети → детей, друзья → друзей, деньги → денег</i>.</p>`,
ex:[
['В классе много ___ (студент).','студентов',null,'Много + genitivo plurale; maschile: -ов.'],
['У меня нет ___ (деньги).','денег',null,'Irregolare: деньги → денег.'],
['На полке пять ___ (книга).','книг',null,'Femminile in -а: genitivo plurale senza desinenza.'],
['Я пишу ___ (друзья).','друзьям',null,'Dativo plurale: -ям.'],
['Мы говорим о ___ (дети).','детях',null,'Prepositivo plurale: -ях.'],
['Он гуляет с ___ (друзья).','друзьями',null,'Strumentale plurale: -ями.'],
['В городе много ___ (музей).','музеев',null,'Maschile in -й: -ев.'],
['Я вижу ___ (студенты).','студентов',null,'Accusativo plurale animato = genitivo.']]},
{id:'r-b1-numeri-casi',t:'Numerali e casi',b:`
<table><tr><th>numero</th><th>sostantivo</th><th>esempio</th></tr>
<tr><td>1, 21, 31…</td><td>nominativo singolare</td><td><i lang="ru">один стол, двадцать одна книга</i></td></tr>
<tr><td>2, 3, 4 (22–24…)</td><td>genitivo singolare</td><td><i lang="ru">два стола, три книги, четыре окна</i></td></tr>
<tr><td>5–20, 25–30…</td><td>genitivo plurale</td><td><i lang="ru">пять столов, десять книг, двенадцать окон</i></td></tr></table>
<p>Lo stesso con <i lang="ru">сколько, много, мало, несколько</i> → genitivo plurale: <i lang="ru">сколько студентов, мало времени</i> (le cose non numerabili restano al genitivo singolare).</p>
<p><i lang="ru">Два</i> per maschile e neutro, <i lang="ru">две</i> per femminile: <i lang="ru">два брата, две сестры</i>.</p>
<p>Gli aggettivi dopo 2–4 vanno al genitivo plurale (maschile e neutro) o al nominativo plurale (femminile, più comune): <i lang="ru">два новых стола, две новые книги</i>.</p>`,
ex:[
['три ___ (брат)','брата',null,'2–4 + genitivo singolare.'],
['пять ___ (брат)','братьев',null,'5+ + genitivo plurale: братьев.'],
['две ___ (неделя)','недели',null,'2–4 + genitivo singolare: недели.'],
['двадцать один ___ (студент)','студент',null,'21 = nominativo singolare.'],
['сколько ___ (час)?','часов',null,'Сколько + genitivo plurale: часов.'],
['___ подруги (2)','две',['два','две'],'Подруга femminile: две.'],
['двенадцать ___ (месяц)','месяцев',null,'5–20 + genitivo plurale: месяцев.']]},
{id:'r-b1-prefissi',t:'Verbi di moto con prefissi',b:`
<p>Con un prefisso i verbi di moto prendono un significato preciso. <i lang="ru">Идти</i> diventa <i lang="ru">-йти</i> (perfettivo), <i lang="ru">ходить</i> resta (imperfettivo): <i lang="ru">приходить / прийти</i>. Così anche <i lang="ru">-езжать / -ехать</i>.</p>
<table><tr><th>prefisso</th><th>significato</th><th>esempio</th></tr>
<tr><td>по-</td><td>avviarsi, partire (perf.)</td><td><i lang="ru">Пошли! Он поехал в Москву.</i></td></tr>
<tr><td>при-</td><td>arrivare</td><td><i lang="ru">Он пришёл домой. Она приехала из Рима.</i></td></tr>
<tr><td>у-</td><td>andarsene</td><td><i lang="ru">Он ушёл с работы. Они уехали в отпуск.</i></td></tr>
<tr><td>в-</td><td>entrare</td><td><i lang="ru">Он вошёл в комнату.</i></td></tr>
<tr><td>вы-</td><td>uscire</td><td><i lang="ru">Она вышла из дома.</i></td></tr>
<tr><td>пере-</td><td>attraversare</td><td><i lang="ru">перейти улицу</i></td></tr>
<tr><td>за-</td><td>passare un attimo</td><td><i lang="ru">Зайди ко мне!</i></td></tr>
<tr><td>под- / от-</td><td>avvicinarsi / allontanarsi</td><td><i lang="ru">подойти к окну, отойти от окна</i></td></tr></table>
<p>Preposizioni coerenti: <i lang="ru">в/на</i> (куда?) ↔ <i lang="ru">из/с</i> (откуда?); <i lang="ru">к</i> (da qualcuno) ↔ <i lang="ru">от</i> (da presso qualcuno).</p>`,
ex:[
['Марко ___ домой в 6 часов. (arrivò, a piedi)','пришёл/пришел',['ушёл','пришёл','вошёл'],'Arrivare = при-.'],
['Анна ___ из комнаты. (uscì)','вышла',['вышла','вошла','ушла'],'Uscire = вы-.'],
['Они ___ в отпуск на море. (partirono, con mezzo)','уехали',['приехали','уехали','заехали'],'Andarsene = у-.'],
['Он ___ к окну. (si avvicinò)','подошёл/подошел',['подошёл','отошёл','перешёл'],'Avvicinarsi = под- + к.'],
['___ ко мне вечером! (passa da me, ты)','Зайди',['Зайди','Выйди','Уйди'],'Passare un attimo = за-.'],
['Она приехала ___ Рима.','из',['в','из','от'],'Откуда? из + genitivo.']]},
{id:'r-b1-portare',t:'Portare: нести, вести, везти',b:`
<table><tr><th>significato</th><th>unidirezionale</th><th>pluridirezionale</th></tr>
<tr><td>portare a mano (oggetto)</td><td><i lang="ru">нести</i>: несу, несёшь</td><td><i lang="ru">носить</i>: ношу, носишь</td></tr>
<tr><td>accompagnare, condurre (a piedi)</td><td><i lang="ru">вести</i>: веду, ведёшь</td><td><i lang="ru">водить</i>: вожу, водишь</td></tr>
<tr><td>portare con un mezzo</td><td><i lang="ru">везти</i>: везу, везёшь</td><td><i lang="ru">возить</i>: вожу, возишь</td></tr></table>
<p><i lang="ru">Я несу книги в библиотеку. Мама ведёт сына в школу. Он везёт детей на дачу.</i></p>
<p>Attenzione: <i lang="ru">носить</i> significa anche «indossare abitualmente» (<i lang="ru">носить очки</i>), <i lang="ru">водить машину</i> = guidare.</p>
<p>Con i prefissi: <i lang="ru">принести</i> (portare qui), <i lang="ru">привести</i> (portare qualcuno), <i lang="ru">привезти</i> (portare con mezzo).</p>`,
ex:[
['Мама ___ дочь в школу. (accompagna a piedi, ora)','ведёт/ведет',['несёт','ведёт','везёт'],'Accompagnare una persona a piedi: вести.'],
['Я ___ сумку. (porto in mano, ora)','несу',['несу','веду','везу'],'Oggetto a mano: нести.'],
['Папа ___ детей на дачу на машине. (ora)','везёт/везет',['ведёт','везёт','несёт'],'Con un mezzo: везти.'],
['Она ___ очки. (porta abitualmente)','носит',['несёт','носит'],'Indossare abitualmente: носить.'],
['Ты умеешь ___ машину? (guidare)','водить',['водить','вести','возить'],'Guidare = водить машину.'],
['___ мне, пожалуйста, воду! (porta qui, ты)','Принеси',['Принеси','Приведи','Привези'],'Portare un oggetto qui: принести → принеси.']]},
{id:'r-b1-svoy',t:'Il possessivo свой',b:`
<p><b>Свой</b> significa «il proprio» e si riferisce al <b>soggetto della frase</b>. Si declina come <i lang="ru">мой</i>: <i lang="ru">свой, своя, своё, свои</i>.</p>
<p>Con la 3ª persona è obbligatorio quando il possessore è il soggetto: <i lang="ru">Марко любит свою жену.</i> (sua, di Marco). <i lang="ru">Марко любит его жену.</i> significa la moglie di un altro uomo!</p>
<p>Con la 1ª e 2ª persona <i lang="ru">свой</i> e <i lang="ru">мой/твой</i> sono entrambi possibili: <i lang="ru">Я люблю свою (мою) работу.</i></p>
<p><i lang="ru">Свой</i> non si usa nel soggetto: <i lang="ru">Его жена работает.</i> (non «своя жена»).</p>`,
ex:[
['Анна часто звонит ___ маме. (a sua madre, di Anna)','своей',['её','своей'],'Il possessore è il soggetto (Anna): свой → своей.'],
['Анна и ___ мама живут в Риме.','её',['её','своя'],'Nel soggetto non si usa свой.'],
['Марко ищет ___ ключи. (le proprie)','свои',['его','свои'],'Possessore = soggetto: свои.'],
['Я рассказал Марко о ___ поездке. (di Marco)','его',['его','своей'],'Il possessore (Marco) non è il soggetto (я): его.'],
['Они продали ___ машину. (la propria)','свою',['их','свою'],'Possessore = soggetto: свою.']]},
{id:'r-b1-kotoryj',t:'Il relativo который',b:`
<p><b>Который</b> = «che, il quale». Prende <b>genere e numero</b> dalla parola a cui si riferisce, ma il <b>caso</b> dal suo ruolo nella frase relativa.</p>
<p><i lang="ru">Это девушка, которая живёт в Риме.</i> (soggetto: nominativo)<br><i lang="ru">Это девушка, которую я люблю.</i> (oggetto: accusativo)<br><i lang="ru">Это девушка, о которой я говорил.</i> (о + prepositivo)<br><i lang="ru">Это дом, в котором я живу.</i> (в + prepositivo)<br><i lang="ru">Это друг, с которым я работаю.</i> (с + strumentale)</p>
<p>Si declina come un aggettivo: <i lang="ru">которого, которому, которым, о котором; которой, которую; которые, которых, которым, которыми</i>.</p>`,
ex:[
['Это книга, ___ я читаю.','которую',['которая','которую','которой'],'Oggetto (читаю что?) → accusativo femminile: которую.'],
['Это мой друг, ___ живёт в Москве.','который',['который','которого','которому'],'Soggetto → nominativo: который.'],
['Это город, в ___ я родилась.','котором',null,'В + prepositivo maschile: котором.'],
['Это девушка, с ___ я познакомился.','которой',null,'С + strumentale femminile: которой.'],
['Это друзья, ___ я пишу письма.','которым',null,'Писать кому? dativo plurale: которым.'],
['Это фильм, о ___ все говорят.','котором',null,'О + prepositivo maschile: котором.']]},
{id:'r-b1-negazione',t:'La doppia negazione',b:`
<p>In russo le parole negative <b>richiedono sempre не</b> davanti al verbo: <i lang="ru">Я никого не знаю. Он ничего не сказал. Мы никогда не были в Китае. Нигде нет места.</i></p>
<table><tr><td>никто</td><td>nessuno</td><td>ничто / ничего</td><td>niente</td></tr>
<tr><td>никогда</td><td>mai</td><td>нигде / никуда</td><td>da nessuna parte (stato / moto)</td></tr>
<tr><td>никакой</td><td>nessun</td><td>ничей</td><td>di nessuno</td></tr></table>
<p>Con le preposizioni la preposizione va <b>in mezzo</b>: <i lang="ru">ни о чём, ни с кем, ни к кому</i>: <i lang="ru">Я ни о чём не думаю.</i></p>
<p><b>Некого, нечего, некуда, негде</b> + infinito = «non c'è nessuno / niente / nessun posto»: <i lang="ru">Мне нечего делать.</i> (non ho niente da fare) <i lang="ru">Нам некуда идти.</i></p>`,
ex:[
['Я ___ не видел. (nessuno)','никого',['никто','никого','некого'],'Oggetto: никого + не.'],
['Он ___ не боится. (niente)','ничего',null,'Бояться + genitivo: ничего не боится.'],
['Мы ___ не были в Японии. (mai)','никогда',null,'Mai = никогда + не.'],
['Она ни ___ не говорит. (con nessuno)','с кем',null,'La preposizione va in mezzo: ни с кем.'],
['Мне ___ делать. (non ho niente da fare)','нечего',['ничего','нечего'],'Нечего + infinito: non c\'è niente da fare.'],
['___ не пришёл. (nessuno, soggetto)','Никто',['Никто','Никого','Некого'],'Soggetto: никто.']]},
{id:'r-b1-date',t:'Date e tempo determinato',b:`
<p>«Che giorno è oggi?» <i lang="ru">Какое сегодня число? – Сегодня пятое мая.</i> (ordinale neutro + mese al genitivo).</p>
<p>«Quando?» con la data: tutto al <b>genitivo</b>: <i lang="ru">Я родилась пятого мая две тысячи первого года.</i></p>
<p>Solo l'anno: <i lang="ru">в + prepositivo</i>: <i lang="ru">в две тысячи двадцатом году</i>.</p>
<p><b>до / после + genitivo</b>: <i lang="ru">до обеда, после работы</i>. <b>с … до …</b>: <i lang="ru">с девяти до шести</i>. <b>за + accusativo</b> = in quanto tempo: <i lang="ru">Я прочитал книгу за неделю.</i> <b>на + accusativo</b> = per quanto tempo (previsto): <i lang="ru">Я приехал на неделю.</i></p>`,
ex:[
['Сегодня ___ мая. (il 1°)','первое',['первый','первое','первого'],'Che giorno è: ordinale neutro, первое мая.'],
['Он родился ___ марта. (il 3)','третьего',null,'Quando? Data al genitivo: третьего.'],
['Я работаю ___ девяти до пяти.','с',['с','из','в'],'Da… a…: с… до…'],
['Я прочитал этот роман ___ два дня. (in due giorni)','за',['за','на','через'],'In quanto tempo = за + accusativo.'],
['Мы приехали в Москву ___ месяц. (per un mese)','на',['за','на','в'],'Per quanto tempo (durata prevista) = на + accusativo.'],
['___ работы я иду в спортзал. (dopo)','После',null,'После + genitivo.']]}
],
words:`приходи́ть / прийти́|arrivare (a piedi)
приезжа́ть / прие́хать|arrivare (con mezzo)
уходи́ть / уйти́|andarsene
выходи́ть / вы́йти|uscire
входи́ть / войти́|entrare
переходи́ть / перейти́|attraversare
нести́ / носи́ть|portare (a mano)
вести́ / води́ть|accompagnare, condurre
везти́ / вози́ть|portare con un mezzo
расска́зывать / рассказа́ть|raccontare
спра́шивать / спроси́ть|chiedere (informazione)
проси́ть / попроси́ть|chiedere (un favore)
отвеча́ть / отве́тить|rispondere
помога́ть / помо́чь|aiutare
забыва́ть / забы́ть|dimenticare
по́мнить|ricordare
наде́яться|sperare
случи́ться|succedere
боле́ть|essere malato
здоро́вье|salute
пра́здник|festa
пое́здка|viaggio (breve)
о́тпуск|ferie
да́ча|casa di campagna
о́зеро|lago
лес|bosco
по́ле|campo
дере́вня|villaggio
столи́ца|capitale
страна́|paese, nazione
наро́д|popolo
исто́рия|storia
поэ́т|poeta
писа́тель|scrittore
откры́тка|cartolina
письмо́|lettera
никто́|nessuno
ничего́|niente
никогда́|mai
ниче́й|di nessuno
свой|proprio
кото́рый|che, il quale
по́сле|dopo
до|fino a, prima di
че́рез|tra, attraverso
наза́д|fa, indietro`
});
