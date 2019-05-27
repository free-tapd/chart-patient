import Inquiry from '@/page/inquiry/index';
import doctorHome from '@/page/inquiry/doctorHome';
import addSicker from '@/page/inquiry/addSicker';
import addSickerMessage from '@/page/inquiry/addSickerMessage';
import videoSicker from '@/page/inquiry/videoSicker';
import systemMessage from '@/page/inquiry/systemMessage';
import chartList from '@/page/inquiry/chartList';

function loadView(view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `@/page/inquiry/${view}`)
  }
let router=[
    {
        path: '/inquiry',
        component: Inquiry,
      meta:{
          title:"消息"
      }
    },{
        path:"/doctorHome",
        component:resolve => require(['@/page/inquiry/doctorHome'], resolve),
        meta:{
            title:"医生主页"
        }
    },{
        path:"/addSicker",
        // 路由懒加载
        component:resolve=>require(['@/page/inquiry/addSicker'],resolve),
        meta:{
            title:"图文咨询"
        }

    },{
        path:"/addSickerMessage",
        component:addSickerMessage,
        meta:{
            title:"添加接诊人"
        }
    },{
        path:"/videoSicker",
        component:videoSicker,
        meta:{
            title:'视屏咨询'
        }
    },{
        path:"/systemMessage",
        component:systemMessage,
        meta:{
            title:"系统消息"
        }
    },{
        path:"/chartList",
        component:chartList,
        meta:{
            title:"聊天服务"
        }
    }
]
export default router