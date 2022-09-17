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
      <el-button
        v-if="$auth.user.role === 'admin'"
        type="danger"
        :disabled="!multipleSelection.length"
        @click="handleDelete"
      >
        <IconsDeleteBin2Line fill="#FFFFFF" />
        Delete
      </el-button>
    </div>

    <IndexErrorHandler
      v-if="error"
      :error="error"
      class="mb-8"
    />

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
          <a
            v-if="$auth.user.role === 'admin'"
            @click="showEdit(scope.row)"
          >{{ scope.row.title }}</a>
          <span v-else>{{ scope.row.title }}</span>
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

    <BooksEdit
      :show="showEditDialog"
      :data="rowEdit"
      @close="closeEditDialog"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      showAddDialog: false,
      showEditDialog: false,
      rowEdit: {},
      multipleSelection: [],
      error: '',
    };
  },
  computed: {
    ...mapGetters('books', ['allBook']),
  },
  async created() {
    if (process.browser) {
      try {
        await this.getAllBook();
      } catch ({ response: { data } }) {
        this.error = data;
      }
    }
  },
  methods: {
    ...mapActions('books', ['getAllBook', 'deleteBook']),
    closeAddDialog(value) {
      this.showAddDialog = value;
    },
    showEdit(row) {
      this.rowEdit = row;
      this.showEditDialog = true;
    },
    closeEditDialog(value) {
      this.showEditDialog = value;
    },
    handleSelectionChange(arr) {
      this.multipleSelection = arr.map((v) => ({ id: v.id }));
    },
    handleDelete() {
      this.$confirm('This will permanently delete the data. Continue?', 'Warning', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        type: 'warning',
      }).then(async () => {
        await this.deleteBook(this.multipleSelection);

        this.$message({
          type: 'success',
          message: 'Data has been delete successfully',
        });
        this.multipleSelection = [];
      }).catch(() => {});
    },
  },
};
</script>
