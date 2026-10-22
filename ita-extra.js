// Дополнительные темы грамматики по уровням.
(function(){
const add=(id,topics)=>{const l=ITA.levels.find(x=>x.id===id);l.topics.push(...topics)};
add('A1',[
{id:'a1-numeri',t:'Числа, время и даты',b:`
<p>Числа: <i lang="it">uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci, undici, dodici… venti, ventuno, ventotto, trenta, quaranta, cinquanta, cento, mille, duemila</i>. Перед <i lang="it">uno</i> и <i lang="it">otto</i> десятки теряют гласную: <i lang="it">ventuno, trentotto</i>.</p>
<p><b>Который час?</b> <i lang="it">Che ore sono?</i> Ответ во мн. ч.: <i lang="it">Sono le tre. Sono le otto e mezza. Sono le nove meno un quarto.</i> Но в ед. ч.: <i lang="it">È l'una. È mezzogiorno. È mezzanotte.</i> «В котором часу?» = <i lang="it">A che ora? – Alle sei. All'una.</i></p>
<p><b>Даты</b> пишутся количественными числами с артиклем: <i lang="it">il 5 maggio, il 31 dicembre</i>. Только первое число порядковое: <i lang="it">il primo gennaio</i>. Месяцы и дни недели пишутся с маленькой буквы.</p>`,
ex:[
['Che ore sono? (13:00) – ___ l\'una.','È',['È','Sono'],'Час (una) в ед. ч., поэтому è l\'una. Для остальных часов sono le…'],
['Che ore sono? (15:30) – Sono le tre e ___.','mezza/mezzo',null,'Половина = e mezza (допустимо и e mezzo).'],
['Il treno parte ___ sei. (в шесть)','alle',null,'«В шесть часов» = alle sei (a + le).'],
['21 = ___','ventuno',null,'Перед uno десяток теряет конечную -i: venti + uno = ventuno.'],
['Il mio compleanno è il ___ marzo. (1-го)','primo',null,'Первое число месяца называют порядковым числительным: il primo.'],
['Oggi è ___. (понедельник)','lunedì',null,'Дни недели пишутся с маленькой буквы и с ударением на конце: lunedì.']]},
{id:'a1-modali',t:'Volere, potere, dovere, sapere',b:`
<p>Модальные глаголы соединяются с инфинитивом без предлога: <i lang="it">Voglio dormire. Posso entrare? Devo lavorare.</i></p>
<table><tr><th></th><th>volere</th><th>potere</th><th>dovere</th><th>sapere</th></tr>
<tr><td>io</td><td>voglio</td><td>posso</td><td>devo</td><td>so</td></tr>
<tr><td>tu</td><td>vuoi</td><td>puoi</td><td>devi</td><td>sai</td></tr>
<tr><td>lui/lei</td><td>vuole</td><td>può</td><td>deve</td><td>sa</td></tr>
<tr><td>noi</td><td>vogliamo</td><td>possiamo</td><td>dobbiamo</td><td>sappiamo</td></tr>
<tr><td>voi</td><td>volete</td><td>potete</td><td>dovete</td><td>sapete</td></tr>
<tr><td>loro</td><td>vogliono</td><td>possono</td><td>devono</td><td>sanno</td></tr></table>
<p><b>Sapere</b> + инфинитив = «уметь» (навык): <i lang="it">So nuotare.</i> <b>Potere</b> = «иметь возможность, разрешение»: <i lang="it">Oggi non posso nuotare, piove.</i> «Знать человека» это <i lang="it">conoscere</i>: <i lang="it">Conosco Marco.</i></p>`,
ex:[
['Io ___ (volere) un gelato.','voglio',null,'Volere для io: voglio.'],
['___ (potere) aprire la finestra? (tu)','Puoi',null,'Potere для tu: puoi.'],
['Noi ___ (dovere) partire presto.','dobbiamo',null,'Dovere для noi: dobbiamo.'],
['Marco ___ suonare la chitarra. (умеет)','sa',['sa','può','conosce'],'Умение (навык) выражается через sapere: sa suonare.'],
['Tu ___ mia sorella? (знаешь человека)','conosci',['sai','conosci'],'Знать человека = conoscere. Sapere используется для фактов и умений.'],
['Loro non ___ (potere) venire.','possono',null,'Potere для loro: possono.']]},
{id:'a1-piacere',t:'Отрицание и mi piace',b:`
<p><b>Отрицание</b>: <i lang="it">non</i> ставится перед глаголом: <i lang="it">Non parlo tedesco.</i> Слова <i lang="it">niente, nessuno, mai</i> после глагола требуют non (двойное отрицание нормально): <i lang="it">Non vedo niente. Non viene mai.</i></p>
<p><b>Piacere</b> строится как русское «мне нравится»: то, что нравится, это подлежащее. Одна вещь или действие: <i lang="it">mi piace</i>. Несколько вещей: <i lang="it">mi piacciono</i>.</p>
<p><i lang="it">Mi piace il caffè. Mi piace leggere. Mi piacciono i gatti.</i></p>
<p>Кому нравится: <i lang="it">mi</i> (мне), <i lang="it">ti</i> (тебе), <i lang="it">gli</i> (ему), <i lang="it">le</i> (ей), <i lang="it">ci</i> (нам), <i lang="it">vi</i> (вам), <i lang="it">gli</i> (им). С именем: <i lang="it">A Marco piace il calcio.</i></p>`,
ex:[
['Mi ___ la pizza.','piace',['piace','piacciono'],'Pizza одна, поэтому piace.'],
['Ti ___ i film italiani?','piacciono',['piace','piacciono'],'Film во мн. ч. (i film), поэтому piacciono.'],
['Mi ___ ballare.','piace',['piace','piacciono'],'Действие (инфинитив) всегда ед. ч.: mi piace ballare.'],
['Io ___ capisco. (не)','non',null,'Отрицание non стоит перед глаголом.'],
['Non vedo ___. (ничего)','niente/nulla',null,'«Ничего» = niente, и non перед глаголом остаётся: двойное отрицание нормально.'],
['Anna ama il mare. ___ piace molto. (ей)','Le',['Le','Gli','La'],'«Ей» = le. Gli значит «ему» или «им».']
]}
]);
add('A2',[
{id:'a2-comparativi',t:'Сравнение',b:`
<p><b>Больше / меньше</b>: <i lang="it">più … di</i>, <i lang="it">meno … di</i>: <i lang="it">Roma è più grande di Firenze.</i> С артиклем di сливается: <i lang="it">più alto del padre</i>.</p>
<p><b>Che</b> вместо di, когда сравниваем два прилагательных, глагола или слова с предлогом: <i lang="it">È più bello che utile. Mi piace più leggere che guardare la TV. Fa più freddo a Mosca che a Roma.</i></p>
<p><b>Равенство</b>: <i lang="it">(così) … come</i> или <i lang="it">(tanto) … quanto</i>: <i lang="it">Marco è alto come suo fratello.</i></p>
<p><b>Превосходная</b>: <i lang="it">il più / la più … di</i>: <i lang="it">la città più bella d'Italia</i>. Абсолютная, «очень»: <i lang="it">-issimo</i>: <i lang="it">bellissimo, buonissima</i>.</p>
<p>Особые формы: <i lang="it">buono → migliore, cattivo → peggiore</i>; наречия <i lang="it">bene → meglio, male → peggio</i>.</p>`,
ex:[
['Milano è più grande ___ Torino.','di',['di','che','come'],'Сравниваем два существительных (города): più … di.'],
['Mi piace più nuotare ___ correre.','che',['di','che'],'Сравниваем два действия (инфинитива), поэтому che.'],
['Mio fratello è alto ___ me. (такой же, как)','come/quanto',null,'Равенство: come (или quanto).'],
['Questa pizza è ___ (очень хорошая). (buono + -issimo)','buonissima',null,'Абсолютная превосходная: buono → buonissimo, в ж. р. buonissima.'],
['Questo vino è ___ di quello. (лучше)','migliore',['migliore','meglio','il migliore'],'Прилагательное buono в сравнительной степени: migliore (о вкусе можно и più buono). Meglio это наречие («лучше» как bene), il migliore значит «самый лучший».'],
['Oggi sto ___ di ieri. (лучше)','meglio',['migliore','meglio'],'Здесь наречие (как я себя чувствую, bene), поэтому meglio.']]},
{id:'a2-stare',t:'Stare + gerundio, stare per и da',b:`
<p><b>Stare + gerundio</b> = «прямо сейчас делаю»: <i lang="it">Sto mangiando. Cosa stai facendo?</i> Gerundio: <i lang="it">-are → -ando, -ere/-ire → -endo</i>.</p>
<p><b>Stare per + инфинитив</b> = «вот-вот, собираюсь»: <i lang="it">Sto per uscire. Il film sta per cominciare.</i></p>
<p><b>Da + срок с настоящим временем</b> = действие длится до сих пор: <i lang="it">Studio l'italiano da due anni</i> (учу уже два года). Русское «уже два года учу» передаётся именно presente, не прошедшим.</p>`,
ex:[
['Non posso rispondere, sto ___ (lavorare).','lavorando',null,'Stare + gerundio: lavorare → lavorando.'],
['Cosa stai ___ (fare)?','facendo',null,'Gerundio от fare особый: facendo.'],
['Il treno sta ___ partire. (вот-вот)','per',null,'«Вот-вот» = stare per + инфинитив.'],
['___ (abitare, io) a Mosca da cinque anni.','Abito',['Abito','Ho abitato','Abitavo'],'Действие продолжается сейчас, поэтому presente + da: abito da cinque anni.'],
['Studio l\'italiano ___ due anni.','da',['da','per','fa'],'Длительность до настоящего момента: da. Fa = «назад» (due anni fa).']]},
{id:'a2-indefiniti',t:'Ogni, qualche, tutto, nessuno',b:`
<p><b>Ogni</b> (каждый) и <b>qualche</b> (несколько, какой-то) не изменяются и стоят с существительным в <b>единственном числе</b>: <i lang="it">ogni giorno, qualche amico</i>.</p>
<p><b>Tutto</b> согласуется и требует артикля: <i lang="it">tutto il giorno, tutta la notte, tutti i giorni, tutte le sere</i>.</p>
<p><b>Nessuno</b> (никто, ни один) как прилагательное ведёт себя как <i lang="it">un/uno/una</i>: <i lang="it">nessun problema, nessuno studente, nessuna idea</i>. После глагола нужен <i lang="it">non</i>: <i lang="it">Non c'è nessuno.</i></p>
<p><b>Alcuni / alcune</b> = несколько (мн. ч.): <i lang="it">alcuni amici</i>. <b>Qualcuno</b> = кто-то, <b>qualcosa</b> = что-то.</p>`,
ex:[
['Vado in palestra ___ giorno. (каждый)','ogni',['ogni','tutti','qualche'],'Ogni + ед. ч.: ogni giorno.'],
['Ho ___ amico a Roma. (несколько)','qualche',null,'Qualche всегда с ед. ч., хотя значит «несколько».'],
['Ho lavorato ___ la notte. (всю)','tutta',null,'Tutto согласуется с notte (ж. р.) и требует артикля: tutta la notte.'],
['Non c\'è ___ problema.','nessun',['nessun','nessuno','nessuna'],'Перед problema (как перед un) ставится nessun.'],
['C\'è ___ alla porta. (кто-то)','qualcuno',null,'«Кто-то» = qualcuno.'],
['Ho ___ domande. (несколько, мн. ч.)','alcune',['qualche','alcune','alcuni'],'Domande ж. р. мн. ч., с мн. ч. используем alcune. Qualche требует ед. ч.']]}
]);

add('B1',[
{id:'b1-futuro-ant',t:'Futuro anteriore',b:`
<p>Будущее, которое завершится раньше другого будущего: <b>avrò / sarò + причастие</b>.</p>
<p><i lang="it">Quando avrò finito l'università, cercherò lavoro.</i> Сначала закончу, потом буду искать. <i lang="it">Appena sarai arrivata, chiamami.</i></p>
<p>Ещё одно значение: предположение о прошлом. <i lang="it">Non risponde. Sarà già uscito.</i> (Наверное, уже вышел.) <i lang="it">Avrà avuto i suoi motivi.</i></p>`,
ex:[
['Quando ___ (finire) di lavorare, ti chiamo. (я, futuro anteriore)','avrò finito',null,'Действие закончится раньше другого будущего: avrò finito.'],
['Appena ___ (arrivare) a Roma, mi scriverai? (tu)','sarai arrivato/sarai arrivata',null,'Arrivare берёт essere: sarai arrivato/a.'],
['Marco non risponde. ___ già ___ (uscire). (наверное)','Sarà uscito/Sarà già uscito',null,'Предположение о прошлом выражается через futuro anteriore: sarà uscito.'],
['Dopo che ___ (mangiare, noi), andremo al cinema.','avremo mangiato',null,'Сначала поедим, потом пойдём: avremo mangiato.'],
['Lei ___ (avere) i suoi motivi. (наверное, у неё были)','avrà avuto',null,'Предположение о прошлом: avrà avuto.']]},
{id:'b1-verbi-prep',t:'Глаголы с предлогами',b:`
<p>Многие глаголы присоединяют инфинитив через предлог, и его нужно запоминать вместе с глаголом.</p>
<table><tr><th>с a</th><th>с di</th></tr>
<tr><td>cominciare a, iniziare a, continuare a, imparare a, riuscire a, aiutare a, provare a, andare a</td><td>finire di, smettere di, cercare di, decidere di, sperare di, pensare di, credere di, dimenticare di, avere paura di</td></tr></table>
<p><i lang="it">Ho cominciato a studiare. Ho smesso di fumare. Cerco di capire. Non riesco a dormire.</i></p>
<p><b>Pensare a</b> = думать о ком-то/чём-то, <b>pensare di</b> = собираться, считать: <i lang="it">Penso a te. Penso di partire domani.</i> Без предлога: модальные (<i lang="it">voglio, posso, devo</i>), <i lang="it">preferire, piacere, bisogna</i>.</p>`,
ex:[
['Ho deciso ___ studiare in Italia.','di',['a','di','—'],'Decidere di + инфинитив.'],
['Non riesco ___ dormire.','a',['a','di'],'Riuscire a + инфинитив.'],
['Ha smesso ___ fumare.','di',['a','di'],'Smettere di + инфинитив.'],
['Ho imparato ___ nuotare da piccola.','a',['a','di'],'Imparare a + инфинитив.'],
['Penso sempre ___ te.','a',['a','di'],'«Думать о ком-то» = pensare a.'],
['Preferisco ___ restare a casa.','—',['a','di','—'],'После preferire инфинитив идёт без предлога.']]},
{id:'b1-bello-quello',t:'Bello, quello, buono',b:`
<p><b>Bello</b> и <b>quello</b> перед существительным меняются как определённый артикль:</p>
<table><tr><th>артикль</th><th>bello</th><th>quello</th></tr>
<tr><td>il / i</td><td>bel / bei</td><td>quel / quei</td></tr>
<tr><td>lo / gli</td><td>bello / begli</td><td>quello / quegli</td></tr>
<tr><td>l' / gli</td><td>bell' / begli</td><td>quell' / quegli</td></tr>
<tr><td>la / le</td><td>bella / belle</td><td>quella / quelle</td></tr></table>
<p><i lang="it">un bel ragazzo, dei begli occhi, quell'albero, quegli studenti</i>.</p>
<p><b>Buono</b> в ед. ч. меняется как неопределённый артикль: <i lang="it">un buon libro, un buono stipendio, una buona idea, una buon'amica</i>. После существительного формы полные: <i lang="it">un ragazzo bello</i>.</p>`,
ex:[
['Che ___ giornata!','bella',null,'Giornata ж. р.: bella.'],
['Hai dei ___ occhi.','begli',['bei','begli','belli'],'Перед гласной во мн. ч. (как gli occhi): begli.'],
['___ studenti sono russi.','Quegli',['Quei','Quegli','Quelli'],'Studenti начинается с s + согласная (gli studenti), поэтому quegli.'],
['Vedi ___ albero?','quell\'',['quel','quello','quell\''],'Albero начинается с гласной (l\'albero), поэтому quell\'.'],
['È un ___ ristorante.','buon',['buon','buono','buona'],'Перед ristorante (как un ristorante) buono сокращается до buon.'],
['Che ___ film!','bel',['bel','bello','bei'],'Film в ед. ч. (il film): bel.']]}
]);

add('B2',[
{id:'b2-causativo',t:'Fare и lasciare + инфинитив',b:`
<p><b>Fare + инфинитив</b> = заставить или поручить кому-то сделать: <i lang="it">Faccio riparare la macchina</i> (отдаю машину в ремонт). <i lang="it">Mi fai ridere!</i></p>
<p>Кто выполняет действие, обозначается через <i lang="it">a</i> или <i lang="it">da</i>: <i lang="it">Ho fatto leggere il libro a Marco.</i> Местоимения ставятся перед fare: <i lang="it">Glielo faccio vedere. Me lo sono fatto spiegare.</i></p>
<p><b>Farsi + инфинитив</b> = сделать что-то для себя чужими руками: <i lang="it">Mi sono fatta tagliare i capelli.</i></p>
<p><b>Lasciare + инфинитив</b> = позволить: <i lang="it">Lasciami parlare! I miei genitori non mi lasciavano uscire.</i></p>`,
ex:[
['Domani ___ riparare la lavatrice. (я отдам в ремонт)','faccio/farò',null,'Поручить кому-то сделать = fare + инфинитив: faccio riparare.'],
['Ieri mi sono fatta ___ (tagliare) i capelli.','tagliare',null,'Farsi + инфинитив: «мне подстригли волосы» (по моей просьбе).'],
['___ parlare! (позволь мне, tu)','Lasciami',null,'Lasciare + mi в imperativo для tu пишется слитно: lasciami.'],
['Il film mi ha ___ piangere.','fatto',null,'«Заставил меня плакать» = mi ha fatto piangere.'],
['Ho fatto vedere le foto ___ mia madre.','a',['a','di','per'],'Тот, кто выполняет действие (смотрит), вводится предлогом a.']]},
{id:'b2-impersonali',t:'Congiuntivo после безличных выражений и чувств',b:`
<p>Congiuntivo нужен после безличных оборотов с оценкой: <i lang="it">è necessario che, è importante che, è possibile che, è meglio che, bisogna che, sembra che, è strano che</i>.</p>
<p>И после глаголов чувства: <i lang="it">sono contenta che, mi dispiace che, ho paura che, mi stupisce che</i>.</p>
<p><i lang="it">Mi dispiace che tu non possa venire. È strano che non abbia chiamato.</i></p>
<p>Если подлежащее не названо или совпадает, ставят инфинитив: <i lang="it">È importante studiare. Sono contenta di vederti.</i></p>
<p>Но <b>è vero che, è chiaro che, è certo che</b> (уверенность) требуют индикатива: <i lang="it">È vero che è partito.</i></p>`,
ex:[
['Mi dispiace che tu non ___ (potere) venire.','possa',null,'Чувство (mi dispiace) требует congiuntivo: possa.'],
['È strano che Marco non ___ ancora ___ (chiamare).','abbia chiamato/abbia ancora chiamato',null,'Оценка прошлого действия: congiuntivo passato abbia chiamato.'],
['È vero che Anna ___ (essere) incinta?','è',['è','sia'],'È vero che выражает уверенность, поэтому индикатив: è.'],
['Sono contenta ___ vederti.','di',['che','di'],'Подлежащее совпадает (я рада, что я вижу), поэтому di + инфинитив.'],
['Bisogna che voi ___ (partire) subito.','partiate',null,'Bisogna che требует congiuntivo: partiate.'],
['Sembra che ___ (piovere) domani.','piova/pioverà',null,'Sembra che требует congiuntivo: piova. О будущем допустимо и pioverà.']]},
{id:'b2-alterati',t:'Уменьшительные и увеличительные суффиксы',b:`
<p>Суффиксы меняют оттенок слова:</p>
<table><tr><th>суффикс</th><th>оттенок</th><th>пример</th></tr>
<tr><td>-ino, -etto, -ello</td><td>маленький, милый</td><td>gattino, casetta, alberello</td></tr>
<tr><td>-one, -ona</td><td>большой</td><td>librone, nasone</td></tr>
<tr><td>-accio</td><td>плохой, неприятный</td><td>tempaccio, parolaccia</td></tr>
<tr><td>-uccio</td><td>милый, жалкий</td><td>casuccia, boccuccia</td></tr></table>
<p>Слова женского рода с <i lang="it">-one</i> часто становятся мужскими: <i lang="it">la porta → il portone</i> (ворота). Некоторые «уменьшительные» стали отдельными словами: <i lang="it">il telefonino</i> (мобильный), <i lang="it">il panino</i>, <i lang="it">il rossetto</i> (помада).</p>`,
ex:[
['Un piccolo gatto = un ___','gattino',null,'Уменьшительный суффикс -ino: gatto → gattino.'],
['Una brutta parola = una ___','parolaccia',null,'Суффикс -accio/-accia означает плохое: parolaccia (ругательство).'],
['Una grande porta = un ___','portone',null,'С суффиксом -one слово меняет род: il portone.'],
['Che ___! Piove da tre giorni. (плохая погода)','tempaccio',null,'Tempo + -accio = tempaccio, «отвратительная погода».'],
['Una piccola casa = una ___','casetta/casina/casuccia',null,'Уменьшительные суффиксы -etta, -ina или -uccia.']]}
]);

add('C1',[
{id:'c1-epistemico',t:'Предположение и уступка через futuro',b:`
<p><b>Futuro</b> и <b>futuro anteriore</b> выражают догадку: <i lang="it">Saranno le dieci. Avrà avuto un problema.</i></p>
<p>В паре с <i lang="it">ma</i> они выражают уступку («пусть даже…, но»): <i lang="it">Sarà anche bravo, ma è antipatico. Avrà pure studiato, ma non ha capito niente.</i></p>
<p><b>Condizionale</b> передаёт непроверенные сведения из чужих источников (журналистский стиль): <i lang="it">Secondo fonti locali, il sindaco si sarebbe dimesso.</i> По данным источников, мэр якобы подал в отставку.</p>`,
ex:[
['Non so che ore sono. ___ (essere) le undici.','Saranno',null,'Догадка о настоящем: futuro saranno.'],
['Giulia è in ritardo. ___ (perdere) il treno.','Avrà perso',null,'Догадка о прошлом: futuro anteriore avrà perso.'],
['___ (essere) anche simpatico, ma non mi fido di lui.','Sarà',null,'Уступка «пусть он и симпатичный»: sarà anche… ma.'],
['Secondo la stampa, il ministro ___ (dimettersi) ieri.','si sarebbe dimesso',null,'Непроверенное сообщение о прошлом: condizionale passato si sarebbe dimesso.'],
['Secondo alcune fonti, il presidente ___ (essere) malato. (сейчас)','sarebbe',null,'Непроверенное сообщение о настоящем: condizionale presente sarebbe.']]},
{id:'c1-dislocazione',t:'Выделение: dislocazione и frase scissa',b:`
<p>В живой речи важное выносят в начало и повторяют местоимением: <i lang="it">Il caffè, lo prendo amaro. Di soldi, non ne ho. A Roma, ci vado domani.</i></p>
<p>Можно вынести и в конец: <i lang="it">L'ho già visto, quel film.</i></p>
<p><b>Frase scissa</b> выделяет одну часть: <i lang="it">È Marco che ha rotto il vaso</i> (именно Марко). <i lang="it">È stato lì che ci siamo conosciuti.</i> С инфинитивом: <i lang="it">È lui a decidere</i>.</p>`,
ex:[
['Il libro, ___ ho già letto.','l\'/lo',null,'Вынесенное прямое дополнение повторяется местоимением: il libro → l\'ho letto.'],
['Di tempo, non ___ ho.','ne',null,'Вынесенное «di tempo» повторяется частицей ne.'],
['Le chiavi, ___ hai prese tu?','le',null,'Le chiavi (ж. р. мн. ч.) → le, причастие согласуется: prese.'],
['È lui ___ ha deciso. (именно он)','che',null,'Frase scissa: è lui che…'],
['Sono io ___ pagare stasera. (именно я плачу)','a',['a','che','di'],'Frase scissa с инфинитивом: sono io a pagare.']]},
{id:'c1-registro',t:'Официальный регистр',b:`
<p>В деловом письме используют <i lang="it">Lei</i> с заглавной буквы и устойчивые формулы.</p>
<p><b>Обращение</b>: <i lang="it">Gentile dottoressa Rossi, Egregio professore, Spettabile ditta</i> (компании).</p>
<p><b>Формулы</b>: <i lang="it">Le scrivo per…, In riferimento alla Sua email…, Mi permetto di…, La ringrazio per la disponibilità, Resto in attesa di un Suo riscontro, Cordiali saluti, Distinti saluti</i>.</p>
<p><b>Книжные связки</b>: <i lang="it">pertanto</i> (поэтому), <i lang="it">tuttavia</i> (однако), <i lang="it">qualora</i> + congiuntivo (в случае если), <i lang="it">in merito a</i> (по поводу), <i lang="it">alla luce di</i> (в свете).</p>`,
ex:[
['___ professoressa Bianchi, (официальное письмо)','Gentile',['Gentile','Cara','Ciao'],'Нейтрально-вежливое обращение в письме: Gentile.'],
['La ringrazio per la ___. (готовность помочь)','disponibilità',null,'Устойчивая формула: La ringrazio per la disponibilità.'],
['Resto in attesa di un Suo ___.','riscontro',null,'Формула ожидания ответа: in attesa di un Suo riscontro.'],
['___ ci fossero problemi, La prego di contattarmi. (в случае если)','Qualora',null,'Qualora + congiuntivo = «в случае если».'],
['___ saluti (в конце письма)','Cordiali/Distinti',null,'Стандартное окончание: Cordiali saluti или Distinti saluti.']]}
]);
})();
