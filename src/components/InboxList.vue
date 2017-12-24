<template>
  <div class="wrapper">
    <el-table
      :data="displayedInboxes"
      stripe style="width: 100%"
      border
      empty-text="Chưa có dữ liệu"
    >
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="question" label="Từ khoá"></el-table-column>
      <el-table-column label="Câu trả lời">
        <template slot-scope="props">
          <p class="answer" v-for="(answer, index) in props.row.answers"><span class="answer-mark">A{{ index + 1}}: </span>{{ answer }}</p>
        </template>
      </el-table-column>
    </el-table>
    <Pagination
      :hasNext="hasNextInboxes"
      :hasPrevious="hasPreviousInboxes"
      @onLoadNext="loadNextPage"
      @onLoadPrevious="loadPreviousPage"
      @onLoadFirst="loadFirstPage"/>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Pagination from '@/components/Pagination'

  export default {
    name: 'InboxList',
    props: ['inboxes'],
    components: { Pagination },
    computed: {
      ...mapGetters([
        'hasNextInboxes',
        'hasPreviousInboxes',
        'currentInboxesPage'
      ]),
      displayedInboxes: function () {
        return this.inboxes.map(({ question, answers }) => {
          return {
            question,
            answers
          }
        })
      }
    },
    methods: {
      ...mapActions([
        'getInboxes'
      ]),
      loadFirstPage () {
        this.getInboxes({ page: 0 })
      },
      loadNextPage () {
        this.getInboxes({ page: this.currentInboxesPage + 1 })
      },
      loadPreviousPage () {
        this.getInboxes({ page: this.currentInboxesPage - 1 })
      }
    }
  }
</script>

<style scoped>
  p.answer {
    margin-top: 0;
    margin-bottom: 0;
  }

  span.answer-mark {
    font-weight: bold;
    font-style: italic;
  }
</style>
