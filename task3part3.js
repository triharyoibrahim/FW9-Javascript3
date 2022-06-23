const lulus = (nilai) => new Promise ((resolve, reject) =>{
    let nilai = 75
    if (nilai>=75){
        resolve("nilai anda "+nilai)
      }else {
        reject("anda tidak lulus")
      }
})

lulus().then((result) => {
    console.log(result)
}).catch((error) =>{
    console.log(error)
})

const cek = hasil => new Promise ((resolve, reject) =>{
  let hasil = 9
  if (hasil %2==0){
    resolve("genap")
  }else{
    reject("Ganjil")
  }
})

cek().then((result)=>{
  console.log(result)
}).catch((error)=>{
  console.log(error)
})
