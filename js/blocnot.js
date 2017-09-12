var elements = document.querySelectorAll('textarea');

function checkValidity() {};

for (i=0; i<elements.length; i++) {
 (function(element) {
   var id = element.getAttribute('id');
   element.value = localStorage.getItem(id); // обязательно наличие у элементов id
   element.oninput = function() {
     localStorage.setItem(id, element.value);
     checkValidity();
   };
 })(elements[i]);
}