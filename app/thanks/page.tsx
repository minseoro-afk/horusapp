export default function Thanks() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-4xl font-bold text-amber-300">You're all set.</h1>
        <p className="mt-4 text-lg text-zinc-300">
          Horus is building your week.
        </p>
        <p className="mt-2 text-zinc-400">
        Please send payment via Venmo to confirm your request.
        <a
          href="https://www.venmo.com/u/HorusPlannerAI"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 rounded-2xl bg-amber-400 px-6 py-3 font-semibold text-zinc-950"
        >
          Pay with Venmo
        </a>

        <p className="mt-4 text-zinc-400">
          Check your email within 24 hours.
        </p>

        <a href="/" className="block mt-4 underline">
          Back to home
        </a>
      </div>
    </div>
  );
}
