import React from 'react'
import Header from './Header'
import Search from './Search'
import Filter from './Filter'
import Results from './Results'

class App extends React.Component{
  state={
    books:{},
    printTypeFilter:null,
    bookTypeFilter:null
  }

  handleSearchSubmit(e){    
    console.log(e.target);
    e.preventDefault();

  }

  handlePrintTypeFilter(){

  }

  handleBookTypeFilter(){

  }

  render(){
    return (
      <div className='App'>
        <Header />
        <Search handleSearchSubmit={()=>this.handleSearchSubmit()}/>
        <Filter />
        <Results />
      </div>
    )
  }
}

export default App