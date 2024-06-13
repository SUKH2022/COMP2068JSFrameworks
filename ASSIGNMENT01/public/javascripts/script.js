// side bar for small screens
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Contact form connected with Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbwnorGprtB5YaIUz4DqkSbJ6wjHXtOUX4gJMmq2Fs6kMbjizm_WUcRBZcrZVowREHLo/exec';

//copy the name which is submit-to-google-sheet to form name
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

//msg in the innerHTML will be display forever so write setTimeout()
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML="Message Sent Successfully"
          setTimeout(function(){
              msg.innerHTML= ""
          }, 5000)
          form.reset()
      })
    .catch(error => console.error('Error!', error.message))
})

// func. to show more certificates in the projects page
function showMoreCertificates() {
    const works = document.querySelectorAll('.show');
    for (let i = 0; i < works.length; i++) {
        works[i].classList.add('visible');
    }
    document.querySelector('.btn').style.display = 'none';
}