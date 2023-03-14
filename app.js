const starsEl = document.querySelectorAll('.fa-solid');
const emoji = document.querySelectorAll('.fa-regular');
const emojiColorsArray = [
    "red", "orange", "lightblue", "lightgreen", "green"
];

updateRating(0);

starsEl.forEach(function(starEl, index){
    starEl.addEventListener('click', function(){
        updateRating(index);
    })
});


function updateRating(index){
    starsEl.forEach((starEl, idx) => {
        if(idx < index + 1){
            starEl.classList.add('active');

        }else{
            starEl.classList.remove('active');
        }
    });

    emoji.forEach((emoji) =>{
        emoji.style.transform = `translateX(-${index * 50}px)`;
        emoji.style.color = emojiColorsArray[index];
    });
}





















