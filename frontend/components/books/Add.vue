<template>
  <div>
    <el-dialog
      title="Add"
      :visible.sync="visible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :before-close="handleCancel"
      width="40%"
    >
      <IndexErrorHandler
        v-if="error"
        :error="error"
        class="mb-8"
      />

      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        :hide-required-asterisk="true"
      >
        <el-form-item label="Title" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="Description" prop="description">
          <el-input v-model="form.description" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="Author" prop="author">
          <el-input v-model="form.author"></el-input>
        </el-form-item>
        <el-form-item label="Publisher" prop="publisher">
          <el-input v-model="form.publisher"></el-input>
        </el-form-item>
        <el-form-item
          label="Publication Date"
          prop="publicationDate"
        >
          <el-date-picker
            v-model="form.publicationDate"
            type="date"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="Pages" prop="pages">
          <el-input v-model="form.pages"></el-input>
        </el-form-item>
        <el-form-item label="Language" prop="language">
          <el-input v-model="form.language"></el-input>
        </el-form-item>
        <el-form-item label="ISBN" prop="isbn">
          <el-input v-model="form.isbn"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button
          type="text"
          @click="handleCancel"
        >
          Cancel
        </el-button>
        <el-button
          type="primary"
          :loading="loading"
          @click="handleSave('form')"
        >
          Save
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        title: '',
        description: '',
        author: '',
        publisher: '',
        publicationDate: '',
        pages: '',
        language: '',
        isbn: '',
      },
      rules: {
        title: [{ required: true, message: 'This field is required' }],
        description: [{ required: true, message: 'This field is required' }],
        author: [{ required: true, message: 'This field is required' }],
        publisher: [{ required: true, message: 'This field is required' }],
        publicationDate: [{ required: true, message: 'This field is required', trigger: 'change' }],
        pages: [{ required: true, message: 'This field is required' }],
        language: [{ required: true, message: 'This field is required' }],
      },
      loading: false,
      visible: false,
      error: '',
    };
  },
  watch: {
    show(value) {
      this.visible = value;
    },
  },
  methods: {
    ...mapActions('books', ['createBook']),
    handleCancel() {
      this.$refs.form.resetFields();
      this.$emit('close', false);
    },
    handleSave(form) {
      this.$refs[form].validate(async (valid) => {
        if (valid) {
          try {
            this.loading = true;

            await this.createBook({
              title: this.form.title,
              description: this.form.description,
              author: this.form.author,
              publisher: this.form.publisher,
              publicationDate: this.form.publicationDate,
              pages: parseInt(this.form.pages, 10),
              language: this.form.language,
              isbn: this.form.isbn,
            });

            this.loading = false;

            this.$message({
              type: 'success',
              message: 'Data has been saved successfully',
              onClose: setTimeout(() => {
                this.handleCancel();
                this.loading = false;
              }, 1000),
            });

            return true;
          } catch ({ response: { data } }) {
            this.error = data;
            this.loading = false;
            return false;
          }
        } else {
          return false;
        }
      });
    },
  },
};
</script>
