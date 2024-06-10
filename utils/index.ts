
export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': '2a393ee145msh319e6e6f6d11070p1e6d91jsn8914e4ba7121',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers: headers});

    const result = await response.json();

    return result;

}