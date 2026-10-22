ITA.levels.push({id:'B2',name:'Intermedio superiore',topics:[
{id:'r-b2-chtoby',t:'Чтобы: scopo e desiderio',b:`
<p><b>Чтобы</b> = «per, affinché».</p>
<p>• <b>Stesso soggetto</b> → <i lang="ru">чтобы + infinito</i>: <i lang="ru">Я учу русский, чтобы читать Толстого.</i><br>• <b>Soggetto diverso</b> → <i lang="ru">чтобы + passato</i> (anche se il senso è presente o futuro): <i lang="ru">Я говорю медленно, чтобы ты понял.</i></p>
<p>Dopo verbi di volontà (<i lang="ru">хотеть, просить, сказать</i> nel senso di «ordinare») con un altro soggetto: <i lang="ru">Я хочу, чтобы ты пришёл.</i> (voglio che tu venga). <i lang="ru">Мама сказала, чтобы я позвонил.</i></p>
<p>Attenzione: <i lang="ru">Я хочу, что ты пришёл</i> è sbagliato. Dopo <i lang="ru">хотеть</i> con altro soggetto ci vuole sempre <i lang="ru">чтобы</i>.</p>`,
ex:[
['Я хочу, ___ ты приехал в Москву.','чтобы',['что','чтобы'],'Volontà + soggetto diverso → чтобы.'],
['Я хочу, чтобы ты ___ (приехать).','приехал',['приедешь','приехал','приехать'],'Чтобы + soggetto diverso → passato.'],
['Он работает, чтобы ___ (купить) квартиру.','купить',['купить','купил'],'Stesso soggetto (он) → infinito.'],
['Мама попросила, чтобы мы ___ (позвонить).','позвонили',null,'Soggetto diverso → passato plurale: позвонили.'],
['Он сказал, ___ завтра будет дождь. (dichiarazione)','что',['что','чтобы'],'Si riferisce un fatto, non un ordine → что.'],
['Он сказал, ___ я закрыл окно. (ordine)','чтобы',['что','чтобы'],'Ordine o richiesta → чтобы + passato.']]},
{id:'r-b2-discorso',t:'Discorso indiretto e la particella ли',b:`
<p>In russo il discorso indiretto <b>non cambia il tempo</b> del verbo (niente concordanza dei tempi): <i lang="ru">Он сказал: «Я устал».</i> → <i lang="ru">Он сказал, что устал.</i> <i lang="ru">Она сказала: «Я работаю».</i> → <i lang="ru">Она сказала, что работает.</i> (in italiano: «che lavorava»).</p>
<p>Domande con parola interrogativa: si mantiene la parola: <i lang="ru">Он спросил, где я живу.</i></p>
<p>Domande sì/no: si usa <b>ли</b> dopo la parola su cui cade la domanda, all'inizio della frase: <i lang="ru">«Ты придёшь?» → Он спросил, приду ли я.</i> (se verrò). <i lang="ru">Я не знаю, дома ли она.</i></p>
<p>Non usare <i lang="ru">если</i> per «se» interrogativo: <i lang="ru">если</i> è solo condizionale!</p>`,
ex:[
['«Я живу в Риме». → Он сказал, что ___ в Риме.','живёт/живет',['жил','живёт','будет жить'],'Il tempo non cambia: presente resta presente.'],
['«Ты любишь кино?» → Она спросила, люблю ___ я кино.','ли',['ли','если','что'],'Domanda sì/no → verbo + ли.'],
['Я не знаю, ___ он завтра. (verrà)','придёт ли/придет ли',null,'Verbo + ли: придёт ли.'],
['«Где ты был?» → Мама спросила, ___ я был.','где',null,'La parola interrogativa resta: где.'],
['Я не знаю, ___ ли она по-итальянски. (parla)','говорит',null,'Verbo all\'inizio + ли: говорит ли.'],
['___ будет дождь, мы останемся дома. (se, condizione)','Если',['Если','Ли'],'Condizione reale → если.']]},
{id:'r-b2-comparativo',t:'Comparativo e superlativo',b:`
<p><b>Comparativo semplice</b> (invariabile, predicativo): radice + <b>-ее</b>: <i lang="ru">интересный → интереснее, быстрый → быстрее</i>.</p>
<p>Irregolari: <i lang="ru">хороший → лучше, плохой → хуже, большой → больше, маленький → меньше, дорогой → дороже, дешёвый → дешевле, молодой → моложе, старый → старше (persone), простой → проще, близкий → ближе, далёкий → дальше, высокий → выше, громкий → громче</i>.</p>
<p>Il secondo termine: <b>genitivo</b> senza preposizione oppure <b>чем</b> + nominativo: <i lang="ru">Москва больше Рима. = Москва больше, чем Рим.</i></p>
<p><b>Comparativo composto</b> (davanti al nome): <i lang="ru">более интересная книга</i>. <b>Superlativo</b>: <i lang="ru">самый + aggettivo</i>: <i lang="ru">самый красивый город</i>, oppure forma in <i lang="ru">-ейший</i> (libresca): <i lang="ru">интереснейший</i>.</p>
<p>«Molto più»: <i lang="ru">гораздо / намного + comparativo</i>.</p>`,
ex:[
['Этот фильм ___ (интересный), чем тот.','интереснее',null,'Comparativo regolare: -ее.'],
['Мой русский ___ (хороший), чем раньше.','лучше',null,'Irregolare: хороший → лучше.'],
['Москва больше ___ (Рим).','Рима',null,'Senza чем → genitivo.'],
['Рим – ___ красивый город в мире. (il più)','самый',['самый','более','очень'],'Superlativo: самый.'],
['Брат ___ меня на два года. (più grande d\'età)','старше',['больше','старше','старее'],'Per l\'età delle persone: старше.'],
['Здесь ___ дешевле. (molto più)','гораздо/намного',['очень','гораздо','самый'],'«Molto più» = гораздо/намного; очень non va col comparativo.']]},
{id:'r-b2-condizionale',t:'Il condizionale: бы',b:`
<p>Il condizionale si forma con il <b>passato + бы</b>: <i lang="ru">Я бы пошёл. Она бы купила.</i> Una sola forma per presente e passato: «andrei» e «sarei andato».</p>
<p>Periodo ipotetico irreale: <b>если бы + passato, (то) passato + бы</b>: <i lang="ru">Если бы у меня было время, я бы поехал в Италию.</i> = Se avessi tempo, andrei / se avessi avuto tempo, sarei andato.</p>
<p>Desiderio cortese: <i lang="ru">Я бы хотел(а) кофе.</i> Consiglio: <i lang="ru">Я бы на твоём месте…</i></p>
<p>Periodo reale: <i lang="ru">если</i> + presente/futuro, senza бы: <i lang="ru">Если будет хорошая погода, мы пойдём гулять.</i> (in russo si usa il futuro anche dopo «если»).</p>`,
ex:[
['Если бы я знал, я ___ сказал.','бы',['бы','ли','будет'],'Irreale: anche nella principale passato + бы.'],
['Если бы у меня ___ деньги, я бы купил машину.','были',['есть','были','будут'],'Если бы + passato: были (деньги è plurale).'],
['Я ___ хотела чаю. (vorrei)','бы',null,'Desiderio cortese: я бы хотела.'],
['Если завтра ___ дождь, мы останемся дома.','будет',['будет','был бы','есть'],'Periodo reale sul futuro: если + futuro.'],
['На твоём месте я бы ___ (позвонить) ей.','позвонил/позвонила',null,'Passato + бы: позвонил бы.']]},
{id:'r-b2-aspetto2',t:'L\'aspetto: imperativo, infinito, negazione',b:`
<p><b>Imperativo</b>: il perfettivo è la richiesta concreta (<i lang="ru">Закройте окно!</i>), l'imperfettivo è invito, permesso, invito a cominciare o ripetuto (<i lang="ru">Входите! Садитесь! Пишите каждый день!</i>).</p>
<p><b>Negazione dell'imperativo</b>: di norma <b>imperfettivo</b>: <i lang="ru">Не открывайте окно!</i> Il perfettivo negato è un avvertimento («attento a non…»): <i lang="ru">Не опоздай!</i></p>
<p><b>Infinito</b>: dopo <i lang="ru">начинать, кончать, продолжать, нравиться, уставать</i> sempre imperfettivo: <i lang="ru">Я начал читать.</i> Dopo <i lang="ru">нельзя</i>: imperfettivo = è vietato (<i lang="ru">Здесь нельзя курить</i>), perfettivo = è impossibile (<i lang="ru">Дверь нельзя открыть, она сломана</i>).</p>
<p>Domanda «hai fatto…?» sull'azione in generale: imperfettivo (<i lang="ru">Ты читал «Мастера и Маргариту»?</i>). Sul risultato: perfettivo (<i lang="ru">Ты прочитал книгу? Можно взять?</i>).</p>`,
ex:[
['Я начал ___ эту книгу вчера.','читать',['читать','прочитать'],'Dopo начать sempre imperfettivo.'],
['Не ___ окно, холодно! (non aprire)','открывай',['открой','открывай'],'Divieto: imperfettivo.'],
['Здесь нельзя ___. È vietato fumare.','курить',['курить','покурить'],'Нельзя + imperfettivo = divieto.'],
['___, пожалуйста! (accomodatevi, invito cortese all\'ospite)','Садитесь',['Сядьте','Садитесь'],'Invito cortese: imperfettivo.'],
['Не ___ на поезд! (attento a non perdere)','опоздай',['опаздывай','опоздай'],'Avvertimento: perfettivo negato.'],
['Ты уже ___ письмо? Можно отправлять? (risultato)','написал',['писал','написал'],'Domanda sul risultato: perfettivo.']]},
{id:'r-b2-indefiniti',t:'Pronomi indefiniti: -то, -нибудь, кое-',b:`
<p><b>-то</b>: qualcosa di <b>preciso ma sconosciuto</b> a chi parla: <i lang="ru">Кто-то звонил.</i> (qualcuno ha chiamato, non so chi). <i lang="ru">Он что-то сказал.</i></p>
<p><b>-нибудь</b>: <b>qualsiasi</b>, non ancora determinato: domande, imperativo, futuro, desideri: <i lang="ru">Кто-нибудь звонил?</i> (ha chiamato qualcuno?) <i lang="ru">Купи что-нибудь.</i> <i lang="ru">Давай куда-нибудь поедем.</i></p>
<p><b>кое-</b>: so chi/cosa, ma non lo dico: <i lang="ru">Я тебе кое-что привёз.</i></p>
<p>Schema: <i lang="ru">кто-то / кто-нибудь, что-то / что-нибудь, где-то / где-нибудь, когда-то / когда-нибудь, какой-то / какой-нибудь</i>.</p>
<p>Ricorda: al passato e al presente con fatto concreto → <b>-то</b>. <i lang="ru">Когда-нибудь</i> = «un giorno» (futuro) o «mai» in domanda: <i lang="ru">Ты когда-нибудь был в Москве?</i></p>`,
ex:[
['___ стучит в дверь. (qualcuno, ora)','Кто-то',['Кто-то','Кто-нибудь'],'Fatto concreto, persona sconosciuta → -то.'],
['Тебе ___ звонил? (ha chiamato qualcuno?)','кто-нибудь',['кто-то','кто-нибудь'],'Domanda su chiunque → -нибудь.'],
['Купи ___ на ужин. (qualcosa, qualsiasi)','что-нибудь',['что-то','что-нибудь'],'Imperativo, cosa indeterminata → -нибудь.'],
['Ты ___ был в России? (mai)','когда-нибудь',['когда-то','когда-нибудь'],'Domanda sull\'esperienza → когда-нибудь.'],
['Я ___ читал эту книгу, но не помню. (un tempo)','когда-то',['когда-то','когда-нибудь'],'Passato preciso ma vago → когда-то.'],
['У меня есть для тебя ___. (una cosa, so cosa)','кое-что',['что-нибудь','кое-что'],'So cosa ma non lo dico → кое-что.']]},
{id:'r-b2-brevi',t:'Aggettivi brevi',b:`
<p>Molti aggettivi hanno una <b>forma breve</b>, usata solo come predicato: <i lang="ru">прав, права, право, правы</i>.</p>
<p>Formazione: <i lang="ru">красивый → красив, красива, красиво, красивы</i>.</p>
<p>Usi tipici: <i lang="ru">Я рад (рада). Он болен. Она занята. Мы готовы. Ты прав. Это платье мне велико / мало. Я должен (должна).</i></p>
<p>Differenza: la forma piena indica una qualità stabile (<i lang="ru">Он больной человек</i>: è malaticcio), quella breve uno stato temporaneo o relativo (<i lang="ru">Он болен</i>: è malato ora; <i lang="ru">Туфли мне малы</i>: per me sono piccole).</p>`,
ex:[
['Я очень ___ тебя видеть! (contenta, f.)','рада',null,'Forma breve femminile: рада.'],
['Ты ___, извини! (hai ragione, m.)','прав',null,'Прав, права, правы.'],
['Она сегодня ___. (occupata)','занята',null,'Занят, занята, заняты.'],
['Мы ___ ехать. (pronti)','готовы',null,'Plurale: готовы.'],
['Эти джинсы мне ___. (piccoli per me)','малы',['маленькие','малы'],'Relativo a chi le indossa → forma breve: малы.']]},
{id:'r-b2-congiunzioni',t:'Congiunzioni e frasi complesse',b:`
<p>Causa: <i lang="ru">потому что</i> (dopo la principale), <i lang="ru">так как</i>, <i lang="ru">поскольку</i>, <i lang="ru">из-за + gen.</i> (causa negativa), <i lang="ru">благодаря + dat.</i> (causa positiva).</p>
<p>Conseguenza: <i lang="ru">поэтому, так что</i>.</p>
<p>Concessione: <i lang="ru">хотя</i> (sebbene), <i lang="ru">несмотря на + acc.</i> (nonostante): <i lang="ru">Несмотря на дождь, мы гуляли.</i></p>
<p>Tempo: <i lang="ru">когда, пока</i> (mentre), <i lang="ru">пока не</i> (finché non), <i lang="ru">как только</i> (non appena), <i lang="ru">перед тем как</i> (prima di), <i lang="ru">после того как</i> (dopo che).</p>
<p><i lang="ru">Пока не</i> + perfettivo: <i lang="ru">Жди, пока я не вернусь.</i> (aspetta finché non torno).</p>`,
ex:[
['Мы опоздали ___ пробки. (a causa di)','из-за',['благодаря','из-за'],'Causa negativa → из-за + genitivo.'],
['___ тебе я сдал экзамен. (grazie a)','Благодаря',['Благодаря','Из-за'],'Causa positiva → благодаря + dativo.'],
['___ он устал, он продолжал работать. (sebbene)','Хотя',null,'Concessione: хотя.'],
['Я позвоню, как ___ приеду. (non appena)','только',null,'Как только = non appena.'],
['Подожди, пока я ___ вернусь.','не',null,'Пока не + perfettivo = finché non.'],
['Шёл дождь, ___ мы остались дома. (perciò)','поэтому',['потому что','поэтому'],'Conseguenza → поэтому.']]}
],
words:`наде́жда|speranza
мечта́|sogno (desiderio)
цель|scopo
причи́на|causa
результа́т|risultato
мне́ние|opinione
сове́т|consiglio
реше́ние|decisione
выбира́ть / вы́брать|scegliere
реша́ть / реши́ть|decidere, risolvere
сра́внивать / сравни́ть|confrontare
сомнева́ться|dubitare
сове́товать / посове́товать|consigliare
предлага́ть / предложи́ть|proporre
соглаша́ться / согласи́ться|essere d'accordo
отка́зываться / отказа́ться|rifiutare
успева́ть / успе́ть|fare in tempo
опа́здывать / опозда́ть|fare tardi
скуча́ть|annoiarsi, sentire la mancanza
ссо́риться / поссо́риться|litigare
мири́ться / помири́ться|fare pace
прав|ha ragione
рад|contento
за́нят|occupato
гото́в|pronto
до́лжен|deve
лу́чше|meglio
ху́же|peggio
бо́льше|di più
ме́ньше|di meno
гора́здо|molto (+ comparativo)
хотя́|sebbene
несмотря́ на|nonostante
из-за|a causa di
благодаря́|grazie a
кто́-то|qualcuno
что́-нибудь|qualcosa (qualsiasi)
когда́-нибудь|un giorno, mai (in domanda)
кое-что́|una cosa (che so io)`
});
