import React, {Component} from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import Form from './todoForm'
import Lista from './todoList'

// const URL = "http://localhost:3003/api/todos"

export default class Todo extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <Form />
                <br/><br/><br/>
                <Lista />
            </div>
        )
    }
}

