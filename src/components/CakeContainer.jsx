import {Button, message} from 'antd';
import { buy_cake } from '../redux';
import { useDispatch, useSelector } from 'react-redux';

const CakeContainer = () => {
    const number_of_cake = useSelector(state =>state.number_of_cake);
    const dispatch = useDispatch();

    const handleBtnClick = () =>{
        if(number_of_cake < 1){
            message.info("Sorry! all cakes are sold out.");
        }else {
            try {
            dispatch(buy_cake());
            message.success("Cake sold successfully");
            
          } catch (error) {
            message.error("error found", error.message);
          }
        }
    }

    return (
        <div>
            <h2>Number of cake {number_of_cake}</h2>
            <Button onClick={handleBtnClick}>Buy Cake</Button>
        </div>
    );
}; 

export default CakeContainer ;