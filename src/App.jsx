import { Form, 
         Input, 
         Select, 
         Button,  
         DatePicker, 
         InputNumber, 
         Mentions,
         message,
        } from 'antd';

import { useForm } from 'antd/es/form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { add_todo } from './Redux/Todo-actions/todoAction';

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

  const handleSubmitForm = (values) =>{
    try {
      dispatch(add_todo({
      id: Date.now(),
      ...values,
    }));

    message.success("Data successfully submitted in the store");   
    
    form.resetFields();

    } catch (error) {
      message.error("Error found: ", error.message);
    }
  }

  console.log("Values are: ", todos);

  return (
    <>
      <div>This is our redux project</div>
      <Form
        {...formItemLayout}
        form={form}
        onFinish={handleSubmitForm}
        style={{ maxWidth: 600 }}      >

        <Form.Item
          label="Input"
          name="Input"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="InputNumber"
          name="InputNumber"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="TextArea"
          name="TextArea"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Mentions"
          name="Mentions"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Mentions />
        </Form.Item>

        <Form.Item
          label="Select"
          name="Select"
          rules={[{ message: "Please input!" }]}
        >
            <Select.Option value="sample">Pabna</Select.Option>
            <Select.Option value="sample">Barishal</Select.Option>
            <Select.Option value="sample">Middle of none</Select.Option>
          <Select />
        </Form.Item>

        <Form.Item
          label="DatePicker"
          name="DatePicker"
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
    </>
  );
}

export default App;
