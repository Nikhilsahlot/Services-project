console.log("This is my index js file");


// Initialize the news api parameters
let source = 'national-geographic';
let apiKey = 'eac5bea1c1034c34a2d1f5e8a533d59c'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request-used to request data from the server
// with an http get request method
// ajax-asynchronous transcript and xml
// xml-extensible markup language-used for distributing data over
// internet
// xhr-xml http request-without loading request data
const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=eac5bea1c1034c34a2d1f5e8a533d59c
`,
  true
);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()


