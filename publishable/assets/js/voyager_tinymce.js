function setImageValue(url){
    $('.mce-btn.mce-open').parent().find('.mce-textbox').val(url);
}

$(document).ready(function(){

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    tinymce.init({
        menubar: false,
        selector:'textarea.richTextBox',
        skin: 'voyager',
        min_height: 600,
        resize: 'vertical',
        extended_valid_elements : 'input[id|name|value|type|class|style|required|placeholder|autocomplete|onclick]',
        file_browser_callback: function(field_name, url, type, win) {
            if(type =='image'){
                $('#upload_file').trigger('click');
            }
        },
        plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table contextmenu paste code'
        ],
        toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code',
        convert_urls: false,
        image_caption: true,
        image_title: true
    });

});
