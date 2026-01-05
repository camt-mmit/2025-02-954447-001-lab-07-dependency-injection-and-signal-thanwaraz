import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DynamicContact } from "../../components/dynamic-contact/dynamic-contact";
import { createContact } from '../../helpers';
import { DynamicTel } from '../../components/dynamic-tel/dynamic-tel';

@Component({
  selector: 'app-example-display-page',
  imports: [DynamicTel],
  templateUrl: './example-display-page.html',
  styleUrl: './example-display-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleDisplayPage {

}
