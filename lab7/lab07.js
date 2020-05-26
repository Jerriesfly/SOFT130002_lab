const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

const flexContainer = document.getElementsByClassName("flex-container")[0];

for (let content of works){
    let h4Element = document.createElement("h4");
    let h4Node = document.createTextNode("Genre: " + content.tips);
    h4Element.appendChild(h4Node);

    let innerBox1 = document.createElement("div");
    innerBox1.setAttribute("class","inner-box");
    let h3Element1 = document.createElement("h3");
    let h3Node1 = document.createTextNode(content.author + " ");
    let sub = document.createElement("sub");
    let subNode1 = document.createTextNode("lifetime:" + content.lifetime);
    sub.appendChild(subNode1);
    h3Element1.appendChild(h3Node1);
    h3Element1.appendChild(sub);
    innerBox1.appendChild(h3Element1);

    let innerBox2 = document.createElement("div");
    innerBox2.setAttribute("class","inner-box");
    let h3Element2 = document.createElement("h3");
    let h3Node2 = document.createTextNode("Popular Photos");
    h3Element2.appendChild(h3Node2);
    innerBox2.appendChild(h3Element2);
    for(let image of content.photos){
        let imgElement = document.createElement("img");
        imgElement.setAttribute("class", "photo");
        imgElement.setAttribute("src", image);
        innerBox2.appendChild(imgElement);
    }

    let buttonElement = document.createElement("button");
    let buttonNode = document.createTextNode("visit");
    buttonElement.appendChild(buttonNode);

    let item = document.createElement("div");
    item.setAttribute("class", "item");
    item.appendChild(h4Element);
    item.appendChild(innerBox1);
    item.appendChild(innerBox2);
    item.appendChild(buttonElement);

    flexContainer.appendChild(item);
}
