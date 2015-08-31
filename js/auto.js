/**
 * Created by joshuawarnock on 8/17/15.
 */

// Year breadcrumb selector
$('#year').change( function(){
  var element = document.getElementById('year');
  var selectedYear = element.options[element.selectedIndex].text;
  var yearCrumb = document.getElementById('year-crumb');
  yearCrumb.text = selectedYear;
});

// Make breadcrumb selector
$('#make').change( function(){
  var element = document.getElementById('make');
  var selectedMake = element.options[element.selectedIndex].text;
  var makeCrumb = document.getElementById('make-crumb');
  makeCrumb.text = selectedMake;
});

// Model breadcrumb selector
$('#model').change( function(){
  var element = document.getElementById('model');
  var selectedModel = element.options[element.selectedIndex].text;
  var modelCrumb = document.getElementById('model-crumb');
  modelCrumb.text = selectedModel;
});

// Edition breadcrumb selector
$('#edition').change( function(){
  var element = document.getElementById('edition');
  var selectedEdition = element.options[element.selectedIndex].text;
  var editionCrumb = document.getElementById('edition-crumb');
  editionCrumb.text = selectedEdition;
});

// Model breadcrumb selector
$('#front-elec').change( function(){
  var element = document.getElementById('front-elec');
  var selectedFront = element.options[element.selectedIndex].text;
  var frontCrumb = document.getElementById('first-crumb');
  frontCrumb.text = selectedFront;
});

//// Account Profile tabs control
//$(document).ready(function(){
//  $(".nav-tabs a").click(function(){
//    $(this).tab('show');
//  });
//});


// Video Carousel
$(document).ready(function () {
  $('#mycarousel').carousel({
    interval: 10000
  })
  $('.fdi-Carousel .item').each(function () {
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length > 0) {
      next.next().children(':first-child').clone().appendTo($(this));
    }
    else {
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });
});




//$(document).ready(function() {
//  if($('#carmap')) {
//    $('#carmap area').each(function() {
//      var id = $(this).attr('id');
//      $(this).mouseover(function() {
//        $('#overlay'+id).show();
//
//      });
//
//      $(this).mouseout(function() {
//        var id = $(this).attr('id');
//        $('#overlay'+id).hide();
//      });
//
//    });
//  }
//});