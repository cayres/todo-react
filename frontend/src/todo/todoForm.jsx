import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Grid from '../template/grid'
import IcoButton from '../template/icoButton'
import {changeDescription, clearDescription, search, add} from './todoActions'


class TodoForm extends Component{
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(e){

        const {add, search, description, clearDescription} = this.props
        if (e.key == 'Enter') {
            e.shiftKey ? search() : add(description)
        }else if (e.key == 'Escape') {
            clearDescription()
        }
    }

    render() {

        const {add, search, description} = this.props

        return (
            <div role='form' className='todoForm'>
                <Grid colsNumber='12 9 10'>
                    <input id='description' className='form-control' onKeyDown={this.keyHandler} onChange={this.props.changeDescription}
                        placeholder='Adicione uma terefa' value={this.props.description}/>
                </Grid>
                <Grid colsNumber='12 3 2'>
                    <IcoButton style='primary' icon='plus' onClick={ () => add(description) } /> <span />
                    <IcoButton style='info' icon='search' onClick={ () => search() } /> <span />
                    <IcoButton style='danger' icon='trash-o' onClick={this.props.clearDescription}  />
                </Grid>        
            </div>
        )
    }
}


const mapStateToProps = (state) => ({description: state.todo.description})
const mapDispatchToProps = (dispatch) => bindActionCreators({changeDescription, clearDescription, search, add}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)