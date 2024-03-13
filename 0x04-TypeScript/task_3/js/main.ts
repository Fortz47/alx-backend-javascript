/// <reference path="crud.d.ts" />

import { RowID, RowElement } from './interface';
import * from './crud' as CRUD;

const row = { firstName: 'Guillaume', lastName: 'Salva' };

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = CRUD.updatedRow(23, row);
