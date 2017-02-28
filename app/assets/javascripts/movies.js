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

    $table.append( $movieRow );
  };

  var init = function() {
    $.ajax({
      url: '/movies.json',
      success: function(movies) {
        _populateMovieTable(movies);
      }
    });
  };

  return {
    init: init
  };

})();

$( document ).ready( function(){

  POTATOES.movies.index.init();

});
