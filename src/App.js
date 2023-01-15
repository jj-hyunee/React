import React, {useState, useCallback} from "react";
import "./App.css";
import Form from "./components/Form"
import Lists from "./components/Lists";

export default function App() {
  //첫번째 인수: 변수 이름 / 두번째 인수: State를 정하는 함수
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  
  const handleClick = useCallback((id) => {
    let newTodoData = todoData.filter(data => data.id != id)
    // this.setState({todoData: newTodoData});
    setTodoData(newTodoData)
},
  [todoData]//todoData가 새로 생길 때만 리로드
)


  const handleSubmit = (e) => {
    //form 안에 input을 전송할 때 페이지 리로드 되는 걸 막아줌
    e.preventDefault();

    //새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    // this.setState({ todoData: [...todoData, newTodo], value: ""});
    setTodoData(prev => [...prev, newTodo]);
    setValue("");
  };

  const handleRemoveClick = () => {
    setTodoData([]);
  }
  
  return(
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg: w-3/4 lg: max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>

        <Lists handleClick={handleClick} todoData={todoData} setTodoData={setTodoData} />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />

      </div>
    </div>
  );
}

