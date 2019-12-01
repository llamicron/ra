<template>
  <div id="edit">
    <input type="text" placeholder="Note Name" class="bigInput" id="noteName" v-model="noteName">
  </div>
</template>

<script>
export default {
  name: 'edit',
  data() {
    return {
      noteName: "",
    }
  }
}
</script>

<style scoped>
  #edit {
    padding-top: 2em;
    padding-left: 200px;
    padding-right: 200px;
  }

  .bigInput {
    width: 100%;
    height: 75px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    border-bottom: 3px solid rgb(75, 71, 109);

    font-size: 75px;
    color: rgb(166, 164, 187);
  }

  input:focus {
    outline: 0;
  }
</style>
