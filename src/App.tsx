import data from "../data.json";
import { motion } from "framer-motion";
import logo from "./assets/logo.svg";
type Expense = {
  day: string;
  amount: number;
  height: number;
};

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen space-y-5 bg-mediumBrown">
        <div className="flex justify-between px-6 py-4 bg-soft w-96 text-cream rounded-xl">
          <div className="flex flex-col">
            <p className="text-xs ">My balance</p>
            <p className="text-2xl">$921.48</p>
          </div>
          <img src={logo} width="50" height="50" alt="" />
        </div>
        <div className="px-6 py-6 space-y-8 bg-white rounded-lg w-96 ">
          <div className="text-2xl text-darkBrown">Spending - Last 7 days</div>
          <ul className="grid grid-cols-7 gap-3 text-[10px] min-h-36 text-mediumBrown ">
            {data.map((item: Expense) => (
              <li
                key={item.day}
                className="flex flex-col-reverse gap-2 text-center "
              >
                <span>{item.day}</span>
                <motion.div
                  layout
                  animate={{ height: [0, item.height] }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="flex flex-col-reverse items-center rounded-md bg-soft"
                ></motion.div>
              </li>
            ))}
          </ul>
          <div className="border border-mediumBorder"></div>
          <div className="flex justify-between">
            <div className="flex flex-col justify-end">
              <p className="text-xs text-mediumBrown">Total this month</p>
              <p className="text-3xl font-semibold text-darkBrown">$478.33</p>
            </div>

            <div className="flex flex-col items-end justify-end text-xs">
              <p className="text-sm font-medium text-darkBrown">+2.4%</p>
              <p className="text-xs text-mediumBrown">from last month</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
