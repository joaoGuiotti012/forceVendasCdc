import { Pedido } from './pedido';

export interface ItemPedido {
    id: number;
    idPedido: Pedido;
    item: number;
    material: string;
    txtMaterial: string;
    quantidade: number;
    unidMedida: string;
    precoUnit: number;
}
