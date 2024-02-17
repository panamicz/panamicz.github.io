function submitForm(e) {
    e.preventDefault()
    var formData = new FormData(document.getElementById('contact-form'));
    fetch('https://script.google.com/macros/s/AKfycbwWNpsh6xaSrHhRl-IxR1VBWHKcRupqLbkz8huO9n7xqjcxoAYH8_ezXNoYrwDzNms/exec', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        clearForm();
        alert("Your response is recorderd and we will contact you soon")
      } else {
        console.error('Error submitting form');
      }
    })
    .catch(error => console.error('Error:', error));
  }

  document.getElementById('contact-form').addEventListener('submit', submitForm)
  console.log("conected js")