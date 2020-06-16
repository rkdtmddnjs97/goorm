import axios from "axios"

axios.defaults.baseURL = "http://127.0.0.1:8000" //장고 백엔드 도메인?


export default {
    // 모든 글 불러오기
    getAllTobacco(){
        return axios.get('/product/tobacco/');
    },
  
   // 글 작성하기
    createTobacco(data){
        return axios.post('/product/tobacco/',data)
    },
  
    updateTobacco(id,data){
         return axios.put('/product/tobacco/'+String(id)+"/",data)
    },
  
    deleteTobacco(id){
        return axios.delete('/product/tobacco/'+String(id))
    }
  
  }