import { ItemOptions } from '@models/base-data-list';
import { ContractOptionsFilterPinnedEnum, StatusEnumContract } from '../enums';

export const LIST_STATUS_CONTRACT: Array<ItemOptions> = [
  {
    label: StatusEnumContract.Active,
    value: StatusEnumContract.Active
  },
  {
    label: StatusEnumContract.Approved,
    value: StatusEnumContract.Approved
  },
  {
    label: StatusEnumContract.Amending,
    value: StatusEnumContract.Amending
  },
  {
    label: StatusEnumContract.Inactive,
    value: StatusEnumContract.Inactive
  },

  {
    label: StatusEnumContract.New,
    value: StatusEnumContract.New
  },

  {
    label: StatusEnumContract.Waiting,
    value: StatusEnumContract.Waiting
  }
];
export const LIST_ANNEX_TYPE: Array<ItemOptions> = [
  {
    value: 'ScopeOfWork',
    label: 'Scopes of work'
  },
  {
    value: 'Quotation',
    label: 'Quotation'
  },
  {
    value: 'Billing',
    label: 'Billing list'
  },
  {
    value: 'OnBehalf',
    label: 'On behalf'
  },
  {
    value: 'Deposit',
    label: 'Deposit'
  },
  {
    value: 'ExtendContractDuration',
    label: 'Extend contract duration'
  }
];
export const LIST_ANNEX_TYPE_SUPPLIER: Array<ItemOptions> = [
  {
    value: 'ScopeOfWork',
    label: 'Scopes of work'
  },
  {
    value: 'ServiceCharges',
    label: 'Service charges'
  },

  {
    value: 'ExtendContractDuration',
    label: 'Extend contract duration'
  }
];
export const LIST_CONTRACT_OPTION: { [key: string]: Array<ItemOptions> } = {
  status: LIST_STATUS_CONTRACT
};
export const LIST_ANNEX_OPTION: { [key: string]: Array<ItemOptions> } = {
  status: LIST_STATUS_CONTRACT,
  annexTypeName: LIST_ANNEX_TYPE
};
export const LIST_ANNEX_OPTION_SUPPLIER: { [key: string]: Array<ItemOptions> } =
  {
    status: LIST_STATUS_CONTRACT,
    annexTypeName: LIST_ANNEX_TYPE_SUPPLIER
  };
export const LIST_TRIAL_CONTRACT_OPTION: { [key: string]: Array<ItemOptions> } =
  {
    status: LIST_STATUS_CONTRACT
  };
export const LIST_AGREEMENT_OPTION: { [key: string]: Array<ItemOptions> } = {
  status: LIST_STATUS_CONTRACT
};
export const CONTRACT_OPTIONS_FILTER_PINNED: Array<{
  label: string;
  value: string;
}> = [
  {
    label: ContractOptionsFilterPinnedEnum.AllContract,
    value: 'All'
  },
  {
    label: ContractOptionsFilterPinnedEnum.MyContract,
    value: 'My'
  },
  {
    label: ContractOptionsFilterPinnedEnum.Recently,
    value: 'Recently'
  }
];

export enum ContractScopesOfWorkCode {
  DT = 'DT',
  CC = 'CC',
  FM = 'FM',
  WH = 'WH',
  dt = 'dt',
  cc = 'cc',
  fm = 'fm',
  wh = 'wh'
}
export enum ContractScopesOfWorkNameByCode {
  DT = 'Domestic Transportation',
  CC = 'Custom Clearance',
  FM = 'Freight Management',
  WH = 'Warehouse',
  dt = 'Domestic Transportation',
  cc = 'Custom Clearance',
  fm = 'Freight Management',
  wh = 'Warehouse'
}
export enum ContractScopesOfWorkCodeByName {
  'Domestic Transportation' = ContractScopesOfWorkCode.dt,
  'Freight Management' = ContractScopesOfWorkCode.fm,
  'Custom Clearance' = ContractScopesOfWorkCode.cc,
  'Warehouse' = ContractScopesOfWorkCode.wh
}

export const ScopeOfWorkData: Array<string> = [
  ContractScopesOfWorkNameByCode[ContractScopesOfWorkCode.dt],
  ContractScopesOfWorkNameByCode[ContractScopesOfWorkCode.fm],
  ContractScopesOfWorkNameByCode[ContractScopesOfWorkCode.cc],
  ContractScopesOfWorkNameByCode[ContractScopesOfWorkCode.wh]
];
export const ScopeOfWorkDataFull: Array<ItemOptions> = [
  {
    value: 'dt',
    label: 'Domestic Transportation'
  },
  {
    value: 'fm',
    label: 'Freight Management'
  },
  {
    value: 'cc',
    label: 'Custom Clearance'
  },
  {
    value: 'wh',
    label: 'Warehouse'
  }
];

export enum ChargeNameByCode {
  serviceMainCharges = 'Costing',
  valueAddedServices = 'Value Added Service',
  basicLocalCharges = 'Basic Local Charge',
  surcharges = 'Surcharges'
}

export enum ContractChargeNameByProductCode {
  ServiceMainCharges = 'serviceMainCharges',
  ValueAddedServices = 'valueAddedServices',
  BasicLocalCharges = 'basicLocalCharges',
  Surcharges = 'surcharges'
}

export const ANNEX_OPTIONS_FILTER_PINNED: Array<{
  label: string;
  value: string;
}> = [
  {
    label: ContractOptionsFilterPinnedEnum.AllAnnex,
    value: 'All'
  },
  {
    label: ContractOptionsFilterPinnedEnum.MyAnnex,
    value: 'My'
  },
  {
    label: ContractOptionsFilterPinnedEnum.Recently,
    value: 'Recently'
  }
];