class Plataforma {
    constructor(nombre, creacion, creador) {
        this.nombre = nombre;
        this.creacion = creacion;
        this.creador = creador;
        this.cuentas = [];
    }
    agregarCuentas(cuenta){
        this.cuentas.push(cuenta);
    }
}

const NateNet = new Plataforma('NateNet', 2022, 'Nate');

class cuenta {
    constructor(titular, usuario, contraseña){
        this.titular = titular;
        this.usuario = usuario;
        this.contraseña = contraseña;
    }
}

function crear(){
let crear = prompt('¿Quiere crear una cuenta?\nSi \nNo')
while (crear == 'si') {
    const titular = prompt('Ingrese Nombre del titular');
    const usuario = prompt('Ingrese un nombre de usuario');
    const contraseña = prompt('Ingrese uan contraseña');
    const cuentaNueva = new cuenta(titular, usuario, contraseña);
    NateNet.agregarCuentas(cuentaNueva)
    alert('Cuenta creada con exito!')
    break;
}

console.log(NateNet.cuentas)

}