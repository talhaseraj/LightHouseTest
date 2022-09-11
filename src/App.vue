<template>
  <div style="background-color: #0F0F0F;">
    <div class="page-container" style="justify-content: space-between; height: 100vh;">
      <md-app md-waterfall md-mode="fixed">
        <md-app-toolbar class="md-primary" style="justify-content: space-between; background-color:#0A0406;">
          <img src="@/assets/images/ho_me.png">
          <img src="@/assets/images/ho_lo.png">
          <img src="@/assets/images/ho_li.png">
        </md-app-toolbar>
      </md-app>
      <div style="height: 19vh;">
        <img src="@/assets/images/layer_57.png" style="object-fit: cover; height: inherit;">
      </div>
      <p style="color: #EDB845; padding-left:10px ;">Hot Games</p>

      <hooper :itemsToShow="4" :centerMode="false" pagination="no" style="height: 10vh; padding-left: 11px;">
        <slide>
          <div style="height: inherit; overflow: hidden; padding-right: 10px;">

            <img src="@/assets/images/wild_will.png" style="object-fit: cover; height: inherit;width: 10vh;">

          </div>

        </slide>
        <slide>
          <div style="height: inherit; overflow: hidden; padding-right: 10px;">

            <img src="@/assets/images/winning_mask.png" style="object-fit: cover; height: inherit;width: 10vh;">
          </div>
        </slide>
        <slide>
          <div style="height: inherit; overflow: hidden; padding-right: 10px;">

            <img src="@/assets/images/street.png" style="object-fit: cover; height: inherit;width: 10vh;">
          </div>
        </slide>
        <slide>
          <div style="height: inherit; overflow: hidden; padding-right: 10px;">

            <img src="@/assets/images/dragon_world.png" style="object-fit: cover; height: inherit;width: 10vh;">
          </div>
        </slide>


      </hooper>

      <div style="height: 1vh;" ></div>

      <div class="md-layout" style="justify-content: space-between; vertical-align: middle; align-items: center;">

        <div
          style="padding-left: 10px; width: 40%; align-items: center;justify-content: center; align-content: center;">
          <div class="md-layout-item md-layout md-gutter"
            style="align-items: center; justify-content: center;align-content:center;vertical-align:middle">
            <img src="@/assets/images/ho_mo.png" style="width: 3vh; height: 3vh;">
            <div style="padding-left: 1vh;align-items: center;">
              <div class="md-layout-item" style="">
                <div class="md-layout-item md-layout md-gutter" style="align-items: center;    height: 1.7vh;">
                  <p style="color: #8B8780;font-size: 1.5vh;">KEN</p>
                  <img src="@/assets/images/vip.png" style="width: 2vh; height: 1.5vh; padding-left: 0.2vh;">
                  <p style="color: #EDB845;font-size: 1.5vh; padding-left: 0.2vh;">7</p>
                </div>
              </div>
              <div class="md-layout-item" style="">
                <div class="md-layout-item md-layout md-gutter" style="align-items: baseline; ">
                  <p style="color: #8B8780;font-size: 1.3vh;">$</p>
                  <p style="color: #EDB845;font-size: 1.5vh; padding-left: 0.2vh;">122121233</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div>
          <img src="@/assets/images/divider.png" style="height: 8vh;">
        </div>
        <div style="width: 40%; height: 10%; overflow: hidden;">
          <p style="color: #8B8780; font-size: 12px;">

            <img src="@/assets/images/ho_no.png">
            :Dragon Boat Festival holiday!holiday!holiday!
            holiday!Dragon Boat Festival
          </p>

        </div>
      </div>
      <div style="height: 1vh;" ></div>
      <div class="md-layout" style="justify-content: space-between; vertical-align: top; align-items: flex-start;">
        <div>
          <div>
            <img src="@/assets/images/hous1.png" style="width:7vh; padding-left: 1vh;padding-bottom: 1vh;">
          </div>
          <div><img src="@/assets/images/ho_li2@3x.png"  style="width:7vh; padding-left: 1vh;padding-bottom: 1vh;"></div>
          <div><img src="@/assets/images/ho_sp2@3x.png"  style="width:7vh; padding-left: 1vh;padding-bottom: 1vh;"></div>
          <div><img src="@/assets/images/ho_lo2@3x.png"  style="width:7vh; padding-left: 1vh;padding-bottom: 1vh;"></div>
          <div><img src="@/assets/images/ho_po2@3x.png"  style="width:7vh; padding-left: 1vh;padding-bottom: 1vh;"></div>

          <div><img src="@/assets/images/ho_ga2@3x.png"  style="width:7vh; padding-left: 1vh;padding-bottom: 1vh;"></div>
        </div>

        <div style="width: 80%;">

          <div>
            <img src="@/assets/images/layer_27.png" style="padding-right: 1vh; padding-bottom: 1vh;">
          </div>
          <div>
            <img src="@/assets/images/layer_28.png" style="padding-right: 1vh; padding-bottom: 1vh;">
          </div>
          <div>
            <img src="@/assets/images/layer_29.png" style="padding-right: 1vh; padding-bottom: 1vh;">
          </div>
          <div>
            <img src="@/assets/images/layer_27_0.png" style="padding-right: 1vh; padding-bottom: 1vh;">
          </div>

        </div>


      </div>

      <div id="bottomBarID">
        <md-bottom-bar style="background-color:#1A1A1A; width: 100%;">
          <md-bottom-bar-item style="width: auto;">
            <img src="@/assets/images/ho_ho2.png">
          </md-bottom-bar-item>
          <md-bottom-bar-item>
            <img src="@/assets/images/ho_ac2.png">
          </md-bottom-bar-item>
          <md-bottom-bar-item>
            <img src="@/assets/images/ho_wa2.png">
          </md-bottom-bar-item>
          <md-bottom-bar-item>
            <img src="@/assets/images/ho_co2.png">
          </md-bottom-bar-item>
          <md-bottom-bar-item>
            <img src="@/assets/images/ho_my2.png">
          </md-bottom-bar-item>
        </md-bottom-bar>
      </div>

    </div>
  </div>


</template>

<script>
import { Hooper, Slide } from 'hooper';

export default {
  name: 'App',
  components: {
    Hooper,
    Slide
  }
}
</script>

