//使用jQuery CDN
// const $bannerHead = $(".banner h1");
// $(".banner").on("click", function () {
//   if ($bannerHead.text() === "歡迎來到我的網站") {
//     $bannerHead.text("Have a Good Time!");
//   } else {
//     $bannerHead.text("歡迎來到我的網站");
//   }
// });

// const $moreClass = $(".moreClass");
// $moreClass.css("display", "none"); //或直接用hide();

// $(".btn").on("click", function () {
//   $moreClass.show();
// });

const banner = document.querySelector(".banner");
const bannerHead = document.querySelector(".banner h1");
banner.addEventListener("click", () => {
  if (bannerHead.innerHTML === "歡迎來到我的網站") {
    bannerHead.innerHTML = "Have a Good Time!";
  } else {
    bannerHead.innerHTML = "歡迎來到我的網站";
  }
});

const moreClass = document.querySelector(".moreClass");
moreClass.style.display = "none";

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  moreClass.style.display = "flex";
});
