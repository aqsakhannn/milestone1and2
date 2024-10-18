var toggleButton = document.getElementById('toggle-experience');
var workExperience = document.getElementById('Work-Experience');
toggleButton.addEventListener('click', function () {
    if (workExperience.style.display === 'none') {
        workExperience.style.display = 'block';
    }
    else {
        workExperience.style.display = 'none';
    }
});
