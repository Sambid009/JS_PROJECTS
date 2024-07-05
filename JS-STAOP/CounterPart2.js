let count = 0;

let start = document.querySelector(".start")
let stop = document.querySelector(".stop")
let resume = document.querySelector(".resume")
let value = document.querySelector(".value")



start.addEventListener('click', function abc() {
    count++;
    value.innerHTML = count;
    console.log(count)
    if (count > 0) {
        value.style.color = 'red';
    }
    if (count < 0) {
        value.style.color = 'blue';
    }
    if (count == 0) {
        value.style.color = 'yellow';
    }
})

stop.addEventListener('click', function abc() {
    count--;
    value.innerHTML = count;
    console.log(count)
    if (count > 0) {
        value.style.color = 'red';
    }
    if (count < 0) {
        value.style.color = 'blue';
    }
    if (count == 0) {
        value.style.color = 'yellow';
    }
})

resume.addEventListener('click', function abc() {
    count = 0;
    value.innerHTML = count;
    console.log(count)
    if (count > 0) {
        value.style.color = 'red';
    }
    if (count < 0) {
        value.style.color = 'blue';
    }
    if (count == 0) {
        value.style.color = 'yellow';
    }
}) 
