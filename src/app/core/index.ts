import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { IncrementService } from './increment-service';

@NgModule({})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [IncrementService]
    };
  }
}

export { IncrementService };
