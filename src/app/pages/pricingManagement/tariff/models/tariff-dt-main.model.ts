import { ProcessFlowModel } from './process-flow.model';

export interface DTTariffMains {
  tariffId: string;
  tariffCode: string;
  declineStep: number;
  step: number;
  validFrom: Date;
  validTo: Date;
  status: string;
  approvalBy: string;
  approvalAt: string;
  submitBy: string;
  submitAt: Date;
  declineBy: string;
  createAt: Date;
  updateAt: Date;
  isPublish: number;
  isDelete: number;
  createBy: number;
  processFlows: Array<ProcessFlowModel>;
}
