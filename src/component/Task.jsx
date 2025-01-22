function Task(props) {

  const listTask=props.tasks.map((ele,index)=>{
    return (
      <div key={index} className="list-task-items">
         <h4 className="wrap">{ele.name}</h4>
         <div>
          {ele.completed===false?(
            <button className="btn btn-success text-dark me-1">
              <img src="./icons/taskCopmleted1.png" alt="task" width={25} onClick={()=>props.HandelCompletedTask(ele.id)}/>
            </button>
          ):(
            <span className="btn me-1">
              <img src="./icons/Checkmark.png" alt="task" width={25} onClick={()=>props.HandelCompletedTask(ele.id)}/>
            </span>
          )}
            
            <button className="btn btn-danger">
              <img src="./icons/Delete.png" alt="delete" width={25} onClick={()=>props.HandelDeleteTask(ele.id)} />
            </button>
          </div>
      </div>
    )
  })
  return (
    <div className="p-2 task">
       <div className="list-task">
           {listTask}           
       </div>
    </div>
  )
}

export default Task;

