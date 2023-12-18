import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { CDialogLoading } from '../../models/CDialogLoading';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dinosour-dialog-loading',
  templateUrl: './dinosour-dialog-loading.component.html',
  styleUrls: ['./dinosour-dialog-loading.component.css'],
})
export class DinosourDialogLoadingComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DinosourDialogLoadingComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogLoading: CDialogLoading
  ) {
    this.dialogRef.disableClose = !dialogLoading.getAllowBackdropClose();
  }

  ngOnInit(): void {}

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (this.dialogLoading.getAllowEscapeClose()) {
      this.dialogRef.close();
    }
  }
}
