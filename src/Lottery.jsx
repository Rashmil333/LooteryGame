import React,{useState,useEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import CasinoIcon from '@material-ui/icons/Casino';
import axios from "axios";
import Lotterybutton from "./Lotterybutton";
import Sdatalottery from "./Sdatalottery";



const Lottery=()=>{

	const [number,setnumber]=useState([]);
	const [money,setmoney]=useState(0);
	const [something, setSomething] = useState(0)
	const [myState, setMyState] = useState(0)
	

	
	const displayvalue=(nam)=>{
		console.log(nam);

		setnumber(olddata=>{
			return([...olddata,nam]);
		});
		var arr=number;
		var response=true;
		var first_num=arr[0];
		var n=arr.length;
		var i=0;
		while(n>0){
			if(first_num!=arr[i]){
				response=false;
				break;

			}
			n--;
			i++;


		};
	
		if(response==true){
			setmoney(money+10)
		}
	
		console.log(response);
		console.log(number);


	}
	
	useEffect(()=>{
		var arr=number;
		var response=true;
		var first_num=arr[0];
		var n=arr.length;
		var i=0;
		var count=0;
		while(n>0){
			if(first_num!=arr[i]){
				response=false;
				break;

			}
			else{
				count+=100;
			}
			n--;
			i++;


		};
	
		if(response==false){
			alert(`You lost and your earned money is ${count} rupee`);
			
		}
	
		console.log(response);
		console.log(number);

	})
	
	


	return(<>
		
		 <div className="container">
			<div className="row">
				<div className="col-xl-3 col-lg-3 col-md-3">

				</div>
				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" id="lotterydiv">
					<div className="container">
						<div className="row">
							<div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 ">
								<CasinoIcon style={{color:'#ead9bb'}}/>
							</div>
							<div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
								<h3 style={{color:'#ead9bb'}}>Lottery Game<span style={{color:'#316d3a'}}> Earn Money</span></h3>
								
								
							</div>
							<div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2  ">
								<CasinoIcon style={{color:'#ead9bb'}}/>
							</div>
						</div>	
					</div><br/><br/>
					<div className="container">
					 <div className="row">
					   <div className="col-xl-3 col-md-1">
						
					  </div>
					  <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
						{Sdatalottery.map((cvalue)=>{
							return <Lotterybutton fun={displayvalue} id={cvalue.id}/>
						})}
					  </div>
					   <div className="col-xl-3  col-md-1">
						
					  </div>
					 </div>	
					</div><br/><br/>
				
					
				</div>

					
			</div>

		 </div>

		</>)
}

export default Lottery;


// #891c22-red #ead9bb--buton #316d3a-greenheading  7-#c2201a
