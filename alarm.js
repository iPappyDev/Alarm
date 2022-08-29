var song = new Audio('edited.mp3');

const timeDisp = ()=>{
    const time = new Date();
    const hour = timeFormat (time.getHours());
    const minutes = timeFormat (time.getMinutes());
    const seconds = timeFormat (time.getSeconds());
    clock.innerHTML = `${hour} : ${minutes} : ${seconds}`
}
setInterval(timeDisp, 1000);

const timeFormat = (timer) =>{
    if(timer<10){
        return '0'+timer
    }else{
        return timer
    }
}

const setAlarm= ()=>{
    wake.innerHTML = `<h2>I WILL WAKE YOU UP</h2>`
    let alarmHrs = hours.value;
    let alarmmin = minutes.value;
    alarmTime = new Date();

    if (alarmHrs == '' && alarmmin == ''){
        alert("enter time")
        location.reload()

    }
    if(alarmHrs == alarmTime.getHours() && alarmmin == alarmTime.getMinutes()){
        song.play()
    }
    setInterval("setAlarm()", 1000);
}
const question= ()=>{
    alert("solve this question")
    var wakeUp = prompt('DO YOU HAVE CLASS TODAY? YES/NO')
    if(wakeUp == "NO"){
        alert('REST ON BRUV')
        location.reload()
    }
    else if(wake == "YES"){
        alert("Wake up My Niqqa")
    }
}
