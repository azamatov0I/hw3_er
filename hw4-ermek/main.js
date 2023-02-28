 const but = document.querySelector('button')

but.onclick = () => {
    const request = new XMLHttpRequest() 
    request.open('GET', 'main.json') 
    request.setRequestHeader('Content-type', 'application/json')
    request.send() 
    request.onload= () => {
        const data = JSON.parse(request.response)
        data.forEach(people => {
            const names = document.createElement('div')
            names.innerHTML = 'name: ' + people.name
            const ages = document.createElement('div')
            ages.innerHTML = 'age: ' + people.age + ' y.o'
            document.querySelector('div').append(names, ages)
        });
    }
}