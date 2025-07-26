import { message, Space, Table, Popconfirm, Button, Dropdown, Select } from "antd";
import { useDispatch } from "react-redux";
import { delete_todo, update_todo_status } from "../Redux/Todo-actions/todoAction";

const DisplayData = ({ todos, provideId }) => {
  const dispatch = useDispatch();

  // handle delete cancel
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  //handle delete todo
  const handleDeleteTodo = (id) => {
    console.log(id);
    try {
      const result = dispatch(delete_todo(id));
      console.log("dispatch result is: ",result);
      message.success("Todo Successfully deleted.");
    } catch (error) {
      message.error("Having problem while deleting todo");
      console.log("Error message: ", error.message);
    }
  };

  // handle status change
  const handleStatusChange = (newStatus, id) =>{
    try {
      dispatch(update_todo_status(id, newStatus));
      message.success("Status successfully updated");

    } catch (error) {
      message.error("Error occur");
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
          {
            <Popconfirm
              title="Delete the task"
              description="Are you sure you want to delete this task?"
              onConfirm={() => handleDeleteTodo(record.id)}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              {console.log(record)}
              <a>Delete</a>
            </Popconfirm>
          }
          <a onClick={() => provideId(record.id)}>Update</a>
        </Space>
      ),
    },
    {
      title: "Status",
      key: "status",
      render: (_, record) =>{
        console.log(record.status );
        return (
          <Space size='middle'>
          <Select 
            value={record.status || "Pending"}
            onChange={(value)=>handleStatusChange(value, record.id)}
            options={[
              {value: "pending", label: "Pending"},
              {value: "in-progress", label: "In Progress"},
              {value: "hired", label: "Hired"},
              {value: "rejected", label: "Rejected"},
            ]}
          />
        </Space>
        )
      }
    }
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
