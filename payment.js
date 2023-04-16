const stripe = Stripe('pk_test_51MsoG4SDg7tLEBalSJ0FLLqS7IJ6viDm0aN02aXGGB7IZxrnFLEvZvpqUgvjVqepubcRtJSk6fwzxAZiN1emnVPZ00zzyjLcWk');
const cardnum = document.querySelector('#cardnum')
const cardexp = document.querySelector('#cardexp')
const cardcvc = document.querySelector('#cardcvc')
const btn = document.querySelector('#pay_btn')
const finalstat = document.querySelector('.pay_state')
const cardstyle = {
    base: {
        iconColor: 'rgb(128, 128, 255)',
        color: 'rgb(128, 128, 255)',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        '::placeholder': { color: '#757593' },

    },
    complete: {
        color: 'green',
    },
}

const elements = stripe.elements()

const CardnumElm = elements.create('cardNumber', { showIcon: true, iconStyle: 'solid', style: cardstyle })
const CardexpElm = elements.create('cardExpiry', { disabled: true, style: cardstyle })
const CardcvcElm = elements.create('cardCvc', { disabled: true, style: cardstyle })
CardnumElm.mount('#cardnum')
CardexpElm.mount('#cardexp')
CardcvcElm.mount('#cardcvc')



CardnumElm.on('change', (e) => {
    if (e.complete) {
        CardexpElm.update({ disabled: false })
        CardexpElm.focus()
    }
})

CardexpElm.on('change', (e) => {
    if (e.complete) {
        CardcvcElm.update({ disabled: false })
        CardcvcElm.focus()
    }
})
CardcvcElm.on('change', (e) => {
    if (e.complete) {
        btn.disabled = false

    }
    var cvcInput = document.querySelector('.StripeElement iframe');
    cvcInput.contentDocument.querySelector('input').type = 'password';

})
btn.addEventListener('click', () => {
    let pay_amount = document.querySelector('#amount').value;
    // const amount = 421
    // convert pay_amount to number
    pay_amount = Number(pay_amount)


    fetch('/paymentIntent.php?amount=' + pay_amount, {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify() // fixed typo in "JSON"
    })
        .then(res => res.json())
        .then(payload => {
            console.log(payload);
            stripe.confirmCardPayment(payload.client_secret, {
                payment_method: { card: CardnumElm }
            }).then(transStat => {
                if (transStat.error) {
                    sts.innerHTML = `<strong>Error:  </string> ${transStat.error.message}`;
                } else {
                    if (transStat.paymentIntent.status === 'succeeded') {
                        const transactionId = transStat.paymentIntent.id;
                        const finalamount = transStat.paymentIntent.amount;
                        window.location.href = `/success.html?transactionId=${transactionId}&amount=${finalamount}`;
                    }
                }
                finalstat.style.display = 'block';
            })
        })
});
