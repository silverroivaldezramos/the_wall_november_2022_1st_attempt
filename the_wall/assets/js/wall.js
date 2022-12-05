$(document).ready(function(){
    countMessageLength();
    countCommentLength();

    $("body")
        .on("click", "#create_message_textarea", clearTextarea)
        .on("click", "#cancel_create_message_modal", cancelCreateMessage)
        .on("click", "#close_modal", closeModal)
        .on("click", "#post_message", postMessage)
        .on("click", "#comment_button", addComment)
        .on("click", "#post_comment", postComment)
        .on("click", "#edit_message_button", editMessage)
        .on("click", "#update_message_button", updateMessage)
        .on("click", "#delete_message_button", openDeleteModal)
        .on("click", "#delete_message_cancel_button", cancelDeleteMessage)
        .on("click", "#remove_message", removeMessage)
        .on("click", "#edit_comment_button", editComment)
        .on("click", "#edit_comment_cancel_button", cancelEditComment)
        .on("click", "#update_comment_button", updateComment)
        .on("click", "#delete_comment_button", openDeleteCommentModal)
        .on("click", "#delete_comment_cancel_button", cancelDeleteComment)
        .on("click", "#remove_comment", removeComment)
});

function clearTextarea(){
    $(this).val('');
}

function cancelCreateMessage(){
    $(this).closest(".modal").modal('hide');
}

function closeModal(){
    $(this).closest(".modal").modal('hide');
}

function postMessage(){
    let message = $("#create_message_textarea").val();
    let message_length = $(".messages_inbox .message").length;
    let message_id = "message_" + message_length;
    let message_clone = $("#hidden_message_clone .message").clone();
    message_clone.attr('id', message_id);
    message_clone.removeClass("hidden");
    message_clone.find(".message_text").text(message);
    $(".messages_inbox").prepend(message_clone);
    $(".no_message").addClass("hidden");
    $(".messages_inbox").removeClass("hidden");
    $("#create_message_textarea").val("");
    $(this).closest(".modal").modal('hide');
    countMessageLength();
}

function countMessageLength(){
    let message_length = $(".messages_inbox .message").length;
    $(".wall_header h5 span").text(message_length);
}

function addComment(){
    message_id = $(this).closest(".message").attr('id');
    $('#'+message_id).find(".comment_box").removeClass("hidden");
    $('#'+message_id).find(".comment_box input").val(message_id);
}

function postComment(){
    let message_id = $(this).closest(".message").attr('id');
    let comment = $("#create_comment_textarea").val();
    let comment_length = $(".comment_inbox .comment_clone").length;
    let comment_id = "comment_" + comment_length;
    let comment_clone = $("#hidden_comment_clone .comment_clone").clone();
    comment_clone.attr('id', comment_id);
    comment_clone.removeClass("hidden");
    comment_clone.find(".comment_text").text(comment);
    $(".comment_inbox").prepend(comment_clone);
    $(".comment_inbox").removeClass("hidden");
    $("#create_comment_textarea").val("");
    $(this).closest(".modal").modal('hide');
    countCommentLength();
}

function countCommentLength(){
    let message_id = $(this).closest(".message").attr('id');
    let comment_length = $(this).closest(".comment_inbox .comment_clone").length;
    console.log(comment_length);
    $('#'+message_id).find("#comment_button span").text(comment_length);
}

function editMessage(){
    let message_id = $(this).closest(".message").attr('id');
    let message = $('#'+message_id).find(".message_text").text();
    $('#'+message_id).find(".message_text, .message_control_list").addClass("hidden");
    $('#'+message_id).find(".edit_message_box").removeClass("hidden");
    $('#'+message_id).find(".edit_message_box #edit_message_textarea").text(message);
}

function updateMessage(e){
    e.preventDefault();
    let message_id = $(this).closest(".message").attr('id');
    let new_message = $('#'+message_id).find(".edit_message_box #edit_message_textarea").val();
    $('#'+message_id).find(".message_text, .message_control_list").removeClass("hidden");
    $('#'+message_id).find(".edit_message_box").addClass("hidden");
    $('#'+message_id).find(".message_text").text(new_message);
}

function openDeleteModal(){
    let message_id = $(this).closest(".message").attr('id');
    $("#delete_messages").modal("show");
    $("#delete_messages").find("#message_id").val(message_id);
}

function cancelDeleteMessage(){
    $(this).closest(".modal").modal('hide');
}

function removeMessage(){
    let message_id = $("#delete_messages").find("#message_id").val();
    $('#'+message_id).remove();
    $(this).closest(".modal").modal('hide');
    countMessageLength();
}

function editComment(){
    let message_id = $(this).closest(".message").attr('id');
    let comment_id = $(this).closest(".comment_clone").attr('id');
    console.log(comment_id);
    console.log('#'+comment_id);
    let comment = $('#'+comment_id).find(".comment_text").text();
    console.log(comment);
    $('#'+comment_id).closest(".comment_clone").addClass("hidden");
    $('#'+message_id).find(".edit_comment_box").removeClass("hidden");
    $('#'+message_id).find(".edit_comment_box #comment_id").val(comment_id);
    $('#'+message_id).find("#edit_comment_textarea").text(comment);
}

function cancelEditComment(){
    let message_id = $(this).closest(".message").attr('id');
    $('#'+message_id).find(".comment_clone").removeClass("hidden");
    $('#'+message_id).find(".edit_comment_box").addClass("hidden");
}

function updateComment(e){
    e.preventDefault();
    let message_id = $(this).closest(".message").attr('id');
    let comment_id = $(".edit_comment_box").find("#comment_id").val();
    console.log(comment_id);
    let new_comment = $(".edit_comment_box #edit_comment_textarea").val();
    console.log(new_comment);
    $('#'+message_id).find(".comment_clone").removeClass("hidden");
    $('#'+message_id).find(".edit_comment_box").addClass("hidden");
    $('#'+comment_id).find(".comment_text").text(new_comment);
}

function openDeleteCommentModal(){
    let comment_id = $(this).closest(".comment_clone").attr('id');
    $("#delete_comments").modal("show");
    $("#delete_comments").find("#comment_id").val(comment_id);
}

function cancelDeleteComment(){
    $(this).closest(".modal").modal('hide');
}

function removeComment(){
    let comment_id = $("#delete_comments").find("#comment_id").val();
    $('#'+comment_id).remove();
    $(this).closest(".modal").modal('hide');
    countCommentLength();
}
