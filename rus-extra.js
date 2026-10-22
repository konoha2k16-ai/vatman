// Argomenti aggiuntivi, inseriti nei livelli dopo l'argomento indicato.
(function(){
const ins=(lv,after,t)=>{const L=ITA.levels.find(l=>l.id===lv);if(!L||L.topics.some(x=>x.id===t.id))return;const i=L.topics.findIndex(x=>x.id===after);L.topics.splice(i<0?L.topics.length:i+1,0,t)};

ins('A1','r-a1-presente',{id:'r-a1-alternanze',t:'Verbi con alternanze e verbi in -овать',b:`
<p>Molti verbi cambiano la consonante finale della radice nel presente. Di solito il cambio c'è in <b>tutte le persone</b> (I coniugazione) oppure <b>solo nella 1ª singolare</b> (II coniugazione).</p>
<table><tr><th>tipo</th><th>alternanza</th><th>esempio</th></tr>
<tr><td>I coniug.: tutte le persone</td><td>с → ш</td><td>писать: пишу, пишешь, пишут</td></tr>
<tr><td>I coniug.: tutte le persone</td><td>к → ч</td><td>плакать: плачу, плачешь</td></tr>
<tr><td>II coniug.: solo «я»</td><td>д → ж</td><td>видеть: вижу, видишь</td></tr>
<tr><td>II coniug.: solo «я»</td><td>с → ш, т → ч</td><td>просить: прошу, просишь; платить: плачу, платишь</td></tr>
<tr><td>II coniug.: solo «я»</td><td>б, п, в, м + л</td><td>любить: люблю, любишь; спать: сплю, спишь</td></tr></table>
<p><b>Verbi in -овать / -евать</b>: il suffisso diventa <b>-у-</b>: <i lang="ru">рисовать → рисую, рисуешь, рисуют; танцевать → танцую</i>.</p>
<p><b>Verbi in -авать</b>: perdono -ва-: <i lang="ru">давать → даю, даёшь; вставать → встаю; узнавать → узнаю</i>.</p>`,
ex:[
['Я ___ письмо. (писать)','пишу',null,'Писать: с → ш in tutte le persone: пишу.'],
['Я ___ тебя. (любить)','люблю',null,'Любить: nella 1ª persona compare -л-: люблю.'],
['Я ___ море. (видеть)','вижу',null,'Видеть: д → ж solo per «я»: вижу, ma видишь.'],
['Он хорошо ___. (рисовать)','рисует',null,'-овать → -ует: рисует.'],
['Мы ___ в семь. (вставать)','встаём/встаем',null,'-авать perde -ва-: встаём.'],
['Ты ___ (танцевать)?','танцуешь',null,'-евать → -уешь: танцуешь.'],
['Я ___ за кофе. (платить)','плачу',null,'Платить: т → ч solo per «я»: плачу.']]});

ins('A2','r-a2-modali',{id:'r-a2-sapere',t:'Знать, уметь, мочь',b:`
<p>L'italiano «sapere» e «potere» si dividono in tre verbi russi:</p>
<table><tr><th>verbo</th><th>significato</th><th>esempio</th></tr>
<tr><td>знать</td><td>sapere un fatto, conoscere</td><td>Я знаю, где он живёт. Я знаю Джованни.</td></tr>
<tr><td>уметь</td><td>saper fare (abilità imparata)</td><td>Я умею плавать. Он умеет готовить.</td></tr>
<tr><td>мочь</td><td>potere, riuscire (possibilità)</td><td>Я не могу прийти, я занят.</td></tr></table>
<p><i lang="ru">Я умею плавать, но сегодня не могу: холодно.</i> = So nuotare, ma oggi non posso: fa freddo.</p>
<p><b>Знать</b> non regge mai un infinito: «so cucinare» è <i lang="ru">я умею готовить</i>, non «я знаю готовить».</p>
<p>Coniugazioni: <i lang="ru">знаю, знаешь; умею, умеешь; могу, можешь, могут</i>.</p>`,
ex:[
['Я ___ играть на гитаре. (so suonare)','умею',['знаю','умею','могу'],'Abilità imparata → уметь.'],
['Я не ___, где ключи. (non so)','знаю',['знаю','умею','могу'],'Sapere un fatto → знать.'],
['Извини, я не ___ сегодня прийти. (non posso)','могу',['знаю','умею','могу'],'Possibilità → мочь.'],
['Ты ___ Анну? (conosci)','знаешь',null,'Conoscere una persona → знать.'],
['Он ___ водить машину. (sa guidare)','умеет',null,'Abilità → уметь: умеет.']]});

ins('A2','r-a2-sya',{id:'r-a2-studiare',t:'Учить, учиться, изучать, заниматься',b:`
<p>«Studiare» in russo ha quattro verbi diversi, ognuno con una costruzione propria:</p>
<table><tr><th>verbo</th><th>costruzione</th><th>significato</th><th>esempio</th></tr>
<tr><td>учиться</td><td>где? (prep.)</td><td>essere studente, frequentare</td><td>Я учусь в университете.</td></tr>
<tr><td>учить</td><td>что? (acc.)</td><td>imparare a memoria, studiare qualcosa</td><td>Я учу русский. Я учу слова.</td></tr>
<tr><td>учить</td><td>кого? чему? (acc. + dat.)</td><td>insegnare</td><td>Она учит детей музыке.</td></tr>
<tr><td>изучать</td><td>что? (acc.)</td><td>studiare a fondo, una disciplina</td><td>Он изучает историю России.</td></tr>
<tr><td>заниматься</td><td>чем? (strum.) / senza oggetto</td><td>fare i compiti, praticare</td><td>Вечером я занимаюсь. Я занимаюсь спортом.</td></tr></table>
<p>Il perfettivo <i lang="ru">выучить</i> = imparare del tutto: <i lang="ru">Я выучил стихотворение.</i> <i lang="ru">Научиться + inf.</i> = imparare a fare qualcosa: <i lang="ru">Я научился плавать.</i></p>`,
ex:[
['Я ___ в университете. (studio, sono studente)','учусь',['учу','учусь','изучаю'],'Dove studi → учиться + prepositivo.'],
['Я ___ русский язык. (studio)','учу/изучаю',['учу','учусь'],'Studiare una lingua → учить (o изучать) + accusativo.'],
['Вечером я ___ в библиотеке. (faccio i compiti)','занимаюсь',['занимаюсь','учу'],'Studiare senza oggetto, fare i compiti → заниматься.'],
['Я занимаюсь ___ (спорт).','спортом',null,'Заниматься + strumentale.'],
['Он ___ плавать летом. (imparò)','научился',['выучил','научился'],'Imparare a fare qualcosa → научиться + infinito.']]});

ins('B1','r-b1-svoy',{id:'r-b1-dimostrativi',t:'Этот, тот, весь, сам, себя',b:`
<p><b>Этот</b> = questo, <b>тот</b> = quello (anche «l'altro»): <i lang="ru">этот дом, эта книга, это окно, эти люди; тот, та, то, те</i>. Si declinano: <i lang="ru">в этом доме, с той девушкой</i>. Attenzione: <i lang="ru">Это мой дом</i> (это invariabile = «questo è») ≠ <i lang="ru">Этот дом мой</i> (questa casa è mia).</p>
<p><b>Весь</b> = tutto: <i lang="ru">весь день, вся жизнь, всё время, все люди</i>. <i lang="ru">Всё</i> = tutto (le cose), <i lang="ru">все</i> = tutti (le persone).</p>
<p><b>Сам</b> = da solo, in persona: <i lang="ru">Я сам сделал. Она сама пришла.</i> Non confondere con <b>самый</b> (il più).</p>
<p><b>Себя</b> = sé (riflessivo), non ha nominativo: <i lang="ru">себя, себе, собой, о себе</i>. <i lang="ru">Он думает только о себе. Возьми с собой зонт.</i></p>`,
ex:[
['Я живу в ___ доме. (questa)','этом',null,'Этот al prepositivo maschile: этом.'],
['___ мой брат. (questo è)','Это',['Это','Этот'],'«Questo è…» = это (invariabile).'],
['Я работал ___ день. (tutto il giorno)','весь',['весь','все','всё'],'День è maschile: весь день.'],
['___ пришли? (sono venuti tutti?)','все (tutti)',['все (tutti)','всё (tutto)'],'Tutti (persone) = все.'],
['Он сделал это ___. (da solo)','сам',['сам','самый','себя'],'Da solo = сам.'],
['Возьми зонт с ___. (con te)','собой',null,'Себя allo strumentale: с собой.']]});

ins('B1','r-b1-numeri-casi',{id:'r-b1-ordinali',t:'Numeri ordinali',b:`
<p>Gli ordinali si comportano come aggettivi: concordano e si declinano.</p>
<table><tr><th></th><th>ordinale</th><th></th><th>ordinale</th></tr>
<tr><td>1</td><td>первый</td><td>7</td><td>седьмой</td></tr>
<tr><td>2</td><td>второй</td><td>8</td><td>восьмой</td></tr>
<tr><td>3</td><td>третий (третья, третье)</td><td>9</td><td>девятый</td></tr>
<tr><td>4</td><td>четвёртый</td><td>10</td><td>десятый</td></tr>
<tr><td>5</td><td>пятый</td><td>20</td><td>двадцатый</td></tr>
<tr><td>6</td><td>шестой</td><td>100</td><td>сотый</td></tr></table>
<p>Nei numeri composti solo l'ultima parola è ordinale: <i lang="ru">двадцать первый век, в тысяча девятьсот девяностом году</i>.</p>
<p>Usi: piani (<i lang="ru">на пятом этаже</i>), date (<i lang="ru">первое мая</i>), anni (<i lang="ru">в двухтысячном году</i>), secoli (<i lang="ru">в девятнадцатом веке</i>), ore (<i lang="ru">в начале третьего</i> = poco dopo le due).</p>`,
ex:[
['Я живу на ___ этаже. (5°)','пятом',null,'На + prepositivo: пятом.'],
['Сегодня ___ мая. (il 2)','второе',null,'Data: ordinale neutro: второе.'],
['Это мой ___ урок. (1°)','первый',null,'Урок è maschile: первый.'],
['Пушкин жил в ___ веке. (XIX)','девятнадцатом',null,'В + prepositivo: в девятнадцатом веке.'],
['___ глава (3ª)','третья',null,'Третий ha forme speciali: третья, третье.']]});

ins('B1','r-b1-portare',{id:'r-b1-posizione',t:'Stare, mettere: стоять, лежать, сидеть, висеть',b:`
<p>Il russo distingue la <b>posizione</b> degli oggetti. Si dice anche delle cose: un libro «giace», una bottiglia «sta in piedi».</p>
<table><tr><th>posizione</th><th>dove si trova? (где? + prep.)</th><th>mettere (куда? + acc.)</th><th>mettersi</th></tr>
<tr><td>in verticale</td><td>стоять: Бутылка стоит на столе.</td><td>ставить / поставить</td><td>вставать / встать</td></tr>
<tr><td>in orizzontale</td><td>лежать: Книга лежит на столе.</td><td>класть / положить</td><td>ложиться / лечь</td></tr>
<tr><td>seduto</td><td>сидеть: Кошка сидит на окне.</td><td>сажать / посадить</td><td>садиться / сесть</td></tr>
<tr><td>appeso</td><td>висеть: Картина висит на стене.</td><td>вешать / повесить</td><td>—</td></tr></table>
<p><b>Dove</b> (где?) → в/на + prepositivo; <b>dove metti</b> (куда?) → в/на + accusativo: <i lang="ru">Я кладу книгу на стол. Книга лежит на столе.</i></p>
<p>Attenzione: <i lang="ru">класть</i> (imperf.) e <i lang="ru">положить</i> (perf.) hanno radici diverse.</p>`,
ex:[
['Книга ___ на столе.','лежит',['стоит','лежит','висит'],'Orizzontale → лежать.'],
['Ваза ___ на столе.','стоит',['стоит','лежит','сидит'],'Verticale → стоять.'],
['Картина ___ на стене.','висит',null,'Appeso → висеть.'],
['Я ___ ключи в сумку. (metto, orizzontale)','кладу',['кладу','ставлю','вешаю'],'Mettere in orizzontale → класть: кладу.'],
['___ чашку на стол! (metti, perf.)','Поставь',['Положи','Поставь'],'Tazza in piedi → поставить: поставь.'],
['Ключи лежат на ___ (стол).','столе',null,'Где? → на + prepositivo.']]});

ins('B2','r-b2-discorso',{id:'r-b2-dire',t:'Говорить, сказать, рассказать; спрашивать, просить',b:`
<p><b>Говорить / сказать</b>: parlare / dire. <i lang="ru">говорить</i> = parlare (processo, lingue); <i lang="ru">сказать</i> = dire una cosa precisa. <i lang="ru">Он говорит по-русски. Он сказал, что придёт.</i></p>
<p><b>Рассказывать / рассказать</b> = raccontare (una storia, о + prep.): <i lang="ru">Расскажи о себе!</i></p>
<p><b>Спрашивать / спросить</b> = chiedere un'informazione (кого? + о чём?): <i lang="ru">Я спросил маму, где ключи.</i></p>
<p><b>Просить / попросить</b> = chiedere un favore, una cosa (кого? + что / + inf.): <i lang="ru">Я попросил друга помочь. Он попросил счёт.</i></p>
<p>Italiano «chiedere» → due verbi. Domanda o informazione → <b>спросить</b>. Richiesta di fare/dare → <b>попросить</b>.</p>
<p><i lang="ru">Сказать</i> regge il dativo: <i lang="ru">скажи мне</i>; <i lang="ru">спросить</i> l'accusativo: <i lang="ru">спроси его</i>.</p>`,
ex:[
['Он ___, как меня зовут. (chiese, informazione)','спросил',['спросил','попросил'],'Informazione → спросить.'],
['Она ___ меня закрыть окно. (chiese, favore)','попросила',['спросила','попросила'],'Richiesta di fare → попросить.'],
['___ мне правду! (dimmi)','Скажи',['Скажи','Говори','Расскажи'],'Dire una cosa precisa → сказать: скажи.'],
['___ о своей поездке! (racconta)','Расскажи',null,'Raccontare → рассказать.'],
['Он хорошо ___ по-итальянски.','говорит',['говорит','сказал'],'Parlare una lingua → говорить.'],
['Спроси ___ (он), где он живёт.','его',null,'Спросить кого? → accusativo: его.']]});

ins('B2','r-b2-brevi',{id:'r-b2-numeri-decl',t:'La declinazione dei numerali',b:`
<p>I numerali cardinali si declinano, e il sostantivo li segue nello stesso caso (tranne nominativo e accusativo).</p>
<table><tr><th>caso</th><th>2</th><th>3</th><th>4</th><th>5 (come тетрадь)</th></tr>
<tr><td>nom.</td><td>два / две</td><td>три</td><td>четыре</td><td>пять</td></tr>
<tr><td>gen.</td><td>двух</td><td>трёх</td><td>четырёх</td><td>пяти</td></tr>
<tr><td>dat.</td><td>двум</td><td>трём</td><td>четырём</td><td>пяти</td></tr>
<tr><td>strum.</td><td>двумя</td><td>тремя</td><td>четырьмя</td><td>пятью</td></tr>
<tr><td>prep.</td><td>о двух</td><td>о трёх</td><td>о четырёх</td><td>о пяти</td></tr></table>
<p>Esempi: <i lang="ru">с двумя друзьями, в пяти минутах от центра, от трёх до шести, к двум часам</i>.</p>
<p><b>Оба / обе</b> = entrambi: <i lang="ru">оба брата, обе сестры; у обоих, у обеих</i>. <b>Collettivi</b> (двое, трое, четверо) con persone maschili e bambini: <i lang="ru">У нас двое детей.</i></p>
<p>Nel parlato i numeri lunghi spesso non si declinano del tutto, ma nello scritto sì.</p>`,
ex:[
['Я живу с ___ друзьями. (2)','двумя',null,'С + strumentale: двумя.'],
['Музей работает до ___ часов. (5)','пяти',null,'До + genitivo: пяти.'],
['Магазин в ___ минутах отсюда. (5)','пяти',null,'В + prepositivo: пяти.'],
['Я позвоню ___ сёстрам. (3)','трём',null,'Dativo: трём.'],
['___ брата пришли. (entrambi)','Оба',['Оба','Обе'],'Брат è maschile: оба.'],
['У нас ___ детей. (2, collettivo)','двое',null,'Collettivo con дети: двое детей.']]});

ins('C1','r-c1-prefissi',{id:'r-c1-formazione',t:'Formazione delle parole',b:`
<p>Conoscere i suffissi aiuta a capire parole nuove senza dizionario.</p>
<table><tr><th>suffisso</th><th>significato</th><th>esempi</th></tr>
<tr><td>-тель, -ник, -чик</td><td>chi fa (persona)</td><td>учитель, писатель, работник, переводчик</td></tr>
<tr><td>-ка, -ница</td><td>femminile</td><td>студентка, итальянка, учительница</td></tr>
<tr><td>-ость, -ство</td><td>qualità astratta</td><td>радость, молодость, детство, богатство</td></tr>
<tr><td>-ние, -ение</td><td>azione (da verbo)</td><td>чтение, решение, приглашение</td></tr>
<tr><td>-ск-</td><td>aggettivo di relazione</td><td>русский, городской, детский</td></tr>
<tr><td>-н-</td><td>aggettivo da nome</td><td>зимний, книжный, интересный</td></tr>
<tr><td>-ик, -ок, -чк-</td><td>diminutivo</td><td>домик, городок, водичка</td></tr>
<tr><td>без-, не-</td><td>senza, non</td><td>бездомный, несчастный</td></tr></table>
<p>Radici comuni: <i lang="ru">вод- (вода, водопровод), жи- (жить, жизнь, живой), зна- (знать, знание, знакомый)</i>.</p>`,
ex:[
['Chi traduce (переводить):','переводчик',['переводчик','перевод','переводить'],'Persona: -чик.'],
['Sostantivo da читать (la lettura):','чтение',null,'Azione: -ние: чтение.'],
['Qualità da молодой (giovinezza):','молодость',null,'-ость: молодость.'],
['Aggettivo da зима:','зимний',null,'-н-: зимний.'],
['Femminile di студент:','студентка',null,'-ка: студентка.']]});
})();
