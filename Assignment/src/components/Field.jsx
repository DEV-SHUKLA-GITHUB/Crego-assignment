import { defaultOperators } from 'react-querybuilder';

export const validator = (r) => !!r.value;
const majorFields = [, "Business", "Verification Matrix Fields", "Bureau", "Banking"];
export const fields = [
  {
    name: 'Gender',
    label: 'Gender',
    operators:[{name: 'in',label: 'in'},{name: 'not in',label: 'not in'}],
    valueEditorType: 'multiselect',
    values: [
      { name: 'male', label: 'male' },
      { name: 'Female', label: 'Female' },
      { name: 'Others', label: 'Others' },
    ],
  },
  { name: 'age', label: 'Age', inputType: 'number', operators: [{name:'<',label:'<'},{name:'<=',label:'<='},{name:'>',label:'>'},{name:'>=',label:'>='}] ,validator },
  {
    name: 'Current Adress Ownership',
    label: 'Current Adress Ownership',
    operators:[{name: 'in',label: 'in'},{name: 'not in',label: 'not in'}],
    valueEditorType: 'multiselect',
    values: [
      { name: 'rented', label: 'rented' },
      { name: 'owned', label: 'owned' },
    ],
  },
      { name: 'Others', label: 'Others' },
      {
        name: 'Business',
        label: 'Business',
        operators:[{name: 'in',label: 'in'},{name: 'not in',label: 'not in'}],
        valueEditorType: 'multiselect',
        values: [
          { name: 'proprietorship', label: 'proprietorship' },
          { name: 'llp', label: 'llp' },
          { name: 'partnership', label: 'partnership' },
          { name: 'private_limited', label: 'private_limited' },
          { name: 'limited', label: 'limited' },
          { name: 'individual', label: 'individual' },
        ],
      },
  { name: 'Overall Business Vintage', label: 'Overall Business Vintage', inputType: 'number', operators: [{name:'<',label:'<'},{name:'<=',label:'<='},{name:'>',label:'>'},{name:'>=',label:'>='}] ,validator },
  { name: 'Vintage with Partner', label: 'Vintage with Partner', inputType: 'number', operators: [{name:'<',label:'<'},{name:'<=',label:'<='},{name:'>',label:'>'},{name:'>=',label:'>='}] ,validator },
  {
    name: 'Brand',
    label: 'Brand',
    operators:[{name: 'in',label: 'in'},{name: 'not in',label: 'not in'}],
    valueEditorType: 'multiselect',
    values: [
      { name: 'apple', label: 'apple' },
      { name: 'samsung', label: 'samsung' },
      { name: 'nothing', label: 'nothing' },
    ],
  },
  {
    name: 'Business Authenticity',
    label: 'Business Authenticity',
    operators:[{name: 'in',label: 'in'},{name: 'not in',label: 'not in'}],
    valueEditorType: 'multiselect',
    values: [
      { name: 'R', label: 'R' },
      { name: 'Y', label: 'Y' },
      { name: 'G', label: 'G' },
    ],
  },
  {
    name: 'Business Name Match',
    label: 'Business Name Match',
    operators:[{name: 'in',label: 'in'},{name: 'not in',label: 'not in'}],
    valueEditorType: 'multiselect',
    values: [
      { name: 'R', label: 'R' },
      { name: 'Y', label: 'Y' },
      { name: 'G', label: 'G' },
    ],
  },
  {
    name: 'Business Type Match',
    label: 'Business Type Match',
    operators:[{name: 'in',label: 'in'},{name: 'not in',label: 'not in'}],
    valueEditorType: 'multiselect',
    values: [
      { name: 'R', label: 'R' },
      { name: 'Y', label: 'Y' },
      { name: 'G', label: 'G' },
    ],
  },
  {
    name: 'Business Address Match',
    label: 'Business Address Match',
    operators:[{name: 'in',label: 'in'},{name: 'not in',label: 'not in'}],
    valueEditorType: 'multiselect',
    values: [
      { name: 'R', label: 'R' },
      { name: 'Y', label: 'Y' },
      { name: 'G', label: 'G' },
    ],
  },
  {
    name: 'Business Incorporation Year Match',
    label: 'Business Incorporation Year Match',
    operators:[{name: 'in',label: 'in'},{name: 'not in',label: 'not in'}],
    valueEditorType: 'multiselect',
    values: [
      { name: 'R', label: 'R' },
      { name: 'Y', label: 'Y' },
      { name: 'G', label: 'G' },
    ],
  },
  {
    name: 'Business Person Check',
    label: 'Business Person Check',
    operators:[{name: 'in',label: 'in'},{name: 'not in',label: 'not in'}],
    valueEditorType: 'multiselect',
    values: [
      { name: 'R', label: 'R' },
      { name: 'Y', label: 'Y' },
      { name: 'G', label: 'G' },
    ],
  },
  {
    name: 'Business Person Name Match',
    label: 'Business Person Name Match',
    operators:[{name: 'in',label: 'in'},{name: 'not in',label: 'not in'}],
    valueEditorType: 'multiselect',
    values: [
      { name: 'R', label: 'R' },
      { name: 'Y', label: 'Y' },
      { name: 'G', label: 'G' },
    ],
  },
  {
    name: 'Business GST PAN Link',
    label: 'Business GST PAN Link',
    operators:[{name: 'in',label: 'in'},{name: 'not in',label: 'not in'}],
    valueEditorType: 'multiselect',
    values: [
      { name: 'R', label: 'R' },
      { name: 'Y', label: 'Y' },
      { name: 'G', label: 'G' },
    ],
  },
  {
    name: 'Person Authenticity',
    label: 'Person Authenticity',
    operators:[{name: 'in',label: 'in'},{name: 'not in',label: 'not in'}],
    valueEditorType: 'multiselect',
    values: [
      { name: 'R', label: 'R' },
      { name: 'Y', label: 'Y' },
      { name: 'G', label: 'G' },
    ],
  },
  {
    name: 'Person Name Match',
    label: 'Person Name Match',
    operators:[{name: 'in',label: 'in'},{name: 'not in',label: 'not in'}],
    valueEditorType: 'multiselect',
    values: [
      { name: 'R', label: 'R' },
      { name: 'Y', label: 'Y' },
      { name: 'G', label: 'G' },
    ],
  },
  {
    name: "Person's Father Name Match",
    label: "Person's Father Name Match",
    operators:[{name: 'in',label: 'in'},{name: 'not in',label: 'not in'}],
    valueEditorType: 'multiselect',
    values: [
      { name: 'R', label: 'R' },
      { name: 'Y', label: 'Y' },
      { name: 'G', label: 'G' },
    ],
  },
  {
    name: 'Person Address Match',
    label: 'Person Address Match',
    operators:[{name: 'in',label: 'in'},{name: 'not in',label: 'not in'}],
    valueEditorType: 'multiselect',
    values: [
      { name: 'R', label: 'R' },
      { name: 'Y', label: 'Y' },
      { name: 'G', label: 'G' },
    ],
  },
  {
    name: 'Person DOB Match',
    label: 'Person DOB Match',
    operators:[{name: 'in',label: 'in'},{name: 'not in',label: 'not in'}],
    valueEditorType: 'multiselect',
    values: [
      { name: 'R', label: 'R' },
      { name: 'Y', label: 'Y' },
      { name: 'G', label: 'G' },
    ],
  },
  {
    name: 'Bank Name Match',
    label: 'Bank Name Match',
    operators:[{name: 'in',label: 'in'},{name: 'not in',label: 'not in'}],
    valueEditorType: 'multiselect',
    values: [
      { name: 'R', label: 'R' },
      { name: 'Y', label: 'Y' },
      { name: 'G', label: 'G' },
    ],
  },
  { name: 'Bureau Score', label: 'Bureau Score', inputType: 'number', operators: [{name:'=',label:'='},{name:'<',label:'<'},{name:'<=',label:'<='},{name:'>',label:'>'},{name:'>=',label:'>='}] ,validator },
  { name: 'Loan Accounts', label: 'Loan Accounts', inputType: 'number', operators: [{name:'=',label:'='},{name:'<',label:'<'},{name:'<=',label:'<='},{name:'>',label:'>'},{name:'>=',label:'>='}] ,validator },
  {
    name: 'Period',
    label: 'Period',
    operators:[{name:'<',label:'<'},{name:'<=',label:'<='},{name:'>',label:'>'},{name:'>=',label:'>='}],
    valueEditorType: 'multiselect',
    values: [
      { name: 'months', label: 'months' },
      { name: 'years', label: 'years' },
    ],
  },
  {
    name: 'Account Date',
    label: 'Account Date',
    operators: defaultOperators.filter((op) => op.name === '='),
    valueEditorType: 'select',
    values: [
      { name: 'date_open', label: 'date_open' },
      { name: 'date_close', label: 'date_close' },
    ],
  },
  {
    name: 'Report Date',
    label: 'Report Date',
    operators: defaultOperators.filter((op) => op.name === '='),
    valueEditorType: 'multiselect',
    values: [
      { name: 'reported_date', label: 'reported_date' },
      { name: 'current_date', label: 'current_date' },
    ],
  },
  {
    name: 'with vintage',
    label: 'with vintage',
    operators:[{name:'<',label:'<'},{name:'<=',label:'<='},{name:'>',label:'>'},{name:'>=',label:'>='}],
    valueEditorType: 'select',
    values: [
      { name: 'months', label: 'months' },
      { name: 'years', label: 'years' },
    ],
  },
  {
    name: 'Product Types',
    label: 'Product Types',
    operators:[{name:'in',label:'in'},{name:'nin',label:'nin'}],
    valueEditorType: 'select',
    values: [
      { name: 'months', label: 'months' },
      { name: 'years', label: 'years' },
    ],
  },
  { name: 'DPDS', label: 'DPDS', inputType: 'number', operators: [{name:'=',label:'='},{name:'<',label:'<'},{name:'<=',label:'<='},{name:'>',label:'>'},{name:'>=',label:'>='}] ,validator },
  { name: 'Sanctioned Amount', label: 'Sanctioned Amount', inputType: 'number', operators: [{name:'=',label:'='},{name:'<',label:'<'},{name:'<=',label:'<='},{name:'>',label:'>'},{name:'>=',label:'>='}] ,validator },
  { name: 'Bank Credits', label: 'Bank Credits', inputType: 'number', operators: [{name:'=',label:'='},{name:'<',label:'<'},{name:'<=',label:'<='},{name:'>',label:'>'},{name:'>=',label:'>='}] ,validator },
  { name: 'Bank Debits', label: 'Bank Debits', inputType: 'number', operators: [{name:'=',label:'='},{name:'<',label:'<'},{name:'<=',label:'<='},{name:'>',label:'>'},{name:'>=',label:'>='}] ,validator },
  { name: 'Bank Bounces', label: 'Bank Bounces', inputType: 'number', operators: [{name:'=',label:'='},{name:'<',label:'<'},{name:'<=',label:'<='},{name:'>',label:'>'},{name:'>=',label:'>='}] ,validator },
  { name: 'Bank ABB', label: 'Bank ABB', inputType: 'number', operators: [{name:'=',label:'='},{name:'<',label:'<'},{name:'<=',label:'<='},{name:'>',label:'>'},{name:'>=',label:'>='}] ,validator },

];
