import React, {useState} from 'react'

const List = React.memo(({
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
    handleClick
}) => {

    // const [isEditing, setIsEditing] = useState(false);
    // const [editedTitle, setEditedTitle] = useState(title);

    const handleCompletedChange = (id) => {
        let newTodoData = todoData.map(data => {
            if (data.id === id){
            data.completed = !data.completed;
            }
            return data
    })
    
    //업데이트
    // this.setState({ todoData: newTodoData});
    setTodoData(newTodoData);
    }

    // if(isEditing) {
    //     return(
    //         <div>editing...</div>
    //     )
    // }else{
        return (
            <div key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
                    className={`${
                        snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
                        } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}>
                    <div className='items-center'>
                        <input
                            type="checkbox"
                            onChange={() => handleCompletedChange(id)}
                            defaultChecked={completed}
                        />{" "}
                        <span className={completed ? "line-through" : undefined }>{title}</span>
                    </div>
                    <div className='items-center'>
                        <button className="px-4 py-2 float-right" onClick={() => handleClick(id)}>x</button>
                        {/* <button className="px-4 py-2 float-right" onClick={() => setIsEditing(id)}>Edit</button> */}
                    </div>
            </div>
        )
    }
)

export default List