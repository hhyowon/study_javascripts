// string - string
// 숫자 - Number
// ArrayList = Array []
// HashMap = Object {}

// let animals = ["dog", "cat", "bird", "fish", "lizard"];

// console.log(`Done`);

// for (let i=0; i<animals.length; i=i+1){
//     console.log(`${i+1} : ${animals[i]}`);
// }

// // for (String animal : animals)
// for (let animal of animals) {
//     console.log(`${animal}`);
// }

// learning after object
const animals_obj = [
    { name: "dog", species: "canine" },
    { name: "cat", species: "feline" },
    { name: "bird", species: "avian" },
    { name: "fish", species: "aquatic" },
    { name: "lizard", species: "reptile" },
];


let outHtml = ``; // 빈 문자열 초기화
for (let animal_hashmap of animals_obj) { //for문을 사용하여 객체 배열의 요소에 접근
    console.log(`name : ${animal_hashmap.name}, species : ${animal_hashmap[`species`]}`);
    outHtml = `${outHtml}<div>name : ${animal_hashmap.name}, species : ${animal_hashmap[`species`]}</div>`; 
    //HTML 형식으로 문자열을 생성하여 outHtml에 추가
}

console.log(outHtml);

// brower 자원 중에 docs, 브라우저 자원 중에 id가 "loops"인 요소를 선택
let loops_source = document.querySelector(`#loops`); 

//loops_source