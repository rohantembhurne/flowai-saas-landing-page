import React, { useState } from "react";
import {
  ArrowRight, BarChart3, Bot, BrainCircuit, Check, ChevronDown, Clock3,
  Command, Gauge, Globe2, Layers3, Menu, MessageSquare, Play, Rocket,
  ShieldCheck, Sparkles, Users, X, Zap
} from "lucide-react";

const features = [
  { icon: Bot, title: "AI Task Automation", text: "Turn repetitive workflows into intelligent automations that run quietly in the background." },
  { icon: BrainCircuit, title: "Smart AI Assistant", text: "Ask, plan, summarize, research and create from one context-aware workspace." },
  { icon: BarChart3, title: "Actionable Insights", text: "See what is moving the needle with clear, real-time productivity analytics." },
  { icon: Layers3, title: "Unified Workspace", text: "Keep projects, tasks, conversations and AI outputs together in one place." },
  { icon: Users, title: "Team Collaboration", text: "Share workflows and decisions without adding another layer of meetings." },
  { icon: ShieldCheck, title: "Enterprise Ready", text: "Built with permissions, secure workflows and controls teams can trust." }
];

const testimonials = [
  ["Sarah Chen", "COO, Northstar Labs", "FlowAI gave our team back hours every week. We moved from busywork to the projects that actually matter."],
  ["Marcus Rivera", "Founder, Orbit Studio", "The interface feels premium, but the real win is how quickly our team adopted the automations."],
  ["Priya Shah", "VP Operations, VantaWorks", "We replaced three disconnected tools with one intelligent workspace. FlowAI is now part of our daily operating system."]
];

const plans = [
  { name: "Starter", price: "$0", note: "For individuals getting started", features: ["1 workspace", "AI assistant", "100 automation runs/mo", "Basic analytics"], button: "Start Free" },
  { name: "Pro", price: "$24", note: "For fast-moving teams", popular: true, features: ["Unlimited workspaces", "Advanced AI models", "5,000 automation runs/mo", "Team collaboration", "Priority support"], button: "Start Pro Trial" },
  { name: "Business", price: "$59", note: "For scaling organizations", features: ["Everything in Pro", "Custom AI workflows", "Unlimited automation", "SSO & advanced controls", "Dedicated support"], button: "Talk to Sales" }
];

const faqs = [
  ["What is FlowAI?", "FlowAI is an AI productivity platform that combines an intelligent assistant, workflow automation, analytics and team collaboration in one workspace."],
  ["Can I start for free?", "Yes. The Starter plan is free and includes the core assistant plus a monthly allowance of automation runs."],
  ["Do I need technical skills?", "No. FlowAI is designed for business teams. You can build automations using plain-language instructions and guided steps."],
  ["Can FlowAI work with my existing tools?", "Yes. The platform is designed around connected workflows so teams can bring their existing apps and processes into one operating layer."],
  ["Is my company data secure?", "FlowAI is designed with enterprise controls, permissions and secure data handling in mind. Contact sales for organization-specific requirements."],
  ["Can I cancel anytime?", "Yes. Plans are flexible and you can change or cancel your subscription whenever you need."]
];

function Logo() {
  return <a href="#top" className="flex items-center gap-2 font-bold tracking-tight text-lg"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-glow"><Sparkles size={18}/></span>FlowAI</a>;
}

