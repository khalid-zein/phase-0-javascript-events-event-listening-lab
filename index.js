// function addingEventListener() {
// }

// const input = document.getElementById('button');

// function clickAlert() {
    //   alert('I was clicked!');
    // }
    
    // input.addEventListener('click', clickAlert);
    
//  const input = document.getElementById('button');
//  input.addEventListener('click', function() {
//       alert('I was clicked!');
// });

const btn = document.getElementById('button');
function clickAlert() {
    alert('I was clicked!');
  }

function addingEventListener() {
    btn.addEventListener("click", clickAlert);
}

addingEventListener();