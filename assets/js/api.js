// fetch('https://jsonplaceholder.typicode.com/todos/')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)

//     })

//Promise JS
//Asynchronous function Js

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(elt => {
//             console.log(elt)
//             document.getElementById("content").innerHTML += `
//                 <div>
//                     <h3>${elt.name}</h3>
//                     <h3>${elt.email}</h3>
//                     <h3>${elt.phone}</h3>
//                     <h4>${elt.address.street}, ${elt.address.city}</h4>
//                     <a href=${elt.website}> visit my website</a>
//                 </div>
//             `
//         });
//     })


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(elt => {
//             console.log(elt)
//             document.getElementById("content").innerHTML += `
//                 <div>
//                     <h3>${elt.id}</h3>
//                     <h3>${elt.title}</h3>
//                     <h3>${elt.body}</h3>
//                 </div>
//             `
//         });
//     })


// fetch("http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-25&sortBy=publishedAt&apiKey=3060deabfb6d4a2e9867e0d2004a5f88")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.articles)
//         data.articles.forEach(elt => {
//             document.getElementById("content").innerHTML += `
//                 <div>
//                 <figure>
//                     <img src=${elt.urlToImage}>
//                     <figcaption>${elt.title}</figcaption>
//                 </figure>
//                 <article>
//                     <h5>${elt.author}</h5>
//                     <h5>${elt.publishedAt}</h5>
//                 </article>                       
//                 <a href=${elt.url}>See This News</a>
//                 </div>
//             `
//         });
//     })


/*
{ <style>
#content {
    display: grid;
    grid-template-columns: repeat(4, 25%);
}

div {
    border: 1px solid #000;
    margin: 20px;
    overflow-x: scroll;

}

img {
    width: 100%;
}

article {
    display: flex;
    justify-content: space-between;
}
</style>
<div id="content"></div> */

