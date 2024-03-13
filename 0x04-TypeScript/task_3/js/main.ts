/// <reference path="crud.d.ts" />

import { RowID, RowElement } from './interface';
import * from './crud' as CRUD;

const row = { firstName: 'Guillaume', lastName: 'Salva' };

const newRowID: RowID = CRUD.insertRow(row);
row.age = 23;
const updatedRow: RowElement = row;
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
