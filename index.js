window.onload = pageLoad;

function pageLoad() {
    console.log("js linked");
    //getQuotes();
}

// checks status of ajax calls
function checkStatus(response) {  
    if (response.status >= 200 && response.status < 300) {  
        return response.text();
    } else {  
        return Promise.reject(new Error(response.status + ": " + response.statusText)); 
    } 
}

// gets quotes from api
/*function getQuotes() {
    var url = "https://cors.io/?https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
    fetch(url)
        .then(checkStatus)
        .then(JSON.parse)
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
}*/

function getQuote(id) {
    var url = "http://www.seanwrona.com/typeracer/text.php?id=" + id;
    let data = new FormData();
    data.append("id", id);
    fetch(url, {method: "POST", body: data})
        .then(checkStatus)
        .then(JSON.parse)
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {

        });
}


