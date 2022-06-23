const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item) => {
                return item === day 
            })
            if (cek){
                resolve(cek)
            }else {
                reject(new Error('hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}
// //a. then catch
cekHariKerja('senin').then((result) => { //mengambil param cek dari resolve
         console.log(result)             //menampilkan result. result = cek
     }).catch((error) => {               //mengambil error dari reject
         console.log(error)              //menampilkan reject
     })

//b. try catch
async function periksa(day){                    //membuat function async dengan nama periksa
    try {
        let result = await cekHariKerja(day)    //memanggil function cekHariKerja dalam variabel result
        console.log(result)                     
    } catch(error){                             //handle error
        console.log(error)                      //menampilkan error
    }
        
}
periksa('minggu')                               