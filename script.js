(function(){
var $=function(id){return document.getElementById(id)};
function svg(p,s,sw){return '<svg width="'+(s||20)+'" height="'+(s||20)+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="'+(sw||2)+'" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+p+'</svg>'}
var IC={
 hash:'<path d="M5 9h14M5 15h14M10 3 8 21M16 3l-2 18"/>',
 vol:'<path d="M11 5 6 9H3v6h3l5 4V5zM15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>',
 bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',
 pin:'<path d="m12 17 0 5M5 17h14l-2-4V6l2-2H7l2 2v7z"/>',
 users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
 plus:'<circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>',
 gif:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M9.5 10.5h-2v3h2v-1.2M12.5 10v4M15 14v-4h2.2M15 12h2"/>',
 smile:'<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
 send:'<path d="m22 2-7 20-4-9-9-4zM22 2 11 13"/>',
 mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4"/>',
 micoff:'<path d="m2 2 20 20M9 9v2a3 3 0 0 0 5.1 2.1M15 9.3V5a3 3 0 0 0-5.9-.7M17 16.9A7 7 0 0 1 5 11M19 11a7 7 0 0 1-.1 1.2M12 18v4"/>',
 head:'<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 15a2 2 0 0 1-2 2h-1v-5h3zM3 15a2 2 0 0 0 2 2h1v-5H3z"/>',
 headoff:'<path d="m2 2 20 20M3 14v-2a9 9 0 0 1 14.6-7M21 12v3a2 2 0 0 1-2 2h-1M6 17H5a2 2 0 0 1-2-2v-3"/>',
 gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
 chev:'<path d="m6 9 6 6 6-6"/>',
 chevr:'<path d="m9 6 6 6-6 6"/>',
 phoneoff:'<path d="M10.7 13.3a16 16 0 0 1-2-2.6l1.3-1.3a2 2 0 0 0 .4-2.1L9.5 4.8A2 2 0 0 0 7.6 3.5H4.7A2 2 0 0 0 2.7 5.6a19 19 0 0 0 6 11.7M22 2 2 22M17 13.1l3.4.6a2 2 0 0 1 1.6 2v2.9a2 2 0 0 1-2.2 2"/>',
 reply:'<path d="m9 17-5-5 5-5M20 18v-2a4 4 0 0 0-4-4H4"/>',
 smileplus:'<path d="M22 11v1a10 10 0 1 1-9-10M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M16 5h6M19 2v6"/>',
 menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
 chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
 x:'<path d="M18 6 6 18M6 6l12 12"/>',
 sig:'<path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 20V4"/>'
};
var U={
 eu:{n:'Você',c:'#5b6cf0',s:'online'},
 marina:{n:'Marina',c:'#d9628f',s:'online',role:'Coordenação'},
 joao:{n:'João Pedro',c:'#2f9bd0',s:'online'},
 bia:{n:'Bia Cardoso',c:'#2fa982',s:'idle'},
 rafa:{n:'Rafael',c:'#c98a12',s:'dnd'},
 caio:{n:'Caio',c:'#8c5ad6',s:'online'},
 lu:{n:'Luiza',c:'#d9663f',s:'off'},
 theo:{n:'Théo',c:'#4a8f3f',s:'off'},
 bot:{n:'AvisoBot',c:'#555b66',s:'online',role:'BOT',bot:1}
};
var S=[
 {id:'squad',n:'Squad Unipampa',short:'SU',c:'#5b6cf0',members:['marina','joao','bia','rafa','caio','lu','theo','bot'],
  cats:[
   {n:'Informações',ch:[{id:'avisos',t:'t',n:'avisos',tp:'Prazos e recados importantes da turma'},{id:'regras',t:'t',n:'regras',tp:'Combinados do grupo'}]},
   {n:'Texto',ch:[{id:'geral',t:'t',n:'geral',tp:'Conversa livre. Entregas ficam em #entregas'},{id:'entregas',t:'t',n:'entregas',tp:'Tudo sobre as entregas da disciplina',un:1},{id:'duvidas',t:'t',n:'dúvidas',tp:'Pergunte sem medo'}]},
   {n:'Voz',ch:[{id:'estudo',t:'v',n:'Sala de estudo',v:['bia','caio']},{id:'reuniao',t:'v',n:'Reunião da squad',v:[]}]}
  ],
  msgs:{
   avisos:[
    {u:'bot',t:'09:00',x:'📌 Lembrete: a entrega 5 fecha na sexta às 23:59.',r:[{e:'👍',n:6},{e:'✅',n:3}]},
    {u:'marina',t:'09:12',x:'Pessoal, o link da pasta compartilhada está fixado. Subam os arquivos com o nome padrão, por favor.'}
   ],
   geral:[
    {u:'joao',t:'18:02',x:'Boa noite! Alguém já terminou a parte de protótipo?'},
    {u:'joao',t:'18:02',x:'Estou na dúvida se mando link ou arquivo.'},
    {u:'marina',t:'18:10',x:'A professora pediu link. Pode ser do Figma ou de qualquer ferramenta que abra no navegador.',r:[{e:'💡',n:2}]},
    {u:'bia',t:'18:14',x:'Eu fiz o meu em HTML e publiquei, ficou bem fácil de compartilhar 😄',r:[{e:'🔥',n:4,me:1},{e:'👏',n:2}]},
    {u:'caio',t:'18:20',x:'@Você viu o material do @Marina sobre prototipação? Ficou ótimo.'},
    {u:'rafa',t:'18:31',x:'Vou entrar na call de estudo daqui a pouco, quem vem?'}
   ],
   entregas:[
    {u:'marina',t:'14:05',x:'Entrega 5: protótipo de alta fidelidade. Critérios: navegação funcional, consistência visual e link acessível.'},
    {u:'lu',t:'14:40',x:'Podemos usar componentes prontos de bibliotecas de UI?',reply:{u:'marina',x:'Entrega 5: protótipo de alta fidelidade. Critérios…'}},
    {u:'marina',t:'14:52',x:'Pode, desde que a identidade visual seja de vocês.',r:[{e:'👍',n:5}]}
   ]
  }},
 {id:'jogos',n:'Dev de Jogos',short:'DJ',c:'#2fa982',members:['joao','caio','rafa','bia','theo','bot'],
  cats:[{n:'Projetos',ch:[{id:'novidades',t:'t',n:'novidades',tp:'O que saiu de novo no mundo dos jogos',un:1},{id:'godot',t:'t',n:'godot',tp:'Dicas, bugs e scripts'},{id:'arte',t:'t',n:'pixel-art',tp:'Sprites e tilesets'}]},
   {n:'Voz',ch:[{id:'jam',t:'v',n:'Game jam',v:[]}]}],
  msgs:{
   novidades:[{u:'caio',t:'11:20',x:'Saiu uma atualização grande de navegação 2D, vale a pena olhar as notas.',r:[{e:'🎮',n:3}]},{u:'rafa',t:'11:34',x:'Vou testar no projeto da jam hoje à noite.'}],
   godot:[{u:'joao',t:'16:12',x:'Alguém sabe como deixar o NPC trocar de estado sem `if` gigante?'},{u:'caio',t:'16:20',x:'Usa uma máquina de estados com um nó por estado. Fica bem mais limpo.',r:[{e:'👍',n:2}]}]
  }},
 {id:'rpg',n:'Mesa de RPG',short:'RP',c:'#c98a12',members:['rafa','lu','theo','marina','bot'],
  cats:[{n:'Aventura',ch:[{id:'taverna',t:'t',n:'taverna',tp:'Fora do personagem'},{id:'diario',t:'t',n:'diário-da-campanha',tp:'Resumo das sessões'}]},{n:'Voz',ch:[{id:'sessao',t:'v',n:'Sessão de sábado',v:['theo']}]}],
  msgs:{taverna:[{u:'rafa',t:'20:01',x:'Sábado às 19h, tragam as fichas atualizadas.',r:[{e:'🎲',n:4}]},{u:'lu',t:'20:05',x:'Meu bardo subiu de nível, vou precisar de ajuda com as magias.'}]}},
 {id:'livro',n:'Clube do Livro',short:'CL',c:'#d9628f',members:['bia','marina','lu','theo','bot'],
  cats:[{n:'Leituras',ch:[{id:'mes',t:'t',n:'leitura-do-mês',tp:'Capítulos e discussões sem spoiler'},{id:'sugestoes',t:'t',n:'sugestões',tp:'O que ler a seguir'}]}],
  msgs:{mes:[{u:'bia',t:'21:15',x:'Terminei o capítulo 8. Sem spoiler, mas que reviravolta!',r:[{e:'😮',n:3}]},{u:'marina',t:'21:30',x:'Só estou no 5, não me conta nada 😂'}]}}
];
var EM=['😀','😂','😍','🤔','😎','😭','👍','👏','🔥','🎉','💡','✅','❤️','🙏','👀','🚀','🎮','☕'];
var REPLIES=['Boa! Concordo com isso.','Pode deixar, eu vejo e te aviso.','Haha, verdade 😂','Alguém mais pode confirmar?','Valeu por avisar!','Combinado então 👍'];
var st={srv:'squad',ch:'geral',muted:false,deaf:false,voice:null,reply:null,membersOpen:false,last:{}};
var app=$('app');
function cur(){return S.filter(function(s){return s.id===st.srv})[0]}
function findCh(s,id){var r=null;s.cats.forEach(function(c){c.ch.forEach(function(h){if(h.id===id)r=h})});return r}
function firstText(s){var r=null;s.cats.forEach(function(c){c.ch.forEach(function(h){if(!r&&h.t==='t')r=h})});return r}
function esc(t){return t.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function fmt(t){
  var h=esc(t).replace(/`([^`]+)`/g,'<code>$1</code>');
  return h.replace(/@([\wÀ-ú]+)/g,'<span class="mn">@$1</span>');
}
function av(id,sz,status){
  var u=U[id];
  return '<div class="av '+sz+'" style="background:'+u.c+'">'+u.n.charAt(0)+(status?'<span class="st '+u.s+'"></span>':'')+'</div>';
}
function toast(m){var t=$('toast');t.textContent=m;t.classList.add('show');clearTimeout(toast.h);toast.h=setTimeout(function(){t.classList.remove('show')},1800)}

function renderRail(){
  var h='<button class="srv home" data-home="1" title="Mensagens diretas" aria-label="Mensagens diretas">'+svg(IC.chat,24,2)+'</button><div class="sep"></div>';
  S.forEach(function(s){
    var un=0;s.cats.forEach(function(c){c.ch.forEach(function(x){if(x.un)un++})});
    h+='<button class="srv'+(s.id===st.srv?' on':'')+'" style="--c:'+s.c+'" data-srv="'+s.id+'" title="'+esc(s.n)+'" aria-label="'+esc(s.n)+'">'+s.short+(un&&s.id!==st.srv?'<span class="badge">'+un+'</span>':'')+'</button>';
  });
  h+='<div class="sep"></div><button class="srv add" data-fake="Criar um servidor" title="Adicionar servidor" aria-label="Adicionar servidor">'+svg(IC.plus,24,2)+'</button>';
  $('rail').innerHTML=h;
}
function renderSide(){
  var s=cur();
  $('srvName').innerHTML='<span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(s.n)+'</span>'+svg(IC.chev,18,2.4);
  var h='';
  s.cats.forEach(function(c){
    h+='<div class="cat">'+svg(IC.chev,12,3)+esc(c.n)+'</div>';
    c.ch.forEach(function(x){
      var on=x.id===st.ch&&x.t==='t';
      h+='<button class="ch'+(on?' on':'')+(x.un?' unread':'')+'" data-ch="'+x.id+'">'+svg(x.t==='v'?IC.vol:IC.hash,18,2)+'<span class="nm">'+esc(x.n)+'</span>'+(x.un?'<span class="dot"></span>':'')+'</button>';
      if(x.t==='v'&&x.v.length){
        h+='<div class="vusers">';
        x.v.forEach(function(id){h+='<div class="vu">'+av(id,'s24')+'<span>'+esc(U[id].n)+'</span></div>'});
        h+='</div>';
      }
    });
  });
  $('chlist').innerHTML=h;
}
function renderVoice(){
  var p=$('voicePanel');
  if(!st.voice){p.hidden=true;return}
  var s=cur(),vc=findCh(s,st.voice.ch);
  p.hidden=false;
  p.innerHTML='<div class="t"><b>'+svg(IC.sig,14,2.4).replace('display:block','')+' Voz conectada</b><span>'+esc(vc?vc.n:'')+' / '+esc(S.filter(function(x){return x.id===st.voice.srv})[0].n)+'</span></div><button class="ibtn" id="hangup" title="Desconectar" aria-label="Desconectar" style="color:var(--txt)">'+svg(IC.phoneoff,20,2)+'</button>';
  p.querySelector('b').style.cssText='display:flex;align-items:center;gap:4px';
}
function renderMe(){
  $('meBtn').innerHTML=av('eu','s32',true).replace('s32','s32')+'<div style="min-width:0"><b>Você</b><small>'+(st.muted?'Microfone mudo':'Online')+'</small></div>';
  $('muteBtn').innerHTML=svg(st.muted?IC.micoff:IC.mic,20,2);$('muteBtn').classList.toggle('off',st.muted);
  $('deafBtn').innerHTML=svg(st.deaf?IC.headoff:IC.head,20,2);$('deafBtn').classList.toggle('off',st.deaf);
  $('muteBtn').querySelector('svg');
}
function renderTop(){
  var s=cur(),c=findCh(s,st.ch);
  $('topIcon').innerHTML='<span style="color:var(--muted)">'+svg(IC.hash,22,2)+'</span>';
  $('topName').textContent=c.n;
  $('topTopic').textContent=c.tp||'';
  $('msgIn').placeholder='Conversar em #'+c.n;
}
function renderMsgs(){
  var s=cur(),c=findCh(s,st.ch);
  var list=(s.msgs[st.ch]=s.msgs[st.ch]||[]);
  var h='<div class="intro"><div class="big">'+svg(IC.hash,36,2)+'</div><h2>Bem-vindo ao #'+esc(c.n)+'</h2><p>Este é o começo do canal #'+esc(c.n)+'.'+(c.tp?' '+esc(c.tp)+'.':'')+'</p></div><div class="divider">8 de novembro de 2026</div>';
  var prev=null;
  list.forEach(function(m,i){
    var u=U[m.u];
    var cont=prev&&prev.u===m.u&&!m.reply;
    var ment=/@Você/i.test(m.x);
    h+='<div class="msg'+(cont?'':' first')+(ment?' mentioned':'')+'" data-i="'+i+'">';
    if(m.reply){h+='</div>'}
    if(m.reply){h=h.slice(0,h.lastIndexOf('<div class="msg'));
      h+='<div class="rp">'+svg(IC.reply,14,2)+' <b>@'+esc(U[m.reply.u].n)+'</b> <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(m.reply.x)+'</span></div><div class="msg first'+(ment?' mentioned':'')+'" data-i="'+i+'" style="margin-top:0">';}
    h+=cont?'<div class="gut">'+m.t+'</div>':av(m.u,'s40');
    h+='<div class="cn">';
    if(!cont)h+='<div class="hd"><b style="color:'+(m.u==='eu'?'var(--txt-strong)':u.c)+'">'+esc(u.n)+'</b>'+(u.bot?'<span class="tag">Bot</span>':'')+'<time>'+(m.t.length===5?'Hoje às '+m.t:m.t)+'</time></div>';
    h+='<div class="tx">'+fmt(m.x)+'</div>';
    if(m.r&&m.r.length){h+='<div class="reacts">';m.r.forEach(function(r,j){h+='<button class="rx'+(r.me?' me':'')+'" data-rx="'+i+':'+j+'">'+r.e+' <span>'+r.n+'</span></button>'});h+='</div>'}
    h+='</div><div class="hov"><button data-rxadd="'+i+'" title="Reagir" aria-label="Reagir">'+svg(IC.smileplus,18,2)+'</button><button data-rp="'+i+'" title="Responder" aria-label="Responder">'+svg(IC.reply,18,2)+'</button></div></div>';
    prev=m;
  });
  var el=$('msgs');el.innerHTML=h;el.scrollTop=el.scrollHeight;
}
function renderMembers(){
  var s=cur();
  var on=[],off=[],staff=[];
  s.members.forEach(function(id){var u=U[id];if(u.role&&!u.bot)staff.push(id);else if(u.s==='off')off.push(id);else on.push(id)});
  on.unshift('eu');
  function grp(t,a,o){
    if(!a.length)return'';
    var h='<h4>'+t+' — '+a.length+'</h4>';
    a.forEach(function(id){var u=U[id];h+='<button class="mb'+(o?' offl':'')+'" data-fake="Perfil de '+esc(u.n)+'">'+av(id,'s32',true)+'<span class="txt"><b style="color:'+(o?'inherit':'var(--txt-strong)')+'">'+esc(u.n)+(u.bot?' <span class="tag" style="vertical-align:1px">Bot</span>':'')+'</b>'+(u.role&&!u.bot?'<small>'+u.role+'</small>':'')+'</span></button>'});
    return h;
  }
  $('members').innerHTML=grp('Coordenação',staff,0)+grp('Online',on,0)+grp('Offline',off,1);
}
function renderReply(){
  var r=$('replying');
  if(!st.reply){r.hidden=true;return}
  r.hidden=false;
  r.innerHTML='<span>Respondendo a <b>'+esc(U[st.reply.u].n)+'</b></span><button class="ibtn" id="cancelRp" aria-label="Cancelar resposta" style="width:24px;height:24px">'+svg(IC.x,16,2.4)+'</button>';
}
function renderAll(){renderRail();renderSide();renderVoice();renderMe();renderTop();renderMsgs();renderMembers();renderReply()}

function openChannel(id){
  var s=cur(),c=findCh(s,id);
  if(c.t==='v'){
    if(st.voice&&st.voice.ch===id&&st.voice.srv===s.id)return;
    leaveVoice(true);
    c.v.push('eu');st.voice={srv:s.id,ch:id};
    toast('Conectado em '+c.n);
    renderSide();renderVoice();return;
  }
  st.ch=id;c.un=0;st.reply=null;
  app.classList.remove('nav-open');
  renderRail();renderSide();renderTop();renderMsgs();renderReply();$('typing').innerHTML='';
}
function leaveVoice(silent){
  if(!st.voice)return;
  var s=S.filter(function(x){return x.id===st.voice.srv})[0],c=findCh(s,st.voice.ch);
  c.v=c.v.filter(function(x){return x!=='eu'});
  st.voice=null;
  if(!silent)toast('Desconectado da chamada');
  renderSide();renderVoice();
}
function openServer(id){
  var s=S.filter(function(x){return x.id===id})[0];
  st.last[st.srv]=st.ch;
  st.srv=id;st.ch=(st.last[id]&&findCh(s,st.last[id]))?st.last[id]:firstText(s).id;
  st.reply=null;$('typing').innerHTML='';
  renderAll();
}
function now(){var d=new Date();return ('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2)}
function send(){
  var inp=$('msgIn'),v=inp.value.trim();
  if(!v)return;
  var s=cur(),list=(s.msgs[st.ch]=s.msgs[st.ch]||[]);
  var m={u:'eu',t:now(),x:v};
  if(st.reply)m.reply={u:st.reply.u,x:st.reply.x.length>46?st.reply.x.slice(0,46)+'…':st.reply.x};
  list.push(m);inp.value='';st.reply=null;
  renderMsgs();renderReply();
  var srvId=st.srv,chId=st.ch;
  var cands=s.members.filter(function(id){return !U[id].bot&&U[id].s!=='off'});
  if(!cands.length)return;
  var who=cands[Math.floor(Math.random()*cands.length)];
  setTimeout(function(){
    if(st.srv===srvId&&st.ch===chId)$('typing').innerHTML='<span class="dots"><i></i><i></i><i></i></span><span><b>'+esc(U[who].n)+'</b> está digitando…</span>';
  },500);
  setTimeout(function(){
    list.push({u:who,t:now(),x:REPLIES[Math.floor(Math.random()*REPLIES.length)]});
    if(st.srv===srvId&&st.ch===chId){$('typing').innerHTML='';renderMsgs()}
  },2300);
}

document.addEventListener('click',function(e){
  var t=e.target.closest('button,[role=button]');
  if(!e.target.closest('#pop')&&!e.target.closest('#emojiBtn'))$('pop').hidden=true;
  if(!t)return;
  var d=t.dataset;
  if(d.home){toast('Protótipo: mensagens diretas ilustrativas');return}
  if(d.srv){openServer(d.srv);return}
  if(d.ch){openChannel(d.ch);return}
  if(d.fake){toast('Protótipo: '+d.fake);return}
  if(d.rx){
    var p=d.rx.split(':'),m=cur().msgs[st.ch][+p[0]],r=m.r[+p[1]];
    if(r.me){r.me=0;r.n--;if(r.n<1)m.r.splice(+p[1],1)}else{r.me=1;r.n++}
    renderMsgs();return;
  }
  if(d.rxadd){
    var m2=cur().msgs[st.ch][+d.rxadd];m2.r=m2.r||[];
    var ex=m2.r.filter(function(r){return r.e==='👍'})[0];
    if(ex){if(!ex.me){ex.me=1;ex.n++}}else m2.r.push({e:'👍',n:1,me:1});
    renderMsgs();return;
  }
  if(d.rp){
    var m3=cur().msgs[st.ch][+d.rp];
    st.reply={u:m3.u,x:m3.x};renderReply();$('msgIn').focus();return;
  }
  if(t.id==='cancelRp'){st.reply=null;renderReply();return}
  if(t.id==='hangup'){leaveVoice();return}
  if(t.id==='muteBtn'){st.muted=!st.muted;renderMe();return}
  if(t.id==='deafBtn'){st.deaf=!st.deaf;if(st.deaf)st.muted=true;renderMe();return}
  if(t.id==='sendBtn'){send();return}
  if(t.id==='emojiBtn'){$('pop').hidden=!$('pop').hidden;return}
  if(t.id==='membersBtn'){st.membersOpen=!st.membersOpen;$('members').classList.toggle('open',st.membersOpen);return}
  if(t.id==='menuBtn'){app.classList.add('nav-open');return}
  if(t.id==='srvName'){toast('Protótipo: menu do servidor');return}
  if(t.parentNode&&t.parentNode.id==='pop'){var i=$('msgIn');i.value+=t.textContent;i.focus();return}
});
$('scrim').addEventListener('click',function(){app.classList.remove('nav-open')});
$('msgIn').addEventListener('keydown',function(e){if(e.key==='Enter')send()});

/* ---------- Busca ---------- */
function norm(t){return t.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase()}
function hl(t,q){
  var nt=norm(t),nq=norm(q),out='',i=0,p;
  if(!nq||nt.length!==t.length)return esc(t);
  while((p=nt.indexOf(nq,i))>-1){out+=esc(t.slice(i,p))+'<mark>'+esc(t.slice(p,p+nq.length))+'</mark>';i=p+nq.length}
  return out+esc(t.slice(i));
}
var sIn=$('searchIn'),sres=$('sres'),sscope='server';
function closeSres(clear){sres.hidden=true;if(clear)sIn.value=''}
function refreshSearch(){if(!sres.hidden)runSearch()}
function searchServer(q){
  var s=cur(),nq=norm(q),groups=[],total=0;
  s.cats.forEach(function(cat){cat.ch.forEach(function(c){
    if(c.t!=='t')return;
    if(sscope==='channel'&&c.id!==st.ch)return;
    var hits=[];
    (s.msgs[c.id]||[]).forEach(function(m,i){
      if(norm(m.x).indexOf(nq)>-1||norm(U[m.u].n).indexOf(nq)>-1)hits.push({m:m,i:i});
    });
    if(hits.length){groups.push({c:c,hits:hits});total+=hits.length}
  })});
  return {groups:groups,total:total};
}
function runSearch(){
  var q=sIn.value.trim();
  if(!q){closeSres(false);return}
  var r=searchServer(q),s=cur(),h='',sc=$('sresBody').scrollTop;
  r.groups.forEach(function(g){
    h+='<div class="sg">'+svg(IC.hash,14,2.4)+esc(g.c.n)+' · '+g.hits.length+'</div>';
    g.hits.forEach(function(x){
      var u=U[x.m.u];
      h+='<button class="sr" type="button" data-go="'+s.id+'|'+g.c.id+'|'+x.i+'"><div class="h"><b style="color:'+u.c+'">'+hl(u.n,q)+'</b><time>Hoje às '+esc(x.m.t)+'</time></div><div class="x">'+hl(x.m.x,q)+'</div></button>';
    });
  });
  var where=sscope==='channel'?'#'+findCh(s,st.ch).n:s.n;
  if(!r.total)h='<div class="gs-empty">Nenhum resultado para “'+esc(q)+'” em '+esc(where)+'.</div>';
  $('sresTitle').textContent=r.total+(r.total===1?' resultado':' resultados')+' em '+where;
  $('sresBody').innerHTML=h;
  $('sresBody').scrollTop=sc;
  sres.hidden=false;
  [].forEach.call(document.querySelectorAll('.chip'),function(b){b.classList.toggle('on',b.dataset.scope===sscope)});
}
function goTo(sid,cid,mi){
  var s=S.filter(function(x){return x.id===sid})[0],c=findCh(s,cid);
  if(c.t==='v'){if(sid!==st.srv)openServer(sid);openChannel(cid);return}
  if(sid!==st.srv){st.last[st.srv]=st.ch;st.srv=sid;closeSres(true)}
  st.ch=cid;c.un=0;st.reply=null;$('typing').innerHTML='';
  app.classList.remove('nav-open');
  renderAll();
  if(window.innerWidth<=1100)closeSres(false);else refreshSearch();
  if(mi!=null){
    var el=document.querySelector('.msg[data-i="'+mi+'"]');
    if(el){el.scrollIntoView({block:'center'});el.classList.add('flash');setTimeout(function(){el.classList.remove('flash')},2200)}
  }
}
var _os=openServer;openServer=function(id){closeSres(true);_os(id)};
var _oc=openChannel;openChannel=function(id){_oc(id);refreshSearch()};
sIn.addEventListener('input',runSearch);
sIn.addEventListener('focus',function(){if(sIn.value.trim())runSearch()});
sIn.addEventListener('keydown',function(e){if(e.key==='Escape'){closeSres(true);sIn.blur()}});
$('sresClose').addEventListener('click',function(){closeSres(true)});
sres.addEventListener('click',function(e){
  var b=e.target.closest('[data-scope],[data-go]');if(!b)return;
  if(b.dataset.scope){sscope=b.dataset.scope;runSearch();return}
  var p=b.dataset.go.split('|');goTo(p[0],p[1],+p[2]);
});

var gs=$('gs'),gsIn=$('gsIn'),gsList=$('gsList'),gsItems=[],gsAct=0,gsPrev=null;
function srvBadge(s){return '<span class="gs-badge" style="background:'+s.c+'">'+s.short+'</span>'}
function renderGs(){
  var q=gsIn.value.trim(),nq=norm(q),h='';gsItems=[];gsAct=0;
  function sec(t){h+='<div class="gs-sec">'+t+'</div>'}
  function item(html,go){h+='<button class="gs-it'+(gsItems.length===0?' act':'')+'" type="button" role="option" data-k="'+gsItems.length+'">'+html+'</button>';gsItems.push(go)}
  var sv=S.filter(function(s){return !nq||norm(s.n).indexOf(nq)>-1});
  if(sv.length){
    sec('Servidores');
    sv.forEach(function(s){item(srvBadge(s)+'<span class="tx"><span class="l1">'+hl(s.n,q)+'</span><span class="l2">'+s.members.length+' membros'+(s.id===st.srv?' · servidor atual':'')+'</span></span>',['s',s.id])});
  }
  if(nq){
    var chs=[],ms=[];
    S.forEach(function(s){
      s.cats.forEach(function(c){c.ch.forEach(function(x){if(norm(x.n).indexOf(nq)>-1)chs.push({s:s,c:x})})});
      Object.keys(s.msgs).forEach(function(k){
        var c=findCh(s,k);
        (s.msgs[k]||[]).forEach(function(m,i){if(norm(m.x).indexOf(nq)>-1||norm(U[m.u].n).indexOf(nq)>-1)ms.push({s:s,c:c,m:m,i:i})});
      });
    });
    if(chs.length){
      sec('Canais');
      chs.forEach(function(r){item('<span class="gs-ic">'+svg(r.c.t==='v'?IC.vol:IC.hash,20,2)+'</span><span class="tx"><span class="l1">'+hl(r.c.n,q)+'</span><span class="l2">'+esc(r.s.n)+(r.c.t==='v'?' · canal de voz':'')+'</span></span>',['c',r.s.id,r.c.id])});
    }
    if(ms.length){
      sec('Mensagens'+(ms.length>8?' (8 de '+ms.length+')':''));
      ms.slice(0,8).forEach(function(r){var u=U[r.m.u];item('<span class="av s32" style="background:'+u.c+'">'+u.n.charAt(0)+'</span><span class="tx"><span class="l1">'+hl(r.m.x,q)+'</span><span class="l2">'+esc(u.n)+' · #'+esc(r.c.n)+' · '+esc(r.s.n)+'</span></span>',['m',r.s.id,r.c.id,r.i])});
    }
    if(!gsItems.length)h='<div class="gs-empty">Nenhum resultado para “'+esc(q)+'” em todos os servidores.</div>';
  }
  gsList.innerHTML=h;
}
function openGs(){app.classList.remove('nav-open');gsPrev=document.activeElement;gs.hidden=false;gsIn.value='';renderGs();gsIn.focus()}
function closeGs(){gs.hidden=true;if(gsPrev&&gsPrev.focus)gsPrev.focus()}
function pickGs(k){
  var g=gsItems[k];if(!g)return;
  closeGs();
  if(g[0]==='s')openServer(g[1]);else goTo(g[1],g[2],g[0]==='m'?g[3]:null);
}
$('gsBtn').addEventListener('click',openGs);
$('gsClose').addEventListener('click',closeGs);
gsIn.addEventListener('input',renderGs);
gsList.addEventListener('click',function(e){var b=e.target.closest('[data-k]');if(b)pickGs(+b.dataset.k)});
gs.addEventListener('mousedown',function(e){if(e.target===gs)closeGs()});
gsIn.addEventListener('keydown',function(e){
  var n=gsItems.length;
  if(e.key==='ArrowDown'||e.key==='ArrowUp'){
    e.preventDefault();if(!n)return;
    gsAct=(gsAct+(e.key==='ArrowDown'?1:n-1))%n;
    [].forEach.call(gsList.querySelectorAll('.gs-it'),function(b,k){b.classList.toggle('act',k===gsAct)});
    var a=gsList.querySelector('.gs-it.act');if(a)a.scrollIntoView({block:'nearest'});
  }else if(e.key==='Enter'){e.preventDefault();pickGs(gsAct)}
});
gs.addEventListener('keydown',function(e){
  if(e.key==='Escape')closeGs();
  else if(e.key==='Tab'){e.preventDefault();(document.activeElement===gsIn?$('gsClose'):gsIn).focus()}
});
document.addEventListener('keydown',function(e){
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();if(gs.hidden)openGs();else closeGs()}
});
$('gsBtn').insertAdjacentHTML('afterbegin',svg(IC.search,16,2.2));
$('gsIcon').innerHTML=svg(IC.search,20,2.2);
$('gsClose').innerHTML=svg(IC.x,18,2.2);
$('sresClose').innerHTML=svg(IC.x,18,2.2);

$('menuBtn').innerHTML=svg(IC.menu,22,2);
$('icBell').innerHTML=svg(IC.bell,20,2);$('icPin').innerHTML=svg(IC.pin,20,2);
$('membersBtn').innerHTML=svg(IC.users,20,2);$('icSearch').innerHTML=svg(IC.search,14,2.4);
$('icPlus').innerHTML=svg(IC.plus,22,2);$('icGif').innerHTML=svg(IC.gif,22,2);
$('emojiBtn').innerHTML=svg(IC.smile,22,2);$('sendBtn').innerHTML=svg(IC.send,20,2);
document.querySelector('[data-fake="Configurações de usuário"]').innerHTML=svg(IC.gear,20,2);
$('pop').innerHTML=EM.map(function(e){return '<button type="button" aria-label="Emoji '+e+'">'+e+'</button>'}).join('');
document.querySelector('.menu-btn').setAttribute('type','button');
renderAll();
})();
