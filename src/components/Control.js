import { Component } from 'react';

class Control extends Component{
    render(){
        console.log('Subject render');
      return (
        <ul>
        <li><a href="/create" onClick={function(e){
                  e.preventDefault();
                  this.props.onChangeMode('create');
              }.bind(this)}>create</a></li>
        <li><a href="/update" onClick={function(e){
                  e.preventDefault();
                  this.props.onChangeMode('update');
              }.bind(this)}>update</a></li>
        {/* delete은 링크로 하면 새로고침 될 때 지워질 수 있으므로 버튼 형태로 만들어야 함*/}
        <li><input onClick={function(e){
                  e.preventDefault();
                  this.props.onChangeMode('delete');
              }.bind(this)}
              type="button" value="delete"></input></li>

      </ul>
      );
    }
  }

export default Control;