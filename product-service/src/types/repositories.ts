import {IProduct} from "@/types/models";

export interface IProductRepoInterface {
  getAll(): Promise<IProduct[]>,
  getById(id: string): Promise<IProduct | null>,
}