var ReviewModule = ( function() {

  var getReviewTable = function(){
    return $("table[data-content='reviews']");
  };

  // Our public-facing function for attaching
  //   any listeners we want on the DOM
  var attachReviewListeners = function(){
    _ajaxFormListener();
  };


  // Attach submit listeners to all forms
  //   we have marked for AJAX submission
  //   with the custom (completely made-up)
  //   data attribute `data-ajaxremote`
  var _ajaxFormListener = function(){

    // $("form[data-ajaxremote='true']").submit( function( event ){
    //
    //   // Prevent the default behavior so it
    //   //   doesn't submit as normal
    //   event.preventDefault();
    //
    //   // Pull the data off the form
    //   var $el = $( event.target );
    //   var formData = $el.serializeArray();
    //
    //   // Submit the form to the originally intended
    //   //   URL using our new data object
    //   $.ajax({
    //     url: $el.attr("action"),
    //     method: "POST",
    //     data: formData,
    //
    //     // Make sure we're actually requesting
    //     //   JSON or Rails will assume we want
    //     //   a normal HTML request!
    //     dataType: "json",
    //     success: function( data ){
    //       console.log( "Remote Submission" );
    //       _addReviewRowToTable( data );
    //     }
    //   });
    //
    // });
  };


  // Add a new Post as a row in any table
  //   which identifies itself as containing
  //   Posts
  var _addReviewRowToTable = function( review ){

    // Identify our Posts table using a data attr
    var $table = getReviewTable();

    // Build our new row the long way
    var $reviewRow = $("<tr></tr>");
    var $movieReviewed = $("<td></td>").text(review.movie.title);
    var $reviewer = $("<td></td>").text(review.reviewer_name);
    var $reviewTitle = $("<td></td>").text( review.title );
    var $reviewText = $("<td></td>").text( review.review_text );
    var $reviewDate = $("<td></td>").text(review.review_date);

    // Assemble the pieces
    $reviewRow.append( $movieReviewed )
            .append( $reviewer )
            .append( $reviewTitle )
            .append( $movieText )
            .append( $reviewDate );

    // Insert into all Post tables
    $tables.prepend( $reviewRow );

  };

  return {
    attachReviewListeners: attachReviewListeners,
    getReviewTable: getReviewTable
  };

})();



$( document ).ready( function(){

  // Attach our listeners after the DOM loads
  ReviewModule.attachReviewListeners();

});
