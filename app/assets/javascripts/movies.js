var POTATOES = POTATOES || {};
POTATOES.movies = {};

POTATOES.movies.index = ( function(){

  var getMovieTable = function(){
    return $("table[data-content='movies']");
  };

  var _populateMovieTable = function(movies){

    for (var i = 0; i < movies.length; i++) {
      _buildRow(movies[i]);
    }

  };

  var _buildRow = function(movie){
    var $table = getMovieTable();
    var $movieRow = $("<tr></tr>");
    var $movieTitle = $("<td></td>").text( movie.title );
    var $movieReleaseDate = $("<td></td>").text( movie.release_date );

    $movieRow.append( $movieTitle )
            .append( $movieReleaseDate );

    $table.prepend( $movieRow );
  };

  var init = function() {
    $.ajax({
      url: '/movies.json',
      success: function(movies) {
        _populateMovieTable(movies);
      }
    });
  };

  var attachMovieListeners = function(){
    _ajaxFormListener();
  };

  var _ajaxFormListener = function(){

    $("form[data-ajaxremote='true']").submit( function( event ){

      event.preventDefault();

      var $el = $( event.target );
      var formData = $el.serializeArray();

      $.ajax({
        url: $el.attr("action"),
        method: "POST",
        data: formData,
        dataType: "json",
        success: function( data ){
          console.log( "Success!" );
          _buildRow( data );
        }
      });
      console.log('no reload');
    });
  };


  return {
    init: init,
    attachMovieListeners: attachMovieListeners
  };

})();

$( document ).ready( function(){

  if( $("#movies-index").length ){
    POTATOES.movies.index.init();
    POTATOES.movies.index.attachMovieListeners();
  }
});
