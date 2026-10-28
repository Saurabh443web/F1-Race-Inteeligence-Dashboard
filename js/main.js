const $=id=>document.getElementById(id);
const rows=(a,max,fmt)=>a.map(([n,v])=>`<div class="row"><span>${n}</span><div class="bar"><i style="width:${v/max*100}%"></i></div><span>${fmt?fmt(v):v}</span></div>`).join("");
const fmt=v=>v.toLocaleString("en-US");
function drawD(){const k=+$("n").value;$("nv").textContent=k;$("dl").innerHTML=rows(drivers.slice(0,k),drivers[0][1],fmt)}
$("n").oninput=drawD;drawD();
$("tl").innerHTML=rows(teams,100,()=>"");
$("cl").innerHTML=rows(countries,400);
const chips=a=>a.map(x=>`<span>${x}</span>`).join("");
function drawC(){const q=$("q").value.toLowerCase();$("cc").innerHTML=chips(circuits.filter(c=>c.toLowerCase().includes(q)))}
$("q").oninput=drawC;drawC();
$("dr").innerHTML=chips(driverNames);$("tm").innerHTML=chips(teamNames);
const tabs=[["Driver leaderboard",()=>rows(drivers,drivers[0][1],fmt)],["Team ranking",()=>rows(teams,100,()=>"")],["Country participation",()=>rows(countries,400)]];
$("tabs").innerHTML=tabs.map((t,i)=>`<button role="tab" aria-selected="${i==0}" data-i="${i}">${t[0]}</button>`).join("");
function show(i){$("sp").innerHTML=tabs[i][1]();document.querySelectorAll("#tabs button").forEach(b=>b.setAttribute("aria-selected",b.dataset.i==i))}
$("tabs").onclick=e=>{if(e.target.dataset.i)show(+e.target.dataset.i)};show(0);
