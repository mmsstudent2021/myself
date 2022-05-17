import './style.scss'
import Swal from "sweetalert2";

let clickMe = document.getElementById('clickMe');
clickMe.addEventListener('click',function (){
    Swal.fire("San Kyi Tar");
})