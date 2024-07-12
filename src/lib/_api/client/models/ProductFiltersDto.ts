/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from './Category';
import type { ColorDto } from './ColorDto';
import type { IdNameDto } from './IdNameDto';
import type { MaterialDto } from './MaterialDto';
import type { SizeDto } from './SizeDto';
export type ProductFiltersDto = {
    categories?: Array<Category> | null;
    sizes?: Array<SizeDto> | null;
    colors?: Array<ColorDto> | null;
    occasions?: Array<IdNameDto> | null;
    materials?: Array<MaterialDto> | null;
};

