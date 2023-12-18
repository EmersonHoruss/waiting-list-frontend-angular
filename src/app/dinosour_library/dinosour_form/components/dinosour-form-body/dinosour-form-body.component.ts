import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import CConstraint from '../../models/CConstraint';
import { CFormBody } from '../../models/CFormBody';
import { CInput } from '../../models/CInput';
import ConstraintType from '../../models/EConstraintType';
import { EInputType } from '../../models/EInputType';
import { EIdentifier } from 'src/app/dinosour_library/dinosour_form/models/EIdentifier';
import { CButton } from 'src/app/dinosour_library/dinosour_button/models/CButton';
import { DButtonClean } from 'src/app/dinosour_library/dinosour_button/data/DButton';
import { CReturnedClick } from 'src/app/dinosour_library/dinosour_button/models/CReturnedClick';

@Component({
  selector: 'app-dinosour-form-body',
  templateUrl: './dinosour-form-body.component.html',
  styleUrls: ['./dinosour-form-body.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DinosourFormBodyComponent implements OnInit {
  @Input() form!: CFormBody;
  @Input() reset!: number;
  @Input() markAsTouched!: number;
  @Input() entity!: string;
  @Output() on_changes!: EventEmitter<FormGroup>;
  @Output() on_clean!: EventEmitter<CReturnedClick>;
  EInputType = EInputType;
  EIdentifier = EIdentifier;
  formGroup!: FormGroup;
  cleanButton!: CButton;
  @ViewChildren('inputField') inputFields!: QueryList<ElementRef | MatSelect>;
  constructor(private fb: FormBuilder) {
    this.on_changes = new EventEmitter<FormGroup>();
    this.on_clean = new EventEmitter<CReturnedClick>();
    this.reset = 0;
    this.markAsTouched = 0;
    this.entity = '';
    this.cleanButton = DButtonClean;
  }
  ngOnInit(): void {
    this.initManager();
  }
  public initManager(): void {
    const group: any = {};
    this.form.getInputs().forEach((input: CInput) => {
      const inputKey = input.getLabel();
      const inputValue = input.getValue();
      const inputDisabled = input.isReadOnly();
      const inputConstraints = input.getConstraints();
      group[inputKey] = [
        { value: inputValue, disabled: inputDisabled },
        this.getConstraints(inputConstraints),
      ];
    });
    this.formGroup = this.fb.group(group);
    this.formGroup.valueChanges.subscribe(() => {
      this.on_changes.emit(this.formGroup);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('reset')) {
      if (changes['reset'].currentValue > 0) {
        this.formGroup.reset();
      }
    }
    if (changes.hasOwnProperty('markAsTouched')) {
      if (changes['markAsTouched'].currentValue > 0) {
        Object.values(this.formGroup.controls).forEach((control) => {
          control.markAsTouched();
        });
      }
    }
    if (changes.hasOwnProperty('form')) {
      this.initManager();
      this.on_changes.emit(this.formGroup);
    }
  }
  private getConstraints(constraints: CConstraint[]): ValidationErrors[] {
    const validators: ValidationErrors[] = [];
    constraints.forEach((constraint: CConstraint) => {
      const key = constraint.getType();
      const value = constraint.getValue();
      switch (key) {
        case ConstraintType.max:
          validators.push(Validators.max(Number(value)));
          break;
        case ConstraintType.min:
          validators.push(Validators.min(Number(value)));
          break;
        case ConstraintType.maxLength:
          validators.push(Validators.maxLength(Number(value)));
          break;
        case ConstraintType.minLength:
          validators.push(Validators.minLength(Number(value)));
          break;
        case ConstraintType.pattern:
          validators.push(Validators.pattern(value as RegExp));
          break;
        case ConstraintType.required:
          if (value) {
            validators.push(Validators.required);
          }
          break;
      }
    });
    return validators;
  }
  ngAfterViewInit(): void {
    const autofocusedInputs = this.form
      .getInputs()
      .filter((input: CInput) => input.getAutofocus());
    setTimeout(() => {
      const inputFields = this.inputFields.toArray();
      const getElement = (label: string): ElementRef | MatSelect | null => {
        return (
          inputFields.find((currentInputField: ElementRef | MatSelect) => {
            let currentLabel: string = '';
            if (currentInputField instanceof MatSelect) {
              currentLabel =
                currentInputField._elementRef.nativeElement.getAttribute(
                  'label'
                );
            }
            if (currentInputField instanceof ElementRef) {
              currentLabel =
                currentInputField.nativeElement.getAttribute('label');
            }
            return label === currentLabel;
          }) ?? null
        );
      };
      autofocusedInputs.forEach((input: CInput) => {
        const label: string = input.getLabel();
        const element: ElementRef | MatSelect | null = getElement(label);
        if (element instanceof ElementRef) {
          element.nativeElement.focus();
        }
        if (element instanceof MatSelect) {
          element.focus();
        }
      });
    });
  }
  public handleClean($event: any): void {
    this.on_clean.emit($event);
  }
}
