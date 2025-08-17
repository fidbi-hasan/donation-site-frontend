const allEventContainer = document.getElementById('all-event-container');
const donationRecords = document.getElementById('all-donation-records');

donationRecords.style.display = 'none';

document.getElementById('btn-toggle-history').addEventListener('click', () => {
  donationRecords.style.display = 'block';
  allEventContainer.style.display = 'none';

  document.getElementById('btn-toggle-history').style.backgroundColor = 'greenyellow';
  document.getElementById('btn-toggle-donation').style.backgroundColor = 'white';
});

document.getElementById('btn-toggle-donation').addEventListener('click', () => {
  donationRecords.style.display = 'none';
  allEventContainer.style.display = 'block';
  document.getElementById('btn-toggle-history').style.backgroundColor = 'white';
  document.getElementById('btn-toggle-donation').style.backgroundColor = 'greenyellow';
});

// go to blog page
document.getElementById('blog-button').addEventListener('click', () => {
  window.location.href = 'blog.html';
});