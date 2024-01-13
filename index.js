let slideshow = [
    {
      
      image: "Screenshot 2.png"
    },
    {
      image: "Screenshot 4.png"
    },
    {
      image: "Screenshot 3.png"
    },
    {
      image: "Screenshot 1.png"
    },
    {
      image: "Screenshot 5.png"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; // to track current slide index.
  
  const createSlide = () => {
    if (slideIndex >= slideshow.length) {
      slideIndex = 0;
    }
  
    // creating DOM element
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(slideshow[slideIndex].name));
    p.appendChild(document.createTextNode(slideshow[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    // setting up image
    imgElement.src = slideshow[slideIndex].image;
    slideIndex++;
  
    // setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
          30 * (sliders.length - 2)
        }px)`;
      }
    };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  //Video Cards
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  //card sliders
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });

  function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  

  const productContainers = [...document.querySelectorAll('.product-container')];
  const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
  const preBtn = [...document.querySelectorAll('.pre-btn')];

  productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () =>{
      item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () =>{
      item.scrollLeft -= containerWidth;
    })
  })

  const openFormBtn1 = document.getElementById("openFormBtn1");
    const formContainer1 = document.getElementById("formContainer1");

    openFormBtn1.addEventListener("click", function() {
      formContainer1.style.display = "block";
    });
    myForm1.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // You can add your form submission logic here
      // For now, let's just log the form data to the console
      const formData1 = new FormData(myForm1);
      for (let pair of formData1.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
  
      // Optional: You can close the form after submission
      formContainer1.style.display = "none";
    });
  
    // Close the form when clicking outside of it
    document.addEventListener("click", function(event) {
      if (!formContainer1.contains(event.target) && event.target !== openFormBtn1) {
        formContainer1.style.display = "none";
      }
    });
  ;


  const openFormBtn2 = document.getElementById("openFormBtn2");
    const formContainer2 = document.getElementById("formContainer2");

    openFormBtn2.addEventListener("click", function() {
      formContainer2.style.display = "block";
    });
    myForm2.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // You can add your form submission logic here
      // For now, let's just log the form data to the console
      const formData2 = new FormData(myForm2);
      for (let pair of formData2.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
  
      // Optional: You can close the form after submission
      formContainer2.style.display = "none";
    });
  
    // Close the form when clicking outside of it
    document.addEventListener("click", function(event) {
      if (!formContainer2.contains(event.target) && event.target !== openFormBtn2) {
        formContainer2.style.display = "none";
      }
    });
  ;


  const openFormBtn3 = document.getElementById("openFormBtn3");
    const formContainer3 = document.getElementById("formContainer3");

    openFormBtn3.addEventListener("click", function() {
      formContainer3.style.display = "block";
    });
    myForm3.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // You can add your form submission logic here
      // For now, let's just log the form data to the console
      const formData3 = new FormData(myForm3);
      for (let pair of formData3.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
  
      // Optional: You can close the form after submission
      formContainer3.style.display = "none";
    });
  
    // Close the form when clicking outside of it
    document.addEventListener("click", function(event) {
      if (!formContainer3.contains(event.target) && event.target !== openFormBtn3) {
        formContainer3.style.display = "none";
      }
    });
  ;

  const openFormBtn4 = document.getElementById("openFormBtn4");
    const formContainer4 = document.getElementById("formContainer4");

    openFormBtn4.addEventListener("click", function() {
      formContainer4.style.display = "block";
    });
    myForm4.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // You can add your form submission logic here
      // For now, let's just log the form data to the console
      const formData4 = new FormData(myForm4);
      for (let pair of formData4.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
  
      // Optional: You can close the form after submission
      formContainer4.style.display = "none";
    });
  
    // Close the form when clicking outside of it
    document.addEventListener("click", function(event) {
      if (!formContainer4.contains(event.target) && event.target !== openFormBtn4) {
        formContainer4.style.display = "none";
      }
    });
  ;

  const openFormBtn5 = document.getElementById("openFormBtn5");
    const formContainer5 = document.getElementById("formContainer5");

    openFormBtn5.addEventListener("click", function() {
      formContainer5.style.display = "block";
    });
    myForm5.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // You can add your form submission logic here
      // For now, let's just log the form data to the console
      const formData5 = new FormData(myForm5);
      for (let pair of formData5.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
  
      // Optional: You can close the form after submission
      formContainer5.style.display = "none";
    });
  
    // Close the form when clicking outside of it
    document.addEventListener("click", function(event) {
      if (!formContainer5.contains(event.target) && event.target !== openFormBtn5) {
        formContainer5.style.display = "none";
      }
    });
  ;

  const openFormBtn6 = document.getElementById("openFormBtn6");
    const formContainer6 = document.getElementById("formContainer6");

    openFormBtn6.addEventListener("click", function() {
      formContainer6.style.display = "block";
    });
    myForm6.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // You can add your form submission logic here
      // For now, let's just log the form data to the console
      const formData6 = new FormData(myForm6);
      for (let pair of formData6.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
  
      // Optional: You can close the form after submission
      formContainer6.style.display = "none";
    });
  
    // Close the form when clicking outside of it
    document.addEventListener("click", function(event) {
      if (!formContainer6.contains(event.target) && event.target !== openFormBtn6) {
        formContainer6.style.display = "none";
      }
    });
  ;

  const openFormBtn7 = document.getElementById("openFormBtn7");
    const formContainer7 = document.getElementById("formContainer7");

    openFormBtn7.addEventListener("click", function() {
      formContainer7.style.display = "block";
    });
    myForm7.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // You can add your form submission logic here
      // For now, let's just log the form data to the console
      const formData7 = new FormData(myForm7);
      for (let pair of formData7.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
  
      // Optional: You can close the form after submission
      formContainer7.style.display = "none";
    });
  
    // Close the form when clicking outside of it
    document.addEventListener("click", function(event) {
      if (!formContainer7.contains(event.target) && event.target !== openFormBtn7) {
        formContainer7.style.display = "none";
      }
    });
  ;

  const openFormBtn8 = document.getElementById("openFormBtn8");
    const formContainer8 = document.getElementById("formContainer8");

    openFormBtn8.addEventListener("click", function() {
      formContainer8.style.display = "block";
    });
    myForm8.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // You can add your form submission logic here
      // For now, let's just log the form data to the console
      const formData8 = new FormData(myForm8);
      for (let pair of formData8.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
  
      // Optional: You can close the form after submission
      formContainer8.style.display = "none";
    });
  
    // Close the form when clicking outside of it
    document.addEventListener("click", function(event) {
      if (!formContainer8.contains(event.target) && event.target !== openFormBtn8) {
        formContainer8.style.display = "none";
      }
    });
  ;

  const openFormBtn9 = document.getElementById("openFormBtn9");
    const formContainer9 = document.getElementById("formContainer9");

    openFormBtn9.addEventListener("click", function() {
      formContainer9.style.display = "block";
    });
    myForm9.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // You can add your form submission logic here
      // For now, let's just log the form data to the console
      const formData9 = new FormData(myForm9);
      for (let pair of formData9.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
  
      // Optional: You can close the form after submission
      formContainer9.style.display = "none";
    });
  
    // Close the form when clicking outside of it
    document.addEventListener("click", function(event) {
      if (!formContainer9.contains(event.target) && event.target !== openFormBtn9) {
        formContainer9.style.display = "none";
      }
    });
  ;
