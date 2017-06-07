import React, {Component} from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import Error from '../template/error'
import Form from './todoForm'
import Lista from './todoList'

const URL = "http://localhost:3003/api/todos"

export default class Todo extends Component {

    constructor(props){
        super(props)
        this.state ={
            error: [],
            description: '',
            list:[]
        }
        this.originalList = []
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.refresh = this.refresh.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleChangeDone = this.handleChangeDone.bind(this)
        this.clearDescription = this.clearDescription.bind(this)
        this.refresh()
    }

    refresh(){
        Axios.get(`${URL}?sort=-createdAt`).then(resp => {
            this.setState({...this.state, list: resp.data})
            this.originalList = resp.data
            this.setState({...this.state, list: this.listFilter(this.state.description)})
            
        })
    }

    listFilter(value){
        if(value === ("" || undefined || null)) return this.originalList
        return this.originalList.filter(todo => {
            return todo.description.includes(value)
        })
    }

    handleChangeDone(todo){
        todo.done = !todo.done;
        Axios.put(`${URL}/${todo._id}`,todo).then(resp => this.refresh())
    }

    handleRemove(todoID){
        Axios.delete(`${URL}/${todoID}`).then(resp => this.refresh())
    }

    handleChange(e){
        let listFiltered = this.listFilter(e.target.value)
        this.setState({...this.state, description: e.target.value, list: listFiltered})
    }

    handleAdd(){
        let description = this.state.description
        if (description === '') {
            this.showError({type: 'danger', msg:'Não é possível adicionar uma tarefa em branco'})
            return
        }
        Axios.post(URL, {description}).then(resp => this.refresh())
        this.setState({...this.state, description: ''})
    }

    clearAllTimeOuts(){
        var id = window.setTimeout( () => {}, 0);

        while (id--) {
            window.clearTimeout(id);
        }
    }

    showError(erro){

        this.clearAllTimeOuts()

        let error = this.state.error
        error.push(erro)
        console.log(error)
        this.setState({...this.state, error})
        setTimeout(()=>{
            this.setState({...this.state, error: []})
        }, 5000)
        
    }

    clearDescription(e){
        e.target.value = ''
        this.handleChange(e)
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <Error error={this.state.error} />
                <Form handleAdd={this.handleAdd} handleChange={this.handleChange} clearDescription={this.clearDescription} description={this.state.description}/>
                <br/><br/><br/>
                <Lista list={this.state.list} handleRemove={this.handleRemove} handleChangeDone={this.handleChangeDone} />
            </div>
        )
    }
}

