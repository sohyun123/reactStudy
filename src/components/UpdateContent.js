import { Component } from 'react';

class UpdateContent extends Component{
    constructor(props){
      super(props);
      this.state = {
        id: this.props.data.id,
        title:this.props.data.title,
        desc:this.props.data.desc
      }
      this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e){
      this.setState({[e.target.name]:e.target.value});
    }
    render(){
        console.log('UpdateContent render');
      return (
        <article>
              <h2>Update</h2>
              {/* method를 post형태로 하는 것은 Url에 입력한 정보 노출 안되게 */}
              <form action="/create_process" method="post"
              onSubmit={function(e){
                e.preventDefault(); // onSubmit의 기본적인 동작인 페이지가 바뀌는 것을 못하게 함
                this.props.onSubmit(
                  // e.target.title.value,
                  // e.target.desc.value
                  this.state.id,
                  this.state.title,
                  this.state.desc
                );
                // alert('submit');
              }.bind(this)}>
                <input type="hidden" name="id" value={this.state.id}>

                </input>
                <p>
                  <input 
                    type = "text" 
                    name ="title" 
                    placeholder="title"
                    value = {this.state.title} //this를 정의해줘야함
                    // onChange = {function(e){
                    //   // console.log(e.target.value);
                    //   // 입력한 내용이 바뀌면서 text가 동적으로 바뀜
                    //   this.setState({
                    //     title:e.target.value
                    //   });
                    // }.bind(this)}
                    onChange ={this.inputFormHandler}
                  >
                  </input>
                </p>
                <p>
                  <textarea 
                    name="desc" 
                    placeholder="description" 
                    value={this.state.desc}
                    // onChange ={function(e){
                    //   this.setState({
                    //     title:e.target.value
                    //   });
                    // }.bind(this)}
                    onChange ={this.inputFormHandler}


                    >

                  </textarea>
                </p>
                <p>
                  <input type="submit"></input>
                </p>
              </form>
          </article>
      );
    }
  }

  export default UpdateContent;