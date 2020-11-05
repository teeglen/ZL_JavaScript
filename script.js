// if 語法
// if (布林值) { 程式區塊 }
// 布林值為 true 才會執行 程式區塊
if (true) {
    console.log("我是判斷式");
}

// else 否則，語法：
// else { 程式區塊 }
// 布林值為 false 才會執行 else { 程式區塊 }
var price1 = 100;

if (price1 >= 200) {
    console.log("大於 200 塊的商品");
}
else {
    console.log("小於 200 塊的商品")
}

// else if 語法：
// else if (布林值) {}
// else if 布林值為 true 才會執行 else if () { 程式區塊 }
var score=50;

if (score >=60) {
    console.log("及格")
}
else if (score >=40) {
    console.log("補考")
}
else {
    console.log("當掉")
}

// 陣列：多個相同類型的資料
var boxes = document.getElementsByClassName("box");

console.log(boxes[1]);

boxes[0].innerHTML = "我是盒子1";
boxes[1].innerHTML = "我是盒子2";
boxes[2].innerHTML = "我是盒子3";

// 迴圈 for 語法：
// for (初始值；條件；每次執行)
for(var i = 0; i < 8; i++) {
    console.log("迴圈執行次數：" + i);
}


console.log("陣列的數量：" + boxes.length);

for(var i = 0 ; i < boxes.length ; i++) {
    boxes[i].innerHTML = "用迴圈修改內容的盒子" + (i+1);
}