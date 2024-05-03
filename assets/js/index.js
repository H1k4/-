// import {NAME_MASS, JOB_MASS} from "../massive/module.js";
import { NAME_MASS } from "../massive/module-name.js";
import { JOB_MASS } from "../massive/module-job.js";
let personItemMass = document.querySelectorAll(".person-item");
let title = document.querySelector(".main-title");
let person = document.querySelector(".person");
let button = document.getElementById("create");
function random(min,max) {
    return Math.floor(Math.random() * (max - min+1) + min);   
}

console.log(title,person,button);
console.dir(title);
button.addEventListener("click",()=>{
    console.log("cdv")
    title.style.opacity = 0;
    console.log(random);
    personItemMass[0].innerText ="Имя:" + NAME_MASS[random(0,NAME_MASS.length)];
    personItemMass[1].innerText ="Возраст:" + random(10,80);
    personItemMass[2].innerText ="Профессия:" + JOB_MASS[random(0,JOB_MASS.length)];
    personItemMass[3].innerText ="Стаж работы:" + random(1,20);
    personItemMass[4].innerText ="Здоровье: отличное";
    personItemMass[5].innerText ="Плодовитость:" + JOB_MASS[random(0,JOB_MASS.length)];
    personItemMass[6].innerText ="Страхи:" + JOB_MASS[random(0,JOB_MASS.length)];
    personItemMass[7].innerText ="Хобби:" + JOB_MASS[random(0,JOB_MASS.length)];
    setTimeout(()=> {
        title.style.display = 'none';
        person.style.display =  'flex'; 
        setTimeout( ()=> {
            person.style.opacity = 100
    }, 1000)  
 }, 1000);   
})
