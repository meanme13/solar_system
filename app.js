document.getElementsByTagName("body").onload = () => {
   document.getElementById('s1').addEventListener('load', () => {
      alert('LOADED');
   });
};