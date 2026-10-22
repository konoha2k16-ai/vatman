// Parole per le lezioni B1–C1 (almeno 10 per lezione).
(function(){const W={
'r-b1-casi':`паде́ж|caso
вопро́с|domanda
отве́т|risposta
пода́рок|regalo
карти́нка|figura, immagine
дава́ть|dare
получа́ть|ricevere
расска́зывать|raccontare
кото́рый|che, il quale
по́мнить|ricordare
пра́вило|regola
оконча́ние|desinenza`,
'r-b1-agg-decl':`интере́сный|interessante
ску́чный|noioso
ста́рый|vecchio
дорого́й|caro
дешёвый|economico
ую́тный|accogliente
све́тлый|luminoso
тёмный|scuro
у́зкий|stretto
широ́кий|largo
ти́хий|silenzioso
шу́мный|rumoroso`,
'r-b1-plurale-casi':`лю́ди|persone
де́ти|bambini
друзья́|amici
сосе́ди|vicini di casa
колле́ги|colleghi
роди́тели|genitori
ве́щи|cose, oggetti
дела́|affari, cose da fare
пла́ны|piani
пробле́мы|problemi
но́вости|notizie
уро́ки|lezioni`,
'r-b1-numeri-casi':`ты́сяча|mille
миллио́н|milione
полови́на|metà
полтора́|uno e mezzo
не́сколько|alcuni
ско́лько|quanto
мину́та|minuto
секу́нда|secondo
килогра́мм|chilo
литр|litro
проце́нт|percentuale
цена́|prezzo`,
'r-b1-ordinali':`пе́рвый|primo
второ́й|secondo
тре́тий|terzo
четвёртый|quarto
пя́тый|quinto
деся́тый|decimo
после́дний|ultimo
век|secolo
эта́ж|piano
глава́|capitolo
ряд|fila
ме́сто|posto`,
'r-b1-prefissi':`приходи́ть / прийти́|arrivare
уходи́ть / уйти́|andarsene
входи́ть / войти́|entrare
выходи́ть / вы́йти|uscire
переходи́ть / перейти́|attraversare
заходи́ть / зайти́|passare da
подходи́ть / подойти́|avvicinarsi
приезжа́ть / прие́хать|arrivare (mezzo)
уезжа́ть / уе́хать|partire (mezzo)
перее́хать|trasferirsi
вход|entrata
вы́ход|uscita`,
'r-b1-portare':`нести́ / носи́ть|portare a mano
вести́ / води́ть|condurre
везти́ / вози́ть|portare con un mezzo
принести́|portare qui
привезти́|portare (da un viaggio)
привести́|portare qualcuno
су́мка|borsa
чемода́н|valigia
поку́пки|spesa, acquisti
цветы́|fiori
очки́|occhiali
везёт|ha fortuna`,
'r-b1-posizione':`стоя́ть|stare in piedi
лежа́ть|stare sdraiato
сиде́ть|stare seduto
висе́ть|essere appeso
ста́вить / поста́вить|mettere in piedi
класть / положи́ть|mettere sdraiato
ве́шать / пове́сить|appendere
сади́ться / сесть|sedersi
ложи́ться / лечь|sdraiarsi
по́лка|scaffale
шкаф|armadio
стена́|parete`,
'r-b1-svoy':`свой|proprio
жена́|moglie
муж|marito
ключи́|chiavi
поку́пка|acquisto
пое́здка|viaggio
забыва́ть|dimenticare
иска́ть|cercare
продава́ть|vendere
расска́зывать|raccontare
мне́ние|opinione
вкус|gusto`,
'r-b1-dimostrativi':`э́тот|questo
тот|quello
весь|tutto
все|tutti
всё|tutto (le cose)
сам|da solo, stesso
себя́|sé
то́т же|lo stesso
ка́ждый|ogni
друго́й|altro
чу́вствовать себя́|sentirsi
с собо́й|con sé`,
'r-b1-kotoryj':`кото́рый|che, il quale
де́вушка|ragazza
па́рень|ragazzo
писа́тель|scrittore
поэ́т|poeta
рома́н|romanzo
расска́з|racconto
родно́й го́род|città natale
знако́миться|conoscersi, fare conoscenza
роди́ться|nascere
все говоря́т|tutti dicono
о́пыт|esperienza`,
'r-b1-negazione':`никто́|nessuno
ничто́ / ничего́|niente
никогда́|mai
нигде́|da nessuna parte
никуда́|da nessuna parte (moto)
никако́й|nessun
ниче́й|di nessuno
не́кому|non c'è nessuno a cui
не́чего|non c'è niente da
не́где|non c'è posto dove
не́когда|non c'è tempo
ни… ни…|né… né…`,
'r-b1-date':`число́|data, numero
день рожде́ния|compleanno
с… по…|dal… al…
за неде́лю|in una settimana
на ме́сяц|per un mese
че́рез год|tra un anno
давно́|da tanto tempo
неда́вно|di recente
в тече́ние|nel corso di
до обе́да|prima di pranzo
по́сле рабо́ты|dopo il lavoro
нача́ло / коне́ц|inizio / fine`,
'r-b2-chtoby':`что́бы|perché, affinché
хоте́ть, что́бы|volere che
проси́ть|chiedere (un favore)
сове́товать|consigliare
тре́бовать|esigere
ва́жно|è importante
необходи́мо|è necessario
цель|scopo
зарабо́тать|guadagnare
накопи́ть|risparmiare
мечта́|sogno
уси́лие|sforzo`,
'r-b2-discorso':`сказа́ть|dire
спроси́ть|chiedere
отве́тить|rispondere
объясни́ть|spiegare
сообщи́ть|comunicare
ли|se (interrogativo)
е́сли|se (condizionale)
пра́вда|verità
но́вость|notizia
обеща́ть|promettere
узна́ть|venire a sapere
сомнева́ться|dubitare`,
'r-b2-dire':`говори́ть|parlare
сказа́ть|dire
рассказа́ть|raccontare
поговори́ть|parlare un po'
разгова́ривать|conversare
спра́шивать / спроси́ть|chiedere (informazione)
проси́ть / попроси́ть|chiedere (favore)
зада́ть вопро́с|fare una domanda
по́мощь|aiuto
сове́т|consiglio
разгово́р|conversazione
нам на́до поговори́ть|dobbiamo parlare`,
'r-b2-comparativo':`бо́льше|più grande, di più
ме́ньше|più piccolo, di meno
лу́чше|meglio
ху́же|peggio
доро́же|più caro
деше́вле|più economico
ста́рше|più vecchio
моло́же|più giovane
быстре́е|più veloce
гора́здо|molto (+ comparativo)
са́мый|il più
чем|di, che (paragone)`,
'r-b2-condizionale':`бы|particella del condizionale
е́сли бы|se (irreale)
хоте́л бы|vorrei
мог бы|potrei
на твоём ме́сте|al tuo posto
жаль|peccato
мечта́ть|sognare
возмо́жность|possibilità
вы́играть|vincere
лотере́я|lotteria
уда́ча|fortuna
жела́ние|desiderio`,
'r-b2-aspetto2':`начина́ть|cominciare
продолжа́ть|continuare
зака́нчивать|finire
переста́ть|smettere
бро́сить кури́ть|smettere di fumare
опа́здывать / опозда́ть|fare tardi
открыва́ть|aprire
закрыва́ть|chiudere
забы́ть|dimenticare
не на́до|non serve, non farlo
входи́те|entrate (invito)
сади́тесь|sedetevi`,
'r-b2-indefiniti':`кто́-то|qualcuno
что́-то|qualcosa
где́-то|da qualche parte
когда́-то|un tempo
кто́-нибудь|qualcuno (chiunque)
что́-нибудь|qualcosa (qualsiasi)
куда́-нибудь|da qualche parte (moto)
когда́-нибудь|un giorno, mai (in domanda)
како́й-то|un certo
кое-что́|una cosa (che so io)
ка́к-то|in qualche modo
стуча́ть|bussare`,
'r-b2-brevi':`рад|contento
прав|ha ragione
за́нят|occupato
свобо́ден|libero
гото́в|pronto
бо́лен|malato
здоро́в|sano
согла́сен|d'accordo
уве́рен|sicuro
похо́ж на|somigliante a
до́лжен|deve
дово́лен|soddisfatto`,
'r-b2-numeri-decl':`о́ба / о́бе|entrambi
дво́е|in due
тро́е|in tre
о́коло|circa
приме́рно|più o meno
до́ллар|dollaro
е́вро|euro
сто́имость|costo
расстоя́ние|distanza
киломе́тр|chilometro
населе́ние|popolazione
сре́днее|media`,
'r-b2-congiunzioni':`потому́ что|perché
так как|poiché
поэ́тому|perciò
хотя́|sebbene
несмотря́ на|nonostante
из-за|a causa di
благодаря́|grazie a
как то́лько|non appena
пока́ не|finché non
пе́ред тем как|prima di
по́сле того́ как|dopo che
та́кже|inoltre`,
'r-c1-gerundio':`чита́я|leggendo
говоря́|parlando
занима́ясь|studiando
прочита́в|avendo letto
верну́вшись|tornato
улыба́ясь|sorridendo
мо́лча|in silenzio
сто́я|in piedi
лёжа|sdraiato
благодаря́|grazie a
не зна́я|non sapendo
узна́в|venuto a sapere`,
'r-c1-part-att':`чита́ющий|che legge
говоря́щий|che parla
живу́щий|che vive
уча́щийся|studente
прие́хавший|arrivato
бу́дущий|futuro
сле́дующий|prossimo
настоя́щий|vero, presente
служа́щий|impiegato
заве́дующий|direttore
блестя́щий|brillante
отдыха́ющие|villeggianti`,
'r-c1-part-pass':`откры́т|aperto
закры́т|chiuso
на́писан|scritto
постро́ен|costruito
про́дан|venduto
запрещено́|vietato
решено́|deciso
сде́лано|fatto
люби́мый|amato, preferito
уважа́емый|stimato
необходи́мый|necessario
незави́симый|indipendente`,
'r-c1-passivo':`говоря́т|si dice
продаю́тся|si vendono
стро́ится|si costruisce
мне пришло́сь|ho dovuto
мне удало́сь|sono riuscito
ему́ повезло́|gli è andata bene
мне не спи́тся|non riesco a dormire
мне хо́чется|ho voglia
темне́ет|fa buio
светле́ет|si fa giorno
меня́ зову́т|mi chiamo
сообща́ют|si comunica`,
'r-c1-prefissi':`запла́кать|scoppiare a piangere
засмея́ться|scoppiare a ridere
погуля́ть|fare una passeggiata
проспа́ть|dormire (tutto il tempo), dormire troppo
переде́лать|rifare
дочита́ть|finire di leggere
вы́спаться|dormire abbastanza
нае́сться|saziarsi
разойти́сь|separarsi
собра́ться|radunarsi
подслу́шать|origliare
осмотре́ть|esaminare`,
'r-c1-formazione':`учи́тель|insegnante
писа́тель|scrittore
перево́дчик|traduttore
студе́нтка|studentessa
ра́дость|gioia
де́тство|infanzia
чте́ние|lettura
реше́ние|decisione
зи́мний|invernale
городско́й|cittadino
до́мик|casetta
несча́стный|infelice`,
'r-c1-ordine':`те́ма|tema
и́мя и о́тчество|nome e patronimico
вы / ты|Lei / tu
уменьши́тельный|diminutivo
интона́ция|intonazione
официа́льный|ufficiale
разгово́рный|colloquiale
в связи́ с|in relazione a
согла́сно|secondo
то есть|cioè
ну|beh
коро́че|insomma`,
'r-c1-verbi-casi':`боя́ться|avere paura
избега́ть|evitare
горди́ться|essere fiero
интересова́ться|interessarsi
по́льзоваться|usare
зави́довать|invidiare
ве́рить|credere
дове́рять|fidarsi
зави́сеть от|dipendere da
жа́ловаться на|lamentarsi di
забо́титься о|prendersi cura di
жени́ться на|sposare (uomo)`
};ITA.levels.forEach(l=>l.topics.forEach(t=>{if(W[t.id]&&!t.words)t.words=W[t.id]}))})();
