export interface DTTariffMains {
    id: number;
    tariffId : number;
    declineStep : number;
    step : number;
    validFrom : Date;
    validTo : Date;
    status : string;
    approvalBy : string;
    approvalAt : string;
    submitBy : string;
    submitAt : Date;
    declineBy: string;
    createAt : Date;
    updateAt : Date;
    isPublish : number;
    isDelete : number;
    createBy : number;
  }

  export interface DTTariffMainsPaging {    
    totalItems:number;
    page:number;
    pageSize:number;
    items: DTTariffMains[] | [];
  }

  export interface FilterModel {    
    fieldName:string;
    comparision:string;
    fieldValue:string;
  }