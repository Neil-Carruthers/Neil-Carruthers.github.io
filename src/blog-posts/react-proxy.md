---
title: Send API Requests From React to Express During Development
date: '2021-08-15'
featured: false
---
For an e-commerce application I'm working on I have a React client and an Express server and I needed some way of testing the Stripe checkout component during development.  In production, Heroku provides the Express server with a dynamic port number and when it serves the React application the client can correctly call the following code and have it routed to the appropriate port:
<figure>
    <pre>
<span>axios({
    url: 'payment',
    method: 'post',
    data: {
        amount: priceForStripe,
        token
    }
})<span></pre>
    <figcaption>components/stripe-button/stripe-button.component.jsx</figcaption>
</figure>

However, during development, my Express server and my React application were being served from two separate ports on localhost and I needed a way to ensure that API calls made to my POST endpoint were able to find the correct port.  I needed a proxy:

<figure>
    <pre><span>"proxy": "http://localhost:5000",<span></pre>
    <figcaption>client/package.json</figcaption>
</figure>
<figure>
    <pre><span>const port = process.env.PORT || 5000;<span></pre>
    <figcaption>server.js</figcaption>
</figure>

By providing the full address of the Express development server through a "proxy" key in the package.json file of the React application, the client knows to pass all unhandled requests to the Express server for processing.  In production, the Express server uses the PORT variable provided to it by the Heroku dyno, but in development it uses 5000, which is available to React through the proxy.