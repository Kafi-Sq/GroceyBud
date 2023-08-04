const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

let editElement = ''
let editFlag = false
let editID = ''

form.addEventListener('submit', addItem)
clearBtn.addEventListener('click', clearItems)

function addItem(e) {
    e.preventDefault()
    const value = grocery.value
    const id = new Date().getTime().toString()

    if (value && !editFlag) {
        const element = document.createElement('article')
        element.classList.add('grocery-item')
        const attr = document.createAttribute('data-id')
        attr.value = id
        element.setAttributeNode(attr)

        element.innerHTML = `
            <p class="title">${value}</p>
            <div class="btn-container">
                <button class="edit-btn"><i class="fas fa-edit"></i></button>
                <button class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>
        `
        list.appendChild(element)
        displayAlert('Item Added', 'success')
        container.classList.add('show-container')

        addToLocalStorage(id, value)
        setBackToDefualt()
    } else if (value && editFlag) {
        console.log('editing')
    } else {
        displayAlert('Please enter value', 'danger')
    }
}

function displayAlert(text, action) {
    alert.textContent = text
    alert.classList.add(`alert-${action}`)
    setTimeout(() => {
        alert.textContent = ''
        alert.classList.remove(`alert-${action}`)
    }, 1000)
}

function clearItems() {
    const items = document.querySelectorAll('.grocery-item')

    if(items.length > 0) {
        items.forEach((item) => {
            list.removeChild(item)
        })
    }
    container.classList.remove('show-container')
    displayAlert('Empty list', 'danger')
    setBackToDefualt()
    //localStorage.removeItem('list')
}

function setBackToDefualt() {
    grocery.value = ''
    editFlag = false
    editID = ''
    submitBtn.textContent = 'submit'
}

function addToLocalStorage(id, value) {
    console.log("Added to local storage");
}