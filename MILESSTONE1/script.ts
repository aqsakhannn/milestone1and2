const toggleButton = document.getElementById('toggle-experience') as HTMLButtonElement
const workExperience = document.getElementById('Work-Experience') as HTMLElement

toggleButton.addEventListener('click' , () => {
    if(workExperience.style.display === 'none'){
        workExperience.style.display = 'block'
    }
    else{
        workExperience.style.display = 'none'
    }
})