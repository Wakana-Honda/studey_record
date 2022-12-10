$(document).ready(function(){
  $('body').html('<h1>Omochi Love!!</h1>');
});

// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// let user_hand = prompt('じゃんけんの手を選んでください');
// while((user_hand != "ぐー")&&(user_hand != "ちょき")&&(user_hand != "ぱー")&&(user_hand != "null")){
// alert('ぐーちょきぱーのいづれかを入力してね');
// user_hand = prompt('じゃんけんの手を選んでください');
// }
// let js_hand = getJShand();

// let judge = winLose(user_hand,js_hand);

// if (user_hand != null){
//   alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
// } else {
//   alert("またチャレンジしてね")
// }

// function getJShand(){
//   let js_hand_num = Math.floor(Math.random()*3);
//   let hand_name;
  
//   if(js_hand_num == 0){
//     hand_name = "ぐー";
//   }else if(js_hand_num == 1){
//     hand_name = "ちょき";
//   }else if(js_hand_num == 2){
//     hand_name = "ぱー";
//   }
//   return hand_name;
// }

// function winLose(user,js){
//   let winLoseStr;
  
//   if(user == "ぐー"){
//     if(js == "ぐー"){
//       winLoseStr = "aiko";
//     }else if(js == "ちょき"){
//       winLoseStr = "カチ";
//     }else if(js == "ぱー"){
//       winLoseStr = "負け";
//     }
//   }else if(user == "ちょき"){
//   if(js == "ぐー"){
//       winLoseStr = "負け";
//     }else if(js == "ちょき"){
//       winLoseStr = "aiko";
//     }else if(js == "ぱー"){
//       winLoseStr = "カチ";
//     }
//   }else if(user == "ぱー"){
//   if(js == "ぐー"){
//       winLoseStr = "カチ";
//     }else if(js == "ちょき"){
//       winLoseStr = "負け";
//     }else if(js == "ぱー"){
//       winLoseStr = "aiko";
//     }
//   }
//   // }else if(user == ! "ぐー"||"ちょき"||"ぱー"){
//   //   alert("ぐーちょきぱーのいづれかを入力してね")
//   //   let user_hand = prompt('じゃんけんの手を選んでください');
//   // }

// return winLoseStr;
// }

// let alertString;

// alertString = addString("Omochi");

// alert(alertString);

// function addString(strA){
//   let addStr = "Hello" + strA;
//   return addStr;
// }

// let promptStr = prompt('好きな文字を入れてね');
// alert(promptStr);

// let hello = "Hello Wakana"
// alert("Hello Wakana");
 
// let int1 = 1;
// alert(int1);

// alert(4 + 3);

// let word1 = "Omochi";
// let word2 = "Love";
// alert(word1 + word2);

// let orange = 100;
// let apple = 50;
// if(orange < apple){
//   alert('みかんの方が安い');
// }else if(orange == apple){
//   alert('同じ値段');
// }else{
//   alert('りんごのほうが安い');
// }

// let max = 1000000;
// let num = 5;
// let count = 0;

// while(num < max){
// num = num*2;
// count = count + 1;
// }

// alert('2をかけ続けて'+max+'を超えるのに必要だった回数は'+count+'回です');

// var name = "mochi"

// function foo(){
//   console.log(name)
//   var y = "hello"
// }

// foo()
// console.log(y)