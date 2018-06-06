import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Screen, InitialScreen } from '../models/screen';

@Component({
  selector: 'app-debug-screen-view',
  template: `
<div class="table mat-elevation-z8">
  <table mat-table #table [dataSource]="[screen]">

    <ng-container matColumnDef="width">
      <th mat-header-cell *matHeaderCellDef> Width </th>
      <td mat-cell *matCellDef="let element"> {{element.width}} </td>
    </ng-container>

    <ng-container matColumnDef="height">
      <th mat-header-cell *matHeaderCellDef> Height </th>
      <td mat-cell *matCellDef="let element"> {{element.height}} </td>
    </ng-container>

    <ng-container matColumnDef="orientation">
      <th mat-header-cell *matHeaderCellDef> Orientation </th>
      <td mat-cell *matCellDef="let element"> {{element.orientation}} </td>
    </ng-container>

    <ng-container matColumnDef="device">
      <th mat-header-cell *matHeaderCellDef> Device </th>
      <td mat-cell *matCellDef="let element"> {{element.device}} </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>
</div>
  `,
  styles: [`
  `],
  encapsulation: ViewEncapsulation.None
})
export class DebugScreenViewComponent implements OnInit {
  displayedColumns = ['width', 'height', 'orientation', 'device'];
  @Input() screen: Screen = InitialScreen;
  constructor() { }

  ngOnInit() { }

  //getScreenArray() { return [this.screen];}

}
