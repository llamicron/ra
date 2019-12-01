<template>
  <div id="edit">
    <input type="text" placeholder="Title" id="noteName" v-model="note.name">
    <input type="text" :placeholder="getCurrentDate()" id="noteDate" v-model="note.date">
    <input type="text" placeholder="Subject" id="noteSubject" v-model="note.subject">
    <div class="container">
      <div id="editWindow">
        <textarea v-model="note.content" placeholder="Note content..." id="mainEdit" cols="30" rows="10"></textarea>
      </div>
      <div id="renderWindow">{{ note.content }}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'edit',
  props: ['note'],
  data() {
    return {}
  },

  mounted() {
    window.edit = this;
  },

  methods: {
    getCurrentDate() {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!

      var yy = today.getFullYear() % 100;
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      return mm + '/' + dd + '/' + yy;
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

  #noteName {
    width: 98%;
    height: 50px;
    font-size: 50px;

    margin-left: 20px;
    margin-right: 0.2em;
  }

  #noteDate {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 5px;
  }

  #mainEdit {
    width: 40vw;
    height: 60vh;
    padding: 1em;

    border: none;
    background-color: var(--color-primary);

    font-size: 18px;
    font-family: "Fira Code";

    color: var(--text-bright);

  }

  #mainEdit:focus {
    transition: background-color 0.2s;
    background-color: var(--color-accent-dim);
  }

</style>
