$(document).ready(function() {
  $('#assetForm').submit(function(event) {
    event.preventDefault();
    
    let assetNumber = $('#assetNumber').val();
    let purchaseDate = $('#purchaseDate').val();
    let purchasePrice = $('#purchasePrice').val();
    
    if (!/^[a-zA-Z0-9]{1,10}$/.test(assetNumber)) {
      alert('Asset number must be alphanumeric with a maximum length of 10 characters.');
      return;
    }
    
    if (!/\d{4}-\d{2}-\d{2}/.test(purchaseDate)) {
      alert('Purchase date must be in the format YYYY-MM-DD.');
      return;
    }
    
    if (isNaN(purchasePrice) || parseFloat(purchasePrice) <= 0) {
      alert('Purchase price must be a numeric value greater than 0.');
      return;
    }
    
    $.ajax({
      url: '/asset-registration',
      method: 'POST',
      data: $('#assetForm').serialize(),
      success: function(response) {
        alert('Asset registered successfully!');
      },
      error: function(xhr, status, error) {
        let errorMessage = xhr.responseJSON.message || 'An error occurred during asset registration.';
        alert(errorMessage);
      }
    });
  });
});
