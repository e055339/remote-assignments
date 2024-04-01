//使用jQuery CDN
let $bannerHead = $(".banner h1");
$(".banner").on("click", function () {
  if ($bannerHead.text() === "歡迎來到我的網站") {
    $bannerHead.text("Have a Good Time!");
  } else {
    $bannerHead.text("歡迎來到我的網站");
  }
});

let $moreClass = $(".moreClass");
$moreClass.css("display", "none"); //或直接用hide();

$(".btn").on("click", function () {
  $moreClass.show();
});
