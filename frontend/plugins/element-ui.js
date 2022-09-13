import Vue from 'vue';
import {
  Alert,
  Button,
  ButtonGroup,
  Checkbox,
  DatePicker,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Form,
  FormItem,
  Input,
  Link,
  Loading,
  Message,
  MessageBox,
  Option,
  Pagination,
  Popover,
  Select,
  Table,
  TableColumn,
  Upload,
} from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

locale.use(lang);

Vue.use(Alert);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Checkbox);
Vue.use(DatePicker);
Vue.use(Dialog);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Link);
Vue.use(Option);
Vue.use(Pagination);
Vue.use(Popover);
Vue.use(Select);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Upload);

Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
