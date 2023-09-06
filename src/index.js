//Third Walkthrough
//Deliverable #1 [DONE]
    // See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
    // 1. Fetch all of the ramen images from our JSON file with a fetch request
    // 2. Grab all of the image values and display them in "#ramen-menu" on page load
    // 3. Ramen images should be displayed using img tags "forEach" within "#ramen-menu"

//Deliverable #2 [DONE]
    // Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.
    // 1. Add a click event on our new img tags in the "#ramen-menu"
    // 2. On click, we should see all of the object data from each individual ramen displayed in "#ramen-detail"
    // 3. Comments and ratings should also appear in the "#rating-display" and "#comment-display"
        // NOTE: The object "comment" keys are written as a NESTED ARRAY OF OBJECTS w/ two sub-keys each; "name" and "text"

//Deliverable #3 [DONE]
    // Create a new ramen after submitting the new-ramen form. The new ramen should be added to the #ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.
    // 1. Create a new ramen object using the "#new-ramen" form element and a "submit" event listener
    // 2. The new object should include all of the same key-value pairs as our default objects
        // "name", "restuarant", "image", "rating", "comment" => "comment" should include a NESTED ARRAY of "name" and "text" key-value pairs as OBJECTS
    // 3. The new ramen object should display in "#ramen-menu"

const baseURL = "http://localhost:3000/ramens"

fetch("http://localhost:3000/ramens")
    .then((response) => response.json())
    .then((data) => renderRamen(data))

function renderRamen(ramens) {
    //console.log(ramens)

    const ramenMenu = document.querySelector("#ramen-menu")

    ramens.forEach((ramen) => {
        // console.log(ramen)
        const img = document.createElement("img")
        img.src = ramen.image
        ramenMenu.append(img)

        img.addEventListener("click", (e) => {
            // console.log("Hello there!")
            // console.log(e.target)
            
            const ramenImage = document.querySelector(".detail-image")
            const ramenName = document.querySelector(".name")
            const ramenRestaurant = document.querySelector(".restaurant")
            const ramenRating = document.querySelector("#rating-display")
            const ramenComment = document.querySelector("#comment-display")
            
            ramenImage.src = ""
            ramenImage.alt = ""
            ramenName.innerHTML = ""
            ramenRestaurant.innerHTML = ""
            ramenRating.innerHTML = ""

            ramenImage.src = ramen.image
            ramenImage.alt = "Yummy ramen!"
            ramenName.textContent = ramen.name
            ramenRestaurant.textContent = ramen.restaurant
            ramenRating.textContent = ramen.rating

            ramenComment.innerHTML = ""
            ramen.comment.forEach((review) => {
                // console.log(ramen.comment)
                // console.log(review)
                const userReview = document.createElement("p")
                // console.log(userReview)
                userReview.textContent = `"${review.text}" -${review.name}`
                // console.log(userReview)
                ramenComment.append(userReview)
            })
        })
    })
    
    const newRamen = document.querySelector("#new-ramen")

    newRamen.addEventListener("submit", (e) => {
        e.preventDefault()
        // console.log(e.target)
        // console.log(e.target.name.value)
        const newRamenObj = {
            "name": e.target.name.value,
            "restaurant": e.target.restaurant.value,
            "image": e.target.image.value,
            "rating": e.target.rating.value,
            "comment": [{
                "name": "Tyler",
                "text": e.target["new-comment"].value
            }]   
        }
        renderRamen([newRamenObj])
        newRamen.reset()
    })
}





// Second walkthrough w/ db2.json
// Deliverable #1
    // Fetch ramen data from the JSON file
    // See all ramen images in #ramen-menu
    // Grab the all ramen objects from our JSON file on page load
    // Display the image "forEach" ramen object using an <img> tag inside #ramen-menu

// Deliverable #2
    // After a "click" event fires in #ramen-menu:
        // Grab all ramen object data from db2.json file
        // Ramen object data should be viewable in #ramen-detail
        // Ratings and comments should appear, respectively in the #rating-display and #comment-display divs
        // Grab ramen object "comment" arrays and iterate "forEach" to get the enclosed key-value pairs for rendering

// Deliverable #3
    // After a "submit" event fires in "#new-ramen":
        // Create a new ramen object
        // Populate new object with identical key-value pairs to the other, pre-existing ramen objects
            // "name", "restaurant", "image", "rating", "comment"

// FETCH
// fetch("http://localhost:3000/ramens")
//     .then((response) => response.json())
//     .then((api) => /*console.log(api)*/renderRamenData(api))

// function renderRamenData(ramenArray) {
//     const ramenImgDiv = document.querySelector("#ramen-menu")
//     ramenArray.forEach((ramen) => {
//         // console.log(ramen);
//         const img = document.createElement("img")
//         // console.log(img)
//         img.src = ramen.image
//         img.alt = `This is ${ramen.name} from ${ramen.restaurant}. Yummy!`
//         img.title = `This is ${ramen.name} from ${ramen.restaurant}`

