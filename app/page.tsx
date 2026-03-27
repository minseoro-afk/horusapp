'use client'
import { useRef, useState } from 'react'
  export default function HorusLandingPage() {
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("starter");
    const formRef = useRef<HTMLFormElement | null>(null);
  
    return (
      <div className="min-h-screen bg-zinc-950 text-white">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.18),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.14),_transparent_30%),linear-gradient(to_bottom,_#09090b,_#0f172a)]" />
          <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-10">
            <header className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/10 text-lg font-bold text-amber-300 shadow-lg shadow-amber-500/10">
                  H
                </div>
                <div>
                  <p className="text-lg font-semibold tracking-wide">Horus</p>
                  <p className="text-xs text-zinc-400">Plan less. Execute more.</p>
                </div>
              </div>
              <div className="hidden items-center gap-3 md:flex">
                <a
                  href="#how-it-works"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
                >
                  How it works
                </a>
                <a
                  href="#signup"
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition hover:opacity-90"
                >
                  Join beta
                </a>
              </div>
            </header>
  
            <div className="grid items-center gap-14 py-16 lg:grid-cols-2 lg:py-24">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-2 text-sm text-amber-200">
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                  Built for students, faculty, and overloaded academic schedules
                </div>
  
                <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
                  Stop planning your week.
                  <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-white bg-clip-text text-transparent">
                    Let Horus build it for you.
                  </span>
                </h1>
  
                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                  Horus is an AI powered scheduling service that turns your classes, deadlines, priorities, and free time into a clear weekly plan you can actually follow.
                </p>
  
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#signup"
                    className="rounded-2xl bg-amber-400 px-6 py-4 text-center text-base font-semibold text-zinc-950 shadow-xl shadow-amber-500/20 transition hover:-translate-y-0.5 hover:bg-amber-300"
                  >
                    Get my week built
                  </a>
                  <a
                    href="#demo"
                    className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white backdrop-blur transition hover:border-white/20 hover:bg-white/10"
                  >
                    See demo schedule
                  </a>
                </div>
  
                <div className="mt-8 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <p className="text-2xl font-semibold">24h</p>
                    <p className="mt-1 text-sm text-zinc-400">Fast turnaround</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <p className="text-2xl font-semibold">$5+</p>
                    <p className="mt-1 text-sm text-zinc-400">Easy student pricing</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <p className="text-2xl font-semibold">AI</p>
                    <p className="mt-1 text-sm text-zinc-400">Priority based planning</p>
                  </div>
                </div>
              </div>
  
              <div id="demo" className="relative">
                <div className="absolute -left-8 top-8 h-48 w-48 rounded-full bg-amber-400/20 blur-3xl" />
                <div className="absolute -right-8 bottom-8 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
  
                <div className="relative rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
                  <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-sm text-zinc-400">Generated by Horus</p>
                      <h2 className="text-xl font-semibold">Your Week at a Glance</h2>
                    </div>
                    <div className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-200">
                      Balanced for workload
                    </div>
                  </div>
  
                  <div className="space-y-3">
                    {[
                      {
                        day: 'Monday',
                        items: ['9:00 AM Organic Chemistry', '1:00 PM Study block: Bio midterm', '7:00 PM Assignment draft'],
                      },
                      {
                        day: 'Tuesday',
                        items: ['10:30 AM Lab', '3:00 PM Office hours', '6:30 PM Review: quiz prep'],
                      },
                      {
                        day: 'Wednesday',
                        items: ['9:00 AM Organic Chemistry', '12:00 PM Lunch reset', '4:00 PM Deep work: paper outline'],
                      },
                      {
                        day: 'Thursday',
                        items: ['11:00 AM Discussion section', '2:00 PM Faculty meeting', '8:00 PM Light review and planning'],
                      },
                      {
                        day: 'Friday',
                        items: ['10:00 AM Submit lab report', '1:00 PM Study block: exam ramp up', '5:00 PM Buffer and catch up'],
                      },
                    ].map((day) => (
                      <div key={day.day} className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <h3 className="font-medium">{day.day}</h3>
                          <span className="text-xs text-zinc-500">Auto optimized</span>
                        </div>
                        <div className="space-y-2">
                          {day.items.map((item) => (
                            <div key={item} className="rounded-xl bg-white/5 px-3 py-2 text-sm text-zinc-300">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="grid gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6">
              <p className="text-sm text-amber-200">Problem</p>
              <h3 className="mt-2 text-2xl font-semibold">People have calendars but still feel lost</h3>
              <p className="mt-3 text-zinc-400">
                Most students and faculty do not need another planner. They need help deciding what matters, when to do it, and how to avoid overload.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6">
              <p className="text-sm text-amber-200">Solution</p>
              <h3 className="mt-2 text-2xl font-semibold">Horus builds the week for them</h3>
              <p className="mt-3 text-zinc-400">
                Users input their schedule, deadlines, and priorities. Horus turns that information into a realistic and structured weekly plan.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6">
              <p className="text-sm text-amber-200">Business model</p>
              <h3 className="mt-2 text-2xl font-semibold">Sell fast, automate later</h3>
              <p className="mt-3 text-zinc-400">
                Start as a paid AI scheduling service for academia, then scale into subscriptions, institutional partnerships, and premium planner tools.
              </p>
            </div>
          </div>
        </section>
  
        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-200">How it works</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">From chaos to clarity in three simple steps</h2>
          </div>
  
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Input your week',
                text: 'Add classes, meetings, assignments, deadlines, and preferred work hours in under two minutes.',
              },
              {
                step: '02',
                title: 'Let Horus prioritize',
                text: 'Our AI weighs urgency, importance, and workload to structure a balanced plan that fits your real life.',
              },
              {
                step: '03',
                title: 'Receive your optimized schedule',
                text: 'Get a weekly calendar with focused work blocks, deadline buffers, and room to breathe.',
              },
            ].map((item) => (
              <div key={item.step} className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur">
                <div className="text-sm font-medium text-amber-200">{item.step}</div>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-zinc-400">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
  
        <section className="mx-auto max-w-7xl px-6 py-4 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-amber-400/10 via-white/5 to-blue-500/10 p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-200">Why now</p>
              <h2 className="mt-3 text-3xl font-semibold">Time management is a universal academic pain point</h2>
              <p className="mt-4 max-w-xl text-zinc-300">
                The academic market already lives on deadlines, overloaded calendars, and recurring stress. Horus meets users where the pain is highest and where willingness to pay is immediate.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/50 p-4">
                  <p className="text-2xl font-semibold">Students</p>
                  <p className="mt-1 text-sm text-zinc-400">Freshmen, Pre-Meds, STEM majors, and anyone behind on planning</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-zinc-950/50 p-4">
                  <p className="text-2xl font-semibold">Faculty</p>
                  <p className="mt-1 text-sm text-zinc-400">Busy instructors balancing teaching, meetings, grading, and research</p>
                </div>
              </div>
            </div>
  
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-200">Simple pricing</p>
              <h2 className="mt-3 text-3xl font-semibold">Easy to test, easy to buy</h2>
              <div className="mt-6 space-y-4">
                {[
                  {
                    tier: 'Starter',
                    price: '$5',
                    desc: 'One optimized weekly plan delivered within 24 hours',
                  },
                  {
                    tier: 'Plus',
                    price: '$8',
                    desc: 'Weekly plan with one revision and deadline balancing',
                  },
                  {
                    tier: 'Exam Mode',
                    price: '$15',
                    desc: 'High priority planning for midterms, finals, and stacked deadlines',
                  },
                ].map((plan) => (
                  <div key={plan.tier} className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
                    <div>
                      <h3 className="text-lg font-semibold">{plan.tier}</h3>
                      <p className="text-sm text-zinc-400">{plan.desc}</p>
                    </div>
                    <div className="text-2xl font-semibold text-amber-200">{plan.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  
        <section id="signup" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-200">Beta signup</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">Get your week built by Horus</h2>
              <p className="mt-4 max-w-2xl text-zinc-300">
                Fill out the form and our team will generate a realistic weekly schedule based on your classes, deadlines, priorities, and available time.
              </p>
  
              <form 
                ref={formRef}
                action="https://formspree.io/f/mbdplabe"
                method="POST"
                className="mt-8 grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowPaymentModal(true);
                }}
                >
                <input
                  type="hidden"
                  name="_next"
                  value="https://horusapp-n9zo.vercel.app/thanks"
                />

                <input 
                name="Name" 
                className="rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-amber-300" 
                placeholder="Full name" /> 
                
                <input 
                name="Email" 
                type="email" 
                className="rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-amber-300" 
                placeholder="Email" /> 
                
                <input 
                name="School" 
                className="rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-amber-300 sm:col-span-2" 
                placeholder="School or department" /> 
                
                <textarea 
                name="Schedule" 
                className="min-h-[120px] rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-amber-300 sm:col-span-2" 
                placeholder="List your classes, work schedule, deadlines, and anything that must be included this week" /> 
                
                <textarea 
                name="Priority Events" 
                className="min-h-[100px] rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-amber-300 sm:col-span-2" 
                placeholder="What should Horus prioritize for you right now" /> 
                
                <button 
                type="button"
                onClick={() => setShowPaymentModal(true)}
                className="rounded-2xl bg-amber-400 px-6 py-4 text-base font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-amber-300 sm:col-span-2" > Join beta and request my schedule </button> 
                
                </form>
                {showPaymentModal && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-zinc-900 p-8 rounded-2xl text-center max-w-sm w-full">

      <h2 className="text-xl font-semibold mb-4">Confirm Payment</h2>
      <div className="space-y-3 mb-4">

  <button
    onClick={() => setSelectedPlan("starter")}
    className="w-full p-3 rounded-lg border"
  >
    Starter – $5
  </button>

  <button
    onClick={() => setSelectedPlan("plus")}
    className="w-full p-3 rounded-lg border"
  >
    Plus – $8
  </button>

  <button
    onClick={() => setSelectedPlan("exam")}
    className="w-full p-3 rounded-lg border"
  >
    Exam Mode – $15
  </button>

</div>
      
      <a
        href={`https://www.venmo.com/u/HorusPlannerAI?note=Horus-${selectedPlan}`}
        target="_blank"
        className="block mb-4 bg-amber-400 text-black py-2 rounded-lg"
      >
        Open Venmo
      </a>

      <button
        onClick={() => formRef.current?.requestSubmit()}
        className="w-full bg-white text-black py-2 rounded-lg"
      >
        Confirm Payment
      </button>

      <button
        onClick={() => setShowPaymentModal(false)}
        className="mt-3 text-sm text-zinc-400"
      >
        Cancel
      </button>

    </div>
  </div>
)}
                
            </div>
  
            <div className="space-y-6">
              <div className="rounded-[32px] border border-white/10 bg-zinc-900/80 p-8">
                <h3 className="text-2xl font-semibold">Why users would pay</h3>
                <div className="mt-6 space-y-4 text-zinc-300">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Saves time during high stress weeks</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Reduces decision fatigue and procrastination</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Feels personal, immediate, and useful within one day</div>
                </div>
              </div>
  
              <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-500/10 via-white/5 to-amber-400/10 p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-200">Pitch line</p>
                <blockquote className="mt-4 text-2xl font-semibold leading-relaxed text-white">
                  Horus is the AI powered academic time manager that turns overwhelming schedules into actionable weekly plans.
                </blockquote>
              </div>
            </div>
          </div>
        </section>
  
        <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold">Horus</p>
              <p className="text-sm text-zinc-500">Plan less. Execute more.</p>
            </div>
            <div className="text-sm text-zinc-500">Academic scheduling, rebuilt with AI</div>
          </div>
        </footer>
      </div>
    );
  }
  