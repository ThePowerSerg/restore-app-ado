import { Box } from "@mui/material"
import type { Product } from "../../app/models/product"
import ProductCard from "./ProductCard"

interface CardProduct {
    productsforCards: Product[]
}

export default function ProductList({productsforCards}: CardProduct) {
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent:'center'}}>
            {
                productsforCards.map(p => (
                    <ProductCard key={p.id} productDef={p}/>
                ))
            }
        </Box>
    )
}