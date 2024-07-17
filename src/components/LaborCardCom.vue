<template>
<div class="cart_box_com">
    <h2>适用场景</h2>

    <div class="card_box">
        <div class="cart_list_box">
            
                <div class="null_box">
                    <div class="title_num">01</div>

                    <div class="item_first_box item_boxs">
                    
                    <div class="text">
                       <span>员工</span>
                       <p >Employee Rights and Interests</p>
                       <p><br/></p>
                           <ul class="custom-list">
                       <li>女工三期处理</li>
                       <li>员工工伤处理</li>
                       <li>用工风险处理</li>
                       <li>疾病风险处理</li>
                           </ul>
               </div>
               </div>
              

            </div>
            <div class="null_box">
                    <div class="title_num">02</div>

                    <div class="item_two_box item_boxs">
                    
                    <div class="text">
                       <span>劳务</span>
                       <p >Labor Information</p>
                       <p><br/></p>
                           <ul class="custom-list">
                       <li>基础劳动法务资讯</li>
                       <li>商业保险服务 </li>
                           </ul>
               </div>
               </div>
              

            </div>
            <div class="null_box">  
                    <div class="title_num">03</div>

                    <div class="item_two_box item_boxs">
                    
                    <div class="text">
                       <span>保险</span>
                       <p >Insurance Services</p>
                       <p><br/></p>
                           <ul class="custom-list">
                       <li>工资，社保公积金服务</li>
                       <li>商业保险服务</li>
                           </ul>
               </div>
               </div>
              

            </div>
            <div class="null_box">
                    <div class="title_num">04</div>

                    <div class="item_two_box item_boxs">
                    
                    <div class="text">
                       <span>人事</span>
                       <p >personnel management</p>
                       <p><br/></p>
                           <ul class="custom-list">
                       <li>员工招聘</li>
                       <li>入离职手续办理</li>
                       <li>人事档案管理</li>
                       <li>灵活选择使用期限</li>
                           </ul>
               </div>
               </div>
              

            </div>
        </div> 
    </div>
</div>

</template>
<style scoped lang="scss">
.cart_box_com {
    width: 80%;
    height: 100%;
    margin: 0 auto;

    h2 {
        font-size: 2rem;
        height: 4rem;
        line-height: 6rem;
    }
    .cart_list_box {
        width: 100%;
        height: 34rem;
        display: flex;
        justify-content: space-between;
        $color1: #82C4B3;
        
        .item_boxs {
            width: 25rem;
            height: 37rem;
            display: flex;
            // border: 0.2rem solid $color1;
            // box-shadow: 0 0 0.4rem 0.2rem $color1;
            background-image: linear-gradient( 0deg , rgb(233,239,242) 80%, #82C4B3 .25%);
            .text {
                width: 80%;
                height: 2.2rem;
                font-size: 2.2rem;
                margin: 0 0;
                margin-top: 1.8rem;
                margin-left: 1rem;
                text-align: left;
                line-height: 2.2rem;
                font-weight: 500;
            }
            
            p {
          font-size: 1.4rem;
          width: 100%;
          margin: 0 0;
          display: flex;
          font-weight: 300; /* 设置字体为细 */

        }
        .custom-list {
      list-style: none; /* 移除默认的小圆点 */
      padding: 0;
      margin: 0;
    }

    .custom-list li {
        width: 100%;
      position: relative;
      padding-left: 5rem; /* 为小圆点和文本之间增加距离 */
      margin-bottom: 1.2rem; /* 设置每行之间的间距 */
      font-size: 1.6rem; /* 调整字体大小 */
      margin-left: 2rem;
      font-weight: 400; /* 设置字体为细 */
    }

    .custom-list li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1rem; /* 小圆点的大小 */
      height: 1rem; /* 小圆点的大小 */
      background-color: rgb(97,121,181); /* 小圆点的颜色 */
      border-radius: 50%;
    }
   


        }
        .item_two_box {
  
         
           
        }
        .item_three_box {
           
        }
        .item_four_box {
           
        }

    }
    
}
.null_box{
                background-color: #ffff;
                width: 20rem;
                height: 40rem;
    }

    .title_num {
  position: absolute;
  font-size: 2.8rem;
  margin-top: -3rem;
  margin-left: 1rem;
  z-index: 10;
  font-size: 3rem;
  color: #4b4848;
  font-style: italic;
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
} 
      .card_box{
        margin-top: 5rem;
      }
</style>