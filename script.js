var jsonobject = {
    "name":'pavan',
    "age":23,
    "relationship":'single',
    "sprot":'cricket',
    "isbusy":false
};
console.log("printing jsonobject using for loop");
var keys = Object.keys(jsonobject);
for(let i=0;i<keys.length;i++){
    console.log(keys[i]+" : "+jsonobject[keys[i]]);
}

console.log("\n\n printing jsonobject using for in loop");

for(let k in jsonobject){
    console.log(k+" : "+jsonobject[k]);
}

console.log("\n\n printing jsonobject using for of loop");

for(let k of keys){
    console.log(k+" : "+jsonobject[k]);
}