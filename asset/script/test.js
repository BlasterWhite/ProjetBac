function test() {
    let eauValue = Math.random();
    let tempValue = Math.floor(Math.random() * (50 - -30)) - 30;
    let eggValue = Math.floor(Math.random() * (10 - 0));
    let chickenValue = Math.floor(Math.random() * (12 - 0));
    let DoorStatue = Math.random();
    
    setGaugeValue("eau", eauValue);
    setTemperature(tempValue);
    setEggValue(eggValue);
    setChicken(chickenValue);
    if(DoorStatue > 0.5) setStatueDoor(true);
    else setStatueDoor(false);
}