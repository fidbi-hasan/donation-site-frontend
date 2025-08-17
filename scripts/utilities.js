function getTextFieldValueById(id) {
  const inputValue = document.getElementById(id).innerText;
  const convertedValue = parseFloat(inputValue);

  return convertedValue;
}

function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const convertedValue = parseFloat(inputValue);

  return convertedValue;
}

function validateDonation(personalBalance, donationAmount) {
  if (donationAmount > personalBalance) {
    alert('not enough balance!');
    return false;
  }

  if (isNaN(donationAmount) || donationAmount <= 0) {
    alert('please enter a valid amount');
    return false;
  }

  return true;
}

function addNewRecord(id, donationAmount, eventName) {
  const newRecord = document.createElement('div');  
  newRecord.setAttribute('class', 'newRecord');
  newRecord.innerHTML = `
    <h3>BDT ${donationAmount} donated for event <span>'${eventName}'</span></h3>
    <p>${new Date().toLocaleString()}</p>
  `;

  const recordsContainer = document.getElementById(id);
  recordsContainer.prepend(newRecord);
}