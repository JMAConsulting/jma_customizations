(function ($, Drupal) {

  "use strict";

  $('.field--name-field-geolocation').on('click', function(e) {
    var parts = $(this).data('quickedit-field-id').split('/');
    if (parts[0] == 'civicrm_event') {
      window.open('/event-location/' + parts[1], '_blank');
    }
    if (parts[0] == 'civicrm_contact') {
      window.open('/contact-map/' + parts[1], '_blank');
    }
  });

})(jQuery, Drupal);