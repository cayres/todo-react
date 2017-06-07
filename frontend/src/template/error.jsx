import React from 'react'

import Grid from './grid'

export default props => {
    
    const renderError = () => {
        const error = props.error || []
        if (error.length > 0){
            return error.map( (erro, index) => (
                <div key={index}>
                    <p className={`bg-${erro.type}`}>{erro.msg}</p>
                </div>
            ))            
        }
        return null
    }

    return (
        <Grid>
            {renderError()}
        </Grid>
    )
}