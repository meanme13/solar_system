document.querySelector("a-scene").addEventListener('load', () => {
   document.getElementById('s1').addEventListener('load', () => {
      console.log('LOADED');
   });
});