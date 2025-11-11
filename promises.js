// Promises

// fetch('https://api.github.com/users/thiagowq').then(response => {
//     return response.json()
// }).then(body => {
//     console.log(body)
// }).catch(err => {
//     console.log(err)
// }).finally(() => {
//     console.log("terminado")
// })

async function buscaPorDados(){
   
    try {
        let response = await fetch('https://api.github.com/users/thiagowq')
        let body = await response.json()

        console.log(body)
    }
   
    catch(err){
        console.log(err)
    }

    finally {
        console.log("terminou")
    }
    
}

buscaPorDados()