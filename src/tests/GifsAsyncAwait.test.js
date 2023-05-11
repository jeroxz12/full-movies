export const getImagen = async () => {
    try {
        
        const API_KEY = 'X19yMh3KDIf6RiBzCAOrHjRQ9iFCCRwt';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`)
        const  {data } = await resp.json();
        const { url } = data.images.original;

        return url;
    } catch (error) {
        console.log(error)
        return 'No se encontró la imagen.'
    }
}