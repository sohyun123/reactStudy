import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// class Subject extends Component{
//   render(){
//     return (
//       <header>
//             <h1>{this.props.title}</h1>
//             {this.props.sub}
//         </header>
//     );
//   }
// }

// class TOC extends Component{
//   render(){
//     return (
//       <nav>
//             <ul>
//                 <li><a href="1.html">HTML</a></li>
//                 <li><a href="2.html">CSS</a></li>
//                 <li><a href="3.html">JavaScript</a></li>

//             </ul>
//         </nav>
//     );
//     }
// }

// class Content extends Component{
//   render(){
//     return (
//       <article>
//             <h2>{this.props.title}</h2>
//             {this.props.desc}
//         </article>
//     );
//   }
// }

class App extends Component{
  // constructor가 제일 먼저 실행돼서 state 값을 초기화함
  constructor(props){
    super(props);
    this.max_content_id = 3; // 이 값은 기본적으로 기입된 id의 최댓값 
                            // -> 데이터를 추가할 때 id값을 무엇을 할지 선택하기 위함이므로 굳이 state로 할 필요 없음
    // App이 내부적으로 사용하는 상태는 state 사용
    this.state = {
      mode:'welcome', // state mode 설정해주기. 클릭됐을 때 해당되는 컴포넌트의 랜더함수가 호출되도록
      selected_content_id: 2, //누가 본문에 나올 것인지
      subject:{title:'WEB',sub:'world wide web!'},
      welcome:{title:'Welcome',desc:'Hello, React!'},
      contents:[
        {id:1, title:'HTML',desc:'HTML is for information'},
        {id:2, title:'CSS',desc:'CSS is for design'},
        {id:3, title:'JavaScript',desc:'JavaScript is for interactive'}
      ]
    }
  }

  getReadContent(){
    var i = 0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          // _title = data.title;
          // _desc = data.desc;
          return data;
          break;
        }
        i=i+1;
        // _title = this.state.contents[0].title;
        // _desc = this.state.contents[0].desc;
      }
  }

  getContent(){
    var _title, _desc = null;
    var _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>

    }else if(this.state.mode === 'read'){
      // get ReadContent() 함수로 옮김
      // var i = 0;
      // while(i<this.state.contents.length){
      //   var data = this.state.contents[i];
      //   if(data.id === this.state.selected_content_id){
      //     _title = data.title;
      //     _desc = data.desc;
      //     break;
      //   }
      //   i=i+1;
      //   // _title = this.state.contents[0].title;
      //   // _desc = this.state.contents[0].desc;
      // }   
      // _article = <ReadContent title={_title} desc={_desc}></ReadContent>

      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    }else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title,_desc){
        // add content to this.state.contents -> onSubmit 이라는 props 호출하면 됨
        this.max_content_id = this.max_content_id +1;
        // push 는 원래 데이터를 바꾸기 때문에 위험. 원래 데이터를 바꾸지 않고 새로운 데이터 추가하는 concat 사용하기
        // this.state.contents.push(
        //   {id:this.max_content_id, title:_title,desc:_desc}
        // );
        // this.setState({
        //   contents:this.state.contents
        // });

        // 밑에 Array 로 구현 다르게 함
        // var _contents = this.state.contents.concat(
        //   {id:this.max_content_id, title:_title,desc:_desc}
        // );

        var _contents = Array.from(this.state.contents);
        _contents.push({id:this.max_content_id, title:_title,desc:_desc}
          );

        this.setState({
          contents:_contents,
          mode:'read', //update하면 모드를 바꿈
          selected_content_id:this.max_content_id
        });


        console.log(_title,_desc);
      }.bind(this)}></CreateContent>
    }else if(this.state.mode === 'update'){
      _content = this.getReadContent();
      _article = <UpdateContent 
        data = {_content} 
        onSubmit={
          function(_id,_title,_desc){
            var _contents = Array.from(this.state.contents); //this.state를 복사한 새로운 배열이 만들어짐
            var i = 0;
            while(i<_contents.length){
              if(_contents[i].id === _id){
                _contents[i] = {id:_id,title:_title,desc:_desc};
                break;
              }
              i = i+1;
            }
          this.setState({
            contents:_contents,
            mode:'read' //update하면 모드를 바꿈
          });


        console.log(_title,_desc);
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }

  // props와 state 값이 바뀌면 render 호출됨
  render(){
    console.log('App render');
    


    return (
      <div className="App">
        {/* <Subject title ="WEB" sub="world wide web!"></Subject> */}
        {/* <Subject title ="REACT" sub="this is react!"></Subject> */}
        <Subject 
          title ={this.state.subject.title}
          sub={this.state.subject.sub}
          // onChangePage: 이걸 클릭하면 여기에 걸려있는 함수를 실행시킴
          // 해당 컴포넌트js안에 onChangePage를 받아주는 것이 있어야함
          onChangePage = {function(){
            // alert('hihihi');
            this.setState({mode:'welcome'});
          }.bind(this)}
        >

        </Subject>

          {/* <header>
              <h1><a href="/" onClick ={function(e){
                console.log(e);
                console.log('event in',this);
                // debugger; //이거 하면 이 부분에서 멈춰서 디버깅역할
                e.preventDefault(); //e가 기본적으로 가지고 있는 기능을 멈춤. 여기서는 href가 다른 페이지로 가게 하는걸 막음
                // this.state.mode = 'welcome'; // 이건 안됨
                this.setState({ //state값을 바꿀 때는 setState 사용
                  mode:'welcome'
                }); //근데 e 안에는 this 가 연결돼있지 않아 작동하지 않으므로 이 event가 끝난 직후에 bind(this)해줘야함
              }.bind(this)}>{this.state.subject.title}</a></h1> 
              {/* bind(this)에서의 this는 App 자체
              {this.state.subject.sub}
          </header> */}

        <TOC 
          onChangePage={function(id){
          // alert('hi');
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
        }.bind(this)}
          data = {this.state.contents}
        ></TOC>

        <Control onChangeMode={function(_mode){
          if(_mode === 'delete'){
            if(window.confirm('Really?')){
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while(i<_contents.length)
              {
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i,1); //_contents의 원본을 바꿈. a 부터 n개 자름
                  break;
                }
                i = i+1;
              }
              this.setState({
                mode:'welcome',
                contents:_contents
              });
              alert('deleted!');
            }
          }else{
            this.setState({
              mode:_mode
            });
          }
          
        }.bind(this)}>

        </Control>


        {/* <ReadContent title = {_title} desc ={_desc}></ReadContent> */}
        {/* {_article} -> 간단하게 getContent 함수 만들어서 그 안에 다 넣음*/}
        {this.getContent()}
        {/* <Content title = "HTML" desc ="HTML is HyperText Markup Language."></Content> */}
      </div>
    );
  }
}

export default App;
