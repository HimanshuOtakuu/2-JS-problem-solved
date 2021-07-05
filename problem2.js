const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(' ');
  
    let [hours, minutes, seconds] = time.split(':');

    if (hours === '12') {
      hours = '00';
    }
  
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    let hour=parseInt(hours);
    let minute=parseInt(minutes);
    let second=parseInt(seconds);
    minute=(minute+45)>60?minute+45-60:minute;
    if((minute+45)>60){
        minute=minute+45-60;
        hour++;
    }
    if((minute+45)<=60){
        minute+=45;
    }
    if((second+45)<=60){
        second+=45;
    }
    hours=hour.toString();
    if(hours.length<2){
        hours='0'+hours;
    }
    minutes=minute.toString();
    if(minutes.length<2){
        minutes='0'+minutes;
    }
    seconds=second.toString();
    if(seconds.length<2){
        seconds='0'+seconds;
    }
    return `${hours}:${minutes}:${seconds}`;
  }
  
  console.log(convertTime12to24('12:01:00 AM'));
