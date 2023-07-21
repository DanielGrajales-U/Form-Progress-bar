const items = 4

export function progressBarFunction(){
    const progressBar = document.querySelector('.progress')
    const actualWidth = parseInt(progressBar.clientWidth)
    const percent = 100 / items
    
    const updateProgress = percent + actualWidth / 2

    progressBar.clientWidth <= 200 ? progressBar.style.width = `${updateProgress}%` : null
}