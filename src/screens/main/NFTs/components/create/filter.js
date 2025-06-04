import { Datas } from "../../../../../data";

export const filter = (id) => {
    const filterObject = Object.values(Datas.markplace).flat().filter(_itm => _itm.id === id)[0];

    return filterObject;
}