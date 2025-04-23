function showPopover(card) {
    // Close any open popovers
    document.querySelectorAll('.image-card').forEach((el) => el.classList.remove('active'));

    // Toggle the clicked card's popover
    card.classList.toggle('active');
}

function toggleFlower(rowId) {
    const row = document.getElementById(rowId);
    row.classList.toggle('hidden');
  }
  
  