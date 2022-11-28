const mainContainer = document.querySelector('.container');
const secondContainer = document.querySelector('.container2');
const ratingBtn = document.querySelectorAll('.btn');
const submitBtn = document.querySelector('.btn-submit');
const resultRating = document.getElementById("rating");


submitBtn.addEventListener("click", () => {
  mainContainer.style.display= "none";
  secondContainer.classList.remove("hidden");
});

ratingBtn.forEach((rating) => {
  rating.addEventListener("click", () => {
    console.log(rating.innerHTML);
    resultRating.innerHTML = rating.innerHTML
  })
})
