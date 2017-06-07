import React from 'react'

import Grid from '../template/grid'
import IcoButton from '../template/icoButton'
import If from '../template/if'
import Description from './todoDescription'

export default props => {

    const renderRow = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td><Description done={todo.done} description={todo.description} /></td>
                <td>
                    <If test={!todo.done}><IcoButton style='success' icon='thumbs-o-up' onClick={() => props.handleChangeDone(todo)}  /></If> <span />
                    <If test={todo.done}><IcoButton style='warning' icon='repeat' onClick={() => props.handleChangeDone(todo)}  /></If> <span />
                    <IcoButton style='danger' icon='trash-o' onClick={() => props.handleRemove(todo._id)}  />
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