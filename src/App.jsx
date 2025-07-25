import {
  Form,
  Input,
  Select,
  Button,
  DatePicker,
  InputNumber,
  Mentions,
  message,
  Radio,
} from "antd";

import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { add_todo } from "./Redux/Todo-actions/todoAction";
import DisplayData from "./Display/DisplayData";

function App() {
  const [form] = useForm();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  // const [allTodos, setAllTodos] = useState([]);
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };

  const handleSubmitForm = (values) => {
    const todo = {
      date:  values.date ? values.date.format('YYYY-MM-DD') : null,
      ...values
    };

    try {
      dispatch(
        add_todo({
          id: Date.now(),
          ...todo,
        })
      );

      message.success("Data successfully submitted in the store");

      form.resetFields();
    } catch (error) {
      message.error("Error found: ", error.message);
    }
  };

  console.log("Values are: ", todos);

  return (
    <>
      <div className="display-title">This is our redux project</div>
      <Form
        {...formItemLayout}
        form={form}
        onFinish={handleSubmitForm}
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          label="User Name"
          name="userName"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="User phone Number"
          name="userNumber"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="User Description"
          name="description"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Any Reference"
          name="reference"
        >
          <Radio.Group
          name="reference"
          defaultValue={1}
          options={[
            { value: 1, label: "Referenced" },
            { value: 2, label: "No Referenced" },
          ]}
        />
          
        </Form.Item>

        <Form.Item
          label="Position to Apply"
          name="position"
          rules={[{ required: true, message: "Please input!" }]} // added required
        >
          <Select>
            <Select.Option value="frontend">Frontend</Select.Option>
            <Select.Option value="backend">Backend</Select.Option>
            <Select.Option value="fullStack">FullStack</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Apply Date"
          name="date"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {/* show data in tabular format with pagination */}
      <div>
        <DisplayData todos={todos} />
      </div>
    </>
  );
}

export default App;
