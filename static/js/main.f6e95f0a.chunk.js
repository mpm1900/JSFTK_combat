(this.webpackJsonpftkts=this.webpackJsonpftkts||[]).push([[0],{115:function(e,t,a){e.exports=a(222)},125:function(e,t){},127:function(e,t){},160:function(e,t){},161:function(e,t){},220:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var n,r,c=a(0),o=a.n(c),l=a(21),i=a.n(l),u=a(5),s=a(105),d=a(4),f=a(1),m={vigor:0,strength:0,intelligence:0,perception:0,talent:0,agility:0,luck:0,armor:0,resistance:0,evasion:0,healthOffset:0,criticalChance:0,damageModifier:0},g={blacksmith:{strength:76,vigor:80,intelligence:40,perception:52,talent:72,agility:56,luck:50,armor:2,resistance:0,evasion:7,healthOffset:0,criticalChance:5,damageModifier:0},hunter:{strength:52,vigor:66,intelligence:46,perception:78,talent:64,agility:78,luck:50,armor:1,resistance:0,evasion:20,healthOffset:0,criticalChance:5,damageModifier:0},scholar:{strength:42,vigor:60,intelligence:78,perception:66,talent:70,agility:70,luck:50,armor:0,resistance:1,evasion:13,healthOffset:0,criticalChance:5,damageModifier:0},bard:{strength:44,vigor:50,intelligence:70,perception:68,talent:78,agility:68,luck:50,armor:0,resistance:1,evasion:11,healthOffset:0,criticalChance:5,damageModifier:0}},h=a(223),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{id:Object(h.a)(),name:e}},b={bleeding:Object(f.a)({},p("Bleeding"),{type:"bleeding",canStack:!1,duration:5,traits:[],commitChance:50,committedTraits:[{duration:5,damage:0,stats:Object(f.a)({},m,{healthOffset:-10})}]}),burning:Object(f.a)({},p("Burning"),{type:"burning",canStack:!1,duration:5,traits:[],commitChance:100,committedTraits:[{duration:5,damage:0,stats:Object(f.a)({},m,{healthOffset:-10})}]}),frozen:Object(f.a)({},p("Frozen"),{type:"frozen",canStack:!1,duration:5,traits:[{duration:5,damage:0,stats:Object(f.a)({},m,{damageModifier:.25})}],commitChance:0,committedTraits:[]}),poisoned:Object(f.a)({},p("Poisoned"),{type:"poisoned",canStack:!0,duration:5,traits:[{duration:5,damage:0,stats:Object(f.a)({},m,{strength:-5,intelligence:-5,perception:-5,talent:-5})}],commitChance:100,committedTraits:[{duration:5,damage:0,stats:Object(f.a)({},m,{healthOffset:-5})}]})},y={damage:0,duration:-1,stats:m},O=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce((function(e,t){return{vigor:e.strength+t.strength,strength:e.strength+t.strength,intelligence:e.intelligence+t.intelligence,perception:e.perception+t.perception,talent:e.talent+t.talent,agility:e.agility+t.agility,luck:e.luck+t.luck,armor:e.armor+t.armor,resistance:e.resistance+t.resistance,evasion:e.evasion+t.evasion,criticalChance:e.criticalChance+t.criticalChance,damageModifier:e.damageModifier+t.damageModifier,healthOffset:e.healthOffset+t.healthOffset}}),m)},j=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce((function(e,t){return{damage:e.damage+t.damage,stats:O(e.stats,t.stats),duration:-1}}),y)},v=function(e){return e.reduce((function(e,t){return[].concat(Object(d.a)(e),Object(d.a)(t.traits))}),[])},E=a(106),k=function(e,t){return{key:e,offset:t}},x=function(e,t){var a=H(e,t),n=new E.DiceRoll("1d100");return{input:t,result:n.total<=a,total:n.total,averageTotal:n.averageTotal,maxTotal:n.maxTotal,minTotal:n.minTotal,output:n.output}},S=function(e,t){return t.map((function(t){return H(e,t)})).reduce((function(e,t){return e*(t/100)}),1)},C=function(e){if(e.processed)throw new Error("No Processed Parties Allowed");e.characters.forEach((function(e){W(e)}))},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Object(f.a)({},p(),{characters:Array(e).fill(null).map((function(e,t){return Object(f.a)({},_("blacksmith"),{name:"Character ".concat(t)})}))})},P=function(e,t){return e.characters.find((function(e){return e.id===t}))},T=function(e,t,a){return C(e),Object(f.a)({},e,{characters:e.characters.map((function(e){return e.id===t?a(e):e}))})},M=function(e){return Object(f.a)({},e,{processed:!0,characters:e.characters.map((function(t){return Object(f.a)({},N(t),{partyId:e.id})}))})},D=function(e,t,a){var n=function(e,t){var a=x(e,{offset:e.stats.criticalChance}),n=x(e,t.accuracy),r=t.rolls.map((function(t){return x(e,t)})),c=a.result?t.rolls.length:r.filter((function(e){return e.result})).length,o=!!a.result||function(e){return e.every((function(e){return e.result}))}(r),l=a.result||o||n.result,i={damage:l?e.weapon.damage.damage*(1+t.damageModifier+e.stats.damageModifier):0,type:e.weapon.damage.type};return{rollResults:r,skill:t,source:e,accuracySuccess:l,criticalSuccess:a.result,passedCount:c,perfect:o,rawDamage:i,splashDamage:t.perfectSplash&&o?{type:i.type,damage:Math.floor(i.damage/2)}:{type:i.type,damage:0},addedStatus:o?t.perfectStatus:[]}}(t,e);return a.map((function(e){return function(e,t){if(t.accuracySuccess){var a=x(e,{key:"evasion"}),n=t.criticalSuccess?0:z(e,t.rawDamage.type);return Object(f.a)({},t,{target:e,dodgeSuccess:!t.criticalSuccess&&a.result,blockedDamage:{type:t.rawDamage.type,damage:n},totalDamage:{type:t.rawDamage.type,damage:t.rawDamage.damage-n}})}return Object(f.a)({},t,{target:e,dodgeSuccess:!1,blockedDamage:t.rawDamage,totalDamage:t.rawDamage})}(e,n)}))},L=Object(f.a)({},p("Smash"),{damageModifier:0,target:"single",rolls:[k("strength"),k("strength"),k("strength")],accuracy:k("strength"),perfectSplash:!1,perfectStatus:[]}),A=Object(f.a)({},p("Shockwave"),{damageModifier:0,target:"single",rolls:[k("strength"),k("strength"),k("strength"),k("strength")],accuracy:k("strength",-10),perfectSplash:!0,perfectStatus:[]}),I=Object(f.a)({},p("Blacksmith's Hammer"),{type:"hammer",rarity:"common",hands:1,damage:{type:"physical",damage:10},traits:[],skills:[L,A]}),R={blacksmith:I,hunter:I,scholar:I,bard:I},W=function(e){if(e.processed)throw new Error("No Processed Characters Allowed")},B=function(e){return e.status.map((function(e){return b[e.type]}))},$=function(e){return W(e),[].concat(Object(d.a)(e.weapon.skills),Object(d.a)(e.armor.reduce((function(e,t){return[].concat(Object(d.a)(e),Object(d.a)(t.skills))}),[])))},N=function(e){W(e);var t=function(e){return W(e),[].concat(Object(d.a)(e.traits),Object(d.a)(e.weapon.traits),Object(d.a)(v(e.armor)),Object(d.a)(v(B(e))))}(e),a=j.apply(void 0,Object(d.a)(t)),n=O(e.stats,a.stats),r=function(e){var t=e.traits.reduce((function(e,t){return Object(f.a)({},e,{damage:e.damage+t.damage})}),e.damage);return Object(f.a)({},e,{damage:t,processed:!0})}(e.weapon),c=B(e),o=$(e),l=25+Math.floor(.1*g[e.class].vigor),i=Math.floor(l+e.level+.1*e.level*n.vigor);return Object(f.a)({},e,{health:i,stats:n,weapon:r,statusEffects:c,skills:o,dead:n.healthOffset>=i,processed:!0})},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object(f.a)({},p(),{partyId:t,level:1,class:e,stats:g[e],traits:[],weapon:R[e],armor:[],status:[]})},H=function(e,t){return(t.key?e.stats[t.key]:0)+(t.offset||0)},z=function(e,t){return"physical"===t?e.stats.armor:"magic"===t?e.stats.resistance:0},Y=a(8),q=a(23),F=a(15),K=function(e){return{type:"@actions/parties/set-party",payload:{party:e}}},G=function(e){return{type:"@actions/parties/upsert-character",payload:{character:e}}},J=function(e){return{type:"@actions/parties/delete-character",payload:{characterId:e}}},U={updateParty:function(e){return function(t){C(e),t(K(e))}},upsertCharacter:function(e){return function(t){t(G(e))}},deleteCharacter:function(e){return function(t){t(J(e))}}},V=function(e,t){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=arguments.length>1?arguments[1]:void 0,r=e[n.type];return r?r(a,n):a}}((n={},Object(Y.a)(n,"@actions/parties/set-party",(function(e,t){return Object(f.a)({},t.payload.party)})),Object(Y.a)(n,"@actions/parties/upsert-character",(function(e,t){return T(e,t.payload.character.id,(function(e){return t.payload.character}))})),Object(Y.a)(n,"@actions/parties/delete-character",(function(e,t){return Object(f.a)({},e,{characters:e.characters.filter((function(e){return e.id!==t.payload.characterId}))})})),n),{id:Object(h.a)(),name:"PlayerParty",characters:[Object(f.a)({},_("blacksmith"),{name:"max m"}),Object(f.a)({},_("blacksmith"),{name:"katie c"}),Object(f.a)({},_("blacksmith"),{name:"milo w"})]}),X=function(){return function(e,t){var a=Object(q.b)();return Object(c.useMemo)((function(){return Object(F.b)(e,a)}),t?[a].concat(Object(d.a)(t)):[a])}(U)},Q={rawParty:w(),party:M(w()),updateParty:function(e){},upsertCharacter:function(e){},deleteCharacter:function(e){},findCharacter:function(e){},findRawCharacter:function(e){}},Z=o.a.createContext(Q),ee=function(e){var t=e.children,a=X(),n=Object(q.c)((function(e){return e.party})),r=Object(c.useMemo)((function(){return M(n)}),[n]);return o.a.createElement(Z.Provider,{value:{party:r,rawParty:n,updateParty:function(e){a.updateParty(e)},upsertCharacter:function(e){if(e){if(e.processed)throw new Error("No processed Characters Allowed");a.upsertCharacter(e)}},deleteCharacter:function(e){a.deleteCharacter(e)},findCharacter:function(e){return P(r,e)},findRawCharacter:function(e){return P(n,e)}}},t)},te=function(e){return e[Math.floor(Math.random()*e.length)]},ae=function(e){return e>0?e:0},ne={party:M(w()),enemyParty:M(w()),activeCharacter:N(_("blacksmith")),queue:[],selectedSkill:void 0,targets:[],selectedTarget:void 0,roundResults:[],activeRound:void 0,onSkillSelect:function(e){},onTargetsSelect:function(e){},next:function(){},commit:function(){}},re=Object(c.createContext)(ne),ce=function(){return Object(c.useContext)(re)},oe=function(e){var t=e.children,a=e.enemyParty,n=e.rawEnemyParty,r=e.setEnemyParty,l=Object(c.useContext)(Z),i=l.party,m=l.rawParty,g=l.updateParty,h=Object(c.useMemo)((function(){return function(e,t){return function(a){var n=function(e,t,a){return T(e,t,a)};return a.forEach((function(a){var r=a.source,c=(a.target,e.id===r.partyId?e:t),o=e.id===r.partyId?t:e;o=n(o,a.target.id,(function(e){return Object(f.a)({},e,{stats:Object(f.a)({},e.stats,{healthOffset:e.stats.healthOffset+a.totalDamage.damage})})})),a.splashDamage.damage>0&&o.characters.filter((function(e){return e.id!==a.target.id})).forEach((function(e){o=n(o,e.id,(function(e){return Object(f.a)({},e,{stats:Object(f.a)({},e.stats,{healthOffset:e.stats.healthOffset+a.splashDamage.damage})})}))})),c.id===e.id?(e=c,t=o):(e=o,t=c)})),{party:e,enemyParty:t}}}(m,n)}),[m,n]),p=Object(c.useMemo)((function(){return[].concat(Object(d.a)(i.characters),Object(d.a)(a.characters)).filter((function(e){return!e.dead}))}),[i,a]),b=Object(c.useState)(p.sort((function(e,t){return e.stats.agility-t.stats.agility})).map((function(e){return e.id}))),y=Object(u.a)(b,2),O=y[0],j=y[1],v=Object(c.useState)([]),E=Object(u.a)(v,2),k=E[0],x=E[1],S=Object(c.useState)(),C=Object(u.a)(S,2),w=C[0],P=C[1],M=Object(c.useState)([]),L=Object(u.a)(M,2),A=L[0],I=L[1],R=Object(c.useState)(),W=Object(u.a)(R,2),B=W[0],$=W[1],N=Object(c.useState)(),_=Object(u.a)(N,2),H=_[0],z=_[1],Y=Object(c.useMemo)((function(){return p.find((function(e){return e.id===O[0]}))}),[O,p]),q=function(e,t){var n=i.id===e?i:a,r=i.id===e?a:i;switch(t.target){case"single":return r.characters.filter((function(e){return!e.dead}));case"ally":return n.characters.filter((function(e){return!e.dead}));case"group":case"party":case"self":default:return[]}},F=function(e){var t=e||B;if(H&&t){var a=D(H,Y,[t]);console.log("RESULTS",a),P(a)}};return Object(c.useEffect)((function(){if(console.log(Y.name+"'s turn"),Y&&Y.partyId===a.id){var e=te(Y.skills);!function(e,t){console.log("exec enemy turn",Y.name,e.name);var a=D(e,Y,t);P(a)}(e,[te(q(Y.partyId,e))])}}),[(Y||{}).id]),Object(c.useEffect)((function(){a.characters.every((function(e){return e.dead}))?alert("you win"):i.characters.every((function(e){return e.dead}))&&alert("you lose")}),[i,a]),o.a.createElement(re.Provider,{value:{party:i,enemyParty:a,queue:O.map((function(e){return p.find((function(t){return t.id===e}))})).filter((function(e){return void 0!==e})),activeCharacter:Y,activeRound:w,selectedSkill:H,targets:A,selectedTarget:B,roundResults:k,onSkillSelect:function(e){z(e),I(q(i.id,e))},onTargetsSelect:function(e,t){if(!H)return null;$(e),t&&F(e)},next:F,commit:function(){if(console.log("commit",w),w){var e=h(w);r(e.enemyParty),g(e.party),z(void 0),$(void 0),I([]),x((function(e){return[].concat(Object(d.a)(e),[w])})),P(void 0),j((function(e){var t=Object(s.a)(e),a=t[0],n=t.slice(1);return[].concat(Object(d.a)(n),[a]).filter((function(e){return void 0!==p.find((function(t){return t.id===e}))}))}))}}}},t)},le=a(114),ie=a(62),ue=a.n(ie),se=a(108),de=function(e){var t=e.delay,a=void 0===t?500:t,n=e.children,r=Object(c.useState)(!1),l=Object(u.a)(r,2),i=l[0],s=l[1],d=Object(c.useState)(!1),f=Object(u.a)(d,2),m=f[0],g=f[1],p=Object(c.useState)(Object(h.a)()),b=Object(u.a)(p,2),y=b[0],O=b[1];Object(c.useLayoutEffect)((function(){(function(){var e=Object(se.a)(ue.a.mark((function e(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i&&setTimeout((function(){O(Object(h.a)())}),a);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),Object(c.useLayoutEffect)((function(){i&&g(!0)}),[y]);return o.a.createElement("div",{onMouseEnter:function(e){e.preventDefault(),e.stopPropagation(),s(!0)},onMouseLeave:function(e){e.preventDefault(),e.stopPropagation(),s(!1),g(!1)}},n({isHovering:m}))},fe=function(e){var t=e.style,a=void 0===t?{}:t,n=e.substyle,r=void 0===n?{}:n,c=e.children,l=e.tag,i=void 0===l?"div":l,u=Object(le.a)(e,["style","substyle","children","tag"]);return o.a.createElement("div",{style:Object(f.a)({border:"1px solid #000",display:"flex",boxSizing:"border-box"},a)},o.a.createElement(i,Object.assign({style:Object(f.a)({border:r.border||"1px solid #555",background:"linear-gradient(0deg, #222222 0%, #2a2a2a 100%)",padding:10,color:"#ccc",flex:1,boxShadow:"inset 0px 0px 2px black"},r)},u),c))},me=function(e){return o.a.createElement(de,{delay:0},(function(t){var a=t.isHovering;return o.a.createElement(fe,Object.assign({},e,{tag:"button",style:Object(f.a)({margin:0},e.style||{}),substyle:Object(f.a)({borderColor:a&&!e.disabled?"#999":"#555",padding:"4px",cursor:e.disabled?"default":"pointer",background:e.disabled?"#444":"#111",boxShadow:e.disabled?"none":void 0},e.substyle||{})}))}))},ge=a(14),he=Object(ge.b)("div",(function(e){return{display:"flex",flexDirection:e.$direction||"row",flex:e.$full?1:"default"}})),pe=Object(ge.b)("div",(function(){return{flex:1}})),be=Object(ge.b)("span",(function(){return{fontFamily:"Inconsolata, monospace",fontWeight:600}})),ye=Object(ge.b)("div",(function(){return{fontFamily:"Inconsolata, monospace",fontWeight:600}})),Oe=function(e,t){return o.a.createElement("span",{style:{color:e,fontWeight:"bold"}},t)},je=Object(c.createContext)({combatLog:[]}),ve=function(e){var t=e.children,a=ce(),n=a.roundResults,r=a.enemyParty,l=a.party,i=Object(c.useState)([]),s=Object(u.a)(i,2),f=s[0],m=s[1],g=function(e,t){return function(a){var n=a.partyId===e.id,r=a.partyId===t.id;return Oe(n?"lightgreen":r?"lightsalmon":"white",a.name)}}(l,r),h=function(e){return m((function(t){return[].concat(Object(d.a)(t),[o.a.createElement(be,{style:{display:"inline-block",fontWeight:"normal"}},e)])}))};return Object(c.useEffect)((function(){[].concat(Object(d.a)(r.characters),Object(d.a)(l.characters)).forEach((function(e){e.dead&&h(o.a.createElement("span",null,Oe("lightcoral","".concat(e.name," died."))))}))}),[r,l]),Object(c.useEffect)((function(){0!==n.length&&n[n.length-1].forEach((function(e){var t,a=l.id===e.source.partyId?r:l;h(o.a.createElement("span",null,g(e.source)," uses ",(t=e.skill,Oe("plum",t.name)),".")),e.accuracySuccess?(e.dodgeSuccess?h(o.a.createElement("span",null,g(e.target)," dodged the attack.")):(h(o.a.createElement("span",null,e.skill.name," deals"," ",Oe("white","".concat(e.totalDamage.damage," damage"))," to"," ",g(e.target),".")),e.perfect&&h(o.a.createElement("span",null,Oe("gold","Perfect!")))),e.splashDamage.damage>0&&a.characters.filter((function(t){return t.id!==e.target.id})).forEach((function(t){h(o.a.createElement("span",null,e.skill.name," deals"," ",Oe("white","".concat(e.splashDamage.damage," damage"))," to"," ",g(t),"."))}))):h(o.a.createElement("span",null,e.source.name,"'s attack missed."))}))}),[n.length]),o.a.createElement(je.Provider,{value:{combatLog:f}},t)},Ee=a(109),ke=a.n(Ee),xe=function(e){var t=Object.assign({},e);return o.a.createElement(ke.a,Object.assign({direction:"up",tagName:"div",padding:"0",arrow:!1},t))},Se=function(e){return o.a.createElement(de,null,(function(t){var a=t.isHovering;return o.a.createElement(xe,Object.assign({},e,{isOpen:a}))}))},Ce=function(e){var t=e.name,a=void 0===t?"":t,n=e.value,r=e.max,c=e.color,l=e.height,i=void 0===l?30:l,u=e.children,s=n/r*100,d=s>100?100:s;return o.a.createElement(Se,{direction:"right",content:o.a.createElement(fe,null,"".concat(a," (").concat(n," / ").concat(r,")"))},o.a.createElement(fe,{substyle:{padding:0,background:"#555",height:i-2,position:"relative"}},o.a.createElement(he,{style:{position:"absolute",left:0,boxSizing:"border-box",height:i-2,maxWidth:"".concat(d,"%"),minWidth:"".concat(d,"%"),boxShadow:"inset 0px 0px 1px rgba(0,0,0,0.5)",textShadow:"1px 1px 1px black",backgroundColor:c,color:"white",alignItems:"center",justifyContent:"center",transition:"all 0.5s"}}),o.a.createElement(pe,{style:{position:"absolute",height:i,lineHeight:"".concat(i-2,"px"),right:4,top:0,fontSize:10,fontWeight:"bold",overflow:"hidden",textShadow:"0px 0px 3px black"}},o.a.createElement(ye,null,u))))},we=Object(ge.b)(ye,(function(){return{height:15,fontSize:"12px",fontWeight:"bolder",padding:"0px 4px",lineHeight:"15px",flex:1,textAlign:"center",background:"#111"}})),Pe=function(e){var t=e.character,a=e.activeCharacter,n=e.hoverable,r=e.selected,l=e.onClick,i=t.health-t.stats.healthOffset,s=Object(c.useState)(!1),d=Object(u.a)(s,2),f=d[0],m=d[1];return o.a.createElement(fe,{onMouseEnter:function(){return n?m(!0):null},onMouseLeave:function(){return m(!1)},onClick:function(){return f&&l?l():null},style:{borderWidth:2,margin:10,cursor:l?"pointer":"default",boxShadow:r?"0px 0px 20px yellow":f?"0px 0px 10px yellow":t.id===a.id?"0px 0px 20px white":"none"},substyle:{padding:0,width:420}},o.a.createElement(he,{style:{border:"2px solid black"}},o.a.createElement(he,{style:{borderRight:"2px solid black"}},o.a.createElement("img",{alt:"profile",src:"https://picsum.photos/seed/".concat(t.name,"/60/60"),style:{height:115,width:115}})),o.a.createElement(he,{$full:!0,$direction:"column"},o.a.createElement(he,{style:{padding:"2px 4px",paddingLeft:8,background:"rgba(255,255,255,0.2)",borderBottom:"1px solid rgba(255,255,255,0.4)"}},o.a.createElement("span",{style:{fontWeight:"bolder",textShadow:"0px 0px 2px black"}},t.name)),o.a.createElement(he,null,o.a.createElement("span",{style:{fontWeight:"bolder",padding:"2px 8px",fontSize:42,height:42,lineHeight:"42px"}},i>0?i:"Dead")),o.a.createElement(pe,null),o.a.createElement(Ce,{name:"Health",color:"#8f4e4d",max:t.health,value:ae(i),height:12},ae(i),"/",t.health),o.a.createElement(Ce,{name:"XP",color:"#5e8575",max:3300,value:1256,height:12},"1256/3300"),o.a.createElement(he,null,o.a.createElement(we,null,"S-",t.stats.strength),o.a.createElement(we,null,"V-",t.stats.vigor),o.a.createElement(we,null,"I-",t.stats.intelligence),o.a.createElement(we,null,"P-",t.stats.perception),o.a.createElement(we,null,"T-",t.stats.talent),o.a.createElement(we,null,"A-",t.stats.agility),o.a.createElement(we,null,"L-",t.stats.luck)))))},Te=a(110),Me=a.n(Te),De={isOpen:!1,contents:null,callback:null,payload:null,blocking:!1,style:{}},Le="modalContext/OPEN",Ae="modalContext/CLOSE",Ie=function(e,t,a,n){return{type:Le,contents:e,style:t,blocking:a,callback:n}},Re=function(){return{type:Ae}},We=function(e){return{type:"modalContext/SET_PAYLOAD",payload:e}},Be=function(e){return{type:"modalContext/SET_CONTENTS",contents:e}},$e=function(e){return{type:"modalContext/SET_CALLBACK",callback:e}},Ne=function(e){return{type:"modalContext/SET_BLOCKING",blocking:e}},_e=function(e){return{type:"modalContext/SET_STYLE",style:e}},He=(r={},Object(Y.a)(r,Le,(function(e,t){return Object(f.a)({},e,{isOpen:!0,contents:t.contents?t.contents:e.contents,style:t.style?t.style:e.style||{},blocking:t.blocking||!1,callback:t.callback?t.callback:e.callback})})),Object(Y.a)(r,Ae,(function(e){return Object(f.a)({},e,{isOpen:!1})})),Object(Y.a)(r,"modalContext/SET_PAYLOAD",(function(e,t){return Object(f.a)({},e,{payload:t.payload})})),Object(Y.a)(r,"modalContext/SET_CONTENTS",(function(e,t){return Object(f.a)({},e,{callback:null,payload:null,contents:t.contents,blocking:!1,style:{}})})),Object(Y.a)(r,"modalContext/SET_CALLBACK",(function(e,t){return Object(f.a)({},e,{callback:t.callback})})),Object(Y.a)(r,"modalContext/SET_BLOCKING",(function(e,t){return Object(f.a)({},e,{blocking:t.blocking})})),Object(Y.a)(r,"modalContext/SET_STYLE",(function(e,t){return Object(f.a)({},e,{style:t.style})})),r),ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0,a=He[t.type];return a?a(e,t):e},Ye=o.a.createContext({open:function(){return null},close:function(){return null},setBlocking:function(){return null},setPayload:function(){return null},setContents:function(){return null},setCallback:function(){return null},setStyle:function(){return null}}),qe=function(e,t){return{isOpen:e.isOpen,open:function(e,a,n,r){t(Ie(e,a,n,r))},close:function(a){e.callback&&e.callback(a||e.payload),t(Re())},setPayload:function(e){return t(We(e))},setContents:function(e){return t(Be(e))},setCallback:function(e){return t($e(e))},setBlocking:function(e){return t(Ne(e))},setStyle:function(e){return t(_e(e))}}},Fe=function(e){var t=e.children,a=Object(c.useReducer)(ze,De),n=Object(u.a)(a,1)[0],r=Object(c.useMemo)((function(){return qe.apply(void 0,Object(d.a)(a))}),[a]);return o.a.createElement(Ye.Provider,{value:r},t,o.a.createElement(Me.a,{isOpen:n.isOpen,onRequestClose:function(){n.blocking||r.close()},style:{content:{backgroundColor:"#111",color:"white",width:400,margin:"0 auto",bottom:"unset",borderColor:"#555"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"}}},n.contents||o.a.createElement("div",null)))},Ke=function(){var e=ce(),t=e.activeRound,a=e.commit,n=Object(c.useContext)(Ye),r=n.open,l=n.close;n.setCallback;return Object(c.useEffect)((function(){t&&r(o.a.createElement(Ge,{rounds:t,close:function(){return l(!0)}}),{},!0,(function(){a()}))}),[t,r,l,a]),null},Ge=function(e){var t=e.rounds,a=e.close,n=Object(c.useState)([]),r=Object(u.a)(n,2),l=r[0],i=r[1],s=Object(c.useState)(),f=Object(u.a)(s,2),m=f[0],g=f[1],h=t[0];if(Object(c.useEffect)((function(){h&&(h.rollResults.length!==l.length?setTimeout((function(){i((function(e){return[].concat(Object(d.a)(e),[{label:h.skill.rolls[l.length].key||"<null>",result:h.rollResults[l.length].result}])}))}),500):m?setTimeout((function(){a()}),1e3):setTimeout((function(){g({label:"accuracy",result:h.accuracySuccess})}),500))}),[l.length,m]),!h)return null;var p=m?[].concat(Object(d.a)(l),[m]):l;return o.a.createElement(he,{$direction:"column"},o.a.createElement("h4",null,h.source.name," uses ",h.skill.name," on ",h.target.name),o.a.createElement(he,null,p.map((function(e){return o.a.createElement(he,{$direction:"column",style:{marginRight:10}},o.a.createElement("span",null,e.label),o.a.createElement("span",null,e.result?Oe("lightgreen","PASSED"):Oe("lightcoral","FALLED")))}))))},Je=function(){var e=ce(),t=e.activeCharacter,a=(e.targets,e.selectedSkill),n=e.selectedTarget,r=(e.onTargetsSelect,e.onSkillSelect),c=e.next;if(!t)return null;var l=a?S(t,a.rolls):0,i=1-(1-l)*(1-(a?S(t,[a.accuracy]):0)),u=n&&a?function(e,t,a){var n={type:t.weapon.damage.type,damage:t.weapon.damage.damage*(1+e.damageModifier+t.stats.damageModifier)},r=z(a,n.type);return{type:n.type,damage:n.damage-r}}(a,t,n).damage:0;return o.a.createElement(fe,{substyle:{color:"rgba(255,255,255,0.8)"}},o.a.createElement("h4",{style:{margin:"0 0 10px 0"}},t.name,"'s Turn"),o.a.createElement(he,{style:{marginBottom:10}},t.skills.map((function(e){return o.a.createElement(me,{onClick:function(){return r(e)},substyle:{borderColor:a&&e.id===a.id?"white":void 0}},e.name)}))),a&&o.a.createElement(fe,{style:{marginTop:10},substyle:{background:"#111"}},o.a.createElement(he,{$direction:"column"},o.a.createElement("strong",null,"Perect Chance: (",Math.floor(100*l),"%)"),o.a.createElement("strong",null,"Accuracy: (",Math.floor(100*i),"%)"),u>0&&o.a.createElement("strong",null,"Damage: ",u))),a&&n&&o.a.createElement(me,{onClick:function(){return c()}},"Confirm"))},Ue=function(){var e=ce(),t=e.party,a=e.enemyParty,n=e.activeCharacter,r=e.queue,l=(e.targets,e.selectedSkill),i=e.selectedTarget,u=e.onTargetsSelect,s=(e.onSkillSelect,Object(c.useContext)(je).combatLog);return o.a.createElement(he,{style:{height:"100vh"}},o.a.createElement(he,{$full:!0,$direction:"column",style:{padding:10}},o.a.createElement(fe,null,r.map((function(e){return o.a.createElement("span",null,e.name," ",">")}))),o.a.createElement(he,{style:{justifyContent:"space-around"}},a.characters.map((function(e){return o.a.createElement("div",null,o.a.createElement(Pe,{hoverable:void 0!==l,selected:i&&e.id===i.id,onClick:function(){return u(e)},activeCharacter:n,character:e}))}))),o.a.createElement(he,{$full:!0},o.a.createElement(pe,null),o.a.createElement(he,{$direction:"column"},o.a.createElement(pe,null),o.a.createElement(Je,null),o.a.createElement(Ke,null),o.a.createElement(pe,null)),o.a.createElement(pe,null)),o.a.createElement(he,{style:{justifyContent:"space-around"}},t.characters.map((function(e){return o.a.createElement("div",null,o.a.createElement(Pe,{activeCharacter:n,character:e}))})))),o.a.createElement(fe,{substyle:{minWidth:300,overflowY:"auto",display:"flex",flexDirection:"column"}},s.map((function(e){return e}))))},Ve=function(){var e=Object(c.useState)(w(3)),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(c.useMemo)((function(){return M(a)}),[a]);return o.a.createElement(oe,{enemyParty:r,rawEnemyParty:a,setEnemyParty:n},o.a.createElement(ve,null,o.a.createElement(Fe,null,o.a.createElement(Ue,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(220);var Xe=a(113),Qe=a(111),Ze=new Xe.a,et=Object(F.e)(Object(F.c)({party:V}),Object(F.d)(Object(F.a)(Qe.a)));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(q.a,{store:et},o.a.createElement(ge.a,{value:Ze,debug:void 0,debugAfterHydration:!0},o.a.createElement(ee,null,o.a.createElement(Ve,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[115,1,2]]]);
//# sourceMappingURL=main.f6e95f0a.chunk.js.map