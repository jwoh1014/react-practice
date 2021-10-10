// eslint-disable-next-line 

import React from 'react';
import {Table} from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'

function Cart (props){
  let state = useSelector((state) => state )
  console.log(state.reducer)
  let dispatch = useDispatch();

  return(
  <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        { state.reducer.map((a,i)=>{
          return (
          <tr key={i}>
            <td>{a.id}</td>
            <td>{a.name}</td>
            <td>{a.quan}</td>
            <button onClick={()=>{ dispatch({type: '수량증가', payload:{name : 'kim'}}) }}> + </button>
            <button onClick={()=>{ dispatch({type: '수량감소'}) }}> - </button>
          </tr>
          )
        })  }
      </Table>  
    { props.state1 === true
     ?(<div className="my-alert2">
        <p>지금 구매하시면 20% 할인</p>
        <button onClick={()=>{ props.dispatch({type: 'alert닫기'}) }}>닫기</button>
       </div>)
          :null
    }
      

    </div>
  )
}

// function 함수명(state){
//     return {
//     state : state.reducer,
//     state1 : state.reducer2
//     }
// }

// export default connect(함수명)(Cart)

export default Cart;