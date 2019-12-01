<template>
  <div id="app">

    <nav>
      <ul class="nav-ul">
        <router-link class="nav-item" active-class="active" to="/notes">Notes;</router-link>
        <router-link class="nav-item" active-class="active" to="/edit">New;</router-link>
      </ul>
    </nav>


    <router-view/>

  </div>
</template>

<style>
  body {
    margin: 0;
  }

  #app {
    background-color: #211F30;
    height: 100vh;
    width: 100vw;
  }

  .nav-ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .nav-item {
    display: inline;

    color: rgb(212, 209, 236);

    padding: 2em;
    margin: 0;
    font-family: "Fira Code";
    font-size: 20px;
    cursor: pointer;

    transition: background-color 0.2s;
  }

  .active {
    background-color:rgb(75, 71, 109);
  }
</style>
