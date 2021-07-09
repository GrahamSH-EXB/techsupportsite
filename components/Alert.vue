<template>
  <div
    class="alert flex flex-row items-center p-5 rounded border-b-2"
    :class="[backgroundClass, borderClass]"
  >
    <div class="alert-content ml-4">
      <div class="alert-title font-semibold text-lg" :class="[titleTextClass]">
        {{ title }}
      </div>
      <div class="alert-description text-sm text-blue-600" :class="[bodyTextClass]">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["type", "title"],
  computed: {
    backgroundClass() {
      switch (this.type) {
        case "info":
          return "bg-blue-200";
        case "error":
            return "bg-red-200"
        default:
          break;
      }
    },
    borderClass() {
      switch (this.type) {
        case "info":
          return "border-blue-300";
        case "error":
          return "border-red-300";
        default:
          break;
      }
    },
    titleTextClass() {
      switch (this.type) {
        case "info":
          return "text-blue-800";
        case "error":
          return "text-red-800";
        default:
          break;
      }
    },
    bodyTextClass() {
      switch (this.type) {
        case "info":
          return "text-blue-600";
        case "error":
          return "text-red-600";
        default:
          break;
      }
    },

  },
};
</script>
