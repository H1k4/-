let title = document.querySelector(".main-title");
let person = document.querySelector(".person");
let button = document.getElementById("create");

console.log(title,person,button);
 console.dir(title);
button.addEventListener("click",()=>{
    console.log("cdv")
    title.style.opacity = 0;
    setTimeout(()=> {
        title.style.display = 'none';
        person.style.opacity = 100
        person.style.display =  'flex'; 
 }, 1000 );
    // if (title.style.display = 'none'){
    //     person.style.display =  'flex';
    // } else {
    //     person.style.display = 'none';
    // }
})
