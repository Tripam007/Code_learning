prices = [250,645,300,900,50]
let n ;
for(let val of prices){
    n = val - (val*(10/100));
    console.log(n)
}
