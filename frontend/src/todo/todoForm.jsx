import React from 'react'
import Grid from '../template/grid'
import IcoButton from '../template/icoButton'


export default props => (
    <div role='form' className='todoForm'>
        <Grid colsNumber='12 9 10'>
            <input id='description' className='form-control' onChange={props.handleChange}
                placeholder='Adicione uma terefa' value={props.description}/>
        </Grid>
        <Grid colsNumber='12 3 2'>
            <IcoButton style='primary' icon='plus' onClick={props.handleAdd} /> <span />
            <IcoButton style='danger' icon='trash-o' onClick={props.clearDescription}  />
        </Grid>        
    </div>
)