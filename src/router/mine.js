import userMessage from '@/page/mine/userMessage';
import consultList from '@/page/mine/consultList';
import feedback from '@/page/mine/feedback';
import myDoctor from '@/page/mine/myDoctor';
import patientList from '@/page/mine/patientList';
import addPatient from '@/page/mine/addPatient';
import editorPatient from '@/page/mine/editorPatient';

let router=[
    {
        path: '/userMessage',
        component: userMessage,
        meta:{
            title:"用户资料"
        }
    },{
        path:"/consultList",
        component:consultList,
        meta:{
            title:"咨询记录"
        }
    },{
        path:"/feedback",
        component:feedback,
        meta:{
            title:"意见反馈"
        }
    },{
        path:"/myDoctor",
        component:myDoctor,
        meta:{
            title:"我的医生"
        }
    },{
        path:"/patientList",
        component:patientList,
        meta:{
            title:"就诊人列表"
        }
    },{
        path:"/addPatient",
        component:addPatient,
        meta:{
            title:"添加就诊人"
        }
    },{
        path:"/editorPatient",
        component:editorPatient,
        meta:{
            title:"编辑就诊人"
        }
    }
]
export default router