import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Grid from '../template/grid'
import IcoButton from '../template/icoButton'
import If from '../template/if'
import Description from './todoDescription'
import {changeDone, remove} from './todoActions'

const TodoList = props => {

    const renderRow = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td><Description done={todo.done} description={todo.description} /></td>
                <td>
                    <If test={!todo.done}><IcoButton style='success' icon='thumbs-o-up' onClick={() => props.changeDone(todo)}  /></If> <span />
                    <If test={todo.done}><IcoButton style='warning' icon='repeat' onClick={() => props.changeDone(todo)}  /></If> <span />
                    <IcoButton style='danger' icon='trash-o' onClick={() => props.remove(todo._id)}  />
                </td>
            </tr>            
        ))
    }
    
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRow()}
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) =>({list: state.todo.list})
const mapDispatchToProps = (dispatch) => bindActionCreators({changeDone, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)