
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    var contact = document.getElementById("btn")
    

    contact.addEventListener("click", function() {
        // Abrir una nueva página en una nueva ventana
        window.open("https://wa.link/gxm16p", "_blank")});


    function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    }

    var sidemeu= document.getElementById("sidemenu");

    function openmenu(){
    sidemeu.style.right = "0";
    }

    function closemenu(){
    sidemeu.style.right = "-200px";
    }
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwBpTsStMLvdZRwwC8T0quMyAA7D7MSFTH-z0FiKdsJwXsoV0hNPa0TlHEOw2rcoERM/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
        msg.innerHTML= "Mensaje enviado correctamente"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
        } )
        .catch(error => console. error('¡Error!', error.message))
    }) 
    

    window.addEventListener('scroll', function() {
        var elements = document.querySelectorAll('.animated');
        for(var i = 0; i < elements.length; i++) {
          var positionFromTop = elements[i].getBoundingClientRect().top;
          var windowHeight = window.innerHeight;
          if(positionFromTop - windowHeight <= 0) {
            elements[i].classList.add('animate');
          }
        }
      });
      





