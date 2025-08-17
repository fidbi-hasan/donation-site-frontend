
// noakhali
document.getElementById('donate-button-noakhali').addEventListener('click', () => {
  const personalBalanceEl = document.getElementById('personal-balance'); 
  const eventName = document.getElementById('event-title-noakhali').innerText;
  const fundRaisedEl = document.getElementById('fund-raised-amount-noakhali');
  const donationAmount = document.getElementById('donation-amount-noakhali').value;

  if (parseFloat(donationAmount) > parseFloat(personalBalanceEl.innerText)) {
    alert('not enough balance!');
    return;
  }

  if (donationAmount === '') {
    alert('please enter a valid amount');
    return;
  }

  const updatedPersonalBalance = parseFloat(personalBalanceEl.innerText) - parseFloat(donationAmount);
  const updatedFundRaised = parseFloat(fundRaisedEl.innerText) + parseFloat(donationAmount);

  personalBalanceEl.innerText = updatedPersonalBalance;
  fundRaisedEl.innerText = updatedFundRaised;

  /* show confirmation */
  const modalContainer = document.getElementById('modal-container');
  modalContainer.style.display = 'flex';
  /* show confirmation */

  /* update records start */
  const newRecord = document.createElement('div');  
  newRecord.setAttribute('class', 'newRecord');
  newRecord.innerHTML = `
    <h3>BDT ${donationAmount} donated for event <span>'${eventName}'</span></h3>
    <p>${new Date()}</p>
  `;

  const recordsContainer = document.getElementById('donation-records-container');
  recordsContainer.prepend(newRecord);
  /* update records end */
});

// feni
document.getElementById('donate-button-feni').addEventListener('click', () => {
  const personalBalanceEl = document.getElementById('personal-balance'); 
  const eventName = document.getElementById('event-title-feni').innerText;
  const fundRaisedEl = document.getElementById('fund-raised-amount-feni');
  const donationAmount = document.getElementById('donation-amount-feni').value;

  if (parseFloat(donationAmount) > parseFloat(personalBalanceEl.innerText)) {
    alert('not enough balance!');
    return;
  }

  if (donationAmount === '') {
    alert('please enter a valid amount');
    return;
  }

  const updatedPersonalBalance = parseFloat(personalBalanceEl.innerText) - parseFloat(donationAmount);
  const updatedFundRaised = parseFloat(fundRaisedEl.innerText) + parseFloat(donationAmount);

  personalBalanceEl.innerText = updatedPersonalBalance;
  fundRaisedEl.innerText = updatedFundRaised;

  /* show confirmation */
  const modalContainer = document.getElementById('modal-container');
  modalContainer.style.display = 'flex';
  /* show confirmation */

  /* update records start */
  const newRecord = document.createElement('div');  
  newRecord.setAttribute('class', 'newRecord');
  newRecord.innerHTML = `
    <h3>BDT ${donationAmount} donated for event <span>'${eventName}'</span></h3>
    <p>${new Date()}</p>
  `;

  const recordsContainer = document.getElementById('donation-records-container');
  recordsContainer.prepend(newRecord);
  /* update records end */
});

// movement
document.getElementById('donate-button-movement').addEventListener('click', () => {
  const personalBalanceEl = document.getElementById('personal-balance'); 
  const eventName = document.getElementById('event-title-movement').innerText;
  const fundRaisedEl = document.getElementById('fund-raised-amount-movement');
  const donationAmount = document.getElementById('donation-amount-movement').value;

  if (parseFloat(donationAmount) > parseFloat(personalBalanceEl.innerText)) {
    alert('not enough balance!');
    return;
  }

  if (donationAmount === '') {
    alert('please enter a valid amount');
    return;
  }

  const updatedPersonalBalance = parseFloat(personalBalanceEl.innerText) - parseFloat(donationAmount);
  const updatedFundRaised = parseFloat(fundRaisedEl.innerText) + parseFloat(donationAmount);

  personalBalanceEl.innerText = updatedPersonalBalance;
  fundRaisedEl.innerText = updatedFundRaised;

  /* show confirmation */
  const modalContainer = document.getElementById('modal-container');
  modalContainer.style.display = 'flex';
  /* show confirmation */

  /* update records start */
  const newRecord = document.createElement('div');  
  newRecord.setAttribute('class', 'newRecord');
  newRecord.innerHTML = `
    <h3>BDT ${donationAmount} donated for event <span>'${eventName}'</span></h3>
    <p>${new Date()}</p>
  `;

  const recordsContainer = document.getElementById('donation-records-container');
  recordsContainer.prepend(newRecord);
  /* update records end */
});


// close confirmation button
document.getElementById('close-confirmation').addEventListener('click', () => {
  const modalContainer = document.getElementById('modal-container');
  modalContainer.style.display = 'none';
});