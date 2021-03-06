import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  AccordionModule,
  TooltipModule,
  TreeModule,
  ButtonModule,
  ConfirmDialogModule,
  PanelModule,
  PickListModule,
  DialogModule,
  DragDropModule,
  MultiSelectModule,
  FieldsetModule,
  DropdownModule,
  MessagesModule,
  MessageModule,
  InputTextModule,
  AutoCompleteModule,
  MenuModule,
  ChipsModule,
  SpinnerModule,
  ListboxModule,
  CheckboxModule,
  InputSwitchModule,
  ToggleButtonModule,
  ProgressSpinnerModule,
  TabViewModule,
  OverlayPanelModule
} from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { RemoveSpecialCharacterDirective } from './directives/remove-special-characters.directive';
import { CachedSrcDirective } from './directives/cahed-src.directive';

@NgModule({
  declarations: [RemoveSpecialCharacterDirective, CachedSrcDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccordionModule,
    TooltipModule,
    TreeModule,
    ButtonModule,
    ConfirmDialogModule,
    PanelModule,
    PickListModule,
    DialogModule,
    DragDropModule,
    MultiSelectModule,
    FieldsetModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    InputTextModule,
    AutoCompleteModule,
    MenuModule,
    ChipsModule,
    SpinnerModule,
    ListboxModule,
    CheckboxModule,
    InputSwitchModule,
    ToggleButtonModule,
    ProgressSpinnerModule,
    TabViewModule,
    OverlayPanelModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccordionModule,
    TooltipModule,
    TreeModule,
    ButtonModule,
    ConfirmDialogModule,
    PanelModule,
    PickListModule,
    DialogModule,
    DragDropModule,
    MultiSelectModule,
    FieldsetModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    InputTextModule,
    AutoCompleteModule,
    MenuModule,
    ChipsModule,
    SpinnerModule,
    ListboxModule,
    CheckboxModule,
    InputSwitchModule,
    ToggleButtonModule,
    ProgressSpinnerModule,
    RemoveSpecialCharacterDirective,
    TabViewModule,
    TableModule,
    OverlayPanelModule,
    CachedSrcDirective
  ]
})
export class SharedModule {}
