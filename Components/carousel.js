let carousel1Data = [
  { height: "338px", width: "600px", smCols: 1, mdCols: 1, cols: 2 },
  {
    img: "assets/giorgioArmani.png",
    onImageText: ["Flat 15% Off", "On Entire Brand"],
  },
  {
    img: "assets/chemistAtPlay.png",
    onImageText: ["Upto 40% off", "Get Extra 5% on 599"],
  },
  {
    img: "assets/scienceBasedBeauty.png",
    onImageText: ["Trusted Solutions for All!", "Shop Now"],
  },
  {
    img: "assets/bodyBesties.png",
    onImageText: ["Mini + Hair Comb on ₹1400", "Ultra-Nourishing Body Creams"],
  },
  {
    img: "assets/monsoonMustHaves.png",
    onImageText: ["Upto 25% off", "On The Best Of Beauty"],
  },
  {
    img: "assets/perfora.png",
    onImageText: ["Upto 40% off, Only on Nykaa!"],
  },
  {
    img: "assets/kay.png",
    onImageText: ["Upto 20% off", "On #MakeupThatKares"],
  },
];

function carousel(data, id) {
  let container = document.getElementById(id);

  let width, height;
  data.map((elem, index) => {
    if (index == 0) {
      width = elem.width;
      height = elem.height;
      return;
    }
    let div = document.createElement("div");
    div.style.borderRadius = "5px";
    div.style.backgroundImage = `url(${elem.img})`;
    div.style.height = height;
    div.style.width = width;
    div.style.display = "flex";
    div.style.alignItems = "flex-end";
    let textContainer = document.createElement("div");
    textContainer.style.padding = "10px";
    elem.onImageText.map((e) => {
      let p = document.createElement("h1");
      p.innerText = e;
      p.style.color = "white";
      textContainer.append(p);
    });
    div.append(textContainer);
    container.append(div);
  });
}
carousel(carousel1Data, "carousel1");
