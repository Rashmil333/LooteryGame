import React,{useState} from 'react';
import CasinoIcon from '@material-ui/icons/Casino';
import Button from '@material-ui/core/Button';
const Lotterybutton=(props)=>{

	const[state,setstate]=useState(<CasinoIcon/>);
	return(<>
			<Button id="lottery_button" onClick={e=>{props.fun(props.id);setstate(props.id);}} >{state}</Button>


		</>);
}

export default Lotterybutton;