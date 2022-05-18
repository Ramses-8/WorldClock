function getClocks(){
    const divs = window.document.querySelectorAll('.clocks');
    return divs;
}

function getSelectedValue(){
    const textID = document.getElementById("timeZoneID").value;
    return textID
}

const time_divs= getClocks();
var city=[0,0,0,0]
city[0]  = getSelectedValue();
console.log(city)

function update(){
    var city=[0,1,0,0]
    city[0]  = getSelectedValue();
    console.log(city)              
    for (let i = 0; i <time_divs.length; i++) {
        const clock = new Clock(time_divs[i], city[i]);
    }
}

this.setInterval(update,1000)

function Clock(div, id) {

    const render = async () => {
        try {
            const currentTime = await TimeZoneService.get(id);
            this.newTime(currentTime)
            this.NameCity(currentTime.id)
        } catch (error) {
           console.error(error);
            this.write(error.message);
        }
    }
    render();

    this.NameCity= function(cityID) {

    }

    this.write = function (text) {
        div.innerHTML = text; 
    }

    this.newTime = function(currentTime){
        const dif_hour = currentTime.hourDiference;
        const dif_min = currentTime.minuteDiference;

        const Time = new Date();
        Time.setHours(Time.getHours() + dif_hour);
        Time.setMinutes(Time.getMinutes() + dif_min);

        var ISO_Time = Time.toISOString();

        var hour = ISO_Time.slice(11,13);
        var minute = ISO_Time.slice(14,16);
        var second = ISO_Time.slice(17,19);    

        if(hour>=12){
            hour=hour-12;
            var amPm ="PM"
            if(hour==12){amPm ="AM"}
            if(hour==0){hour=12}   
        }else{
            amPm ="AM"
        }
        const cityName = currentTime.city;
        const dif_min_2dig = String(dif_min).padStart(2,"0");
        div.innerHTML = `${hour}:${minute}:${second} ${amPm} - ${cityName} (${dif_hour}:${dif_min_2dig})`;
    }
}

const baseUrl = 'http://localhost:8880/timezones';
class TimeZoneService {    
    static async get(id) {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json"
            }
        })
        const timezone = await response.json();

        return new Promise((resolve, reject) => {
            switch (response.status) {
                case 200:
                    resolve(timezone);
                    break;
                case 404:
                    const e = Error(`'Id ${id} not found`);
                    reject(e);
                    break;
            }
        })
    }
}