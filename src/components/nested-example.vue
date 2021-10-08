<template>
  <div class="section-documents">
      <div class="document-search">
        <input type="text" placeholder="Поиск">
      </div>
      <nested-draggable :tasks="list" />

    <rawDisplayer class="col-3" :value="list" title="List" />
  </div>
</template>

<script>
import nestedDraggable from "./infra/nested";
import rawDisplayer from "./infra/raw-displayer";
export default {
  name: "nested-example",
  display: "Nested",
  order: 1,
  components: {
    nestedDraggable,
    rawDisplayer,
  },
  data() {
    return {
      list: [
        {
          name: "task 1",
          tasks: [
            {
              name: "task 2",
              tasks: []
            }
          ]
        },
        {
          name: "task 3",
          tasks: [
            {
              name: "task 4",
              tasks: []
            }
          ]
        },
        {
          name: "task 5",
          tasks: []
        }
      ]
    };
  }
};
</script>
<style scoped></style>
