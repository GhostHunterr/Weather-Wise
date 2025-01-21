const setImage = (temp, condition) => {
    let url = "";

    if (temp < 0) {
        url = (condition === "Snow" ? "https://github.com/GhostHunterr/Weather-Wise/blob/main/src/assets/snowy.jpg?raw=true" : "https://github.com/GhostHunterr/Weather-Wise/blob/main/src/assets/freezing.jpg?raw=true");
    } else if (temp >= 0 && temp <= 10) {
        url = (condition === "Rain" ? "https://github.com/GhostHunterr/Weather-Wise/blob/main/src/assets/rain.jpg?raw=true" : "https://github.com/GhostHunterr/Weather-Wise/blob/main/src/assets/cold.jpg?raw=true");
    } else if (temp > 10 && temp <= 20) {
        url = "https://github.com/GhostHunterr/Weather-Wise/blob/main/src/assets/cool.jpg?raw=true";
    } else if (temp > 20 && temp <= 25) {
        url = "https://github.com/GhostHunterr/Weather-Wise/blob/main/src/assets/warm.jpg?raw=true";
    } else if (temp > 25) {
        url = "https://github.com/GhostHunterr/Weather-Wise/blob/main/src/assets/hot.jpg?raw=true";
    }

    return url;
};

export { setImage };