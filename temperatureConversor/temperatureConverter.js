let unity, unityToConvert, temperature = -1000, newTemperature;

function getInitialUnity() {
    while (unity != "C" && unity != "F" && unity != "K") {
        unity = prompt(`**INITIAL UNITY**\nType "C" for Celsius, "F" for fahrenheit and "K" for Kelvin`, "C");
    }
}

function getUnityToConvert() {
    while ((unityToConvert != "C" && unityToConvert != "F" && unityToConvert != "K") || (unityToConvert == unity)) {
        unityToConvert = prompt(`**UNITY TO CONVERT**\nType "C" for Celsius, "F" for fahrenheit and "K" for Kelvin\n**HAS TO BE DIFFERENT FROM THE INITIAL UNITY**`, "F");
    }
}

function getTemperature() {
    if (unity == "C") {
        while (temperature < -273.15) {
            temperature = +prompt(`**TEMPERATURE CANT BE UNDER -273,15**\nType temperature`, '-273,15').replace(',', '.');
        }
    } else if (unity == 'F') {
        while (temperature < -459.67) {
            temperature = +prompt(`**TEMPERATURE CANT BE UNDER -459,67**\nType temperature`, '-459,67').replace(',', '.');
        }
    } else {
        while (temperature < 0) {
            temperature = +prompt(`**TEMPERATURE CANT BE UNDER 0**\nType temperature`, '0').replace(',', '.');
        }
    }
}

function convert() {
    switch (unity) {
        case 'C':
            if (unityToConvert == "F") {
                newTemperature = (temperature * (9 / 5)) + 32;
            } else {
                newTemperature = temperature + 273.15;
            }
            break;
        case 'F':
            if (unityToConvert == "C") {
                newTemperature = ((temperature - 32) * (5/9));
            } else {
                newTemperature = ((temperature - 32) * (5/9) + 273.15);
            }
            break;
        case 'K':
            if (unityToConvert == "C") {
                newTemperature = temperature - 273.15;
            } else {
                newTemperature = (temperature - 273.15) * 9/5 + 32
            }
            break;
    }
}

getInitialUnity();
getUnityToConvert();
getTemperature();
convert();
alert(newTemperature);