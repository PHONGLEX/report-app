const csrf = document.getElementsByName('csrfmiddlewaretoken')[0].value
console.log(csrf)

Dropzone.autoDiscover = false

const myDropzone = new Dropzone('#my-dropzone', {
    url: '/upload',
    init: function() {
        this.on('sending', function(file, xhr, formData) {
            console.log('sending')
            formData.append('csrfmiddlewaretoken', csrf)
        })
    }
})
