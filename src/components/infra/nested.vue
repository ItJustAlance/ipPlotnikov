<template>
  <draggable class="dragArea"
             tag="div"
             :list="tasks"
             handle=".handle"
             v-bind="dragOptions"
  >

    <div  class="task-list" v-for="(el, idx) in tasks" :key="el.name">
      <div class="document-item"  :class="{ children : el.tasks.length > 0}">
        <div v-if="el.tasks.length > 0" @click="isToggle(idx)" class="arr-toggle"><svg-icon name="arr"/></div>
        <div class="document-item__left">
          <div class="document-item__title">{{ el.name }}</div>
          <div class="document-item__status" >
            <span v-for="item in el.status" class="circle" :class="item"></span>
          </div>
          <div class="document-item__desc">{{ el.text }}</div>
        </div>
        <div class="document-item__icons">
          <span class="ic-edit"><svg-icon name="edit"/></span>
          <span class="ic-delete" @click="removeAt(idx)"><svg-icon name="deleted"/></span>
          <span class="ic-move handle"><svg-icon name="move"/></span>
        </div>
      </div>
      <nested-draggable v-show="el.show" v-if="isFolder"  :tasks="el.tasks" />
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
      isOpen:{
        type: Boolean,
        default: false
      },
    }
  },
  components: {
    draggable
  },
  computed:{
      dragOptions() {
        return {
          group: "g1",
          disabled: false,
          ghostClass: "ghost",
          dragClass: "drag",
          fallbackClass: "sortable-fallback",
          animation: 90,
          multiDrag: true,
          selectedClass: "multi-drag",
          emptyInsertThreshold: 48 // отступ чтобы вставить
        };
    }
  },
  methods:{
    removeAt(idx) {
      this.tasks.splice(idx, 1);
    },
    isFolder() {
      return this.tasks && this.tasks.length;
    },
    isToggle(idx){
      if (this.isFolder) {
        this.tasks[idx].show = !this.tasks[idx].show;
      }
    }
  },
  name: "nested-draggable"
};
</script>
<style lang="scss" scoped>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.sortable-chosen {
  position: relative;
  border: 1px solid #DFE4EF;
  box-shadow: 0 3px 16px rgba(0, 102, 255, 0.7);
  z-index: 2;
  &:after {
    content:"";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5px;

  }
}
.dragArea {
  .dragArea {
    padding-left: 16px;
  }

}
.task-list {
position: relative;
  background: #fff;

}
.arr-toggle {
  border: 1px solid #D3D8DF;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-180deg);
  position: absolute;
  top: 13px;
  left: 16px;
  cursor: pointer;
  svg {
    width: 8px;
    height: 5px;
    fill: #0066FF;

  }
}
.document-item {
  display: flex;
  border: 1px solid #DFE4EF;
  position: relative;
  padding: 13px 16px;
  &.children {
    padding-left: 50px;
  }
  &__left {
    flex: 1 1 auto;
    overflow: hidden;
    align-items: center;
    position: relative;
    display: flex;
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
    display: inline-flex;
    align-items: center;
    .circle {
      margin-left: 6px;
      width: 8px;
      height: 8px;
      display: inline-block;
      vertical-align: top;
      border-radius: 50%;
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
    .ic-edit {
      margin-left: 23px;
      display: inline-flex;
      align-items: center;
      cursor: pointer;

    }
    .ic-delete {
      margin-left: 23px;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
    }
    .ic-move {
      margin-left: 23px;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
    }
    .svg-icon {
      height: 15px;
      &:hover {
        opacity: .8;
      }

      &--edit {
        fill: #8E9CBB;
        width: 15px;
      }
      &--deleted {
        fill: #FF238D;
        width: 13px;
      }
      &--move {
        fill: #8E9CBB;
        width: 11px;
      }
    }

  }
}

</style>
