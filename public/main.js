const btn = document.querySelector('button')

const clickHandler = () => alert('The cat name is: Rascal')

btn.addEventListener('click', clickHandler)

let baseURL = ('http://ec2-34-221-224-57.us-west-2.compute.amazonaws.com/')

// let baseURL = 'http://localhost:4000'
const btn2 = document.querySelector('#button2')

const getCat = ( ) => {
    axios.get(`${baseURL}/api/cat`)
    .then(res => {
        alert(res.data)
    })
.catch(err => {
    console.log(err)
})
}
btn2.addEventListener('click', getCat)