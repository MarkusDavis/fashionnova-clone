import React from "react";
import { useEffect, useState } from "react";
import moment from "moment";

function SalesCountDownBanner() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showSemicolon, setShowSemicolon] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const now = moment();
      const then = moment("2022-10-15 12:12:12", "YYYY-MM-DD hh:mm:ss");
      const countdown = moment(then - now);
      setDays(countdown.format("D"));
      setHours(countdown.format("HH"));
      setMinutes(countdown.format("mm"));
      setSeconds(countdown.format("ss"));
    }, 1000);
  }, []);
  return (
    <div className="hidden md:flex items-center justify-between bg-black text-white">
      <div className="hidden md:inline-flex text-sm p-2">
        HURRY! 40% Off Jeans, Shoes & Halloween Costumes Ends Today!
      </div>
      <div className=" whitespace-nowrap text-lg font-semibold">
        {days} : {hours} : {minutes} : {seconds}
      </div>

      <div className="hidden md:inline-flex text-sm p-2">
        HURRY! 40% Off Jeans, Shoes & Halloween Costumes Ends Today!
      </div>
    </div>
  );
}

export default SalesCountDownBanner;
