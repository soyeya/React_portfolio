
/* letter Event */

export const letterEvent = () => {
    
    const letters = document.querySelectorAll(".textBox ul li span em");

    for (let i = 0; i < letters.length; i++){

        setTimeout(() => {
           
            letters[i].classList.add("active");
  
         },`${i}00`);   
     }
}


