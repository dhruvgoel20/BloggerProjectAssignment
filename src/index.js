let x = 17;
let isprime = true
for (let i = 2; i < x; i++) {
    if (x % i == 0) {

        isprime = false
        break;
    }
}
if(isprime==true){
    console.log(`${x} is prime number`);
}
else{
    console.log(`${x} is not prime number`);

}
