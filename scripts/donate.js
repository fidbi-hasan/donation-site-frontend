

document.getElementById('donate-button').addEventListener('click', () => {
  const eventName = document.getElementById('event-title').innerText;
  const personalBalanceEl = document.getElementById('personal-balance'); 
  const fundRaisedEl = document.getElementById('fund-raised-amount');
  const donationAmount = document.getElementById('donation-amount-noakhali').value;

  if (parseFloat(donationAmount) > parseFloat(personalBalanceEl.innerText)) {
    alert('not enough balance!');
    return;
  }

  const updatedPersonalBalance = parseFloat(personalBalanceEl.innerText) - parseFloat(donationAmount);
  const updatedFundRaised = parseFloat(fundRaisedEl.innerText) + parseFloat(donationAmount);

  personalBalanceEl.innerText = updatedPersonalBalance;
  fundRaisedEl.innerText = updatedFundRaised;

  /* update records start */
  const newRecord = document.createElement('div');  
  newRecord.setAttribute('class', 'newRecord');
  newRecord.innerHTML = `
    <h3>BDT ${donationAmount} donated for event '${eventName}'</h3>
    <p>Time: ${new Date()}</p>
  `;

  const recordsContainer = document.getElementById('donation-records');
  recordsContainer.appendChild(newRecord);
  /* update records end */
});
