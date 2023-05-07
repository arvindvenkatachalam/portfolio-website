
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    console.log('id'); 
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset+height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

function sendMail(){
    var params = {
        from_name : document.getElementById("from_name").value,
        email_id : document.getElementById("email_id").value,
        mob_number : document.getElementById("mob_number").value,
        email_sub : document.getElementById("email_sub").value,
        your_message : document.getElementById("your_message").value
    }
    const serviceID = "service_j3j0jsk";
    const templateID = "template_1zz0waj";

    emailjs.send(serviceID,templateID,params).then(function(res) {
        alert("Thank you for visiting my page");
    })
    document.getElementById("myform").reset();
}