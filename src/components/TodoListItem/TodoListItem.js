import { formatDistanceToNow } from 'date-fns'
import { Component } from 'react'
import './TodoListItem.css'


export default class TodoListItem extends Component {

  render (){
    const { label, changeStatusTusk, deleteItem, date, done, editItem } = this.props     
    let timeCreate2 = formatDistanceToNow(date, { includeSeconds: true })     
    
    return (
    <div className="view">
      <input className="toggle" type="checkbox" onChange = { changeStatusTusk } checked = {done}/>
      <label>
        <span className="description">{ label }</span>
        <span className="created">created {timeCreate2} ago</span>
      </label>
      <button className="icon icon-edit" onClick = {editItem}></button>
      <button className="icon icon-destroy" onClick={deleteItem}></button>
    </div>
    )
  }
}


