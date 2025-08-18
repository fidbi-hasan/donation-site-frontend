
// noakhali
document.getElementById('donate-button-noakhali').addEventListener('click', (e) => {
  const personalBalance = getTextFieldValueById('personal-balance'); 
  const eventName = document.getElementById('event-title-noakhali').innerText;
  const fundRaised = getTextFieldValueById('fund-raised-amount-noakhali');
  const donationAmount = getInputFieldValueById('donation-amount-noakhali');

  if (validateDonation(personalBalance, donationAmount) === false) {
    return;
  }

  const updatedPersonalBalance = personalBalance - donationAmount;
  const updatedFundRaised = fundRaised + donationAmount;
  
  document.getElementById('personal-balance').innerText = updatedPersonalBalance;
  document.getElementById('fund-raised-amount-noakhali').innerText = updatedFundRaised;

  /* show confirmation */
  const modalContainer = document.getElementById('modal-container');
  modalContainer.style.display = 'flex';
  /* show confirmation */

  /* add records */
  addNewRecord('donation-records-container', donationAmount, eventName);

  // clear input field 
  document.getElementById('donation-amount-noakhali').value = '';
});

// feni
document.getElementById('donate-button-feni').addEventListener('click', () => {
  const personalBalance = getTextFieldValueById('personal-balance'); 
  const eventName = document.getElementById('event-title-feni').innerText;
  const fundRaised = getTextFieldValueById('fund-raised-amount-feni');
  const donationAmount = getInputFieldValueById('donation-amount-feni');
  console.log(donationAmount);

  if (validateDonation(personalBalance, donationAmount) === false) {
    return;
  }

  const updatedPersonalBalance = personalBalance - donationAmount;
  const updatedFundRaised = fundRaised + donationAmount;
  
  document.getElementById('personal-balance').innerText = updatedPersonalBalance;
  document.getElementById('fund-raised-amount-feni').innerText = updatedFundRaised;

  /* show confirmation */
  const modalContainer = document.getElementById('modal-container');
  modalContainer.style.display = 'flex';
  /* show confirmation */

  /* add records */
  addNewRecord('donation-records-container', donationAmount, eventName);

  // clear input field 
  document.getElementById('donation-amount-feni').value = '';
});

// movement
document.getElementById('donate-button-movement').addEventListener('click', () => {
  const personalBalance = getTextFieldValueById('personal-balance'); 
  const eventName = document.getElementById('event-title-movement').innerText;
  const fundRaised = getTextFieldValueById('fund-raised-amount-movement');
  const donationAmount = getInputFieldValueById('donation-amount-movement');

  if (validateDonation(personalBalance, donationAmount) === false) {
    return;
  }

  const updatedPersonalBalance = personalBalance - donationAmount;
  const updatedFundRaised = fundRaised + donationAmount;

  document.getElementById('personal-balance').innerText = updatedPersonalBalance;
  document.getElementById('fund-raised-amount-movement').innerText = updatedFundRaised;

  /* show confirmation */
  const modalContainer = document.getElementById('modal-container');
  modalContainer.style.display = 'flex';
  /* show confirmation */

  /* add records */
  addNewRecord('donation-records-container', donationAmount, eventName);

  // clear input field 
  document.getElementById('donation-amount-movement').value = '';
});


// close confirmation button
document.getElementById('close-confirmation').addEventListener('click', () => {
  const modalContainer = document.getElementById('modal-container');
  modalContainer.style.display = 'none';
});