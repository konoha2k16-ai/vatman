// Livello A1, parte 2.
ITA.levels.find(l=>l.id==='A1').topics.push(
{id:'r-a1-domande',t:'Lezione 7. Fare domande',b:`
<h4>Passo 1: domande sì/no</h4>
<p>Facilissimo: la frase è <b>uguale</b> all'affermazione, cambia solo la voce (sale sulla parola importante). <i lang="ru">Ты студент.</i> (sei studente) → <i lang="ru">Ты студент?</i> (sei studente?)</p>
<h4>Passo 2: le parole per domandare</h4>
<table><tr><th>russo</th><th>italiano</th><th>esempio</th></tr>
<tr><td>кто?</td><td>chi?</td><td>Кто это? – Это мой брат.</td></tr>
<tr><td>что?</td><td>che cosa?</td><td>Что это? – Это книга.</td></tr>
<tr><td>где?</td><td>dove? (stare)</td><td>Где ты? – Я дома.</td></tr>
<tr><td>куда?</td><td>dove? (andare)</td><td>Куда ты идёшь?</td></tr>
<tr><td>откуда?</td><td>da dove?</td><td>Откуда ты? – Я из Италии.</td></tr>
<tr><td>когда?</td><td>quando?</td><td>Когда ты работаешь?</td></tr>
<tr><td>почему?</td><td>perché?</td><td>Почему ты не спишь?</td></tr>
<tr><td>как?</td><td>come?</td><td>Как дела? Как тебя зовут?</td></tr>
<tr><td>сколько?</td><td>quanto?</td><td>Сколько стоит?</td></tr>
<tr><td>какой?</td><td>quale? che tipo di?</td><td>Какой это город?</td></tr></table>
<h4>Passo 3: rispondere «perché»</h4>
<p>Domanda: <i lang="ru">почему?</i> Risposta: <b>потому что</b> (perché…). <i lang="ru">– Почему ты дома? – Потому что я болею.</i></p>
<h4>Passo 4: tre piccole parole per collegare</h4>
<p><b>и</b> = e: <i lang="ru">мама и папа</i>. <b>а</b> = e invece: <i lang="ru">Я русская, а он итальянец.</i> <b>но</b> = ma: <i lang="ru">Я устал, но я работаю.</i></p>
<p class="tip"><b>Ricorda:</b> «Come stai?» si dice <i lang="ru">Как дела?</i> Risposte: <i lang="ru">Хорошо! Нормально. Так себе. Плохо.</i></p>`,
words:`кто|chi
что|che cosa
где|dove (stato)
куда́|dove (moto)
отку́да|da dove
когда́|quando
почему́|perché (domanda)
потому́ что|perché (risposta)
как|come
ско́лько|quanto
како́й|quale, che tipo
но|ma
а|e invece
Как дела́?|Come va?
норма́льно|bene, ok (normale)
пло́хо|male`,
ex:[
['___ это? – Это мой брат.','Кто',['Кто','Что','Где'],'Per le persone: кто?'],
['___ это? – Это книга.','Что',['Кто','Что','Где'],'Per le cose: что?'],
['___ ты? – Я дома.','Где',['Где','Куда','Откуда'],'Dove sei (stato) = где?'],
['___ ты идёшь? – В магазин.','Куда',['Где','Куда','Откуда'],'Dove vai (moto) = куда?'],
['___ ты? – Я из Италии.','Откуда',['Где','Куда','Откуда'],'Da dove = откуда?'],
['___ тебя зовут?','Как',['Что','Как','Кто'],'Come ti chiami = Как тебя зовут?'],
['___ стоит кофе?','Сколько',['Сколько','Как','Когда'],'Quanto costa = сколько стоит?'],
['– Почему ты дома? – ___ я болею.','Потому что',['Почему','Потому что','Как'],'Risposta a почему: потому что.'],
['Я русская, ___ он итальянец.','а',['и','а','но'],'Contrapposizione leggera: а.'],
['Я устал, ___ я работаю.','но',['и','а','но'],'Contrasto forte: но.'],
['Мама ___ папа дома.','и',['и','а','но'],'Aggiunta semplice: и.'],
['Как дела? – ___! (bene)','Хорошо',null,'Bene = хорошо.'],
['Ordina: «Dove vivi?»','Где ты живёшь','order','Где + ты + живёшь.'],
['Ordina: «Come va?»','Как дела','order','Как дела? = come va?'],
['Ordina: «Perché non dormi?»','Почему ты не спишь','order','Почему + ты + не + спишь.'],
['Traduci: «Chi è?»','кто это',null,'Кто это?']],
test:[
['___ ты работаешь? – В банке.','Где',['Где','Куда','Кто'],'Dove lavori (stato): где.'],
['___ ты? – Из Москвы.','Откуда',['Где','Откуда','Когда'],'Da dove: откуда.'],
['___ это? – Это Анна.','Кто',['Кто','Что'],'Persona: кто.'],
['___ ты едешь? – Домой.','Куда',['Где','Куда'],'Moto: куда.'],
['___ стоит хлеб?','Сколько',['Сколько','Какой'],'Prezzo: сколько.'],
['Он итальянец, ___ она русская.','а',['и','а'],'Contrapposizione: а.'],
['«Perché» nella risposta:','потому что',['почему','потому что'],'Risposta: потому что.'],
['Ordina: «Cos\'è questo?»','Что это','order','Что + это.'],
['Ordina: «Quando lavori?»','Когда ты работаешь','order','Когда + ты + работаешь.'],
['Traduci: «Come ti chiami?»','как тебя зовут',null,'Как тебя зовут?']]},

{id:'r-a1-plurale',t:'Lezione 8. Uno, tanti: il plurale',b:`
<p>In italiano: libro → libri, casa → case. In russo ci sono <b>due desinenze</b> principali: <b>-ы</b> e <b>-и</b>.</p>
<h4>Passo 1: guarda la tabella</h4>
<p>Maschili e femminili prendono <b>-ы</b> o <b>-и</b>:</p>
<table><tr><th>singolare</th><th>come si fa</th><th>plurale</th></tr>
<tr><td>стол (m.)</td><td>+ ы</td><td>стол<b>ы</b></td></tr>
<tr><td>журнал (m.)</td><td>+ ы</td><td>журнал<b>ы</b></td></tr>
<tr><td>мама (f.)</td><td>а → ы</td><td>мам<b>ы</b></td></tr>
<tr><td>музей (m. in -й)</td><td>й → и</td><td>музе<b>и</b></td></tr>
<tr><td>неделя (f. in -я)</td><td>я → и</td><td>недел<b>и</b></td></tr>
<tr><td>словарь, ночь (in -ь)</td><td>ь → и</td><td>словар<b>и</b>, ноч<b>и</b></td></tr></table>
<h4>Passo 2: neutro → -а o -я</h4>
<p><i lang="ru">окно → окна, слово → слова, море → моря</i>.</p>
<h4>Passo 3: la regola delle 7 lettere</h4>
<p>Dopo <b>г, к, х, ж, ш, ч, щ</b> non si scrive mai ы, ma <b>и</b>: <i lang="ru">книга → книги, банк → банки, врач → врачи, нож → ножи</i>.</p>
<h4>Passo 4: alcuni plurali speciali</h4>
<p><i lang="ru">человек → люди</i> (persone), <i lang="ru">ребёнок → дети</i> (bambini), <i lang="ru">друг → друзья</i>, <i lang="ru">брат → братья</i>, <i lang="ru">дом → дома</i>, <i lang="ru">город → города</i>.</p>
<p class="tip"><b>Ricorda:</b> -ы è la desinenza «normale»; dopo г, к, х, ж, ш, ч, щ e per le parole morbide (-й, -я, -ь) si scrive -и.</p>`,
words:`журна́л|rivista
слова́рь|dizionario
маши́ны|macchine
лю́ди|persone
де́ти|bambini, figli
друзья́|amici
бра́тья|fratelli
дома́|case
города́|città (pl.)
ру́чка|penna
каранда́ш|matita
фотогра́фия|foto
студе́нты|studenti
ма́ленький|piccolo
большо́й|grande`,
ex:[
['стол → ___','столы',null,'Maschile in consonante: + ы.'],
['мама → ___','мамы',null,'Femminile in -а: а → ы.'],
['книга → ___','книги',null,'Dopo г: и, non ы.'],
['окно → ___','окна',null,'Neutro in -о: о → а.'],
['музей → ___','музеи',null,'-й → -и.'],
['неделя → ___','недели',null,'-я → -и.'],
['ручка → ___','ручки',null,'Dopo к: и.'],
['врач → ___','врачи',null,'Dopo ч: и.'],
['море → ___','моря',null,'Neutro in -е: е → я.'],
['человек → ___','люди',['человеки','люди','человека'],'Irregolare: люди.'],
['ребёнок → ___','дети',['ребёнки','дети','ребёнка'],'Irregolare: дети.'],
['друг → ___','друзья',['други','друзья','друга'],'Irregolare: друзья.'],
['Quale plurale è giusto?','карандаши',['карандашы','карандаши'],'Dopo ш: и.'],
['Ordina: «Questi sono i miei amici.»','Это мои друзья','order','Это + мои (plurale) + друзья.'],
['Traduci: «libri»','книги',null,'Книга → книги.']],
test:[
['журнал → ___','журналы',null,'+ ы.'],
['машина → ___','машины',null,'а → ы.'],
['банк → ___','банки',null,'Dopo к: и.'],
['слово → ___','слова',null,'о → а.'],
['словарь → ___','словари',null,'ь → и.'],
['город → ___','города',['городы','города'],'Plurale speciale in -а.'],
['брат → ___','братья',['браты','братья'],'Irregolare.'],
['Quale è giusto?','книги',['книгы','книги'],'Dopo г: и.'],
['Ordina: «Dove sono i bambini?»','Где дети','order','Где + дети.'],
['Traduci: «persone»','люди',null,'Человек → люди.']]},

{id:'r-a1-aggettivi',t:'Lezione 9. Grande, piccolo, bello',b:`
<p>Gli aggettivi in russo cambiano la fine secondo il <b>genere</b> della parola (proprio come «mio, mia» nella lezione 3).</p>
<h4>Passo 1: le quattro forme</h4>
<table><tr><th></th><th>m. (он)</th><th>f. (она)</th><th>n. (оно)</th><th>plurale</th></tr>
<tr><td>nuovo</td><td>нов<b>ый</b></td><td>нов<b>ая</b></td><td>нов<b>ое</b></td><td>нов<b>ые</b></td></tr>
<tr><td>giovane (accento finale)</td><td>молод<b>ой</b></td><td>молод<b>ая</b></td><td>молод<b>ое</b></td><td>молод<b>ые</b></td></tr>
<tr><td>blu (morbido)</td><td>син<b>ий</b></td><td>син<b>яя</b></td><td>син<b>ее</b></td><td>син<b>ие</b></td></tr></table>
<p>Esempi: <i lang="ru">новый дом, новая машина, новое окно, новые друзья</i>.</p>
<h4>Passo 2: la regola delle 7 lettere (di nuovo!)</h4>
<p>Dopo г, к, х, ж, ш, ч, щ si scrive <b>и</b>: <i lang="ru">русский</i> (non «русскый»), <i lang="ru">хороший</i>, plurale <i lang="ru">русские, хорошие</i>.</p>
<h4>Passo 3: dove si mette?</h4>
<p><b>Prima</b> del nome: <i lang="ru">красивый город</i> = una bella città. <b>Dopo</b> il nome = frase con «è»: <i lang="ru">Город красивый.</i> = La città è bella.</p>
<h4>Passo 4: domandare «che tipo?»</h4>
<p><i lang="ru">Какой?</i> (m.), <i lang="ru">какая?</i> (f.), <i lang="ru">какое?</i> (n.), <i lang="ru">какие?</i> (pl.): <i lang="ru">Какая это книга? – Интересная.</i></p>
<p class="tip"><b>Trucco:</b> guarda la fine del nome e «copia» il genere: машин<b>а</b> → нов<b>ая</b>.</p>`,
words:`но́вый|nuovo
ста́рый|vecchio
большо́й|grande
ма́ленький|piccolo
краси́вый|bello
хоро́ший|buono, bravo
плохо́й|cattivo, brutto
интере́сный|interessante
молодо́й|giovane
ру́сский|russo
италья́нский|italiano
си́ний|blu
кра́сный|rosso
бе́лый|bianco
чёрный|nero
дорого́й|caro, costoso`,
ex:[
['___ дом (nuovo)','новый',['новый','новая','новое'],'Дом è m. → новый.'],
['___ машина (nuova)','новая',['новый','новая','новое'],'Машина è f. → новая.'],
['___ окно (nuovo)','новое',['новый','новая','новое'],'Окно è n. → новое.'],
['___ друзья (nuovi)','новые',['новый','новая','новые'],'Plurale → новые.'],
['___ девушка (bella)','красивая',null,'F. → красивая.'],
['___ город (grande)','большой',['большый','большой'],'Accento finale → -ой.'],
['___ язык (russo)','русский',['русскый','русский'],'Dopo к: и → русский.'],
['___ фильм (interessante)','интересный',null,'M. → интересный.'],
['___ море (blu)','синее',['синое','синее','синяя'],'Синий è «morbido»: n. → синее.'],
['Город ___. (è bello)','красивый',null,'Dopo il nome = predicato: Город красивый.'],
['___ это книга? – Интересная.','Какая',['Какой','Какая','Какое'],'Книга è f. → какая.'],
['Quale è giusto?','хорошие друзья',['хорошые друзья','хорошие друзья'],'Dopo ш: и.'],
['Ordina: «È una città molto bella.»','Это очень красивый город','order','Это + очень + красивый + город.'],
['Ordina: «Il mio telefono è nuovo.»','Мой телефон новый','order','Мой телефон + новый.'],
['Traduci: «una macchina rossa»','красная машина',null,'Машина è f.: красная машина.']],
test:[
['___ кошка (piccola)','маленькая',null,'F. → маленькая.'],
['___ кофе (nero)','чёрный/черный',null,'Кофе è maschile → чёрный.'],
['___ дети (piccoli)','маленькие',null,'Plurale, dopo к → маленькие.'],
['___ вино (italiano)','итальянское',null,'Вино è n. → итальянское.'],
['___ человек (giovane)','молодой',['молодый','молодой'],'Accento finale → молодой.'],
['___ это фильм?','Какой',['Какой','Какая','Какое'],'Фильм è m.'],
['Quale è giusto?','русские слова',['русскые слова','русские слова'],'Dopo к: и.'],
['Мама ___. (è giovane)','молодая',null,'Мама f. → молодая.'],
['Ordina: «Ho una nuova macchina.»','У меня новая машина','order','У меня + новая машина. Con l\'aggettivo, есть spesso si omette.'],
['Traduci: «un buon libro»','хорошая книга',null,'Книга f. → хорошая.']]},

{id:'r-a1-prepositivo',t:'Lezione 10. Dove? В Москве, на работе',b:`
<p>Per dire <b>dove</b> si trova qualcosa usiamo <b>в</b> (in) o <b>на</b> (su, a) e la parola <b>cambia la fine</b>. Questa forma si chiama <b>prepositivo</b>.</p>
<h4>Passo 1: la regola semplice: -е</h4>
<p>Quasi sempre basta mettere <b>-е</b> alla fine:</p>
<table><tr><th>parola</th><th>dove?</th></tr>
<tr><td>дом</td><td>в дом<b>е</b></td></tr>
<tr><td>Москва</td><td>в Москв<b>е</b></td></tr>
<tr><td>школа</td><td>в школ<b>е</b></td></tr>
<tr><td>окно</td><td>на окн<b>е</b></td></tr>
<tr><td>музей</td><td>в музе<b>е</b></td></tr></table>
<h4>Passo 2: le eccezioni: -и</h4>
<p>Parole in <b>-ия</b> e in <b>-ь</b> (femminili) → <b>-и</b>: <i lang="ru">Россия → в России, Италия → в Италии, тетрадь → в тетради</i>.</p>
<h4>Passo 3: в o на?</h4>
<p><b>в</b> = dentro: <i lang="ru">в доме, в школе, в Риме, в Италии</i>.<br><b>на</b> = sopra, e per alcuni luoghi da imparare: <i lang="ru">на столе</i> (sul tavolo), <i lang="ru">на работе</i> (al lavoro), <i lang="ru">на улице</i> (per strada), <i lang="ru">на море</i> (al mare), <i lang="ru">на концерте</i>, <i lang="ru">на почте</i> (alla posta).</p>
<h4>Passo 4: «parlare di…» = о</h4>
<p>La stessa forma serve dopo <b>о</b> (di, su): <i lang="ru">Я думаю о маме. Мы говорим о фильме.</i></p>
<h4>Passo 5: «io sto a casa» = дома</h4>
<p>«A casa» ha una forma speciale: <i lang="ru">Я дома.</i></p>
<p class="tip"><b>Ricorda:</b> где? → в/на + -е. Facile!</p>`,
words:`шко́ла|scuola
рабо́та|lavoro
у́лица|strada, via
го́род|città
магази́н|negozio
банк|banca
по́чта|posta
парк|parco
университе́т|università
о́фис|ufficio
Росси́я|Russia
Ита́лия|Italia
жить|vivere
ду́мать о|pensare a
на|su, a
в|in`,
ex:[
['Я живу в ___. (Москва)','Москве',null,'Москва → в Москве (-е).'],
['Он в ___. (школа)','школе',null,'Школа → в школе.'],
['Книга на ___. (стол)','столе',null,'Стол → на столе.'],
['Мы живём в ___. (Россия)','России',null,'-ия → -ии: в России.'],
['Джованни живёт в ___. (Италия)','Италии',null,'Италия → в Италии.'],
['Мама на ___. (работа)','работе',null,'Lavoro vuole на: на работе. Scrivi solo la parola: работе.'],
['Дети в ___. (парк)','парке',null,'Парк → в парке.'],
['Я думаю о ___. (мама)','маме',null,'О + prepositivo: о маме.'],
['___ работе (al lavoro)','на',['в','на'],'Работа → на.'],
['___ университете','в',['в','на'],'Università → в.'],
['___ улице (per strada)','на',['в','на'],'Улица → на.'],
['Где ты? – Я ___. (a casa)','дома',['в доме','дома','домой'],'«A casa» = дома.'],
['Ordina: «Lavoro in banca.»','Я работаю в банке','order','Я работаю + в банке.'],
['Ordina: «Vivo in Italia.»','Я живу в Италии','order','Я живу + в Италии.'],
['Traduci: «nel parco»','в парке',null,'Парк → в парке.']],
test:[
['Мы в ___. (магазин)','магазине',null,'+ е.'],
['Она живёт в ___. (Рим)','Риме',null,'Рим → в Риме.'],
['Папа на ___. (работа)','работе',null,'На работе.'],
['Я в ___. (офис)','офисе',null,'В офисе.'],
['Мы говорим о ___. (Россия)','России',null,'-ия → -ии.'],
['___ почте','на',['в','на'],'Почта → на.'],
['___ городе','в',['в','на'],'Город → в.'],
['Где книга? – На ___. (окно)','окне',null,'Окно → на окне.'],
['Ordina: «Il papà è a casa.»','Папа дома','order','Папа + дома.'],
['Traduci: «a Mosca»','в Москве',null,'В Москве.']]},

{id:'r-a1-dove',t:'Lezione 11. Dove vai? Куда?',b:`
<p>In italiano «dove» va bene per tutto. In russo no: <b>где?</b> = dove sei (stai fermo), <b>куда?</b> = dove vai (ti muovi).</p>
<h4>Passo 1: fermo o in movimento?</h4>
<table><tr><th></th><th>где? (fermo)</th><th>куда? (movimento)</th></tr>
<tr><td>femminile</td><td>в школ<b>е</b></td><td>в школ<b>у</b></td></tr>
<tr><td>maschile</td><td>в парк<b>е</b></td><td>в парк (non cambia)</td></tr>
<tr><td>neutro</td><td>в кино</td><td>в кино</td></tr>
<tr><td>casa</td><td>дома</td><td>домой</td></tr>
<tr><td>qui / là</td><td>здесь / там</td><td>сюда / туда</td></tr></table>
<p>Con il movimento, i femminili in -а cambiano in <b>-у</b> (in -я → <b>-ю</b>). I maschili non cambiano. Questa forma si chiama <b>accusativo</b>.</p>
<h4>Passo 2: i verbi di movimento</h4>
<p><i lang="ru">идти</i> = andare <b>a piedi</b> (adesso): <i lang="ru">я иду, ты идёшь, он идёт, мы идём, вы идёте, они идут</i>.<br><i lang="ru">ехать</i> = andare <b>con un mezzo</b> (adesso): <i lang="ru">я еду, ты едешь, они едут</i>.</p>
<h4>Passo 3: da una persona</h4>
<p>Andare da una persona: <b>к</b> + persona: <i lang="ru">Я иду к маме. Я иду к врачу.</i></p>
<h4>Esempi completi</h4>
<p><i lang="ru">– Куда ты идёшь? – Я иду в магазин.</i><br><i lang="ru">– Где ты? – Я в магазине.</i><br><i lang="ru">– Куда ты едешь? – Я еду на работу.</i></p>
<p class="tip"><b>Ricorda:</b> где → -е (fermo), куда → -у per i femminili (movimento).</p>`,
words:`идти́|andare a piedi
е́хать|andare con un mezzo
куда́|dove (moto)
где|dove (stato)
домо́й|a casa (moto)
сюда́|qua (moto)
туда́|là (moto)
магази́н|negozio
кино́|cinema
теа́тр|teatro
апте́ка|farmacia
врач|medico
авто́бус|autobus
метро́|metropolitana
пешко́м|a piedi`,
ex:[
['Я иду в ___. (школа, moto)','школу',null,'Movimento: школа → в школу.'],
['Я в ___. (школа, stato)','школе',null,'Stato: в школе.'],
['___ ты идёшь?','Куда',['Где','Куда'],'Movimento → куда.'],
['___ ты живёшь?','Где',['Где','Куда'],'Stato → где.'],
['Я иду ___. (a casa)','домой',['дома','домой'],'Movimento → домой.'],
['Мама ___. (è a casa)','дома',['дома','домой'],'Stato → дома.'],
['Мы ___ в Москву. (andiamo, in treno)','едем',['идём','едем'],'Con un mezzo → ехать: едем.'],
['Я ___ в парк. (vado a piedi)','иду',['иду','еду'],'A piedi → идти: иду.'],
['Они ___ на работу. (vanno, in autobus)','едут',null,'Ехать: они едут.'],
['Я иду к ___. (врач)','врачу',['врач','врачу','врача'],'Da una persona: к + врачу.'],
['Иди ___! (qua)','сюда',['здесь','сюда'],'Movimento → сюда.'],
['Ты идёшь в ___? (аптека)','аптеку',null,'Аптека → в аптеку.'],
['Ordina: «Dove vai?»','Куда ты идёшь','order','Куда + ты + идёшь.'],
['Ordina: «Vado al lavoro.»','Я еду на работу','order','Я еду + на работу (in metro, in autobus…).'],
['Traduci: «Vado a casa.» (a piedi)','я иду домой/иду домой',null,'Я иду домой.']],
test:[
['Я еду в ___. (Италия)','Италию',null,'Италия → в Италию.'],
['Она в ___. (Италия)','Италии',null,'Stato → в Италии.'],
['___ вы едете?','Куда',['Где','Куда'],'Movimento.'],
['Он идёт ___. (a casa)','домой',['дома','домой'],'Movimento.'],
['Мы ___ в кино. (a piedi)','идём',['идём','едем'],'A piedi: идём.'],
['Ты ___ на метро?','едешь',['идёшь','едешь'],'Con la metro: едешь.'],
['Я иду к ___. (мама)','маме',null,'К + маме.'],
['Где ты? – Я ___. (qui)','здесь',['здесь','сюда'],'Stato: здесь.'],
['Ordina: «Vado in farmacia.»','Я иду в аптеку','order','Я иду + в аптеку.'],
['Traduci: «Dove sei?»','где ты',null,'Где ты?']]},

{id:'r-a1-accusativo',t:'Lezione 12. «Vedo la mamma», «leggo un libro»',b:`
<p>Quando una parola è l'<b>oggetto</b> del verbo (cosa? chi?), a volte cambia la fine. Questa forma è l'<b>accusativo</b>. Buona notizia: <b>cambia solo il femminile</b> e i maschili «vivi».</p>
<h4>Passo 1: femminile -а → -у, -я → -ю</h4>
<p><i lang="ru">Я люблю маму. Я читаю книгу. Я пью воду. Я знаю Таню.</i></p>
<h4>Passo 2: maschile e neutro (cose) → non cambiano</h4>
<p><i lang="ru">Я читаю журнал. Я вижу окно. Я пью чай. Я люблю кофе.</i></p>
<h4>Passo 3: maschile «vivo» (persone e animali) → -а</h4>
<p><i lang="ru">Я люблю брата. Я вижу кота. Я знаю Ивана.</i> (ma <i lang="ru">Джованни</i> non cambia: i nomi in -и non si declinano).</p>
<h4>Passo 4: i pronomi</h4>
<table><tr><th>chi</th><th>me, te…</th><th>esempio</th></tr>
<tr><td>я</td><td>меня</td><td>Ты меня любишь?</td></tr>
<tr><td>ты</td><td>тебя</td><td>Я тебя люблю.</td></tr>
<tr><td>он</td><td>его</td><td>Я его знаю.</td></tr>
<tr><td>она</td><td>её</td><td>Я её вижу.</td></tr>
<tr><td>мы / вы / они</td><td>нас / вас / их</td><td>Он нас ждёт.</td></tr></table>
<p class="tip"><b>Domanda magica:</b> «Il verbo agisce su una donna o una cosa in -а?» → -у. Su un uomo o un animale maschio? → -а. Altrimenti niente cambia.</p>`,
words:`люби́ть|amare
ви́деть|vedere
ждать|aspettare
покупа́ть|comprare
брать|prendere
вода́|acqua
пи́цца|pizza
газе́та|giornale
му́зыка|musica
пе́сня|canzone
меня́|me
тебя́|te
его́|lui (oggetto)
её|lei (oggetto)
нас|noi (oggetto)`,
ex:[
['Я люблю ___. (мама)','маму',null,'Femminile: а → у.'],
['Я читаю ___. (книга)','книгу',null,'Книга → книгу.'],
['Я пью ___. (вода)','воду',null,'Вода → воду.'],
['Я читаю ___. (журнал)','журнал',null,'Maschile cosa: non cambia.'],
['Я вижу ___. (брат)','брата',null,'Maschile persona: + а.'],
['Я люблю ___. (кот)','кота',null,'Animale maschio: + а.'],
['Я слушаю ___. (песня)','песню',null,'-я → -ю.'],
['Я пью ___. (кофе)','кофе',null,'Кофе non cambia mai.'],
['Ты ___ любишь? (me)','меня',null,'Me = меня.'],
['Я ___ люблю. (te)','тебя',null,'Te = тебя.'],
['Я ___ жду. (lei)','её/ее',['она','её','ей'],'Lei (oggetto) = её.'],
['Мы покупаем ___. (пицца)','пиццу',null,'Пицца → пиццу.'],
['Ordina: «Ti aspetto.»','Я тебя жду/Я жду тебя','order','Я + тебя + жду.'],
['Ordina: «Amo la musica.»','Я люблю музыку','order','Я люблю + музыку.'],
['Traduci: «Vedo Anna.»','я вижу анну/вижу анну',null,'Анна → Анну.']],
test:[
['Я знаю ___. (Таня)','Таню',null,'-я → -ю.'],
['Он покупает ___. (газета)','газету',null,'а → у.'],
['Я вижу ___. (дом)','дом',null,'Maschile cosa: non cambia.'],
['Мы ждём ___. (папа)','папу',null,'Папа finisce in -а: папу (anche se è maschile!).'],
['Я люблю ___. (Иван)','Ивана',null,'Persona maschile: + а.'],
['Он ___ любит. (me)','меня',null,'Меня.'],
['Я ___ знаю. (lui)','его',['он','его','ему'],'Lui (oggetto) = его.'],
['Она пьёт ___. (чай)','чай',null,'Non cambia.'],
['Ordina: «Compro il pane.»','Я покупаю хлеб','order','Я покупаю + хлеб.'],
['Traduci: «Ti amo.»','я тебя люблю/я люблю тебя/люблю тебя/тебя люблю',null,'Я тебя люблю.']]},

{id:'r-a1-passato',t:'Lezione 13. Il passato: ieri ho…',b:`
<p>Il passato russo è <b>facilissimo</b>: un solo tempo, nessun «avere/essere» come in italiano.</p>
<h4>Passo 1: togli -ть e aggiungi -л</h4>
<p><i lang="ru">читать → читал, работать → работал, говорить → говорил</i>.</p>
<h4>Passo 2: il genere di chi parla</h4>
<p>Il passato non cambia per persona (io, tu…), ma per <b>genere</b>:</p>
<table><tr><th>chi</th><th>desinenza</th><th>esempio</th></tr>
<tr><td>un uomo (я, ты, он)</td><td>-л</td><td>Джованни читал.</td></tr>
<tr><td>una donna (я, ты, она)</td><td>-ла</td><td>Настя читала.</td></tr>
<tr><td>оно</td><td>-ло</td><td>Окно было открыто.</td></tr>
<tr><td>plurale (мы, вы, они)</td><td>-ли</td><td>Мы читали.</td></tr></table>
<p>Quindi Giovanni dice <i lang="ru">я читал</i>, Nastja dice <i lang="ru">я читала</i>.</p>
<h4>Passo 3: «ero, ho avuto» = был</h4>
<p><i lang="ru">быть → был, была, было, были</i>. <i lang="ru">Вчера я был дома.</i> = Ieri ero a casa. <i lang="ru">У меня был кот.</i> = Avevo un gatto.</p>
<h4>Passo 4: poche forme strane</h4>
<p><i lang="ru">идти → шёл, шла, шли; есть → ел, ела; мочь → мог, могла</i>.</p>
<h4>Passo 5: verbi con -ся</h4>
<p><i lang="ru">учиться → учился, училась, учились</i>.</p>
<p class="tip"><b>Parole del passato:</b> <i lang="ru">вчера</i> (ieri), <i lang="ru">раньше</i> (prima), <i lang="ru">в прошлом году</i> (l'anno scorso).</p>`,
words:`вчера́|ieri
ра́ньше|prima, una volta
был|era, è stato (m.)
была́|era, è stata (f.)
бы́ли|erano
ве́чером|di sera
у́тром|di mattina
давно́|tanto tempo fa
неда́вно|di recente
у́жин|cena
обе́д|pranzo
отдыха́ть|riposare
спать|dormire
игра́ть|giocare, suonare
учи́ться|studiare (essere studente)`,
ex:[
['Вчера Джованни ___. (работать)','работал',null,'Giovanni è un uomo: -л.'],
['Вчера Настя ___. (работать)','работала',null,'Nastja è una donna: -ла.'],
['Мы ___ фильм. (смотреть)','смотрели',null,'Plurale: -ли.'],
['Ты ___ книгу? (читать, a un uomo)','читал',null,'Ты (uomo) → читал.'],
['Где ты ___ вчера? (быть, a una donna)','была',null,'Donna → была.'],
['Они ___ в Москве. (жить)','жили',null,'Plurale → жили.'],
['Я ___ в кафе. (быть, Giovanni)','был',null,'Giovanni → был.'],
['Анна ___ в университете. (учиться)','училась',null,'Donna + -ся → училась.'],
['Он ___ домой. (идти)','шёл/шел',['идтил','шёл','шол'],'Идти → шёл.'],
['Вчера я ___ пиццу. (есть, uomo)','ел',null,'Есть → ел.'],
['Quale va con «мы»?','гуляли',['гулял','гуляла','гуляли'],'Мы → -ли.'],
['«Avevo un cane» (uomo):','У меня была собака',['У меня был собака','У меня была собака'],'Собака è femminile: была.'],
['Ordina: «Ieri ero a casa.» (uomo)','Вчера я был дома/Я вчера был дома','order','Вчера + я + был + дома.'],
['Ordina: «Dove avete vissuto prima?»','Где вы жили раньше/Где вы раньше жили','order','Где + вы + жили + раньше.'],
['Traduci: «Ho dormito.» (uomo)','я спал/спал',null,'Спать → спал.']],
test:[
['Вчера мы ___ дома. (быть)','были',null,'Plurale → были.'],
['Папа ___ газету. (читать)','читал',null,'Uomo → -л.'],
['Мама ___ ужин. (готовить)','готовила',null,'Donna → -ла.'],
['Дети ___ в парке. (играть)','играли',null,'Plurale.'],
['Ты где ___? (быть, a una donna)','была',null,'Donna → была.'],
['Она ___ в кино. (идти)','шла',null,'Идти → шла.'],
['У нас ___ машина. (avevamo)','была',['был','была','были'],'Машина è f.'],
['Я ___ в Риме. (жить, Nastja)','жила',null,'Donna → жила.'],
['Ordina: «Ieri sera abbiamo guardato un film.»','Вчера вечером мы смотрели фильм/Мы вчера вечером смотрели фильм','order','Вчера вечером + мы смотрели + фильм.'],
['Traduci: «Ho lavorato.» (uomo)','я работал/работал',null,'Работать → работал.']]},

{id:'r-a1-numeri',t:'Lezione 14. Numeri, età, prezzi, ore',b:`
<h4>Passo 1: i numeri da 0 a 10</h4>
<p>0 <i lang="ru">ноль</i>, 1 <i lang="ru">один</i>, 2 <i lang="ru">два</i>, 3 <i lang="ru">три</i>, 4 <i lang="ru">четыре</i>, 5 <i lang="ru">пять</i>, 6 <i lang="ru">шесть</i>, 7 <i lang="ru">семь</i>, 8 <i lang="ru">восемь</i>, 9 <i lang="ru">девять</i>, 10 <i lang="ru">десять</i>.</p>
<h4>Passo 2: da 11 a 100</h4>
<p>11–19: <i lang="ru">одиннадцать, двенадцать, тринадцать… девятнадцать</i> (tutti con <b>-надцать</b>). Decine: 20 <i lang="ru">двадцать</i>, 30 <i lang="ru">тридцать</i>, 40 <i lang="ru">сорок</i>, 50 <i lang="ru">пятьдесят</i>, 100 <i lang="ru">сто</i>. Si combinano come in italiano: 25 = <i lang="ru">двадцать пять</i>.</p>
<h4>Passo 3: la regola 1 – 2/3/4 – 5+</h4>
<p>La parola dopo il numero cambia secondo il numero (guarda l'ultima cifra):</p>
<table><tr><th>numero</th><th>год (anno)</th><th>рубль</th><th>час (ora)</th></tr>
<tr><td>1, 21, 31</td><td>год</td><td>рубль</td><td>час</td></tr>
<tr><td>2, 3, 4, 22…</td><td>года</td><td>рубля</td><td>часа</td></tr>
<tr><td>5–20, 25…</td><td>лет</td><td>рублей</td><td>часов</td></tr></table>
<h4>Passo 4: l'età</h4>
<p>Si usa <b>мне, тебе, ему, ей</b> (a me, a te…): <i lang="ru">Мне двадцать пять лет.</i> = Ho 25 anni. <i lang="ru">Сколько тебе лет?</i> = Quanti anni hai?</p>
<h4>Passo 5: prezzi e ore</h4>
<p><i lang="ru">Сколько стоит? – Сто рублей.</i> <i lang="ru">Который час? – Три часа.</i> «Alle tre» = <i lang="ru">в три часа</i>.</p>`,
words:`оди́н|uno
два|due
три|tre
четы́ре|quattro
пять|cinque
шесть|sei
семь|sette
во́семь|otto
де́вять|nove
де́сять|dieci
два́дцать|venti
сто|cento
год / лет|anno / anni
час|ora
рубль|rublo
ско́лько|quanto
сто́ить|costare`,
ex:[
['3 = ___','три',null,'Три.'],
['7 = ___','семь',null,'Семь.'],
['10 = ___','десять',null,'Десять.'],
['Мне 25 ___.','лет',['год','года','лет'],'25 finisce in 5 → лет.'],
['Ему 21 ___.','год',['год','года','лет'],'21 finisce in 1 → год.'],
['Ей 23 ___.','года',['год','года','лет'],'23 finisce in 3 → года.'],
['Это стоит 2 ___.','рубля',['рубль','рубля','рублей'],'2 → рубля.'],
['Это стоит 100 ___.','рублей',['рубль','рубля','рублей'],'100 → рублей.'],
['Сейчас 3 ___.','часа',['час','часа','часов'],'3 → часа.'],
['Сейчас 8 ___.','часов',['час','часа','часов'],'8 → часов.'],
['___ тебе лет?','Сколько',['Сколько','Как','Какой'],'Quanti anni = сколько лет.'],
['«Ho 30 anni»:','Мне тридцать лет',['Я тридцать лет','Мне тридцать лет','У меня тридцать лет'],'L\'età si dice con мне.'],
['Ordina: «Quanto costa il caffè?»','Сколько стоит кофе','order','Сколько стоит + кофе.'],
['Ordina: «Ho venti anni.»','Мне двадцать лет','order','Мне + двадцать + лет.'],
['Traduci: «cinque»','пять',null,'Пять.']],
test:[
['4 = ___','четыре',null,'Четыре.'],
['9 = ___','девять',null,'Девять.'],
['Мне 33 ___.','года',['год','года','лет'],'Finisce in 3 → года.'],
['Брату 18 ___.','лет',['год','года','лет'],'11–19 → лет.'],
['Это стоит 1 ___.','рубль',['рубль','рубля','рублей'],'1 → рубль.'],
['Сейчас 1 ___.','час',['час','часа','часов'],'1 → час.'],
['Сейчас 5 ___.','часов',['час','часа','часов'],'5 → часов.'],
['«Quanti anni hai?»','Сколько тебе лет',['Сколько ты лет','Сколько тебе лет'],'Сколько тебе лет?'],
['Ordina: «Sono le due.»','Сейчас два часа','order','Сейчас + два + часа.'],
['Traduci: «cento rubli»','сто рублей',null,'Сто рублей.']]}
);
