/*

Think of 5 different real world "things" that you 
can describe with a JavaScript object

Assign each of them to a separate variable


For example:
var car = {
    brand: "Seat",
    model: "Arona",
    color: "white",
    horsepower: 115,
    doors: 5
};

*/

var user = {
    name: "akash",
    age: 45,
    isHandsome: true,
    handsome : function hans(){
        if(this.isHandsome){
             return user
        }else {
            return user.upgrade = "making handsome"
        }
    }
}
user.handsome()
console.log(user);
