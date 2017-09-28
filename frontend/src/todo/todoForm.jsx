import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Grid from '../template/grid'
import IcoButton from '../template/icoButton'
import {changeDescription} from './todoActions'


const TodoForm = props => (
    <div role='form' className='todoForm'>
        <Grid colsNumber='12 9 10'>
            <input id='description' className='form-control' onChange={props.changeDescription}
                placeholder='Adicione uma terefa' value={props.description}/>
        </Grid>
        <Grid colsNumber='12 3 2'>
            <IcoButton style='primary' icon='plus' onClick={props.handleAdd} /> <span />
            <IcoButton style='danger' icon='trash-o' onClick={props.clearDescription}  />
        </Grid>        
    </div>
)

const mapStateToProps = (state) => ({description: state.todo.description})
const mapDispatchToProps = (dispatch) => bindActionCreators({changeDescription}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)