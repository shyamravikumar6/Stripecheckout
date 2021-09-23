const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      // const price_data = await stripe
      const product = await stripe.products.create({
        name: 'T-shirt',
      });
     
      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: req.body.price,
        currency: 'usd',
      });
   
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // TODO: replace this with the `price` of the product you want to sell
            price: price.id,
            quantity: 1,
          
          },
        ],
        payment_method_types: [
          'card',
        
          
        ],
        
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });

      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
