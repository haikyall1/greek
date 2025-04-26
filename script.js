function showPopover(card) {

  document.querySelectorAll('.image-card').forEach((el) => el.classList.remove('active'));


  card.classList.toggle('active');
}

function toggleFlower(rowId) {
  const row = document.getElementById(rowId);
  row.classList.toggle('hidden');
}



$(document).ready(function () {
 
  $("nav a").on("click", function (event) {
      if (this.hash !== "") {
          event.preventDefault();
          const hash = this.hash;
          $("html, body").animate(
              {
                  scrollTop: $(hash).offset().top,
              },
              800
          );
      }
  });

  
  $(".image-card").on("click", function () {
      
      $(".popover").not($(this).find(".popover")).fadeOut();
     
      $(this).find(".popover").fadeToggle();
  });

  $(document).on("click", function (e) {
      if (!$(e.target).closest(".image-card").length) {
          $(".popover").fadeOut();
      }
  });
});
function showArmor(rowId) {
  // Hide all armor sections
  const armors = document.querySelectorAll('.armor');
  armors.forEach(armor => armor.classList.add('hidden'));

  // Show the selected armor section
  const selectedArmor = document.getElementById(rowId);
  if (selectedArmor) {
      selectedArmor.classList.remove('hidden');
  }
}

function showArmor(type) {
    $('.armor').addClass('hidden');
    $('#' + type).removeClass('hidden');

    let info = '';
    if (type === 'Arrow') {
        info = 'Arrow: Lightweight, precise, and often used for ranged attacks.';
    } else if (type === 'Sword') {
        info = 'Sword: A classic melee weapon, symbol of honor and skill.';
    } else if (type === 'Armor') {
        info = 'Armor: Defensive gear that protects against enemy attacks.';
    }

    $('#armor-info-popover').text(info).removeClass('hidden');

    setTimeout(function () {
        $('#armor-info-popover').addClass('hidden');
    }, 3000);
}