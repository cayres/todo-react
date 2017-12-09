import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: "DESCRIPTION_CHANGE",
    payload: event.target.value
})

export const clearDescription = () => {
	return [
		{type: "DESCRIPTION_CHANGE", payload: ""},
		search()
	]
}
	

export const search = () => {
	return (dispatch, getState) => {
		const description = getState().todo.description
		const search = description ? `&description__regex=/${description}/` : ''
		axios.get(`${URL}?sort=-createdAt${search}`)
			.then(resp => dispatch({type: "TODO_SEARCHED", payload: resp.data}))

	}
}

export const add = (description) => {
	if (description == '') {
		return showError({type: 'danger', msg:'Não é possível adicionar uma tarefa em branco'})
	}
	return dispatch => {
		axios.post(URL, {description})
			.then(resp => dispatch(clearDescription()))
			.then(resp => dispatch(search()))
	}
}

export const changeDone = (todo) => {
    return dispatch => {
    	axios.put(`${URL}/${todo._id}`,{ ...todo, done: !todo.done } )
    		.then(resp => dispatch(search()))
    }
}

export const remove = (todoID) => {
	return dispatch => {
		axios.delete(`${URL}/${todoID}`)
			.then(resp => dispatch(search()))
	}
	
}


const clearAllTimeOuts = () => {
    let id = window.setTimeout( () => {}, 0);

    while (id--) {
        window.clearTimeout(id);
    }
}

const showError = (erro) => {
	return dispatch => {
		dispatch({type: "SHOW_ERROR", payload: erro})
	}
}
