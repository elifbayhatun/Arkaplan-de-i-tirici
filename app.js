const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [ "black", "yellow", "darkblue","pink", "purple", "grey","green",
];

button.addEventListener("click", changeBackground);

let sıra = 0;

function changeBackground() {
  //   rastgele bir renk

  //   const rastgeleSayi = Math.floor(Math.random() * colors.length);
  //   const secilenRenk = colors[rastgeleSayi];

  //   body.style.backgroundColor = secilenRenk;

  // sırayla arkaplan rengi seç
  

  if (sıra == 7) sıra = 0;
  const secilenRenk = colors[sıra];
  sıra++;
  body.style.backgroundColor = secilenRenk;
}