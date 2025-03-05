export async function fetchCarAndImage(brand, model) {

    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "CBWbQRNWbL2awt9xAnRLpA==0Zhk092tdanWTNTA");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    const carsApiResponse = await fetch(`https://api.api-ninjas.com/v1/cars?make=${brand}&model=${model}`, requestOptions);

    const carsData = await carsApiResponse.json();

    const query = `${brand} ${model}`

    const pexelsApiResponse = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        headers: {
            Authorization: "Ak68QV2EqCxiXpP0SWD8wMuVQa3uYofscetdORHoWo4rfEFTZ9Hhom4Q",
        },
    });

    const pexelsData = await pexelsApiResponse.json();
    const imageUrl = pexelsData?.photos?.[0]?.src?.medium || "";

    return {
        cars: carsData,
        image: imageUrl
    };
}