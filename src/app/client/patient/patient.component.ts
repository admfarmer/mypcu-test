import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../shared/patient.service';
import { AlertService } from '../../shared/alert.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
  providers: [MessageService]
})
export class PatientComponent implements OnInit {
  defaultColDef: any;
  columnDefs: any;
  rowData: any[] = [];
  gridApi: any;
  gridColumnApi: any;
  rowSelection: any;
  style = {
    width: '100%',
    height: '100%',
    flex: '1 1 auto'
  };

  constructor(
    private patientService: PatientService,
    private alertService: AlertService,
    private messageService: MessageService,
  ) {
    this.rowSelection = 'multiple';
  }

  ngOnInit(): void {
    this.getInfo();
    this.agGrid();
  }

  async getInfo() {
    let info: any;

    info = {
      "limit": '100',
      "offset": '0',
    }

    try {
      let rs: any = await this.patientService.list(info);
      this.rowData = rs.rows;
      this.messageService.add({ severity: 'success', summary: 'ผลของกระบวนการ', detail: `${rs.text}` });
      console.log(this.rowData);

    } catch (error) {
      console.log(error);
      // this.alertService.error();
    }
  }

  agGrid() {

    this.defaultColDef = {
      flex: 1,
      minWidth: 100,
      editable: true,
      resizable: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,

    };

    this.columnDefs = [
      { field: 'hn', headerName: 'hn', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'cid', headerName: 'cid', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'pname', headerName: 'pname', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'fname', headerName: 'fname', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'lname', headerName: 'lname', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'pname_eng', headerName: 'pname_eng', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'fname_eng', headerName: 'fname_eng', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'lname_eng', headerName: 'lname_eng', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'gender', headerName: 'gender', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'dob', headerName: 'dob', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'married_status', headerName: 'married_status', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'citizenship', headerName: 'citizenship', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'nationality', headerName: 'nationality', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'religion', headerName: 'religion', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'bloodgroup', headerName: 'bloodgroup', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'occupation', headerName: 'occupation', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'pttype', headerName: 'pttype', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'pttype_inscl_ocde', headerName: 'pttype_inscl_ocde', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'address_fullname', headerName: 'address_fullname', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'phone_number', headerName: 'phone_number', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'register_datetime', headerName: 'register_datetime', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'last_visit_datetime', headerName: 'last_visit_datetime', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'father_name', headerName: 'father_name', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'mother_name', headerName: 'mother_name', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'father_cid', headerName: 'father_cid', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'mother_cid', headerName: 'mother_cid', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'couple_name', headerName: 'couple_name', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'couple_cid', headerName: 'couple_cid', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'contact_name', headerName: 'contact_name', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'contact_cid', headerName: 'contact_cid', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'contact_address', headerName: 'contact_address', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'contact_phone_number', headerName: 'contact_phone_number', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'contact_relation', headerName: 'contact_relation', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'house_id', headerName: 'house_id', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'typearea', headerName: 'typearea', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'village_status', headerName: 'village_status', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'passport', headerName: 'passport', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'labor_cid', headerName: 'labor_cid', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'labor', headerName: 'labor', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'moph_cid', headerName: 'moph_cid', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'move_in', headerName: 'move_in', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'move_out', headerName: 'move_out', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'type_discharge', headerName: 'type_discharge', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'discharge_date', headerName: 'discharge_date', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'discharge_status', headerName: 'discharge_status', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'vip_status', headerName: 'vip_status', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'register_id', headerName: 'register_id', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'address_code', headerName: 'address_code', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      {
        field: '', headerName: '##', editable: 'false',pinned: 'right',width: 100,cellStyle: { textAlign: 'center' },
        cellClass: 'myclass',

        cellRenderer: (params:any) => {
          const div = document.createElement('div');

          if (params.data.hn) {
            const btnDel = document.createElement('button');
            btnDel.innerHTML = '<i class="pi pi-trash"></i>';
            btnDel.style.border = 'none';
            btnDel.style.background = 'none';
            btnDel.style.cursor = 'pointer';

            btnDel.addEventListener('click', () => {
              this.btnDel(params);
            });
            div.appendChild(btnDel);
          } else {
            const btnSave = document.createElement('button');
            btnSave.innerHTML = '<i class="pi pi-save"></i>';
            btnSave.style.border = 'none';
            btnSave.style.background = 'none';
            btnSave.style.cursor = 'pointer';

            btnSave.addEventListener('click', () => {
              this.btnAdd(params);
            });
            div.appendChild(btnSave);

            const btnCel3 = document.createElement('button');
            btnCel3.innerHTML = '<i class="pi pi-replay"></i>';
            btnCel3.style.border = 'none';
            btnCel3.style.background = 'none';
            btnCel3.style.cursor = 'pointer';

            btnCel3.addEventListener('click', () => {
              this.onCancel();
            });
            div.appendChild(btnCel3);

          }
          return div;
        }
      },
    ];
  }


  async btnDel(params: any) {
    console.log(params.data);
    console.log("Del");
    let i: any = params.data;
    let confirm = await this.alertService.confirm(`ต้องการลบ ใช่หรือไม่?`);
    console.log(confirm);

    if (confirm) {
      this.onDel(i.hn);
    }
  }

  async onCancel() {
    this.getInfo();
  }

  async onDel(id: any) {
    try {
      let rs: any = await this.patientService.delete(id);
      console.log(rs);

      if (rs.rows === 1) {
        let i: any[] = this.rowData;
        this.rowData = [];

        i.forEach(async x => {
          if (id == x.hn) {
            console.log(id);

          } else {
            this.rowData.push(x);
          }
        })
        this.messageService.add({ severity: 'success', summary: 'ผลของกระบวนการ', detail: `${rs.text}` });
      } else {
        // this.alertService.error(`ลบข้อมูลไม่ได้`);
        this.messageService.add({ severity: 'error', summary: 'ผลของกระบวนการ', detail: `${rs.text}` });
      }
    } catch (error) {
      console.log(error);
      // this.alertService.error();
      this.messageService.add({ severity: 'error', summary: 'ผลของกระบวนการ', detail: 'ข้อมูลผิดพลาด' });

    }
  }

  async btnAdd(i: any) {
    console.log(i.data);

    let confirm = await this.alertService.confirm(`ต้องการบันทึก ใช่หรือไม่?`);
    console.log(confirm);
    if (confirm) {

      const x: any[] = this.rowData;
      console.log(x);
      let items: any[] = [];
      // this.rowData4 = [];

      let item:any = i.data;

      let info = {
        "cid": item.cid,
        "pname": item.pname,
        "fname": item.fname,
        "lname": item.lname,
        "pname_eng": item.pname_eng,
        "fname_eng": item.fname_eng,
        "lname_eng": item.lname_eng,
        "gender": item.gender,
        "dob": item.dob,
        "married_status": item.married_status,
        "citizenship": item.citizenship,
        "nationality": item.nationality,
        "religion": item.religion,
        "bloodgroup": item.bloodgroup,
        "occupation": item.occupation,
        "pttype": item.pttype,
        "pttype_inscl_ocde": item.pttype_inscl_ocde,
        "address_fullname": item.address_fullname,
        "phone_number": item.phone_number,
        "register_datetime": item.register_datetime,
        "last_visit_datetime": item.last_visit_datetime,
        "father_name": item.father_name,
        "mother_name": item.mother_name,
        "father_cid": item.father_cid,
        "mother_cid": item.mother_cid,
        "couple_name": item.couple_name,
        "couple_cid": item.couple_cid,
        "contact_name": item.contact_name,
        "contact_cid": item.contact_cid,
        "contact_address": item.contact_address,
        "contact_phone_number": item.contact_phone_number,
        "contact_relation": item.contact_relation,
        "house_id": item.house_id,
        "typearea": item.typearea,
        "village_status": item.village_status,
        "passport": item.passport,
        "labor_cid": item.labor_cid,
        "labor": item.labor,
        "moph_cid": item.moph_cid,
        "move_in": item.move_in,
        "move_out": item.move_out,
        "type_discharge": item.type_discharge,
        "discharge_date": item.discharge_date,
        "discharge_status": item.discharge_status,
        "register_id": item.register_id,
        "address_code": item.address_code,
      }

      console.log(info);

      try {
        let rs: any = await this.patientService.save(info);
        if (rs.ok) {
          // console.log(rs.ok);
          console.log(rs);
          x.forEach(async v => {
            if (v.hn == item.hn) {
              let i = rs.rows;
              items.push(i);
            } else {
              items.push(v);
            }
          });
          this.rowData = [];
          this.rowData = items;
          console.log(this.rowData);
          this.messageService.add({ severity: 'success', summary: 'ผลของกระบวนการ', detail: `${rs.text}` });
        }
      } catch (error) {
        this.rowData = [];
        this.rowData = x;
        this.messageService.add({ severity: 'error', summary: 'ผลของกระบวนการ', detail: 'ข้อมูลผิดพลาด' });
      }

    }
  }


  async onCellValueChanged(event: any) {
    console.log('data after changes is: ', event);
    let item = event.data;
    let data = {
      "hn": item.hn,
      "cid": item.cid,
      "d_update": item.d_update,
      "pname": item.pname,
      "fname": item.fname,
      "lname": item.lname,
      "pname_eng": item.pname_eng,
      "fname_eng": item.fname_eng,
      "lname_eng": item.lname_eng,
      "gender": item.gender,
      "dob": item.dob,
      "married_status": item.married_status,
      "citizenship": item.citizenship,
      "nationality": item.nationality,
      "religion": item.religion,
      "bloodgroup": item.bloodgroup,
      "occupation": item.occupation,
      "pttype": item.pttype,
      "pttype_inscl_ocde": item.pttype_inscl_ocde,
      "address_fullname": item.address_fullname,
      "phone_number": item.phone_number,
      "register_datetime": item.register_datetime,
      "last_visit_datetime": item.last_visit_datetime,
      "father_name": item.father_name,
      "mother_name": item.mother_name,
      "father_cid": item.father_cid,
      "mother_cid": item.mother_cid,
      "couple_name": item.couple_name,
      "couple_cid": item.couple_cid,
      "contact_name": item.contact_name,
      "contact_cid": item.contact_cid,
      "contact_address": item.contact_address,
      "contact_phone_number": item.contact_phone_number,
      "contact_relation": item.contact_relation,
      "house_id": item.house_id,
      "typearea": item.typearea,
      "village_status": item.village_status,
      "passport": item.passport,
      "labor_cid": item.labor_cid,
      "labor": item.labor,
      "moph_cid": item.moph_cid,
      "move_in": item.move_in,
      "move_out": item.move_out,
      "type_discharge": item.type_discharge,
      "discharge_date": item.discharge_date,
      "discharge_status": item.discharge_status,
      "register_id": item.register_id,
      "address_code": item.address_code,

    }
    // console.log(data);

    if(item.hn){

      try {
        let rs: any = await this.patientService.update(item.hn, data);
        console.log(rs);
        if (rs.ok) {
          // this.rowData = [];
          // this.rowData = [rs.rows];
          let datas:any = this.rowData;
          this.rowData = [];
  
          for(let x of datas){
            if(x.hn == rs.rows.hn){
              this.rowData.push(rs.rows);
            }else{
              this.rowData.push(x);
            }
          }
          // console.log(this.rowData);
          this.messageService.add({ severity: 'success', summary: 'ผลของกระบวนการ', detail: `${rs.text}` });
        } else {
          let datas:any = this.rowData;
          this.rowData = [];
  
          for(let x of datas){
            if(x.hn == rs.rows.hn){
              this.rowData.push(rs.rows);
            }else{
              this.rowData.push(x);
            }
          }
          // console.log(this.rowData);
          this.messageService.add({ severity: 'error', summary: 'ผลของกระบวนการ', detail: `${rs.text}` });
        }
  
      } catch (error: any) {
        console.log(error);
  
      }
    }else{
      console.log("add");
      
    }


  }


  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onSelectionChanged(event: any) {
    console.log('onSelectionChanged');
    var selectedRows = event.api.getSelectedNodes();
    console.log(selectedRows[0].data);
  }

  onAddrows() {
    const x: any[] = this.rowData;
    this.rowData = [];
    let i: any = { 
      hn: null, cid: null, pname: null, 
      fname: null, lname: null, pname_eng: null, fname_eng: null, 
      lname_eng: null, gender: null, dob: null, married_status: null, 
      citizenship: null, nationality: null, religion: null, bloodgroup: null, 
      occupation: null, pttype: null, pttype_inscl_ocde: null, address_fullname: null, 
      phone_number: null, register_datetime: null, last_visit_datetime: null, father_name: null, 
      mother_name: null, father_cid: null, mother_cid: null, couple_name: null, 
      couple_cid: null, contact_name: null, contact_cid: null, contact_address: null, 
      contact_phone_number: null, contact_relation: null, house_id: null, typearea: null, 
      village_status: null, passport: null, labor_cid: null, labor: null, 
      moph_cid: null, move_in: null, move_out: null, type_discharge: null, 
      discharge_date: null, discharge_status: null, vip_status: null, register_id: null, 
      address_code: null
    };
    console.log(i);

    x.push(i);
    this.rowData = x;
    console.log(this.rowData);
    this.gridApi.setRowData(this.rowData);
    this.gotoRow();

  }

  gotoRow() {
    window.scrollTo(0, 500);
    let IDofRowToSelect = (this.rowData.length)-1;
      this.gridApi.ensureIndexVisible(IDofRowToSelect, 'buttom');       
  };
}
