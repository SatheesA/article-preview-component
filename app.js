/** @format */

let shareButton = document.querySelector(".js-card-share-btn");
let contactInfo = document.querySelector(".js-card-footer");
let socialShare = document.querySelector(".js-card-social-share");

shareButton.addEventListener("click", () => {
  if (contactInfo.classList.contains("card--show-share")) {
    contactInfo.classList.remove("card--show-share");
    socialShare.classList.add("card--show-share");
  } else {
    contactInfo.classList.add("card--show-share");
    socialShare.classList.remove("card--show-share");
  }
});
