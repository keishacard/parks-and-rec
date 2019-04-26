const baseUrl = "https://raw.githubusercontent.com/nss-day-cohort-31/national-parks/master/database.json?"

console.log("hello");

// findParkFeatures = () => {
//     let parkList = document.querySelector("#displayParksResults")

//     if (displayParksResults.innerHTML !== "") {
//         displayParksResults.innerHTML = ""
//     }

let allParks = document.createElement("ol")
parkList.appendChild(parksList)

let visited = document.querySelector("#parkArticle").value
visited = `${visited}=true`

fetch(`${baseUrl}${visited}`)
    .then(response => response.json())
    .then(parksArray => parksArray.forEach(parkObject => {
        // console.log(`${park.park_name} ${park.mapped_location.human_address}`)
        let parsedName = JSON.parse("name")
        // console.log(parsedAddress);
        // let string =
        let parkResult = document.createElement("li")
        // let saveBtn = document.createElement("button")
        // saveBtn.innerHTML = "Save"
        // saveBtn.setAttribute("id", `${parkObject.park_name}: ${parsedAddress.address}`)
        // saveBtn.addEventListener("click", saveParkToItin)
        // parkResult.innerHTML = `<p>${parkObject.park_name}: ${parsedAddress.address}</p>`
        // parkResult.appendChild(saveBtn)

        parksList.appendChild(parkResult)
    })
    )