const API_KEY = "0ba844d1366c76419b23510e9f6b38b8";


function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data =>  {
        const weatherForm = document.querySelector("#weather");
        const city = weatherForm.querySelector("ul li:first-child");
        const curTem = weatherForm.querySelector("ul li:last-child");
        const minTem = weatherForm.querySelector("span:first-of-type");
        //const curTem = weatherForm.querySelector("span:last-child"); 쓰면 null 값만 나왔음.. 차후 확인 요망 이유 못찾음... last-of-type으로 우회
        //last-of-type : 입력한 특정 타입의 element에 대해서만 카운트함
        const maxTem = weatherForm.querySelector("span:last-of-type");
        const img = weatherForm.querySelector("#apiImg");
        img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        city.innerText = data.name;
        //toFixed 메서드 : 지정한 값으로 소수 부분 자릿수를 고정한 후, 그 값을 문자열로 반환.    지정값 이후 자릿수 반올림
        curTem.innerText = `현재 온도 : ${(data.main.temp).toFixed(1)} ℃`;
        maxTem.innerText = `최고 : ${(data.main.temp_max).toFixed(1)} ℃`;
        minTem.innerText = `최저 : ${(data.main.temp_min).toFixed(1)} ℃`;
    });
}

function onGeoError() {
    alert("Can't find you. We can't provide this service")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);