//eslint-disable

import React, { useState, useContext } from 'react';
import { Jumbotron, Container, Button, Nav, NavDropdown, Navbar, Form, FormControl } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Data from './Data.js'
import {Link, Route, Switch} from 'react-router-dom'
import Detail from './Detail.js';
import axios from 'axios';
import Cart from './Cart';


function App() {
  
  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10,11,12])

  return (

    <div className="App">

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/detail" >Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>


     <Switch> 

     <Route exact path="/">

        <Jumbotron className="background">
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>

           <div className="container">
              <div className="row">
                <div className="col-md-4">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                  <h4> {shoes[0].title} </h4>
                  <p> {shoes[0].content} & {shoes[0].price}</p>
                </div>
                <div className="col-md-4">
                <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
                  <h4>상품명</h4>
                  <p>상품정보</p>
                </div>
                <div className="col-md-4">
                <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
                  <h4>상품명</h4>
                  <p>상품정보</p>
                </div>

                {/* <Info shoes={shoes[0]} ></Info>
                <Info shoes={shoes[1]} ></Info>
                <Info shoes={shoes[2]} ></Info> */}



                {
                  shoes.map((a, i)=>{
                    return   <Info shoes={shoes[i]} i={i}></Info>
                  })

                }
                {/* <Info shoes={a} ></Info>  <Info shoes={shoes[i]}></Info> */}

              </div>




                <button className="btn btn-primary" onClick = {()=>{
                  axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((result)=>{ console.log(result.data)
                   shoes변경([...shoes, ...result.data]);
                  })
                  .catch(()=>{ 
                    console.log('실패했어요')
                   })
                }}>더보기</button>

        </div>

    </Route>

      <Route path="/detail/:id">

        <Detail shoes={shoes} 재고 = {재고} 재고변경={재고변경}></Detail>

      </Route>
      
      <Route path="/cart">
        <Cart></Cart>
      </Route>

    
    </Switch>


      </div>




  );
}




function Info (props){    
  return (

    <div className="col-md-4">
      {/* <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" /> */}
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i +1 ) +'.jpg'} width="100%" />
      <h4> {props.shoes.title} </h4>
      <p> {props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}





export default App;
