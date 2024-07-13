import axios from 'axios';

export async function fetchImages(query, page = 1, perPage = 12) {
    const searchParams = new URLSearchParams({
        key: '44785846-fbfadd775113e3685d7630ccf',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: false,
        per_page: perPage,
        page: page,
    });
    const url = `https://pixabay.com/api/?${searchParams}`;
    
    return await axios.get(url)
        .then((response) => {
            console.log(response);
            return {
                images: response.data.hits,
                totalImages: response.data.totalHits 
            }
        })
        .catch((error) => console.log(error));
}