import Header from "./component/Header";
import Actions from "./component/Actions"
import Task from "./component/Task"
import Footer from "./component/Footer";
import { useState } from "react";

function App() {
  
  const [task,setTask]=useState(JSON.parse(localStorage.getItem("Task")));
  const [newTask,setNewTask]=useState('');
  const [searchValue,setSearchValue]=useState('');



  const addTask=()=>{
    const id=task.length ? task[task.length -1].id +1 :1 ;
    const taskOb={
      id:id,
      name:newTask,
      completed:false
    }
    const listTask=[...task,taskOb]
    setTask(listTask);
    window.localStorage.setItem("Task",JSON.stringify(listTask));

    setNewTask('');
  }

  const HandelDeleteTask=(id)=>{
    const taskNew=task.filter((ele)=>ele.id!==id);
    setTask(taskNew);
    window.localStorage.setItem("Task",JSON.stringify(taskNew));

  }

  const HandelCompletedTask=(id)=>{
   const listTaskCopleted=task.map((item)=>item.id===id 
                            ?{...item,completed:!item.completed} 
                            :item);
   setTask(listTaskCopleted);
   window.localStorage.setItem("Task",JSON.stringify(listTaskCopleted));

  }



  return (
    <div className="App">
      <Header />
      <Actions addTask={addTask} countTask={task.length} completedTask={task.filter((ele)=>ele.completed===true).length} setNewTask={setNewTask} newTask={newTask} searchValue={searchValue} setSearchValue={setSearchValue}/>

{/* 
this is search value found ,or get all task
     task.filter((ele)=>((ele.name).toLowerCase()).inclodes(searchValue.toLowerCase()))
 */}
      <Task tasks={task.filter((ele)=>((ele.name).toLowerCase()).includes(searchValue.toLowerCase()))} HandelDeleteTask={HandelDeleteTask} HandelCompletedTask={HandelCompletedTask} />
      <Footer />
    </div>
  );
}

export default App;
