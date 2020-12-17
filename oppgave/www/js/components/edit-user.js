import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }
  constructor() {
    super();

  };
  // din kode her
  render(){
    return html`

    <form method="POST">
    <label for="uname">New username</label>
    <input type="text" id="uname" name=uname value = ${this.user.uname} ><br>
    <label for="uname">New firstname</label>
    <input type="text" id="firstName" name=firstName value = ${this.user.firstName}><br>
    <label for="uname">New lastname</label>
    <input type="text" id="lastName" name="lastName value = ${this.user.lastName}><br>
    <label for="password">New password</label>
    <input type="password" id="password" name=password value = ""><br>
    <input type="submit" @click=${this.updateUser} id="submitForm" name="editUser" value="Edit User"></input>
    </form>
    `;
  }

  updateUser(e){
    const data = new FormData(e.target.form);
    fetch('api/updateUser.php', {
      method: 'POST',
      body: dataForm
    }).then(result=>result.json())
    .then(data=>{
      if(data.status == 'success'){
        console.log("User was updated");
      }else{
        console.log("Something went wrong!");
      }
    })
  }
}
customElements.define('edit-user', EditUser);
