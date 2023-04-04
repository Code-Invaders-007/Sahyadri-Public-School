const stripe = Stripe('pk_test_51MsoG4SDg7tLEBalSJ0FLLqS7IJ6viDm0aN02aXGGB7IZxrnFLEvZvpqUgvjVqepubcRtJSk6fwzxAZiN1emnVPZ00zzyjLcWk');

 

// call the below function when the form is submitted


function handleDonationFormSubmission(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the donor's payment information from the form
    const card = {
        number: document.getElementById('cardNumber').value,
        exp_month: document.getElementById('month-select').value,
        exp_year: document.getElementById('year-select').value,
        cvc: document.getElementById('cvv').value
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
            window.location.href = '/events.html';
        }
    });
}

// call the avbove function when the form is submitted
document.getElementById('donation-form').addEventListener('submit', handleDonationFormSubmission);