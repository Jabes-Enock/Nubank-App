<h1 style="color: rgb(132, 9, 204)">CRUD of users using some interfaces of the Nubank app</h1>

<p>This project is a full stack application where both the front-end and the back-end were developed. A mobile application was developed, that is, I did not focus on the responsive part.</p>
<p>
Before we start, you can see below a gif of this application running.</p>

<div style="display: grid; place-items: center; background: rgb(250, 250, 245); width: 100%">
    <img style="width: 250px;" alt="Gif do app" src="https://github.com/Jabes-Enock/Nubank-App/blob/a73317c18818a77edbfd3b5b308e09fd7f0bade4/Images/Nubank%20App%20Running.gif" />
</div><br><br>

- <a href="#Introduction">Introduction</a>
- [Backend](#backend)
  - <a href="#Dependencies_used">Dependencies used</a>
  - <a href="#Port">What port does the server run on?</a>
- [Frontend](#Frontend)
  - <a href="#Dependencies_used_frontend">Dependencies used</a>
- [App Layout](#App_Layout)

<h2 id="Introduction" style="color: rgb(132, 9, 204)"> Introduction </h2>

<p>
The main folders of this project are: Backend and Frontend, we will talk more about them later. In this project a database like MySql among others was not used. To store the required application data, an array is created when the server is started.</p>

```bash
interface UserData {

    id: string
    nome: string
    sobrenome: string
    CPF: string
    email: string
    senha: string
}

 const users: UserData[] = []

```

therefore, the push method is used to insert a new user.

```bash
 users.push(user)

```

To update some information, we use array syntax to find the information:

```bash
users[userIndex].email = email

```

To delete, we use:

```bash
users.splice( userIndex, 1)

```

<p>Now that we understand how data is stored, let's move on.</p><br>

<h2 id="backend" style="color: rgb(132, 9, 204)"> Backend </h2>
<p>The Backend folder is the API business rule, inside it is the server.ts file that creates the application routes and the system logic and manages the requests made to it. </p><br>

<div id="Dependencies_used">
<h4 style="color: rgb(132, 9, 204)"> Dependencies used </h4>
<br>
<img style="width: 100%;" alt.="Imagem" title="Imagem teste" src="./images/Backend dependecies.svg" /><br><br><br>

- **Express:** To create the server, the framework Node.js Express was used.
  <br>

- **Cors (Cross-Origin Resource Sharing):** Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
  <br>

- **Uuid (Universally Unique IDentifier):** This allows us to relax the security applied to an API. This is done by ignoring the Access-Control-Allow-Origin headers, which specify which origins can access the API.
</div>

- **Typescript:** Is a strongly typed programming language that is based on JavaScript.
</div><br>

<div id="Port">

<h4 style="color: rgb(132, 9, 204)">What port does the server run on? </h4><br>
 <p> <span style="font-weight: bold;color: rgb(132, 9, 204)">http://localhost:3333</span> but if you want you can change that by replacing the number 3333 with the desired port.</p>

```bash
// Backend/src/server.ts

app.listen('3333', () => console.log('Started successfully'))

```

<br>
<p>But remember to change that address in axios.ts file in Frontend/frontend/src/Utils/axios.ts.</p>

```bash
import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:3333',
})


```

</div><br>

<div id="Frontend">
<h2 style="color: rgb(132, 9, 204)"> Frontend </h2>
<p>The frontend folder is where the entire application is created,that is, everything the user sees and interacts with. </p><br>

<div id="Dependencies_used_frontend">
<h4 style="color: rgb(132, 9, 204)"> Dependencies used </h4>
<br>
<img style="width: 100%;" alt.="Imagem" title="Imagem teste" src="./images/Frontend dependecies.svg" />
<br><br><br>

- **Vue.js:** To build the entire application framework.
  <br>

- **Vuex:** It serves to store the data of our application, so that all components can have access to them when necessary.
  <br>

- **Vue Router:** Is the official router of Vue. js, it manages application routes to display the desired page.
  <br>

- **Axios:** A Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser, was used to interact with the backend for the desired route or method.
  <br>

- **Typescript:** Is a strongly typed programming language that is based on JavaScript.
</div><br>

<div>

<div id="App_Layout">
<h2 style="color: rgb(132, 9, 204)"> App Layout </h2>

<div style="display: flex; max-width: 100vw; overflow-x: scroll; padding: 0.5rem; background: rgb(220, 220, 220)">

<img style="max-width: 130px; margin-right: 1rem" alt="Imagem"  src="./images/Login.png" />
<img style="max-width: 130px; margin-right: 1rem" alt="Imagem"  src="./images/Login popup.png" />
<img style="max-width: 130px; margin-right: 1rem" alt="Imagem"  src="./images/Cadastrar.png" />
<img style="max-width: 130px; margin-right: 1rem" alt="Imagem"  src="./images/Cadastrar popup.png" />
<img style="max-width: 130px; margin-right: 1rem" alt="Imagem"  src="./images/Home.png" />
<img style="max-width: 130px; margin-right: 1rem" alt="Imagem"  src="./images/menu.png" />
<img style="max-width: 130px; margin-right: 1rem" alt="Imagem"  src="./images/Deletar.png" />
<img style="max-width: 130px; margin-right: 1rem" alt="Imagem"  src="./images/Deletar popup.png" />
</div>
<div><br><br>

made by **Jabes Enock**
