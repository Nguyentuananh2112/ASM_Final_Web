// document.addEventListener("DOMContentLoaded", function () {
//   fetch("content.html")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok " + response.statusText);
//       }
//       return response.text();
//     })
//     .then((data) => {
//       document.getElementById("content").innerHTML = data;
//     })
//     .catch((error) => {
//       console.error(
//         "There has been a problem with your fetch operation:",
//         error,
//       );
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//   fetch("header.html")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok " + response.statusText);
//       }
//       return response.text();
//     })
//     .then((data) => {
//       // Lấy tất cả các phần tử với class "header-common"
//       const headerElements = document.querySelectorAll(".header-common");

//       // Duyệt qua từng phần tử và nạp nội dung
//       headerElements.forEach((element) => {
//         element.innerHTML = data;
//       });
//     })
//     .catch((error) => {
//       console.error(
//         "There has been a problem with your fetch operation:",
//         error,
//       );
//     });
// });

document.body.addEventListener("click", function (event) {
  if (event.target && event.target.id === "btnCart") {
    window.location.href = "cart.html";
  }
});
