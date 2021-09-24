// // import React from 'react';
// // import { loadStripe } from '@stripe/stripe-js';

// // // Make sure to call `loadStripe` outside of a component’s render to avoid
// // // recreating the `Stripe` object on every render.
// // // const stripePromise = loadStripe(
// // //   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// // // );

// // export default function PreviewPage() {
// //   React.useEffect(() => {
// //     // Check to see if this is a redirect back from Checkout
// //     const query = new URLSearchParams(window.location.search);

// //     if (query.get('success')) {
// //       console.log('Order placed! You will receive an email confirmation.');
// //     }

// //     if (query.get('canceled')) {
// //       console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
// //     }
// //   }, []);

// //   return (
// //     <form action="/api/checkout_sessions" method="POST">
// //       <section>
// //         <input  type='number' name='price'  />
// //         <button type="submit" role="link">
// //           Checkout
// //         </button>
// //       </section>
// //       <style jsx>
// //         {`
// //           section {
// //             background: #ffffff;
// //             display: flex;
// //             flex-direction: column;
// //             width: 400px;
// //             height: 112px;
// //             border-radius: 6px;
// //             justify-content: space-between;
            
// //           }
// //           button {
// //             height: 36px;
// //             background: #556cd6;
// //             border-radius: 4px;
// //             color: white;
// //             border: 0;
// //             font-weight: 600;
// //             cursor: pointer;
// //             transition: all 0.2s ease;
// //             box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
// //           }
// //           button:hover {
// //             opacity: 0.8;
// //           }
          
// //         `}
// //       </style>
// //     </form>
// //   );
// // }

// // This example shows you how to set up React Stripe.js and use Elements.
// // Learn how to accept a payment using the official Stripe docs.
// // https://www.stripe.com/docs/payments/integration-builder

// import React  from "react";
// import ElementStripe from "../components/CheckoutForm";




// // const CheckoutForm = () => {
// //   const stripe = useStripe();
// //   const elements = useElements();
// //   const [error, setError] = useState(null);
// //   const [cardComplete, setCardComplete] = useState(false);
// //   const [processing, setProcessing] = useState(false);
// //   const [paymentMethod, setPaymentMethod] = useState(null);
// //   const [billingDetails, setBillingDetails] = useState({
// //     email: "",
// //     phone: "",
// //     name: ""
// //   });

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     if (!stripe || !elements) {
// //       // Stripe.js has not loaded yet. Make sure to disable
// //       // form submission until Stripe.js has loaded.
// //       return;
// //     }

// //     if (error) {
// //       elements.getElement("card").focus();
// //       return;
// //     }

// //     if (cardComplete) {
// //       setProcessing(true);
// //     }

// //     const payload = await stripe.createPaymentMethod({
// //       type: "card",
// //       card: elements.getElement(CardElement),
// //       billing_details: billingDetails
// //     });

// //     setProcessing(false);

// //     if (payload.error) {
// //       setError(payload.error);
// //     } else {
// //       setPaymentMethod(payload.paymentMethod);
// //     }
// //   };

// //   const reset = () => {
// //     setError(null);
// //     setProcessing(false);
// //     setPaymentMethod(null);
// //     setBillingDetails({
// //       email: "",
// //       phone: "",
// //       name: ""
// //     });
// //   };

// //   return paymentMethod ? (
// //     <div className="Result">
// //       <div className="ResultTitle" role="alert">
// //         Payment successful
// //       </div>
// //       <div className="ResultMessage">
// //         Thanks for trying Stripe Elements. No money was charged, but we
// //         generated a PaymentMethod: {paymentMethod.id}
// //       </div>
// //       <ResetButton onClick={reset} />
// //     </div>
// //   ) : (
// //     <form className="Form" onSubmit={handleSubmit}>
// //       <fieldset className="FormGroup">
// //         <Field
// //           label="Name"
// //           id="name"
// //           type="text"
// //           placeholder="Jane Doe"
// //           required
// //           autoComplete="name"
// //           value={billingDetails.name}
// //           onChange={(e) => {
// //             setBillingDetails({ ...billingDetails, name: e.target.value });
// //           }}
// //         />
// //         <Field
// //           label="Email"
// //           id="email"
// //           type="email"
// //           placeholder="janedoe@gmail.com"
// //           required
// //           autoComplete="email"
// //           value={billingDetails.email}
// //           onChange={(e) => {
// //             setBillingDetails({ ...billingDetails, email: e.target.value });
// //           }}
// //         />
// //         <Field
// //           label="Phone"
// //           id="phone"
// //           type="tel"
// //           placeholder="(941) 555-0123"
// //           required
// //           autoComplete="tel"
// //           value={billingDetails.phone}
// //           onChange={(e) => {
// //             setBillingDetails({ ...billingDetails, phone: e.target.value });
// //           }}
// //         />
// //       </fieldset>
// //       <fieldset className="FormGroup">
// //         <CardField
// //           onChange={(e) => {
// //             setError(e.error);
// //             setCardComplete(e.complete);
// //           }}
// //         />
// //       </fieldset>
// //       {error && <ErrorMessage>{error.message}</ErrorMessage>}
// //       <SubmitButton processing={processing} error={error} disabled={!stripe}>
// //         Pay $25
// //       </SubmitButton>
// //     </form>
// //   );
// // };



// const App = () => {
//   return (    
//     <div  >
//       <div style={{height:'inherit',width:'400px' ,display:'flex', justifyContent:'center'}}>
//       <img alt="" 
//       src="https://api.zotto.z-payments.com/images/zotto_logo.png"
    
//       style={{display: "block",border:0}}
//       />
//       </div>
      
//         <ElementStripe/>
      
//      </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from 'react'
import Field from '../components/Field'

const handleSubmit=async(amount) => {
    
    console.log(amount);
  const data = await fetch('/api/checkout',{method: 'POST',body:JSON.stringify({amount}),mode: 'cors' });
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
