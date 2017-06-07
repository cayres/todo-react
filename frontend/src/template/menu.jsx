import React from 'react'

export default class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            collapse: true,
            collapseStyle: 'collapse navbar-collapse'
        }
        this.collapse = this.collapse.bind(this)
    }

    collapse(b){    
        if(b){
            this.setState({
                collapse: false, collapseStyle: 'navbar-collapse'
            })
        }else{
            this.setState({
                collapse: true, collapseStyle: 'collapse navbar-collapse'
            })
        }
    }

    render(){
        return (
             <nav className='navbar navbar-inverse bg-inverse'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button type="button" className="navbar-toggle collapsed" onClick={() => this.collapse(this.state.collapse)} >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="#" className='navbar-brand'>
                            <i className='fa fa-calendar-check-o'></i> TodoApp
                        </a>
                    </div>
                    <div id='navbar' className={this.state.collapseStyle}>
                        <ul className='nav navbar-nav'>
                            <li><a href="#/toodos">Tarefas</a></li>
                            <li><a href="#/about">Sobre</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
/*
<nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>*/