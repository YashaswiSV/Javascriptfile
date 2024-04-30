<<<<<<< HEAD
//===========================char at====================

const mypara ="apple,banana,grapes,guava,mango,Apple,strawberry ,pineapple";

console.log(mypara.charAt(5));
console.log(mypara.charCodeAt(1));

//===========================convert string to array============

let x = mypara.split(",");       //agar , nhi laga then it will slipt eac chharacter
console.log(x);

//========to get the index of any caharcter=============(index no.)

x=mypara.indexOf("banana");          // index jahn se yeh word start hoga    
console.log(x);

//==========includes=====(return boolean (true or false))=============

x=mypara.includes("mango");      //agar vo word h then it will return true

console.log(x);

//================search============work same as indexOf

x=mypara.search("apes");
console.log(x);

//====================match==========(particular element return in array format)
x=mypara.match(/pineapple/gi);
console.log(x);





=======
//===============set time out======================

function show(){
    setTimeout(loader,3000);
}

const loader=()=>{
    document.getElementById("webcode").style.display="block";
    document.getElementById("img").style.display="none";


}
>>>>>>> d841893 (file added)
