document.getElementsByTagName("body").onload = () => {
   document.getElementById('s1').addEventListener('click', () => {
      alert('LOADED');
   });
};