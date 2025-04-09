"use client"
import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Database } from 'lucide-react';
import { Terminal } from './terminal';
import { useEffect, useState } from "react";

export default function Home() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress >= 100 ? 100 : oldProgress + 10;
        return newProgress;
      });
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <>

    <main className="min-h-screen bg-white text-gray-900">

    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="flex justify-between items-center px-4 py-4 text-sm font-medium text-gray-700">
        {/* Left-aligned logo (always visible) */}
        <a className="hover:text-black transition text-blue-600 font-bold">JobTra</a>

        {/* Desktop nav */}
        <div className="hidden lg:flex space-x-10">
          <a href="#how-it-works" className="hover:text-black transition">How it Works</a>
          <a href="#pricing" className="hover:text-black transition">Pricing</a>
          <a href="#early-access" className="hover:text-black transition">Join the Waitlist</a>
          <a 
            href="https://sharing.clickup.com/10542198/b/5-90172327826-2/board" 
            className="hover:text-black transition text-gray-900 underline"
          >
            View Our Progress
          </a>
        </div>

        {/* Mobile-only right-aligned CTA */}
        <div className="lg:hidden">
          <a 
            href="https://sharing.clickup.com/10542198/b/5-90172327826-2/board" 
            className="hover:text-black transition text-gray-900 text-xs"
          >
            View Our Progress
          </a>
        </div>
      </nav>
    </header>


      <section className="px-6 py-12 flex flex-col items-center justify-center bg-white">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/3 md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 text-center lg:text-left">
              See how Jobtra applies for you—
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">intelligently</span> and instantly.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 text-center lg:text-left">
              Built for people who want to stop spraying resumes and start landing dream roles faster.
            </p>
            <div className="mt-6 flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <button 
                onClick={() => {
                  document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-1/2 px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">
                Join Early Access
              </button>
              <p className="py-1 text-xs text-gray-500 text-center lg:text-left">
                *We use tally.so to collect form data <br />
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 md:w-1/2 max-w-md rounded-2xl border p-6 shadow-lg bg-gray-50">
            <h2 className="text-lg font-semibold mb-4">Top 5 Matches</h2>
            <ul className="space-y-4">
              {[
                { initials: "TX", title: "ML Engineer", company: "TechX", score: 92 },
                { initials: "IN", title: "Data Science Lead", company: "Innovate inc.", score: 87 },
                { initials: "NG", title: "Machine Learning Scientist", company: "NextGen Robotics", score: 81 },
                { initials: "FI", title: "Data Analyst", company: "FinSolve", score: 81 },
                { initials: "OA", title: "Deep Learning Engineer", company: "OpenAI", score: 78 },
              ].map((job, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md font-medium">
                      {job.initials}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{job.title}</div>
                      <div className="text-sm text-gray-500">{job.company}</div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-green-600 bg-green-100 py-2 px-4 rounded-md">{job.score}%</div>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Smart Tailoring</h3>
                <ul className="text-xs text-gray-600 list-disc list-inside">
                  <li>Develop machine learning models</li>
                  <li>Collaborate with data scientists</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Tailored</h3>
                <ul className="text-xs text-gray-600 list-disc list-inside">
                  <li>Designed algorithms for data analysis</li>
                  <li>Worked cross-functionally</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-sm text-gray-700 mb-1">Applying to 5 jobs...</div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 h-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              {progress === 100 && (
                <div className="text-xs text-gray-600 mt-2">✅ Done. <span className="underline">Track updates here.</span></div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Applying to Jobs Sucks.</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          It’s time-consuming. It’s repetitive. And you never know if anyone even saw your resume. We’re fixing that.
        </p>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6 text-center" id="how-it-works">
        <h2 className="text-3xl font-semibold mb-4">Here’s How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
          <div>
            <h3 className="font-bold text-xl mb-2">Smart Resume Tailoring</h3>
            <p className="text-gray-600">We analyze the job post and match your resume to it — automatically.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">One-Click Apply</h3>
            <p className="text-gray-600">Apply across platforms like LinkedIn, Wellfound, and Indeed with a single click.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Track Everything</h3>
            <p className="text-gray-600">Stay organized with real-time tracking of applications and responses.</p>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="bg-gray-50 py-16 px-6" id="pricing">
        <h2 className="text-3xl font-semibold text-center mb-10">Early Supporter Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="border p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Free</h3>
            <p className="text-gray-600 mb-4">Limited Early Access</p>
            <p className="text-2xl font-semibold mb-6">$0</p>
            <ul className="mb-6 space-y-2 text-gray-700">
              <li>✔️ Limited AI Resume Matching</li>
              <li>✔️ Manual Apply Tracking</li>
              <li>✔️ Feedback Surveys</li>
            </ul>
            <a
              href="https://tally.so/r/mezXEO"
              target="_blank"
            >
            <button className="bg-gray-300 text-gray-700 px-6 py-3 rounded cursor-not-allowed">
              Coming Soon
            </button>
          </a>
          </div>
          <div className="border p-6 rounded-lg text-center border-black shadow-lg">
            <h3 className="text-xl font-bold mb-2">Pro (Early Discount)</h3>
            <p className="text-gray-600 mb-4">Most Popular</p>
            <p className="text-2xl font-semibold mb-6">$8/mo <span className="text-sm text-gray-500">($16 later)</span></p>
            <ul className="mb-6 space-y-2 text-gray-700">
              <li>✔️ Unlimited AI Resume Matching</li>
              <li>✔️ Auto-Apply Across Platforms</li>
              <li>✔️ Email & HR Contact Finder</li>
              <li>✔️ Application Analytics</li>
            </ul>
            <a
              href="https://tally.so/r/mezXEO"
              target="_blank"
            >
              {/* <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                Reserve Discount
              </button> */}
              <button className="bg-gray-300 text-gray-700 px-6 py-3 rounded cursor-not-allowed">
              Coming Soon
              </button>
            </a>
          </div>
          <div className="border p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Future Teams</h3>
            <p className="text-gray-600 mb-4">For recruiting teams & agencies</p>
            <p className="text-2xl font-semibold mb-6 ">Coming Soon</p>
            <ul className="mb-6 space-y-2 text-gray-700">
              <li>✔️ Team Resume Library</li>
              <li>✔️ Bulk Job Campaigns</li>
              <li>✔️ Shared Tracking Dashboard</li>
            </ul>
            <button className="bg-gray-300 text-gray-700 px-6 py-3 rounded cursor-not-allowed" disabled>
              Coming Soon
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-white" id="early-access">
        <h2 className="text-3xl font-semibold mb-4">Be Part of the Build</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Support the platform now and get lifetime discounts, exclusive access to beta features, and a voice in shaping the product.
        </p>
        <a
          href="https://tally.so/r/mezXEO"
          target="_blank"
          className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Join Early Access
        </a>
        <p className="py-3 px-3 text-center text-xs text-gray-500">
          *We use tally.so to collect form data <br />
        </p>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-sm text-gray-500 bg-gray-50">
        Built with ❤️ by a fellow job seeker. <br />
        <span className="block mt-2">
          <a href="/privacy" className="underline">Privacy</a> • <a href="/terms" className="underline">Terms</a>
        </span>
      </footer>
    </main>
    </>
  );
}
