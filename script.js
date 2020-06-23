// This is the URL for the API.
const url = 'https://api.randomuser.me/?results=12';
const card = document.querySelector("#card-section");

// 2.
function getData() {
  fetch(url)
    .then(response => response.json())
    // 3
    .then(data => {
      displayData(data.results)
      console.log(data.results[0])
    });
}

// 4
function displayData(dataArray) {
  for (let i = 0; i < dataArray.length; i++) {
    // template from the HTML
    let personHTML = `
    <div class="card">
        <img class="img" src="${dataArray[i].picture.large}" alt="Avatar" />
      <div class="container">
        <h4><b>${dataArray[i].name.first} ${dataArray[i].name.last}</b></h4> 
        <p>${dataArray[i].location.country}</p> 
      </div>
      </div>
    `;
    card.innerHTML += personHTML;
  }
  // 5. Then we see on webpage  Ok.  So now let's use the template in the HTML section
}

// 1
getData()