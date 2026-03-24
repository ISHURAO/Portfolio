// backend/routes/admin.js
const router = require('express').Router();
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'ishu-admin-secret-2025';

router.get('/', (_req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Admin — Ishu Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Oxanium:wght@700;800&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    :root{--bg:#020409;--bg2:#060b14;--bg3:#0a0f18;--c1:#00d2ff;--c2:#7c3aed;--c3:#f43f8e;
      --border:rgba(255,255,255,0.08);--text:#eceef8;--text2:#8b94b3;--text3:#3a4260;
      --ff-d:'Oxanium',sans-serif;--ff-b:'DM Sans',sans-serif;--ff-m:'Fira Code',monospace}
    body{background:var(--bg);color:var(--text);font-family:var(--ff-b);min-height:100vh}
    .layout{display:flex;min-height:100vh}
    .sidebar{width:220px;background:var(--bg2);border-right:1px solid var(--border);
      display:flex;flex-direction:column;padding:1.5rem 0;flex-shrink:0;position:sticky;top:0;height:100vh;overflow-y:auto}
    .sb-logo{font-family:var(--ff-d);font-size:1.25rem;font-weight:800;
      background:linear-gradient(135deg,var(--c1),var(--c2));
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      padding:0 1.4rem 1.4rem;border-bottom:1px solid var(--border)}
    .sb-section{font-family:var(--ff-m);font-size:.62rem;letter-spacing:.2em;color:var(--text3);
      padding:.8rem 1.4rem .3rem;text-transform:uppercase}
    .sb-btn{display:flex;align-items:center;gap:.65rem;padding:.65rem 1.4rem;
      font-size:.86rem;color:var(--text2);background:none;border:none;width:100%;text-align:left;
      border-left:2px solid transparent;transition:background .2s,color .2s,border-color .2s}
    .sb-btn:hover,.sb-btn.on{background:rgba(0,210,255,.06);color:var(--c1);border-left-color:var(--c1)}
    .main{flex:1;padding:2rem 2.5rem;background:var(--bg3);overflow-y:auto}
    h1{font-family:var(--ff-d);font-size:1.75rem;font-weight:800;margin-bottom:.3rem}
    .sub{color:var(--text2);font-size:.87rem;margin-bottom:1.8rem}
    .panel{display:none}.panel.on{display:block}
    .stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;margin-bottom:2rem}
    .sc{padding:1.2rem 1.4rem;border-radius:12px;border:1px solid var(--border);background:rgba(255,255,255,.02);text-align:center}
    .sc-n{font-family:var(--ff-d);font-size:2rem;font-weight:800;
      background:linear-gradient(135deg,var(--c1),var(--c2));
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .sc-l{font-size:.72rem;color:var(--text3);font-family:var(--ff-m);margin-top:.2rem}
    .box{background:rgba(255,255,255,.02);border:1px solid var(--border);border-radius:13px;padding:1.6rem;margin-bottom:1.5rem}
    .box-title{font-family:var(--ff-d);font-size:1.05rem;font-weight:700;margin-bottom:1.1rem;color:var(--c1)}
    .fg{margin-bottom:1rem}
    .fg label{display:block;font-family:var(--ff-m);font-size:.67rem;letter-spacing:.15em;text-transform:uppercase;color:var(--text3);margin-bottom:.38rem}
    .fg input,.fg textarea,.fg select{width:100%;padding:.68rem .9rem;border-radius:8px;
      background:rgba(255,255,255,.04);border:1px solid var(--border);color:var(--text);
      font-family:var(--ff-b);font-size:.88rem;outline:none;transition:border-color .2s}
    .fg input:focus,.fg textarea:focus{border-color:rgba(0,210,255,.4)}
    .fg textarea{height:85px;resize:vertical}
    .fg select option{background:var(--bg2)}
    .two-col{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
    .btn-save{padding:.62rem 1.4rem;border-radius:7px;background:linear-gradient(135deg,var(--c2),var(--c1));
      color:#fff;font-weight:700;font-size:.83rem;border:none;transition:box-shadow .2s,transform .2s}
    .btn-save:hover{box-shadow:0 0 18px rgba(0,210,255,.3);transform:translateY(-1px)}
    .btn-del{padding:.5rem .9rem;border-radius:6px;background:rgba(244,63,142,.1);
      border:1px solid rgba(244,63,142,.25);color:var(--c3);font-size:.75rem;transition:background .2s}
    .btn-del:hover{background:rgba(244,63,142,.2)}
    .msg-ok{color:#4ade80;font-size:.82rem;margin-left:1rem;font-family:var(--ff-m)}
    .msg-err{color:#f87171;font-size:.82rem;margin-left:1rem;font-family:var(--ff-m)}
    table{width:100%;border-collapse:collapse;font-size:.83rem}
    th{text-align:left;padding:.65rem 1rem;font-family:var(--ff-m);font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:var(--text3);border-bottom:1px solid var(--border)}
    td{padding:.75rem 1rem;border-bottom:1px solid rgba(255,255,255,.04);color:var(--text2)}
    tr:hover td{background:rgba(255,255,255,.02)}
    .badge-new{padding:.14rem .45rem;border-radius:4px;background:rgba(0,210,255,.1);border:1px solid rgba(0,210,255,.2);font-size:.63rem;font-family:var(--ff-m);color:var(--c1)}
    .badge-read{padding:.14rem .45rem;border-radius:4px;background:rgba(255,255,255,.05);border:1px solid var(--border);font-size:.63rem;font-family:var(--ff-m);color:var(--text3)}
    /* Login overlay */
    #login{position:fixed;inset:0;background:var(--bg);z-index:9999;display:flex;align-items:center;justify-content:center}
    .login-box{background:var(--bg2);border:1px solid var(--border);border-radius:16px;padding:2.5rem;width:360px;text-align:center}
    .login-box h2{font-family:var(--ff-d);font-size:1.5rem;font-weight:800;margin-bottom:.5rem}
    .login-box p{color:var(--text2);font-size:.86rem;margin-bottom:1.4rem}
    .login-box input{width:100%;padding:.78rem 1rem;border-radius:8px;background:rgba(255,255,255,.04);border:1px solid var(--border);color:var(--text);font-size:.92rem;outline:none;margin-bottom:1rem;transition:border-color .2s}
    .login-box input:focus{border-color:rgba(0,210,255,.4)}
    .btn-login{width:100%;padding:.82rem;border-radius:8px;background:linear-gradient(135deg,var(--c2),var(--c1));color:#fff;font-weight:700;font-size:.95rem;border:none}
    .login-err{color:var(--c3);font-size:.8rem;margin-top:.5rem;min-height:1.2rem}
    @media(max-width:640px){.sidebar{width:56px}.sb-btn span,.sb-logo-txt,.sb-section{display:none}}
  </style>
</head>
<body>
  <div id="login">
    <div class="login-box">
      <h2>🔐 Admin</h2>
      <p>Enter your admin token</p>
      <input type="password" id="tok-input" placeholder="Admin token...">
      <button class="btn-login" onclick="doLogin()">Enter</button>
      <div class="login-err" id="login-err"></div>
    </div>
  </div>

  <div class="layout">
    <aside class="sidebar">
      <div class="sb-logo">IY Admin</div>
      <div class="sb-section">Dashboard</div>
      <button class="sb-btn on" onclick="show('overview',this)">📊 <span>Overview</span></button>
      <div class="sb-section">Content</div>
      <button class="sb-btn" onclick="show('projects',this)">🚀 <span>Projects</span></button>
      <button class="sb-btn" onclick="show('blogs',this)">📝 <span>Blogs</span></button>
      <button class="sb-btn" onclick="show('certs',this)">🎓 <span>Certs</span></button>
      <button class="sb-btn" onclick="show('messages',this)">📬 <span>Messages</span></button>
    </aside>

    <main class="main">
      <!-- OVERVIEW -->
      <div class="panel on" id="panel-overview">
        <h1>Dashboard</h1><p class="sub">Welcome back, Ishu 👋</p>
        <div class="stats">
          <div class="sc"><div class="sc-n" id="cnt-p">—</div><div class="sc-l">Projects</div></div>
          <div class="sc"><div class="sc-n" id="cnt-b">—</div><div class="sc-l">Blogs</div></div>
          <div class="sc"><div class="sc-n" id="cnt-c">—</div><div class="sc-l">Certs</div></div>
          <div class="sc"><div class="sc-n" id="cnt-m">—</div><div class="sc-l">Messages</div></div>
          <div class="sc"><div class="sc-n" id="cnt-u">—</div><div class="sc-l">Unread</div></div>
        </div>
        <div class="box">
          <div class="box-title">⚡ Quick Actions</div>
          <div style="display:flex;gap:.8rem;flex-wrap:wrap">
            <button class="btn-save" onclick="show('projects',document.querySelectorAll('.sb-btn')[2])">+ Add Project</button>
            <button class="btn-save" onclick="show('blogs',document.querySelectorAll('.sb-btn')[3])">+ Write Blog</button>
            <button class="btn-save" onclick="show('certs',document.querySelectorAll('.sb-btn')[4])">+ Add Cert</button>
            <a href="http://localhost:3000" target="_blank" style="display:inline-flex;align-items:center;padding:.62rem 1.4rem;border-radius:7px;border:1px solid rgba(0,210,255,.3);color:var(--c1);font-size:.83rem">View Portfolio ↗</a>
          </div>
        </div>
      </div>

      <!-- PROJECTS -->
      <div class="panel" id="panel-projects">
        <h1>Projects</h1><p class="sub">Manage portfolio projects</p>
        <div class="box">
          <div class="box-title">+ Add Project</div>
          <div class="two-col">
            <div class="fg"><label>Name</label><input id="p-name" placeholder="Dabba Drop"></div>
            <div class="fg"><label>Icon (emoji)</label><input id="p-icon" placeholder="🚀" style="max-width:80px"></div>
          </div>
          <div class="fg"><label>Description</label><textarea id="p-desc" placeholder="What does this do?"></textarea></div>
          <div class="two-col">
            <div class="fg"><label>GitHub URL</label><input id="p-gh" placeholder="https://github.com/..."></div>
            <div class="fg"><label>Live URL</label><input id="p-live" placeholder="https://..."></div>
          </div>
          <div class="fg"><label>Tech Stack (comma separated)</label><input id="p-tech" placeholder="React, Node.js, MongoDB"></div>
          <div class="fg"><label>Features (one per line)</label><textarea id="p-feats"></textarea></div>
          <button class="btn-save" onclick="saveProject()">Save Project</button>
          <span id="p-msg"></span>
        </div>
        <div class="box"><div class="box-title">All Projects</div><div id="p-list">Loading...</div></div>
      </div>

      <!-- BLOGS -->
      <div class="panel" id="panel-blogs">
        <h1>Blog Posts</h1><p class="sub">Create and manage articles</p>
        <div class="box">
          <div class="box-title">+ New Post</div>
          <div class="two-col">
            <div class="fg"><label>Title</label><input id="b-title" placeholder="Post title..."></div>
            <div class="fg"><label>Tag</label><input id="b-tag" placeholder="Node.js"></div>
          </div>
          <div class="fg"><label>Description</label><textarea id="b-desc" placeholder="Brief summary..."></textarea></div>
          <div class="fg"><label>Read Time</label><input id="b-time" placeholder="8 min" style="max-width:120px"></div>
          <div style="display:flex;align-items:center;gap:1rem">
            <button class="btn-save" onclick="saveBlog()">Publish Post</button>
            <label style="display:flex;align-items:center;gap:.4rem;font-size:.82rem;color:var(--text2)">
              <input type="checkbox" id="b-pub" checked style="width:auto"> Published
            </label>
          </div>
          <span id="b-msg"></span>
        </div>
        <div class="box"><div class="box-title">All Posts</div><div id="b-list">Loading...</div></div>
      </div>

      <!-- CERTS -->
      <div class="panel" id="panel-certs">
        <h1>Certificates</h1><p class="sub">Add certifications</p>
        <div class="box">
          <div class="box-title">+ Add Certificate</div>
          <div class="two-col">
            <div class="fg"><label>Title</label><input id="c-title" placeholder="Programming in Java — Top 5%"></div>
            <div class="fg"><label>Platform</label>
              <select id="c-plat"><option>NPTEL</option><option>Coursera</option><option>Udemy</option><option>Infosys</option><option>HackerRank</option><option>Other</option></select>
            </div>
          </div>
          <div class="fg"><label>Description</label><input id="c-desc" placeholder="Brief description..."></div>
          <div class="fg"><label>Certificate Link</label><input id="c-link" placeholder="https://..."></div>
          <button class="btn-save" onclick="saveCert()">Add Certificate</button>
          <span id="c-msg"></span>
        </div>
        <div class="box"><div class="box-title">All Certificates</div><div id="c-list">Loading...</div></div>
      </div>

      <!-- MESSAGES -->
      <div class="panel" id="panel-messages">
        <h1>Messages</h1><p class="sub">Contact form submissions</p>
        <div id="m-list"><p style="color:var(--text2)">Loading...</p></div>
      </div>
    </main>
  </div>

<script>
  const TOKEN_KEY='admin_tok';
  let tok=localStorage.getItem(TOKEN_KEY)||'';
  const EXPECTED='${ADMIN_TOKEN}';

  // Auto-remove login if token valid
  if(tok===EXPECTED)document.getElementById('login').style.display='none';

  function doLogin(){
    const v=document.getElementById('tok-input').value.trim();
    if(v===EXPECTED){tok=v;localStorage.setItem(TOKEN_KEY,tok);document.getElementById('login').style.display='none';loadStats()}
    else document.getElementById('login-err').textContent='❌ Invalid token';
  }
  document.getElementById('tok-input').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin()});

  function show(id,btn){
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('on'));
    document.querySelectorAll('.sb-btn').forEach(b=>b.classList.remove('on'));
    document.getElementById('panel-'+id).classList.add('on');
    if(btn)btn.classList.add('on');
    if(id==='messages')loadMessages();
    else if(id==='projects')loadProjects();
    else if(id==='blogs')loadBlogs();
    else if(id==='certs')loadCerts();
    else loadStats();
  }

  async function api(url,opts={}){
    const r=await fetch(url,{...opts,headers:{'Content-Type':'application/json','x-admin-token':tok,...(opts.headers||{})}});
    return r.json();
  }

  async function loadStats(){
    try{
      const [p,b,c,m]=await Promise.all([api('/api/projects'),api('/api/blogs'),api('/api/certs'),api('/api/contact')]);
      document.getElementById('cnt-p').textContent=Array.isArray(p)?p.length:'—';
      document.getElementById('cnt-b').textContent=Array.isArray(b)?b.length:'—';
      document.getElementById('cnt-c').textContent=Array.isArray(c)?c.length:'—';
      document.getElementById('cnt-m').textContent=Array.isArray(m)?m.length:'—';
      document.getElementById('cnt-u').textContent=Array.isArray(m)?m.filter(x=>!x.read).length:'—';
    }catch(e){console.log('Stats need backend running')}
  }

  async function loadMessages(){
    const el=document.getElementById('m-list');
    try{
      const msgs=await api('/api/contact');
      if(!Array.isArray(msgs)||!msgs.length){el.innerHTML='<p style="color:var(--text2);padding:1rem">No messages yet.</p>';return}
      el.innerHTML='<div style="border:1px solid var(--border);border-radius:12px;overflow:hidden"><table><thead><tr><th>Name</th><th>Email</th><th>Message</th><th>Date</th><th>Status</th></tr></thead><tbody>'+
        msgs.map(m=>'<tr><td>'+m.name+'</td><td><a href="mailto:'+m.email+'" style="color:var(--c1)">'+m.email+'</a></td><td style="max-width:280px">'+m.message.slice(0,80)+(m.message.length>80?'...':'')+'</td><td>'+new Date(m.createdAt).toLocaleDateString()+'</td><td>'+(m.read?'<span class="badge-read">read</span>':'<span class="badge-new">new</span>')+'</td></tr>').join('')+'</tbody></table></div>';
    }catch{el.innerHTML='<p style="color:var(--c3);padding:1rem">⚠ Backend not connected. Run: cd backend && npm run dev</p>'}
  }

  async function loadProjects(){
    const el=document.getElementById('p-list');
    try{
      const data=await api('/api/projects');
      if(!Array.isArray(data)||!data.length){el.innerHTML='<p style="color:var(--text2)">No projects yet.</p>';return}
      el.innerHTML='<table><thead><tr><th>Name</th><th>Tech</th><th>Actions</th></tr></thead><tbody>'+
        data.map(p=>'<tr><td>'+p.icon+' '+p.name+'</td><td style="color:var(--text2)">'+(p.tech||[]).slice(0,3).join(', ')+'</td><td><button class="btn-del" onclick="del(\'projects\',\''+p._id+'\',loadProjects)">Delete</button></td></tr>').join('')+'</tbody></table>';
    }catch{el.innerHTML='<p style="color:var(--text2)">Backend not connected.</p>'}
  }

  async function loadBlogs(){
    const el=document.getElementById('b-list');
    try{
      const data=await api('/api/blogs');
      if(!Array.isArray(data)||!data.length){el.innerHTML='<p style="color:var(--text2)">No posts yet.</p>';return}
      el.innerHTML='<table><thead><tr><th>Title</th><th>Tag</th><th>Status</th><th>Actions</th></tr></thead><tbody>'+
        data.map(b=>'<tr><td>'+b.title+'</td><td>'+b.tag+'</td><td>'+(b.published?'✅':'📝')+'</td><td><button class="btn-del" onclick="del(\'blogs\',\''+b._id+'\',loadBlogs)">Delete</button></td></tr>').join('')+'</tbody></table>';
    }catch{el.innerHTML='<p style="color:var(--text2)">Backend not connected.</p>'}
  }

  async function loadCerts(){
    const el=document.getElementById('c-list');
    try{
      const data=await api('/api/certs');
      if(!Array.isArray(data)||!data.length){el.innerHTML='<p style="color:var(--text2)">No certs yet.</p>';return}
      el.innerHTML='<table><thead><tr><th>Title</th><th>Platform</th><th>Actions</th></tr></thead><tbody>'+
        data.map(c=>'<tr><td>'+c.title+'</td><td>'+c.platform+'</td><td><button class="btn-del" onclick="del(\'certs\',\''+c._id+'\',loadCerts)">Delete</button></td></tr>').join('')+'</tbody></table>';
    }catch{el.innerHTML='<p style="color:var(--text2)">Backend not connected.</p>'}
  }

  async function saveProject(){
    const body={name:document.getElementById('p-name').value,icon:document.getElementById('p-icon').value||'🚀',desc:document.getElementById('p-desc').value,github:document.getElementById('p-gh').value,live:document.getElementById('p-live').value,tech:document.getElementById('p-tech').value.split(',').map(s=>s.trim()).filter(Boolean),features:document.getElementById('p-feats').value.split('\\n').filter(Boolean)};
    const msg=document.getElementById('p-msg');
    if(!body.name||!body.desc){msg.textContent='⚠ Name and description required';msg.className='msg-err';return}
    try{await api('/api/projects',{method:'POST',body:JSON.stringify(body)});msg.textContent='✅ Saved!';msg.className='msg-ok';loadProjects();loadStats()}
    catch{msg.textContent='❌ Error';msg.className='msg-err'}
  }

  async function saveBlog(){
    const body={title:document.getElementById('b-title').value,tag:document.getElementById('b-tag').value,desc:document.getElementById('b-desc').value,readTime:document.getElementById('b-time').value||'5 min',published:document.getElementById('b-pub').checked};
    const msg=document.getElementById('b-msg');
    if(!body.title||!body.desc){msg.textContent='⚠ Title and description required';msg.className='msg-err';return}
    try{await api('/api/blogs',{method:'POST',body:JSON.stringify(body)});msg.textContent='✅ Published!';msg.className='msg-ok';loadBlogs();loadStats()}
    catch{msg.textContent='❌ Error';msg.className='msg-err'}
  }

  async function saveCert(){
    const body={title:document.getElementById('c-title').value,platform:document.getElementById('c-plat').value,desc:document.getElementById('c-desc').value,link:document.getElementById('c-link').value};
    const msg=document.getElementById('c-msg');
    if(!body.title){msg.textContent='⚠ Title required';msg.className='msg-err';return}
    try{await api('/api/certs',{method:'POST',body:JSON.stringify(body)});msg.textContent='✅ Added!';msg.className='msg-ok';loadCerts();loadStats()}
    catch{msg.textContent='❌ Error';msg.className='msg-err'}
  }

  async function del(type,id,reload){if(!confirm('Delete this item?'))return;await api('/api/'+type+'/'+id,{method:'DELETE'});reload()}

  // Init
  if(tok===EXPECTED)loadStats();
</script>
</body>
</html>`);
});

module.exports = router;
