import React, { useEffect, useState } from 'react'
import axios from 'axios'

const handleSubmit=async(amount) => {
    
    console.log(amount);
  const data = await axios.post('/api/checkout',{amount});
  console.log(data);
  window.location.href=data.url;
}

function testing() {
 const [amount,setAmount]=useState(150);
const [error,setError]=useState(false);
 
 return (

        <div  className='Form'>
           <fieldset className="FormGroup">
               <div className='FormRow'> 
               <label  className="FormRowLabel">
        Amount
      </label>
            <input className="FormRowInput"   id="amount" type="number"  value={amount} required placeholder="Enter the amount" onChange={(e)=>{setAmount(e.target.value)
              setError(e.target.value<100?true:false);
            }}/>
            </div>
           </fieldset>
           {error&&<span style={{color:'red'}}>Amount should be greater than 100 </span>}
           <button   disabled={error}  className='SubmitButton '  onClick={e=> handleSubmit(amount)}  type='submit'>checkout</button>
           </div>
        
    )
}

export default testing
