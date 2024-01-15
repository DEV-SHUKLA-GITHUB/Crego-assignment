import { defaultOperators } from 'react-querybuilder';
import { musicalInstruments } from './MusicalInstrument';

export const validator = (r) => !!r.value;
const majorFields = [, "Business", "Verification Matrix Fields", "Bureau", "Banking"];
export const fields = [
  {
    name: "Applicankffdlks",
    label: "Applicansdfsd",
    placeholder: 'Enter first name',
    validator,
  },
  {
    name: 'lastName',
    label: 'Last Name',
    placeholder: 'Enter last name',
    defaultOperator: 'beginsWith',
    validator,
  },
  { name: 'age', label: 'Age', inputType: 'number', validator },
  {
    name: 'isMusician',
    label: 'Is a musician',
    valueEditorType: 'checkbox',
    operators: defaultOperators.filter((op) => op.name === '='),
    defaultValue: false,
  },
  {
    name: 'instrument',
    label: 'Primary instrument',
    valueEditorType: 'select',
    values: musicalInstruments,
    defaultValue: 'Cowbell',
    operators: defaultOperators.filter((op) => op.name === '='),
  },
  {
    name: 'alsoPlays',
    label: 'Also plays',
    valueEditorType: 'multiselect',
    values: musicalInstruments,
    defaultValue: 'More cowbell',
    operators: defaultOperators.filter((op) => op.name === 'in'||op.name === 'not in'),
  },
  {
    name: 'Applicant',
    label: 'Applicant',
    // operators: ["in","nin"],
    valueEditorType: 'multiselect',
    values: [
      { name: 'Gender', label: 'Gender', valueEditorType: 'multiselect',
      values: [
        { name: 'Gender1', label: 'Gender1', },
        { name: 'Age', label: 'Age' },
        { name: 'Current Address Ownership', label: 'Current Address Ownership' }]},
      { name: 'Age', label: 'Age' },
      { name: 'Current Address Ownership', label: 'Current Address Ownership' },
    ],
  },
  { name: 'height', label: 'Height', validator },
  { name: 'job', label: 'Job', validator },
  { name: 'description', label: 'Description', valueEditorType: 'textarea' },
  { name: 'birthdate', label: 'Birth Date', inputType: 'date' },
  { name: 'datetime', label: 'Show Time', inputType: 'datetime-local' },
  { name: 'alarm', label: 'Daily Alarm', inputType: 'time' },
  {
    name: "Applicantsdf",
    label: "Applicantdsfsdf",
    comparator: ["Gender", "Age", "Current Address Ownership"],
    groupNumber: 'group1',
    valueSource: ['field'],
  },
  {
    name: 'groupedField2',
    label: 'Grouped Field 2',
    comparator: 'groupNumber',
    groupNumber: 'group1',
    valueSources: ['field', 'value'],
  },
  {
    name: 'groupedField3',
    label: 'Grouped Field 3',
    comparator: 'groupNumber',
    groupNumber: 'group1',
    valueSources: ['field', 'value'],
  },
  {
    name: 'groupedField4',
    label: 'Grouped Field 4',
    comparator: 'groupNumber',
    groupNumber: 'group1',
    valueSources: ['field', 'value'],
  },
];
