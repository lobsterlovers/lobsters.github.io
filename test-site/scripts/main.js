let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/miqi.png') {
      myImage.setAttribute('src', 'images/miqi.png');
    } else {
      myImage.setAttribute('src', 'images/xingxing.png');
    }
}
document.querySelector("h1").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
  });
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
let myName = prompt('请输入你的名字。');
if(!myName) {
    setUserName();
}else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }

}
myButton.onclick = function() {
    setUserName();
 }