/**
 * Created by admin on 14.08.2017.
 */
/*masonry*/

var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});
$grid.imagesLoaded().progress( function() {
    $grid.masonry();
});
