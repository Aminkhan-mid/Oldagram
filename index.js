// grabbing ids
const like = document.getElementById("like")
const likeTwo = document.getElementById("likeTwo")
const likeThree = document.getElementById("likeThree")

const likeNumEl = document.getElementById("likeNum-el")
const likeNumTwo = document.getElementById("likeNum-two")
const likeNumThree = document.getElementById("likeNum-three")


let num = 0 // likes number counts from 0

// calling the ids using addeventlistener to multiply the likes number
like.addEventListener("click", function(){
    num += 100 * 2
    likeNumEl.textContent = num + " Likes"
})
likeTwo.addEventListener("click", function(){
    num += 100 * 2
    likeNumTwo.textContent = num + " Likes"
})
likeThree.addEventListener("click", function(){
    num += 100 * 2
    likeNumThree.textContent = num + " Likes"
})



