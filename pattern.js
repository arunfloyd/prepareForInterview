

function printPattern (){
    const size = 7
    let output =""

    for(let i =1 ;i<=size;i++){
        let line =""
        let mid = Math.ceil(size/2)
        let numElements =size - Math.abs(mid -1)

        for(let j=1;j<Math.abs(mid-i)+1;j++){
            line+=""
        }
        for(let j=1;j<i+numElements/2;j++){
            line+= j+ " "        }

            output+=line.trim()

    }
    return output
}

console.log(printPattern())