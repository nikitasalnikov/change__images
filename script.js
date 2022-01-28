document.querySelectorAll('.images img').forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('.background img').src = element.src;
    })
})
    
   