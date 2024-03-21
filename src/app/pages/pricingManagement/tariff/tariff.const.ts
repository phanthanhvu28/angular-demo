export const DEFAULT_DECIMAL_MARKUP: number = 2;

export enum CurrentUserStatus {
  Submitted = 'Submitted',
  Waiting = 'Waiting',
  Assigned = 'Assigned',
  Declined = 'Declined',
  Rejected = 'Rejected',
  Revoked = 'Revoked'
}

export enum ProcessActions {
  decline = -1,
  approval = 1,
  none = 0
}

export const DT_TABS_PROVIDER: Array<{ label: string; value: string }> = [
  {
    label: 'SMC',
    value: 'smc'
  },
  {
    label: 'VAS',
    value: 'vas'
  },
  {
    label: 'BLC',
    value: 'blc'
  }
];

export const FM_TABS_PROVIDER: Array<{ label: string; value: string }> = [
  {
    label: 'SMC',
    value: 'smc'
  },
  {
    label: 'VAS',
    value: 'vas'
  },
  {
    label: 'Surcharge',
    value: 'surcharge'
  },
  {
    label: 'BLC',
    value: 'blc'
  }
];

export const WH_TABS_PROVIDER: Array<{ label: string; value: string }> = [
  {
    label: 'SMC',
    value: 'smc'
  },
  {
    label: 'VAS',
    value: 'vas'
  }
];

export const CC_TABS_PROVIDER: Array<{ label: string; value: string }> = [
  {
    label: 'SMC',
    value: 'smc'
  },
  {
    label: 'VAS',
    value: 'vas'
  }
];

export enum TariffErrorCode {
  InValidToNextSubmit = 100001,
  AlreadyHaveTariffInProcess = 100002,
  InValidFromValidTo = 100003,
  NotFoundCostData = 100004,
  OperationFalse = 100005,
  AccessDeny = 100006,
  NotFound = 100007,
  InValidRequest = 100008,
  NoActiveToReuseMarkup = 100009
}

export enum TariffProductCode {
  DTTariffMain = 'DTTariffMain',
  DTTariffVAS = 'DTTariffVAS',
  DTTariffBLC = 'DTTariffBLC',
  FMTariffMain = 'FMTariffMain',
  FMTariffVAS = 'FMTariffVAS',
  FMTariffBLC = 'FMTariffBLC',
  FMTariffSCH = 'FMTariffSCH',
  CCTariffMain = 'CCTariffMain',
  CCTariffVAS = 'CCTariffVAS',
  WHTariffMain = 'WHTariffMain',
  WHTariffVAS = 'WHTariffVAS'
}
