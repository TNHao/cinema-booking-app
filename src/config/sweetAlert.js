import Swal from 'sweetalert2';

export const successAlert = (mess) => {
    return Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: mess
    })
}

export const errorAlert = (mess = "Something went wrong!") => {
    return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: mess
    })
}