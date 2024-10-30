function changePrices(option) {
    const monthlyBtn = document.getElementById('monthly-btn');
    const annualBtn = document.getElementById('one-time-btn');

    const supportPrice = document.getElementById('support-price');
    const digitalPrice = document.getElementById('digital-price');
    const printPrice = document.getElementById('print-price');

    if (option === 'annual') {
        supportPrice.innerHTML = "$25/one-time";
        digitalPrice.innerHTML = "$50/one-time";
        printPrice.innerHTML = "$100/one-time";

        monthlyBtn.classList.remove('active');
        annualBtn.classList.add('active');
    } else {
        supportPrice.innerHTML = "$25/one-time";
        digitalPrice.innerHTML = "$50/one-time";
        printPrice.innerHTML = "$100/one-time";

        annualBtn.classList.remove('active');
        monthlyBtn.classList.add('active');
    }
}
