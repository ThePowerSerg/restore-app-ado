import { useParams } from "react-router";
import {
  Button,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useFetchProductDetailsQuery } from "./CatalogApi";

export default function ProductDetails() {
  const { id } = useParams();

  // +id casts id into a number
  const { data: products, isLoading } = useFetchProductDetailsQuery(
    id ? +id : 0,
  );

  if (!products || isLoading) return <div>Loading...</div>;

  const productDetails = [
    { label: "Name", value: products.name },
    { label: "Description", value: products.description },
    { label: "Type", value: products.type },
    { label: "Brand", value: products.brand },
    { label: "Quantity in stock", value: products.quantityInStock },
  ];

  return (
    <Grid container spacing={6} maxWidth="lg" sx={{ mx: "auto" }}>
      <Grid size={6}>
        <img
          src={products?.pictureUrl}
          alt={products?.name}
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid size={6}>
        <Typography variant="h3">{products.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4" color="secondary">
          ${(products.price / 100).toFixed(2)}
        </Typography>
        <TableContainer>
          <Table sx={{ "& td:": { fontSize: "1rem" } }}>
            <TableBody>
              {productDetails.map((detail, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    {detail.label}
                  </TableCell>
                  <TableCell>{detail.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container spacing={2} marginTop={3}>
          <Grid size={6}>
            <TextField
              variant="outlined"
              type="number"
              label="Quantity in basket"
              fullWidth
              defaultValue={1}
            ></TextField>
          </Grid>
          <Grid size={6}>
            <Button
              sx={{ height: "55px" }}
              color="primary"
              size="large"
              variant="contained"
              fullWidth
            >
              Add to Basket
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
