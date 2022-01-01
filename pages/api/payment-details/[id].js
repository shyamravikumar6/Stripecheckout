

export default async function paymentDetailHandler({ query: { id } }, res) {

   const data  = await fetch(`https://paymentz.z-pay.co.uk/payment-details${id}`);
   const paymentDetails = await data.text();
   console.log(paymentDetails);
  if (id) {
    res.status(200).json({paymentDetails})
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}