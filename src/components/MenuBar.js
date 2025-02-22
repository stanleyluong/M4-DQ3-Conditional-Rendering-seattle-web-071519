import React from 'react'

class MenuBar extends React.Component {

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  constructor() {
    super()
     this.state = {}
  }

  componentDidMount = () => {
   this.initialState()
  }

  initialState = () => {
    const INITIAL_STATE = {
    profileStatus: "item",
    photoStatus: "item",
    cocktailStatus: "item",
    pokemonStatus: "item"
   }
   this.setState(INITIAL_STATE)
  }
  
  handleOnClick = (e) => {
    // console.log("helllo")
    // console.log(e.target.id)
    this.props.onChangeItem(e.target.id)    
   
    
  }

  setActiveItem = (keyword) =>{
    let changedItem = keyword + "Status"
    this.setState((INITIAL_STATE) => ({
      ...INITIAL_STATE,
      changedItem: "item active"

    }))
  }

  render(){
    return (

    <div className="ui four item menu">
      <a className={this.state.profileStatus} id="profile">
        <i className="user large icon" id="profile" onClick={this.handleOnClick}/>
      </a>

      <a className={this.state.photoStatus}  id="photo">
        <i className="photo large icon" id="photo" onClick={this.handleOnClick}/>
      </a>

      <a className={this.state.cocktailStatus}  id="cocktail">
        <i className="cocktail large icon" id="cocktail" onClick={this.handleOnClick}/>
      </a>

      <a className={this.state.pokemonStatus} id="pokemon"> 
        <i className=" themeisle large icon" id="pokemon" onClick={this.handleOnClick}/>
      </a>
    </div>
    )
  }
}

export default MenuBar
