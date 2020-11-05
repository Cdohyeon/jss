let a = 1;
let b = true;
let c = "가가ㅏ가가각";



console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

function fun(name) {
    console.log(name);

    return name;
}

const n = fun("이름");
console.log(n);

const g = function (name) {
    console.log(name);
};
g("진짜 이름");

const x =  (name) => {
    console.log(name);
};

x("두번째이름");
(()=> {
    console.log(1);
})();

let v = 1;
const add = (a) => {
    return a+ 1;
};
v = add(v);

if (v > 1) {
    console.log("1보다 큼");
} else {
    console.log("1보다 작너나 같음");
}


for(let i = 1; i <= 9; i++) {
    if(i % 2 == 0) {
        continue;
    }
    console.log(i+2);
    
}