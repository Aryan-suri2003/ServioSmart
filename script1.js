async function myfunction() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  var preloader = document.getElementById('loading');
  preloader.style.display = 'none';
}