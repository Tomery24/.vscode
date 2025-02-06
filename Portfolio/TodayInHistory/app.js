var today = new Date();//New date class
var year = today.getFullYear(); //Get fill year
var month = today.getMonth() + 1; //Get the month
var date = today.getDate();// Get the date
var api_type = "events"; //events | deaths | births
var root_div = document.querySelector(".root-div"); //Selecting the DOM
//Api url construction
var api = "https://cdn.jsdelivr.net/gh/harrify-apis/historyjs/" + api_type + "/" + month + "_" + date + ".json";

//Javascript fetch from json api
fetch(api).then(
    function(response){
        
        response.json().then(function(json) {

            json = json[api_type];
            const list = Object.values(json).map(post => `
            <a href="${post.wikipedia[0].wikipedia}" target="_blank">
                <div class="item">
                    <h4>${post.year} - ${year - post.year} years ago</h4>
                    <h1>${post.description}</h1>
                </div>
            </a>
            `);

            var html = list.join("");
            root_div.innerHTML = html;
        });
        //Mapping Json Response


    }
);