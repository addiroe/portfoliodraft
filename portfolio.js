let aboutButton=docment.querySelector(".aboutButton");
let aboutMePage=document.querySelector(".aboutMePage");
let gif=document.querySelector(".countdown");



// var gif = document.querySelector(".countdown");
setTimeout(function() {
    gif.style.display = 'none'
  }, 5000);

 aboutButton.addEventListener('click', function(){
    aboutMePage.style.display='block';
});

theresMore.addEventListener("click", function(){
  outsideActivities.style.display="block";
});

