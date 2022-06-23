const getMonth = (callback) => {
    setTimeout(() =>{
        let error = false
        let month = ['januari','februari','maret','april',
                    'mei','juni','juli','agustus','september',
                    'oktober','november','desember']
            if (!error){
                callback(null, month)
              }else {
                callback (new Error('sorry data not found'),[]) 
              }
    },4000)
}
function showMonth (isError, month){
    if (isError == null && month.length != -1){
        month.map((item, i) => console.log(item))
    }else {
        console.log(isError)
    }
}
    getMonth(showMonth)
    