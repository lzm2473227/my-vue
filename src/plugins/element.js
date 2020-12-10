import Vue from "vue";
import {
  Button,
  //   Carousel,
  //   CarouselItem,
  Pagination,
  InputNumber,
  Message,
  MessageBox,
} from "element-ui";

Vue.use(Button, Button.name);
// Vue.use(Carousel);   element的轮播图组件
// Vue.use(CarouselItem);
Vue.use(Pagination, Pagination.name);
Vue.use(InputNumber);
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
