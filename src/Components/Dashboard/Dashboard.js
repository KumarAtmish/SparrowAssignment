import React,{useState} from "react"
import "./Dashboard.css";
import MUIDataTable from "mui-datatables";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsPencil } from "react-icons/bs";
import { AiFillCheckSquare } from "react-icons/ai";
import { HiCheckCircle } from "react-icons/hi"

import { CircularProgress, Snackbar} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import UserImg from "../../Assets/Image/UserImg.jpg"
import Chip from "../../Assets/Image/chip.png"

export default function Dashboard() {
    const [successSnackbar, setSuccessSnackbar] = useState(false);
    const [onLoading, setOnLoading] = useState(false);
    const [errorSnackbar, setErrorSnackbar] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [cardDetails, setCardDetails] =useState({
        nameCard:"",
        securityCode: "",
        cardNumber:"",
        validThrough:""
    });
    const {nameCard, securityCode, cardNumber, validThrough } = cardDetails

    //  change function 
  const onInputChange = (e) => {
    setCardDetails({...cardDetails, [e.target.name]: e.target.value})
  }

   // on submit function
     const cardDetailsHandlerSubmit = async (e) => {
       e.preventDefault();
    //for input value 
      const cardDetailsData = {
        nameCard,
        securityCode,
        cardNumber,
        validThrough

    }
    console.log("card Details Data ", cardDetailsData);
    
    if(cardDetails.nameCard &&
        cardDetails.securityCode &&    
        cardDetails.cardNumber &&    
        cardDetails.validThrough   
        
       ){
        try {
          setOnLoading(true);
         //  const { data } = await axios.post('', )
          
          setOnLoading(false)
          setSuccessSnackbar(true);
        } catch (error) {
          setOnLoading(false);
          setErrorMessage( error.response && error.response.data.message ? error.response.data.message : error.message);
          setErrorSnackbar(true);
        }
       }else{
        setErrorMessage("Please fill all require fields");
        setErrorSnackbar(true);
       }
}

    const columns = ["Prescription Name", "Dosage", "Frequency",{
        label: "",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
          return (
              <div style={{display:"flex",justifyContent:"space-around"}}>
                <BsPencil style={{color:"#467BEE",cursor:"pointer"}}/>
               <RiDeleteBin6Line style={{color:"#DC143C",cursor:"pointer"}} />
              </div>
          )
      }
     }
    }];

    const data = [
     ["Tyienol","500 MG", "Twice a day"],
     ["Avdill","500 MG", "Twice a day"],
     ["Tyienol","500 MG", "Twice a day"],
    ];

