function TodoItem1(){
  let todoDate = "18/11/2023";
  let todoName = "But Milk";
  return <div className="container">
  <div className="row todo-row">
  <div className="col-4">{todoName}</div>
  <div className="col-4">{todoDate}</div>
  <div className="col-2">
    <button className="btn btn-danger kg-btn">Delete</button>
  </div>
  </div>
</div>
}

export default TodoItem1;