<template>
  <div class="pagination">
    <button @click="setCurrentPage(myCurrentPage - 1)">上一页</button>
    <button class="active" @click="setCurrentPage(1)">1</button>
    <button v-show="startEnd.start > 2">...</button>

    <button
      v-for="item in mapBtnCount"
      :key="item"
      @click="setCurrentPage(startEnd.start + item - 1)"
    >
      {{ startEnd.start + item - 1 }}
    </button>

    <button v-show="startEnd.end < totalPages - 1">...</button>

    <button v-show="totalPages > 1" @click="setCurrentPage(totalPages)">
      {{ totalPages }}
    </button>
    <button @click="setCurrentPage(myCurrentPage + 1)">下一页</button>
    <button>总数：{{ total }}</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    //   当前页码
    currentPage: {
      type: Number,
      default: 1,
    },
    //显示按钮
    pagerCount: {
      type: Number,
      default: 7,
      validator(val) {
        return val >= 5 && val <= 21 && val % 2 === 1;
      },
    },
    //每页条数
    pageSize: {
      type: Number,
      default: 10,
    },
    //总数
    total: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      //为了方便修改myCurrentPage，定义data数据
      // 原因是props数据只能读写，不能修改
      myCurrentPage: this.currentPage,
    };
  },
  watch: {
    myCurrentPage(currentPage) {
      this.$emit("current-change", currentPage);
    },
    currentPage(currentPage){
        this.myCurrentPage = currentPage
    }
  },
  computed: {
    //总页面
    totalPages() {
      //这里要向上取整
      return Math.ceil(this.total / this.pageSize);
    },
    //这里是计算中间按钮的开始和结束按钮值
    startEnd() {
      //收集所有参与计算的参数   ，使用this解构出来，好缓存一份
      const { myCurrentPage, pagerCount, totalPages } = this;
      //   中间start-end总计的按钮数量（不包括开头和结尾）
      const count = pagerCount - 2;
      //   中间的一半   除了中间那个自己以外的一半
      const halfCount = Math.floor(count / 2);

      let start, end;
      //start的值  my - halfCount就行
      //end的值   start + my - 2 - 1       start 加上  (my减去两边的在减去自己)
      //开始计算
      //start有几种情况，所以要判断几种情况
      if (myCurrentPage >= totalPages - halfCount) {
        //不正常的情况
        start = totalPages - count;
      } else {
        start = myCurrentPage - halfCount;
        //这个是正常的情况
      }
      if (start <= 1) {
        start = 2;
      }

      //正常情况
      end = start + count - 1;
      //下面是特殊情况
      if (end >= totalPages) {
        end = totalPages - 1;
      }
      // 接收一个返回值
      return {
        start,
        end,
      };
    },
    mapBtnCount() {
      const { start, end } = this.startEnd;
      const count = end - start + 1;
      return count >= 1 ? count : 0;
    },
  },
  methods: {
    setCurrentPage(currentPage) {
      this.myCurrentPage = currentPage;
    },
  },
};
</script>

<style lang='less' scoped>
.pagination {
  display: flex;
  white-space: nowrap;
  font-weight: 700;
  button {
    margin: 0 5px;
    padding: 0 4px;
    font-size: 13px;
    min-width: 30px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: none;
    outline: none;
    display: block;
    background-color: #f4f4f5;
    color: #606266;
    border-radius: 2px;
  }
}

button.active {
  background-color: #409eff;
  color: #fff;
}
</style>