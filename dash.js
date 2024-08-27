const sidebarItems = document.querySelectorAll('.sidebar li');

sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
    // Add your animation logic here
    console.log('Item clicked:', item.textContent);
  });
});