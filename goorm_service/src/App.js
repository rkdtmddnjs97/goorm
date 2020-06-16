import React from 'react';
import './App.css';
import api from './api';
import TobaccoView from './components/TobaccoView'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      brand:'',
      name:'',
      price:'',
      nicotine:'',
      tar:'',
      throat_hit:'',
      isMenthol:'',
      tobaccos:[],
    }
  }
  componentDidMount(){
    this.getPosts()
  }
  async getPosts(){
    await api.getAllTobacco().then( result => {
      console.log(result);
      const _tobacco = result
      this.setState({tobaccos:_tobacco.data})
    }) //요청을 보냈는데 바로 넘어감
  }
  
  handlingChange = (event) =>{
    this.setState({[event.target.name]: event.target.value})
  }
  handlingSubmit = async(event) =>{
    event.preventDefault() //event의 고유한 default기능을 막는다
    let result = await api.createTobacco({brand:3,name:this.state.name, price:Number(this.state.price), nicotine:Number(this.state.nicotine),
    tar:Number(this.state.tar),throat_hit:this.state.throat_hit,isMenthol:true})
    this.setState({name:'', price:'', nicotine:'', tar:'',throat_hit:'',isMenthol:''}) //인풋 초기화
    this.getPosts() //refresh
  }

  handlingDelete = async (id) => {
    await api.deleteTobacco(id)
    this.getPosts() //refresh
  }

  render(){
  return (
   <div clasName ='App'>
       <div className='CreateSection'>
         <form className = "TobaccoForm" onSubmit = {this.handlingSubmit}>
            이름:<input name = "name" value={this.state.name} onChange={this.handlingChange}></input>
            가격:<input name ="price" value={this.state.price} onChange={this.handlingChange}></input>
            니코틴:<input name ="nicotine" value={this.state.nicotine} onChange={this.handlingChange}></input>
            타르:<input name = "tar" value={this.state.tar} onChange={this.handlingChange}></input>
            타격감:<input name = "throat_hit" value={this.state.throat_hit} onChange={this.handlingChange}></input>
            {/* 멘솔:<input name = "isMenthol" value={this.state.isMenthol} onChange={this.handlingChange}></input> */}
            <button type = "submit">제출</button>
         </form>
       </div>
       <div className = "ViewSection">
        {
          this.state.tobaccos.map((tobacco)=>
          (
          <div className="list">
            <TobaccoView key = {tobacco.id} id = {tobacco.id} name = {tobacco.name} price ={tobacco.content}
               nicotine ={tobacco.nicotine} tar={tobacco.tar} throat_hit={tobacco.throat_hit} isMenthol={tobacco.isMenthol}
            />
          <button value = {tobacco.id} onClick = { (event) => this.handlingDelete(tobacco.id)}>삭제하기</button>
        </div>       
          ))
        
        }
          
      </div>
   </div>

  );
  }
}

export default App;
