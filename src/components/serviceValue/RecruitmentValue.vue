<template>
  <div class="serviceValue">
    <div class="footer-box">
      <h1>服务价值</h1>
      <div ref="titleList">
        <div
          v-for="(item, index) in props.titleArray"
          :key="item.id"
          @click="toggleExpand(index)"
          class="title"
          :class="{ expanded: item.isExpanded }"
        >
          <div class="title-box">
            <p>{{ item.title }}</p>
            <span>{{ item.isExpanded ? "-" : "+" }}</span>
          </div>
          <div v-if="item.isExpanded" class="details">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted, onUnmounted, defineProps } from "vue";
// 定义组件接收的props类型
type Props = {
  titleArray: any;
};

// 使用defineProps定义props
const props = defineProps<Props>();
const titleList = ref();
const state = reactive({
  items: props.titleArray,
});
const toggleExpand = (index: number) => {
  // 遍历所有项，根据id更新isExpanded
  state.items.forEach((item: any, inde: number) => {
    if (index === inde) {
      //进入到点击的列表
      // 判断当前元素是否隐藏
      console.log(item.isExpanded)
      if (item.isExpanded) {
        titleList.value.children[index].style.height = "5rem";
        item.isExpanded = false;
      } else {
        item.isExpanded = true;
        titleList.value.children[index].style.height = "8rem";
        titleList.value.children[index].style.transition = "height 0.5s ease";
      }
    } else {
      //对其它元素进行处理
      titleList.value.children[inde].style.height = "5rem";
      item.isExpanded = false;
    }
  });
};
</script>
<style lang="scss" scoped>
.serviceValue {
  width: 80%;

  height: 40rem;
  margin: 3rem auto;
  background: url(../../assets/swpOne.jpg);
  display: flex;
  justify-content: space-between;
  .footer-box {
    height: 60%;
    margin-left: 5rem;
    width: calc(40% - 10rem);
    padding: 5rem;
    background-color: #f0f0f0;
    opacity: 0.8;
    h1 {
      text-align: center;
    }
    .title {
      height: 5rem;
      border: 2px solid #82c4b3;
      border-left: none;
      border-right: none;
      .title-box {
        height: 3rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        span {
          font-size: 2rem;
          margin-right: 2rem;
        }
      }
    }
  }
  img {
    width: 50%;
    height: 100%;
  }
}
.expanded {
  height: 5rem;
}
</style>
