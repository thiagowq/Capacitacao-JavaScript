import axios from 'axios'

//  axios.get('https://api.github.com/users/thiagowq', {
//     email: "teste@email.com",
//     password: "asfdsafsa"
// })
//     .then(response => {
//         console.log(response)
//     })
//     .catch(err => {
//         console.log(err)
//     })

    async function getUser(){
        try{
            const response = await axios.get('https://api.github.com/users/thiagowq', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            console.log(response);
        }catch (error) {
            console.log(error);
        }
    }

    getUser()