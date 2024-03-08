import { ReplaySubject } from 'rxjs';

export abstract class AbsBaseContractService {
  protected destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

  protected destroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
