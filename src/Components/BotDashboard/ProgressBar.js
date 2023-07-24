const items = 4

export function progressBarFunction(maxPercent){
    const progressBar = document.querySelector('.progress')
    const actualWidth = parseInt(progressBar.clientWidth)
    const percent = 100 / items
    
    const updateProgress = percent + actualWidth / 2
    console.log(actualWidth)

    progressBar.clientWidth <= maxPercent ? progressBar.style.width = `${updateProgress}%` : null
}