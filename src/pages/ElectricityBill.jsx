import { useState } from "react";
import ElectricMeterOutlinedIcon from "@mui/icons-material/ElectricMeterOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";

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

<<<<<<< HEAD
    const total = usage * rate;

    const usageStatus =
      total >= 5000
        ? "High Electricity Usage"
        : "Normal Electricity Usage";
=======
    const total = consumption * rate;
    const usage =
      total >= 5000 ? "High Electricity Usage" : "Normal Electricity Usage";
>>>>>>> fe67e7dd359cf811de33fd4ec04d6d286830fc9b

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
    <div className="mt-10 mb-10 p-4 sm:p-8 md:p-12 h-full flex flex-col justify-between mx-auto w-full max-w-6xl gap-4 rounded-xl sm:rounded-5xl bg-gray-800 border-t-teal-400 border-t-4 shadow-md shadow-gray-950">
      <div className="mb-6 text-center">
        <ElectricMeterOutlinedIcon
          className="text-teal-400 bg-teal-900 border border-teal-400 p-3 md:p-5  rounded-full mx-auto"
          sx={{ fontSize: { xs: 70, sm: 100 } }}
        />
        <h1 className="text-3xl font-bold text-white">Electricity Bill</h1>

<<<<<<< HEAD
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
=======
        <p className="mt-2 text-gray-400">
          Calculate your estimated electricity bill
        </p>
>>>>>>> fe67e7dd359cf811de33fd4ec04d6d286830fc9b
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
          className="w-full h-12 text-white border border-gray-500 rounded-md px-3
             focus:border-2  focus:border-teal-400 focus:outline-none transition-all duration-200 ease-in"
        />
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
          className="w-full h-12 text-white border border-gray-500 rounded-md px-3
             focus:border-2  focus:border-teal-400 focus:outline-none transition-all duration-200 ease-in"
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
          className="w-full h-12 text-white border border-gray-500 rounded-md px-3
             focus:border-2  focus:border-teal-400 focus:outline-none transition-all duration-200 ease-in"
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
          className="flex justify-center items-center gap-2 w-full h-12 whitespace-nowrap rounded-md px-2 py-2 text-md lg:px-4 bg-teal-400 text-gray-900 text-sm md:text-md hover:text-white hover:bg-teal-800 shadow-md shadow-teal-900 transition ease-linear"
        >
          <CheckCircleOutlinedIcon />
          Calculate Bill
        </button>

        <button
          onClick={clearForm}
          className="flex justify-center items-center gap-2 w-full h-12 whitespace-nowrap rounded-md px-2 py-2 text-md lg:px-4 text-white border-gray-500 border hover:text-red-400 hover:border-red-400 hover:bg-red-700/10 shadow-md hover:shadow-red-900 transition ease-linear"
        >
          <RestartAltOutlinedIcon />
          Clear
        </button>
      </div>

      {bill !== null && (
        <div className="mt-6 rounded-lg border border-teal-700 bg-slate-900 p-5">
          <h2 className="mb-4 text-xl font-bold text-teal-400">Bill Summary</h2>

          <div className="mb-4 rounded-lg bg-slate-800 p-4">
            <p className="text-sm text-gray-400">Customer</p>

            <p className="text-lg font-bold text-white">{name}</p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between border-b border-slate-700 pb-3">
              <span className="text-gray-400">Previous Reading</span>

              <span className="font-semibold text-white">
                {previousReading} kWh
              </span>
            </div>

            <div className="flex justify-between border-b border-slate-700 pb-3">
              <span className="text-gray-400">Current Reading</span>

              <span className="font-semibold text-white">
                {currentReading} kWh
              </span>
            </div>

            <div className="flex justify-between border-b border-slate-700 pb-3">
              <span className="text-gray-400">Electricity Consumed</span>

              <span className="font-semibold text-white">
                {bill.consumption.toFixed(2)} kWh
              </span>
            </div>

            <div className="flex justify-between border-b border-slate-700 pb-3">
              <span className="text-gray-400">Rate</span>

              <span className="font-semibold text-white">
                ₱{bill.rate.toFixed(2)} / kWh
              </span>
            </div>

            <div className="flex justify-between border-b border-slate-700 pb-3">
              <span className="text-gray-400">Usage Status</span>

              <span
                className={
                  bill.total >= 5000
                    ? "font-bold text-red-400"
                    : "font-bold text-teal-400"
                }
              >
                {bill.usage}
              </span>
            </div>

            <div className="flex justify-between pt-2">
              <span className="text-lg font-bold text-gray-200">
                Total Bill
              </span>

              <span className="text-2xl font-bold text-teal-400">
                ₱{bill.total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
