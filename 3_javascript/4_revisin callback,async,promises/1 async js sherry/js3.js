// taks
/*
sabse pahle ghar par jao
gate kholo aur gate lagao
khana pako aur khao
aur so jao
 */

function taks1() {
  return new Promise((resolve, reject) => {
    resolve("sabse pahle ghar jao");
  });
}
function onDane(data) {
  console.log(data);
}

var task2=taks1().then(onDane).then(()=>{
  return new Promise((resolve, reject) => {
  resolve("gate kholo aur gate band karo")
})});
var task3=task2.then(onDane).then(()=>{
  return new Promise((resolve, reject) => {
  resolve("khana pakao aur kha jao")
})});
var task4=task3.then(onDane).then(()=>{
  return new Promise((resolve, reject) => {
  resolve("so jao")
})});

task4.then(onDane);
