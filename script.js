const $ = id => document.getElementById(id);
const state = {mode:"dm",server:"Comunidade Gamer",channel:"geral",friend:"Marina",voice:false,reply:false};
const colors = {Marina:"#e58baf",Lucas:"#248046",Ana:"#d18b35",Erick:"#5865f2"};
const messages = {
  geral:[
    {n:"Marina",t:"Oi, pessoal! Como vocês estão?",time:"14:30"},
    {n:"Lucas",t:"Tudo certo! Alguém vai jogar hoje?",time:"14:32"},
    {n:"Ana",t:"Eu vou entrar mais tarde 😊",time:"14:34"}
  ],
  memes:[{n:"Lucas",t:"Olhem esse meme que encontrei 😂",time:"14:20"}],
  avisos:[{n:"Marina",t:"Bem-vindos ao nosso servidor!",time:"13:00"}]
};
const chats = {
  Marina:[{n:"Marina",t:"Oi! Tudo bem?",time:"14:10"}],
  Lucas:[{n:"Lucas",t:"Vamos jogar mais tarde?",time:"13:45"}],
  Ana:[{n:"Ana",t:"Você viu as novidades?",time:"12:30"}]
};
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function toast(text){const t=$("toast");t.textContent=text;t.style.display="block";clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.style.display="none",2300);}
function setTop(icon,title,sub=""){ $("top-icon").textContent=icon;$("top-title").textContent=title;$("top-sub").textContent=sub; }
function setSide(title,html){$("side-title").innerHTML=esc(title)+' <span>⌄</span>';$("side-body").innerHTML=html;}
function nav(text,icon,action,active=false){return `<button class="nav-item ${active?"active":""}" data-action="${action}">${icon} &nbsp; ${text}</button>`;}
function avatar(name,small=false){return `<span class="avatar ${small?"small":""}" style="background:${colors[name]||"#5865f2"}">${name[0]}</span>`;}
function showFriends(filter="Todos"){
  state.mode="dm";setTop("◉","Amigos","Discord • Protótipo");
  setSide("Mensagens diretas",nav("Amigos","◉","dm",true)+nav("Solicitações","♧","requests")+'<div class="section">Mensagens diretas</div>'+["Marina","Lucas","Ana"].map(n=>nav(n,avatar(n,true),"chat:"+n)).join(""));
  const people=filter==="Online"?["Marina","Lucas"]:["Marina","Lucas","Ana"];
  $("content").innerHTML=`<div class="panel"><h2>Amigos</h2><p class="muted intro">Veja seus amigos e comece uma conversa.</p><div class="pills"><button class="action" data-filter="Todos">Todos</button><button class="secondary" data-filter="Online">Online</button><button class="secondary" data-filter="Adicionar amigo">Adicionar amigo</button></div><div>${people.map(n=>`<div class="friend">${avatar(n)}<div class="friend-info"><b>${n}</b><small>${n==="Ana"?"Ausente":"Online"}</small></div><button class="secondary" data-action="chat:${n}">Mensagem</button></div>`).join("")}</div></div>`;
}
function renderServer(){
  state.mode="channel";state.channel="geral";
  setTop("🎮",state.server,"Servidor • Protótipo");
  setSide(state.server,nav("geral","#","channel:geral",true)+nav("memes","#","channel:memes")+nav("avisos","#","channel:avisos")+'<div class="section">Canais de voz</div>'+nav("Sala de voz","🔊","voice")+'<div class="section">Membros</div>'+["Erick","Marina","Lucas","Ana"].map(n=>`<div class="nav-item">${avatar(n,true)} ${n}</div>`).join(""));
  renderMessages();
}
function renderMessages(){
  const list=state.mode==="channel"?messages[state.channel]:chats[state.friend];
  $("content").innerHTML=`<div class="messages" id="messages">${list.map(m=>`<div class="message">${avatar(m.n)}<div><div class="message-name">${m.n}<span class="time">${m.time}</span></div><div class="message-text">${esc(m.t)}</div></div></div>`).join("")}</div><div class="composer"><button class="secondary" title="Responder a uma mensagem" data-action="reply">↶</button><input id="message-input" placeholder="${state.mode==="channel"?"Enviar mensagem em #"+state.channel:"Conversar com "+state.friend+"..."}"><button class="action" data-action="send">Enviar</button></div>`;
  $("messages").scrollTop=$("messages").scrollHeight;
}
function openChat(name){
  state.mode="chat";state.friend=name;setTop("◉",name,"Mensagem direta");
  setSide("Mensagens diretas",nav("Amigos","◉","dm")+'<div class="section">Mensagens diretas</div>'+["Marina","Lucas","Ana"].map(n=>nav(n,avatar(n,true),"chat:"+n,n===name)).join(""));
  renderMessages();
}
function settings(){
  state.mode="settings";setTop("⚙","Configurações","Preferências do usuário");
  setSide("Configurações",nav("Minha conta","●","account")+nav("Notificações","♢","notifications",true)+nav("Privacidade","♧","privacy"));
  notifications();
}
function notifications(){
  setTop("⚙","Notificações","Configurações");
  $("content").innerHTML=`<div class="panel"><h2>Notificações</h2><p class="muted intro">Gerencie como deseja receber notificações.</p><h3>Preferências gerais</h3>${[["Ativar notificações na área de trabalho","desktop",true],["Reproduzir sons de notificação","sound",true],["Mostrar prévia das mensagens","preview",false]].map(([label,id,checked])=>`<label class="setting">${label}<input type="checkbox" id="${id}" ${checked?"checked":""}></label>`).join("")}<button class="action" style="margin-top:20px" data-action="save-settings">Salvar alterações</button></div>`;
}
function voice(){
  state.mode="voice";state.voice=false;setTop("🔊","Sala de voz","Canal de voz • "+state.server);
  $("content").innerHTML=`<div class="panel"><h2>🔊 Sala de voz</h2><p class="muted intro">Conecte-se a este canal para conversar com outros participantes.</p><div class="voice-card">${avatar("Erick")}<p>Erick</p><small class="muted">Você</small></div><div class="voice-card">${avatar("Marina")}<p>Marina</p><small class="muted">Conectada</small></div><p><button class="action" data-action="toggle-voice" id="voice-button">Entrar no canal de voz</button></p><p class="muted" id="voice-status">Você ainda não está conectado.</p></div>`;
}
function send(){
  const input=$("message-input");if(!input||!input.value.trim())return;
  const target=state.mode==="channel"?messages[state.channel]:chats[state.friend];
  target.push({n:"Erick",t:(state.reply?"↪ Respondendo a uma mensagem — ":"")+input.value.trim(),time:"Agora"});
  state.reply=false;renderMessages();
}
document.addEventListener("click",e=>{
  const filter=e.target.closest("[data-filter]");if(filter){const f=filter.dataset.filter;if(f==="Adicionar amigo"){$("content").innerHTML=`<div class="panel"><h2>Adicionar amigo</h2><p class="muted intro">Adicione amigos usando o nome de usuário.</p><input class="field" id="new-friend" placeholder="Nome de usuário"><br><button class="action" data-action="add-friend">Enviar solicitação</button></div>`;}else showFriends(f);return;}
  const server=e.target.closest("[data-server]");if(server){state.server=server.dataset.server;document.querySelectorAll(".server").forEach(b=>b.classList.remove("active"));server.classList.add("active");renderServer();return;}
  const button=e.target.closest("[data-action]");if(!button)return;
  const action=button.dataset.action;
  if(action==="dm")showFriends();
  else if(action.startsWith("chat:"))openChat(action.slice(5));
  else if(action.startsWith("channel:")){state.mode="channel";state.channel=action.slice(8);setTop("#",state.channel,"#"+state.channel+" • "+state.server);renderMessages();}
  else if(action==="voice")voice();
  else if(action==="settings")settings();
  else if(action==="notifications")notifications();
  else if(action==="requests")toast("Nenhuma solicitação pendente.");
  else if(action==="account"||action==="privacy")toast("Área demonstrativa do protótipo.");
  else if(action==="reply"){state.reply=true;const input=$("message-input");input.placeholder="Respondendo a uma mensagem...";input.focus();}
  else if(action==="send")send();
  else if(action==="save-settings")toast("Preferências de notificação salvas!");
  else if(action==="toggle-voice"){state.voice=!state.voice;button.textContent=state.voice?"Desconectar":"Entrar no canal de voz";$("voice-status").textContent=state.voice?"Você está conectado ao canal.":"Você saiu do canal de voz.";toast(state.voice?"Conectado (simulação).":"Você saiu do canal.");}
  else if(action==="add-friend")toast("Solicitação de amizade demonstrativa enviada!");
  else if(action==="add-server")toast("Adição de servidor demonstrativa.");
});
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.id==="message-input")send();});
showFriends();
