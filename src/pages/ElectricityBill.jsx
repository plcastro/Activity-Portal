import { useState } from "react";

export default function ElectricityBill() {
  const [name, setName] = useState("");
  const [consumption, setConsumption] = useState("");
  const [bill, setBill] = useState(null);
  const [error, setError] = useState("");

  function calculateBill() {
    const usage = Number(consumption);

    if (name.trim() === "") {
      setError("Please enter the customer's name.");
      setBill(null);
      return;
    }

    if (consumption === "") {
      setError("Please enter the electricity consumption.");
      setBill(null);
      return;
    }

    if (usage < 0) {
      setError("Consumption cannot be negative.");
      setBill(null);
      return;
    }

    let rate;

    if (usage <= 100) {
      rate = 10;
    } else if (usage <= 200) {
      rate = 12;
    } else if (usage <= 300) {
      rate = 15;
    } else {
      rate = 18;
    }

    const total = usage * rate;

    const usageStatus =
      total >= 5000
        ? "High Electricity Usage"
        : "Normal Electricity Usage";

    setError("");

    setBill({
      usage,
      rate,
      total,
      usageStatus,
    });
  }

  function clearForm() {
    setName("");
    setConsumption("");
    setBill(null);
    setError("");
  }

  return (
    <div className="flex min-h-[calc(100vh-80px)] justify-center px-4 py-10">
      <div className="w-full max-w-lg rounded-xl border border-slate-700 bg-gray-800 p-6 shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-white">
            Electricity Bill
          </h1>

          <p className="mt-2 text-gray-400">
            Calculate your electricity bill
          </p>
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-semibold text-gray-200">
            Customer Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter customer name"
            className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-teal-500"
          />
        </div>

        <div className="mb-5">
          <label className="mb-2 block font-semibold text-gray-200">
            Consumption (kWh)
          </label>

          <input
            type="number"
            min="0"
            step="0.01"
            value={consumption}
            onChange={(e) => setConsumption(e.target.value)}
            placeholder="Enter consumption"
            className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-teal-500"
          />
        </div>

        {error && (
          <div className="mb-5 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={calculateBill}
            className="flex-1 rounded-lg bg-teal-500 px-4 py-3 font-bold text-gray-900 transition hover:bg-teal-600 hover:text-white"
          >
            Calculate Bill
          </button>

          <button
            onClick={clearForm}
            className="rounded-lg border border-slate-600 px-5 py-3 font-bold text-gray-300 transition hover:bg-slate-700 hover:text-white"
          >
            Clear
          </button>
        </div>

        {bill !== null && (
          <div className="mt-6 rounded-lg border border-teal-700 bg-slate-900 p-5">
            <h2 className="mb-4 text-xl font-bold text-teal-400">
              Bill Summary
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="text-gray-400">
                  Customer Name
                </span>

                <span className="font-semibold text-white">
                  {name}
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="text-gray-400">
                  Consumption
                </span>

                <span className="font-semibold text-white">
                  {bill.usage} kWh
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="text-gray-400">
                  Rate Applied
                </span>

                <span className="font-semibold text-white">
                  ₱{bill.rate.toFixed(2)} / kWh
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="text-gray-400">
                  Total Bill
                </span>

                <span className="text-xl font-bold text-teal-400">
                  ₱{bill.total.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between gap-6 pt-2">
                <span className="text-gray-400">
                  Usage Status
                </span>

                <span
                  className={
                    bill.total >= 5000
                      ? "font-bold text-red-400"
                      : "font-bold text-teal-400"
                  }
                >
                  {bill.usageStatus}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}