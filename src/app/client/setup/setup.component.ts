import { Component, OnInit } from '@angular/core';
import { SetupService } from '../../shared/setup.service';
import { AlertService } from '../../shared/alert.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
  providers: [MessageService]
})
export class SetupComponent implements OnInit {
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

  display: boolean = false;

  idset:any;
  nameset:any;
  hi_hsp_nm:any;
  hi_chw_cd:any;
  hi_chw_nm:any;
  hi_amp_cd:any;
  d_update:any;


  constructor(
    private setupService: SetupService,
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
      let rs: any = await this.setupService.list(info);
      this.rowData = rs.rows;
      this.messageService.add({ severity: 'success', summary: 'ผลของกระบวนการ', detail: `${rs.text}` });
      console.log(this.rowData);

    } catch (error:any) {
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
      { field: 'idset', headerName: 'รหัส', editable: false, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'nameset', headerName: 'nameset', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'hi_hsp_nm', headerName: 'hi_hsp_nm', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'hi_chw_cd', headerName: 'hi_chw_cd', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'hi_chw_nm', headerName: 'hi_chw_nm', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'hi_amp_cd', headerName: 'hi_amp_cd', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'hi_hsp_cd', headerName: 'hi_hsp_cd', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'timeprint', headerName: 'timeprint', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'host', headerName: 'host', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_editpass', headerName: 'hi2epidem', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_prnono_ph', headerName: '_prnono_ph', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_prnono_er', headerName: '_prnono_er', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_prnono_sp', headerName: '_prnono_sp', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_prnono_md', headerName: '_prnono_md', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_prnono_dr', headerName: '_prnono_dr', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_prnono_dt', headerName: '_prnono_dt', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_prnono_lb', headerName: '_prnono_lb', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_prnono_dc', headerName: '_prnono_dc', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_prnono_rc', headerName: '_prnono_rc', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_prnono_ht', headerName: '_prnono_ht', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_prnono_tb', headerName: '_prnono_tb', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_lprinto', headerName: '_lprinto', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_drg', headerName: '_drg', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_dct_chgi', headerName: '_dct_chgi', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_dct_chgo', headerName: '_dct_chgo', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_brr_chg', headerName: '_brr_chg', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_fuday', headerName: '_fuday', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_pth', headerName: '_pth', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_hdspc_pth', headerName: '_hdspc_pth', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_hdspc_xry', headerName: '_hdspc_xry', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_hdspc_rec', headerName: '_hdspc_rec', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_hdspc_phm', headerName: '_hdspc_phm', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_lngth_xry', headerName: '_lngth_xry', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_lngth_phm', headerName: '_lngth_phm', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_psswrd', headerName: '_psswrd', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_admtime', headerName: '_admtime', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_odac', headerName: '_odac', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_bidac', headerName: '_bidac', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_bidpc', headerName: '_bidpc', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_tidac', headerName: '_tidac', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_hs', headerName: '_hs', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_tidpc', headerName: '_tidpc', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_qidac', headerName: '_qidac', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_qidpc', headerName: '_qidpc', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_q2', headerName: '_q2', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_q4', headerName: '_q4', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_q6', headerName: '_q6', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_q8', headerName: '_q8', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_q12', headerName: '_q12', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'passdx', headerName: 'passdx', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'ptted', headerName: 'ptted', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'passset', headerName: 'passset', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'blockdx', headerName: 'blockdx', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'xrypass', headerName: 'xrypass', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'hostxry', headerName: 'hostxry', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'userxry', headerName: 'userxry', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'pacstype', headerName: 'pacstype', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_dtt_chgo', headerName: '_dtt_chgo', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_dtt_chgi', headerName: '_dtt_chgi', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'blocklab', headerName: 'blocklab', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'fixdlogi', headerName: 'fixdlogi', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'htype', headerName: 'htype', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'addr', headerName: 'addr', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'tel', headerName: 'tel', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'fontchar', headerName: 'fontchar', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'fontcolf', headerName: 'fontcolf', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'fontcolb', headerName: 'fontcolb', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'referhosp', headerName: 'referhosp', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_ptho', headerName: '_ptho', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'internet_serv', headerName: 'internet_serv', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'lockday', headerName: 'lockday', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'setmedprt', headerName: 'setmedprt', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'chgrefer', headerName: 'chgrefer', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'pacsdtt', headerName: 'pacsdtt', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'hosprefer', headerName: 'hosprefer', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'setfindtx', headerName: 'setfindtx', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_prnono_sp_pcu', headerName: '_prnono_sp_pcu', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'fixdrughiv', headerName: 'fixdrughiv', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'serverpic', headerName: 'serverpic', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'userpic', headerName: 'userpic', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'passpic', headerName: 'passpic', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'prtnavi', headerName: 'prtnavi', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'chksitdrfee', headerName: 'chksitdrfee', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'chksitcgd', headerName: 'chksitcgd', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'mdrgentxt', headerName: 'mdrgentxt', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'serverapi', headerName: 'serverapi', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'prt_q4u', headerName: 'prt_q4u', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'qtyprtq', headerName: 'qtyprtq', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'fixlabnotshw', headerName: 'fixlabnotshw', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'printerid', headerName: 'printerid', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'smallqueue', headerName: 'smallqueue', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_prnono_ttm', headerName: '_prnono_ttm', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'chkinsmed', headerName: 'chkinsmed', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'ptright', headerName: 'ptright', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_d_m_chgo', headerName: '_d_m_chgo', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: '_d_m_chgi', headerName: '_d_m_chgi', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      { field: 'alertchkco', headerName: 'alertchkco', editable: true, width: 300, minWidth: 200, maxWidth: 500, resizable: true },
      {
        field: '', headerName: '##', editable: 'false',pinned: 'right',width: 100,cellStyle: { textAlign: 'center' },
        cellClass: 'myclass',

        cellRenderer: (params:any) => {
          const div = document.createElement('div');

            const btnEdit = document.createElement('button');
            btnEdit.innerHTML = '<i class="pi pi-pencil"></i>';
            btnEdit.style.border = 'none';
            btnEdit.style.background = 'none';
            btnEdit.style.cursor = 'pointer';

            btnEdit.addEventListener('click', () => {
              this.onEdit(params);
            });
            div.appendChild(btnEdit);
          
          return div;
        }
      },
    ];
  }


