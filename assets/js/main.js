let range = document.getElementsByClassName("slider")
let demo = document.getElementById("demo")
let count = 0

let changeBackground = (x) => {
    document.body.style.backgroundColor = x
    demo.innerHTML = `Sie haben die Farbe bereits ${count+=1} mal geändert.`
}

changeHandle = () => {
    document.body.style.backgroundColor = `rgb(${range[0].value},${range[1].value},${range[2].value})`
    demo.innerHTML = `rgb(${range[0].value},${range[1].value},${range[2].value})=0x${(1<<24|range[0].value<<16|range[1].value<<8|range[2].value).toString(16).slice(1)}`
}