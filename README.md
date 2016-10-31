# yintai-vue 

###项目组准备近期更新页面，以及修复一些bug,.项目中的页面是即将替换上线项目的源代码。。。。。。


项目运行
```
 git clone https://github.com/jsochen/yintai-vue.git
 cd yintai-vue 
 npm install
 npm start
 cd prd
 fekit server -n
```

  **现在可以在浏览器上面查看效果了**

# 项目使用到的依赖

```
vue.js
vue-resource.min.js
vue-router.js
vuex.min.js
swiper-3.3.1.min.js
zepto.min.js
iscroll-probe.js
```
### 整体项目使用webpack工具搭建前端环境
# 效果实现

## 首进闪屏

   **开始的界面使用swiper实现首进闪屏**

### 首页横向和纵向滚动使用iscroll-probe.js


## 特卖专场

**特卖专场右边使用swiper构建，当切换到相应的swiper子页的时候使用ajax异步加载，加载完成刷新iscroll**

## 我的银泰

**银泰实体分布点**

**使用百度地图api自己构建需求组件， 使用api接口的查询得到银泰在北京的分布点，在地图添加标记**

