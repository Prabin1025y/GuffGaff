const formatTime = (time) => {
    const date = new Date(time);
    return `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
}

export default formatTime;

// const hourMinute = time.split("T")[1].split(":");
// const totalMinute = Number(hourMinute[0]) * 60 + Number(hourMinute[1]) + 5 * 60 + 45;
// let hour = Math.floor(totalMinute / 60);
// let minute = totalMinute % 60;

// console.log(date);


// if(hour > 23)
//     hour = hour - 24;