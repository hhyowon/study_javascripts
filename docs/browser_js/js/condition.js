let first = 1;
let second = 4;

if(first < 10){
    console.log("Mano");
}else if(first > second){
    console.log(`${first} > ${second}`);
}else{
    console.log(`second : ${second}`);
}

// -- vs ---
let third =`4`;
first = 4;

// third == first
// true 
// third === first : 데이터 타입 비교
// false

//삼항 연산자
// if(){
// } else {
// }
// 변수 = () ? : ; 

let return01 = (third === first) ? `true!` : `false!`;

