function updateProgressBar(stage) {
    const progressBarFill = document.querySelector('.progress-fill');
    const progressWidth = (stage / 3) * 100; // Assuming 3 stages
    progressBarFill.style.width = progressWidth + '%';
  }