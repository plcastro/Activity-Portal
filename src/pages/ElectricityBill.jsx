import { useState } from "react";

export default function ElectricityBill() {
  const [previousReading, setPreviousReading] = useState("");
  const [currentReading, setCurrentReading] = useState("");
  const [bill, setBill] = useState(null);
  const [error, setError] = useState("");

  const rate = 11;

  function calculateBill() {
    const previous = Number(previousReading);
    const current = Number(currentReading);

    if (previousReading === "" || currentReading === "") {
      setError("Please enter both meter readings.");
      setBill(null);
      return;
    }

    if (previous < 0 || current < 0) {
      setError("Meter readings cannot be negative.");
      setBill(null);
      return;
    }

    if (current < previous) {
      setError("Current reading cannot be lower than previous reading.");
      setBill(null);
      return;
    }

    const consumption = current - previous;
    const total = consumption * rate;

    setError("");
    setBill({
      consumption,
      total,
    });
  }

  return (
    <div className="flex min-h-[calc(100vh-80px)] justify-center px-4 py-10">
      <div className="w-full max-w-lg rounded-xl border border-slate-700 bg-gray-800 p-6 shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-white">
            Electricity Bill
          </h1>
          <p className="mt-2 text-gray-400">
            Calculate your estimated electricity bill
          </p>
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-semibold text-gray-200">
            Previous Meter Reading
          </label>

          <input
            type="text"
            inputMode="decimal"
            value={previousReading}
            onChange={(e) => {
              const value = e.target.value;

              if (/^\d*\.?\d{0,2}$/.test(value)) {
                setPreviousReading(value);
              }
            }}
            placeholder="Enter previous reading"
            className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-teal-500"
          />
        </div>

        <div className="mb-5">
          <label className="mb-2 block font-semibold text-gray-200">
            Current Meter Reading
          </label>

          <input
            type="text"
            inputMode="decimal"
            value={currentReading}
            onChange={(e) => {
              const value = e.target.value;

              if (/^\d*\.?\d{0,2}$/.test(value)) {
                setCurrentReading(value);
              }
            }}
            placeholder="Enter current reading"
            className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-teal-500"
          />
        </div>

        {error && (
          <div className="mb-5 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <button
          onClick={calculateBill}
          className="w-full rounded-lg bg-teal-500 px-4 py-3 font-bold text-gray-900 transition hover:bg-teal-600 hover:text-white"
        >
          Calculate Bill
        </button>

        {bill !== null && (
          <div className="mt-6 rounded-lg border border-teal-700 bg-slate-900 p-5">
            <h2 className="mb-4 text-xl font-bold text-teal-400">
              Bill Summary
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="text-gray-400">
                  Previous Reading
                </span>

                <span className="font-semibold text-white">
                  {previousReading} kWh
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="text-gray-400">
                  Current Reading
                </span>

                <span className="font-semibold text-white">
                  {currentReading} kWh
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="text-gray-400">
                  Electricity Consumed
                </span>

                <span className="font-semibold text-white">
                  {bill.consumption} kWh
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="text-gray-400">
                  Rate
                </span>

                <span className="font-semibold text-white">
                  ₱{rate.toFixed(2)} / kWh
                </span>
              </div>

              <div className="flex justify-between pt-2">
                <span className="text-lg font-bold text-gray-200">
                  Estimated Bill
                </span>

                <span className="text-2xl font-bold text-teal-400">
                  ₱{bill.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}