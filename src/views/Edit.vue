<template>
  <div id="edit">
    <input type="text" placeholder="Title" id="noteName" v-model="note.name">
    <input type="text" :placeholder="getCurrentDate()" id="noteDate" v-model="note.date">
    <input type="text" placeholder="Subject" id="noteSubject" v-model="note.subject">

    <div id="editorWrapper">
      <div id="editor"></div>
    </div>

    <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
  </div>
</template>

<script>
import Quill from 'quill';
import macro from "@/macros.js";

export default {
  name: 'edit',
  props: ['note'],
  data() {
    return {}
  },

  mounted() {
    window.edit = this;

    var editor = new Quill('#editor', {
      theme: 'snow',
      placeholder: 'good luck...'
    });
    window.editor = editor


    macro("s", true, () => {
      this.$parent.notify('Saved.');
      // TODO: Actually save here
    })
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

  #editorWrapper {
    margin: 2em;
    color: white;
    background-color: white;
    color: black;
    font-family: "Fira Code";
  }

  #editor {
    height: 800px;
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

</style>
