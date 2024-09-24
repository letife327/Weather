"use strict";
$(document).ready(function () {

    $(document).keypress(function (e) {
        if (e.which == 13) {
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${$(".inpBox").val()}&appid=7b3a1a891bc9994755b43204e7adb60e&units=metric`;
            let myWeather = async () => {
                let responce = await fetch(apiUrl);
                let data = await responce.json();
                $('#city').html(data.name);
                $('#temp').html(data.main.temp);
                $('#like').html(data.main.feels_like);
                $(".inpBox").val("");
            }
            myWeather();
        }
    });

    $('.btn').click(function (e) {
        e.preventDefault();
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${$(".inpBox").val()}&appid=7b3a1a891bc9994755b43204e7adb60e&units=metric`;
            let myWeather = async () => {
                let responce = await fetch(apiUrl);
                let data = await responce.json();
                $('#city').html(data.name);
                $('#temp').html(data.main.temp);
                $('#like').html(data.main.feels_like);
                $(".inpBox").val("");
            }
            myWeather();
       
    });
















    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
    // let apiId = `7b3a1a891bc9994755b43204e7adb60e`;
    // async function giveData(inValue) {

    //     if (!$.trim($('.inpBox').val()) == "") {
    //         let res = await fetch(apiUrl + `&appid=${apiId}&q=${inValue}`);
    //         let data = await res.json();
    //         console.log(res);
    //         if (res.status == 200) {
    //             $('#city').html(data.name);
    //             $('#temp').html(data.main.temp);
    //             $('#like').html(data.main.feels_like);
    //         }
    //         else {
    //             return;
    //         }

    //     }
    // }
    // $('.btn').click(function (e) {
    //     e.preventDefault();
    //     giveData($('.inpBox').val());
    //     $('.inpBox').val(" ");
    // });
    // $('.inpBox').keypress(function (e) {
    //     if (e.keyCode == 13) {
    //         giveData($('.inpBox').val());
    //         $('.inpBox').val(" ");
    //     }
    // });

});