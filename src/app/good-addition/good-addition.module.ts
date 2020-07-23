import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodAdditionComponent } from './good-addition.component';

@NgModule({
    imports: [CommonModule],
    declarations: [GoodAdditionComponent],
    exports: [GoodAdditionComponent]
})
export class ModalModule { }