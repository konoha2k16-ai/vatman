ITA.levels.push({id:'B2',name:'Выше среднего',topics:[
{id:'b2-cong-imp',t:'Congiuntivo imperfetto и trapassato',b:`
<p><b>Congiuntivo imperfetto</b> нужен, когда главный глагол в прошедшем или в condizionale: <i lang="it">Pensavo che fosse vero. Vorrei che tu venissi.</i></p>
<table><tr><th></th><th>parlare</th><th>prendere</th><th>dormire</th><th>essere</th></tr>
<tr><td>io / tu</td><td>parlassi</td><td>prendessi</td><td>dormissi</td><td>fossi</td></tr>
<tr><td>lui/lei</td><td>parlasse</td><td>prendesse</td><td>dormisse</td><td>fosse</td></tr>
<tr><td>noi</td><td>parlassimo</td><td>prendessimo</td><td>dormissimo</td><td>fossimo</td></tr>
<tr><td>voi</td><td>parlaste</td><td>prendeste</td><td>dormiste</td><td>foste</td></tr>
<tr><td>loro</td><td>parlassero</td><td>prendessero</td><td>dormissero</td><td>fossero</td></tr></table>
<p>Особые: <i lang="it">fare → facessi, dire → dicessi, bere → bevessi, dare → dessi, stare → stessi</i>. <i lang="it">Avere</i> правильный: avessi.</p>
<p><b>Congiuntivo trapassato</b> = avessi/fossi + причастие, для действия, предшествовавшего прошлому: <i lang="it">Pensavo che fosse già partito.</i></p>`,
ex:[
['Pensavo che tu ___ (essere) italiana.','fossi'],
['Vorrei che voi ___ (venire) alla festa.','veniste'],
['Era necessario che loro ___ (fare) attenzione.','facessero'],
['Speravo che Marco ___ (avere) tempo.','avesse'],
['Non sapevo che Anna ___ già ___ (partire).','fosse partita/fosse già partita'],
['Mi sembrava che tu ___ (stare) male.','stessi']
]},
{id:'b2-ipotetico',t:'Условные предложения (periodo ipotetico)',b:`
<table><tr><th>тип</th><th>se + …</th><th>главное</th><th>пример</th></tr>
<tr><td>реальный</td><td>presente</td><td>presente / futuro</td><td><i lang="it">Se piove, resto a casa.</i></td></tr>
<tr><td>возможный</td><td>congiuntivo imperfetto</td><td>condizionale presente</td><td><i lang="it">Se avessi tempo, viaggerei di più.</i></td></tr>
<tr><td>нереальный (прошлое)</td><td>congiuntivo trapassato</td><td>condizionale passato</td><td><i lang="it">Se fossi venuto, ti saresti divertito.</i></td></tr></table>
<p>После <i lang="it">se</i> никогда не ставится condizionale: не «se avrei», а <i lang="it">se avessi</i>.</p>
<p>Смешанный тип: условие в прошлом, следствие сейчас: <i lang="it">Se avessi studiato, adesso avrei un lavoro migliore.</i></p>`,
ex:[
['Se ___ (avere) soldi, comprerei una casa al mare.','avessi'],
['Se fa bel tempo, (noi) ___ (andare) al parco.','andiamo/andremo'],
['Se tu ___ (studiare) di più, avresti passato l\'esame.','avessi studiato'],
['Se fossi in te, ___ (accettare) l\'offerta.','accetterei'],
['Se ___ (sapere) che c\'eri, sarei venuta.','avessi saputo'],
['Se avessi dormito di più, adesso non ___ (essere) così stanca.','sarei']
]},
{id:'b2-cond-passato',t:'Condizionale passato',b:`
<p>Образуется как <b>avrei / sarei + причастие</b>: <i lang="it">avrei mangiato, sarei andata</i>.</p>
<p>Значения: несбывшееся в прошлом (<i lang="it">Sarei venuta, ma ero malata</i>), сожаление (<i lang="it">Avrei dovuto dirtelo</i>).</p>
<p>Важное отличие от русского: <b>будущее в прошедшем</b>. «Он сказал, что придёт» = <i lang="it">Ha detto che <b>sarebbe venuto</b></i>, а не «verrà» и не «verrebbe».</p>`,
ex:[
['Ha detto che ___ (chiamare) dopo cena.','avrebbe chiamato'],
['___ (venire) volentieri, ma avevo da fare. (я)','Sarei venuta/Sarei venuto'],
['Tu ___ (dovere) dirmelo prima!','avresti dovuto'],
['Pensavo che il treno ___ (arrivare) in orario.','sarebbe arrivato',['arriverà','arriverebbe','sarebbe arrivato']],
['Mi hanno promesso che ___ (scrivere).','avrebbero scritto']
]},
{id:'b2-concordanza',t:'Согласование времён с congiuntivo',b:`
<p>Время в придаточном зависит от времени главного глагола и от того, раньше, одновременно или позже происходит действие.</p>
<table><tr><th>главное</th><th>одновременно</th><th>раньше</th><th>позже</th></tr>
<tr><td>presente: <i lang="it">Penso che…</i></td><td>cong. presente: <i lang="it">sia</i></td><td>cong. passato: <i lang="it">sia stato</i></td><td>futuro: <i lang="it">sarà</i></td></tr>
<tr><td>прошедшее: <i lang="it">Pensavo che…</i></td><td>cong. imperfetto: <i lang="it">fosse</i></td><td>cong. trapassato: <i lang="it">fosse stato</i></td><td>cond. passato: <i lang="it">sarebbe stato</i></td></tr></table>
<p><b>Congiuntivo passato</b> = abbia/sia + причастие: <i lang="it">Credo che abbia già mangiato.</i></p>`,
ex:[
['Credo che Marco ___ già ___ (partire). (раньше)','sia partito/sia già partito'],
['Credevo che Marco ___ (essere) a casa. (одновременно)','fosse'],
['Penso che domani ___ (piovere).','pioverà/piova'],
['Pensavo che domani ___ (piovere).','sarebbe piovuto/avrebbe piovuto/piovesse'],
['Non credo che lui ___ (capire) ieri.','abbia capito']
]},
{id:'b2-passivo',t:'Пассивный залог',b:`
<p><b>Essere + причастие</b> (+ da кем): <i lang="it">La Divina Commedia è stata scritta da Dante.</i> Причастие согласуется с подлежащим.</p>
<p><b>Venire + причастие</b> в простых временах подчёркивает процесс: <i lang="it">Il negozio viene chiuso alle otto.</i> В составных временах venire не используется.</p>
<p><b>Andare + причастие</b> = «должно быть сделано»: <i lang="it">Il modulo va compilato in stampatello.</i></p>`,
ex:[
['Il libro ___ (scrivere) da Eco. (passato prossimo)','è stato scritto'],
['Le lettere ___ (spedire) ieri.','sono state spedite'],
['Il museo ___ (chiudere) ogni lunedì. (venire)','viene chiuso'],
['Questo esercizio ___ (fare) entro domani. (нужно сделать)','va fatto'],
['La casa ___ (costruire) nel 1900.','è stata costruita/fu costruita/venne costruita']
]},
{id:'b2-gerundio',t:'Gerundio и неявные конструкции',b:`
<p>Gerundio: <i lang="it">-are → -ando, -ere/-ire → -endo</i> (parlando, prendendo, dormendo). Особые: <i lang="it">facendo, dicendo, bevendo</i>.</p>
<p><b>Stare + gerundio</b> = действие прямо сейчас: <i lang="it">Sto lavorando. Stavo uscendo quando hai chiamato.</i></p>
<p>Gerundio заменяет придаточное времени, причины, способа: <i lang="it">Camminando, ho incontrato Paolo</i> (когда шёл). <i lang="it">Essendo stanca, sono rimasta a casa</i> (так как). Подлежащее должно совпадать.</p>
<p>Прошедший gerundio: <i lang="it">avendo finito, essendo arrivata</i>. Инфинитив прошедший: <i lang="it">Dopo aver mangiato, siamo usciti.</i></p>`,
ex:[
['Non posso parlare, sto ___ (guidare).','guidando'],
['Stavo ___ (fare) la doccia quando è suonato il telefono.','facendo'],
['___ (studiare) ogni giorno, imparerai presto. (gerundio)','Studiando'],
['Dopo ___ (finire) il lavoro, sono andata a casa.','aver finito/avere finito'],
['___ (essere) malata, non sono venuta.','Essendo']
]},
{id:'b2-connettivi',t:'Связки с congiuntivo',b:`
<p>Некоторые союзы всегда требуют congiuntivo:</p>
<table><tr><td><i lang="it">benché, sebbene, nonostante</i></td><td>хотя, несмотря на то что</td></tr>
<tr><td><i lang="it">affinché, perché</i> (цель)</td><td>чтобы</td></tr>
<tr><td><i lang="it">purché, a condizione che</i></td><td>при условии что</td></tr>
<tr><td><i lang="it">prima che</i></td><td>прежде чем</td></tr>
<tr><td><i lang="it">senza che</i></td><td>без того чтобы</td></tr>
<tr><td><i lang="it">a meno che (non)</i></td><td>если только не</td></tr></table>
<p><i lang="it">Benché sia tardi, resto ancora un po'. Te lo spiego affinché tu capisca. Esco prima che piova.</i></p>
<p>Если подлежащее одно, вместо <i lang="it">prima che / senza che</i> ставят инфинитив: <i lang="it">prima di uscire, senza dire niente</i>.</p>`,
ex:[
['Benché ___ (essere) stanca, continuo a lavorare.','sia'],
['Ti presto la macchina purché tu ___ (guidare) piano.','guidi'],
['Te lo ripeto affinché tu lo ___ (ricordare).','ricordi'],
['Usciamo prima che ___ (cominciare) a piovere.','cominci'],
['Sono uscito senza ___ (salutare).','salutare'],
['Nonostante ___ (piovere), siamo usciti.','piovesse',null,'Главное в прошедшем → imperfetto.']
]}
],
words:`il punto di vista|точка зрения
l'argomento|тема, аргумент
il dibattito|дискуссия
la tendenza|тенденция
la crescita|рост
il calo|снижение
la disoccupazione|безработица
la società|общество
la ricerca scientifica|научные исследования
il diritto|право
i diritti umani|права человека
la legge|закон
la giustizia|справедливость, правосудие
la prova|доказательство
la testimonianza|свидетельство
il rischio|риск
la responsabilità|ответственность
l'impresa|предприятие, компания
lo sviluppo|развитие
la sostenibilità|устойчивость (экологическая, экономическая)
affrontare|сталкиваться, решать
sostenere|поддерживать, утверждать
dimostrare|доказывать
ottenere|получать, добиваться
evitare|избегать
rinunciare a|отказываться от
approfittare di|воспользоваться
tenere conto di|учитывать
mettere in dubbio|ставить под сомнение
rendersi conto|осознавать
fare a meno di|обходиться без
valere la pena|стоить того
in realtà|на самом деле
tuttavia|однако
inoltre|кроме того
pertanto|следовательно
eppure|и всё же
anzi|наоборот, более того
piuttosto|скорее, довольно
a proposito|кстати
dal momento che|поскольку
a patto che|при условии что
ne vale la pena|оно того стоит
avere a che fare con|иметь дело с
in fin dei conti|в конце концов
dare per scontato|считать само собой разумеющимся`
});
