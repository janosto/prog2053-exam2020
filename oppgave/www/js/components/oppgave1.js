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
    var user = document.getElementById("user");
    fetch("api/fetchUser.php?id=" + e.toString(),{

    }).then(res=>res.json()).then(data=>{
        document.getElementById("lastName").value = data.lastName;
        document.getElementById("uid").value = e;
        document.getElementById("firstName").value = data.firstName;
        document.getElementById("uname").value = data.uname;
    });
}