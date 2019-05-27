import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/page/VmHome';
import Index from '@/page/index/index';
import Service from '@/page/service/index';
import Mine from '@/page/mine/index';
import hospitalMessage from '@/page/index/hospitalMessage';
import docutorHome from '@/page/index/docutorHome';
import indexSearch from '@/page/index/indexSearch';
import indexSearch1 from '@/page/index/indexSearch1';
import evaluateList from '@/page/index/evaluateList';
import queryReport from "@/page/index/queryReport"
import queryReportList from "@/page/index/queryReportList"
// queryReportList
// 模拟进入路由
	import hosSection from "@/page/index/hosSection"

// 引入问诊路由
import inquiry from "./inquiry.js"
import person from "./mine.js"
Vue.use(Router);

let router= new Router({
	// mode:'history',
	routes: [
		{
			path: '/index',
			name: 'index',
			component: Index,
			meta:{
				title:"问诊平台"
			}
		},
	
		{
			path: '/service',
			component: Service
		},
		{
			path: '/mine',
			component: Mine,
			meta:{
				title:"用户中心"
			}
		},
		{
			path: '/hospitalMessage',
			component: hospitalMessage
		},
	
	
		{
			path: '/docutorHome',
			component: docutorHome,
			meta:{
				title:"医生主页"
			}
		},{
			path:"/indexSearch",
			component:indexSearch,
			meta:{
				title:"医生列表"
			}
		},{
			path:"/indexSearch1",
			component:indexSearch1,
			meta:{
				title:"搜索"
			}
		},{
			path:"/evaluateList",
			component:evaluateList,
			meta:{
				title:"评价列表"
			}
		},{
			path:"/",
			component:hosSection,
			meta:{
				title:"模拟路由"
			}
		},{
			path:"/queryReport",
			component:queryReport,
			meta:{
				title:"报告查询"
			}
		},{
			path:"/queryReportList",
			component:queryReportList,
			meta:{
				title:"检查报告"
			}
		},
		...inquiry,
		...person
		
	]
});

//动态设置页面标题
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
})

export default router;