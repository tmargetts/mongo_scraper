
$(document).ready(function () {



  // Click Listener for FORM SUBMISSION to ADD a comment
  $('.comment-form').on('submit', function (event) {
    event.preventDefault();

    // Get _id of comment to be deleted
    var articleId = $(this).data("id");
   
    // URL root (so it works in eith Local Host for Heroku)
    var originURL = window.location.origin;
    var actionString = '/articles/' + articleId;
    var frmAction = "form-add-";
    var formID = $('#' + frmAction + articleId);
    var formData = {
      name: $(this).find("#name-").val(),              // ("name") returns undefined
      content: $(this).find("#content-").val()         // ("content") returns undefined
    }
    console.log(formData);

    $.ajax({
      url: originURL + actionString,
      method: 'POST',
      data: formData,
      success: function (response) {
         
        console.log(response);
      },
      error: function (error) {
        console.log(error);
      }
    })
      .done(function () {
        // Refresh the Window after the call is done

        location.reload();
      });
    ;



  });


  $('#viewComments').on("click", function (e) {
    e.preventDefault();
    var thisId = $(this).attr("data-id");




    $.ajax({
      method: "GET",
      url: "/articles/" + thisId
    }).then(function (data) {
      
      var noteName = `<strong> Name : ${data.note.name} </strong>`;
      var noteContent = `Note : ${data.note.content}`;

      var deleteButton = `<span class="badge">
         <form id="form-delete-{${thisId}}" data-id="${thisId}" data-noteid="${data.note._id}" >
           <input class="btn-small delete-comment-button" data-id="${thisId}" data-noteid="${data.note._id}" class="delete" type="submit" value="Delete" style="color: white; background-color: red; border-color: red;">
         </form>
       </span>`;




      $(`#name-${thisId}`).append(noteName);
      $(`#content-${thisId}`).append(noteContent).append(deleteButton);
      $(`#noContent-${thisId}`).text('');




      console.log(data.note.name);           // undefined
      console.log(data.note.content);        // undefined
    });
  });

  // When user clicks the delete button for a note
  $('.collection-item').on("click", ".delete-comment-button", function () {

    // Save the p tag that encloses the button
    var selected = $(this).parent().attr("data-id");
    var thisId = $(this).attr("data-noteid");
     
    $.ajax({
      type: "GET",
      url: "/delete/" + thisId,

      // On successful call
      success: function (response) {
        // Remove the p-tag from the DOM
        thisId.remove();
        // Clear the note and title inputs

      }
    });
  });



});