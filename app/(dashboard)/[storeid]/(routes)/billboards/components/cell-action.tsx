"use client"

import { BillboardColumn } from "./column";


interface CellActionProps {
    data: BillboardColumn;
};


export const CellAction: React.FC<CellActionProps> =({
    data
}) =>{
    return(
        <div>Action</div>
    );
};