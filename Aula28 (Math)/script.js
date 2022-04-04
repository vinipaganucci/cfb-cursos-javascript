
let arr = []

for (let i = 0; i < 6; i++) {
    let nums = Math.round(Math.random() * 59) + 1 
    arr += nums
}

for (let i = 0; i < arr.length; i++) {
    document.write(arr[i])
    
}