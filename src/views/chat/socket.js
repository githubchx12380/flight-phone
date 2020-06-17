import io from 'socket.io-client'
import { Toast } from 'vant'
const socket = io('http://localhost:1337')
let id = localStorage.getItem('userId')

import store from '../../store/index'
export const  now = () => {
    socket.emit('now',{msg:'正在输入..',id})
}

export const line = () => {
    socket.emit('line',{msg:'在线',id})
}

export const emitContent = (value) => {
    socket.emit('UseremitContent',{value,id})
} 

socket.on('hehe',data => {
  store.commit('chat/ADD_CHAT',data)
}) 


// 管理员列表
socket.on('adminlist',data => {
    console.log(data[0]);
    
    Toast.fail('已为您连接客服:' + data[0].name)
    store.commit('chat/ADMIN_LISt',data)
})
socket.on('Notadmin',data => {
    
    Toast.fail('当前无在线客服')
})


