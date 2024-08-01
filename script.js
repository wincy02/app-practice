function displaynum(number) {
    document.getElementById('display').innerText = number;
}

function confirm() {
    var number = parseInt(document.getElementById('numberInput').value);
    if (number >= 1 && number <= 8) {
        // displaynum(number);
        for (var i = 1; i <= 8; i++) {
            
            if (i <= number) {
                document.querySelector('.c' + i).style.display = 'flex';
            } else {
                document.querySelector('.c' + i).style.display = 'none';
            }
        }
      
    } else {
        alert("pleasen enter number between 1-8");
    }
}

function store_num(number,element){

    sessionStorage.setItem('selectednum',number);
    sessionStorage.setItem('clicked','true');
    displaynum(number);
    makebold(element);
}

function makebold(element){
    let circles = document.querySelectorAll('.circles > div');
    circles.forEach(circle => circle.classList.remove('clicked-border'));

    element.classList.add('clicked-border');

}
function goMe() {
    window.location.href = 'navpage.html';

}

function home() {
    document.body.classList.add('flash');
    setTimeout(() => {
        document.body.classList.remove('flash');
    }, 1000);
}

document.addEventListener('click', function(event) {
    let circlesContainer = document.querySelector('.c');
    if (!circlesContainer.contains(event.target)) {
        let circles = document.querySelectorAll('.circles > div');
        circles.forEach(circle => circle.classList.remove('clicked-border'));
    }
});
