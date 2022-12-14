export const getGifs = async ( category ) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=YAXMNu3mWsiIvZD2v5Gl0am7ZmfI3bBQ&q=${category}&limit=20`
    const resp = await fetch( url );
    const { data }  = await resp.json();

    const gifs = data.map( img =>  ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}