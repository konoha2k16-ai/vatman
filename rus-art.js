// Illustrazioni per il corso di russo (vettoriali, originali).
(function(){
const C={sky:'#D6E6F2',sky2:'#F5DCC4',snow:'#F4F7FA',snow2:'#DCE6EE',red:'#C23B32',red2:'#9E2A24',gold:'#E2B33C',gold2:'#C7922A',blue:'#2F5D8C',blue2:'#5C8BB8',green:'#3C7A4E',green2:'#285C39',birch:'#F2EFE8',dark:'#2A2A33',cream:'#F6EBD9',pink:'#E9A6A6',wood:'#9A6A43',wood2:'#7A4F30',lake:'#2E6E8E',lake2:'#4F95B3',night:'#1D2647',teal:'#2F8C86',white:'#FFFFFF'};
const svg=(body,bg)=>`<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="320" height="180" fill="${bg||C.sky}"/>${body}</svg>`;
const sun=(x,y,r,c)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c||C.gold}"/>`;
const cloud=(x,y,s)=>`<g fill="#fff" opacity=".85" transform="translate(${x} ${y}) scale(${s||1})"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="13" ry="10"/><ellipse cx="-10" cy="-4" rx="11" ry="8"/></g>`;
const flakes=(n,seed)=>{let s='',x=seed||5;for(let i=0;i<n;i++){x=(x*9301+49297)%233280;const a=x/233280;x=(x*9301+49297)%233280;const b=x/233280;s+=`<circle cx="${(a*320).toFixed(1)}" cy="${(b*170).toFixed(1)}" r="${(1+a*1.5).toFixed(1)}" fill="#fff" opacity=".85"/>`}return s};
const birch=(x,h)=>`<rect x="${x}" y="${150-h}" width="7" height="${h}" fill="${C.birch}"/>${[...Array(Math.floor(h/14))].map((_,i)=>`<rect x="${x+(i%2?3:0)}" y="${154-h+i*14}" width="4" height="2" fill="${C.dark}"/>`).join('')}<ellipse cx="${x+3}" cy="${152-h}" rx="16" ry="20" fill="${C.green}" opacity=".9"/>`;
const doll=(x,y,s,c)=>`<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="22" rx="24" ry="30" fill="${c}"/><circle cx="0" cy="-14" r="18" fill="${c}"/><circle cx="0" cy="-12" r="12" fill="${C.cream}"/><circle cx="-4" cy="-13" r="1.6" fill="${C.dark}"/><circle cx="4" cy="-13" r="1.6" fill="${C.dark}"/><circle cx="-7" cy="-8" r="2.5" fill="${C.pink}"/><circle cx="7" cy="-8" r="2.5" fill="${C.pink}"/><path d="M-3 -6 q3 2 6 0" stroke="${C.red2}" stroke-width="1.2" fill="none"/><ellipse cx="0" cy="24" rx="14" ry="17" fill="${C.cream}"/><circle cx="0" cy="22" r="7" fill="${C.red}"/><circle cx="-6" cy="30" r="3" fill="${C.gold}"/><circle cx="6" cy="30" r="3" fill="${C.gold}"/><path d="M0 15 v-6" stroke="${C.green}" stroke-width="2"/></g>`;
const onion=(x,y,w,c,stripe)=>`<path d="M${x-w} ${y} q0 -${w*1.1} ${w} -${w*1.6} q${w} ${w*.5} ${w} ${w*1.6}Z" fill="${c}"/>${stripe?`<path d="M${x-w*.6} ${y-w*.3} q${w*.6} -${w*.6} ${w*1.2} 0 M${x-w*.8} ${y-w*.8} q${w*.8} -${w*.5} ${w*1.6} 0" stroke="${stripe}" stroke-width="3" fill="none"/>`:''}<line x1="${x}" y1="${y-w*1.6}" x2="${x}" y2="${y-w*1.6-10}" stroke="${C.gold2}" stroke-width="2"/>`;

const L={};
// A1: matrioske
L.A1=svg(`${sun(272,36,18)}${cloud(70,36)}${cloud(190,26,.8)}
<rect y="138" width="320" height="42" fill="${C.wood}"/><rect y="138" width="320" height="6" fill="${C.wood2}"/>
${doll(80,82,1.15,C.red)}${doll(150,96,.9,C.blue)}${doll(206,106,.7,C.green)}${doll(248,114,.52,C.gold2)}${doll(278,120,.38,C.red)}`,C.sky2);
// A2: San Pietroburgo
L.A2=svg(`${cloud(60,30)}${cloud(250,40,.9)}
<rect y="70" width="320" height="64" fill="${C.cream}"/>${[...Array(16)].map((_,i)=>`<rect x="${8+i*20}" y="84" width="8" height="14" fill="${C.teal}" opacity=".7"/><rect x="${8+i*20}" y="106" width="8" height="14" fill="${C.teal}" opacity=".7"/>`).join('')}
<rect x="140" y="56" width="40" height="20" fill="${C.cream}"/><rect x="152" y="36" width="16" height="22" fill="${C.gold}"/><path d="M156 36 L160 2 L164 36Z" fill="${C.gold}"/>
<rect y="134" width="320" height="46" fill="${C.lake}"/>${[...Array(8)].map((_,i)=>`<rect x="${i*42}" y="${148+(i%2)*10}" width="24" height="2" fill="#fff" opacity=".45"/>`).join('')}
<path d="M40 134 q60 -34 120 0 q60 -34 120 0" stroke="${C.dark}" stroke-width="5" fill="none"/><rect x="0" y="130" width="320" height="5" fill="${C.dark}"/>`);
// B1: Piazza Rossa, San Basilio
L.B1=svg(`${sun(40,34,15)}${cloud(250,30,.9)}
<rect y="146" width="320" height="34" fill="#8C8C94"/>${[...Array(12)].map((_,i)=>`<rect x="${i*28}" y="150" width="20" height="3" fill="#777" />`).join('')}
<rect x="20" y="96" width="70" height="50" fill="${C.red2}"/>${[...Array(7)].map((_,i)=>`<rect x="${20+i*10}" y="90" width="6" height="8" fill="${C.red2}"/>`).join('')}
<rect x="250" y="70" width="22" height="76" fill="${C.red}"/><path d="M246 70 L261 34 L276 70Z" fill="${C.green2}"/><polygon points="261,26 264,32 258,32" fill="${C.red}"/>
<rect x="120" y="96" width="110" height="50" fill="${C.cream}"/><rect x="120" y="96" width="110" height="6" fill="${C.red}"/>
<rect x="166" y="54" width="18" height="44" fill="${C.red}"/>${onion(175,58,14,C.gold,null)}
<rect x="132" y="80" width="14" height="18" fill="${C.cream}"/>${onion(139,82,12,C.green,C.gold)}
<rect x="204" y="80" width="14" height="18" fill="${C.cream}"/>${onion(211,82,12,C.blue,C.cream)}
<rect x="148" y="92" width="12" height="8" fill="${C.cream}"/>${onion(154,94,9,C.red,C.green)}
<rect x="190" y="92" width="12" height="8" fill="${C.cream}"/>${onion(196,94,9,C.gold2,C.red)}
${[0,1,2,3].map(i=>`<path d="M${132+i*24} 146 v-18 q8 -10 16 0 v18Z" fill="${C.dark}" opacity=".7"/>`).join('')}`);
// B2: Bajkal
L.B2=svg(`${sun(250,44,20,'#F7E6B0')}
<path d="M0 100 L50 50 L90 86 L140 34 L200 92 L250 58 L320 100Z" fill="${C.blue2}"/><path d="M128 46 L140 34 L152 48 L144 52Z M40 60 L50 50 L60 60Z" fill="#fff"/>
<path d="M0 104 L320 104 L320 180 L0 180Z" fill="${C.lake}"/>${[...Array(10)].map((_,i)=>`<path d="M${(i*37)%300} ${116+i*6} h${30+(i%3)*10}" stroke="${C.lake2}" stroke-width="3" stroke-linecap="round"/>`).join('')}
<path d="M0 104 L60 96 L100 104Z" fill="${C.green2}"/><path d="M220 104 L300 92 L320 104Z" fill="${C.green2}"/>
${[[16,94],[30,90],[44,96],[250,90],[268,86],[290,90]].map(([x,y])=>`<path d="M${x} ${y} l7 -22 l7 22Z" fill="${C.green}"/>`).join('')}
<path d="M150 150 l20 0 l-4 6 l-12 0Z" fill="${C.wood}"/><line x1="160" y1="150" x2="160" y2="132" stroke="${C.dark}" stroke-width="1.5"/><path d="M160 132 l10 14 l-10 0Z" fill="#fff"/>`,'#BFD8EA');
// C1: Transiberiana
L.C1=svg(`${flakes(40,11)}
<path d="M0 120 q80 -30 160 -10 q80 20 160 -10 L320 180 L0 180Z" fill="${C.snow}"/>
${birch(14,70)}${birch(40,90)}${birch(270,80)}${birch(296,66)}
<rect y="140" width="320" height="3" fill="${C.dark}"/>${[...Array(20)].map((_,i)=>`<rect x="${i*16}" y="143" width="8" height="3" fill="${C.wood2}"/>`).join('')}
${[0,1,2,3].map(i=>`<rect x="${70+i*48}" y="110" width="44" height="28" rx="3" fill="${i===0?C.red:C.blue}"/>${[0,1,2].map(j=>`<rect x="${76+i*48+j*13}" y="116" width="9" height="8" fill="#FBE9A9"/>`).join('')}<circle cx="${80+i*48}" cy="139" r="4" fill="${C.dark}"/><circle cx="${104+i*48}" cy="139" r="4" fill="${C.dark}"/>`).join('')}
<path d="M70 110 l0 -10 l14 0 l0 10Z" fill="${C.dark}"/>${[0,1,2].map(i=>`<circle cx="${62-i*12}" cy="${94-i*8}" r="${6+i*2}" fill="#fff" opacity=".7"/>`).join('')}`,C.night);

const T={};
T.famiglia=svg(`${sun(270,34,16)}<rect y="130" width="320" height="50" fill="${C.green}"/>
<rect x="110" y="70" width="100" height="62" fill="${C.wood}"/>${[0,1,2,3,4].map(i=>`<rect x="110" y="${74+i*12}" width="100" height="2" fill="${C.wood2}"/>`).join('')}<path d="M100 72 L160 34 L220 72Z" fill="${C.red2}"/>
<rect x="124" y="84" width="20" height="20" fill="#FBE9A9" stroke="${C.cream}" stroke-width="3"/><rect x="176" y="84" width="20" height="20" fill="#FBE9A9" stroke="${C.cream}" stroke-width="3"/><rect x="152" y="104" width="16" height="28" fill="${C.wood2}"/>
${[[40,22,C.blue],[62,18,C.red],[256,18,C.gold2],[278,14,C.green2]].map(([x,h,c])=>`<circle cx="${x}" cy="${128-h*2}" r="${h/3}" fill="${C.cream}"/><rect x="${x-h/3}" y="${128-h*2+h/3}" width="${h/1.5}" height="${h*1.6}" rx="4" fill="${c}"/>`).join('')}`);
T.amore=svg(`${flakes(18,3)}<rect y="120" width="320" height="60" fill="${C.night}" opacity=".5"/>
<circle cx="90" cy="90" r="40" fill="${C.blue2}"/><circle cx="230" cy="90" r="40" fill="${C.red}"/>
<path d="M60 90 h60 M90 60 v60" stroke="#fff" stroke-width="2" opacity=".5"/><path d="M200 90 h60" stroke="#fff" stroke-width="2" opacity=".5"/>
<path d="M160 80 c-10 -14 -30 -4 -20 12 l20 18 l20 -18 c10 -16 -10 -26 -20 -12Z" fill="${C.pink}"/>
<path d="M130 90 q30 -40 60 0" stroke="#fff" stroke-width="2" stroke-dasharray="4 4" fill="none"/>`,C.night);
T.cinema=svg(`<rect width="320" height="180" fill="${C.dark}"/><rect x="50" y="20" width="220" height="110" fill="${C.snow}"/>
<rect x="50" y="20" width="220" height="110" fill="${C.blue2}" opacity=".25"/>${flakes(12,9)}
<path d="M30 10 h20 v130 h-20Z M270 10 h20 v130 h-20Z" fill="${C.red2}"/>
${[...Array(9)].map((_,i)=>`<circle cx="${40+i*30}" cy="${160}" r="12" fill="${C.red}"/>`).join('')}
<path d="M110 70 l100 0 l0 40 l-100 0Z" fill="${C.wood}"/><rect x="128" y="80" width="12" height="12" fill="#FBE9A9"/><rect x="180" y="80" width="12" height="12" fill="#FBE9A9"/><path d="M104 72 L160 46 L216 72Z" fill="${C.red2}"/>`);
T.mentalita=svg(`<rect y="0" width="320" height="180" fill="${C.cream}"/>
<rect x="30" y="20" width="110" height="90" fill="${C.night}"/>${flakes(10,4).replace(/cy="(\d+(\.\d+)?)"/g,(m,a)=>`cy="${20+(+a)*0.5}"`).replace(/cx="(\d+(\.\d+)?)"/g,(m,a)=>`cx="${30+(+a)*0.34}"`)}<path d="M85 20 v90 M30 65 h110" stroke="${C.wood}" stroke-width="5"/><rect x="30" y="20" width="110" height="90" fill="none" stroke="${C.wood}" stroke-width="6"/>
<rect x="0" y="130" width="320" height="50" fill="${C.wood}"/><ellipse cx="200" cy="130" rx="100" ry="10" fill="${C.red}"/>
<path d="M170 128 l-4 -42 h44 l-4 42Z" fill="${C.gold2}"/><circle cx="188" cy="76" r="14" fill="${C.gold}"/><rect x="183" y="58" width="10" height="8" fill="${C.dark}"/><path d="M210 96 q16 4 0 18" stroke="${C.gold2}" stroke-width="4" fill="none"/>
<ellipse cx="250" cy="122" rx="20" ry="6" fill="#fff"/><rect x="242" y="108" width="16" height="14" fill="#fff"/><rect x="242" y="112" width="16" height="6" fill="#B5793A"/>`);
T.cibo=svg(`<rect width="320" height="180" fill="${C.sky2}"/><rect y="120" width="320" height="60" fill="${C.wood}"/>
<ellipse cx="110" cy="122" rx="70" ry="16" fill="#fff"/><ellipse cx="110" cy="114" rx="56" ry="13" fill="${C.red2}"/><ellipse cx="110" cy="112" rx="40" ry="8" fill="${C.red}"/><ellipse cx="114" cy="110" rx="12" ry="5" fill="#fff"/><path d="M100 108 l6 -3 M120 108 l5 2" stroke="${C.green}" stroke-width="2"/>
${[0,1,2,3,4].map(i=>`<ellipse cx="240" cy="${124-i*6}" rx="${44-i}" ry="10" fill="${i%2?C.gold:'#E8C06A'}"/>`).join('')}<ellipse cx="240" cy="94" rx="18" ry="5" fill="${C.red}"/>`);
T.viaggi=svg(`${cloud(70,30)}${sun(270,34,14)}<path d="M0 120 q80 -24 160 0 q80 24 160 0 L320 180 L0 180Z" fill="${C.green}"/>
${birch(30,60)}${birch(280,70)}<rect y="142" width="320" height="3" fill="${C.dark}"/>
<path d="M60 138 l20 -24 h170 q20 0 20 12 v12Z" fill="${C.red}"/><path d="M60 138 l20 -24 h40 l-10 24Z" fill="${C.snow2}"/>${[...Array(6)].map((_,i)=>`<rect x="${130+i*20}" y="118" width="12" height="9" fill="#FBE9A9"/>`).join('')}<rect x="60" y="132" width="210" height="4" fill="${C.dark}"/>`);
T.lavoro=svg(`<rect width="320" height="180" fill="#E6EEF5"/><rect y="136" width="320" height="44" fill="${C.wood}"/>
<rect x="90" y="56" width="140" height="80" rx="6" fill="${C.dark}"/><rect x="98" y="64" width="124" height="62" fill="${C.blue2}"/>${[0,1,2,3].map(i=>`<rect x="108" y="${72+i*12}" width="${60+(i%3)*24}" height="5" fill="#fff" opacity=".8"/>`).join('')}<rect x="150" y="136" width="20" height="6" fill="${C.dark}"/>
<rect x="30" y="100" width="40" height="36" fill="${C.red}"/><rect x="34" y="96" width="32" height="6" fill="${C.cream}"/><rect x="250" y="110" width="22" height="26" rx="3" fill="#fff"/><path d="M272 116 q10 4 0 12" stroke="#fff" stroke-width="3" fill="none"/>`);
T.emozioni=svg(`<rect width="320" height="180" fill="${C.sky}"/>
${[[60,C.gold,'M-10 6 q10 10 20 0'],[160,C.blue2,'M-10 10 q10 -8 20 0'],[260,C.pink,'M-8 6 h16']].map(([x,c,m])=>`<g transform="translate(${x} 90)"><circle r="40" fill="${c}"/><circle cx="-12" cy="-8" r="4" fill="${C.dark}"/><circle cx="12" cy="-8" r="4" fill="${C.dark}"/><path d="${m}" transform="translate(0 12)" stroke="${C.dark}" stroke-width="3" fill="none"/></g>`).join('')}`);
T.casa=svg(`${sun(50,34,14)}<rect y="128" width="320" height="52" fill="${C.green}"/>
<rect x="60" y="80" width="90" height="50" fill="${C.teal}"/><path d="M52 82 L105 50 L158 82Z" fill="${C.red2}"/><rect x="74" y="92" width="16" height="16" fill="#FBE9A9" stroke="#fff" stroke-width="3"/><rect x="118" y="100" width="18" height="30" fill="${C.wood2}"/>
<rect x="200" y="96" width="70" height="34" fill="${C.wood}"/><path d="M194 98 L235 76 L276 98Z" fill="${C.wood2}"/><rect x="246" y="64" width="8" height="20" fill="${C.dark}"/>${[0,1,2].map(i=>`<circle cx="${250+i*8}" cy="${56-i*10}" r="${5+i*2}" fill="#fff" opacity=".7"/>`).join('')}
${[...Array(7)].map((_,i)=>`<path d="M${20+i*26} 160 q6 -14 12 0" fill="${C.green2}"/><circle cx="${26+i*26}" cy="152" r="3" fill="${C.red}"/>`).join('')}`);
T.feste=svg(`${flakes(36,21)}<rect y="140" width="320" height="40" fill="${C.snow}"/>
<path d="M160 20 L120 70 h20 L106 108 h22 L96 144 h128 L192 108 h22 L180 70 h20Z" fill="${C.green2}"/><rect x="152" y="144" width="16" height="16" fill="${C.wood2}"/><polygon points="160,10 164,20 156,20" fill="${C.gold}"/>
${[[140,80,C.red],[176,92,C.gold],[128,120,C.blue2],[190,128,C.red],[160,106,C.gold]].map(([x,y,c])=>`<circle cx="${x}" cy="${y}" r="5" fill="${c}"/>`).join('')}
<rect x="230" y="128" width="30" height="22" fill="${C.red}"/><rect x="243" y="128" width="4" height="22" fill="${C.gold}"/><rect x="60" y="132" width="26" height="18" fill="${C.blue2}"/><rect x="71" y="132" width="4" height="18" fill="${C.gold}"/>`,C.night);

ITA.art={levels:L,themes:T};
})();
