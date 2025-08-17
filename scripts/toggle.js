const allEventContainer = document.getElementById('all-event-container');
const donationRecords = document.getElementById('donation-records');

donationRecords.style.display = 'none';

document.getElementById('btn-toggle-history').addEventListener('click', () => {
  donationRecords.style.display = 'block';
  allEventContainer.style.display = 'none';
});

document.getElementById('btn-toggle-donation').addEventListener('click', () => {
  donationRecords.style.display = 'none';
  allEventContainer.style.display = 'block';
});