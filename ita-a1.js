window.ITA=window.ITA||{levels:[]};
ITA.levels.push({id:'A1',name:'Начальный',topics:[
{id:'a1-articoli',t:'Артикли',b:`
<p>Перед существительным почти всегда стоит артикль. Он зависит от рода, числа и <b>первой буквы</b> следующего слова.</p>
<table><tr><th></th><th>ед. ч.</th><th>мн. ч.</th><th>когда</th></tr>
<tr><td rowspan="3">м. р.</td><td><i lang="it">il</i></td><td><i lang="it">i</i></td><td>перед большинством согласных: <i lang="it">il libro, i libri</i></td></tr>
<tr><td><i lang="it">lo</i></td><td><i lang="it">gli</i></td><td>перед s+согласная, z, gn, ps, x, y: <i lang="it">lo studente, gli zaini</i></td></tr>
<tr><td><i lang="it">l'</i></td><td><i lang="it">gli</i></td><td>перед гласной: <i lang="it">l'amico, gli amici</i></td></tr>
<tr><td rowspan="2">ж. р.</td><td><i lang="it">la</i></td><td><i lang="it">le</i></td><td>перед согласной: <i lang="it">la casa, le case</i></td></tr>
<tr><td><i lang="it">l'</i></td><td><i lang="it">le</i></td><td>перед гласной: <i lang="it">l'amica, le amiche</i></td></tr></table>
<p>Неопределённый артикль: <i lang="it">un</i> (м. р.), <i lang="it">uno</i> (м. р. перед s+согл., z, gn, ps), <i lang="it">una</i> (ж. р.), <i lang="it">un'</i> (ж. р. перед гласной). Апостроф ставится только в женском роде: <i lang="it">un amico</i>, но <i lang="it">un'amica</i>.</p>`,
ex:[
['___ libro (определённый)','il',['il','lo','l\'']],
['___ studente (определённый)','lo',['il','lo','la']],
['___ amico (определённый)',"l'",['il',"l'",'lo']],
['___ zaini (определённый, мн. ч.)','gli',['i','gli','le']],
['___ amica (неопределённый)',"un'",['un',"un'",'una']],
['___ zio (неопределённый)','uno',['un','uno','una'],'Перед z всегда uno.'],
['___ ragazze (определённый, мн. ч.)','le',['le','gli','i']],
['Вставьте артикль: ___ psicologo (определённый)','lo',null,'ps → lo.']
]},
{id:'a1-nomi',t:'Род и число существительных',b:`
<p>Большинство слов на <b>-o</b> мужского рода, на <b>-a</b> женского. Слова на <b>-e</b> бывают обоих родов, их лучше запоминать с артиклем: <i lang="it">il pane, la notte</i>.</p>
<table><tr><th>ед. ч.</th><th>мн. ч.</th><th>пример</th></tr>
<tr><td>-o</td><td>-i</td><td><i lang="it">libro → libri</i></td></tr>
<tr><td>-a</td><td>-e</td><td><i lang="it">casa → case</i></td></tr>
<tr><td>-e</td><td>-i</td><td><i lang="it">fiore → fiori, notte → notti</i></td></tr></table>
<p>Не изменяются: слова с ударением на последнем слоге (<i lang="it">la città → le città</i>), иностранные (<i lang="it">il film → i film</i>) и сокращённые (<i lang="it">la foto → le foto</i>).</p>
<p>На -ca/-ga всегда добавляется h: <i lang="it">amica → amiche, collega → colleghe</i>. На -co/-go часто тоже (<i lang="it">lago → laghi, tedesco → tedeschi</i>), но есть исключения: <i lang="it">amico → amici, medico → medici</i>. Ещё запомните: <i lang="it">l'uomo → gli uomini, la mano → le mani, l'uovo → le uova</i>.</p>`,
ex:[
['Мн. ч.: il ragazzo → i ___','ragazzi'],
['Мн. ч.: la sedia → le ___','sedie'],
['Мн. ч.: il fiore → i ___','fiori'],
['Мн. ч.: la città → le ___','città',null,'Ударение на конце, слово не меняется.'],
['Мн. ч.: l\'amica → le ___','amiche'],
['Мн. ч.: l\'uomo → gli ___','uomini'],
['Какого рода слово «notte»?','женского',['мужского','женского']],
['Мн. ч.: il film → i ___','film']
]},
{id:'a1-essere-avere',t:'Essere и avere',b:`
<p>Два главных глагола: <i lang="it">essere</i> (быть) и <i lang="it">avere</i> (иметь). Местоимение-подлежащее обычно опускают: форма глагола уже показывает лицо.</p>
<table><tr><th></th><th>essere</th><th>avere</th></tr>
<tr><td>io</td><td>sono</td><td>ho</td></tr><tr><td>tu</td><td>sei</td><td>hai</td></tr>
<tr><td>lui / lei / Lei</td><td>è</td><td>ha</td></tr><tr><td>noi</td><td>siamo</td><td>abbiamo</td></tr>
<tr><td>voi</td><td>siete</td><td>avete</td></tr><tr><td>loro</td><td>sono</td><td>hanno</td></tr></table>
<p>Где по-русски «мне 20 лет», «мне холодно», по-итальянски <b>avere</b>: <i lang="it">ho vent'anni, ho freddo, ho fame</i> (я голоден), <i lang="it">ho sonno</i> (хочу спать).</p>
<p>Буква h в <i lang="it">ho, hai, ha, hanno</i> не читается. Вежливое «Вы» это <i lang="it">Lei</i> с формой 3-го лица: <i lang="it">Lei è italiana?</i></p>`,
ex:[
['Io ___ russa.','sono'],
['Tu ___ fame?','hai'],
['Noi ___ studenti.','siamo'],
['Loro ___ una macchina nuova.','hanno'],
['Marco ___ trent\'anni.','ha'],
['Voi ___ di Roma?','siete'],
['Как сказать «мне холодно»?','ho freddo',['sono freddo','ho freddo','è freddo']],
['Signora, Lei ___ stanca?','è',null,'Вежливое Lei → 3-е лицо.']
]},
{id:'a1-presente',t:'Настоящее время (presente)',b:`
<p>Глаголы делятся на три группы по окончанию инфинитива: <b>-are</b>, <b>-ere</b>, <b>-ire</b>. Отбрасываем окончание и добавляем новое.</p>
<table><tr><th></th><th>parlare</th><th>prendere</th><th>dormire</th><th>finire (-isc-)</th></tr>
<tr><td>io</td><td>parlo</td><td>prendo</td><td>dormo</td><td>finisco</td></tr>
<tr><td>tu</td><td>parli</td><td>prendi</td><td>dormi</td><td>finisci</td></tr>
<tr><td>lui/lei</td><td>parla</td><td>prende</td><td>dorme</td><td>finisce</td></tr>
<tr><td>noi</td><td>parliamo</td><td>prendiamo</td><td>dormiamo</td><td>finiamo</td></tr>
<tr><td>voi</td><td>parlate</td><td>prendete</td><td>dormite</td><td>finite</td></tr>
<tr><td>loro</td><td>parlano</td><td>prendono</td><td>dormono</td><td>finiscono</td></tr></table>
<p>Часть глаголов на -ire вставляет <b>-isc-</b> во всех лицах, кроме noi и voi: <i lang="it">capire → capisco, preferire → preferisco</i>.</p>
<p>Частые неправильные: <i lang="it">andare</i> (vado, vai, va, andiamo, andate, vanno), <i lang="it">fare</i> (faccio, fai, fa, facciamo, fate, fanno), <i lang="it">volere</i> (voglio, vuoi, vuole…), <i lang="it">potere</i> (posso, puoi, può…), <i lang="it">dovere</i> (devo, devi, deve…).</p>`,
ex:[
['Io ___ (parlare) italiano.','parlo'],
['Tu ___ (prendere) un caffè?','prendi'],
['Noi ___ (abitare) a Mosca.','abitiamo'],
['Loro ___ (dormire) poco.','dormono'],
['Io non ___ (capire).','capisco'],
['Lei ___ (preferire) il tè.','preferisce'],
['Voi ___ (andare) al cinema?','andate'],
['Io ___ (fare) colazione alle otto.','faccio'],
['Tu ___ (volere) uscire?','vuoi']
]},
{id:'a1-aggettivi',t:'Прилагательные',b:`
<p>Прилагательное согласуется с существительным в роде и числе и обычно стоит <b>после</b> него: <i lang="it">una casa grande, i ragazzi simpatici</i>.</p>
<table><tr><th>тип</th><th>м. ед.</th><th>ж. ед.</th><th>м. мн.</th><th>ж. мн.</th></tr>
<tr><td>-o</td><td>rosso</td><td>rossa</td><td>rossi</td><td>rosse</td></tr>
<tr><td>-e</td><td>grande</td><td>grande</td><td>grandi</td><td>grandi</td></tr></table>
<p>Если в группе есть хоть один мужчина или слово мужского рода, прилагательное ставится в мужской род: <i lang="it">Marco e Anna sono stanchi</i>.</p>
<p>Короткие частые прилагательные могут стоять перед словом: <i lang="it">un bel film, una buona idea</i>. Цвета на -a/-u и иностранные не меняются: <i lang="it">le magliette rosa, i pantaloni blu</i>.</p>`,
ex:[
['una macchina ___ (rosso)','rossa'],
['i libri ___ (interessante)','interessanti'],
['le ragazze ___ (simpatico)','simpatiche'],
['Marco e Giulia sono ___ (stanco)','stanchi',null,'Смешанная группа → мужской род.'],
['due borse ___ (rosa)','rosa',['rose','rosa','rosi'],'Rosa не меняется.'],
['una casa ___ (grande)','grande']
]},
{id:'a1-preposizioni',t:'Предлоги и слитные предлоги',b:`
<p>Главные предлоги: <i lang="it">di</i> (из, о, принадлежность), <i lang="it">a</i> (в, к: город), <i lang="it">da</i> (от, из, у кого-то), <i lang="it">in</i> (в: страна, место), <i lang="it">con</i> (с), <i lang="it">su</i> (на), <i lang="it">per</i> (для), <i lang="it">tra/fra</i> (между, через).</p>
<p>Предлоги <b>di, a, da, in, su</b> сливаются с определённым артиклем:</p>
<table><tr><th></th><th>il</th><th>lo</th><th>l'</th><th>la</th><th>i</th><th>gli</th><th>le</th></tr>
<tr><td>di</td><td>del</td><td>dello</td><td>dell'</td><td>della</td><td>dei</td><td>degli</td><td>delle</td></tr>
<tr><td>a</td><td>al</td><td>allo</td><td>all'</td><td>alla</td><td>ai</td><td>agli</td><td>alle</td></tr>
<tr><td>da</td><td>dal</td><td>dallo</td><td>dall'</td><td>dalla</td><td>dai</td><td>dagli</td><td>dalle</td></tr>
<tr><td>in</td><td>nel</td><td>nello</td><td>nell'</td><td>nella</td><td>nei</td><td>negli</td><td>nelle</td></tr>
<tr><td>su</td><td>sul</td><td>sullo</td><td>sull'</td><td>sulla</td><td>sui</td><td>sugli</td><td>sulle</td></tr></table>
<p>Запомните: <i lang="it">vado a Roma</i> (город), <i lang="it">vivo in Italia</i> (страна), <i lang="it">vado da Marco</i> (к человеку), <i lang="it">vado al mare, in montagna, in centro</i>.</p>`,
ex:[
['Il libro è ___ tavolo. (на)','sul'],
['Vado ___ Roma.','a',['a','in','da']],
['Vivo ___ Italia.','in',['a','in','da']],
['Stasera vado ___ Marco.','da',['a','da','in']],
['Le chiavi sono ___ borsa. (в)','nella/in'],
['La casa ___ amici. (друзей)','degli'],
['Andiamo ___ mare.','al'],
['Arrivo ___ stazione. (с вокзала)','dalla']
]},
{id:'a1-domande',t:'Вопросы',b:`
<p>Вопрос часто отличается от утверждения только интонацией: <i lang="it">Sei italiano?</i></p>
<table><tr><th>слово</th><th>значение</th><th>пример</th></tr>
<tr><td>chi</td><td>кто</td><td><i lang="it">Chi è?</i></td></tr>
<tr><td>che cosa / cosa</td><td>что</td><td><i lang="it">Cosa fai?</i></td></tr>
<tr><td>dove</td><td>где, куда</td><td><i lang="it">Dove abiti?</i></td></tr>
<tr><td>quando</td><td>когда</td><td><i lang="it">Quando parti?</i></td></tr>
<tr><td>come</td><td>как</td><td><i lang="it">Come ti chiami?</i></td></tr>
<tr><td>perché</td><td>почему (и «потому что»)</td><td><i lang="it">Perché ridi?</i></td></tr>
<tr><td>quanto/-a/-i/-e</td><td>сколько</td><td><i lang="it">Quanti anni hai?</i></td></tr>
<tr><td>quale / quali</td><td>какой, который</td><td><i lang="it">Qual è il tuo numero?</i></td></tr></table>
<p><i lang="it">Qual è</i> пишется без апострофа. <i lang="it">Dove</i> перед <i lang="it">è</i> сокращается: <i lang="it">Dov'è?</i></p>`,
ex:[
['___ ti chiami?','Come',['Come','Cosa','Dove']],
['___ abiti? – A Milano.','Dove'],
['___ anni hai?','Quanti',['Quanto','Quanti','Quante'],'Anni мужского рода, мн. ч.'],
['___ è il tuo indirizzo?','Qual',['Qual','Quali','Qual\'']],
['___ studi l\'italiano? – Perché amo l\'Italia.','Perché'],
['___ è quel ragazzo? (кто)','Chi']
]},
{id:'a1-possessivi',t:'Притяжательные',b:`
<p>Притяжательное согласуется с <b>тем, чем владеют</b>, и обычно стоит с артиклем: <i lang="it">il mio libro, la mia casa, i miei amici, le mie amiche</i>.</p>
<table><tr><th></th><th>м. ед.</th><th>ж. ед.</th><th>м. мн.</th><th>ж. мн.</th></tr>
<tr><td>мой</td><td>il mio</td><td>la mia</td><td>i miei</td><td>le mie</td></tr>
<tr><td>твой</td><td>il tuo</td><td>la tua</td><td>i tuoi</td><td>le tue</td></tr>
<tr><td>его/её</td><td>il suo</td><td>la sua</td><td>i suoi</td><td>le sue</td></tr>
<tr><td>наш</td><td>il nostro</td><td>la nostra</td><td>i nostri</td><td>le nostre</td></tr>
<tr><td>ваш</td><td>il vostro</td><td>la vostra</td><td>i vostri</td><td>le vostre</td></tr>
<tr><td>их</td><td>il loro</td><td>la loro</td><td>i loro</td><td>le loro</td></tr></table>
<p>С членами семьи в единственном числе артикль не ставят: <i lang="it">mia madre, tuo fratello</i>. Но: <i lang="it">i miei fratelli, la loro madre, la mia sorellina</i>.</p>
<p><i lang="it">Suo</i> значит и «его», и «её»: род зависит от предмета. <i lang="it">Marco ama sua madre. Anna ama suo padre.</i></p>`,
ex:[
['___ casa è grande. (моя)','La mia'],
['___ madre è medico. (моя)','Mia',['La mia','Mia','Mio']],
['___ amici sono simpatici. (мои)','I miei'],
['Anna e ___ padre. (её)','suo',['sua','suo','il suo'],'Род по слову padre, артикля нет.'],
['___ genitori abitano a Torino. (их)','I loro'],
['___ sorelle. (твои)','Le tue']
]}
],
words:`ciao|привет, пока
buongiorno|добрый день
buonasera|добрый вечер
grazie|спасибо
prego|пожалуйста (в ответ)
per favore|пожалуйста (просьба)
scusa|извини
sì|да
no|нет
la casa|дом
la famiglia|семья
la madre|мать
il padre|отец
il fratello|брат
la sorella|сестра
l'amico|друг
il ragazzo|парень
la ragazza|девушка
l'acqua|вода
il pane|хлеб
il vino|вино
il caffè|кофе
la colazione|завтрак
il pranzo|обед
la cena|ужин
il giorno|день
la notte|ночь
la settimana|неделя
oggi|сегодня
domani|завтра
ieri|вчера
adesso|сейчас
sempre|всегда
mai|никогда
molto|очень, много
poco|мало
bello|красивый
brutto|некрасивый, плохой
grande|большой
piccolo|маленький
nuovo|новый
vecchio|старый
caldo|горячий, жарко
freddo|холодный
la città|город
la strada|улица
il negozio|магазин
la stazione|вокзал
il lavoro|работа
la scuola|школа
il libro|книга
la macchina|машина
il treno|поезд
mangiare|есть
bere|пить
dormire|спать
parlare|говорить
lavorare|работать
studiare|учиться
andare|идти, ехать
venire|приходить
fare|делать
capire|понимать
volere|хотеть
potere|мочь
dovere|быть должным
sapere|знать
vedere|видеть
sentire|слышать, чувствовать
chiamarsi|называться, зваться
abitare|жить (где-то)
uno, due, tre|один, два, три
dieci|десять
cento|сто
il lunedì|понедельник
la domenica|воскресенье`
});
