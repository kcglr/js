//write a function that displays the properties of the object.

const movie = {
    title: 'a',
    releaseYear: 2020,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(obj){
    for (let key in obj){
        if (typeof obj[key] === 'string'){
            console.log(key, movie[key]);
        }
    }
}