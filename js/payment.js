<script src="https://js.stripe.com/v3/"></script>

const stripe = Stripe('YOUR_PUBLIC_API_KEY');

function handleDonationFormSubmission(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the donor's payment information from the form
    const card = {
        number: document.getElementById('cardNumber').value,
        exp_month: document.getElementById('expirationMonth').value,
        exp_year: document.getElementById('expirationYear').value,
        cvc: document.getElementById('cvc').value
    };

    // Use the Stripe API to generate a payment token
    stripe.createToken('card', card).then(function (result) {
        if (result.error) {
            // Inform the user if there was an error generating the payment token
            console.error(result.error.message);
        } else {
            // Send the payment token to your server to process the payment
            console.log(result.token.id);
            // Redirect the user to a thank you page
            window.location.href = '/thank-you.html';
        }
    });
}
