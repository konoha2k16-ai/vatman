ITA.levels.push({id:'A2',name:'Elementare',topics:[
{id:'r-a2-aspetto',t:'L\'aspetto del verbo',b:`
<p>Quasi ogni verbo russo esiste in due forme, dette <b>aspetti</b>:</p>
<p><b>Imperfettivo (НСВ)</b>: l'azione come processo, ripetizione, abitudine o fatto in generale. <i lang="ru">Я читал книгу два часа. Я часто звоню маме.</i></p>
<p><b>Perfettivo (СВ)</b>: l'azione compiuta, con un risultato, una sola volta. <i lang="ru">Я прочитал книгу. Вчера я позвонил маме.</i></p>
<table><tr><th>НСВ</th><th>СВ</th><th>come si forma</th></tr>
<tr><td>делать, читать, писать</td><td>сделать, прочитать, написать</td><td>prefisso</td></tr>
<tr><td>решать, отвечать</td><td>решить, ответить</td><td>cambia il suffisso</td></tr>
<tr><td>брать, говорить</td><td>взять, сказать</td><td>radice diversa</td></tr></table>
<p>Il perfettivo <b>non ha presente</b>: le sue forme «al presente» indicano il futuro (<i lang="ru">прочитаю</i> = leggerò tutto).</p>
<p>Parole-spia: <i lang="ru">всегда, часто, каждый день, долго</i> → НСВ. <i lang="ru">уже, наконец, вдруг, сразу</i> → spesso СВ.</p>`,
ex:[
['Вчера я весь вечер ___ письмо. (processo)','писала/писал',['писала','написала'],'Весь вечер = durata, processo: imperfettivo.'],
['Я уже ___ письмо, можно отправлять. (risultato)','написала/написал',['писала','написала'],'Уже + risultato: perfettivo.'],
['Он каждый день ___ маме.','звонит',['звонит','позвонит'],'Каждый день = abitudine: imperfettivo.'],
['Вдруг ___ телефон.','зазвонил',['звонил','зазвонил'],'Вдруг = evento puntuale: perfettivo.'],
['Qual è il perfettivo di «брать»?','взять',['побрать','взять','брал'],'Брать/взять: radici diverse.'],
['Qual è il perfettivo di «говорить» (nel senso di «dire»)?','сказать',['поговорить','сказать','заговорить'],'Говорить/сказать.']]},
{id:'r-a2-futuro',t:'Il futuro',b:`
<p><b>Futuro composto (НСВ)</b>: <i lang="ru">буду, будешь, будет, будем, будете, будут</i> + infinito imperfettivo. Indica un'azione futura come processo o abitudine: <i lang="ru">Завтра я буду работать весь день.</i></p>
<p><b>Futuro semplice (СВ)</b>: il verbo perfettivo coniugato come un presente. Indica un risultato: <i lang="ru">Завтра я напишу письмо.</i></p>
<p>Il futuro di <i lang="ru">быть</i> è semplicemente <i lang="ru">буду, будешь…</i>: <i lang="ru">Завтра я буду дома.</i></p>
<p>Attenzione: non si dice mai «буду написать» (будет + perfettivo è un errore).</p>`,
ex:[
['Завтра я ___ дома. (sarò)','буду',null,'Futuro di быть: буду.'],
['Вечером мы ___ смотреть фильм.','будем',null,'Мы + будем + infinito imperfettivo.'],
['Я ___ тебе завтра. (позвонить)','позвоню',null,'Perfettivo coniugato = futuro: позвоню.'],
['Они ___ отдыхать на море.','будут',null,'Они + будут.'],
['Quale frase è sbagliata?','Я буду написать письмо.',['Я буду писать письмо.','Я напишу письмо.','Я буду написать письмо.'],'Будет non si usa con i perfettivi.'],
['Ты ___ (сделать) это завтра?','сделаешь',null,'Сделать al futuro: сделаю, сделаешь…']]},
{id:'r-a2-genitivo',t:'Il genitivo singolare',b:`
<p>Il genitivo risponde a <i lang="ru">кого? чего?</i> e si usa:</p>
<p>• per il <b>possesso</b> («di»): <i lang="ru">книга брата, дом мамы</i>;<br>• con <b>нет, не было, не будет</b>: <i lang="ru">У меня нет машины. Вчера не было урока.</i>;<br>• con <b>у</b> per «avere»: <i lang="ru">у брата есть…</i>;<br>• dopo quantità: <i lang="ru">много времени, чашка чая</i>, e i numeri 2–4: <i lang="ru">два брата</i>;<br>• dopo le preposizioni <i lang="ru">из, от, до, без, для, около, после</i>: <i lang="ru">из Италии, до вечера, после урока</i>.</p>
<table><tr><th>nominativo</th><th>genitivo</th></tr>
<tr><td>брат, музей, окно, море</td><td>брат<b>а</b>, музе<b>я</b>, окн<b>а</b>, мор<b>я</b></td></tr>
<tr><td>мама, неделя, дверь</td><td>мам<b>ы</b>, недел<b>и</b>, двер<b>и</b></td></tr></table>
<p>Dopo г, к, х, ж, ш, ч, щ: -и: <i lang="ru">книги, подруги</i>. Pronomi: <i lang="ru">меня, тебя, его (у него), её (у неё), нас, вас, их (у них)</i>.</p>`,
ex:[
['У меня нет ___ (машина).','машины',null,'Нет + genitivo; femminile in -а → -ы.'],
['Это книга ___ (брат).','брата',null,'Possesso: genitivo -а.'],
['Он из ___ (Италия).','Италии',null,'Из + genitivo; -ия → -ии.'],
['Вчера не было ___ (урок).','урока',null,'Не было + genitivo.'],
['Чашка ___ (чай), пожалуйста.','чая/чаю',null,'Quantità: genitivo, чай → чая.'],
['У ___ (сестра) есть кошка.','сестры',null,'У + genitivo.'],
['Я работаю до ___ (вечер).','вечера',null,'До + genitivo.'],
['У меня нет ___ (подруга) в Москве.','подруги',null,'Dopo г si scrive и: подруги.']]},
{id:'r-a2-dativo',t:'Il dativo',b:`
<p>Il dativo risponde a <i lang="ru">кому? чему?</i> (a chi?).</p>
<p>• complemento di termine: <i lang="ru">Я пишу брату. Я звоню маме. Дай мне книгу.</i>;<br>• <b>età</b>: <i lang="ru">Мне 25 лет.</i>;<br>• <b>нравиться</b> («piacere», come in italiano): <i lang="ru">Мне нравится Москва. Ей нравятся цветы.</i>;<br>• frasi impersonali: <i lang="ru">Мне холодно. Ему скучно. Нам надо (нужно) идти. Тебе можно / нельзя.</i>;<br>• <b>к + dativo</b> = da qualcuno (moto): <i lang="ru">Я иду к врачу.</i>;<br>• <b>по + dativo</b>: <i lang="ru">по улице, по телефону, по радио</i>.</p>
<table><tr><th>nominativo</th><th>dativo</th></tr>
<tr><td>брат, музей, окно</td><td>брат<b>у</b>, музе<b>ю</b>, окн<b>у</b></td></tr>
<tr><td>мама, Таня</td><td>мам<b>е</b>, Тан<b>е</b></td></tr>
<tr><td>-ия, -ь (femm.)</td><td>Мари<b>и</b>, двер<b>и</b></td></tr></table>
<p>Pronomi: <i lang="ru">мне, тебе, ему, ей, нам, вам, им</i> (dopo к: <i lang="ru">к нему, к ней, к ним</i>).</p>`,
ex:[
['Я пишу ___ (брат).','брату',null,'A chi? dativo, maschile → -у.'],
['___ двадцать лет. (a me)','Мне',['Я','Меня','Мне'],'L\'età si esprime con il dativo: мне.'],
['Мне ___ эта песня.','нравится',['нравится','нравятся'],'Песня è singolare: нравится.'],
['Ей ___ цветы.','нравятся',['нравится','нравятся'],'Цветы è plurale: нравятся.'],
['Я звоню ___ (мама).','маме',null,'Femminile in -а: dativo -е.'],
['Завтра я иду к ___ (врач).','врачу',null,'К + dativo: врачу.'],
['___ холодно. (a lui)','Ему',['Он','Его','Ему'],'Frase impersonale: dativo ему.'],
['Я подарю цветы ___ (Мария).','Марии',null,'-ия → -ии al dativo.']]},
{id:'r-a2-strumentale',t:'Lo strumentale',b:`
<p>Lo strumentale risponde a <i lang="ru">кем? чем?</i>.</p>
<p>• <b>с + strumentale</b> = «con» (compagnia): <i lang="ru">Я гуляю с другом. Чай с лимоном.</i>;<br>• lo strumento: <i lang="ru">писать ручкой</i>;<br>• professione o ruolo con <b>быть, стать, работать</b>: <i lang="ru">Я работаю врачом. Он хочет стать актёром. Она была студенткой.</i>;<br>• con <b>заниматься, интересоваться, увлекаться</b>: <i lang="ru">Я занимаюсь спортом. Он интересуется историей.</i></p>
<table><tr><th>nominativo</th><th>strumentale</th></tr>
<tr><td>брат, окно</td><td>брат<b>ом</b>, окн<b>ом</b></td></tr>
<tr><td>музей, Игорь, море</td><td>музе<b>ем</b>, Игор<b>ем</b>, мор<b>ем</b></td></tr>
<tr><td>мама, Таня</td><td>мам<b>ой</b>, Тан<b>ей</b></td></tr>
<tr><td>ночь (femm. -ь)</td><td>ноч<b>ью</b></td></tr></table>
<p>Dopo ж, ш, ч, щ, ц non accentati: <i lang="ru">-ем / -ей</i>: <i lang="ru">с товарищем, с Сашей</i>.</p>
<p>Pronomi: <i lang="ru">мной, тобой, им (с ним), ей (с ней), нами, вами, ими (с ними)</i>. «Io e mia sorella» = <i lang="ru">мы с сестрой</i>.</p>`,
ex:[
['Я гуляю с ___ (друг).','другом',null,'С + strumentale; maschile: -ом.'],
['Она работает ___ (врач).','врачом',null,'Professione con работать: strumentale. Dopo ч accentato: -ом.'],
['Мы пьём кофе с ___ (молоко).','молоком',null,'Neutro in -о: -ом.'],
['Я занимаюсь ___ (музыка).','музыкой',null,'Заниматься + strumentale; femminile: -ой.'],
['Ты пойдёшь со ___? (con me)','мной',['мной','меня','мне'],'Со мной = con me.'],
['Он хочет стать ___ (актёр).','актёром/актером',null,'Стать + strumentale.'],
['Come si dice «io e Marco» in russo?','мы с Марко',['я и с Марко','мы с Марко','я с Марко и'],'Costruzione tipica: мы с Марко = io e Marco.']]},
{id:'r-a2-imperativo',t:'L\'imperativo',b:`
<p>Si forma dalla 3ª persona plurale del presente (o futuro perfettivo), togliendo la desinenza:</p>
<table><tr><th>они</th><th>imperativo (ты / вы)</th></tr>
<tr><td>чита-ют</td><td><i lang="ru">читай / читайте</i> (dopo vocale: -й)</td></tr>
<tr><td>говор-ят</td><td><i lang="ru">говори / говорите</i> (dopo consonante: -и)</td></tr>
<tr><td>встан-ут</td><td><i lang="ru">встань / встаньте</i> (accento sulla radice: -ь)</td></tr></table>
<p>Irregolari: <i lang="ru">дать → дай, есть → ешь, пить → пей</i>. «Facciamo…» = <i lang="ru">давай(те) + infinito o 1ª pl.</i>: <i lang="ru">Давай поговорим!</i></p>
<p>In genere: richiesta concreta → perfettivo (<i lang="ru">Скажи, пожалуйста…</i>); divieto → <b>не + imperfettivo</b> (<i lang="ru">Не говори!</i>); invito cortese → imperfettivo (<i lang="ru">Садитесь!</i>).</p>`,
ex:[
['(ты) ___ книгу! (читать)','Читай',null,'Читают → читай.'],
['(вы) ___ медленнее! (говорить)','Говорите',null,'Говорят → говори → говорите.'],
['(ты) ___ мне ручку! (дать)','Дай',null,'Irregolare: дай.'],
['(ты) Не ___ ему! (non dire, divieto)','говори',['скажи','говори'],'Divieto: не + imperfettivo.'],
['___ пойдём в кино! (facciamo, con un amico)','Давай',['Давай','Давайте','Дай'],'Tra amici (ты): давай.'],
['(вы) ___, пожалуйста! (accomodatevi: садиться)','Садитесь',null,'Садиться → садитесь.']]},
{id:'r-a2-moto',t:'Verbi di moto: идти/ходить, ехать/ездить',b:`
<p>Il russo distingue: <b>a piedi</b> (<i lang="ru">идти / ходить</i>) e <b>con un mezzo</b> (<i lang="ru">ехать / ездить</i>).</p>
<p>E distingue anche la direzione:</p>
<table><tr><th>unidirezionale (ora, in una direzione)</th><th>pluridirezionale (abitudine, andata e ritorno)</th></tr>
<tr><td><i lang="ru">идти</i>: иду, идёшь, идут</td><td><i lang="ru">ходить</i>: хожу, ходишь, ходят</td></tr>
<tr><td><i lang="ru">ехать</i>: еду, едешь, едут</td><td><i lang="ru">ездить</i>: езжу, ездишь, ездят</td></tr></table>
<p><i lang="ru">Сейчас я иду в магазин.</i> (sto andando ora) <i lang="ru">Я каждый день хожу в магазин.</i> (abitudine)</p>
<p>Al passato <i lang="ru">ходил / ездил</i> = «sono stato (e tornato)»: <i lang="ru">Вчера я ходил в кино = был в кино.</i></p>
<p>Mezzo: <i lang="ru">ехать на автобусе, на метро, на машине</i>.</p>`,
ex:[
['Сейчас я ___ в университет. (a piedi)','иду',['иду','хожу'],'Ora, in una direzione: идти.'],
['Каждый день я ___ в университет. (a piedi)','хожу',['иду','хожу'],'Abitudine: ходить.'],
['Летом мы ___ в Италию. (ogni anno, con mezzo)','ездим',['едем','ездим'],'Abitudine, con mezzo: ездить.'],
['Куда ты ___? – В Петербург. (ora, in treno)','едешь',['идёшь','едешь','ездишь'],'Ora, con mezzo: ехать.'],
['Вчера мы ___ в театр. (siamo stati, a piedi)','ходили',['шли','ходили'],'Andata e ritorno nel passato: ходили.'],
['Я езжу на работу на ___ (метро).','метро',null,'Метро è invariabile: на метро.']]},
{id:'r-a2-sya',t:'I verbi in -ся',b:`
<p>La particella <b>-ся</b> (dopo vocale <b>-сь</b>) rende il verbo riflessivo, reciproco o intransitivo: <i lang="ru">мыться</i> (lavarsi), <i lang="ru">встречаться</i> (incontrarsi), <i lang="ru">начинаться</i> (cominciare, di cosa).</p>
<table><tr><td>я занимаюсь</td><td>мы занимаемся</td></tr><tr><td>ты занимаешься</td><td>вы занимаетесь</td></tr><tr><td>он занимается</td><td>они занимаются</td></tr></table>
<p>Coppie importanti: <i lang="ru">начинать</i> (qualcuno inizia qualcosa) / <i lang="ru">начинаться</i> (qualcosa inizia): <i lang="ru">Я начинаю урок. Урок начинается в 9.</i> Così anche <i lang="ru">кончать / кончаться</i>.</p>
<p>Altri verbi solo in -ся: <i lang="ru">смеяться, нравиться, улыбаться, бояться</i>.</p>`,
ex:[
['Фильм ___ в семь часов. (начинать/начинаться)','начинается',['начинает','начинается'],'Il film inizia (da solo): начинаться.'],
['Профессор ___ лекцию.','начинает',['начинает','начинается'],'Qualcuno inizia qualcosa: начинать.'],
['Я ___ (заниматься) спортом.','занимаюсь',null,'Я + -юсь (dopo vocale -сь).'],
['Где вы ___ (учиться)?','учитесь',null,'Вы: учитесь (dopo vocale -сь).'],
['Они часто ___ (встречаться).','встречаются',null,'Они: -ются.'],
['Ты ___ (бояться) собак?','боишься',null,'Бояться: боюсь, боишься, боится.']]},
{id:'r-a2-modali',t:'Хотеть, мочь, должен, нужно',b:`
<table><tr><th></th><th>хотеть (volere)</th><th>мочь (potere)</th></tr>
<tr><td>я</td><td>хочу</td><td>могу</td></tr><tr><td>ты</td><td>хочешь</td><td>можешь</td></tr><tr><td>он/она</td><td>хочет</td><td>может</td></tr>
<tr><td>мы</td><td>хотим</td><td>можем</td></tr><tr><td>вы</td><td>хотите</td><td>можете</td></tr><tr><td>они</td><td>хотят</td><td>могут</td></tr></table>
<p><b>Должен</b> (dovere) si accorda col soggetto: <i lang="ru">он должен, она должна, они должны</i>. <i lang="ru">Я должна работать.</i></p>
<p>Costruzioni impersonali col dativo: <i lang="ru">мне нужно (надо)</i> = ho bisogno di / devo; <i lang="ru">можно</i> = si può; <i lang="ru">нельзя</i> = non si può.</p>
<p><i lang="ru">Здесь можно курить? – Нет, здесь нельзя курить.</i> <i lang="ru">Мне нужно купить хлеб.</i></p>
<p><b>Мочь</b> = possibilità; <b>уметь</b> = saper fare: <i lang="ru">Я умею плавать, но сегодня не могу.</i></p>`,
ex:[
['Я ___ (хотеть) чай.','хочу',null,'Хотеть: хочу, хочешь, хочет, хотим, хотите, хотят.'],
['Мы ___ (хотеть) спать.','хотим',null,'Мы хотим.'],
['Ты ___ (мочь) мне помочь?','можешь',null,'Мочь: могу, можешь…'],
['Она ___ много работать. (deve)','должна',['должен','должна','должны'],'Должен si accorda: она должна.'],
['Здесь ___ курить. (non si può)','нельзя',['можно','нельзя','надо'],'Divieto: нельзя.'],
['Он ___ плавать. (sa nuotare)','умеет',['может','умеет'],'Abilità acquisita: уметь.'],
['Мне ___ купить молоко. (devo)','нужно/надо',null,'Мне нужно / надо + infinito.']]},
{id:'r-a2-tempo',t:'Quando? Espressioni di tempo',b:`
<table><tr><th>che cosa</th><th>costruzione</th><th>esempio</th></tr>
<tr><td>giorno della settimana</td><td>в + accusativo</td><td><i lang="ru">в понедельник, в среду, в субботу</i></td></tr>
<tr><td>mese, anno</td><td>в + prepositivo</td><td><i lang="ru">в мае, в 2020 году</i></td></tr>
<tr><td>ora</td><td>в + accusativo</td><td><i lang="ru">в два часа, в пять часов</i></td></tr>
<tr><td>parti del giorno</td><td>avverbi</td><td><i lang="ru">утром, днём, вечером, ночью</i></td></tr>
<tr><td>stagioni</td><td>avverbi</td><td><i lang="ru">зимой, весной, летом, осенью</i></td></tr></table>
<p><i lang="ru">через + accusativo</i> = tra (futuro): <i lang="ru">через неделю</i>. <i lang="ru">… назад</i> = fa: <i lang="ru">неделю назад</i>.</p>
<p>Ore: <i lang="ru">час, два/три/четыре часа, пять часов</i>.</p>`,
ex:[
['Мы встретимся в ___ (суббота).','субботу',null,'Giorno: в + accusativo.'],
['Я родилась в ___ (май).','мае',null,'Mese: в + prepositivo.'],
['___ мы ходим на лыжах. (d\'inverno)','Зимой',['Зима','Зимой','В зиме'],'Stagioni: avverbio зимой.'],
['Урок начинается в пять ___.','часов',['час','часа','часов'],'Con 5: часов.'],
['Он приедет ___ неделю. (tra)','через',['через','назад','в'],'Tra una settimana: через неделю.'],
['Я был в Риме год ___. (fa)','назад',null,'Un anno fa: год назад.']]}
],
words:`ма́ма и па́па|mamma e papà
роди́тели|genitori
сын|figlio
дочь|figlia
муж|marito
жена́|moglie
ба́бушка|nonna
де́душка|nonno
врач|medico
учи́тель|insegnante
студе́нт|studente
университе́т|università
уро́к|lezione
вре́мя|tempo
день|giorno
неде́ля|settimana
ме́сяц|mese
год|anno
у́тром|di mattina
ве́чером|di sera
зимо́й|d'inverno
ле́том|d'estate
понеде́льник|lunedì
суббо́та|sabato
воскресе́нье|domenica
магази́н|negozio
апте́ка|farmacia
вокза́л|stazione
аэропо́рт|aeroporto
биле́т|biglietto
по́езд|treno
авто́бус|autobus
метро́|metropolitana
маши́на|macchina
мо́жно|si può
нельзя́|non si può
ну́жно|bisogna
хоте́ть|volere
мочь|potere
уме́ть|saper fare
идти́ / ходи́ть|andare a piedi
е́хать / е́здить|andare con un mezzo
звони́ть / позвони́ть|telefonare
покупа́ть / купи́ть|comprare
брать / взять|prendere
говори́ть / сказа́ть|dire
начина́ть / нача́ть|cominciare
нра́виться|piacere
занима́ться|occuparsi, fare (sport, studio)
учи́ться|studiare (in una scuola)
встреча́ться|incontrarsi
сего́дня ве́чером|stasera
ча́сто|spesso
иногда́|a volte
всегда́|sempre
никогда́|mai
уже́|già
ещё|ancora`
});
