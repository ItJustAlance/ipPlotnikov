<template>
  <draggable class="dragArea" tag="ul" :list="tasks" :group="{ name: 'g1' }" handle=".handle">
    <div v-for="(el, idx) in tasks" :key="el.name">
      <div class="arr-toggle"></div>

      <div class="document-item">
        <div class="document-item__left">
          <div class="document-item__title">{{ el.name }}</div>
          <div class="document-item__status">
            <span class="circle pink"></span>
            <span class="circle yellow"></span>
            <span class="circle orange"></span>
          </div>
        </div>
        <div class="document-item__desc">Документы, обязательные для всех сотрудников без исключения</div>
        <div class="document-item__icons">
          <span class="ic-edit"><svg-icon name="edit"/></span>
          <span class="ic-delete" @click="removeAt(idx)"><svg-icon name="deleted"/></span>
          <span class="ic-move handle"><svg-icon name="move"/></span>
        </div>

      </div>
      <nested-draggable :tasks="el.tasks" />
    </div>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";
import SvgIcon from "../SvgIcon";

export default {
  props: {
    tasks: {
      required: true,
      type: Array
    }
  },
  components: {
    SvgIcon,
    draggable
  },
  methods:{
    removeAt(idx) {
      this.tasks.splice(idx, 1);
    },
  },
  name: "nested-draggable"
};
</script>
<style scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
  max-width: 300px;
}
ul {list-style: none}
li {background: #adadad;}
li li {background: #e73e3e;}
li li li {background: #d28f14;}
li li li li {background: #14d5dc;}
</style>
