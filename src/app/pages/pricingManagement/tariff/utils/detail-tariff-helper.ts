import { StatusEnum } from '@common-components/base-status-label/base-status-label.const';
import { CurrentUserStatus } from '../tariff.const';
import { ProcessFlowModel, TariffDetailResponseData, UserActionRoleModel } from '../models';


export class DetailTariffHelpers {
  static getUserAction(
    currentUser: Object,
    itemData: TariffDetailResponseData
  ): UserActionRoleModel {
    if (!itemData) return { isViewer: true };

    const userRoles: Array<string> = currentUser['role'];

    if (userRoles && userRoles.length > 0 && userRoles.includes('Admin')) {
      return { isCreatere: true, isApprover: true, isEditer: true };
    }

    if (!itemData.processFlows || !itemData.processFlows.length) {
      return { isCreatere: true };
    }

    if (
      itemData.status.toLocaleLowerCase() === StatusEnum.Draft &&
      currentUser['Vela_Core_Tariff_Create']
    ) {
      return { isCreatere: true };
    }

    let currentUserStep: ProcessFlowModel = null;
    currentUserStep = itemData.processFlows.find(
      (user) => user.email === currentUser['email']
    );

    // has user login in process flow
    if (!currentUserStep) return { isViewer: true };

    if (currentUserStep.generalStatus === CurrentUserStatus.Waiting) {
      return currentUserStep.isApprover
        ? { isApprover: true }
        : { isEditer: true };
    }

    return { isViewerInProcess: true };
  }

  static getDraftPermission(currentUser: Object, status: string): boolean {
    const isCreatere: boolean = !!currentUser['Vela_Core_Tariff_Create'];
    if (status.toLocaleLowerCase() === StatusEnum.Draft) {
      return isCreatere;
    }

    return true;
  }
}
