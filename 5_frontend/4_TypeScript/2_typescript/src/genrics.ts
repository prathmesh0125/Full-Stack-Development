type input = number | string;
function firstElement<t>(arr:t[]){
  return arr[0];
}
const value=firstElement<string>(["madara","uchiha"])
const value2=firstElement([1,2])
const value3=firstElement([true,false])
console.log(value.toUpperCase());