  async onCellValueChanged(event: any) {
    console.log('data after changes is: ', event);
    let item = event.data;
    let data = {
      "idset": item.idset,
      "nameset": item.nameset,
      "d_update": item.d_update,
      "hi_hsp_nm": item.hi_hsp_nm,
      "hi_chw_cd": item.hi_chw_cd,
      "hi_chw_nm": item.hi_chw_nm,
      "hi_amp_cd": item.hi_amp_cd,
      "hi_hsp_cd": item.hi_hsp_cd,
      "timeprint": item.timeprint,
      "host": item.host,
      "_editpass": item._editpass,
      "hi2epidem": item.hi2epidem,
      "_prnono_ph": item._prnono_ph,
      "_prnono_er": item._prnono_er,
      "_prnono_sp": item._prnono_sp,
      "_prnono_md": item._prnono_md,
      "_prnono_dr": item._prnono_dr,
      "_prnono_dt": item._prnono_dt,
      "_prnono_lb": item._prnono_lb,
      "_prnono_dc": item._prnono_dc,
      "_prnono_rc": item._prnono_rc,
      "_prnono_ht": item._prnono_ht,
      "_prnono_tb": item._prnono_tb,
      "_lprinto": item._lprinto,
      "_drg": item._drg,
      "_dct_chgi": item._dct_chgi,
      "_dct_chgo": item._dct_chgo,
      "_brr_chg": item._brr_chg,
      "_fuday": item._fuday,
      "_pth": item._pth,
      "_hdspc_pth": item._hdspc_pth,
      "_hdspc_xry": item._hdspc_xry,
      "_hdspc_rec": item._hdspc_rec,
      "_hdspc_phm": item._hdspc_phm,
      "_lngth_xry": item._lngth_xry,
      "_lngth_phm": item._lngth_phm,
      "_psswrd": item._psswrd,
      "_admtime": item._admtime,
      "_odac": item._odac,
      "_odpc": item._odpc,
      "_bidac": item._bidac,
      "_bidpc": item._bidpc,
      "_tidac": item._tidac,
      "_hs": item._hs,
      "_tidpc": item._tidpc,
      "_qidac": item._qidac,
      "_qidpc": item._qidpc,
      "_q2": item._q2,
      "_q4": item._q4,
      "_q6": item._q6,
      "_q8": item._q8,
      "_q12": item._q12,
      "passdx": item.passdx,
      "ptted": item.ptted,
      "passset": item.passset,
      "blockdx": item.blockdx,
      "hcode": item.hcode,
      "xrypass": item.xrypass,
      "hostxry": item.hostxry,
      "userxry": item.userxry,
      "pacstype": item.pacstype,
      "_dtt_chgo": item._dtt_chgo,
      "_dtt_chgi": item._dtt_chgi,
      "blocklab": item.blocklab,
      "fixdlogi": item.fixdlogi,
      "htype": item.htype,
      "addr": item.addr,
      "tel": item.tel,
      "fontchar": item.fontchar,
      "fontcolf": item.fontcolf,
      "fontcolb": item.fontcolb,
      "referhosp": item.referhosp,
      "_ptho": item._ptho,
      "internet_serv": item.internet_serv,
      "lockday": item.lockday,
      "setmedprt": item.setmedprt,
      "chgrefer": item.chgrefer,
      "pacsdtt": item.pacsdtt,
      "hosprefer": item.hosprefer,
      "setfindtx": item.setfindtx,
      "_prnono_sp_pcu": item._prnono_sp_pcu,
      "fixdrughiv": item.fixdrughiv,
      "serverpic": item.serverpic,
      "userpic": item.userpic,
      "passpic": item.passpic,
      "prtnavi": item.prtnavi,
      "chksitdrfee": item.chksitdrfee,
      "chksitcgd": item.chksitcgd,
      "mdrgentxt": item.mdrgentxt,
      "serverapi": item.serverapi,
      "prt_q4u": item.prt_q4u,
      "qtyprtq": item.qtyprtq,
      "fixlabnotshw": item.fixlabnotshw,
      "printerid": item.printerid,
      "smallqueue": item.smallqueue,
      "_prnono_ttm": item._prnono_ttm,
      "chkinsmed": item.chkinsmed,
      "ptright": item.ptright,
      "_d_m_chgo": item._d_m_chgo,
      "_d_m_chgi": item._d_m_chgi,
      "alertchkco": item.alertchkco,
    }
    // console.log(data);

    try {
      let rs: any = await this.setupService.update(item.idset, data);
      console.log(rs);
      if (rs.ok) {
        this.rowData = [];
        this.rowData = [rs.rows];
        // console.log(this.rowData);
        this.messageService.add({ severity: 'success', summary: 'ผลของกระบวนการ', detail: `${rs.text}` });
      } else {
        this.rowData = [];
        this.rowData = [rs.rows];
        // console.log(this.rowData);
        this.messageService.add({ severity: 'error', summary: 'ผลของกระบวนการ', detail: `${rs.text}` });
      }

    } catch (error: any) {
      console.log(error);

    }

  }


  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }


  async onSave(){
    let data = {
      "idset": this.idset,
      "nameset": this.nameset,
      "d_update": this.d_update,
      "hi_hsp_nm": this.hi_hsp_nm,
      "hi_chw_cd": this.hi_chw_cd,
      "hi_chw_nm": this.hi_chw_nm,
      "hi_amp_cd": this.hi_amp_cd,

    }
    // console.log(data);

    try {
      let rs: any = await this.setupService.update(this.idset, data);
      console.log(rs);
      if (rs.ok) {
        this.rowData = [];
        this.rowData = [rs.rows];
        // console.log(this.rowData);
        this.messageService.add({ severity: 'success', summary: 'ผลของกระบวนการ', detail: `${rs.text}` });
      } else {
        this.rowData = [];
        this.rowData = [rs.rows];
        // console.log(this.rowData);
        this.messageService.add({ severity: 'error', summary: 'ผลของกระบวนการ', detail: `${rs.text}` });
      }

    } catch (error: any) {
      console.log(error);

    }

  }

  async onEdit(item:any){
    this.display = true;
    let i:any = item.data;
    this.idset=i.idset;
    this.d_update=i.d_update;
    this.nameset=i.nameset;
    this.hi_hsp_nm=i.hi_hsp_nm;
    this.hi_chw_cd=i.hi_chw_cd;
    this.hi_chw_nm=i.hi_chw_nm;
    this.hi_amp_cd=i.hi_amp_cd;
  }

  onSelectionChanged(event: any) {
    console.log('onSelectionChanged');
    var selectedRows = event.api.getSelectedNodes();
    // var rowCount = event.api.getSelectedNodes().length;
    console.log(selectedRows.data);
  }

}
