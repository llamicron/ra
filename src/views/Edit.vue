<template>
  <div id="edit">
    <input type="text" placeholder="Name" id="noteName" v-model="noteName">
    <div class="container">
      <div id="editWindow">
        <textarea v-model="noteContent" id="mainEdit" cols="30" rows="10"></textarea>
      </div>
      <div id="renderWindow">{{ noteContent }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'edit',
  data() {
    return {
      noteName: "",
      noteContent: "",
    }
  }
}
</script>

<style scoped>
  #edit {
    padding-top: 2em;
  }

  #renderWindow {
    white-space: pre-wrap;
    overflow: visible;
    width: 45vw;

    font-family: "Fira Code";
  }

  #editWindow {
    width: 45vw;
  }

  .container {
    display: grid;

    grid-template-columns: auto auto;
    grid-template-rows: auto auto;

    margin-top: 2em;
    margin-left: 3em;
    margin-right: 3em;
  }

  .container div {
    margin-right: 2em;
  }

  #noteName {
    width: 98%;
    height: 50px;

    margin-left: 0.2em;
    margin-right: 0.2em;

    background-color: rgba(0, 0, 0, 0);

    border: none;
    border-bottom: 3px solid var(--color-accent);

    font-size: 50px;
    font-family: "Fira Code";
    color: var(--text-primary);
  }

  #mainEdit {
    width: 40vw;
    height: 60vh;
    padding: 1em;

    border: none;
    background-color: var(--color-accent);

    font-size: 18px;
    font-family: "Fira Code";

    color: var(--text-bright);

  }

  input:focus {
    outline: 0;
  }

  textarea:focus {
    outline: 0;
  }

</style>
