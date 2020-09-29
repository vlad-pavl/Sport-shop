document.addEventListener("DOMContentLoaded", function() {

   void function () {
      const burger = document.querySelector('.icon-menu');
      burger.addEventListener('click', () => {
          burger.classList.toggle('burger-active');
      });
   }();

});
