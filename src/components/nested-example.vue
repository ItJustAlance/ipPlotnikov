<template>
  <div class="section-documents">
      <div class="document-search">
        <svg-icon name="search"/>
        <input type="text" class="input" v-model="inputSearch" placeholder="Поиск">
        <div v-show="inputSearch" @click="inputSearch = ''" class="btn-clear"><svg-icon name="clear" /></div>
      </div>

      <nested-draggable :tasks="filteredSearch" />

    <rawDisplayer class="col-3" :value="filteredSearch" title="List" />
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
      inputSearch: '',
      listFiltered: [],
      tasks: [
        {
          name: "Обязательные для всех",
          req: false,
          status: ['st1', 'st2'],
          text: 'Документы, обязательные для всех сотрудников без исключения',
          show: true,
          tasks: [
            {
              name: "Паспорт",
              req: true,
              status: ['st1'],
              text: 'Для всех',
              show: true,
              tasks: []
            },
            {
              name: "ИНН",
              req: true,
              status: [],
              text: 'Для всех',
              show: true,
              tasks: []
            }
          ]
        },
        {
          name: "Обязательные для трудоустройства",
          req: false,
          status: [],
          text: 'Документы, обязательные для всех сотрудников без исключения',
          show: true,
          tasks: []
        },
        {
          name: "Специальные",
          req: false,
          type: 'title',
          status: [],
          text: '',
          show: true,
          tasks: []
        },
        {
          name: "Тестовое задание кандидата",
          req: false,
          type: '',
          text: 'Россия, Белоруссия, Украина, администратор филиала, повар-сушист, повар-пиццмейкер, повар горячего цеха',
          status: [],
          show: true,
          tasks: []
        },
        {
          name: "Трудовой договор",
          req: false,
          type: '',
          status: ['st1', 'st2', 'st3'],
          text: '',
          show: true,
          tasks: []
        },
        {
          name: "Мед. книжка",
          req: false,
          type: '',
          status: [],
          text: '',
          show: true,
          tasks: []
        },
      ]
    };
  },
  computed:{
    filteredSearch() {
      /*
      this.categoryList.forEach((category) => {
        category.questionList.forEach((qa) => {

          }
        }

       */
      const inpSearch = this.inputSearch.toLowerCase();
      if (inpSearch === '' || !inpSearch) {
        return this.tasks
      } else {
        return this.tasks.filter(
            (hero) =>
                hero.name.toLowerCase().includes(inpSearch)
        )
      }


/*
      const s = this.inputSearch.toLowerCase();
      return this.list.filter(n => {
        return Object.values(n).some(m => m.toString().toLowerCase().includes(s));
      });

      /*
      return this.list.filter(n => {
        return n.some(m => m.toString().toLowerCase().includes(s));
      });

       */
    }
  },
};

</script>
<style lang="scss">
.document-search {
  margin-bottom: 20px;
  border-bottom: 1px solid #BFC9E0;
  padding-bottom: 10px;
  position: relative;
  max-width: 565px;
  padding-left: 40px;
  padding-right: 20px;
  .svg-icon--search {
    fill: #fff;
    position: absolute;
    top: 0;
    left: 0;
  }
  .input {
    border: 0;
    color: #000;
    font-size: 15px;

    width: 100%;
    &::placeholder {
      color: #8E9CBB;
      font-style: italic;
    }
  }
  .btn-clear {
    position: absolute;
    top: 10px;
    right: 0;
    z-index: 1;
    cursor: pointer;
    svg {
      fill: #FF238D;
      width: 12px;
      height: 12px;
    }
  }
}

</style>
