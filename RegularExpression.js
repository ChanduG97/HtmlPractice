let re=/hello/i // >> i is Flag varibale ( for case sensitive )and ^ represents the starting value 
// After the ^ cap symbol that particular item or element should be there
let res=re.test("Hello Java scrip");
console.log(res);
//let re=/^[0-9]{10}$/  //---> $ represents where to start and where to stop 
//let res = re.test(“66554477111”);
//console.log 