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

function addNewRecord(id, donationAmount, eventName) {
  const newRecord = document.createElement('div');  
  newRecord.setAttribute('class', 'newRecord');
  newRecord.innerHTML = `
    <h3>BDT ${donationAmount} donated for event <span>'${eventName}'</span></h3>
    <p>${new Date()}</p>
  `;

  const recordsContainer = document.getElementById(id);
  recordsContainer.prepend(newRecord);
}