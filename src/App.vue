<template>
  <div id="app">

    <nav>
      <ul class="nav-ul">
        <router-link class="nav-item" active-class="active" to="/edit">New;</router-link>
        <router-link class="nav-item" active-class="active" to="/notes">Notes;</router-link>
        <li class="nav-item" id="greeting">Welcome back, Luke.</li>
      </ul>
    </nav>


    <router-view :note="note"/>

  </div>
</template>

<script>
import note from "@/testNote.js";
import disableAutoComplete from "@/disableAutocomplete.js";

export default {
  name: 'app',
  data() {
    return {
      note: note
    }
  },

  mounted() {
    window.note = note;
    window.setTimeout(() => {
      disableAutoComplete();
    }, 500);
  }
}
</script>

<style>
  :root {
    --color-primary: #211F30;
    --color-accent: rgb(75, 71, 109);
    --color-accent-dim: rgb(45, 43, 65);

    --text-primary: rgb(212, 209, 236);
    --text-bright: rgb(240, 239, 245);
  }

  body {
    margin: 0;
    color: var(--text-primary);
  }

  #app {
    background-color: var(--color-primary);
    height: 100vh;
    width: 100vw;
  }

  #greeting {
    margin-left: 22vw;

    border-left: solid 2px var(--color-accent);
    border-right: solid 2px var(--color-accent);
    border-radius: 10px;
  }

  .nav-ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .nav-item {
    display: inline;

    /* color: rgb(212, 209, 236); */
    color: var(--text-primary);

    padding: 2em;
    margin: 0;
    font-family: "Fira Code";
    font-size: 20px;

    transition: background-color 0.2s;
  }

  .active {
    background-color: var(--color-accent);
  }

  input[type=text] {
    padding: 0.2em;
    background-color: rgba(0, 0, 0, 0);

    border: none;
    border-radius: 10px;

    font-family: "Fira Code";
    font-size: 16px;
    color: var(--text-primary);
  }

  input:focus {
    /* border-bottom: 3px solid var(--color-accent); */
    transition: background-color ease-in-out 0.2s;
    background-color: var(--color-accent-dim);
  }

  .container {
    display: grid;

    grid-template-columns: auto auto;
    grid-template-rows: auto auto;

    margin-top: 2em;
    margin-left: 20px;
    margin-right: 20px;
  }

  .container div {
    margin-right: 2em;
  }


  /* Get rid of Chrome's blue outline */
  input:focus {
    outline: 0;
  }

  /* Get rid of Chrome's blue outline */
  textarea:focus {
    outline: 0;
  }
</style>
