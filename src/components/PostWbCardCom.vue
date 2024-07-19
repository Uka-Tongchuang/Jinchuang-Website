<template>
<div class="cart_box_com">
    <h2>适用场景</h2>

    <div class="card_box">
        <div class="cart_list_box">
            
                <div class="null_box">
                    <div class="title_num">01</div>

                    <div class="item_first_box item_boxs">
                    
                    <div class="text">
                       <span>服务类</span>
                       <p >Serve category</p>
                       <p><br/></p>
                           <ul class="custom-list">
                       <li>销售</li>
                       <li>收银</li>
                       <li>服务员</li>
                       <li>临时促销员</li>
                       <li>仓管</li>
                       <li>店员</li>
                       <li>理货</li>
                       <li>店长</li>
                           </ul>
               </div>
               </div>
              

            </div>
            <div class="null_box">
                    <div class="title_num">02</div>

                    <div class="item_two_box item_boxs">
                    
                    <div class="text">
                       <span>业务类</span>
                       <p >Business category</p>
                       <p><br/></p>
                           <ul class="custom-list">
                       <li>业务助理</li>
                       <li>财务助理 </li>
                       <li>人事助理</li>
                       <li>采购助理</li>
                       <li>线上客服</li>
                       <li>电话客服</li>
                       <li>地推</li>
                           </ul>
               </div>
               </div>
              

            </div>
            <div class="null_box">
                    <div class="title_num">03</div>

                    <div class="item_two_box item_boxs">
                    
                    <div class="text">
                       <span>技术类</span>
                       <p >Technical category</p>
                       <p><br/></p>
                           <ul class="custom-list">
                       <li>实习生</li>
                       <li>咖啡师</li>
                       <li>调酒师</li>
                           </ul>
               </div>
               </div>
              

            </div>
            <div class="null_box">
                    <div class="title_num">04</div>

                    <div class="item_two_box item_boxs">
                    
                    <div class="text">
                       <span>人事类</span>
                       <p >Personnel category</p>
                       <p><br/></p>
                           <ul class="custom-list">
                       <li>材料审核</li>
                       <li>行政文秘</li>
                       <li>办公室文员</li>
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
        font-size: 3rem;
       text-align: center;
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
                font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                margin: 0 0;
                margin-top: 1.8rem;
                margin-left: 1rem;
                text-align: left;
                line-height: 2.2rem;
                font-weight: 500;
            }
            
            p {
          font-size: 1.4rem;
          width: 80%;
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
      position: relative;
      padding-left: 6rem; /* 为小圆点和文本之间增加距离 */
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
  font-size: 3rem;
  font-family:'Times New Roman', Times, serif;
  margin-top: -2rem;
  margin-left: 1rem;
  z-index: 10;
  letter-spacing: 10px; /* 设置字体间的间距 */
} 
      .card_box{
        margin-top: 3rem;
      }
</style>