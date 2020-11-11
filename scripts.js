
const hamburger = document.getElementById('menuToggle');
const navUL = document.getElementById('mobile');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});


// The debounce function receives our function as a parameter
const debounce = (fn) => {

  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) { 
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      
      // Call our function and pass any params we received
      fn(...params);
    });

  } 
};


// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
}

document.addEventListener('scroll', function() {
    document.documentElement.dataset.scroll = document.body.scrollTop;
}, true);

// Listen for new scroll events, here we debounce our `storeScroll` function
// window.addEventListener('scroll', debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();


const coll = document.getElementsByClassName("list-header");

for (let i = 0; i < coll.length; i++){
    coll[i].addEventListener("click", function() {
        var content = this.nextElementSibling;
        console.log(content)
        content.classList.toggle("active");
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
}
