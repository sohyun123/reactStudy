import { Component } from 'react';


class TOC extends Component{

    // shouldComponentUpdate는 변경되지 않은, 굳이 다시 랜더할 필요 없는 것을 조절
    shouldComponentUpdate(newProps, newState){
        console.log("===>TOC render");

        if(this.props.data === newProps.data){
            return false;
        }
        // 이 함수의 리턴값이 true면 render 호출되고, false면 호출 안됨
        return true;
    }
    render(){
        console.log('TOC render');
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(
            <li key={data[i].id}>
                <a 
                    href={"content/"+data[i].id}

                    // 방법 1
                    // data-id = {data[i].id}
                    // // data- 의 형태는 dataset을 사용하는 형태

                    // onClick={function(e){

                    //     // e.target.dataset.id

                    //     e.preventDefault(); //클릭해도 다른 페이지로 가지 않도록
                    //     this.props.onChangePage(e.target.dataset.id); //data-id에 저장된 값을 넘겨줌
                    // }.bind(this)}


                    // 방법 2
                    onClick={function(id,e){
                        e.preventDefault();
                        this.props.onChangePage(id);
                    }.bind(this,data[i].id)}
                    >{data[i].title}
                </a>
            </li>);
            i = i + 1;
        }
        return (
            <nav>
                <ul>
                    {/* <li><a href="1.html">HTML</a></li>
                    <li><a href="2.html">CSS</a></li>
                    <li><a href="3.html">JavaScript</a></li> */}
                    {lists}
                </ul>
            </nav>
        );
      }
  }


// export 코드를 통해 TOC 클래스를 외부에서 사용할 수 있도록 함.
export default TOC;