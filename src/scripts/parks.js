const baseUrl = "https://raw.githubusercontent.com/nss-day-cohort-31/national-parks/master/database.json"

console.log("hello");

// findParkFeatures = () => {
//     let parkList = document.querySelector("#displayParksResults")

//     if (displayParksResults.innerHTML !== "") {
//         displayParksResults.innerHTML = ""
//     }

// let allParks = document.createElement("ol")
// parkList.appendChild(parksList)

// let visited = document.querySelector("#parkArticle").value
// visited = `${visited}=true`
let allParksDiv = document.querySelector("#allParks")
let parksList = document.createElement("ul")
allParksDiv.appendChild(parksList)

fetch(`${baseUrl}`)
    .then(response => response.json())
    .then(parksResponse => parksResponse.parks.forEach(parkObject => {
        let parkResult = document.createElement("article")
        let parkName = document.createElement("h3")
        let parkState = document.createElement("p")

        parkName.innerHTML = `${parkObject.name}`
        parkState.innerHTML = `${parkObject.state}`
        // console.log(parkName)

        parkResult.appendChild(parkName)
        parkResult.appendChild(parkState)
        console.log(parkResult)
        allParksDiv.appendChild(parkResult)
    })
    )