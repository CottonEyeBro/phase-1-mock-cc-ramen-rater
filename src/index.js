// Deliverable #1
    // See all the ramen images in the div ("#ramen-menu")
    // Request all of the data from the server on page load to get all the ramen objects
    // Display the images "forEach" ramen using an <img> tag inside "#ramen-menu" div

// Deliverable #2
    // Upon "click" event:
        // GRAB info on ramen from ramen objects
        // Display object data within #ramen-detail div

// Deliverable #3
    // When "submit" event fires from the form:
        // preventDefault() on page load
        // Create a new ramen obj in the DOM
        // Add new ramen object to #ramen-menu div

// FETCH
fetch("http://localhost:3000/ramens")
    .then((response) => response.json())
    .then((data) => /*console.log(data)*/renderRamenImgs(data))
        // We are logging "data" to find out the type of data that we are working with (i.e. array, object, etc.). Because the data is returned as an array, we don't need to worry about using anything like "Object.keys" which is something we would need to use if we were interested in working with the values located in each of the objects' key-value pairs

// MAIN DIVS
const ramenDiv = document.querySelector("#ramen-menu")
const ramenDetail = document.querySelector("#ramen-detail")
const newRamenForm = document.querySelector("#new-ramen")
    // We can declare this variable in the global scope because it is something we can use to more easily select these elements in future functions rather than have to include and of those functions within the same function it is originally declared in or create a new variable in the new function to select the same element

// RENDER RAMEN IMAGES
function renderRamenImgs(ramenArray) {
    // console.log(ramenArray)
    ramenArray.forEach((ramens) => {
        const img = document.createElement("img")
        // console.log(img)
        img.src = ramens.image // Here, we want to connect our newly created "img" variable (our newly created <img> tags) and their coinciding src values to our objects ("ramens") via their "image" values so that the images have somewhere to pull their urls
        
        // CLICK EVENT LISTENER
        img.addEventListener("click", (e) => {
            // console.log("hello") to confirm that our event listener is setup correctly and logs only one event when triggered on the image click
            document.querySelector(".detail-image").src = ramens.image
            document.querySelector(".name").textContent = ramens.name
            document.querySelector(".restaurant").textContent = ramens.restaurant
            document.querySelector("#rating-display").textContent = ramens.rating
            document.querySelector("#comment-display").textContent = ramens.comment
            // With each of these, we are selecting the individual elements in the HTML where we want to render the values of the keys that we are selecting from our ramen objects ("ramens._________")
        })
        
        ramenDiv.append(img); // Using the div id that we selected in the global scope ("ramenDiv") we can append on the new img elements that now contain all of the data we need to render them in the DOM
    })
}

// SUBMIT FORM EVENT LISTENER
newRamenForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log(newRamenForm)
    const newRamen = {
        "name": e.target.name.value,
        "restaurant": e.target.restaurant.value,
        "image": e.target.image.value,
        "rating": e.target.rating.value,
        "comment": e.target["new-comment"].value
        // We establish the new variable to create our new ramen object and then populate it's key-value pairs with the synonymous data from our JSON file
        // We then tie those keys to the standard "e.target.key.value" that represents where we want the data to be pulled from
        // We place the "new-comment" key in brackets because it is an abnormal element that wouldn't work using our usual dot notation
    }
    renderRamenImgs([newRamen]) // We are using the previously made function for creating elements to pass our new object into the ramen array 
    newRamenForm.reset() // We use this to reset the form textboxes to no values after the submit event fires
})