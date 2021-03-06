(function ($, Drupal) {

  "use strict";
  $.each($('.views-field'), function() {
    if ($('.field-content', $(this)).length && $('.field-content', $(this)).text().trim() == '') {
      $(this).hide();
    }
    if ($('.field-content', $(this)).length) {
      $('.field-content', $(this)).html($('.field-content', $(this)).html().replace(/<br>/g, ''));
    }
  });

  $.each($('.views-field-address-details .right > a'), function() {
    if ($(this).text() == $('#primary-phone').text()) {
      $('#primary-phone').hide();
    }
  });
  $('#block-exposedformsearch-solr-page-1 #edit-container-root').prepend($('#block-exposedformsearch-solr-page-1 .form-item-search-api-fulltext'));
  $('#block-exposedformsearch-solr-page-1 #edit-container-root--2').prepend($('#block-exposedformsearch-solr-page-1 .form-item-search-api-fulltext'));
  $('#staff-section').insertAfter($('.views-field').last());

  $(document).ready(function() {
    if (typeof google !== undefined) {
      $.each($('[id^=address-map'), function() {
        var point = new google.maps.LatLng($(this).attr('data-lat'), $(this).attr('data-lng'));
        var map = new google.maps.Map(document.getElementById($(this).attr('id')), {
          zoom: 14,
          fullscreenControl: false,
          zoomControl: false,
          center: point
        });
        var marker = new google.maps.Marker({position: point, map: map, title: $(this).attr('data-marker-title')});
      });
    }
  });

})(jQuery, Drupal);
