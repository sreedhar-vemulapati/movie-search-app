let api = "http://www.omdbapi.com/?apikey=6581c4ba&t=";

function search() {
    let title = document.getElementById("title").value;
    let name = document.getElementById("name");
    let director = document.getElementById("director");
    let actors = document.getElementById("actors");
    let genre = document.getElementById("genre");
    let plot = document.getElementById("plot");
    let runtime = document.getElementById("runtime");
    let released = document.getElementById("released");
    let language = document.getElementById("language");
    let awards = document.getElementById("awards");
    let country = document.getElementById("country");
    let imdbrating = document.getElementById("imdbrating");
    let poster = document.getElementById("poster");
    let query = api + encodeURIComponent(title);
   
    fetch(query)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Check if the data was found
            if (data.Response === "True") {
                let div=document.getElementById("div");
                div.style.display="block";
                div.style.display="flex";
                box.style.display="none";
                name.innerText = data.Title || "N/A";
                director.innerText = data.Director || "N/A";
                actors.innerText = data.Actors || "N/A";
                genre.innerText = data.Genre || "N/A";
                plot.innerText = data.Plot || "N/A";
                runtime.innerText = data.Runtime || "N/A";
                released.innerText = data.Released || "N/A";
                language.innerText = data.Language || "N/A";
                awards.innerText = data.Awards || "N/A";
                country.innerText = data.Country || "N/A";
                imdbrating.innerText = data.imdbRating || "N/A";
                poster.src = data.Poster || "";
                poster.alt = data.Title || "Poster not available";
                if(data.imdbRating>7){
                    imdbrating.style.color="green";
                    let watch=document.getElementById("watch");
                    watch.innerText="worth watching";
                    watch.style.backgroundColor="lightgreen";
                   
                    div.style.boxShadow="0px 0px 10px green";
                }
                 else if(data.imdbRating>6 && data.imdbRating<7){
                    imdbrating.style.color="orange";
                    let watch=document.getElementById("watch");
                    watch.innerText="watch once";
                    watch.style.backgroundColor="orange";
                    div.style.border="1px solid orange";
                    div.style.boxShadow="0px 0px 10px orange";
                }else{
                    imdbrating.style.color="red";
                    let watch=document.getElementById("watch");
                    watch.innerText="Time waste !";
                    watch.style.backgroundColor="red";
                    div.style.border="1px solid red";
                    div.style.boxShadow="0px 0px 10px red";
                }
               
            } else {
                div.style.display="none";
                let notfound=document.getElementById("notFound");
                let box=document.getElementById("box");
                box.style.display="block";
                notfound.style.display="block";
                notfound.innerText="Movie not found";
                notfound.style.color="red";
            }
        })
        
}
