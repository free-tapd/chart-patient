// 配置页面信息
export const SET_PAGE_INFO = (state, data) => {
  console.log(data);
};
export const savePlatform=(state,change)=>{
  state.platformName=change
}
export const saveHeader=(state,change)=>{
  state.headerMessage={...change}
}
export const saveTab=(state,change)=>{
  state.tabMessage={...state.tabMessage,...change};
}
export const saveChartList=(state,change)=>{
  // console.log('发送来的信息');
  
  // console.log(change);
  state.chartPannelList=[...state.chartPannelList,change]
}
export const saveSearchInner=(state,change)=>{
  state.searchInner=[...state,change]
}
export const savePicCase=(state,change)=>{
  state.picCase=[...state.picCase,change]
}
export const saveToken=(state,change)=>{
  state.token=change
}
export const saveBackUrl=(state,change)=>{
  state.backurl=change;
}