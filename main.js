const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};
const {title : t, developer :d,releases} = game;
const [o,a] = Object.keys(releases);
const [[u,j],{US:u_price,JAP:j_price},or] = Object.values(releases);

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD
/*another example about destructring */

let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

if( chosen === 1){
  let myobj = myFriends[0];
  const {title , age , available:a , skills:[ , css]} = myobj;
  console.log(`${title}\n${age}\n${a === true? 'available' : "not available"}\n${css}`);
}
else if( chosen === 2){
  let myobj = myFriends[1];
  const {title , age , available :a ,skills : [ , d]} = myobj;
  console.log(`${title}\n${age}\n${a? "available" : "not available"}\n${d}`);
}
else if( chosen === 3){
  let myobj = myFriends[2];
  const {title , age , available : a , skills : [ , l]} = myobj;
  console.log(`${title}\n${age}\n${a? "available" : "not available"}\n${l}`);
}
// set

const setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
let iterator = setOfNumbers.keys();
iterator.next().value;
iterator.next().value;
console.log(iterator.next().value);

let myFriend = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
let myset = new Set(myFriend.sort());
console.log(myset);

// Needed Output
(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
let mymap = new Map([
  ["username","osama"],
  ["role","admin"],
  ["country","egypt"],
]);
console.log(mymap);
console.log(mymap.size);
console.log(mymap.has("role"));

let theNumber = 100020003000;
let mysett =new Set([theNumber]).values().next().value

console.log(mysett);

let theName = "Elzero";
let arr1 = theName.split("");
let arr2 = Array.from(theName);
let arr3 = [...theName];
let arr4 = new Set(theName);
let arr5 = new Map([[theName]]);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(Array.from(arr4));
console.log(Array.from(arr5.keys()));

// Needed Output
['E', 'l', 'z', 'e', 'r', 'o'];

function sumOfDifferences(arr) {
  if(arr.length === 0){
    return 0;
  }
  let newarr = arr.sort((x,y)=>{
    return y - x;
  })
  let sumDifference = 0;
  for(let i=0;i<newarr.length-1;i++){
    sumDifference += newarr[i] - newarr[i+1];
  }
  return sumDifference;
}

console.log(sumOfDifferences([1, 2, 10]));

function countPositivesSumNegatives(input) {
  if(input.length == 0 || input == null){
    return [];
  }
  let arr = [];
  let sum = 0;
  let result = [];
for(let i=0; i<input.length;i++){
  if(input[i] > 0){
    arr.push(input[i]);
  }else if(input[i] < 0){
    sum += input[i];
  }
}
result.unshift(arr.length,sum)
return result
}
console.log(countPositivesSumNegatives());

function first(arr, n = 1) {
  let myarr= [];
 if(n>arr.length){
    return arr;
  }
  else if( n ){
    for(let i=0;i<n;i++){
      myarr.push(arr[i]);
    }
    return myarr;
  }else{
    return [];
  }
}
console.log(first(['a', 'b', 'c', 'd', 'e'],10));


