import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { type } from 'os';
import { Guia } from '../clases/Guia';
import { GuiaService } from '../services/guia.service';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {

  @ViewChild('inputText') input: ElementRef;

  guias: Guia[] = [];
  value: string = "";
  prevGuia: Guia;

  constructor(private _toastr: ToastrService,
    private _guiaService: GuiaService) { }

  ngOnInit(): void {
    this._guiaService.findAll().subscribe(guias => {
      this.guias = guias;
    });
  }

  onInputChange() {
    if (this.isValid(this.value)) {
      const nroGuia = this.changeFormat(this.value);
      const guia = new Guia(nroGuia, 1);
      this._guiaService.save(guia).subscribe(response => {
        this.guias.push(response);
        this.value = "";
        this._toastr.success(`<span class="now-ui-icons ui-1_bell-53"></span> Guía <strong>${ guia.NroGuia }</strong> registrada.`, '', {
          timeOut: 4000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-success alert-with-icon",
          positionClass: 'toast-top-right'
        });
      });
    } else {
      this._toastr.error('<span class="now-ui-icons ui-1_bell-53"></span>El formato del N° de Guia es inválido.', '', {
        timeOut: 4000,
        enableHtml: true,
        closeButton: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: 'toast-top-right'
      });
    }
  }

  delete(guia: Guia) {
    if (window.confirm(`¿Estas seguro de eliminar la guía ${guia.NroGuia}?`)) {
      this._guiaService.delete(guia.id).subscribe(response => {
        this.guias = this.guias.filter(objGuia => objGuia.id != guia.id);
      });
    }
  }

  isValid(val) {
    return /^([0-9]{10})*$/.test(val) && (val !== "" || val !== null);
  }

  changeFormat(val: string) {
    return val.substr(0, 3) + '-' + val.substr(3, val.length);
  }

}
