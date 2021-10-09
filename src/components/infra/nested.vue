<template>
  <draggable class="dragArea" tag="ul" :list="tasks" :group="{ name: 'g1' }" handle=".handle">
    <div  class="task-list" v-for="(el, idx) in tasks" :key="el.name">
      <div v-if="el.tasks.length > 0" class="arr-toggle"><svg-icon name="arr"/></div>
      <div class="document-item">
        <div class="document-item__left">
          <div class="document-item__title">{{ el.name }}</div>
          <div class="document-item__status" v-for="item in el.status">
            <span class="circle" :class="item"></span>
          </div>
          <div class="document-item__desc">{{ el.text }}</div>
        </div>

        <div class="document-item__icons">
          <span class="ic-edit"><svg-icon name="edit"/></span>
          <span class="ic-delete" @click="removeAt(idx)"><svg-icon name="deleted"/></span>
          <span class="ic-move handle"><svg-icon name="move"/></span>
        </div>
      </div>
      <nested-draggable  :tasks="el.tasks" />
    </div>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";


export default {
  props: {
    tasks: {
      required: true,
      type: Array
    }
  },
  data(){
    return{
      active:{
        type: Boolean,
        default: false
      }
    }

  },
  components: {

    draggable
  },
  computed:{
    parent() {
      return this.active[0];
    },
  },
  methods:{
    removeAt(idx) {
      this.tasks.splice(idx, 1);
    },
  },
  name: "nested-draggable"
};
</script>
<style lang="scss" scoped>
.dragArea {
  border: 1px solid #DFE4EF
}
.document-item {
  display: flex;
  &__left {
    flex: 1 1 auto;
    overflow: hidden;
    align-items: center;
    position: relative;
    &:before {
      content: "";
      width: 20px;
      background: linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%);
      height: 100%;
      z-index: 1;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  &__title {
    font-size: 15px;
    font-weight: 500;
  }
  &__status {
    margin-left: 10px;
    .circle {
      margin-left: 6px;
    }
    .st1 {
      background: #FF238D
    }
    .st2 {
      background: #FFB800
    }
    .st3 {
      background: #FF8D23
    }
  }
  &__desc {
    margin-left: 16px;
    font-size: 12px;
    color: #8E9CBB;
    white-space: nowrap;
    flex: 1 1 auto;
  }
  &__icons {

  }
}

</style>
