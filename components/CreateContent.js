import { Component } from 'react';

class CreateContent extends Component{
    render(){
        console.log('Content render');
      return (
        <article>
              <h2>Create</h2>
              {/* method를 post형태로 하는 것은 Url에 입력한 정보 노출 안되게 */}
              <form action="/create_process" method="post"
              onSubmit={function(e){
                e.preventDefault(); // onSubmit의 기본적인 동작인 페이지가 바뀌는 것을 못하게 함
                this.props.onSubmit(
                  e.target.title.value,
                  e.target.desc.value
                );
                // alert('submit');
              }.bind(this)}>
                <p><input type = "text" name ="title" 
                placeholder="title"></input></p>
                <p>
                  <textarea name="desc" placeholder="description"></textarea>
                </p>
                <p>
                  <input type="submit"></input>
                </p>
              </form>
          </article>
      );
    }
  }

  export default CreateContent;