//         img.addEventListener("click", (e) => {
//             // console.log("hello")
//             // console.log(e.target)
//             document.querySelector(".name").textContent = ramen.name
//             document.querySelector(".restaurant").textContent = ramen.restaurant
//             document.querySelector(".detail-image").src = ramen.image
//             document.querySelector("#rating-display").textContent = ramen.rating
            
//             // Create a variable for the comments to be able to remove the "Insert comment here" text with each set of comments
//             const commentLine = document.querySelector("#comment-display")

//             // Removes the default text in the comment section ("Insert comment here")
//             commentLine.innerHTML = ""

//             // Setting up a forEach() to iterate through the multiple comment objects in our ramen comment array
//             ramen.comment.forEach((nameText) => {
//                 const commentP = document.createElement("p")
//                 // console.log(nameText)
//                 commentP.textContent = `"${nameText.text}" -${nameText.name}`
//                 commentLine.append(commentP)
//             })
//         })
//         ramenImgDiv.append(img)        
//     })
// }

// const newRamenForm = document.querySelector("#new-ramen")
// newRamenForm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     // console.log(e.target)
//     const newRamen = {
//         "name": e.target.name.value,
//         "restaurant": e.target.restaurant.value,
//         "image": e.target.image.value,
//         "rating": e.target.rating.value,
//         "comment": [{
//             name: "Commenter",
//             text: e.target["new-comment"].value
//         }]
//     }
//     renderRamenData([newRamen])
//     // Chris is my mortal enemy
//     newRamenForm.reset()
// })







// First Walkthrough w/ db.json
// // Deliverable #1
//     // See all the ramen images in the div ("#ramen-menu")
//     // Request all of the data from the server on page load to get all the ramen objects
//     // Display the images "forEach" ramen using an <img> tag inside "#ramen-menu" div

// // Deliverable #2
//     // Upon "click" event:
//         // GRAB info on ramen from ramen objects
//         // Display object data within #ramen-detail div

// // Deliverable #3
//     // When "submit" event fires from the form:
//         // preventDefault() on page load
//         // Create a new ramen obj in the DOM
//         // Add new ramen object to #ramen-menu div

// // FETCH
// fetch("http://localhost:3000/ramens")
//     .then((response) => response.json())
//     .then((data) => /*console.log(data)*/renderRamenImgs(data))
//         // We are logging "data" to find out the type of data that we are working with (i.e. array, object, etc.). Because the data is returned as an array, we don't need to worry about using anything like "Object.keys" which is something we would need to use if we were interested in working with the values located in each of the objects' key-value pairs

// // MAIN DIVS
// const ramenDiv = document.querySelector("#ramen-menu")
// const ramenDetail = document.querySelector("#ramen-detail")
// const newRamenForm = document.querySelector("#new-ramen")
//     // We can declare this variable in the global scope because it is something we can use to more easily select these elements in future functions rather than have to include and of those functions within the same function it is originally declared in or create a new variable in the new function to select the same element

// // RENDER RAMEN IMAGES
// function renderRamenImgs(ramenArray) {
//     // console.log(ramenArray)
//     ramenArray.forEach((ramens) => {
//         const img = document.createElement("img")
//         // console.log(img)
//         img.src = ramens.image // Here, we want to connect our newly created "img" variable (our newly created <img> tags) and their coinciding src values to our objects ("ramens") via their "image" values so that the images have somewhere to pull their urls
        
//         // CLICK EVENT LISTENER
//         img.addEventListener("click", (e) => {
//             // console.log("hello") to confirm that our event listener is setup correctly and logs only one event when triggered on the image click
//             document.querySelector(".detail-image").src = ramens.image
//             document.querySelector(".name").textContent = ramens.name
//             document.querySelector(".restaurant").textContent = ramens.restaurant
//             document.querySelector("#rating-display").textContent = ramens.rating
//             document.querySelector("#comment-display").textContent = ramens.comment
//             // With each of these, we are selecting the individual elements in the HTML where we want to render the values of the keys that we are selecting from our ramen objects ("ramens._________")
//         })
        
//         ramenDiv.append(img); // Using the div id that we selected in the global scope ("ramenDiv") we can append on the new img elements that now contain all of the data we need to render them in the DOM
//     })
// }

// // SUBMIT FORM EVENT LISTENER
// newRamenForm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     // console.log(newRamenForm)
//     const newRamen = {
//         "name": e.target.name.value,
//         "restaurant": e.target.restaurant.value,
//         "image": e.target.image.value,
//         "rating": e.target.rating.value,
//         "comment": e.target["new-comment"].value
//         // We establish the new variable to create our new ramen object and then populate it's key-value pairs with the synonymous data from our JSON file
//         // We then tie those keys to the standard "e.target.key.value" that represents where we want the data to be pulled from
//         // We place the "new-comment" key in brackets because it is an abnormal element that wouldn't work using our usual dot notation
//     }
//     renderRamenImgs([newRamen]) // We are using the previously made function for creating elements to pass our new object into the ramen array 
//     newRamenForm.reset() // We use this to reset the form textboxes to no values after the submit event fires
// })

