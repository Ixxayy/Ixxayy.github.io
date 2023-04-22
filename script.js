function changeText() {
  document.getElementsByTagName("p")[0].innerHTML =
    "Makasih,Kamu bidadari yang dilahirkan di dunia ini untuk diriku sayanggg🤍🤍🤍<br> i love uuuu <br>";
}

function changeImage(event) {
  var gambar = document.getElementById("gambar");
  gambar.src = URL.createObjectURL(event.target.files[0]);
}

let gambar = document.getElementById("gambar");
let gambarSrc = ["images/mawar.jpg"];
let index = 0;

gambar.addEventListener("click", function () {
  if (index === gambarSrc.length) {
    index = 0;
  }
  gambar.setAttribute("src", gambarSrc[index]);
  index++;
});
