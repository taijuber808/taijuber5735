// Array of objects
let slides = [
  {
    image: "https://thumbs.dreamstime.com/b/cup-french-fries-cherry-top-348049422.jpg" ,
    title: "French fries",
    desc: "	Curly fries, shoestring fries, steak fries, sweet potato fries, chili cheese fries, poutine, crinkle cut fries, waffle fries",
    interval: 5000,
    
    
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1674511582428-58ce834ce172?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Maggi",
    desc: "Maggi offers various types, including cheeses, vegetable,and spicy option,catering to different tastes.",
    interval: 2000,
  },
  {
    image: "https://images.alphacoders.com/101/1016857.jpg",
    title: "Pizza",
    desc: "A normal pizza typically consists of a thin, round crust topped with a tomato-based sauce, cheese, and various ingredients.",
    interval: 3000,
  },
];
 
// Select DOM elements
let indicators = document.getElementById("carouselIndicators");
let inner = document.getElementById("carouselInner");

// Loop using forEach
slides.forEach(function (slide, index) {
  // Indicators
  indicators.innerHTML += `
    <button 
      type="button" 
      data-bs-target="#carouselExampleDark" 
      data-bs-slide-to="${index}" 
      class="${index === 0 ? "active" : ""}">
    </button>
  `;

  // Slides
 inner.innerHTML += `
  <div class="carousel-item ${index === 0 ? "active" : ""}" 
       data-bs-interval="${slide.interval}"
       style="height:700px;">
       
    <img src="${slide.image}" 
         class="d-block w-100"
         style="height:700px; over-flow:hidden"
         alt="${slide.title}">
         
    <div class="carousel-caption d-none d-md-block">
      <h5 class="text-light">${slide.title}</h5>
      <p class="text-light">${slide.desc}</p>
    </div>
  </div>
`;

});