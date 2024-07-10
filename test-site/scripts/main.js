let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/test-image.jpg") {
    myImage.setAttribute("src", "images/test-image2.jpg");
  } else {
    myImage.setAttribute("src", "images/test-image.jpg");
  }
};

let myButton = document.querySelector("button");
myButton.onclick = function () {
    /*
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，"+myName ;
    */
    setUserName();
  };

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
}
