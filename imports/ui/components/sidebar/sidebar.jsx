import React, { Component } from 'react';

export default class Sidebar extends React.Component{

    render(){
        return(
          <div className='three wide column sideBar'>
            <ul className='sideBarMenu'>
              <li><a href='http://localhost:3000/home'><i className='file text outline icon'></i> Home </a></li>
              <li><a href='http://localhost:3000/insert'><i className='file text outline icon'></i> Insert</a></li>
              <li><a href='http://localhost:3000/show'><i className='file text outline icon'></i> Show</a></li>
              <li><a href='http://localhost:3000/table'><i className='file text outline icon'></i> Table </a></li>
            </ul>
          </div>
        )
    }
}
