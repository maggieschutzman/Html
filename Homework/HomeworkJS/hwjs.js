var nbr = 0;
function display() {
    document.getElementById("theNbr").value = nbr;
   }
function increment() {
    nbr++;
   display();
   }
function decrement() {
 nbr--;
display();
}
function loaded() { 
    display();
}