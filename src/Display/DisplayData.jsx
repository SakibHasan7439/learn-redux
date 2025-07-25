import { message, Space, Table } from "antd";
import { useDispatch } from "react-redux";
import { delete_todo } from "../Redux/Todo-actions/todoAction";

const DisplayData = ({ todos }) => {
    const dispatch = useDispatch();
    //handle delete todo
    const handleDeleteTodo = (id) =>{
        try {
            dispatch(
                delete_todo(id)
            );
            message.success("Todo Successfully deleted.");
            
        } catch (error) {
            message.error("Having problem while deleting todo");
            console.log("Error message: ", error.message);
        }
    }   

  const columns = [
    {
      title: "User Name",
      dataIndex: "userName",
    },
    {
      title: "Contact Number",
      dataIndex: "userNumber",
    },
    {
      title: "User Description",
      dataIndex: "description",
    },
    {
      title: "Reference",
      dataIndex: "reference",
    },
    {
      title: "Position",
      dataIndex: "position",
    },
    {
      title: "Apply Date",
      dataIndex: "date",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a 
            onClick={()=>handleDeleteTodo(record.id)}
          >Delete</a>
        </Space>
      ),
    },
  ];


  return ( 
    <div>
      <p className="display-title">Total {todos.length} data stored</p>

      {/* display-container */}
      <div className="display-container">
        <Table
          columns={columns}
          dataSource={todos}
          pagination={{ pageSize: 5 }}
        />
      </div>
    </div>
  );
};

export default DisplayData;
