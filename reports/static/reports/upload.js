const csrf = document.getElementsByName('csrfmiddlewaretoken')[0].value
const alertBox = document.getElementById('alert-box')
console.log(csrf)

Dropzone.autoDiscover = false

const myDropzone = new Dropzone('#my-dropzone', {
    url: '/reports/upload/',
    init: function() {
        this.on('sending', function(file, xhr, formData) {
            console.log('sending')
            formData.append('csrfmiddlewaretoken', csrf)
        })
        this.on('success', function(file, response) {
            console.log(response)
            const ex = response.ex
            if (ex) {
                alertBox.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                      file is already existed
                    </div>
                `
            } else {
                alertBox.innerHTML = `
                    <div class="alert alert-success" role="alert">
                      Your file has been uploaded
                    </div>
                `
            }
        })
    },
    maxFiles: 3,
    maxFileSize: 3,
    acceptedFiles: '.csv'
})
