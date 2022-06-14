import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [AuthModalComponent],
  imports: [CommonModule, ShareModule],
  exports: [AuthModalComponent],
})
export class UserModule {}
