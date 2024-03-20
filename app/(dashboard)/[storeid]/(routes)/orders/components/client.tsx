"use client";




import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

import { OrdersColumn, columns } from "./column";



interface OrderClientProps {
    data : OrdersColumn[]
}

export const OrderClient: React.FC<OrderClientProps> =({
    data
})  => {
    return (
     <>
       
        <Heading 
        title={`Orders (${data.length})`}
        description="Manage Orders for your store"
        />
       
        
        <Separator/>
        <DataTable searchKey="products" columns={columns} data={data} />

        </>
    )
}