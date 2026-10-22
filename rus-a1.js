// Corso di russo per italiani. Livello A1. (Struttura ispirata all'ordine di Ovsienko, testi originali.)
window.ITA=window.ITA||{levels:[]};
ITA.levels.push({id:'A1',name:'Principiante',topics:[
{id:'r-a1-alfabeto',t:'Alfabeto e pronuncia',b:`
<p>L'alfabeto russo (cirillico) ha 33 lettere. Alcune sembrano latine ma si leggono in modo diverso.</p>
<table><tr><th>lettera</th><th>suono</th><th>esempio</th></tr>
<tr><td>В в</td><td>v</td><td><i lang="ru">вода</i> (acqua)</td></tr>
<tr><td>Н н</td><td>n</td><td><i lang="ru">нет</i> (no)</td></tr>
<tr><td>Р р</td><td>r</td><td><i lang="ru">рыба</i> (pesce)</td></tr>
<tr><td>С с</td><td>s</td><td><i lang="ru">сок</i> (succo)</td></tr>
<tr><td>Х х</td><td>h aspirata (come la jota spagnola)</td><td><i lang="ru">хлеб</i> (pane)</td></tr>
<tr><td>Ж ж / Ш ш</td><td>j francese / sc di «scena»</td><td><i lang="ru">жена, шапка</i></td></tr>
<tr><td>Ч ч / Щ щ</td><td>c di «ciao» / sc lunga e morbida</td><td><i lang="ru">чай, борщ</i></td></tr>
<tr><td>Ц ц</td><td>z di «pizza»</td><td><i lang="ru">цирк</i></td></tr>
<tr><td>Ы ы</td><td>i «cupa», con la lingua indietro</td><td><i lang="ru">мы, сыр</i></td></tr></table>
<p><b>Vocali dure e molli.</b> А, О, У, Ы, Э sono «dure»; Я (ja), Ё (jo), Ю (ju), И, Е (je) sono «molli» e ammorbidiscono la consonante che precede: <i lang="ru">мама</i> / <i lang="ru">мяч</i>. Il segno molle Ь non si pronuncia: ammorbidisce la consonante (<i lang="ru">мать</i>). Il segno duro Ъ separa (<i lang="ru">объект</i>).</p>
<p><b>L'accento</b> è libero e va imparato con la parola. La О non accentata si legge quasi come A: <i lang="ru">молоко́</i> → «malakò». La Е e la Я non accentate tendono a «i»: <i lang="ru">сестра́</i> → «sistrà».</p>
<p><b>Assordimento.</b> A fine parola le consonanti sonore diventano sorde: <i lang="ru">хлеб</i> si legge «hlep», <i lang="ru">город</i> «gorat».</p>`,
ex:[
['Come si legge la lettera «Р»?','r',['p','r','ps'],'Р in russo è la nostra R: рыба = «ryba».'],
['Come si legge la lettera «Н»?','n',['h','n','e'],'Н corrisponde alla nostra N: нет = «njet».'],
['Quale lettera si legge come la «c» di «ciao»?','Ч',['Ц','Ч','Щ'],'Ч = «c» dolce di ciao: чай.'],
['La parola «молоко» si legge…','malakò',['molokò','malakò','molokó'],'La О non accentata si riduce a un suono simile ad A: ma-la-kò.'],
['Come finisce, a voce, la parola «хлеб»?','p',['b','p'],'A fine parola le sonore diventano sorde: б → п.'],
['Quale segno non ha suono proprio ma ammorbidisce la consonante?','Ь',['Ъ','Ь','Ы'],'Ь (мягкий знак) rende molle la consonante precedente.'],
['Scrivi in russo «sì».','да',null,'«Sì» = да. Se non hai la tastiera russa, usa i tasti sotto il campo.']]},
{id:'r-a1-genere',t:'Il genere dei sostantivi',b:`
<p>In russo ci sono tre generi. Di solito si riconoscono dalla <b>fine della parola</b> al nominativo singolare:</p>
<table><tr><th>genere</th><th>terminazione</th><th>pronome</th><th>esempi</th></tr>
<tr><td>maschile</td><td>consonante, -й</td><td><i lang="ru">он</i></td><td><i lang="ru">дом, стол, музей</i></td></tr>
<tr><td>femminile</td><td>-а, -я</td><td><i lang="ru">она</i></td><td><i lang="ru">мама, книга, неделя</i></td></tr>
<tr><td>neutro</td><td>-о, -е</td><td><i lang="ru">оно</i></td><td><i lang="ru">окно, море, письмо</i></td></tr></table>
<p>Le parole in <b>-ь</b> possono essere maschili (<i lang="ru">день, словарь</i>) o femminili (<i lang="ru">ночь, дверь, тетрадь</i>): vanno imparate.</p>
<p>Conta il significato: <i lang="ru">папа, дедушка, мужчина</i> finiscono in -а ma sono <b>maschili</b>. I sostantivi in <b>-мя</b> sono neutri: <i lang="ru">время, имя</i>.</p>`,
ex:[
['стол → он, она или оно?','он',['он','она','оно'],'Termina in consonante: maschile.'],
['книга → он, она или оно?','она',['он','она','оно'],'Termina in -а: femminile.'],
['окно → он, она или оно?','оно',['он','она','оно'],'Termina in -о: neutro.'],
['папа → он, она или оно?','он',['он','она','оно'],'Finisce in -а, ma indica un uomo: maschile.'],
['музей → он, она или оно?','он',['он','она','оно'],'Termina in -й: maschile.'],
['ночь → он, она или оно?','она',['он','она','оно'],'Le parole in -ь vanno imparate: ночь è femminile.'],
['время → он, она или оно?','оно',['он','она','оно'],'Le parole in -мя sono neutre.']]},
{id:'r-a1-pronomi',t:'Pronomi personali e possessivi',b:`
<table><tr><th>personale</th><th>possessivo (m / f / n / pl.)</th></tr>
<tr><td><i lang="ru">я</i> io</td><td><i lang="ru">мой / моя / моё / мои</i></td></tr>
<tr><td><i lang="ru">ты</i> tu</td><td><i lang="ru">твой / твоя / твоё / твои</i></td></tr>
<tr><td><i lang="ru">он / она / оно</i></td><td><i lang="ru">его</i> (di lui), <i lang="ru">её</i> (di lei): invariabili</td></tr>
<tr><td><i lang="ru">мы</i> noi</td><td><i lang="ru">наш / наша / наше / наши</i></td></tr>
<tr><td><i lang="ru">вы</i> voi, Lei</td><td><i lang="ru">ваш / ваша / ваше / ваши</i></td></tr>
<tr><td><i lang="ru">они</i> loro</td><td><i lang="ru">их</i>: invariabile</td></tr></table>
<p>Il possessivo si accorda con la <b>cosa posseduta</b>: <i lang="ru">мой брат, моя сестра, моё письмо, мои друзья</i>. Non c'è articolo.</p>
<p><i lang="ru">Его, её, их</i> non cambiano mai: <i lang="ru">его мама, его папа, их дом</i>.</p>
<p><i lang="ru">Вы</i> si usa anche come forma di cortesia («Lei»).</p>`,
ex:[
['Это ___ мама. (mia)','моя',['мой','моя','моё'],'Мама è femminile: моя.'],
['Это ___ письмо. (mio)','моё',['мой','моя','моё'],'Письмо è neutro: моё.'],
['Это ___ друзья. (nostri)','наши',['наш','наша','наши'],'Друзья è plurale: наши.'],
['Это Анна и ___ брат. (di lei)','её',['его','её','их'],'Di lei = её, invariabile.'],
['Это Марко и ___ сестра. (di lui)','его',['его','её','их'],'Di lui = его, non cambia con il genere della cosa.'],
['Как ___ зовут? (te)','тебя',['ты','тебя','твой'],'«Come ti chiami?» = Как тебя зовут? (accusativo di ты).'],
['___ дом большой. (vostro)','Ваш',['Ваш','Ваша','Ваше'],'Дом è maschile: ваш.']]},
{id:'r-a1-plurale',t:'Il plurale dei sostantivi',b:`
<table><tr><th>singolare</th><th>plurale</th><th>esempi</th></tr>
<tr><td>consonante dura, -а</td><td>-ы</td><td><i lang="ru">стол → столы, мама → мамы</i></td></tr>
<tr><td>-й, -ь, -я</td><td>-и</td><td><i lang="ru">музей → музеи, словарь → словари, неделя → недели</i></td></tr>
<tr><td>-о</td><td>-а</td><td><i lang="ru">окно → окна, письмо → письма</i></td></tr>
<tr><td>-е</td><td>-я</td><td><i lang="ru">море → моря</i></td></tr></table>
<p><b>Regola ortografica:</b> dopo <b>г, к, х, ж, ш, ч, щ</b> non si scrive mai ы, ma и: <i lang="ru">книга → книги, парк → парки, нож → ножи</i>.</p>
<p>Alcuni maschili hanno -а accentata: <i lang="ru">дом → дома, город → города, глаз → глаза</i>. Irregolari da imparare: <i lang="ru">человек → люди, ребёнок → дети, друг → друзья, брат → братья</i>.</p>`,
ex:[
['стол → ___','столы',null,'Consonante dura: -ы.'],
['книга → ___','книги',null,'Dopo г si scrive и, non ы.'],
['окно → ___','окна',null,'Neutro in -о: plurale in -а.'],
['словарь → ___','словари',null,'Parole in -ь: plurale in -и.'],
['дом → ___','дома',null,'Дом fa eccezione: дома (accento sulla -а).'],
['ребёнок → ___','дети',null,'Irregolare: ребёнок → дети.'],
['друг → ___','друзья',null,'Irregolare: друг → друзья.'],
['море → ___','моря',null,'Neutro in -е: plurale in -я.']]},
{id:'r-a1-presente',t:'Il presente: I e II coniugazione',b:`
<p>I verbi russi hanno due coniugazioni. Si toglie la desinenza dell'infinito e si aggiungono le desinenze personali.</p>
<table><tr><th></th><th>I: читать (leggere)</th><th>II: говорить (parlare)</th></tr>
<tr><td>я</td><td>чита<b>ю</b></td><td>говор<b>ю</b></td></tr>
<tr><td>ты</td><td>чита<b>ешь</b></td><td>говор<b>ишь</b></td></tr>
<tr><td>он/она</td><td>чита<b>ет</b></td><td>говор<b>ит</b></td></tr>
<tr><td>мы</td><td>чита<b>ем</b></td><td>говор<b>им</b></td></tr>
<tr><td>вы</td><td>чита<b>ете</b></td><td>говор<b>ите</b></td></tr>
<tr><td>они</td><td>чита<b>ют</b></td><td>говор<b>ят</b></td></tr></table>
<p>I coniugazione: la maggior parte dei verbi in -ать, -ять (<i lang="ru">делать, знать, понимать, гулять</i>). II coniugazione: la maggior parte dei verbi in -ить (<i lang="ru">говорить, звонить, любить</i>) e alcuni in -еть (<i lang="ru">смотреть</i>).</p>
<p>Nella II coniugazione, alla 1ª persona si inserisce a volte una -л- o cambia la consonante: <i lang="ru">любить → люблю, готовить → готовлю, видеть → вижу</i>.</p>
<p>Verbi da imparare: <i lang="ru">жить</i> (живу, живёшь… живут), <i lang="ru">писать</i> (пишу, пишешь… пишут), <i lang="ru">идти</i> (иду, идёшь… идут).</p>`,
ex:[
['Я ___ (читать) книгу.','читаю',null,'I coniugazione, я: -ю.'],
['Ты ___ (говорить) по-русски?','говоришь',null,'II coniugazione, ты: -ишь.'],
['Мы ___ (знать) это.','знаем',null,'I coniugazione, мы: -ем.'],
['Они ___ (говорить) быстро.','говорят',null,'II coniugazione, они: -ят.'],
['Я ___ (любить) Италию.','люблю',null,'Любить alla 1ª persona inserisce -л-: люблю.'],
['Где ты ___ (жить)?','живёшь/живешь',null,'Жить: живу, живёшь, живёт…'],
['Она ___ (писать) письмо.','пишет',null,'Писать: пишу, пишешь, пишет (с → ш).'],
['Вы ___ (понимать)?','понимаете',null,'I coniugazione, вы: -ете.']]},
{id:'r-a1-avere',t:'«У меня есть» e le frasi senza «essere»',b:`
<p>Al presente il verbo «essere» non si dice: <i lang="ru">Я студент.</i> (Io sono studente.) <i lang="ru">Это мой дом.</i> (Questa è la mia casa.) Nella scrittura a volte si usa il trattino: <i lang="ru">Москва — столица России.</i></p>
<p>«Avere» si dice con <b>у + genitivo + есть</b>: letteralmente «presso di me c'è».</p>
<table><tr><td><i lang="ru">у меня</i></td><td>io ho</td><td><i lang="ru">у нас</i></td><td>noi abbiamo</td></tr>
<tr><td><i lang="ru">у тебя</i></td><td>tu hai</td><td><i lang="ru">у вас</i></td><td>voi avete</td></tr>
<tr><td><i lang="ru">у него / у неё</i></td><td>lui / lei ha</td><td><i lang="ru">у них</i></td><td>loro hanno</td></tr></table>
<p><i lang="ru">У меня есть брат. У тебя есть время?</i> Se si parla di una caratteristica, <i lang="ru">есть</i> si omette: <i lang="ru">У неё красивые глаза.</i></p>
<p>La negazione è <b>нет + genitivo</b>: <i lang="ru">У меня нет машины.</i> (lo vedremo con il genitivo).</p>`,
ex:[
['У ___ есть собака. (io)','меня',['я','меня','мне'],'«Io ho» = у меня есть.'],
['У ___ есть сестра? (tu)','тебя',['ты','тебя','тебе'],'«Tu hai» = у тебя.'],
['У ___ есть машина. (lui)','него',['его','него','он'],'Dopo la preposizione у si dice него (con н-).'],
['У ___ есть дети. (loro)','них',['их','них','они'],'Dopo у: у них.'],
['Я ___ студентка. (sono)','—',['есть','—','быть'],'Al presente «essere» non si esprime: Я студентка.'],
['Come si dice «Abbiamo tempo»?','у нас есть время',['мы имеем время','у нас есть время','мы есть время'],'У нас есть время.']]},
{id:'r-a1-passato',t:'Il passato',b:`
<p>Il passato si forma dall'infinito: si toglie <b>-ть</b> e si aggiunge <b>-л</b>, che si accorda nel genere e nel numero con il soggetto (non con la persona!).</p>
<table><tr><th>soggetto</th><th>читать</th><th>быть</th></tr>
<tr><td>он, я (uomo), ты (uomo)</td><td>читал</td><td>был</td></tr>
<tr><td>она, я (donna), ты (donna)</td><td>читала</td><td>была</td></tr>
<tr><td>оно</td><td>читало</td><td>было</td></tr>
<tr><td>мы, вы, они</td><td>читали</td><td>были</td></tr></table>
<p><i lang="ru">Вчера я была в театре</i> (dice una donna). <i lang="ru">Вчера я был в театре</i> (dice un uomo).</p>
<p>Alcuni verbi irregolari: <i lang="ru">идти → шёл, шла, шли; мочь → мог, могла; есть → ел, ела</i>.</p>`,
ex:[
['Вчера Марко ___ (читать) газету.','читал',null,'Soggetto maschile: -л.'],
['Анна ___ (быть) дома.','была',null,'Soggetto femminile: -ла.'],
['Мы ___ (смотреть) фильм.','смотрели',null,'Plurale: -ли.'],
['Где ты ___ (быть) вчера? (a un uomo)','был',null,'Ты riferito a un uomo: был.'],
['Я ___ (жить) в Риме. (dice una donna)','жила',null,'Io donna: жила.'],
['Он ___ (идти) домой.','шёл/шел',null,'Идти al passato è irregolare: шёл, шла, шли.']]},
{id:'r-a1-prepositivo',t:'Il prepositivo: dove? di chi/cosa?',b:`
<p>Il prepositivo si usa sempre con una preposizione:</p>
<p><b>в / на + prepositivo</b> = stato in luogo (<i lang="ru">где?</i> dove?): <i lang="ru">в Москве, в парке, на работе, на улице</i>.</p>
<p><b>о (об) + prepositivo</b> = di chi, di che cosa si parla: <i lang="ru">Я думаю о маме. Мы говорим о фильме.</i> Davanti a vocale <i lang="ru">об</i>: <i lang="ru">об Италии</i>.</p>
<table><tr><th>nominativo</th><th>prepositivo</th></tr>
<tr><td>стол, музей, окно, мама, неделя</td><td>-е: <i lang="ru">в столе, в музее, в окне, о маме, на неделе</i></td></tr>
<tr><td>-ия, -ие, -ь (femm.)</td><td>-и: <i lang="ru">в России, в здании, в тетради</i></td></tr></table>
<p>Alcuni maschili hanno <b>-у</b> accentata dopo в/на: <i lang="ru">в саду, в лесу, на мосту, в аэропорту</i>.</p>
<p><b>В o на?</b> <i lang="ru">на</i> si usa con superfici, eventi e alcune parole fisse: <i lang="ru">на столе, на концерте, на работе, на почте, на вокзале, на улице</i>.</p>
<p>Pronomi: <i lang="ru">обо мне, о тебе, о нём, о ней, о нас, о вас, о них</i>.</p>`,
ex:[
['Я живу в ___ (Москва).','Москве',null,'Femminile in -а: prepositivo in -е.'],
['Книга на ___ (стол).','столе',null,'Maschile in consonante: -е.'],
['Мы были в ___ (Италия).','Италии',null,'Parole in -ия: prepositivo in -ии.'],
['Он на ___ (работа).','работе',null,'Работа vuole на: на работе.'],
['Мы говорим о ___ (фильм).','фильме',null,'О + prepositivo: о фильме.'],
['Дети гуляют в ___ (лес).','лесу',null,'Лес ha il prepositivo speciale in -у: в лесу.'],
['Она думает о ___ (он).','нём/нем',null,'Pronome он al prepositivo: о нём.'],
['___ Италии (о / об)','об',['о','об','обо'],'Davanti a vocale: об Италии.']]},
{id:'r-a1-accusativo',t:'L\'accusativo singolare',b:`
<p>L'accusativo è il caso del <b>complemento oggetto</b> (chi? che cosa?).</p>
<table><tr><th>tipo</th><th>accusativo</th><th>esempio</th></tr>
<tr><td>femminile -а / -я</td><td>-у / -ю</td><td><i lang="ru">Я читаю книгу. Я люблю Таню.</i></td></tr>
<tr><td>maschile inanimato, neutro</td><td>= nominativo</td><td><i lang="ru">Я вижу дом, окно.</i></td></tr>
<tr><td>maschile animato</td><td>-а / -я (= genitivo)</td><td><i lang="ru">Я вижу брата, Игоря.</i></td></tr>
<tr><td>femminile in -ь</td><td>= nominativo</td><td><i lang="ru">Я люблю ночь.</i></td></tr></table>
<p>Pronomi: <i lang="ru">меня, тебя, его, её, нас, вас, их</i>. «Mi chiamo…» = <i lang="ru">Меня зовут…</i> (letteralmente «mi chiamano»).</p>
<p>Dopo <b>в / на</b> l'accusativo indica il <b>moto a luogo</b> (куда?): <i lang="ru">Я иду в школу.</i> Vedi il tema «Где? Куда?».</p>`,
ex:[
['Я читаю ___ (книга).','книгу',null,'Femminile in -а: -у.'],
['Мы смотрим ___ (фильм).','фильм',null,'Maschile inanimato: uguale al nominativo.'],
['Я жду ___ (брат).','брата',null,'Maschile animato: -а.'],
['Она любит ___ (музыка).','музыку',null,'Femminile in -а: -у.'],
['Ты знаешь ___ (Игорь)?','Игоря',null,'Maschile animato in -ь: -я.'],
['___ зовут Марко. (lui)','Его',['Он','Его','Ему'],'«Si chiama» = его зовут (accusativo).'],
['Я вижу ___ (окно).','окно',null,'Neutro: accusativo uguale al nominativo.']]},
{id:'r-a1-dove',t:'Где? Куда? Stato e moto a luogo',b:`
<table><tr><th>domanda</th><th>caso</th><th>esempio</th></tr>
<tr><td><i lang="ru">где?</i> dove (stato)</td><td>в / на + prepositivo</td><td><i lang="ru">Я в школе. Он на работе.</i></td></tr>
<tr><td><i lang="ru">куда?</i> dove (moto)</td><td>в / на + accusativo</td><td><i lang="ru">Я иду в школу. Он едет на работу.</i></td></tr></table>
<p>Con i verbi <i lang="ru">быть, жить, работать, учиться</i> si risponde a <b>где?</b>. Con <i lang="ru">идти, ехать, ходить, ездить, спешить</i> si risponde a <b>куда?</b>.</p>
<p>Avverbi: <i lang="ru">здесь / сюда</i> (qui / qua, verso qui), <i lang="ru">там / туда</i> (lì / là, verso lì), <i lang="ru">дома / домой</i> (a casa / verso casa).</p>
<p><i lang="ru">Я дома.</i> (Sono a casa.) <i lang="ru">Я иду домой.</i> (Vado a casa.)</p>`,
ex:[
['Я иду в ___ (школа).','школу',null,'Куда? Moto: в + accusativo.'],
['Я работаю в ___ (школа).','школе',null,'Где? Stato: в + prepositivo.'],
['Вечером я иду ___. (a casa, moto)','домой',['дома','домой'],'Moto verso casa: домой.'],
['Сегодня я весь день ___. (a casa)','дома',['дома','домой'],'Stato: дома.'],
['Иди ___! (qua)','сюда',['здесь','сюда'],'Moto verso qui: сюда.'],
['Мы едем на ___ (концерт).','концерт',null,'Куда? на + accusativo; maschile inanimato = nominativo.']]},
{id:'r-a1-aggettivi',t:'L\'aggettivo al nominativo',b:`
<p>L'aggettivo si accorda in genere e numero e sta <b>prima</b> del sostantivo: <i lang="ru">новый дом, новая машина, новое окно, новые книги</i>.</p>
<table><tr><th>m.</th><th>f.</th><th>n.</th><th>pl.</th></tr>
<tr><td>-ый / -ой</td><td>-ая</td><td>-ое</td><td>-ые</td></tr>
<tr><td>-ий (molle)</td><td>-яя</td><td>-ее</td><td>-ие</td></tr></table>
<p><b>-ой</b> quando l'accento cade sulla desinenza: <i lang="ru">молодой, большой</i>. Molli: <i lang="ru">синий, синяя, синее, синие</i>.</p>
<p>Dopo <b>г, к, х, ж, ш, ч, щ</b> si scrive и invece di ы: <i lang="ru">русский, русские; хороший, хорошие</i>.</p>
<p>Domande: <i lang="ru">какой? какая? какое? какие?</i></p>`,
ex:[
['___ машина (новый)','новая',null,'Femminile: -ая.'],
['___ окно (большой)','большое',null,'Neutro: -ое.'],
['___ книги (интересный)','интересные',null,'Plurale: -ые.'],
['___ язык (русский)','русский',null,'Maschile: русский (dopo к si scrive и).'],
['___ море (синий)','синее',null,'Aggettivo molle, neutro: -ее.'],
['___ дети (хороший)','хорошие',null,'Dopo ш si scrive и: хорошие.'],
['___ это дом? – Большой.','Какой',['Какой','Какая','Какое'],'Дом è maschile: какой?']]},
{id:'r-a1-numeri',t:'Numeri, età, prezzi',b:`
<p><i lang="ru">один, два, три, четыре, пять, шесть, семь, восемь, девять, десять; двадцать, тридцать, сто, тысяча</i>.</p>
<p><i lang="ru">Один</i> e <i lang="ru">два</i> si accordano: <i lang="ru">один брат, одна сестра, одно окно; два брата, две сестры</i>.</p>
<p>Dopo i numeri il sostantivo cambia forma (genitivo):</p>
<table><tr><th>1 (21, 31…)</th><th>2, 3, 4 (22…)</th><th>5–20, 25…</th></tr>
<tr><td><i lang="ru">один год, рубль</i></td><td><i lang="ru">два года, рубля</i></td><td><i lang="ru">пять лет, рублей</i></td></tr></table>
<p>Età: <b>dativo + год/года/лет</b>: <i lang="ru">Мне двадцать лет. Ему двадцать один год. Ей двадцать два года.</i></p>
<p>Prezzo: <i lang="ru">Сколько стоит? – Сто рублей.</i></p>`,
ex:[
['Мне двадцать ___. (20 anni)','лет',['год','года','лет'],'Con 5–20: лет.'],
['Ему тридцать один ___.','год',['год','года','лет'],'Con 1, 21, 31: год.'],
['Ей двадцать три ___.','года',['год','года','лет'],'Con 2, 3, 4: года.'],
['___ сестры (2)','две',['два','две'],'Сестра è femminile: две.'],
['___ окно (1)','одно',['один','одна','одно'],'Окно è neutro: одно.'],
['Это стоит пять ___ (рубль).','рублей',null,'Con 5 e oltre: genitivo plurale, рублей.']]}
],
words:`приве́т|ciao
здра́вствуйте|buongiorno (formale)
до свида́ния|arrivederci
пока́|ciao (congedo)
спаси́бо|grazie
пожа́луйста|prego, per favore
извини́те|mi scusi
да|sì
нет|no
ма́ма|mamma
па́па|papà
брат|fratello
сестра́|sorella
друг|amico
подру́га|amica
дом|casa
кварти́ра|appartamento
ко́мната|stanza
стол|tavolo
окно́|finestra
кни́га|libro
шко́ла|scuola
рабо́та|lavoro
у́лица|via
го́род|città
магази́н|negozio
вода́|acqua
хлеб|pane
чай|tè
ко́фе|caffè (maschile!)
молоко́|latte
сего́дня|oggi
вчера́|ieri
за́втра|domani
сейча́с|adesso
здесь|qui
там|lì
хорошо́|bene
пло́хо|male
большо́й|grande
ма́ленький|piccolo
но́вый|nuovo
ста́рый|vecchio
краси́вый|bello
чита́ть|leggere
писа́ть|scrivere
говори́ть|parlare
знать|sapere, conoscere
понима́ть|capire
жить|vivere
рабо́тать|lavorare
люби́ть|amare
идти́|andare (a piedi)
смотре́ть|guardare
де́лать|fare
како́й|quale, che
где|dove (stato)
куда́|dove (moto)
кто|chi
что|che cosa`
});
