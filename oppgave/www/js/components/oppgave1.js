function getUsers(){
    fetch('api/fetchUsers.php', { 
    }).then(res=>res.json())
    .then(data=>{
        console.log(data);
        data.forEach(x => {
            var newUserElement = document.createElementById("users");
            newUserElement.setAttribute("id", x.uid);
            newUserElement.innerText = x.uname + "\n" + x.firstName + " " + x.lastName + "\n";
            userContainer.appendChild(newUserElement);

            newUserElement.onclick = function() {getUser(newUserElement.id)};
        });
    })
}

function getUser(e){
    
}