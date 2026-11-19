// SkyNest Co-Living - JavaScript used by all pages
// Each part below only runs if the element exists on that page.

// 1. MOBILE MENU: the burger button shows / hides the links
var menuButton = document.querySelector('.menu-button');
var navLinks = document.querySelector('.nav-links');

if (menuButton) {
  menuButton.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    // tell screen readers if the menu is open or closed
    var isOpen = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isOpen);
  });
}

// 2. FAQ PAGE: clicking a question opens / closes its answer
var questions = document.querySelectorAll('.faq-question');

for (var i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', function () {
    var item = this.parentElement;
    item.classList.toggle('open');
    this.setAttribute('aria-expanded', item.classList.contains('open'));
  });
}

// 3. CONTACT PAGE: check the form before "sending"
var form = document.querySelector('#contact-form');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();   // stop the page from reloading

    var name = document.querySelector('#name');
    var email = document.querySelector('#email');
    var message = document.querySelector('#message');
    var box = document.querySelector('#form-message');
    var allGood = true;

    // name and message must not be empty
    var fields = [name, message];
    for (var j = 0; j < fields.length; j++) {
      if (fields[j].value.trim() === '') {
        fields[j].classList.add('error');
        allGood = false;
      } else {
        fields[j].classList.remove('error');
      }
    }

    // email must contain @ and a dot
    var emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email.value)) {
      email.classList.add('error');
      allGood = false;
    } else {
      email.classList.remove('error');
    }

    // show the result
    if (allGood) {
      box.className = 'message success';
      box.textContent = 'Thank you! Your enquiry has been received. We will reply within 2 working days.';
      form.reset();
    } else {
      box.className = 'message problem';
      box.textContent = 'Please fill in your name, a valid email and your message.';
    }
  });
}

// 4. FOOTER: put the current year in automatically
var yearSpan = document.querySelector('#year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