const options = {
    filterType: "dropdown",
    responsive: "stacked",
    elevation: 0, //for table shadow box
    filter: false,
    download: false,
    print: false,
    search:false,
    viewColumns:false,
    selectableRows: true, // <===== will turn off checkboxes in rows
    rowsPerPageOptions: [], //for page option
};


    return(
        <div style={{background:"#f7f7f7"}}>
            <div style={{display:"flex",alignItems:"center", marginLeft: "5vw",marginTop: "2vh"}}>
                <IoIosArrowDropleftCircle style={{fontSize: "30px", color:"#467BEE"}} />
                <div className="service-request" >Service Request Dashboard</div>
            </div>
            <hr style={{ marginLeft: "5vw", marginRight: "5vw"}}/>
            <div className="dashboard-container">
                <div className="left-card">
                    <div className="left-cardBox">
                        <img src={UserImg} style={{width:"4vw",height:"10vh", borderRadius:"50%"}} alt="..."/>
                        <div>
                            <div>Prescription Refill</div>
                            <div style={{display: "flex", justifyContent: "space-between",alignItems:"center", marginTop:"1vh"}}>
                                <div >$10</div>
                                <button className="add-btn">+ Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="left-cardBox">
                      <img src={UserImg} style={{width:"4vw",height:"10vh", borderRadius:"50%"}} alt="..."/>
                        <div>
                            <div>Prescription Refill</div>
                            <div style={{display: "flex", justifyContent: "space-between",alignItems:"center", marginTop:"1vh"}}>
                                <div >$10</div>
                                <button className="add-btn">+ Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="left-cardBox">
                        <img src={UserImg} style={{width:"4vw",height:"10vh", borderRadius:"50%"}} alt="..."/>
                        <div>
                            <div>Prescription Refill</div>
                            <div style={{display: "flex", justifyContent: "space-between",alignItems:"center", marginTop:"1vh"}}>
                                <div >$10</div>
                                <button className="add-btn">+ Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="left-cardBox">
                        <img src={UserImg} style={{width:"4vw",height:"10vh", borderRadius:"50%"}} alt="..."/>
                        <div>
                            <div>Prescription Refill</div>
                            <div style={{display: "flex", justifyContent: "space-between",alignItems:"center", marginTop:"1vh"}}>
                                <div >$10</div>
                                <button className="add-btn">+ Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <div className="middle-card">
                    <div style={{display: "flex",justifyContent: "space-around",alignItems:"center",paddingTop:"1vh"}}>
                        <div style={{font: "normal normal 600 15px/20px sans-serif"}}>Select Your Medication(s) that need refills</div>
                        <button className="addMedication-btn">Add Medication</button>
                    </div>
                    <div style={{width: "38vw", marginTop: "1vh",marginLeft: "1vw"}}> 
                      <MUIDataTable
                        data={data}
                        columns={columns}
                        options={options}
                      />
                    </div>
                </div>
                <div className="middle-card">
                    <div style={{textAlign:"left",marginLeft:"1vw",paddingTop:"1vh"}}>
                        <div style={{font: "normal normal 600 15px/20px sans-serif"}}>Subscribe and Save!</div>
                    </div>
                    <div className="tableHeader">
                        <table style={{width:"100%",height:"10vh"}}>
                            <thead style={{font: "normal normal normal 10px/18px sans-serif",color: "#467BEE"}}>
                            <tr>
                                <th></th>
                                <th>Default</th>
                                <th colspan="2" className="Recommended">Recommended</th>
                            </tr>
                            <tr>
                                <th>Available Services</th>
                                <th style={{color:"#000",background:"#FFF"}}>Pay-Per-Service</th>
                                <th style={{color:"#000"}}>Monthly Subscription</th>
                                <th style={{color:"#000",background:"#FFF"}}>Annual Subscription</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th>Price per request</th>
                                <th>$8/month</th>
                                <th>$80/year</th>
                            </tr>
                            </thead>
                            <tbody style={{height: "38vh"}}>
                               <tr>
                                   <td>Prescription Refill</td>
                                   <td style={{color: "#16A34A"}}>$20</td>
                                   <td style={{background: "#EBF1FD"}}><HiCheckCircle color="#467BEE" /></td>
                                   <td><HiCheckCircle color="#467BEE" /></td>
                               </tr>
                               <tr>
                                   <td>Prescription Refill</td>
                                   <td style={{color: "#16A34A"}}>$20</td>
                                   <td style={{background: "#EBF1FD"}}><HiCheckCircle color="#467BEE" /></td>
                                   <td><HiCheckCircle color="#467BEE" /></td>
                               </tr>
                               <tr>
                                   <td>Prescription Refill</td>
                                   <td style={{color: "#16A34A"}}>$20</td>
                                   <td style={{background: "#EBF1FD"}}><HiCheckCircle color="#467BEE" /></td>
                                   <td><HiCheckCircle color="#467BEE" /></td>
                               </tr>
                               <tr>
                                   <td>Prescription Refill</td>
                                   <td style={{color: "#16A34A"}}>$20</td>
                                   <td style={{background: "#EBF1FD"}}><HiCheckCircle color="#467BEE" /></td>
                                   <td><HiCheckCircle color="#467BEE" /></td>
                               </tr>
                               <tr>
                                   <td>Prescription Refill</td>
                                   <td style={{color: "#16A34A"}}>$20</td>
                                   <td style={{background: "#EBF1FD"}}><HiCheckCircle color="#467BEE" /></td>
                                   <td><HiCheckCircle color="#467BEE" /></td>
                               </tr>
                               <tr>
                                   <td></td>
                                   <td><button className="select-btn">Select</button></td>
                                   <td style={{background: "#EBF1FD"}}><button className="select-color-btn">Select</button></td>
                                   <td><button className="select-btn">Select</button></td>
                               </tr>
                            </tbody>
                        </table>
                    </div>
                  </div>
                  <div className="middle-card" style={{height: "74vh"}}>
                    <div style={{textAlign:"left",marginLeft:"1vw",paddingTop:"1vh"}}>
                        <div style={{font: "normal normal 600 15px/20px sans-serif"}}>Add Card</div>
                    </div>
                    <div style={{display: "flex",justifyContent: "space-around",marginTop: "1vh"}}>
                        <div className="AddCard-card1" style={{padding: "1vw"}}>
                            <img src={Chip} alt="..." />
                            <div className="card-number">2188 7390 6055</div>
                            <div style={{display: "flex",justifyContent: "space-between"}}>
                                <div className="card-details">Cardholder Name</div>
                                <div className="card-details">Valid Through</div>
                            </div>
                            <div style={{display: "flex",justifyContent: "space-between"}}>
                                <div className="card-holderName">JACK SPARROW</div>
                                <div className="card-holderName">20 / 24</div>
                            </div>
                        </div>
                        <div className="AddCard-card1" style={{width:"19vw",height: "23vh"}}>
                            <div className="bar-codeChip">
                                <div style={{background:"#F5CE85 0% 0% no-repeat padding-box",width:"15vw",height:"25px"}}></div>
                            </div>
                            <div className="card-details" style={{float: "right",marginRight: "1vw",marginTop: "5vh"}}>Security Code (CVV)</div>
                            <div className="card-holderName" style={{float: "right",marginRight: "-6vw",marginTop: "8vh"}}>360</div>
                        </div>
                    </div>
                    <form onSubmit={(e) => cardDetailsHandlerSubmit(e)}>
                    <div style={{display: "flex", justifyContent: "space-between",padding:"1vw"}}>
                        <div>
                          <div className="lable">Name On Card</div>
                          <input
                          type="text"
                           className="textbox"
                           placeholder="Jack Sparrow"
                           name="nameCard"
                           value={nameCard}
                           onChange={(e) => onInputChange(e)} />
                        </div>
                        <div>
                          <div className="lable">Security Code (CVV)</div>
                          <input
                           type="text"
                           className="textbox"
                           placeholder="350"
                           name="securityCode"
                           value={securityCode}
                           onChange={(e) => onInputChange(e)} />
                        </div>
                    </div>
                    <div style={{textAlign: "left",padding: "1vw"}}>
                        <div className="lable">Card Number</div>
                        <input
                          type="text"
                          className="textbox"
                          placeholder="2188 7390 6055"
                          name="cardNumber"
                          value={cardNumber}
                          onChange={(e) => onInputChange(e)} />
                    </div>
                    <div style={{textAlign: "left",padding: "1vw"}}>
                        <div className="lable">Valid Through</div>
                        <input
                          type="text"
                          className="textbox"
                          placeholder="02 / 24"
                          name="validThrough"
                          value={validThrough}
                          onChange={(e) => onInputChange(e)} />
                    </div>
                    <div style={{textAlign:"right"}}>
                        <button className="cancel-btn">Cancel</button>
                        <button className="saveCard-btn">{onLoading? <CircularProgress /> : "Save Card"}</button>
                    </div>
                    </form>
                    <Snackbar
                   anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                   open={successSnackbar}
                   autoHideDuration={1200}
                   onClose={() => setSuccessSnackbar(false)}
                   >
                   <Alert severity='success' variant='filled'>
                    Card Details Saved 
                   </Alert>
                 </Snackbar>
                 <Snackbar
                   anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                   open={errorSnackbar}
                   autoHideDuration={1600}
                   onClose={() => setErrorSnackbar(false)}
                 >
                   <Alert severity='error' variant='filled'>
                     {errorMessage.substring(0,50)}
                   </Alert>
                 </Snackbar> 
                </div>
                </div>


                <div className="right-card">
                    <div className="cartDetails-title">Cart Details</div>
                    <div className="cartDetails-sub-title">Physician Information</div>
                    <div style={{display:"flex",justifyContent:"space-even",margin: "0 1vw 0 1vw"}}>
                       <div className="name">Physician</div>
                       <div className="name">Dr. Peters</div>
                    </div>
                    <hr />
                    <div className="cartDetails-sub-title">Payment Information</div>
                    <div style={{display:"flex",justifyContent:"space-between",margin: "0 1vw 0 1vw"}}>
                       <div className="name">Prescription Refill</div>
                       <div className="name">$ 10.00</div>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",margin: "0 1vw 0 1vw"}}>
                       <div className="name">Physiotherapy Prescription</div>
                       <div className="name">$ 10.00</div>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",margin: "0 1vw 0 1vw"}}>
                       <div className="name">Service Fee</div>
                       <div className="name">$ 2.00</div>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",margin: "0 1vw 0 1vw"}}>
                       <div className="name" style={{color:"#467BEE"}}><AiFillCheckSquare />Use Express</div>
                       <div className="name" style={{color:"#467BEE"}}>$ 10.00</div>
                    </div>
                    <hr />
                    <div style={{display:"flex",justifyContent:"space-between",margin: "0 1vw 0 1vw"}}>
                       <div className="name">Total Before Tax</div>
                       <div className="name">$ 20.00</div>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",margin: "0 1vw 0 1vw"}}>
                       <div className="name">GST/HST</div>
                       <div className="name">$ 2.00</div>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",margin: "0 1vw 0 1vw"}}>
                       <div className="name" style={{color:"#467BEE", fontWeight:600}}>Total Payment</div>
                       <div className="name" style={{color:"#467BEE", fontWeight:600}} >$ 23.00</div>
                    </div>
                    <hr />
                    <button className="completeRequest-btns">Complete Request</button>
                </div>
            </div>
        </div>
    )
}