var tablelinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
const services = document.getElementsByClassName("service");


let display = 0;

function opentab(tabname) {
    for (const tablelink of tablelinks) {
        tablelink.classList.remove("active-link");
        display = 0;
    }

    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
        display = 0;

    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}
// -----------------for responsiveness  ==============
const sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";


}
function closemenu(){
    sidemenu.style.right="-200px";
    

}

