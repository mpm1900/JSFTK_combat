(this.webpackJsonpftkts=this.webpackJsonpftkts||[]).push([[0],{115:function(e,t,a){e.exports=a(222)},125:function(e,t){},127:function(e,t){},160:function(e,t){},161:function(e,t){},220:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var n,r,c=a(0),o=a.n(c),i=a(21),l=a.n(i),u=a(5),s=a(60),d=a(4),f=a(1),p={vigor:0,strength:0,intelligence:0,perception:0,talent:0,agility:0,luck:0,armor:0,resistance:0,evasion:0,healthOffset:0,criticalChance:0,damageModifier:0},m={blacksmith:{strength:76,vigor:80,intelligence:40,perception:52,talent:72,agility:56,luck:50,armor:2,resistance:0,evasion:7,healthOffset:0,criticalChance:5,damageModifier:0},hunter:{strength:52,vigor:66,intelligence:46,perception:78,talent:64,agility:78,luck:50,armor:1,resistance:0,evasion:20,healthOffset:0,criticalChance:5,damageModifier:0},scholar:{strength:42,vigor:60,intelligence:78,perception:66,talent:70,agility:70,luck:50,armor:0,resistance:1,evasion:13,healthOffset:0,criticalChance:5,damageModifier:0},bard:{strength:44,vigor:50,intelligence:70,perception:68,talent:78,agility:68,luck:50,armor:0,resistance:1,evasion:11,healthOffset:0,criticalChance:5,damageModifier:0}},g=a(223),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{id:Object(g.a)(),name:e}},b={bleeding:Object(f.a)({},h("Bleeding"),{type:"bleeding",canStack:!1,duration:5,traits:[],commitChance:50,committedTraits:[{duration:5,damage:0,stats:Object(f.a)({},p,{healthOffset:-10})}]}),burning:Object(f.a)({},h("Burning"),{type:"burning",canStack:!1,duration:5,traits:[],commitChance:100,committedTraits:[{duration:5,damage:0,stats:Object(f.a)({},p,{healthOffset:-10})}]}),frozen:Object(f.a)({},h("Frozen"),{type:"frozen",canStack:!1,duration:5,traits:[{duration:5,damage:0,stats:Object(f.a)({},p,{damageModifier:.25})}],commitChance:0,committedTraits:[]}),poisoned:Object(f.a)({},h("Poisoned"),{type:"poisoned",canStack:!0,duration:5,traits:[{duration:5,damage:0,stats:Object(f.a)({},p,{strength:-5,intelligence:-5,perception:-5,talent:-5})}],commitChance:100,committedTraits:[{duration:5,damage:0,stats:Object(f.a)({},p,{healthOffset:-5})}]})},y={damage:0,duration:-1,stats:p},v=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce((function(e,t){return{vigor:e.strength+t.strength,strength:e.strength+t.strength,intelligence:e.intelligence+t.intelligence,perception:e.perception+t.perception,talent:e.talent+t.talent,agility:e.agility+t.agility,luck:e.luck+t.luck,armor:e.armor+t.armor,resistance:e.resistance+t.resistance,evasion:e.evasion+t.evasion,criticalChance:e.criticalChance+t.criticalChance,damageModifier:e.damageModifier+t.damageModifier,healthOffset:e.healthOffset+t.healthOffset}}),p)},O=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce((function(e,t){return{damage:e.damage+t.damage,stats:v(e.stats,t.stats),duration:-1}}),y)},j=function(e){return e.reduce((function(e,t){return[].concat(Object(d.a)(e),Object(d.a)(t.traits))}),[])},E=a(106),x=function(e,t){return{key:e,offset:t}},k=function(e,t){var a=Q(e,t),n=new E.DiceRoll("1d100");return{input:t,result:n.total<=a,total:n.total,averageTotal:n.averageTotal,maxTotal:n.maxTotal,minTotal:n.minTotal,output:n.output}},S=function(e,t){return t.map((function(t){return Q(e,t)})).reduce((function(e,t){return e*(t/100)}),1)},C=function(e){return e[Math.floor(Math.random()*e.length)]},w=function(e){return e>0?e:0},T=function(e){if(e.processed)throw new Error("No Processed Parties Allowed");e.characters.forEach((function(e){F(e)}))},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Object(f.a)({},h(),{isParty:!0,characters:Array(e).fill(null).map((function(e,t){var a=C(["blacksmith","hunter","scholar"]);return Object(f.a)({},X(a),{name:"".concat(a," ").concat(t+1)})}))})},M=function(e,t){return e.characters.find((function(e){return e.id===t}))},D=function(e,t,a){return T(e),Object(f.a)({},e,{characters:e.characters.map((function(e){return e.id===t?a(e):e}))})},L=function(e){return Object(f.a)({},e,{processed:!0,characters:e.characters.map((function(t){return Object(f.a)({},V(t),{partyId:e.id})}))})},A=function(e){var t,a;switch(e.type){case"single":case"ally":case"self":return e.character?[e.character]:[];case"party":return(null===(t=e.party)||void 0===t?void 0:t.characters)||[];case"group":return(null===(a=e.party)||void 0===a?void 0:a.characters)||[];default:return[]}},$=function(e,t){return{type:e,character:G(t)?t:void 0,party:(a=t,a&&a.isParty?t:void 0)};var a},R=function(e,t,a){var n=void 0,r=void 0;return a.forEach((function(a){var c=function(e,t,a){var n={type:t.weapon.damage.type,damage:t.weapon.damage.damage*(1+e.damageModifier+t.stats.damageModifier)},r=Z(a,n.type);return{type:n.type,damage:Math.round(n.damage-r)}}(e,t,a).damage;(void 0===r||c>r)&&(r=c),(void 0===n||c<n)&&(n=c)})),console.log(n,r),n===r?"".concat(r||0):"".concat(n,"-").concat(r)},I=function(e,t,a){var n=function(e,t){var a=k(e,{offset:e.stats.criticalChance}),n=k(e,t.accuracy),r=t.rolls.map((function(t){return k(e,t)})),c=a.result?t.rolls.length:r.filter((function(e){return e.result})).length,o=!!a.result||function(e){return e.every((function(e){return e.result}))}(r),i=a.result||o||n.result,l={damage:i?e.weapon.damage.damage*(1+t.damageModifier+e.stats.damageModifier):0,type:e.weapon.damage.type};return{rollResults:r,skill:t,source:e,accuracySuccess:i,criticalSuccess:a.result,passedCount:c,perfect:o,rawDamage:l,pierce:o&&t.perfectPierce||a.result,splashDamage:t.perfectSplash&&o?{type:l.type,damage:Math.floor(l.damage/2)}:{type:l.type,damage:0},addedStatus:o?t.perfectStatus:[]}}(t,e);return a.map((function(e){return function(e,t){if(t.accuracySuccess){var a=k(e,{key:"evasion"}),n=t.pierce?0:Z(e,t.rawDamage.type);return Object(f.a)({},t,{target:e,dodgeSuccess:!t.criticalSuccess&&a.result,blockedDamage:{type:t.rawDamage.type,damage:t.pierce?0:n},totalDamage:{type:t.rawDamage.type,damage:Math.round(t.rawDamage.damage-n)}})}return Object(f.a)({},t,{target:e,dodgeSuccess:!1,blockedDamage:t.rawDamage,totalDamage:t.rawDamage})}(e,n)}))},B=Object(f.a)({},h("Smash"),{damageModifier:0,targetType:"single",rolls:[x("strength"),x("strength"),x("strength")],accuracy:x("strength"),perfectSplash:!1,perfectPierce:!1,perfectStatus:[]}),W=Object(f.a)({},h("Shockwave"),{damageModifier:0,targetType:"single",rolls:[x("strength"),x("strength"),x("strength"),x("strength")],accuracy:x("strength",-10),perfectSplash:!0,perfectPierce:!1,perfectStatus:[]}),H=Object(f.a)({},h("Blacksmith's Hammer"),{type:"hammer",rarity:"common",hands:1,damage:{type:"physical",damage:10},traits:[],skills:[B,W]}),N=Object(f.a)({},h("Shot"),{damageModifier:0,targetType:"single",rolls:[x("perception"),x("perception"),x("perception")],accuracy:x("perception"),perfectSplash:!1,perfectPierce:!1,perfectStatus:[]}),_=Object(f.a)({},h("Snipe Shot"),{damageModifier:0,targetType:"single",rolls:[x("perception"),x("perception"),x("perception")],accuracy:x("perception",-10),perfectSplash:!1,perfectPierce:!0,perfectStatus:[]}),z=Object(f.a)({},h("Blacksmith's Hammer"),{type:"bow",rarity:"common",hands:2,damage:{type:"physical",damage:6},traits:[{duration:-1,stats:Object(f.a)({},p,{evasion:3}),damage:0}],skills:[N,_]}),Y=Object(f.a)({},h("Surge"),{damageModifier:-.2,targetType:"single",rolls:[x("intelligence"),x("intelligence"),x("intelligence")],accuracy:x("intelligence"),perfectSplash:!1,perfectPierce:!0,perfectStatus:[]}),q=Object(f.a)({},h("Area Blast"),{damageModifier:-.5,targetType:"group",rolls:[x("intelligence"),x("intelligence"),x("intelligence")],accuracy:x("intelligence",-5),perfectSplash:!1,perfectPierce:!1,perfectStatus:[]}),K={blacksmith:H,hunter:z,scholar:Object(f.a)({},h("Scholar's Book"),{type:"tome",rarity:"common",hands:2,damage:{type:"magic",damage:6},traits:[],skills:[Y,q]}),bard:H},F=function(e){if(e.processed)throw new Error("No Processed Characters Allowed")},G=function(e){return e&&e.isCharacter},J=function(e){return e.status.map((function(e){return b[e.type]}))},U=function(e){return F(e),[].concat(Object(d.a)(e.weapon.skills),Object(d.a)(e.armor.reduce((function(e,t){return[].concat(Object(d.a)(e),Object(d.a)(t.skills))}),[])))},V=function(e){F(e);var t=function(e){return F(e),[].concat(Object(d.a)(e.traits),Object(d.a)(e.weapon.traits),Object(d.a)(j(e.armor)),Object(d.a)(j(J(e))))}(e),a=O.apply(void 0,Object(d.a)(t)),n=v(e.stats,a.stats),r=function(e){var t=e.traits.reduce((function(e,t){return Object(f.a)({},e,{damage:e.damage+t.damage})}),e.damage);return Object(f.a)({},e,{damage:t,processed:!0})}(e.weapon),c=J(e),o=U(e),i=25+Math.floor(.1*m[e.class].vigor),l=Math.floor(i+e.level+.1*e.level*n.vigor);return Object(f.a)({},e,{health:l,stats:n,weapon:r,statusEffects:c,skills:o,dead:n.healthOffset>=l,processed:!0})},X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object(f.a)({},h(),{isCharacter:!0,partyId:t,level:1,class:e,stats:m[e],traits:[],weapon:K[e],armor:[],status:[]})},Q=function(e,t){return(t.key?e.stats[t.key]:0)+(t.offset||0)},Z=function(e,t){return"physical"===t?e.stats.armor:"magic"===t?e.stats.resistance:0},ee=a(8),te=a(23),ae=a(15),ne=function(e){return{type:"@actions/parties/set-party",payload:{party:e}}},re=function(e){return{type:"@actions/parties/upsert-character",payload:{character:e}}},ce=function(e){return{type:"@actions/parties/delete-character",payload:{characterId:e}}},oe={updateParty:function(e){return function(t){T(e),t(ne(e))}},upsertCharacter:function(e){return function(t){t(re(e))}},deleteCharacter:function(e){return function(t){t(ce(e))}}},ie=function(e,t){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=arguments.length>1?arguments[1]:void 0,r=e[n.type];return r?r(a,n):a}}((n={},Object(ee.a)(n,"@actions/parties/set-party",(function(e,t){return Object(f.a)({},t.payload.party)})),Object(ee.a)(n,"@actions/parties/upsert-character",(function(e,t){return D(e,t.payload.character.id,(function(e){return t.payload.character}))})),Object(ee.a)(n,"@actions/parties/delete-character",(function(e,t){return Object(f.a)({},e,{characters:e.characters.filter((function(e){return e.id!==t.payload.characterId}))})})),n),{isParty:!0,id:Object(g.a)(),name:"PlayerParty",characters:[Object(f.a)({},X("blacksmith"),{name:"max m"}),Object(f.a)({},X("hunter"),{name:"katie c"}),Object(f.a)({},X("scholar"),{name:"milo w"})]}),le=function(){return function(e,t){var a=Object(te.b)();return Object(c.useMemo)((function(){return Object(ae.b)(e,a)}),t?[a].concat(Object(d.a)(t)):[a])}(oe)},ue={rawParty:P(),party:L(P()),updateParty:function(e){},upsertCharacter:function(e){},deleteCharacter:function(e){},findCharacter:function(e){},findRawCharacter:function(e){}},se=o.a.createContext(ue),de=function(e){var t=e.children,a=le(),n=Object(te.c)((function(e){return e.party})),r=Object(c.useMemo)((function(){return L(n)}),[n]);return o.a.createElement(se.Provider,{value:{party:r,rawParty:n,updateParty:function(e){a.updateParty(e)},upsertCharacter:function(e){if(e){if(e.processed)throw new Error("No processed Characters Allowed");a.upsertCharacter(e)}},deleteCharacter:function(e){a.deleteCharacter(e)},findCharacter:function(e){return M(r,e)},findRawCharacter:function(e){return M(n,e)}}},t)},fe={party:L(P()),enemyParty:L(P()),activeCharacter:V(X("blacksmith")),queue:[],selectedSkill:void 0,selectedTargets:[],roundResults:[],activeRound:void 0,isRunning:!1,isDone:!1,onSkillSelect:function(e){},onTargetsSelect:function(e){},start:function(){},next:function(){},commit:function(){}},pe=Object(c.createContext)(fe),me=function(){return Object(c.useContext)(pe)},ge=function(e){var t=e.children,a=e.enemyParty,n=e.rawEnemyParty,r=e.setEnemyParty,i=Object(c.useContext)(se),l=i.party,p=i.rawParty,m=i.updateParty,g=Object(c.useMemo)((function(){return function(e,t){return function(a){var n=function(e,t,a){return D(e,t,a)};return a.forEach((function(a){var r=a.source,c=(a.target,e.id===r.partyId?e:t),o=e.id===r.partyId?t:e;o=n(o,a.target.id,(function(e){return Object(f.a)({},e,{stats:Object(f.a)({},e.stats,{healthOffset:e.stats.healthOffset+a.totalDamage.damage})})})),a.splashDamage.damage>0&&o.characters.filter((function(e){return e.id!==a.target.id})).forEach((function(e){o=n(o,e.id,(function(t){var n=Z(V(e),a.splashDamage.type);return Object(f.a)({},t,{stats:Object(f.a)({},t.stats,{healthOffset:t.stats.healthOffset+(a.splashDamage.damage-n)})})}))})),c.id===e.id?(e=c,t=o):(e=o,t=c)})),{party:e,enemyParty:t}}}(p,n)}),[p,n]),h=Object(c.useState)(!1),b=Object(u.a)(h,2),y=b[0],v=b[1],O=Object(c.useState)(!1),j=Object(u.a)(O,2),E=j[0],x=j[1],k=Object(c.useMemo)((function(){return[].concat(Object(d.a)(l.characters),Object(d.a)(a.characters)).filter((function(e){return!e.dead}))}),[l,a]),S=Object(c.useState)(k.sort((function(e,t){return t.stats.agility-e.stats.agility})).map((function(e){return e.id}))),w=Object(u.a)(S,2),T=w[0],P=w[1],M=Object(c.useState)([]),L=Object(u.a)(M,2),R=L[0],B=L[1],W=Object(c.useState)(),H=Object(u.a)(W,2),N=H[0],_=H[1],z=Object(c.useState)(),Y=Object(u.a)(z,2),q=Y[0],K=Y[1],F=Object(c.useState)(),G=Object(u.a)(F,2),J=G[0],U=G[1],X=Object(c.useMemo)((function(){return k.find((function(e){return e.id===T[0]}))}),[T,k]);return Object(c.useEffect)((function(){if(X){if(X.partyId===a.id){var e=C(X.skills),t=C(function(e,t){var n=l.id===e?l:a,r=l.id===e?a:l;switch(t.targetType){case"single":return r.characters.filter((function(e){return!e.dead}));case"ally":return n.characters.filter((function(e){return!e.dead}));case"group":return[r];case"party":return[n];case"self":return[X];default:return[]}}(X.partyId,e));!function(e,t){var a=I(e,X,A(t));_(a)}(e,$(e.targetType,t))}}else T.length>0&&P((function(e){var t=Object(s.a)(e),a=t[0],n=t.slice(1);return[].concat(Object(d.a)(n),[a]).filter((function(e){return void 0!==k.find((function(t){return t.id===e}))}))}))}),[(X||{}).id]),Object(c.useEffect)((function(){if(!E)return a.characters.every((function(e){return e.dead}))?(alert("you win"),void x(!0)):l.characters.every((function(e){return e.dead}))?(x(!0),void alert("you lose")):void 0}),[l,a]),o.a.createElement(pe.Provider,{value:{party:l,enemyParty:a,queue:T.map((function(e){return k.find((function(t){return t.id===e}))})).filter((function(e){return void 0!==e})),activeCharacter:X,activeRound:N,selectedSkill:J,selectedTargets:q?A(q):[],roundResults:R,isDone:E,isRunning:y,onSkillSelect:function(e){U(e),e.targetType!==(null===J||void 0===J?void 0:J.targetType)&&K(void 0)},onTargetsSelect:function(e){J&&K($(J.targetType,e))},start:function(){return v(!0)},next:function(){if(J&&q){var e=I(J,X,A(q).filter((function(e){return!e.dead})));_(e)}},commit:function(){if(N){var e=g(N);r(e.enemyParty),m(e.party),U(void 0),K(void 0),B((function(e){return[].concat(Object(d.a)(e),[N])})),_(void 0),P((function(e){var t=Object(s.a)(e),a=t[0],n=t.slice(1);return[].concat(Object(d.a)(n),[a]).filter((function(e){return void 0!==k.find((function(t){return t.id===e}))}))}))}}}},t)},he=a(114),be=a(63),ye=a.n(be),ve=a(108),Oe=function(e){var t=e.delay,a=void 0===t?500:t,n=e.children,r=Object(c.useState)(!1),i=Object(u.a)(r,2),l=i[0],s=i[1],d=Object(c.useState)(!1),f=Object(u.a)(d,2),p=f[0],m=f[1],h=Object(c.useState)(Object(g.a)()),b=Object(u.a)(h,2),y=b[0],v=b[1];Object(c.useLayoutEffect)((function(){(function(){var e=Object(ve.a)(ye.a.mark((function e(){return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l&&setTimeout((function(){v(Object(g.a)())}),a);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),Object(c.useLayoutEffect)((function(){l&&m(!0)}),[y]);return o.a.createElement("div",{onMouseEnter:function(e){e.preventDefault(),e.stopPropagation(),s(!0)},onMouseLeave:function(e){e.preventDefault(),e.stopPropagation(),s(!1),m(!1)}},n({isHovering:p}))},je=function(e){var t=e.style,a=void 0===t?{}:t,n=e.substyle,r=void 0===n?{}:n,c=e.children,i=e.tag,l=void 0===i?"div":i,u=Object(he.a)(e,["style","substyle","children","tag"]);return o.a.createElement("div",{style:Object(f.a)({border:"1px solid #000",display:"flex",boxSizing:"border-box"},a)},o.a.createElement(l,Object.assign({style:Object(f.a)({border:r.border||"1px solid #555",background:"linear-gradient(0deg, #222222 0%, #2a2a2a 100%)",padding:10,color:"#ccc",flex:1,boxShadow:"inset 0px 0px 2px black"},r)},u),c))},Ee=a(9),xe=Object(Ee.b)("div",(function(e){return{display:"flex",flexDirection:e.$direction||"row",flex:e.$full?1:"default"}})),ke=Object(Ee.b)("div",(function(){return{flex:1}})),Se=Object(Ee.b)("span",(function(){return{fontFamily:"Inconsolata, monospace",fontWeight:600}})),Ce=Object(Ee.b)("div",(function(){return{fontFamily:"Inconsolata, monospace",fontWeight:600}})),we=function(e,t){return o.a.createElement("span",{style:{color:e,fontWeight:"bold"}},t)},Te=function(e,t){return function(a){var n=a.partyId===e.id,r=a.partyId===t.id;return we(n?"lightgreen":r?"lightsalmon":"white",a.name)}},Pe=Object(c.createContext)({combatLog:[]}),Me=function(e){var t=e.children,a=me(),n=a.roundResults,r=a.enemyParty,i=a.party,l=Object(c.useState)([]),s=Object(u.a)(l,2),p=s[0],m=s[1],g=Object(c.useState)({}),h=Object(u.a)(g,2),b=h[0],y=h[1],v=Te(i,r),O=function(e){return m((function(t){return[].concat(Object(d.a)(t),[o.a.createElement(Se,{style:{display:"inline-block",fontWeight:"normal"}},e)])}))};return Object(c.useEffect)((function(){[].concat(Object(d.a)(r.characters),Object(d.a)(i.characters)).forEach((function(e){e.dead&&!b[e.id]&&(y((function(t){return Object(f.a)({},t,Object(ee.a)({},e.id,!0))})),O(o.a.createElement("span",null,we("lightcoral","".concat(e.name," died.")))))}))}),[r,i]),Object(c.useEffect)((function(){if(0!==n.length){var e,t=n[n.length-1],a=t[0];if(a)O(o.a.createElement("span",null,v(a.source)," uses ",(e=a.skill,we("plum",e.name)),".")),a.accuracySuccess||O(o.a.createElement("span",null,a.source.name,"'s attack missed.")),a.criticalSuccess&&O(o.a.createElement("span",null,we("gold","Critical Hit!"))),a.perfect&&O(o.a.createElement("span",null,we("gold","Perfect!"))),t.forEach((function(e){var t=i.id===e.source.partyId?r:i;e.accuracySuccess&&(e.dodgeSuccess?O(o.a.createElement("span",null,v(e.target)," dodged the attack.")):O(o.a.createElement("span",null,e.skill.name," deals"," ",we("white","".concat(e.totalDamage.damage," damage"))," to"," ",v(e.target),".")),e.splashDamage.damage>0&&t.characters.filter((function(t){return t.id!==e.target.id})).forEach((function(t){var a=Z(t,e.splashDamage.type);O(o.a.createElement("span",null,e.skill.name," deals"," ",we("white","".concat(e.splashDamage.damage-a," damage"))," ","to ",v(t),"."))})))}))}}),[n.length]),o.a.createElement(Pe.Provider,{value:{combatLog:p}},t)},De=a(109),Le=a.n(De),Ae=function(e){var t=Object.assign({},e);return o.a.createElement(Le.a,Object.assign({direction:"up",tagName:"div",padding:"0",arrow:!1},t))},$e=function(e){return o.a.createElement(Oe,null,(function(t){var a=t.isHovering;return o.a.createElement(Ae,Object.assign({},e,{isOpen:a}))}))},Re=function(e){var t=e.name,a=void 0===t?"":t,n=e.value,r=e.max,c=e.color,i=e.height,l=void 0===i?30:i,u=e.children,s=n/r*100,d=s>100?100:s;return o.a.createElement($e,{direction:"right",content:o.a.createElement(je,null,"".concat(a," (").concat(n," / ").concat(r,")"))},o.a.createElement(je,{substyle:{padding:0,background:"#555",height:l-2,position:"relative"}},o.a.createElement(xe,{style:{position:"absolute",left:0,boxSizing:"border-box",height:l-2,maxWidth:"".concat(d,"%"),minWidth:"".concat(d,"%"),boxShadow:"inset 0px 0px 1px rgba(0,0,0,0.5)",textShadow:"1px 1px 1px black",backgroundColor:c,color:"white",alignItems:"center",justifyContent:"center",transition:"all 0.5s"}}),o.a.createElement(ke,{style:{position:"absolute",height:l,lineHeight:"".concat(l-2,"px"),right:4,top:0,fontSize:10,fontWeight:"bold",overflow:"hidden",textShadow:"0px 0px 3px black"}},o.a.createElement(Ce,null,u))))},Ie=Object(Ee.b)(Ce,(function(){return{height:15,fontSize:"12px",fontWeight:"bolder",padding:"0px 4px",lineHeight:"15px",flex:1,textAlign:"center",background:"#111"}})),Be=Object(Ee.b)("div",(function(e){var t=e.$selected,a=e.$active;return{":hover":{boxShadow:e.$hoverable&&!t?"0px 0px 20px black":void 0},margin:10,boxShadow:e.$isHovering?"0px 0px 20px black":t?"0px 0px 10px black":a?"0px 0px 20px white":"none",transition:"all 0.1s"}})),We=function(e){var t=e.character,a=e.activeCharacter,n=e.hoverable,r=e.selected,c=e.isHovering,i=e.onClick,l=t.health-t.stats.healthOffset;return o.a.createElement(Be,{$hoverable:n&&!t.dead,$active:t.id===a.id,$selected:r,$isHovering:c,style:{opacity:t.dead?.5:1}},o.a.createElement(je,{onClick:function(){return i&&!t.dead?i():null},style:{borderWidth:2,cursor:i?"pointer":"default"},substyle:{padding:0,width:380}},o.a.createElement(xe,{style:{border:"2px solid black"}},o.a.createElement(xe,{style:{borderRight:"2px solid black"}},o.a.createElement("img",{alt:"profile",height:"115",width:"115",src:"https://picsum.photos/seed/".concat(t.name,"/115/115"),style:{height:115,width:115}})),o.a.createElement(xe,{$full:!0,$direction:"column"},o.a.createElement(xe,{style:{padding:"2px 4px",paddingLeft:8,background:"rgba(255,255,255,0.2)",borderBottom:"1px solid rgba(255,255,255,0.4)"}},o.a.createElement("span",{style:{fontWeight:"bolder",textShadow:"0px 0px 2px black"}},t.name)),o.a.createElement(xe,null,o.a.createElement("span",{style:{fontWeight:"bolder",padding:"2px 8px",fontSize:42,height:42,lineHeight:"42px"}},l>0?l:"Dead")),o.a.createElement(ke,null),o.a.createElement(Re,{name:"Health",color:"#8f4e4d",max:t.health,value:w(l),height:12},w(l),"/",t.health),o.a.createElement(Re,{name:"XP",color:"#5e8575",max:3300,value:1256,height:12},"1256/3300"),o.a.createElement(xe,null,o.a.createElement(Ie,null,"S-",t.stats.strength),o.a.createElement(Ie,null,"V-",t.stats.vigor),o.a.createElement(Ie,null,"I-",t.stats.intelligence),o.a.createElement(Ie,null,"P-",t.stats.perception),o.a.createElement(Ie,null,"T-",t.stats.talent),o.a.createElement(Ie,null,"A-",t.stats.agility),o.a.createElement(Ie,null,"L-",t.stats.luck))))))},He=a(110),Ne=a.n(He),_e={isOpen:!1,contents:null,callback:null,payload:null,blocking:!1,style:{}},ze="modalContext/OPEN",Ye="modalContext/CLOSE",qe=function(e,t,a,n){return{type:ze,contents:e,style:t,blocking:a,callback:n}},Ke=function(){return{type:Ye}},Fe=function(e){return{type:"modalContext/SET_PAYLOAD",payload:e}},Ge=function(e){return{type:"modalContext/SET_CONTENTS",contents:e}},Je=function(e){return{type:"modalContext/SET_CALLBACK",callback:e}},Ue=function(e){return{type:"modalContext/SET_BLOCKING",blocking:e}},Ve=function(e){return{type:"modalContext/SET_STYLE",style:e}},Xe=(r={},Object(ee.a)(r,ze,(function(e,t){return Object(f.a)({},e,{isOpen:!0,contents:t.contents?t.contents:e.contents,style:t.style?t.style:e.style||{},blocking:t.blocking||!1,callback:t.callback?t.callback:e.callback})})),Object(ee.a)(r,Ye,(function(e){return Object(f.a)({},e,{isOpen:!1})})),Object(ee.a)(r,"modalContext/SET_PAYLOAD",(function(e,t){return Object(f.a)({},e,{payload:t.payload})})),Object(ee.a)(r,"modalContext/SET_CONTENTS",(function(e,t){return Object(f.a)({},e,{callback:null,payload:null,contents:t.contents,blocking:!1,style:{}})})),Object(ee.a)(r,"modalContext/SET_CALLBACK",(function(e,t){return Object(f.a)({},e,{callback:t.callback})})),Object(ee.a)(r,"modalContext/SET_BLOCKING",(function(e,t){return Object(f.a)({},e,{blocking:t.blocking})})),Object(ee.a)(r,"modalContext/SET_STYLE",(function(e,t){return Object(f.a)({},e,{style:t.style})})),r),Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0,a=Xe[t.type];return a?a(e,t):e},Ze=o.a.createContext({open:function(){return null},close:function(){return null},setBlocking:function(){return null},setPayload:function(){return null},setContents:function(){return null},setCallback:function(){return null},setStyle:function(){return null}}),et=function(){return Object(c.useContext)(Ze)},tt=function(e,t){return{isOpen:e.isOpen,open:function(e,a,n,r){t(qe(e,a,n,r))},close:function(a){e.callback&&e.callback(a||e.payload),t(Ke())},setPayload:function(e){return t(Fe(e))},setContents:function(e){return t(Ge(e))},setCallback:function(e){return t(Je(e))},setBlocking:function(e){return t(Ue(e))},setStyle:function(e){return t(Ve(e))}}},at=function(e){var t=e.children,a=Object(c.useReducer)(Qe,_e),n=Object(u.a)(a,1)[0],r=Object(c.useMemo)((function(){return tt.apply(void 0,Object(d.a)(a))}),[a]);return o.a.createElement(Ze.Provider,{value:r},t,o.a.createElement(Ne.a,{isOpen:n.isOpen,onRequestClose:function(){n.blocking||r.close()},style:{content:{backgroundColor:"#111",color:"white",width:400,margin:"0 auto",bottom:"unset",borderColor:"#555"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"}}},n.contents||o.a.createElement("div",null)))},nt=function(){var e=me(),t=e.activeRound,a=e.commit,n=et(),r=n.open,i=n.close;n.setCallback;return Object(c.useEffect)((function(){t&&r(o.a.createElement(rt,{close:function(){return i(!0)}}),{},!0,(function(){a()}))}),[t,r,i,a]),null},rt=function(e){var t=e.close,a=me(),n=a.activeRound,r=a.party,i=a.enemyParty,l=Te(r,i),s=n||[],p=s[0],m=Object(c.useState)(p?[].concat(Object(d.a)(p.rollResults.map((function(e,t){return{label:p.skill.rolls[t].key||"<NULL>",result:void 0}}))),[{label:"accuracy",result:void 0}]):[]),g=Object(u.a)(m,2),h=g[0],b=g[1],y=Object(c.useState)(0),v=Object(u.a)(y,2),O=v[0],j=v[1],E=function(e,t){return b((function(a){return a.map((function(a,n){return n===t?e:a}))}))};if(Object(c.useEffect)((function(){p&&(O<h.length-1?setTimeout((function(){E({label:p.skill.rolls[O].key||"<NULL>",result:p.rollResults[O].result},O),j((function(e){return e+1}))}),200):O===h.length?setTimeout((function(){t()}),600):(setTimeout((function(){E({label:"accuracy",result:p.accuracySuccess},O)}),200),j((function(e){return e+1}))))}),[O]),!p)return null;var x=Object(f.a)({},p.target,{name:s.length>1?"".concat(s.length," characters"):p.target.name});return o.a.createElement(xe,{$direction:"column",style:{textAlign:"center"}},o.a.createElement("h4",{style:{margin:"0 0 20px 0"}},l(p.source)," uses ",p.skill.name," on ",l(x)),o.a.createElement(xe,{style:{justifyContent:"center"}},h.map((function(e){return o.a.createElement(xe,{$direction:"column",style:{marginRight:10}},o.a.createElement("span",null,void 0===e.result?we("rgba(255,255,255,0.4)",e.label):!0===e.result?we("lightgreen",e.label):we("lightcoral",e.label)))}))))},ct=Object(Ee.b)("button",(function(e){return{cursor:"pointer",background:"#222",boxShadow:"inset 0px 0px 3px black",textShadow:"0px 1px 3px black",border:"1px solid rgba(255,255,255,0.2)",color:"rgba(255,255,255,1)",":hover":{border:"1px solid rgba(255,255,255,0.4)"},":active":{outline:"none",border:"1px solid rgba(255,255,255,0.7)"},":focus":{outline:"none"},padding:"10px 30px"}})),ot=Object(Ee.c)(ct,(function(e){return{background:"linear-gradient(0deg, rgba(157,0,0,1) 0%, rgba(110,0,0,1) 100%)",fontWeight:"bold",borderTop:"none",padding:"10px 30px",boxShadow:"inset 0px 2px 8px black",":hover":{borderTop:"none"}}})),it=function(){var e=me(),t=e.activeCharacter,a=e.selectedSkill,n=e.selectedTargets,r=e.onSkillSelect;e.next;if(!t)return null;var c=a?S(t,a.rolls):0,i=1-(1-c)*(1-(a?S(t,[a.accuracy]):0)),l=a?R(a,t,n):"0";return o.a.createElement(je,{substyle:{color:"rgba(255,255,255,0.8)",minWidth:300}},o.a.createElement("h2",{style:{marginTop:0,textAlign:"center"}},a?0===n.length?"Choose a Target":"Confirm Action":"Choose a Skill"),o.a.createElement(xe,{style:{justifyContent:"space-around"}},t.skills.map((function(e){return o.a.createElement(ct,{onClick:function(){return r(e)},style:{background:"#111",borderColor:a&&e.id===a.id?"white":void 0}},e.name)}))),a&&o.a.createElement(je,{style:{marginTop:10},substyle:{background:"#111"}},o.a.createElement(xe,{$direction:"column",style:{alignItems:"center"}},o.a.createElement("span",null,"Target: ",a.targetType),o.a.createElement("span",null,"Perect: (",Math.floor(100*c),"%)"),o.a.createElement("span",null,"Accuracy: (",Math.floor(100*i),"%)"),"0"!==l&&o.a.createElement("span",null,"Base Damage: (",l,")"))))},lt=function(e){var t=e.party,a=me(),n=a.activeCharacter,r=a.selectedSkill,i=a.selectedTargets,l=a.onTargetsSelect,s=a.next,d=Object(c.useState)(!1),f=Object(u.a)(d,2),p=f[0],m=f[1];return o.a.createElement(xe,{$direction:"column"},o.a.createElement(xe,{style:{justifyContent:"space-around",cursor:"group"===(null===r||void 0===r?void 0:r.targetType)?"pointer":"default"},onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)},onClick:function(){r&&"group"===r.targetType&&l(t)}},t.characters.map((function(e){return o.a.createElement("div",null,o.a.createElement(We,{hoverable:void 0!==r,isHovering:p&&"group"===(null===r||void 0===r?void 0:r.targetType),selected:void 0!==i.find((function(t){return t.id===e.id})),onClick:function(){r&&"single"===r.targetType&&l(e)},activeCharacter:n,character:e}),r&&"single"===r.targetType&&i.length>0&&i[0].id===e.id&&o.a.createElement(xe,{style:{justifyContent:"center"}},o.a.createElement("div",{style:{boxShadow:"0px 2px 5px black"}},o.a.createElement(ot,{onClick:function(){return s()}},"Confirm Target"))))}))),r&&"group"===r.targetType&&i.length>0&&o.a.createElement(xe,{style:{justifyContent:"center"}},o.a.createElement("div",{style:{boxShadow:"0px 2px 5px black"}},o.a.createElement(ot,{onClick:function(){return s()},onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)}},"Confirm Group Target"))))},ut=function(){var e=me(),t=e.party,a=e.enemyParty,n=e.activeCharacter,r=e.queue,i=e.isDone,l=e.isRunning,u=e.start,s=et(),d=s.open,f=s.close,p=Object(c.useContext)(Pe).combatLog;return Object(c.useEffect)((function(){l||(d(o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("h1",null,"Combat Start!"))),setTimeout((function(){f(),u()}),500))}),[]),Object(c.useEffect)((function(){i&&d(o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("h4",null,"Refresh to do combat again")))}),[i]),l?n?o.a.createElement(xe,{style:{height:"100vh"}},o.a.createElement(xe,{$full:!0,$direction:"column"},o.a.createElement(je,null,r.map((function(e){return o.a.createElement("span",null,e.name," ",">")}))),o.a.createElement(xe,{$direction:"column",$full:!0,style:{padding:"30px 10px"}},o.a.createElement(lt,{party:a}),o.a.createElement(xe,{$full:!0},o.a.createElement(ke,null),o.a.createElement(xe,{$direction:"column"},o.a.createElement(ke,null),o.a.createElement(it,null),o.a.createElement(nt,null),o.a.createElement(ke,null)),o.a.createElement(ke,null)),o.a.createElement(xe,{style:{justifyContent:"space-around"}},t.characters.map((function(e){return o.a.createElement("div",null,o.a.createElement(We,{activeCharacter:n,character:e}))}))))),o.a.createElement(je,{substyle:{minWidth:300,fontSize:12,overflowY:"auto",display:"flex",flexDirection:"column"}},p.map((function(e){return e})))):o.a.createElement("span",null,"refresh to do combat again"):null},st=function(){var e=Object(c.useState)(P(3)),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(c.useMemo)((function(){return L(a)}),[a]);return o.a.createElement(ge,{enemyParty:r,rawEnemyParty:a,setEnemyParty:n},o.a.createElement(Me,null,o.a.createElement(at,null,o.a.createElement(ut,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(220);var dt=a(113),ft=a(111),pt=new dt.a,mt=Object(ae.e)(Object(ae.c)({party:ie}),Object(ae.d)(Object(ae.a)(ft.a)));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(te.a,{store:mt},o.a.createElement(Ee.a,{value:pt,debug:void 0,debugAfterHydration:!0},o.a.createElement(de,null,o.a.createElement(st,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[115,1,2]]]);
//# sourceMappingURL=main.6c58bcfe.chunk.js.map