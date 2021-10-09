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
          name: "Обязательные для всех",
          req: false,
          status: ['st1', 'st2'],
          text: 'Документы, обязательные для всех сотрудников без исключения',
          tasks: [
            {
              name: "Паспорт",
              req: true,
              status: ['st1'],
              text: 'Для всех',
              tasks: []
            },
            {
              name: "ИНН",
              req: true,
              status: [],
              text: 'Для всех',
              tasks: []
            }
          ]
        },
        {
          name: "Обязательные для трудоустройства",
          req: false,
          status: [],
          text: 'Документы, обязательные для всех сотрудников без исключения',
          tasks: []
        },
        {
          name: "Специальные",
          req: false,
          type: 'title',
          status: [],
          text: '',
          tasks: []
        },
        {
          name: "Тестовое задание кандидата",
          req: false,
          type: '',
          text: 'Россия, Белоруссия, Украина, администратор филиала, повар-сушист, повар-пиццмейкер, повар горячего цеха',
          status: [],
          tasks: []
        },
        {
          name: "Трудовой договор",
          req: false,
          type: '',
          status: ['st1', 'st2', 'st3'],
          text: '',
          tasks: []
        },
        {
          name: "Мед. книжка",
          req: false,
          type: '',
          status: [],
          text: '',
          tasks: []
        },
      ]
    };
  }
};
</script>
<style>


</style>