function Dashboard({ compact=false }) {
  return <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d1222] shadow-2xl shadow-indigo-950/40 ${compact ? "" : "animate-float"}`}>
    <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
      <div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-red-400/70"/><i className="h-2.5 w-2.5 rounded-full bg-yellow-400/70"/><i className="h-2.5 w-2.5 rounded-full bg-green-400/70"/></div>
      <div className="rounded-md bg-white/5 px-3 py-1 text-[10px] text-slate-400">flowai.app/dashboard</div>
      <Command size={13} className="text-slate-500"/>
    </div>
    <div className="grid min-h-[310px] grid-cols-[145px_1fr]">
      <aside className="border-r border-white/10 p-3 hidden sm:block">
        <div className="mb-5 flex items-center gap-2 text-xs font-semibold"><span className="grid h-6 w-6 place-items-center rounded-lg bg-indigo-500/20 text-indigo-300"><Sparkles size={12}/></span>FlowAI</div>
        {["Overview","Automations","AI Assistant","Insights","Team"].map((x,i)=><div key={x} className={`mb-1 rounded-lg px-2.5 py-2 text-[10px] ${i===0?"bg-indigo-500/15 text-indigo-200":"text-slate-500"}`}>{x}</div>)}
      </aside>
      <main className="p-5">
        <div className="mb-5 flex items-end justify-between"><div><p className="text-[10px] text-slate-500">Monday, August 10</p><h3 className="mt-1 text-lg font-semibold">Good morning, Alex.</h3></div><button className="rounded-lg bg-indigo-500 px-3 py-2 text-[9px] font-semibold">New automation</button></div>
        <div className="grid grid-cols-3 gap-2">
          {[["12.8h","Time saved","+24%"],["84%","Automation","+18%"],["42","Tasks done","+31%"]].map(([a,b,c])=><div className="rounded-xl border border-white/8 bg-white/[.035] p-3" key={b}><p className="text-sm font-bold">{a}</p><p className="mt-1 text-[9px] text-slate-500">{b}</p><p className="mt-2 text-[8px] text-emerald-400">{c} this week</p></div>)}
        </div>
        <div className="mt-3 rounded-xl border border-white/8 bg-white/[.025] p-4">
          <div className="mb-3 flex justify-between"><span className="text-[10px] font-semibold">Productivity overview</span><span className="text-[8px] text-slate-500">Last 7 days</span></div>
          <div className="flex h-28 items-end gap-2">{[35,52,44,70,61,88,78,96,84,100,91,112].map((h,i)=><div key={i} className="flex-1 rounded-t bg-gradient-to-t from-indigo-600/30 to-cyan-300/80" style={{height:`${h/1.15}px`}}/>)}</div>
        </div>
      </main>
    </div>
  </div>
}

function App() {
  const [menu, setMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({name:"", email:"", phone:"", message:""});

  function submit(e) {
    e.preventDefault();
    setSent(true);
    setForm({name:"", email:"", phone:"", message:""});
    setTimeout(()=>setSent(false), 5000);
  }

  return <div id="top" className="min-h-screen overflow-hidden bg-[#070914] text-slate-100">
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#070914]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8"><Logo/>
        <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">{["Features","Solutions","Pricing","Resources"].map(x=><a className="transition hover:text-white" href={"#"+x.toLowerCase()} key={x}>{x}</a>)}</nav>
        <div className="hidden md:block"><a href="#contact" className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-indigo-100">Get Started <ArrowRight className="ml-1 inline" size={15}/></a></div>
        <button className="md:hidden" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?<X/>:<Menu/>}</button>
      </div>
      {menu && <nav className="border-t border-white/5 px-5 py-4 md:hidden">{["Features","Solutions","Pricing","Resources"].map(x=><a onClick={()=>setMenu(false)} className="block py-3 text-slate-300" href={"#"+x.toLowerCase()} key={x}>{x}</a>)}<a href="#contact" className="mt-2 block rounded-xl bg-white px-4 py-3 text-center font-semibold text-slate-950">Get Started</a></nav>}
    </header>

    <section className="section-grid relative"><div className="absolute left-1/2 top-0 h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[120px]"/>
      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center"><div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1.5 text-xs text-indigo-200"><Sparkles size={13}/> The intelligent way to work</div>
          <h1 className="text-5xl font-extrabold tracking-[-.04em] sm:text-6xl lg:text-7xl">Work Smarter.<br/><span className="gradient-text">Get More Done with AI.</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">FlowAI automates repetitive work, turns ideas into action, and gives your team one intelligent workspace to move faster.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href="#contact" className="rounded-xl bg-indigo-500 px-6 py-3.5 text-sm font-semibold shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:bg-indigo-400">Start Free <ArrowRight className="ml-1 inline" size={16}/></a><a href="#showcase" className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold transition hover:bg-white/10"><Play className="mr-2 inline" size={15}/>Watch Demo</a></div>
        </div>
        <div className="mx-auto mt-16 max-w-5xl"><Dashboard/></div>
        <div className="mt-14 text-center"><p className="mb-5 text-xs uppercase tracking-[.2em] text-slate-600">Trusted by ambitious teams at</p><div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-lg font-semibold text-slate-600"><span>Vertex</span><span>Northstar</span><span>ORBIT</span><span>Vanta</span><span>Altitude</span></div></div>
      </div>
    </section>

    <section id="features" className="border-t border-white/5 py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-2xl"><p className="text-sm font-semibold text-indigo-300">Everything in one flow</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A productivity layer built for modern teams.</h2><p className="mt-4 text-slate-400">Less switching. Less busywork. More meaningful output.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{features.map(({icon:Icon,title,text})=><div key={title} className="group rounded-2xl border border-white/8 bg-white/[.025] p-6 transition hover:-translate-y-1 hover:border-indigo-400/20 hover:bg-white/[.04]"><span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-500/10 text-indigo-300 transition group-hover:bg-indigo-500/20"><Icon size={20}/></span><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div>)}</div></div></section>

    <section id="solutions" className="border-t border-white/5 bg-white/[.015] py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid items-center gap-14 lg:grid-cols-2"><div><p className="text-sm font-semibold text-cyan-300">How it works</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">From repetitive task to automated flow in minutes.</h2><p className="mt-4 text-slate-400">FlowAI learns how your team works, then helps you simplify the steps that slow everyone down.</p><div className="mt-9 space-y-7">{[["01","Connect","Bring your workspace and everyday tools into one secure place."],["02","Describe","Tell FlowAI what you want in plain language. No complicated setup."],["03","Automate","Let your AI flow execute, measure and improve the work automatically."]].map(([n,t,d])=><div className="flex gap-4" key={n}><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 text-xs font-bold text-indigo-300">{n}</span><div><h3 className="font-semibold">{t}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{d}</p></div></div>)}</div></div><div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-cyan-400/5 p-3"><Dashboard compact/></div></div></div></section>

    <section id="showcase" className="py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-white/[.02] to-cyan-400/5 p-7 lg:p-12"><div className="grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><span className="inline-flex rounded-lg bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">Live workspace</span><h2 className="mt-5 text-3xl font-bold sm:text-4xl">Your AI co-pilot for the work that matters.</h2><p className="mt-4 leading-7 text-slate-400">Turn a goal into a plan, a plan into tasks, and tasks into measurable progress — without losing the human context.</p><div className="mt-7 space-y-3 text-sm text-slate-300">{["Context-aware AI suggestions","One-click workflow execution","Real-time team visibility"].map(x=><p key={x}><Check className="mr-2 inline text-emerald-400" size={16}/>{x}</p>)}</div></div><Dashboard compact/></div></div></div></section>

    <section className="border-y border-white/5 py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[[Zap,"2.4×","faster workflows"],[Clock3,"12.8h","saved per week"],[Gauge,"84%","tasks automated"],[MessageSquare,"38%","less busywork"]].map(([Icon,a,b])=><div key={b} className="rounded-2xl border border-white/8 bg-white/[.02] p-6"><Icon className="text-indigo-300" size={20}/><div className="mt-5 text-3xl font-bold">{a}</div><p className="mt-1 text-sm text-slate-500">{b}</p></div>)}</div></div></section>

    <section id="pricing" className="py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mx-auto max-w-2xl text-center"><p className="text-sm font-semibold text-indigo-300">Simple pricing</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Start free. Scale when you're ready.</h2></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{plans.map(p=><div className={`relative rounded-3xl border p-7 ${p.popular?"border-indigo-400/50 bg-indigo-500/[.08] shadow-glow":"border-white/8 bg-white/[.02]"}`} key={p.name}>{p.popular&&<span className="absolute right-6 top-6 rounded-full bg-indigo-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">Most popular</span>}<h3 className="text-lg font-semibold">{p.name}</h3><p className="mt-2 text-sm text-slate-500">{p.note}</p><div className="mt-7"><span className="text-4xl font-bold">{p.price}</span>{p.price!=="$0"&&<span className="text-sm text-slate-500"> / user / month</span>}</div><a href="#contact" className={`mt-7 block rounded-xl px-4 py-3 text-center text-sm font-semibold ${p.popular?"bg-indigo-500 hover:bg-indigo-400":"border border-white/10 bg-white/5 hover:bg-white/10"}`}>{p.button}</a><div className="mt-7 space-y-3">{p.features.map(f=><p className="text-sm text-slate-400" key={f}><Check className="mr-2 inline text-indigo-300" size={15}/>{f}</p>)}</div></div>)}</div></div></section>

    <section className="bg-white/[.015] py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mx-auto max-w-2xl text-center"><p className="text-sm font-semibold text-cyan-300">Loved by builders</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Less busywork. More momentum.</h2></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{testimonials.map(([name,role,text])=><figure key={name} className="rounded-2xl border border-white/8 bg-[#0b1020] p-7"><div className="flex gap-1 text-indigo-300">★★★★★</div><blockquote className="mt-5 text-sm leading-7 text-slate-300">“{text}”</blockquote><figcaption className="mt-6"><p className="text-sm font-semibold">{name}</p><p className="mt-1 text-xs text-slate-500">{role}</p></figcaption></figure>)}</div></div></section>

    <section id="resources" className="py-24"><div className="mx-auto max-w-3xl px-5 lg:px-8"><div className="text-center"><p className="text-sm font-semibold text-indigo-300">FAQ</p><h2 className="mt-3 text-3xl font-bold">Questions, answered.</h2></div><div className="mt-10 divide-y divide-white/8 rounded-2xl border border-white/8 bg-white/[.02]">{faqs.map(([q,a],i)=><div key={q}><button className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold" onClick={()=>setOpenFaq(openFaq===i?null:i)}>{q}<ChevronDown className={`shrink-0 transition ${openFaq===i?"rotate-180":""}`} size={18}/></button>{openFaq===i&&<p className="px-6 pb-5 text-sm leading-6 text-slate-500">{a}</p>}</div>)}</div></div></section>

    <section id="contact" className="section-grid border-t border-white/5 py-24"><div className="mx-auto max-w-5xl px-5 lg:px-8"><div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020] lg:grid-cols-[.8fr_1.2fr]"><div className="p-8 lg:p-10"><span className="grid h-12 w-12 place-items-center rounded-xl bg-indigo-500/10 text-indigo-300"><Rocket size={22}/></span><h2 className="mt-6 text-3xl font-bold">Let’s Discuss Your Project</h2><p className="mt-4 leading-7 text-slate-400">Have a product idea, redesign or custom AI experience in mind? Tell us what you're building.</p><div className="mt-8 space-y-4 text-sm text-slate-400"><p><Globe2 className="mr-2 inline text-indigo-300" size={16}/>Remote-friendly collaboration</p><p><Zap className="mr-2 inline text-indigo-300" size={16}/>Fast, focused project delivery</p></div></div><form onSubmit={submit} className="border-t border-white/8 p-8 lg:border-l lg:border-t-0 lg:p-10"><div className="grid gap-5 sm:grid-cols-2"><label className="text-xs text-slate-400">Name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-indigo-400" placeholder="Your name"/></label><label className="text-xs text-slate-400">Email<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-indigo-400" placeholder="you@company.com"/></label></div><label className="mt-5 block text-xs text-slate-400">Phone<input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-indigo-400" placeholder="+91 98765 43210"/></label><label className="mt-5 block text-xs text-slate-400">Message<textarea required minLength={10} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows="5" className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-indigo-400" placeholder="Tell us about your project..."/></label><button className="mt-5 w-full rounded-xl bg-indigo-500 px-5 py-3.5 text-sm font-semibold transition hover:bg-indigo-400" type="submit">Send Message <ArrowRight className="ml-1 inline" size={15}/></button>{sent&&<div role="status" className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">Thanks! Your message has been submitted successfully.</div>}</form></div></div></section>

    <footer className="border-t border-white/5"><div className="mx-auto max-w-7xl px-5 py-12 lg:px-8"><div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"><div><Logo/><p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">AI productivity software for teams that want to spend less time on repetitive work.</p></div><div><p className="text-sm font-semibold">Product</p><div className="mt-4 space-y-3 text-sm text-slate-500"><a className="block hover:text-white" href="#features">Features</a><a className="block hover:text-white" href="#pricing">Pricing</a><a className="block hover:text-white" href="#showcase">Showcase</a></div></div><div><p className="text-sm font-semibold">Company</p><div className="mt-4 space-y-3 text-sm text-slate-500"><a className="block hover:text-white" href="#contact">Contact</a><a className="block hover:text-white" href="#resources">Resources</a><a className="block hover:text-white" href="#top">About</a></div></div><div><p className="text-sm font-semibold">Legal & Social</p><div className="mt-4 space-y-3 text-sm text-slate-500"><a className="block hover:text-white" href="#top">Privacy Policy</a><a className="block hover:text-white" href="#top">Terms</a><div className="flex gap-4 pt-1"><a href="#top" aria-label="LinkedIn" className="hover:text-white">LinkedIn</a><a href="#top" aria-label="X" className="hover:text-white">X</a></div></div></div></div><div className="mt-12 border-t border-white/5 pt-6 text-xs text-slate-600">© 2026 FlowAI. All rights reserved.</div></div></footer>
  </div>
}
export default App;
