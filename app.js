"use strict";
$(document).ready(function () {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
    let apiId = `7b3a1a891bc9994755b43204e7adb60e`;
    async function giveData(inValue) {

        if (!$.trim($('.inpBox').val()) == "") {
            let res = await fetch(apiUrl + `&appid=${apiId}&q=${inValue}`);
            let data = await res.json();
            console.log(res);
            if(res.status == 200){
                $('#city').html(data.name);
                $('#temp').html(data.main.temp);
                $('#like').html(data.main.feels_like);
            }
            else{
                return;
            }
           
        }
    }
    $('.btn').click(function (e) {
        e.preventDefault();
        giveData($('.inpBox').val());
        $('.inpBox').val(" ");
    });
    $('.inpBox').keypress(function (e) {
        if (e.keyCode == 13) {
            giveData($('.inpBox').val());
            $('.inpBox').val(" ");
        }
    });

});