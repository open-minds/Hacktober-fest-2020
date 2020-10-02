console.log("hello my fist pretty extension");

let imgs = document.getElementsByTagName('img');
console.log(imgs)
for (element of imgs) {
    let path = chrome.extension.getURL('photos/azizi.png');
    element.src = path;
}