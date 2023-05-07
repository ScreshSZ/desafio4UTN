//TRABAJO PRACTICO N°1

console.log("TRABAJO N°1")

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let diasDelMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


console.log("LOS MESES QUE POSEEN 31 DIAS")
for(let i =0; i<meses.length; i++){
    if(diasDelMes[i] == 31){
        console.log(`El mes ${meses[i]} posee ${diasDelMes[i]}`)
    }
}

console.log("--------------------------------------------------------------")

console.log("LOS MESES QUE POSEEN 30 DIAS")
for(let i =0; i<meses.length; i++){
    if(diasDelMes[i] == 30){
        console.log(`El mes ${meses[i]} posee ${diasDelMes[i]}`)
    }
}