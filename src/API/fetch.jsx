export function fetchData(brand, model) {
    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "CBWbQRNWbL2awt9xAnRLpA==0Zhk092tdanWTNTA");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

        fetch(`https://api.api-ninjas.com/v1/cars?make=${brand}&model=${model}`, requestOptions)
        .then((cars) => cars.json())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}
