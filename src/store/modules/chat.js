const state = {
    list:[],
    adminlist:[]
}


const mutations =  {
    //接收消息
    'ADD_CHAT'(state,data) {
        state.list.push(data)
        // console.log(data);
    },
    //在线管理员列表
    'ADMIN_LISt'(state,data) {
        state.adminlist = [...data]
        
    }
}


const actions = {
    
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}