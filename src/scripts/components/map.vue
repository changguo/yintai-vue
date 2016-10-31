<template>
     <div class="map-nav">
         <div class="map-head">
             <h2>银泰实体分布点（地图）</h2>
         </div>
         <div class="map-main">
             <div id="mapContainer"></div>
         </div>
     </div>
</template>
<script>
    export default {
        data() {
            return {
                data: {
                    location: [

                    ]
                }
            }
        },
        ready() {
            var map = new BMap.Map("mapContainer");
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
            map.addControl(new BMap.NavigationControl());
            map.addControl(new BMap.NavigationControl());
            map.addControl(new BMap.ScaleControl());
            map.addControl(new BMap.OverviewMapControl());
            map.addControl(new BMap.MapTypeControl());
            map.addControl(new BMap.GeolocationControl());
            map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用

            var point1 = new BMap.Point(116.404, 39.915);
            var marker = new BMap.Marker(point1);
            map.addOverlay(marker);

            var that = this;

            function myFun() {
                console.log(local.getResults().wr);
                that.data.location = local.getResults().wr; //获取全部智能搜索的结果
                console.log(that.data.location);
                for (var i in that.data.location) {
                    map.centerAndZoom(that.data.location[i].point, 18);
                    var marker = new BMap.Marker(that.data.location[i].point);
                    marker.setTitle(that.data.location[i].title);
                    marker.setLabel(that.data.location[i].title);
                    map.addOverlay(marker); //添加标注
                    map.setZoom(11);
                }
            }
            var local = new BMap.LocalSearch(map, { //智能搜索
                onSearchComplete: myFun
            });
            local.search('银泰');

        }
    }
</script>