
function Actions(props) {


  return (
    <div className="p-3 bg-danger-low">
        
            <div className="input-group mb-3">
             <input 
                   type="text" 
                   className="form-control p-2 input"
                   placeholder="add your task..."
                   value={props.newTask}
                   onChange={(e)=>props.setNewTask(e.target.value)}
                   autoFocus
                   required

              />
              <button className="btn btn-dark" >
                 <img src="./icons/Add.png" alt="task" width={30} onClick={()=>props.addTask()} /> 
              </button>
            </div>

            <hr />
            <div className="input-group mt-2">
             <input 
                   type="search" 
                   className="form-control p-2 border border-light"
                   placeholder="search..."
                   value={props.searchValue}
                   onChange={(e)=>props.setSearchValue(e.target.value)}
                  
              />
             <span className="btn bg-light border border-light" >
                <img src="./icons/Search.png" alt="task" width={30} />
             </span>
            </div>
        <div className="m-1 p-2 flex">
         <h5>Count of tasks : <span>{props.countTask}</span></h5>
         <h5>Completed tasks : <span>{props.completedTask}</span></h5>
        </div>
    </div>
  )
}

export default Actions;