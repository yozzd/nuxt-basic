<template>
  <div class="flex flex-col space-y-8">
    <div>
      <el-button
        type="primary"
        @click="showAddDialog = true"
      >
        <IconsAddLine fill="#FFFFFF" />
        Add
      </el-button>
    </div>

    <el-table
      :data="allBook"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
      >
      </el-table-column>
      <el-table-column
        label="Title"
        width="120"
      >
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column
        property="description"
        label="Description"
        width="120"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        property="author"
        label="Author"
        width="120"
      >
      </el-table-column>
      <el-table-column
        property="publisher"
        label="Publisher"
        width="120"
      >
      </el-table-column>
      <el-table-column
        property="publicationDate"
        label="Publication Date"
        width="140"
        :formatter="(row) => $dateFns.format(new Date(row.publicationDate), 'yyyy-MM-dd')"
      >
      </el-table-column>
      <el-table-column
        property="pages"
        label="Pages"
        width="120"
      >
      </el-table-column>
      <el-table-column
        property="language"
        label="Language"
        width="120"
      >
      </el-table-column>
      <el-table-column
        property="isbn"
        label="ISBN"
      >
      </el-table-column>
    </el-table>

    <BooksAdd
      :show="showAddDialog"
      @close="closeAddDialog"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      showAddDialog: false,
    };
  },
  computed: {
    ...mapGetters('books', ['allBook']),
  },
  async created() {
    if (process.browser) {
      try {
        await this.getAllBook();
      } catch (err) {
        console.log(err);
      }
    }
  },
  methods: {
    ...mapActions('books', ['getAllBook']),
    closeAddDialog(value) {
      this.showAddDialog = value;
    },
    handleSelectionChange() {},
  },
};
</script>
