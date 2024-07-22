import React , { useRef, useState } from "react"

function ShopDateCount() {
    const [timerDays,setTimerDays] = useState("00");
    const [timerHours,setTimerHours] = useState("00");
    const [timerMinutes,setTimerMinutes] = useState("00");
    const [timerSeconds,setTimerSeconds] = useState("00");

    let interval = useRef();
    const startTimer=()=>{
      const countDownDate =new Date("Jul 30, 2024 00:00:00").getTime();
      interval=setInterval(() => {
          const now =new Date().getTime();
          const distance = countDownDate - now
          const days =Math.floor(distance / (1000* 60 * 60 * 24));
          const hours =Math.floor((distance % (1000* 60 * 60 * 24))/ (1000* 60 * 60 ));
          const minutes =Math.floor((distance % (1000* 60 * 60))/ (1000* 60 ));
          const seconds =Math.floor((distance % (1000* 60 ))/ (1000 ));
          if(distance <0){
              clearInterval(interval.current);
          }else{
            setTimerDays(days)
            setTimerMinutes(minutes)
            setTimerHours(hours)
            setTimerSeconds(seconds)

          }
      }, 1000);

    }
    React.useEffect(()=>{
      startTimer();
      return ()=>{
        clearInterval(interval.current);
      }

    },[])
  return (
    <div class="sales-end-in">
      <p>Hurry Up! Sale ends in:</p>
      <div class="time-counter">
          
          <div class="info">
              <span class="info-first" id="days">{timerDays}</span>
              <span>days</span>
          </div>
          <div class="info">
              <span class="info-first" id="hours">{timerHours}</span>
              <span>hours</span>
          </div>
          <div class="info">
              <span class="info-first" id="minutes">{timerMinutes}</span>
              <span>mins</span>
          </div>
          <div class="info">
              <span class="info-first" id="seconds">{timerSeconds}</span>
              <span>secs</span>
          </div>
      </div>
  </div>
  )
}

export default ShopDateCount