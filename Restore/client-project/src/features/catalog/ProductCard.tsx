import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import type { Product } from "../../app/models/product"
import { Link } from "react-router"

interface ProductProp {
    productDef : Product
}
 
export default function ProductCard({ productDef }: ProductProp) {
    return (
        <Card elevation={3} 
              sx={{ width: 280, 
                    borderRadius: 2, 
                    display:'flex', 
                    flexDirection:'column',
                    justifyContent: 'space-between'
                    }}>
            <CardMedia sx={{ height: 240, width:'100%', backgroundSize: 'cover' }}
                image={productDef.pictureUrl}
                title={productDef.name}
            />
            <CardContent>
                <Typography gutterBottom sx={{ textTransform: 'uppercase' }} variant="subtitle2">
                    {productDef.name}
                </Typography>
                <Typography variant="h6" sx={{color: 'secondary.main'}}>
                    ${(productDef.price / 100).toFixed(2)}
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: 'space-between'}}>
                <Button>Add to cart</Button>
                <Button component={Link} to={`/catalog/${productDef.id}`}>View</Button>
            </CardActions>
        </Card>
    )
}   