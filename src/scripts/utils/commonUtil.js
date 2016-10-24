 var commonUtil = {
     nyScroll() {
         Vue.directive('scroll', value => {
             var that = this;
            that.isAllLoaded(value,value=>{
                new IScroll(value,{
                    click
                 })
            })
         });
     }
 }
 export default commonUtil;