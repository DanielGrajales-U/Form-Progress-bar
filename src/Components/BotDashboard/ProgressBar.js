export function progressBarFunction(percent){
    const progressBar = document.querySelector('.progress')
    const actualWidth = parseInt(progressBar.clientWidth)

    
    const updateProgress = percent + actualWidth/2

    progressBar.clientWidth <= 200 ? progressBar.style.width = `${updateProgress}%` : null
}