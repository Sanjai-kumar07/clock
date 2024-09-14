

let ampm = document.getElementById('ampm')

function displayTime()
{

    let dateTime = new Date();
    let hr = dateTime.getHours();
    let mini = padzero(dateTime.getMinutes());
    let seco = padzero(dateTime.getSeconds());
    if(hr>12){
        hr = hr - 12
        ampm.innerHTML = 'PM'
    }
    else
    {
        ampm.innerHTML ='AM'
    }



    document.getElementById('hrs').innerHTML = padzero(hr)
    document.getElementById('min').innerHTML = mini
    document.getElementById('sec').innerHTML = seco
}
function padzero(num){
    return num<10?"0"+num:num
}



setInterval(displayTime,500)
