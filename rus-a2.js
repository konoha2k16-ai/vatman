// Livello A2, parte 1. Spiegazioni semplici + istruzioni anche in russo.
ITA.levels.push({id:'A2',name:'Elementare',topics:[
{id:'r-a2-aspetto',t:'Lezione 1. Due verbi per ogni azione: l\'aspetto',b:`
<p>Questa è la cosa più «russa» della grammatica. Quasi ogni verbo ha <b>due versioni</b>: una per il <b>processo</b> e una per il <b>risultato</b>.</p>
<h4>Passo 1: un esempio con la pizza</h4>
<p><i lang="ru">Я ел пиццу.</i> = Mangiavo la pizza / ho mangiato pizza (il processo, forse non l'ho finita).<br><i lang="ru">Я съел пиццу.</i> = Ho mangiato tutta la pizza (risultato: la pizza non c'è più!).</p>
<h4>Passo 2: le coppie</h4>
<table><tr><th>processo (imperfettivo)</th><th>risultato (perfettivo)</th><th>significato</th></tr>
<tr><td>делать</td><td>сделать</td><td>fare</td></tr>
<tr><td>писать</td><td>написать</td><td>scrivere</td></tr>
<tr><td>читать</td><td>прочитать</td><td>leggere</td></tr>
<tr><td>смотреть</td><td>посмотреть</td><td>guardare</td></tr>
<tr><td>звонить</td><td>позвонить</td><td>telefonare</td></tr>
<tr><td>покупать</td><td>купить</td><td>comprare</td></tr>
<tr><td>говорить</td><td>сказать</td><td>dire</td></tr></table>
<h4>Passo 3: quando uso il «processo»?</h4>
<p>• quando un'azione si <b>ripete</b>: <i lang="ru">Я каждый день читаю.</i><br>• quando <b>dura</b>: <i lang="ru">Я долго писал письмо.</i><br>• quando conta il fatto, non il risultato: <i lang="ru">Ты смотрел этот фильм?</i> (l'hai visto?)</p>
<h4>Passo 4: quando uso il «risultato»?</h4>
<p>• quando l'azione è <b>finita, una volta</b>: <i lang="ru">Я написал письмо.</i> (eccola, è pronta)<br>• quando le azioni vengono <b>una dopo l'altra</b>: <i lang="ru">Он пришёл, поел и лёг спать.</i></p>
<p class="tip"><b>Trucco:</b> «mentre / spesso / sempre / ogni giorno» → processo. «Ecco fatto / finalmente / già» → risultato.</p>`,
words:`де́лать / сде́лать|fare
писа́ть / написа́ть|scrivere
чита́ть / прочита́ть|leggere
смотре́ть / посмотре́ть|guardare
звони́ть / позвони́ть|telefonare
покупа́ть / купи́ть|comprare
говори́ть / сказа́ть|parlare / dire
есть / съесть|mangiare
пить / вы́пить|bere
учи́ть / вы́учить|imparare
ка́ждый день|ogni giorno
всегда́|sempre
ча́сто|spesso
уже́|già
наконе́ц|finalmente
до́лго|a lungo`,
ex:[
['Я каждый день ___ маме. (звонить / позвонить)','звоню',['звоню','позвоню'],'Ogni giorno = ripetizione → processo: звоню.'],
['Вчера я ___ письмо, вот оно! (писать / написать)','написал',['писал','написал'],'Il risultato è pronto → написал.'],
['Ты ___ этот фильм? (l\'hai mai visto?)','смотрел',['смотрел','посмотрел'],'Domanda sul fatto in generale → processo.'],
['Я долго ___ книгу. (читать / прочитать)','читал',['читал','прочитал'],'Долго (a lungo) → processo.'],
['Наконец я ___ книгу! (читать / прочитать)','прочитал',['читал','прочитал'],'Наконец = risultato → прочитал.'],
['Он пришёл, ___ и лёг спать. (mangiò)','поел',['ел','поел'],'Azioni in sequenza → perfettivo.'],
['Выберите: «Ho comprato il pane» (una volta, è a casa)','Я купил хлеб',['Я покупал хлеб','Я купил хлеб'],'Risultato → купил.'],
['Выберите: «Compravo sempre il pane qui»','Я всегда покупал хлеб здесь',['Я всегда купил хлеб здесь','Я всегда покупал хлеб здесь'],'Всегда → processo.'],
['Coppia di «делать»:','сделать',['поделать','сделать','заделать'],'Делать / сделать.'],
['Coppia di «говорить» (dire):','сказать',['поговорить','сказать'],'Говорить / сказать: radici diverse!'],
['Вставьте: Я уже ___ (выучить) слова.','выучил',null,'Уже + risultato → выучил.'],
['Вставьте: Ты часто ___ (смотреть) телевизор?','смотришь',null,'Часто → processo: смотришь.'],
['Составьте предложение: «Ho già comprato i biglietti.»','Я уже купил билеты','order','Я + уже + купил + билеты.'],
['Составьте предложение: «Ogni giorno leggo il giornale.»','Каждый день я читаю газету/Я каждый день читаю газету','order','Каждый день + я читаю + газету.'],
['Traduci: «Ho scritto la lettera.» (uomo)','я написал письмо',null,'Я написал письмо: risultato.']],
test:[
['Мы всегда ___ кофе утром. (пить / выпить)','пьём/пьем',['пьём','выпьем'],'Всегда → processo.'],
['Я ___ всё молоко. Его больше нет. (пить / выпить)','выпил',['пил','выпил'],'Il latte è finito → risultato.'],
['Вчера я весь вечер ___ фильмы. (смотреть)','смотрел',['смотрел','посмотрел'],'Весь вечер = durata → processo.'],
['Ты уже ___ маме? (позвонить)','позвонил',['звонил','позвонил'],'Уже + risultato.'],
['Она ___ новую машину. (comprò)','купила',['покупала','купила'],'Una volta, risultato.'],
['Coppia di «покупать»:','купить',['покупить','купить'],'Покупать / купить.'],
['Выберите processo:','читать',['читать','прочитать'],'Читать = processo.'],
['Вставьте: Он ___ (сказать), что придёт.','сказал',null,'Сказать → сказал.'],
['Составьте предложение: «Hai fatto i compiti?»','Ты сделал домашнее задание','order','Ты + сделал + домашнее задание.'],
['Traduci: «Ho letto il libro.» (tutto)','я прочитал книгу',null,'Прочитал = l\'ho finito.']]},

{id:'r-a2-futuro',t:'Lezione 2. Il futuro',b:`
<p>Il futuro russo dipende dall'aspetto (lezione 1). Ci sono <b>due modi</b>.</p>
<h4>Modo 1: processo → буду + infinito</h4>
<p><i lang="ru">буду, будешь, будет, будем, будете, будут</i> + verbo all'infinito:<br><i lang="ru">Завтра я буду работать.</i> = Domani lavorerò.<br><i lang="ru">Что ты будешь делать?</i> = Cosa farai?</p>
<h4>Modo 2: risultato → verbo perfettivo «al presente»</h4>
<p>Il verbo perfettivo con le desinenze del presente <b>significa futuro</b>:<br><i lang="ru">Я напишу тебе.</i> = Ti scriverò.<br><i lang="ru">Я позвоню завтра.</i> = Telefonerò domani.<br><i lang="ru">Мы купим билеты.</i> = Compreremo i biglietti.</p>
<h4>Passo 3: attenzione!</h4>
<p>Mai «я буду написать». <b>Буду</b> va solo con il processo (imperfettivo).</p>
<h4>Passo 4: il futuro di «essere»</h4>
<p><i lang="ru">Завтра я буду дома.</i> = Domani sarò a casa. <i lang="ru">Будет холодно.</i> = Farà freddo.</p>
<h4>Passo 5: con если e когда</h4>
<p>Dopo «se» e «quando» per il futuro si usa il futuro (non il presente come in italiano parlato): <i lang="ru">Когда я приеду, я позвоню.</i></p>`,
words:`за́втра|domani
послеза́втра|dopodomani
ско́ро|presto, tra poco
пото́м|poi, dopo
на сле́дующей неде́ле|la prossima settimana
в бу́дущем|in futuro
бу́ду|sarò (aiuto per il futuro)
план|piano, progetto
мечта́ть|sognare
путеше́ствовать|viaggiare
о́тпуск|ferie
пое́хать|partire (con mezzo)
пойти́|andare (a piedi, partire)
встре́титься|incontrarsi
е́сли|se
когда́|quando`,
ex:[
['Завтра я ___ работать.','буду',['буду','будет','был'],'Я → буду.'],
['Что ты ___ делать вечером?','будешь',['буду','будешь','будет'],'Ты → будешь.'],
['Мы ___ смотреть фильм.','будем',null,'Мы → будем.'],
['Они ___ отдыхать на море.','будут',null,'Они → будут.'],
['Я ___ тебе завтра. (позвонить)','позвоню',null,'Perfettivo al presente = futuro: позвоню.'],
['Мы ___ билеты. (купить)','купим',null,'Купить → купим (futuro).'],
['Выберите правильный вариант:','Я напишу письмо',['Я буду написать письмо','Я напишу письмо'],'Буду solo con l\'imperfettivo.'],
['Завтра ___ холодно. (farà)','будет',['будет','был','есть'],'Futuro di быть: будет.'],
['Когда я ___, я позвоню. (приехать)','приеду',['приезжаю','приеду'],'Dopo когда per il futuro: приеду.'],
['Если ___ дождь, мы не пойдём.','будет',['есть','будет','был'],'Se pioverà → если будет дождь.'],
['Вставьте: Летом мы ___ (поехать) в Италию.','поедем',null,'Поехать → поедем.'],
['Вставьте: Вечером я ___ (читать).','буду читать',null,'Processo → буду читать.'],
['Составьте предложение: «Domani sarò a casa.»','Завтра я буду дома/Я завтра буду дома','order','Завтра + я + буду + дома.'],
['Составьте предложение: «Cosa farai domani?»','Что ты будешь делать завтра/Что ты завтра будешь делать','order','Что + ты + будешь + делать + завтра.'],
['Traduci: «Ti chiamerò.»','я тебе позвоню/я позвоню тебе',null,'Я тебе позвоню.']],
test:[
['Вы ___ работать в субботу?','будете',null,'Вы → будете.'],
['Она ___ ужин. (приготовить)','приготовит',null,'Perfettivo → приготовит.'],
['Скоро ___ Новый год. (sarà)','будет',null,'Будет.'],
['Quale è sbagliato?','Я буду купить',['Я буду покупать','Я куплю','Я буду купить'],'Буду + perfettivo è un errore.'],
['Когда ты ___, напиши. (прийти)','придёшь/придешь',null,'Futuro: придёшь.'],
['Я ___ тебя ждать. (будет/буду)','буду',['буду','будет'],'Я → буду.'],
['Вставьте: Мы ___ (встретиться) завтра.','встретимся',null,'Встретиться → встретимся.'],
['Выберите: «Domani pioverà»','Завтра будет дождь',['Завтра есть дождь','Завтра будет дождь'],'Будет дождь.'],
['Составьте предложение: «Compreremo una casa.»','Мы купим дом','order','Мы + купим + дом.'],
['Traduci: «Domani lavorerò.»','завтра я буду работать/я завтра буду работать/завтра буду работать',null,'Завтра я буду работать.']]},

{id:'r-a2-genitivo',t:'Lezione 3. «Di», «non c\'è», «tanti»: il genitivo',b:`
<p>Il <b>genitivo</b> è il caso più usato dopo il nominativo. Risponde alle domande <b>кого? чего?</b> (di chi? di che cosa?).</p>
<h4>Passo 1: le desinenze</h4>
<table><tr><th>parola</th><th>regola</th><th>genitivo</th></tr>
<tr><td>брат, стол (m.)</td><td>+ а</td><td>брат<b>а</b>, стол<b>а</b></td></tr>
<tr><td>музей, словарь (m. molli)</td><td>й/ь → я</td><td>музе<b>я</b>, словар<b>я</b></td></tr>
<tr><td>окно (n.)</td><td>о → а</td><td>окн<b>а</b></td></tr>
<tr><td>мама (f.)</td><td>а → ы</td><td>мам<b>ы</b></td></tr>
<tr><td>неделя, книга, ночь</td><td>я / г+а / ь → и</td><td>недел<b>и</b>, книг<b>и</b>, ноч<b>и</b></td></tr></table>
<h4>Passo 2: quando si usa?</h4>
<p>1. <b>«di»</b>: <i lang="ru">книга брата</i> (il libro del fratello), <i lang="ru">центр города</i>.<br>2. <b>dopo нет</b>: <i lang="ru">нет времени, нет денег, нет брата</i>.<br>3. <b>quantità</b>: <i lang="ru">чашка чая</i> (una tazza di tè), <i lang="ru">много работы, мало времени</i>.<br>4. <b>dopo у, из, от, до, без, для, после</b>: <i lang="ru">у мамы, из Италии, без сахара, для тебя, после работы</i>.</p>
<h4>Passo 3: i pronomi</h4>
<p><i lang="ru">меня, тебя, его (у него), её (у неё), нас, вас, их (у них)</i>. Sono uguali all'accusativo!</p>
<p class="tip"><b>Trucco:</b> «senza zucchero, per te, dopo il lavoro, dall'Italia»: tutte queste preposizioni vogliono il genitivo.</p>`,
words:`без|senza
для|per
по́сле|dopo
из|da (provenienza)
у|presso, da
до|fino a
мно́го|molto, tanti
ма́ло|poco
ча́шка|tazza
буты́лка|bottiglia
кусо́к|pezzo
килогра́мм|chilo
са́хар|zucchero
де́ньги|soldi
вре́мя|tempo
сыр|formaggio`,
ex:[
['Это книга ___. (брат)','брата',null,'«Di» → genitivo: брата.'],
['У меня нет ___. (машина)','машины',null,'Нет + genitivo: машины.'],
['Чашка ___. (чай)','чая/чаю',null,'Quantità → чая.'],
['Я из ___. (Италия)','Италии',null,'Из + genitivo: Италии.'],
['Кофе без ___. (сахар)','сахара',null,'Без + genitivo: сахара.'],
['Это подарок для ___. (мама)','мамы',null,'Для + genitivo: мамы.'],
['После ___ я иду домой. (работа)','работы',null,'После + genitivo: работы.'],
['У ___ есть сестра? (тебя/ты)','тебя',['ты','тебя','тебе'],'У + тебя.'],
['У меня много ___. (работа)','работы',null,'Много + genitivo.'],
['Нет ___. (время)','времени',null,'Время → времени (speciale).'],
['Выберите правильный вариант: «una bottiglia d\'acqua»','бутылка воды',['бутылка вода','бутылка воды','бутылка воду'],'Quantità → genitivo: воды.'],
['Выберите: «presso il fratello»','у брата',['у брат','у брата','у брату'],'У + genitivo.'],
['Составьте предложение: «Non ho soldi.»','У меня нет денег','order','У меня нет + денег (genitivo di деньги).'],
['Составьте предложение: «Un caffè senza zucchero, per favore.»','Кофе без сахара пожалуйста','order','Кофе + без сахара + пожалуйста.'],
['Traduci: «il centro della città»','центр города',null,'Город → города.']],
test:[
['Это машина ___. (папа)','папы',null,'Папа → папы.'],
['У нас нет ___. (хлеб)','хлеба',null,'Нет + хлеба.'],
['Я из ___. (Москва)','Москвы',null,'Из Москвы.'],
['Килограмм ___. (сыр)','сыра',null,'Quantità.'],
['До ___ два часа. (Рим)','Рима',null,'До + genitivo.'],
['Это для ___. (ты)','тебя',null,'Для тебя.'],
['Мало ___. (время)','времени',null,'Мало времени.'],
['Выберите: «la stanza di mia sorella»','комната сестры',['комната сестра','комната сестры'],'Di → genitivo.'],
['Составьте предложение: «Vengo dall\'Italia.»','Я из Италии','order','Я + из Италии.'],
['Traduci: «senza te»','без тебя',null,'Без тебя.']]},

{id:'r-a2-dativo',t:'Lezione 4. «A chi?»: il dativo',b:`
<p>Il <b>dativo</b> risponde alla domanda <b>кому?</b> (a chi?). In italiano si usa «a»: do <b>a</b> Maria, telefono <b>alla</b> mamma.</p>
<h4>Passo 1: le desinenze</h4>
<table><tr><th>parola</th><th>regola</th><th>dativo</th></tr>
<tr><td>брат (m.), окно (n.)</td><td>+ у / о → у</td><td>брат<b>у</b>, окн<b>у</b></td></tr>
<tr><td>музей, учитель</td><td>й/ь → ю</td><td>музе<b>ю</b>, учител<b>ю</b></td></tr>
<tr><td>мама, неделя</td><td>а/я → е</td><td>мам<b>е</b>, недел<b>е</b></td></tr>
<tr><td>Мария, дочь</td><td>-ия → -ии, ь → и</td><td>Мари<b>и</b>, дочер<b>и</b></td></tr></table>
<h4>Passo 2: i pronomi (importantissimi!)</h4>
<p><i lang="ru">мне, тебе, ему, ей, нам, вам, им</i>.</p>
<h4>Passo 3: quando si usa?</h4>
<p>1. <b>Dare, dire, scrivere, telefonare a qualcuno</b>: <i lang="ru">Я звоню маме. Я пишу брату. Дай мне!</i><br>2. <b>L'età</b>: <i lang="ru">Мне 30 лет.</i><br>3. <b>Mi piace</b>: <i lang="ru">Мне нравится Москва.</i> (lett. «a me piace»)<br>4. <b>Come mi sento</b>: <i lang="ru">Мне холодно, мне скучно, мне хорошо.</i><br>5. <b>Devo, posso</b>: <i lang="ru">Мне надо идти. Тебе можно.</i><br>6. <b>Andare da</b>: <i lang="ru">к</i> + dativo: <i lang="ru">Я иду к врачу.</i></p>
<p class="warn"><b>Attenzione:</b> <i lang="ru">звонить</i> e <i lang="ru">помогать</i> vogliono il dativo: <i lang="ru">Я помогаю брату</i> (aiuto mio fratello).</p>`,
words:`дава́ть / дать|dare
помога́ть / помо́чь|aiutare
звони́ть|telefonare
дари́ть / подари́ть|regalare
отвеча́ть|rispondere
нра́виться|piacere
мне|a me
тебе́|a te
ему́|a lui
ей|a lei
нам|a noi
вам|a voi
им|a loro
пода́рок|regalo
ску́чно|noioso, mi annoio
к|verso, da (persona)`,
ex:[
['Я звоню ___. (мама)','маме',null,'Звонить кому? → маме.'],
['Я пишу ___. (брат)','брату',null,'Писать кому? → брату.'],
['Дай ___ книгу! (a me)','мне',null,'A me = мне.'],
['___ нравится Москва. (a me)','Мне',['Я','Меня','Мне'],'Mi piace → мне нравится.'],
['___ 25 лет. (a lui)','Ему',['Он','Его','Ему'],'L\'età col dativo: ему.'],
['___ холодно. (a lei)','Ей',['Она','Её','Ей'],'Sensazione col dativo: ей.'],
['Я помогаю ___. (папа)','папе',null,'Помогать кому? → папе.'],
['Я иду к ___. (врач)','врачу',null,'К + dativo.'],
['Мы подарили ___ цветы. (Мария)','Марии',null,'-ия → -ии.'],
['___ надо работать. (a noi)','Нам',null,'Надо + dativo: нам.'],
['Выберите: «Mi piacciono i film»','Мне нравятся фильмы',['Я нравлюсь фильмы','Мне нравятся фильмы','Мне нравится фильмы'],'Plurale → нравятся.'],
['Выберите: «Ti scrivo»','Я тебе пишу',['Я тебя пишу','Я тебе пишу'],'Писать кому → тебе.'],
['Составьте предложение: «Mi piace la Russia.»','Мне нравится Россия','order','Мне + нравится + Россия.'],
['Составьте предложение: «Telefono a mio fratello.»','Я звоню брату','order','Я звоню + брату.'],
['Traduci: «Ho freddo.»','мне холодно',null,'Мне холодно.']],
test:[
['Я позвоню ___. (сестра)','сестре',null,'Сестра → сестре.'],
['Скажи ___ правду! (a lei)','ей',null,'A lei = ей.'],
['___ скучно. (a loro)','Им',null,'Им скучно.'],
['Сколько ___ лет? (a te)','тебе',null,'Тебе.'],
['Я иду к ___. (друг)','другу',null,'К другу.'],
['Мы помогаем ___. (мама)','маме',null,'Маме.'],
['___ нравится этот фильм? (a voi)','Вам',null,'Вам.'],
['Выберите: «Aiuto il papà»','Я помогаю папе',['Я помогаю папу','Я помогаю папе'],'Помогать + dativo.'],
['Составьте предложение: «Quanti anni hai?»','Сколько тебе лет','order','Сколько + тебе + лет.'],
['Traduci: «Mi piace.»','мне нравится',null,'Мне нравится.']]},

{id:'r-a2-strumentale',t:'Lezione 5. «Con»: lo strumentale',b:`
<p>Lo <b>strumentale</b> risponde a <b>кем? чем?</b> (con chi? con che cosa?).</p>
<h4>Passo 1: le desinenze</h4>
<table><tr><th>parola</th><th>regola</th><th>strumentale</th></tr>
<tr><td>брат, окно</td><td>+ ом / о → ом</td><td>брат<b>ом</b>, окн<b>ом</b></td></tr>
<tr><td>учитель, музей, море</td><td>→ ем</td><td>учител<b>ем</b>, музе<b>ем</b>, мор<b>ем</b></td></tr>
<tr><td>мама</td><td>а → ой</td><td>мам<b>ой</b></td></tr>
<tr><td>неделя</td><td>я → ей</td><td>недел<b>ей</b></td></tr>
<tr><td>дочь, ночь</td><td>ь → ью</td><td>дочер<b>ью</b>, ноч<b>ью</b></td></tr></table>
<h4>Passo 2: i pronomi</h4>
<p><i lang="ru">мной, тобой, им, ей, нами, вами, ими</i>: <i lang="ru">со мной</i> (con me), <i lang="ru">с тобой</i> (con te).</p>
<h4>Passo 3: quando si usa?</h4>
<p>1. <b>с</b> = con: <i lang="ru">кофе с молоком, я гуляю с собакой, мы с тобой</i>.<br>2. <b>Lavoro, chi diventi</b>: <i lang="ru">Я работаю врачом. Я хочу стать актёром.</i><br>3. <b>Strumento</b> (senza с!): <i lang="ru">пишу ручкой</i>.<br>4. <b>Fare sport, interessarsi</b>: <i lang="ru">заниматься спортом, интересоваться музыкой</i>.</p>
<h4>«Io e te»</h4>
<p>«Io e mio fratello» = <i lang="ru">мы с братом</i>. «Io e te» = <i lang="ru">мы с тобой</i>.</p>`,
words:`с|con
гуля́ть|passeggiare
стать|diventare
занима́ться|fare (sport), studiare
интересова́ться|interessarsi
спорт|sport
молоко́|latte
лимо́н|limone
соба́ка|cane
ру́чка|penna
ло́жка|cucchiaio
со мной|con me
с тобо́й|con te
вме́сте|insieme
профе́ссия|professione`,
ex:[
['Кофе с ___. (молоко)','молоком',null,'С + strumentale: молоком.'],
['Чай с ___. (лимон)','лимоном',null,'Лимон → лимоном.'],
['Я гуляю с ___. (собака)','собакой',null,'Собака → собакой.'],
['Я работаю ___. (врач)','врачом',null,'Lavoro → strumentale: врачом.'],
['Он хочет стать ___. (актёр)','актёром/актером',null,'Стать кем? → актёром.'],
['Я занимаюсь ___. (спорт)','спортом',null,'Заниматься чем? → спортом.'],
['Пойдём со ___! (me)','мной',null,'Со мной = con me.'],
['Я хочу быть с ___. (te)','тобой',null,'С тобой.'],
['Мы с ___ идём в кино. (брат)','братом',null,'Мы с братом = io e mio fratello.'],
['Я пишу ___. (ручка)','ручкой',['с ручкой','ручкой'],'Strumento: senza с → ручкой.'],
['Выберите: «io e la mamma»','мы с мамой',['я и с мамой','мы с мамой','я с мама'],'Мы с мамой.'],
['Выберите: «Lei lavora come insegnante»','Она работает учителем',['Она работает учитель','Она работает учителем'],'Strumentale: учителем.'],
['Составьте предложение: «Vieni con me!»','Пойдём со мной','order','Пойдём + со мной.'],
['Составьте предложение: «Io e te siamo insieme.»','Мы с тобой вместе','order','Мы с тобой + вместе.'],
['Traduci: «tè con limone»','чай с лимоном',null,'Чай с лимоном.']],
test:[
['Я живу с ___. (подруга)','подругой',null,'Подруга → подругой.'],
['Он работает ___. (инженер)','инженером',null,'Инженер → инженером.'],
['Мы говорили с ___. (учитель)','учителем',null,'Учитель → учителем.'],
['Ты пойдёшь со ___? (me)','мной',null,'Со мной.'],
['Она интересуется ___. (музыка)','музыкой',null,'Музыка → музыкой.'],
['Пицца с ___. (сыр)','сыром',null,'Сыр → сыром.'],
['Мы с ___ друзья. (lei)','ней',['она','ей','ней'],'Dopo с: ней.'],
['Выберите: «Mangio con il cucchiaio»','Я ем ложкой',['Я ем с ложкой','Я ем ложкой'],'Strumento senza с.'],
['Составьте предложение: «Io e Nastja viviamo a Mosca.»','Мы с Настей живём в Москве','order','Мы с Настей + живём + в Москве.'],
['Traduci: «con te»','с тобой',null,'С тобой.']]},

{id:'r-a2-imperativo',t:'Lezione 6. Fai! Dimmi! L\'imperativo',b:`
<p>L'imperativo serve per chiedere, invitare, dare consigli.</p>
<h4>Passo 1: come si fa</h4>
<p>Prendi la forma <b>«они»</b> (loro) e togli la fine (-ют, -ут, -ят, -ат):</p>
<p>• se resta una <b>vocale</b> → aggiungi <b>-й</b>: <i lang="ru">чита-ют → читай!, слуша-ют → слушай!</i><br>• se resta una <b>consonante</b> → aggiungi <b>-и</b>: <i lang="ru">говор-ят → говори!, пиш-ут → пиши!, смотр-ят → смотри!</i></p>
<h4>Passo 2: per «вы» (voi, Lei)</h4>
<p>Aggiungi <b>-те</b>: <i lang="ru">читайте, говорите, смотрите</i>.</p>
<h4>Passo 3: i più comuni</h4>
<p><i lang="ru">Скажи! (dimmi) Позвони! (telefona) Подожди! (aspetta) Дай! (dai) Иди сюда! (vieni qui) Смотри! (guarda) Извини! (scusa) Садись! (siediti)</i></p>
<h4>Passo 4: «facciamo!» = давай</h4>
<p><i lang="ru">Давай пойдём в кино!</i> = Dai, andiamo al cinema! <i lang="ru">Давай поговорим.</i> = Parliamo.</p>
<h4>Passo 5: gentilezza</h4>
<p>Aggiungi <i lang="ru">пожалуйста</i>: <i lang="ru">Скажите, пожалуйста, где метро?</i></p>`,
words:`скажи́|dimmi
позвони́|chiama, telefona
подожди́|aspetta
дай|dai, dammi
иди́ сюда́|vieni qui
смотри́|guarda
извини́|scusa
извини́те|mi scusi
сади́сь|siediti
помоги́|aiuta
пиши́|scrivi
дава́й|dai, facciamo
пожа́луйста|per favore
не волну́йся|non preoccuparti
слу́шай|ascolta`,
ex:[
['читать → ___! (tu)','читай',null,'Чита-ют → читай.'],
['говорить → ___! (tu)','говори',null,'Говор-ят → говори.'],
['писать → ___! (tu)','пиши',null,'Пиш-ут → пиши.'],
['слушать → ___! (tu)','слушай',null,'Слуша-ют → слушай.'],
['смотреть → ___! (voi)','смотрите',null,'Смотри + те.'],
['___, пожалуйста, где метро? (dica, Lei)','Скажите',['Скажи','Скажите'],'Per la cortesia: скажите.'],
['___ мне завтра! (chiamami)','Позвони',null,'Позвонить → позвони.'],
['___ пойдём в кино! (dai)','Давай',['Давай','Дай'],'Proposta: давай.'],
['___! Я опаздываю. (scusa, tu)','Извини',['Извини','Извините'],'Con un amico: извини.'],
['Не ___! Всё будет хорошо.','волнуйся',null,'Не волнуйся = non preoccuparti.'],
['Выберите правильный вариант:','Помоги мне, пожалуйста',['Помогай мне, пожалуйста','Помоги мне, пожалуйста'],'Помочь → помоги.'],
['Выберите: «Siediti!»','Садись',['Сиди','Садись'],'Садись = siediti.'],
['Составьте предложение: «Vieni qui, per favore.»','Иди сюда пожалуйста','order','Иди сюда + пожалуйста.'],
['Составьте предложение: «Dai, parliamo.»','Давай поговорим','order','Давай + поговорим.'],
['Traduci: «Aspetta!»','подожди',null,'Подожди!']],
test:[
['делать → ___! (tu)','делай',null,'Дела-ют → делай.'],
['звонить → ___! (tu)','звони',null,'Звон-ят → звони.'],
['читать → ___! (voi)','читайте',null,'Читай + те.'],
['___ мне книгу! (dai)','Дай',['Дай','Давай'],'Dare → дай.'],
['___, пожалуйста! (mi scusi)','Извините',['Извини','Извините'],'Cortesia.'],
['___ сюда! (vieni)','Иди',['Иди','Идёшь'],'Иди сюда.'],
['Не ___, я скоро приду. (non preoccuparti)','волнуйся',null,'Не волнуйся.'],
['Выберите: «Guarda!»','Смотри',['Смотри','Смотрит'],'Смотри!'],
['Составьте предложение: «Scrivimi domani.»','Напиши мне завтра','order','Напиши + мне + завтра.'],
['Traduci: «Dimmi!»','скажи',null,'Скажи!']]}
]});
