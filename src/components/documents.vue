<template>
  <div class="row">
    <div class="col-8">
      <h3>Nested draggable</h3>
      <documentItem :value="list" />
    </div>

    <rawDisplayer class="col-3" :value="list" title="List" />
  </div>
</template>

<script>
import documentItem from "./documentItem";
import rawDisplayer from "./rawDisplayer";
export default {
  name: "documents",
  display: "documents",
  order: 15,
  components: {
    documentItem,
    rawDisplayer
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
