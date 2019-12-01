<template>
  <div id="notification">
    <p class="notification-text">
      {{ text }}
    </p>
  </div>
</template>


<script>
export default {
  name: 'notification',
  data() {
    return {
      text: "",
    }
  },
  methods: {
    show(text) {
      this.text = text;

      let el = document.getElementById("notification");
      if (!el.classList.contains("show")) {
        el.classList.add("show");
      }

      setTimeout(() => {
        el.classList.remove("show");
      }, 3000);
    }
  }
}
</script>

<style>
  #notification {
    height: 50px;

    border-radius: 25px;
    position: fixed;
    bottom: 25px;
    left: 25px;

    background-color: var(--color-accent);
    clip-path: circle(0% at 0 50%);
    transition: clip-path ease 1s;
  }

  .show {
    clip-path: circle(200% at 0 50%) !important;
  }

  .notification-text {
    margin-left: 2em;
    margin-right: 2em;
  }


</style>
