// Livello A2, parte 2.
ITA.levels.find(l=>l.id==='A2').topics.push(
{id:'r-a2-moto',t:'Lezione 7. Andare: идти o ходить?',b:`
<p>In russo «andare» ha <b>quattro</b> verbi. Sembra tanto, ma la logica è semplice.</p>
<h4>Passo 1: a piedi o con un mezzo?</h4>
<p><b>A piedi</b>: <i lang="ru">идти / ходить</i>. <b>Con un mezzo</b> (auto, treno, autobus, aereo): <i lang="ru">ехать / ездить</i>.</p>
<h4>Passo 2: una direzione o «avanti e indietro»?</h4>
<table><tr><th></th><th>una direzione, adesso</th><th>abitudine, andata e ritorno</th></tr>
<tr><td>a piedi</td><td>идти: иду, идёшь</td><td>ходить: хожу, ходишь</td></tr>
<tr><td>con un mezzo</td><td>ехать: еду, едешь</td><td>ездить: езжу, ездишь</td></tr></table>
<p><i lang="ru">Сейчас я иду в магазин.</i> = Adesso sto andando al negozio.<br><i lang="ru">Я часто хожу в магазин.</i> = Vado spesso al negozio (abitudine).<br><i lang="ru">Я еду на работу на метро.</i> = Sto andando al lavoro in metro.<br><i lang="ru">Каждое лето я езжу на море.</i> = Ogni estate vado al mare.</p>
<h4>Passo 3: il passato «sono stato» = ходил / ездил</h4>
<p><i lang="ru">Вчера я ходил в кино.</i> = Ieri sono andato al cinema (e sono tornato).<br><i lang="ru">Летом мы ездили в Италию.</i> = D'estate siamo andati in Italia.</p>
<h4>Passo 4: il mezzo</h4>
<p><b>на</b> + mezzo al prepositivo: <i lang="ru">на машине, на поезде, на автобусе, на самолёте, на метро</i>. A piedi = <i lang="ru">пешком</i>.</p>
<p class="tip"><b>Trucco:</b> «adesso, in questo momento, sto andando» → идти/ехать. «Spesso, ogni giorno, ieri (andata e ritorno)» → ходить/ездить.</p>`,
words:`идти́|andare a piedi (ora)
ходи́ть|andare a piedi (spesso)
е́хать|andare con mezzo (ora)
е́здить|andare con mezzo (spesso)
пешко́м|a piedi
на маши́не|in macchina
на по́езде|in treno
на самолёте|in aereo
на авто́бусе|in autobus
лета́ть|volare
сейча́с|adesso
ча́сто|spesso
ка́ждое ле́то|ogni estate
доро́га|strada, viaggio
вокза́л|stazione`,
ex:[
['Сейчас я ___ в магазин. (a piedi)','иду',['иду','хожу'],'Adesso, una direzione → иду.'],
['Я часто ___ в кино. (a piedi)','хожу',['иду','хожу'],'Spesso → хожу.'],
['Куда ты ___? (ora, in macchina)','едешь',['едешь','ездишь'],'Ora + mezzo → едешь.'],
['Каждое лето мы ___ на море.','ездим',['едем','ездим'],'Ogni estate → ездим.'],
['Вчера я ___ в театр. (a piedi, andata e ritorno; uomo)','ходил',['шёл','ходил'],'Andata e ritorno → ходил.'],
['Летом мы ___ в Италию. (con mezzo, siamo stati)','ездили',['ехали','ездили'],'Siamo stati → ездили.'],
['Я еду на работу на ___. (метро)','метро',null,'Метро non cambia.'],
['Мы едем на ___. (поезд)','поезде',null,'На + prepositivo: поезде.'],
['Он ходит на работу ___. (a piedi)','пешком',null,'A piedi = пешком.'],
['Выберите: «Il bambino già cammina»','Ребёнок уже ходит',['Ребёнок уже идёт','Ребёнок уже ходит'],'Capacità → ходить.'],
['Выберите: «Vado a Mosca in treno»','Я еду в Москву на поезде',['Я иду в Москву','Я еду в Москву на поезде'],'Lontano, con un mezzo → ехать.'],
['Вставьте: Они ___ (ехать) домой.','едут',null,'Ехать: они едут.'],
['Составьте предложение: «Di solito vado al lavoro in autobus.»','Я езжу на работу на автобусе/Я езжу на автобусе на работу','order','Abitudine: Я езжу + на работу + на автобусе.'],
['Составьте предложение: «Dove stai andando?»','Куда ты идёшь','order','Куда + ты + идёшь.'],
['Traduci: «Ieri sono andato al cinema.» (uomo)','вчера я ходил в кино/я вчера ходил в кино/вчера ходил в кино',null,'Andata e ritorno → ходил.']],
test:[
['Смотри, ___ автобус! (sta arrivando)','идёт/идет',['идёт','ходит'],'Ora → идёт (anche per i mezzi pubblici!).'],
['Я каждый день ___ в спортзал. (a piedi)','хожу',['иду','хожу'],'Ogni giorno → хожу.'],
['Мы сейчас ___ в аэропорт. (in taxi)','едем',['едем','ездим'],'Ora + mezzo.'],
['Ты ___ в Россию? (sei mai stato?)','ездил',['ехал','ездил'],'Esperienza → ездил.'],
['Она ___ на работу на машине. (abitualmente)','ездит',['едет','ездит'],'Abitudine.'],
['Я лечу на ___. (самолёт)','самолёте',null,'На самолёте.'],
['Вставьте: Мы ___ (идти) домой.','идём/идем',null,'Идти: мы идём.'],
['Выберите: «Vado spesso al parco»','Я часто хожу в парк',['Я часто иду в парк','Я часто хожу в парк'],'Часто → хожу.'],
['Составьте предложение: «D\'estate siamo andati al mare.»','Летом мы ездили на море/Мы летом ездили на море','order','Летом + мы ездили + на море.'],
['Traduci: «Vado a casa.» (a piedi, ora)','я иду домой',null,'Я иду домой.']]},

{id:'r-a2-sya',t:'Lezione 8. I verbi con -ся',b:`
<p>Alcuni verbi finiscono in <b>-ся</b> (dopo vocale <b>-сь</b>). È come il «si» italiano: <i lang="ru">мыться</i> = lavarsi.</p>
<h4>Passo 1: come si coniugano</h4>
<p>Coniughi il verbo normalmente e aggiungi <b>-ся</b> (dopo consonante) o <b>-сь</b> (dopo vocale):</p>
<table><tr><th>заниматься (studiare, fare sport)</th></tr>
<tr><td>я занимаю<b>сь</b>, ты занимаешь<b>ся</b>, он занимает<b>ся</b>, мы занимаем<b>ся</b>, вы занимаете<b>сь</b>, они занимают<b>ся</b></td></tr></table>
<h4>Passo 2: i significati</h4>
<p>1. <b>Su se stessi</b>: <i lang="ru">одеваться</i> (vestirsi), <i lang="ru">мыться</i> (lavarsi).<br>2. <b>L'un l'altro</b>: <i lang="ru">встречаться</i> (incontrarsi), <i lang="ru">целоваться</i> (baciarsi), <i lang="ru">знакомиться</i> (conoscersi).<br>3. <b>Esistono solo con -ся</b>: <i lang="ru">смеяться</i> (ridere), <i lang="ru">бояться</i> (avere paura), <i lang="ru">нравиться</i> (piacere), <i lang="ru">улыбаться</i> (sorridere).<br>4. <b>Cose che cominciano/finiscono</b>: <i lang="ru">Фильм начинается. Магазин открывается в 9. Урок кончается.</i></p>
<h4>Passo 3: diversi dall'italiano</h4>
<p>«Alzarsi» = <i lang="ru">вставать</i> (senza -ся!). «Riposarsi» = <i lang="ru">отдыхать</i>. Ma «ridere» = <i lang="ru">смеяться</i> (con -ся).</p>
<h4>Passo 4: al passato</h4>
<p><i lang="ru">он занимался, она занималась, они занимались</i>.</p>`,
words:`занима́ться|studiare, fare (sport)
встреча́ться|incontrarsi, frequentarsi
знако́миться|conoscersi
одева́ться|vestirsi
смея́ться|ridere
улыба́ться|sorridere
боя́ться|avere paura
нра́виться|piacere
начина́ться|cominciare (da solo)
конча́ться|finire
открыва́ться|aprire (negozio)
закрыва́ться|chiudere
ссо́риться|litigare
мири́ться|fare pace
целова́ться|baciarsi`,
ex:[
['Я ___ спортом. (заниматься)','занимаюсь',null,'Я занимаю + сь (dopo vocale).'],
['Ты ___ музыкой? (заниматься)','занимаешься',null,'Ты занимаешь + ся.'],
['Мы ___ в кафе. (встречаться)','встречаемся',null,'Мы встречаем + ся.'],
['Фильм ___ в 8 часов. (начинаться)','начинается',null,'Il film comincia (da solo) → начинается.'],
['Магазин ___ в 9. (открываться)','открывается',null,'Il negozio apre → открывается.'],
['Почему ты ___? (смеяться)','смеёшься/смеешься',null,'Смеяться: смеёшься.'],
['Я не ___ собак. (бояться)','боюсь',null,'Бояться: я боюсь.'],
['Утром я ___ в семь. (alzarsi)','встаю',['встаюсь','встаю'],'Вставать non ha -ся!'],
['Вчера мы ___. (ссориться)','ссорились',null,'Passato plurale: ссорились.'],
['Она ___. (sorrideva)','улыбалась',null,'Passato f.: улыбалась.'],
['Выберите: «Comincio il lavoro»','Я начинаю работу',['Я начинаюсь работу','Я начинаю работу'],'Con oggetto: senza -ся.'],
['Выберите: «Il lavoro comincia alle 9»','Работа начинается в 9',['Работа начинает в 9','Работа начинается в 9'],'Senza oggetto: con -ся.'],
['Составьте предложение: «Dove ci incontriamo?»','Где мы встречаемся','order','Где + мы + встречаемся.'],
['Составьте предложение: «Non ho paura.»','Я не боюсь','order','Я + не + боюсь.'],
['Traduci: «Facciamo conoscenza!»','давай познакомимся/давайте познакомимся',null,'Давай познакомимся!']],
test:[
['Они ___ в университете. (учиться)','учатся',null,'Учиться: они учатся.'],
['Урок ___ в 10. (кончаться)','кончается',null,'Кончается.'],
['Я ___ быстро. (одеваться)','одеваюсь',null,'Одеваюсь.'],
['Мы ___ два года. (встречаться: stiamo insieme)','встречаемся',null,'Встречаемся.'],
['Ты ___ темноты? (бояться)','боишься',null,'Боишься.'],
['Магазин ___ в 8 вечера. (закрываться)','закрывается',null,'Закрывается.'],
['Он ___. (rideva)','смеялся',null,'Passato m.'],
['Выберите: «Mi riposo»','Я отдыхаю',['Я отдыхаюсь','Я отдыхаю'],'Отдыхать senza -ся.'],
['Составьте предложение: «Il film comincia adesso.»','Фильм начинается сейчас/Фильм сейчас начинается/Сейчас начинается фильм','order','Фильм + начинается + сейчас.'],
['Traduci: «Ci incontriamo domani.»','мы встречаемся завтра/встретимся завтра/мы встретимся завтра',null,'Мы встречаемся (o встретимся) завтра.']]},

{id:'r-a2-studiare',t:'Lezione 9. Studiare: учить, учиться, заниматься',b:`
<p>In italiano «studiare» va bene per tutto. In russo ci sono più verbi. Ecco la guida rapida:</p>
<table><tr><th>vuoi dire</th><th>verbo</th><th>esempio</th></tr>
<tr><td>sono studente (dove)</td><td>учиться + где?</td><td>Я учусь в университете.</td></tr>
<tr><td>studio una cosa</td><td>учить + что?</td><td>Я учу русский. Я учу слова.</td></tr>
<tr><td>faccio i compiti, studio (in generale)</td><td>заниматься</td><td>Вечером я занимаюсь.</td></tr>
<tr><td>studio a fondo (una scienza)</td><td>изучать + что?</td><td>Он изучает историю.</td></tr>
<tr><td>imparo a fare qualcosa</td><td>научиться + infinito</td><td>Я научился плавать.</td></tr>
<tr><td>insegno</td><td>учить кого? чему? / преподавать</td><td>Она учит детей. Он преподаёт русский.</td></tr></table>
<h4>Passo 2: le forme</h4>
<p><i lang="ru">учиться: учусь, учишься, учатся. учить: учу, учишь, учат.</i></p>
<p class="tip"><b>Per te, Джованни:</b> <i lang="ru">Я учу русский язык.</i> = Studio il russo. <i lang="ru">Я хочу научиться говорить по-русски.</i> = Voglio imparare a parlare russo.</p>`,
words:`учи́ться|studiare (essere studente)
учи́ть|studiare, imparare
изуча́ть|studiare a fondo
занима́ться|fare i compiti
научи́ться|imparare a fare
преподава́ть|insegnare
уро́к|lezione
дома́шнее зада́ние|compiti
экза́мен|esame
оце́нка|voto
университе́т|università
шко́ла|scuola
стихотворе́ние|poesia
язы́к|lingua
пра́вило|regola`,
ex:[
['Я ___ в университете. (sono studente)','учусь',['учу','учусь','изучаю'],'Dove → учиться.'],
['Я ___ русский язык.','учу',['учу','учусь'],'Studio una cosa → учу.'],
['Вечером я ___. (faccio i compiti)','занимаюсь',['учу','занимаюсь'],'Senza oggetto → заниматься.'],
['Он ___ историю России. (studia a fondo)','изучает',['учится','изучает'],'Scienza → изучает.'],
['Я хочу ___ плавать. (imparare a)','научиться',['учить','научиться'],'Imparare a fare → научиться.'],
['Где ты ___? (sei studente)','учишься',null,'Учиться: ты учишься.'],
['Мы ___ новые слова.','учим',null,'Учить: мы учим.'],
['Она ___ детей музыке. (insegna)','учит',null,'Учить кого чему: учит.'],
['Выберите: «Studio l\'italiano»','Я учу итальянский',['Я учусь итальянский','Я учу итальянский'],'Учу + oggetto.'],
['Выберите: «Mia sorella va a scuola»','Моя сестра учится в школе',['Моя сестра учит в школе','Моя сестра учится в школе'],'Учиться + где.'],
['Вставьте: Я ___ (выучить) правило.','выучил',null,'Выучить: risultato.'],
['Составьте предложение: «Studio il russo da un anno.»','Я учу русский язык уже год/Я уже год учу русский язык','order','Я учу русский язык + уже год.'],
['Составьте предложение: «Voglio imparare a parlare russo.»','Я хочу научиться говорить по-русски','order','Я хочу + научиться + говорить по-русски.'],
['Traduci: «Studio il russo.»','я учу русский/я учу русский язык',null,'Я учу русский (язык).']],
test:[
['Ты ___ или работаешь?','учишься',['учишь','учишься'],'Sei studente? → учишься.'],
['Мы ___ стихотворение. (impariamo a memoria)','учим',['учим','учимся'],'Учить + oggetto.'],
['Я ___ каждый вечер. (studio)','занимаюсь',['занимаюсь','учу'],'Senza oggetto.'],
['Она ___ химию в университете.','изучает',['изучает','учится'],'Scienza + oggetto.'],
['Он ___ водить машину. (ha imparato)','научился',['выучил','научился'],'Imparare a fare.'],
['Где учатся дети?','в школе',['в школе','в школу'],'Где → prepositivo.'],
['Вставьте: Я ___ (учить) слова.','учу',null,'Учу.'],
['Выберите: «Insegna russo»','Он преподаёт русский язык',['Он учится русский язык','Он преподаёт русский язык'],'Преподавать.'],
['Составьте предложение: «Faccio i compiti.»','Я делаю домашнее задание','order','Я делаю + домашнее задание.'],
['Traduci: «Sono studente.» (uomo)','я студент',null,'Я студент.']]},

{id:'r-a2-modali',t:'Lezione 10. Voglio, posso, devo, serve',b:`
<h4>Passo 1: хотеть (volere)</h4>
<p><i lang="ru">хочу, хочешь, хочет, хотим, хотите, хотят</i>. <i lang="ru">Я хочу кофе. Я хочу спать.</i> Più gentile: <i lang="ru">Я хотел бы…</i> (vorrei).</p>
<h4>Passo 2: мочь (potere)</h4>
<p><i lang="ru">могу, можешь, может, можем, можете, могут</i>. <i lang="ru">Я могу помочь. Ты можешь прийти?</i></p>
<h4>Passo 3: «devo» = должен</h4>
<p>Cambia con il genere di chi parla: <i lang="ru">я должен</i> (uomo), <i lang="ru">я должна</i> (donna), <i lang="ru">мы должны</i>. <i lang="ru">Я должен работать.</i></p>
<h4>Passo 4: «bisogna» = надо / нужно + dativo</h4>
<p><i lang="ru">Мне надо идти.</i> = Devo andare. <i lang="ru">Тебе нужно отдохнуть.</i> = Devi riposare.</p>
<h4>Passo 5: «mi serve una cosa» = мне нужен…</h4>
<p>Si accorda con la cosa: <i lang="ru">Мне нужен словарь</i> (m.), <i lang="ru">мне нужна помощь</i> (f.), <i lang="ru">мне нужно время</i> (n.), <i lang="ru">мне нужны деньги</i> (pl.).</p>
<h4>Passo 6: si può / non si può</h4>
<p><i lang="ru">Можно?</i> = Posso? È permesso? <i lang="ru">Здесь нельзя курить.</i> = Qui non si può fumare.</p>`,
words:`хоте́ть|volere
хоте́л бы|vorrei
мочь|potere
до́лжен / должна́|devo (m. / f.)
на́до|bisogna
ну́жно|bisogna
ну́жен|serve, è necessario
мо́жно|si può
нельзя́|non si può
по́мощь|aiuto
отдохну́ть|riposarsi
кури́ть|fumare
спать|dormire
идти́|andare
сро́чно|urgentemente`,
ex:[
['Я ___ кофе. (voglio)','хочу',null,'Хотеть: хочу.'],
['Ты ___ мне помочь? (puoi)','можешь',null,'Мочь: можешь.'],
['Они ___ прийти. (vogliono)','хотят',null,'Хотеть: хотят.'],
['Я ___ работать. (devo, uomo)','должен',['должен','должна','должны'],'Uomo → должен.'],
['Я ___ работать. (devo, donna)','должна',['должен','должна','должны'],'Donna → должна.'],
['Мы ___ идти. (dobbiamo)','должны',['должен','должна','должны'],'Plurale → должны.'],
['___ надо идти. (a me)','Мне',['Я','Мне','Меня'],'Надо + dativo.'],
['Мне ___ словарь. (serve)','нужен',['нужен','нужна','нужно'],'Словарь è m. → нужен.'],
['Мне ___ помощь.','нужна',['нужен','нужна','нужно'],'Помощь è f. → нужна.'],
['Здесь ___ курить. (non si può)','нельзя',['можно','нельзя'],'Vietato → нельзя.'],
['___ войти? (posso entrare?)','Можно',['Можно','Нельзя','Надо'],'Permesso → можно.'],
['Выберите: «Vorrei un tè»','Я хотел бы чай',['Я хочу бы чай','Я хотел бы чай'],'Хотел бы = vorrei.'],
['Составьте предложение: «Devi riposare.»','Тебе нужно отдохнуть','order','Тебе + нужно + отдохнуть.'],
['Составьте предложение: «Posso aiutarti?»','Я могу тебе помочь/Я могу помочь тебе/Могу я тебе помочь','order','Я + могу + тебе + помочь.'],
['Traduci: «Voglio dormire.»','я хочу спать',null,'Я хочу спать.']],
test:[
['Вы ___ чай или кофе? (volete)','хотите',null,'Хотите.'],
['Мы не ___ прийти. (possiamo)','можем',null,'Можем.'],
['Она ___ много работать. (deve)','должна',null,'Должна.'],
['___ надо в магазин. (a lui)','Ему',null,'Ему надо.'],
['Мне ___ деньги.','нужны',['нужен','нужна','нужны'],'Plurale.'],
['Мне ___ время.','нужно',['нужен','нужна','нужно'],'Neutro.'],
['Здесь ___ фотографировать? (si può?)','можно',['можно','нельзя'],'Можно?'],
['Выберите: «Non posso»','Я не могу',['Я не можу','Я не могу'],'Могу.'],
['Составьте предложение: «Mi serve il tuo aiuto.»','Мне нужна твоя помощь','order','Мне нужна + твоя помощь.'],
['Traduci: «Devo andare.»','мне надо идти/мне нужно идти/я должен идти/я должна идти',null,'Мне надо идти.']]},

{id:'r-a2-sapere',t:'Lezione 11. So, so fare, posso: знать, уметь, мочь',b:`
<p>L'italiano «sapere» si divide in due verbi russi, e «potere» è un terzo.</p>
<table><tr><th>verbo</th><th>quando</th><th>esempio</th></tr>
<tr><td>знать</td><td>sapere un fatto, conoscere</td><td>Я знаю, где он живёт. Я знаю Настю.</td></tr>
<tr><td>уметь</td><td>saper fare (l'ho imparato)</td><td>Я умею плавать.</td></tr>
<tr><td>мочь</td><td>potere (è possibile adesso)</td><td>Сегодня я не могу плавать: холодно.</td></tr></table>
<h4>Passo 2: le forme</h4>
<p><i lang="ru">знаю, знаешь, знают; умею, умеешь, умеют; могу, можешь, могут</i>.</p>
<h4>Passo 3: la trappola</h4>
<p>«So cucinare» = <i lang="ru">Я умею готовить</i> (MAI «я знаю готовить»). Dopo <b>знать</b> non va mai un verbo all'infinito.</p>
<h4>Passo 4: le lingue</h4>
<p>«Parlo / so il russo» = <i lang="ru">Я говорю по-русски</i> o <i lang="ru">Я знаю русский язык</i>.</p>`,
words:`знать|sapere, conoscere
уме́ть|saper fare
мочь|potere
пла́вать|nuotare
игра́ть на гита́ре|suonare la chitarra
води́ть маши́ну|guidare
гото́вить|cucinare
петь|cantare
рисова́ть|disegnare
отве́т|risposta
пра́вда|verità
доро́га|strada
понима́ть|capire
по-англи́йски|in inglese
по-италья́нски|in italiano`,
ex:[
['Я ___ плавать. (so fare)','умею',['знаю','умею','могу'],'Abilità → умею.'],
['Я не ___, где он. (non so)','знаю',['знаю','умею','могу'],'Fatto → знаю.'],
['Сегодня я не ___ прийти. (posso)','могу',['знаю','умею','могу'],'Possibilità → могу.'],
['Ты ___ Настю? (conosci)','знаешь',null,'Conoscere una persona → знаешь.'],
['Он ___ водить машину. (sa guidare)','умеет',null,'Abilità → умеет.'],
['Вы ___ по-русски? (parlate)','говорите',null,'Parlare una lingua → говорите.'],
['Я ___ готовить пасту. (so)','умею',['знаю','умею'],'Mai знаю + infinito.'],
['Она ___ ответ. (sa)','знает',['знает','умеет'],'Знать + oggetto.'],
['Мы ___ петь. (sappiamo)','умеем',null,'Умеем.'],
['Выберите: «Sai suonare la chitarra?»','Ты умеешь играть на гитаре?',['Ты знаешь играть на гитаре?','Ты умеешь играть на гитаре?'],'Abilità → умеешь.'],
['Выберите: «Non posso, sono occupato»','Я не могу, я занят',['Я не умею, я занят','Я не могу, я занят'],'Impedimento → не могу.'],
['Составьте предложение: «Non so cucinare.»','Я не умею готовить','order','Я + не + умею + готовить.'],
['Составьте предложение: «Conosco questa strada.»','Я знаю эту дорогу','order','Я знаю + эту дорогу.'],
['Traduci: «Lo so.»','я знаю',null,'Я знаю.']],
test:[
['Мой брат ___ рисовать. (sa)','умеет',['знает','умеет'],'Abilità.'],
['Я ___ правду. (so)','знаю',['знаю','умею'],'Fatto.'],
['Извини, я не ___ сейчас говорить.','могу',['умею','могу'],'Non è il momento → могу.'],
['Они ___ Москву хорошо. (conoscono)','знают',null,'Знают.'],
['Ты ___ петь? (sai)','умеешь',null,'Умеешь.'],
['Выберите: «So nuotare»','Я умею плавать',['Я знаю плавать','Я умею плавать'],'Умею.'],
['Вы ___ мне помочь? (potete)','можете',null,'Можете.'],
['Выберите: «Capisco il russo»','Я понимаю по-русски',['Я умею по-русски','Я понимаю по-русски'],'Понимать по-русски.'],
['Составьте предложение: «Sai dov\'è la stazione?»','Ты знаешь где вокзал','order','Ты знаешь + где вокзал.'],
['Traduci: «Non so.»','я не знаю',null,'Я не знаю.']]},

{id:'r-a2-tempo',t:'Lezione 12. Quando? Giorni, mesi, ore',b:`
<h4>Passo 1: i giorni della settimana</h4>
<p><i lang="ru">понедельник</i> (lun), <i lang="ru">вторник</i> (mar), <i lang="ru">среда</i> (mer), <i lang="ru">четверг</i> (gio), <i lang="ru">пятница</i> (ven), <i lang="ru">суббота</i> (sab), <i lang="ru">воскресенье</i> (dom). «Lunedì» (quando) = <b>в + accusativo</b>: <i lang="ru">в понедельник, в среду, в пятницу, в субботу</i>.</p>
<h4>Passo 2: i mesi</h4>
<p><i lang="ru">январь, февраль, март, апрель, май, июнь, июль, август, сентябрь, октябрь, ноябрь, декабрь</i>. «A maggio» = <b>в + prepositivo</b>: <i lang="ru">в мае, в январе, в декабре</i>.</p>
<h4>Passo 3: parti del giorno e stagioni</h4>
<p><i lang="ru">утром</i> (di mattina), <i lang="ru">днём</i> (di giorno), <i lang="ru">вечером</i> (di sera), <i lang="ru">ночью</i> (di notte); <i lang="ru">весной, летом, осенью, зимой</i>.</p>
<h4>Passo 4: fa, tra, da… a…</h4>
<p><i lang="ru">два дня назад</i> (due giorni fa), <i lang="ru">через час</i> (tra un'ora), <i lang="ru">с девяти до шести</i> (dalle 9 alle 6).</p>
<h4>Passo 5: quante volte</h4>
<p><i lang="ru">каждый день, раз в неделю, иногда, часто, редко, никогда не…</i></p>`,
words:`понеде́льник|lunedì
вто́рник|martedì
среда́|mercoledì
четве́рг|giovedì
пя́тница|venerdì
суббо́та|sabato
воскресе́нье|domenica
неде́ля|settimana
ме́сяц|mese
год|anno
сего́дня|oggi
за́втра|domani
вчера́|ieri
наза́д|fa
че́рез|tra
иногда́|a volte
ре́дко|raramente`,
ex:[
['Я работаю в ___. (понедельник)','понедельник',null,'В + accusativo: понедельник non cambia.'],
['Мы встретимся в ___. (среда)','среду',null,'Среда → в среду.'],
['В ___ я отдыхаю. (суббота)','субботу',null,'Суббота → в субботу.'],
['Мой день рождения в ___. (май)','мае',null,'Mesi: в + prepositivo: в мае.'],
['В ___ холодно. (январь)','январе',null,'Январь → в январе.'],
['___ я пью кофе. (di mattina)','Утром',null,'Утром.'],
['___ мы гуляем. (d\'estate)','Летом',null,'Летом.'],
['Он приехал два дня ___. (fa)','назад',['назад','через'],'Fa = назад.'],
['Я приду ___ час. (tra)','через',['назад','через'],'Tra = через.'],
['Я работаю с девяти ___ шести.','до',['до','на','в'],'Da… a… = с… до…'],
['Выберите: «domenica» (quando?)','в воскресенье',['в воскресенье','в воскресенья'],'Воскресенье non cambia.'],
['Выберите: «A dicembre»','в декабре',['в декабрь','в декабре'],'Mesi → prepositivo.'],
['Составьте предложение: «Ci vediamo venerdì.»','Увидимся в пятницу','order','Увидимся + в пятницу.'],
['Составьте предложение: «Vado in palestra due volte a settimana.»','Я хожу в спортзал два раза в неделю','order','Я хожу в спортзал + два раза в неделю.'],
['Traduci: «oggi»','сегодня',null,'Сегодня.']],
test:[
['В ___ я свободен. (четверг)','четверг',null,'Non cambia.'],
['В ___ у меня экзамен. (пятница)','пятницу',null,'Пятница → пятницу.'],
['Я родился в ___. (март)','марте',null,'В марте.'],
['___ идёт снег. (d\'inverno)','Зимой',null,'Зимой.'],
['Неделю ___ я был в Риме. (fa)','назад',null,'Назад.'],
['Позвони мне ___ два часа. (tra)','через',null,'Через.'],
['Выберите: «di sera»','вечером',['вечер','вечером'],'Вечером.'],
['Выберите: «A volte leggo»','Иногда я читаю',['Иногда я читаю','Иногда я прочитаю'],'Иногда + presente.'],
['Составьте предложение: «A settembre andiamo a Mosca.»','В сентябре мы едем в Москву','order','В сентябре + мы едем + в Москву.'],
['Traduci: «domani»','завтра',null,'Завтра.']]}
);
