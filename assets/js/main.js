let range = document.getElementsByClassName("slider")
let demo = document.getElementById("demo")

let changeBackground = (x) => {
    document.body.style.backgroundColor = x
}

changeHandle = () => {
    console.log(range[0].value)
    console.log(range[1].value)
    console.log(range[2].value)
    document.body.style.backgroundColor = `rgb(${range[0].value},${range[1].value},${range[2].value})`
    demo.innerHTML = `rgb(${range[0].value},${range[1].value},${range[2].value})=0x${(1<<24|range[0].value<<16|range[1].value<<8|range[2].value).toString(16).slice(1)}`
}

console.log((1<<24|255<<16|200<<8|100).toString(16).slice(1))