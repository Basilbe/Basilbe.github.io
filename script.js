$(document).ready(function () {
  // Sticky navbar
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  // Mobile menu toggle
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Typing animations
  new Typed(".typing", {
    strings: [
      "Data Science Student",
      "Computer Vision Engineer",
      "Sports Analytics + CV Developer",
      "ML & Python Developer"
    ],
    typeSpeed: 80,
    backSpeed: 45,
    loop: true,
    fadeOut: true,
  });

  new Typed(".typing-2", {
    strings: [
      "Data Science Student",
      "Computer Vision Engineer",
      "Team Lead (Project Orion)",
      "ML & Python Developer"
    ],
    typeSpeed: 80,
    backSpeed: 45,
    loop: true,
  });

  // Scroll to top button
  const btnScrollToTop = document.querySelector("#btnScrollToTop");
  btnScrollToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  // Contact form -> mailto
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fromName = document.getElementById("fromName").value.trim();
    const emailSender = document.getElementById("emailSender").value.trim();
    const subjectSender = document.getElementById("subjectSender").value.trim();
    const message = document.getElementById("message").value.trim();

    const toEmail = "basilbehanan5@gmail.com";
    const subject = encodeURIComponent(`[Portfolio] ${subjectSender}`);
    const body = encodeURIComponent(
      `Name: ${fromName}\nEmail: ${emailSender}\n\n${message}`
    );

    const mailtoLink = `mailto:${toEmail}?subject=${subject}&body=${body}`;

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Opening your email app…",
      text: "If it doesn't open, email me directly at basilbehanan5@gmail.com",
      showConfirmButton: true,
    }).then(() => {
      window.location.href = mailtoLink;
      form.reset();
    });
  });
});
