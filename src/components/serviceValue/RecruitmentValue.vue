<template>
  <div class="serviceValue">
    <div class="footer-box">
      <p class="title-top">服务价值</p>
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
          <div
            v-if="item.isExpanded"
            class="details animate__animated animate__fadeInDown animate-duration=0.2s"
          >
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
      console.log(item.isExpanded);
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
  width: 100%;
  height: 40rem;
  margin: auto;
  background: url(../../assets/img/meeting.jpg) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  .footer-box {
    height: 75%;
    margin-left: 10%;
    width: calc(40% - 10rem);
    padding: 3rem 5rem;
    background-color: #f0f0f0;
    opacity: 0.8;
    .title-top {
      height: 5rem;
      margin: 0;
      padding: 0;
      font-size: 3rem;
      text-align: center;
      border-bottom: 2px solid #2758e9;
    }
    .title {
      height: 5rem;
      // border: 2px solid #2758E9;
      // border-left: none;
      border-bottom: 2px solid #2758e9;
      .title-box {
        font-size: 1.6rem;
        height: 3rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        span {
          margin-top: 0.5rem;
          font-size: 3rem;
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
.details {
  margin-top: 1rem;
}
</style>
