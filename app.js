let input = document.getElementById('input-item');
let btn = document.getElementById('add-item');
let span = document.getElementById('span');
let tasks = document.getElementById('tasks');


input.addEventListener('keyup', () => {
    if (input.value.trim() != 0) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
})


//add task
btn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p readonly = "readonly">${input.value}</p>
        <div class="item-btn">
            <button class="cross">&#10004;</button>
            <button class="del">delete</button>
        </div>
        `
        tasks.appendChild(newItem);
        input.value = '';
        span.innerHTML = 'Task added';
    } else {
        span.innerHTML = 'Please enter a task !';
        span.style.color = 'red'
        //tasks.appendChild(h1);
    }
})

//delete task
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('del')) {
        e.target.parentElement.parentElement.remove();
    }
})

//complete task
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('cross')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('cross')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})


let year = document.getElementById('year');
year.innerHTML = new Date().getFullYear();