// Иллюстрации для страницы итальянского (собственные, векторные).
(function(){
const C={sky:'#CFE3E8',sky2:'#F7D9B5',sea:'#3E7FA6',sea2:'#6FA8C7',lemon:'#F4D35E',olive:'#6B8E3A',olive2:'#4E6B2A',terra:'#D9734E',terra2:'#B85C3C',cream:'#F6EBD9',stone:'#E8D9BE',stone2:'#CDB894',dark:'#2E2A26',pink:'#E9A6A6',white:'#FFFFFF',night:'#1F2A4A',night2:'#33416B',red:'#C8443A',green:'#3F8A4F'};
const svg=(body,bg)=>`<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="320" height="180" fill="${bg||C.sky}"/>${body}</svg>`;
const sun=(x,y,r,c)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c||C.lemon}"/>`;
const cloud=(x,y,s)=>`<g fill="#fff" opacity=".85" transform="translate(${x} ${y}) scale(${s||1})"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="13" ry="10"/><ellipse cx="-10" cy="-4" rx="11" ry="8"/></g>`;
const stars=(n,seed)=>{let s='',x=seed||7;for(let i=0;i<n;i++){x=(x*9301+49297)%233280;const a=x/233280;x=(x*9301+49297)%233280;const b=x/233280;s+=`<circle cx="${(a*320).toFixed(1)}" cy="${(b*120).toFixed(1)}" r="${(0.6+((a+b)%1)*1.4).toFixed(1)}" fill="#fff" opacity="${(0.5+((a*3)%1)*0.5).toFixed(2)}"/>`}return s};

const L={};
// A1: Пиза
L.A1=svg(`${sun(262,40,20)}${cloud(70,42)}${cloud(200,30,.8)}
<rect y="140" width="320" height="40" fill="${C.olive}"/><rect y="150" width="320" height="30" fill="${C.olive2}" opacity=".5"/>
<rect x="20" y="118" width="70" height="26" fill="${C.cream}"/><rect x="20" y="112" width="70" height="8" fill="${C.terra}"/>
${[0,1,2,3,4].map(i=>`<rect x="${26+i*13}" y="124" width="7" height="14" rx="3.5" fill="${C.stone2}"/>`).join('')}
<g transform="rotate(5 165 142)">
${[0,1,2,3,4,5].map(i=>`<rect x="142" y="${126-i*16}" width="46" height="16" fill="${i%2?C.cream:C.white}" stroke="${C.stone2}" stroke-width="1"/>${[0,1,2,3].map(j=>`<rect x="${146+j*11}" y="${129-i*16}" width="5" height="10" rx="2.5" fill="${C.stone2}"/>`).join('')}`).join('')}
<rect x="148" y="30" width="34" height="16" fill="${C.white}" stroke="${C.stone2}"/><rect x="150" y="24" width="30" height="7" fill="${C.stone}"/>
<rect x="138" y="140" width="54" height="5" fill="${C.stone2}"/></g>
<rect x="232" y="104" width="60" height="40" fill="${C.cream}"/><path d="M228 104 L262 86 L296 104Z" fill="${C.terra}"/><circle cx="262" cy="122" r="8" fill="${C.stone2}"/>`);
// A2: Венеция
L.A2=svg(`${sun(60,36,16,C.lemon)}${cloud(230,32,.9)}
${[[0,60,C.terra],[42,46,C.lemon],[80,70,C.pink],[124,52,C.terra2],[170,64,C.cream],[214,48,C.terra],[256,66,C.lemon],[296,54,C.pink]].map(([x,h,c])=>`<rect x="${x}" y="${116-h}" width="${x===296?24:44}" height="${h+8}" fill="${c}"/>${[0,1].map(r=>`<rect x="${x+8}" y="${124-h+r*20}" width="8" height="12" rx="4" fill="${C.dark}" opacity=".55"/><rect x="${x+24}" y="${124-h+r*20}" width="8" height="12" rx="4" fill="${C.dark}" opacity=".55"/>`).join('')}`).join('')}
<rect y="118" width="320" height="62" fill="${C.sea}"/>
${[0,1,2,3,4].map(i=>`<path d="M${i*70} ${136+i%2*14} q15 -5 30 0 t30 0" stroke="${C.sea2}" stroke-width="2" fill="none"/>`).join('')}
<path d="M110 118 Q160 78 210 118" stroke="${C.white}" stroke-width="7" fill="none"/>
<path d="M90 150 Q160 166 236 146 L232 152 Q160 172 94 156Z" fill="${C.dark}"/><path d="M228 146 q8 -10 4 -18" stroke="${C.dark}" stroke-width="3" fill="none"/>
<line x1="200" y1="100" x2="186" y2="158" stroke="${C.dark}" stroke-width="2"/><circle cx="202" cy="118" r="5" fill="${C.dark}"/><rect x="197" y="123" width="10" height="20" fill="${C.white}"/>
${[0,1,2].map(i=>`<line x1="${197}" y1="${127+i*6}" x2="207" y2="${127+i*6}" stroke="${C.red}" stroke-width="2"/>`).join('')}`);
// B1: Колизей
L.B1=svg(`${sun(270,38,18)}${cloud(80,36)}${cloud(170,52,.7)}
<rect y="138" width="320" height="42" fill="${C.stone}"/>
<path d="M40 140 L40 64 Q160 30 280 64 L280 140Z" fill="${C.stone2}"/>
<path d="M40 64 Q160 30 280 64 L280 76 Q160 44 40 76Z" fill="${C.terra2}" opacity=".35"/>
${[0,1,2].map(r=>[...Array(10)].map((_,i)=>`<rect x="${50+i*23}" y="${80+r*20}" width="12" height="14" rx="6" fill="${C.dark}" opacity="${.55-r*.08}"/>`).join('')).join('')}
<path d="M248 140 L248 70 L280 64 L280 140Z" fill="${C.stone}" opacity=".8"/>
<rect x="70" y="148" width="18" height="10" rx="2" fill="${C.olive}"/><rect x="230" y="150" width="24" height="8" rx="2" fill="${C.olive}"/>
<path d="M10 140 q6 -30 0 -60 q-6 30 0 60" fill="${C.olive2}"/><path d="M300 140 q7 -34 0 -66 q-7 32 0 66" fill="${C.olive2}"/>`);
// B2: Флоренция
L.B2=svg(`<rect width="320" height="180" fill="${C.sky2}"/>${sun(60,44,22,'#F2B66B')}
<rect y="130" width="320" height="50" fill="${C.olive2}" opacity=".35"/>
${[[0,40],[34,28],[70,46],[250,36],[284,30]].map(([x,h])=>`<rect x="${x}" y="${132-h}" width="34" height="${h+48}" fill="${C.cream}"/><path d="M${x-2} ${132-h} L${x+17} ${120-h} L${x+36} ${132-h}Z" fill="${C.terra}"/>`).join('')}
<rect x="120" y="96" width="110" height="84" fill="${C.cream}"/>
<path d="M135 98 Q175 20 215 98Z" fill="${C.terra}"/>
${[150,165,175,185,200].map(x=>`<path d="M${x} 98 Q${175+(x-175)*.4} 46 175 36" stroke="${C.white}" stroke-width="2" fill="none"/>`).join('')}
<rect x="168" y="22" width="14" height="16" fill="${C.white}"/><circle cx="175" cy="20" r="4" fill="${C.lemon}"/>
<rect x="232" y="54" width="18" height="126" fill="${C.white}"/>${[0,1,2,3].map(i=>`<rect x="232" y="${70+i*24}" width="18" height="4" fill="${C.green}"/><rect x="232" y="${76+i*24}" width="18" height="3" fill="${C.pink}"/>`).join('')}
<rect x="230" y="48" width="22" height="8" fill="${C.terra}"/>
${[0,1,2,3].map(i=>`<rect x="${132+i*24}" y="${116}" width="10" height="18" rx="5" fill="${C.dark}" opacity=".5"/>`).join('')}`);
// C1: Амальфи
L.C1=svg(`${sun(56,40,18)}${cloud(250,34)}
<rect y="118" width="320" height="62" fill="${C.sea}"/>${[0,1,2,3].map(i=>`<path d="M${20+i*80} ${140+i%2*16} q12 -4 24 0 t24 0" stroke="${C.sea2}" stroke-width="2" fill="none"/>`).join('')}
<path d="M150 120 L180 40 L320 26 L320 120Z" fill="${C.olive2}"/>
${[[190,92,C.lemon],[214,84,C.pink],[238,76,C.white],[262,70,C.terra],[288,62,C.lemon],[200,62,C.white],[226,54,C.terra],[254,46,C.pink],[280,38,C.white],[204,104,C.pink],[232,100,C.cream],[262,96,C.lemon],[292,90,C.pink]].map(([x,y,c])=>`<rect x="${x}" y="${y}" width="22" height="18" fill="${c}"/><rect x="${x+8}" y="${y+6}" width="5" height="7" fill="${C.dark}" opacity=".5"/>`).join('')}
<path d="M70 150 L92 150 L104 140 L60 140Z" fill="${C.white}"/><line x1="80" y1="140" x2="80" y2="112" stroke="${C.dark}" stroke-width="2"/><path d="M82 114 L82 138 L100 138Z" fill="${C.white}"/>
<g transform="translate(26 180)"><path d="M0 0 q4 -40 2 -70" stroke="${C.olive2}" stroke-width="4" fill="none"/><circle cx="2" cy="-72" r="20" fill="${C.olive}"/>${[[-8,-74],[8,-64],[-2,-60],[10,-80]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="4" ry="3" fill="${C.lemon}"/>`).join('')}</g>`);

const T={};
T.famiglia=svg(`<rect width="320" height="180" fill="${C.cream}"/>
<rect x="0" y="0" width="320" height="96" fill="#F2DCC0"/><rect x="230" y="18" width="62" height="56" fill="${C.sky}" stroke="${C.white}" stroke-width="5"/><line x1="261" y1="18" x2="261" y2="74" stroke="${C.white}" stroke-width="4"/>
<path d="M0 96 L320 96 L320 180 L0 180Z" fill="${C.white}"/>
${[...Array(8)].map((_,i)=>[...Array(3)].map((_,j)=>(i+j)%2?`<rect x="${i*40}" y="${96+j*28}" width="40" height="28" fill="${C.red}" opacity=".85"/>`:'').join('')).join('')}
<ellipse cx="110" cy="120" rx="44" ry="14" fill="${C.white}" stroke="${C.stone2}"/><ellipse cx="110" cy="116" rx="30" ry="9" fill="${C.terra}"/>${[0,1,2,3,4].map(i=>`<path d="M${88+i*10} 114 q4 -6 8 0" stroke="${C.lemon}" stroke-width="2" fill="none"/>`).join('')}
<ellipse cx="210" cy="124" rx="34" ry="11" fill="${C.white}" stroke="${C.stone2}"/><path d="M190 120 q20 -14 40 0Z" fill="#E7C68E"/>
<path d="M150 70 L156 104 L148 104Z" fill="${C.olive2}"/><rect x="146" y="102" width="12" height="20" fill="${C.olive2}"/>
<path d="M262 92 q-6 18 6 24 q12 -6 6 -24Z" fill="${C.red}" opacity=".85"/><line x1="268" y1="116" x2="268" y2="132" stroke="${C.stone2}" stroke-width="2"/><ellipse cx="268" cy="133" rx="8" ry="2" fill="${C.stone2}"/>`);
T.amore=svg(`<rect width="320" height="180" fill="#F6D9DA"/>
<path d="M60 120 Q160 30 260 120" stroke="${C.red}" stroke-width="2.5" stroke-dasharray="6 6" fill="none"/>
<path d="M160 60 c-10 -14 -30 -4 -20 12 l20 18 l20 -18 c10 -16 -10 -26 -20 -12Z" fill="${C.red}"/>
<g transform="translate(36 96)"><rect width="48" height="80" rx="9" fill="${C.dark}"/><rect x="4" y="8" width="40" height="62" rx="3" fill="${C.sky}"/><circle cx="24" cy="32" r="10" fill="${C.pink}"/><rect x="12" y="48" width="24" height="5" rx="2.5" fill="${C.white}"/></g>
<g transform="translate(236 96)"><rect width="48" height="80" rx="9" fill="${C.dark}"/><rect x="4" y="8" width="40" height="62" rx="3" fill="${C.lemon}"/><circle cx="24" cy="32" r="10" fill="${C.terra}"/><rect x="12" y="48" width="24" height="5" rx="2.5" fill="${C.white}"/></g>
${[[110,40,.6],[214,44,.5],[150,112,.45]].map(([x,y,s])=>`<path transform="translate(${x} ${y}) scale(${s})" d="M0 0 c-10 -14 -30 -4 -20 12 l20 18 l20 -18 c10 -16 -10 -26 -20 -12Z" fill="${C.pink}"/>`).join('')}`);
T.cinema=svg(`<rect width="320" height="180" fill="${C.night}"/>${stars(30,3)}
<path d="M-10 40 Q160 0 330 40 L330 74 Q160 34 -10 74Z" fill="${C.dark}"/>${[...Array(14)].map((_,i)=>`<rect x="${i*24+4}" y="${30+Math.abs(7-i)*1.2}" width="10" height="7" fill="${C.white}" opacity=".8"/><rect x="${i*24+2}" y="${44+Math.abs(7-i)*1.2}" width="18" height="16" fill="${C.sky2}" opacity="${.3+(i%3)*.2}"/>`).join('')}
<g transform="translate(46 96)"><rect y="16" width="96" height="58" rx="4" fill="${C.dark}"/><path d="M0 0 L96 -14 L98 2 L2 16Z" fill="${C.white}"/>${[0,1,2,3,4].map(i=>`<path d="M${8+i*18} -2 L${18+i*18} -3 L${12+i*18} 13 L${2+i*18} 14Z" fill="${C.dark}"/>`).join('')}<rect x="10" y="30" width="76" height="4" fill="${C.white}" opacity=".6"/><rect x="10" y="42" width="50" height="4" fill="${C.white}" opacity=".6"/></g>
<g transform="translate(206 92)"><path d="M0 0 L64 0 L56 82 L8 82Z" fill="${C.white}"/>${[0,1,2,3].map(i=>`<path d="M${4+i*16} 0 L${12+i*16} 0 L${10+i*14} 82 L${6+i*14} 82Z" fill="${C.red}"/>`).join('')}${[[8,-6],[22,-12],[38,-8],[52,-12],[30,-2],[14,-14],[46,-2]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="8" fill="${C.cream}"/>`).join('')}</g>`,C.night);
T.astrologia=svg(`<rect width="320" height="180" fill="${C.night}"/>${stars(60,11)}
<circle cx="160" cy="92" r="70" fill="none" stroke="${C.lemon}" stroke-width="1.5" opacity=".7"/><circle cx="160" cy="92" r="54" fill="none" stroke="${C.lemon}" stroke-width="1" opacity=".5"/>
${[...Array(12)].map((_,i)=>{const a=i*Math.PI/6,x1=160+54*Math.cos(a),y1=92+54*Math.sin(a),x2=160+70*Math.cos(a),y2=92+70*Math.sin(a),xm=160+62*Math.cos(a+Math.PI/12),ym=92+62*Math.sin(a+Math.PI/12);return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${C.lemon}" opacity=".6"/><circle cx="${xm.toFixed(1)}" cy="${ym.toFixed(1)}" r="2.2" fill="${C.lemon}"/>`}).join('')}
<circle cx="160" cy="92" r="26" fill="${C.lemon}"/><circle cx="170" cy="86" r="24" fill="${C.night}"/>
${[[60,40],[262,130],[280,46],[40,140]].map(([x,y])=>`<path transform="translate(${x} ${y})" d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2Z" fill="${C.white}"/>`).join('')}`,C.night);
T.mentalita=svg(`<rect width="320" height="180" fill="${C.lemon}"/>
<rect y="132" width="320" height="48" fill="${C.terra}"/>
<g transform="translate(70 40)"><path d="M10 92 L50 92 L44 54 L16 54Z" fill="#9AA3A8"/><path d="M14 54 L46 54 L52 34 L8 34Z" fill="#B6BEC2"/><path d="M8 34 L52 34 L46 18 L14 18Z" fill="#9AA3A8"/><rect x="26" y="10" width="8" height="9" fill="${C.dark}"/><path d="M52 40 q22 6 6 34" stroke="${C.dark}" stroke-width="7" fill="none"/><path d="M8 26 L-8 22 L-4 30Z" fill="#9AA3A8"/></g>
<g transform="translate(150 98)"><ellipse cx="22" cy="34" rx="30" ry="6" fill="${C.white}"/><path d="M4 8 L40 8 L36 32 L8 32Z" fill="${C.white}"/><path d="M40 12 q12 2 2 14" stroke="${C.white}" stroke-width="4" fill="none"/><ellipse cx="22" cy="8" rx="18" ry="3" fill="#6B3E26"/>${[0,1,2].map(i=>`<path d="M${12+i*10} 0 q-5 -10 0 -18 q5 -8 0 -16" stroke="${C.white}" stroke-width="2" fill="none" opacity=".8"/>`).join('')}</g>
<g transform="translate(220 30)"><path d="M0 0 h80 a10 10 0 0 1 10 10 v30 a10 10 0 0 1 -10 10 h-56 l-14 12 l2 -12 h-12 a10 10 0 0 1 -10 -10 v-30 a10 10 0 0 1 10 -10Z" fill="${C.white}"/><text x="45" y="33" font-family="Georgia,serif" font-size="18" font-style="italic" text-anchor="middle" fill="${C.dark}">Boh!</text></g>
<g transform="translate(232 96)"><path d="M0 0 h56 a8 8 0 0 1 8 8 v22 a8 8 0 0 1 -8 8 h-40 l-10 10 l1 -10 h-7 a8 8 0 0 1 -8 -8 v-22 a8 8 0 0 1 8 -8Z" fill="${C.olive}"/><text x="30" y="24" font-family="Georgia,serif" font-size="15" font-style="italic" text-anchor="middle" fill="${C.white}">Dai!</text></g>`,C.lemon);
T.cibo=svg(`<rect width="320" height="180" fill="${C.olive}"/>
<circle cx="150" cy="96" r="70" fill="#E3B26B"/><circle cx="150" cy="96" r="60" fill="${C.red}"/>
${[[130,70],[176,78],[120,112],[160,124],[188,108],[146,94]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="11" fill="${C.cream}"/>`).join('')}
${[[140,76,20],[170,104,-30],[128,126,60],[184,86,10]].map(([x,y,r])=>`<ellipse cx="${x}" cy="${y}" rx="7" ry="4" fill="${C.green}" transform="rotate(${r} ${x} ${y})"/>`).join('')}
${[0,1,2].map(i=>{const a=i*Math.PI*2/3;return `<line x1="150" y1="96" x2="${(150+60*Math.cos(a)).toFixed(1)}" y2="${(96+60*Math.sin(a)).toFixed(1)}" stroke="#E3B26B" stroke-width="2"/>`}).join('')}
<g transform="translate(262 120)"><circle r="24" fill="${C.red}"/><path d="M-8 -22 q8 -10 16 0 q-8 -4 -16 0Z" fill="${C.green}"/><circle cx="-8" cy="-6" r="5" fill="${C.white}" opacity=".35"/></g>
<g transform="translate(40 40)">${[[0,0],[16,8],[4,18]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="9" ry="5" fill="${C.green}" transform="rotate(${x*3} ${x} ${y})"/>`).join('')}</g>`,C.olive);
T.viaggi=svg(`${sun(250,50,24)}${cloud(80,40)}${cloud(150,26,.7)}
<rect y="110" width="320" height="70" fill="${C.sea}"/>${[0,1,2,3].map(i=>`<path d="M${30+i*75} ${128+i%2*18} q12 -4 24 0 t24 0" stroke="${C.sea2}" stroke-width="2" fill="none"/>`).join('')}
<path d="M170 110 L210 82 L250 96 L300 78 L320 90 L320 112Z" fill="${C.olive2}" opacity=".85"/>
<g transform="translate(70 92)"><path d="M0 30 L64 30 L54 42 L10 42Z" fill="${C.white}"/><line x1="30" y1="30" x2="30" y2="-20" stroke="${C.dark}" stroke-width="2"/><path d="M32 -18 L32 26 L60 26Z" fill="${C.terra}"/><path d="M28 -14 L28 26 L6 26Z" fill="${C.white}"/></g>
<path d="M210 30 l30 8 l-30 8 l-8 -8Z" fill="${C.white}"/><path d="M214 38 l-6 -14 l6 2 l8 12Z" fill="${C.white}"/><path d="M190 46 q-30 6 -60 0" stroke="${C.white}" stroke-width="1.5" stroke-dasharray="4 5" fill="none"/>
<g transform="translate(26 156)">${[[0,0],[16,-6],[30,2]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="9" ry="7" fill="${C.lemon}"/>`).join('')}<path d="M8 -10 q8 -8 16 -2" stroke="${C.olive2}" stroke-width="3" fill="none"/></g>`);
T.lavoro=svg(`<rect width="320" height="180" fill="${C.sky}"/>
<rect y="140" width="320" height="40" fill="${C.terra2}"/>
<g transform="translate(36 70)">${[[0,C.olive,90],[4,C.terra,82],[-2,C.sea,88],[2,C.lemon,80]].map(([dx,c,w],i)=>`<rect x="${dx}" y="${52-i*18}" width="${w}" height="18" rx="2" fill="${c}"/><rect x="${dx+6}" y="${58-i*18}" width="${w-30}" height="3" fill="${C.white}" opacity=".6"/>`).join('')}
<g transform="translate(20 -20)"><path d="M0 12 L30 0 L60 12 L30 24Z" fill="${C.dark}"/><path d="M14 18 L14 30 Q30 38 46 30 L46 18 L30 24Z" fill="${C.dark}"/><line x1="58" y1="13" x2="58" y2="32" stroke="${C.lemon}" stroke-width="2"/><circle cx="58" cy="34" r="3" fill="${C.lemon}"/></g></g>
<g transform="translate(168 72)"><rect width="110" height="68" rx="6" fill="${C.dark}"/><rect x="6" y="6" width="98" height="56" fill="${C.cream}"/><rect x="14" y="16" width="50" height="5" fill="${C.olive}"/><rect x="14" y="28" width="76" height="3" fill="${C.stone2}"/><rect x="14" y="36" width="70" height="3" fill="${C.stone2}"/><rect x="14" y="44" width="60" height="3" fill="${C.stone2}"/><path d="M-10 68 L120 68 L112 76 L-2 76Z" fill="#9AA3A8"/></g>
<g transform="translate(290 112)"><path d="M0 28 L4 8 L20 8 L24 28Z" fill="${C.white}"/><path d="M12 8 q-10 -18 2 -26 q4 14 -2 26" fill="${C.olive}"/></g>`);
T.emozioni=svg(`<rect width="320" height="180" fill="#F4E7D3"/>
${[[70,92,C.lemon,'smile'],[160,86,C.sea2,'sad'],[250,92,C.pink,'wow']].map(([x,y,c,k])=>`<circle cx="${x}" cy="${y}" r="40" fill="${c}"/><circle cx="${x-13}" cy="${y-8}" r="4.5" fill="${C.dark}"/><circle cx="${x+13}" cy="${y-8}" r="4.5" fill="${C.dark}"/>${k==='smile'?`<path d="M${x-16} ${y+10} q16 16 32 0" stroke="${C.dark}" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="${x-24}" cy="${y+6}" r="5" fill="${C.terra}" opacity=".4"/><circle cx="${x+24}" cy="${y+6}" r="5" fill="${C.terra}" opacity=".4"/>`:k==='sad'?`<path d="M${x-14} ${y+20} q14 -12 28 0" stroke="${C.dark}" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M${x+15} ${y} q4 8 0 12 q-4 -4 0 -12Z" fill="${C.white}"/>`:`<ellipse cx="${x}" cy="${y+16}" rx="8" ry="10" fill="${C.dark}"/><path d="M${x-22} ${y-20} l8 -4 M${x+22} ${y-20} l-8 -4" stroke="${C.dark}" stroke-width="3" stroke-linecap="round"/>`}`).join('')}
${[[112,36],[208,30],[290,150],[24,150]].map(([x,y])=>`<path transform="translate(${x} ${y}) scale(.5)" d="M0 0 c-10 -14 -30 -4 -20 12 l20 18 l20 -18 c10 -16 -10 -26 -20 -12Z" fill="${C.red}" opacity=".7"/>`).join('')}`,'#F4E7D3');
T.casa=svg(`<rect width="320" height="180" fill="${C.lemon}" opacity=".9"/><rect width="320" height="180" fill="#E9B872"/>
<rect x="90" y="18" width="140" height="122" fill="${C.cream}"/><rect x="104" y="30" width="112" height="96" fill="${C.sea}" opacity=".85"/><rect x="104" y="30" width="54" height="96" fill="${C.green}"/><rect x="162" y="30" width="54" height="96" fill="${C.green}"/>${[...Array(9)].map((_,i)=>`<rect x="106" y="${36+i*10}" width="50" height="3" fill="${C.olive2}"/><rect x="164" y="${36+i*10}" width="50" height="3" fill="${C.olive2}"/>`).join('')}
<rect x="76" y="138" width="168" height="8" fill="${C.dark}"/>${[...Array(12)].map((_,i)=>`<rect x="${82+i*14}" y="146" width="3" height="26" fill="${C.dark}"/>`).join('')}<rect x="76" y="170" width="168" height="5" fill="${C.dark}"/>
${[[90,C.red],[150,C.pink],[210,C.red]].map(([x,c])=>`<path d="M${x} 138 L${x+4} 124 L${x+22} 124 L${x+26} 138Z" fill="${C.terra}"/>${[0,1,2].map(i=>`<circle cx="${x+6+i*7}" cy="${118-(i%2)*5}" r="5" fill="${c}"/>`).join('')}<path d="M${x+13} 124 q-6 -14 -14 -12" stroke="${C.olive2}" stroke-width="2" fill="none"/>`).join('')}
<line x1="0" y1="20" x2="90" y2="34" stroke="${C.dark}" stroke-width="1.2"/><line x1="230" y1="34" x2="320" y2="20" stroke="${C.dark}" stroke-width="1.2"/>
${[[14,22,C.white],[40,26,C.sea2],[62,30,C.pink],[246,32,C.white],[272,28,C.lemon],[296,24,C.sea2]].map(([x,y,c])=>`<rect x="${x}" y="${y}" width="18" height="24" fill="${c}"/>`).join('')}`);

ITA.art={levels:L,themes:T};
})();
