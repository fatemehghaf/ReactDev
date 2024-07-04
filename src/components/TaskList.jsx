import { DeleteButton, TaskContainer, TaskText } from "./Style"

const TaskList=({newTask,setNewTask}) => {

    if (newTask.length === 0) {
        return <div style={{
            backgroundColor:"#ffb3b3",
            padding:10,
        }}>Nothing to do</div>
      } 

    return(
        <>
        {newTask.map((work, index) => (
            <TaskContainer key={work.title}> 
            <input
            type="checkbox"
            checked={work.done}
            onChange={() => {
                const worksCopy = [...newTask];
                worksCopy[index].done = !worksCopy[index.done];
                setNewTask(worksCopy);
            }} 
            />
            <TaskText done={work.done}>
                {work.title}
            </TaskText>

            <DeleteButton
            onClick={() => {
                const worksCopy = [...newTask];
                worksCopy.splice(index,1);
                setNewTask(worksCopy);
            }}
            >Del
                </DeleteButton>
            
            </TaskContainer>
            

        ))}
        </>
    );
};

export default TaskList;