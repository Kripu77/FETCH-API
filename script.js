  let x = document.getElementById('demo');
        let y = document.getElementById('mybtn');
        y.addEventListener('click', getUsers);
        function getUsers(){
            fetch('users.json')
            .then((res)=>{return res.json()})
            .then((data)=>{
            console.log(data)
            })
        }
     