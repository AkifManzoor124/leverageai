// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-5xl font-bold mb-4">Automate Your Job Applications</h1>
        <p className="text-lg max-w-xl mb-6">
          Personalized resumes. One-click job apply. Track everything. Powered by AI — built for job seekers who value time and precision.
        </p>
        <a
          href="#early-access"
          className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Join Early Access
        </a>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Applying to Jobs Sucks.</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          It’s time-consuming. It’s repetitive. And you never know if anyone even saw your resume. We’re fixing that.
        </p>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6 text-center">
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
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
              Join Waitlist
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
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                Reserve Discount
              </button>
            </a>
          </div>
          <div className="border p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Future Teams</h3>
            <p className="text-gray-600 mb-4">For recruiting teams & agencies</p>
            <p className="text-2xl font-semibold mb-6">Coming Soon</p>
            <ul className="mb-6 space-y-2 text-gray-700">
              <li>✔️ Team Resume Library</li>
              <li>✔️ Bulk Job Campaigns</li>
              <li>✔️ Shared Tracking Dashboard</li>
            </ul>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded cursor-not-allowed" disabled>
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
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-sm text-gray-500 bg-gray-50">
        Built with ❤️ by a fellow job seeker. <br />
        <span className="block mt-2">
          <a href="/privacy" className="underline">Privacy</a> • <a href="/terms" className="underline">Terms</a>
        </span>
      </footer>
    </main>
  );
}
