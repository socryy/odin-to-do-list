(()=>{"use strict";!function(){const e=document.createElement("div");e.id="container",document.querySelector("body").appendChild(e);const t=document.createElement("div");t.id="header",e.appendChild(t);const n=document.createElement("div");n.id="headerText",n.textContent="To-Do List",t.appendChild(n);const d=document.createElement("div");d.id="main",e.appendChild(d);const o=document.createElement("div");o.id="sidebar",d.appendChild(o);const c=document.createElement("div");c.id="sidebarOptions",o.appendChild(c);const a=document.createElement("div");a.id="allTasksOption",c.appendChild(a);const i=document.createElement("i");i.className="fa-solid fa-house",a.appendChild(i);const l=document.createElement("div");l.className="optionText",l.textContent="All Tasks",a.appendChild(l);const r=document.createElement("div");r.id="todayOption",c.appendChild(r);const p=document.createElement("div");p.className="fa-solid fa-calendar-day",r.appendChild(p);const s=document.createElement("div");s.className="optionText",s.textContent="Today",r.appendChild(s);const m=document.createElement("div");m.id="weekOption",c.appendChild(m);const u=document.createElement("div");u.className="fa-solid fa-calendar-week",m.appendChild(u);const C=document.createElement("div");C.className="optionText",C.textContent="Week",m.appendChild(C);const h=document.createElement("div");h.id="sidebarProject",o.appendChild(h);const E=document.createElement("div");E.id="sidebarProjectTitle",E.textContent="Projects",h.appendChild(E);const y=document.createElement("div");y.id="sidebarProjectsPreview",h.appendChild(y);const v=document.createElement("button");v.id="addProjectButton",v.textContent="+ Add Project",h.appendChild(v);const f=document.createElement("form");f.id="addProjectForm",f.style.display="none",h.appendChild(f);const j=document.createElement("input");j.id="addProjectInput",j.placeholder="name",f.appendChild(j);const x=document.createElement("div");x.id="projectButtons",f.appendChild(x);const P=document.createElement("button");P.id="projectCancelButton",P.textContent="Cancel",P.type="button",x.appendChild(P);const b=document.createElement("button");b.id="projectAddButton",b.textContent="Add",x.appendChild(b);const T=document.createElement("div");T.id="content",d.appendChild(T);const k=document.createElement("div");k.id="projectTitle",T.appendChild(k);const q=document.createElement("div");q.id="projectContainer",T.appendChild(q);const S=document.createElement("button");S.id="addTaskButton",S.textContent="+ Add Task",S.style.display="none",T.appendChild(S);const B=document.createElement("div");B.id="footer",e.appendChild(B);const N=document.createElement("div");N.id="footerText",N.textContent="Copyright © The Odin Project 2023",B.appendChild(N)}(),function(){const e=document.querySelector("button#addProjectButton"),t=document.querySelector("form#addProjectForm");e.addEventListener("click",(function(){t.style.display="flex",e.style.display="none"})),document.querySelector("button#projectCancelButton").addEventListener("click",(()=>{t.style.display="none",e.style.display="flex"})),document.querySelector("form#addProjectForm").addEventListener("submit",(function(n){n.preventDefault(),t.style.display="none",e.style.display="flex";const d=document.querySelector("input#addProjectInput").value,o=document.createElement("button"),c=document.createElement("div");c.textContent=d;const a=document.createElement("i");a.className="fa-solid fa-arrow-right",o.appendChild(a),o.appendChild(c),document.querySelector("input#addProjectInput").value="",document.querySelector("#sidebarProjectsPreview").appendChild(o),o.addEventListener("click",(function(){const e=document.querySelector("#projectTitle"),t=document.querySelector("#addTaskButton");e.textContent=d,t.style.display="flex"}))}))}()})();