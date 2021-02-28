import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image } from "@chakra-ui/react";

import { ShopContext } from "../context/shopContext";
import Hero from "../components/Hero";
import ImageWithText from "../components/ImageWithText";
import RichText from "../components/RichText";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);
  if (!products) return <div>Loading...</div>;

  return (
    <Box>
      <Hero />
      <RichText
        heading="Best product you allways wanted"
        text="our products are fun and very colourfuls"
      />
      <Grid templateColumns="repeat(3, 1fr)">
        {products.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Box
              _hover={{ opacity: "80%" }}
              textAlign="center"
              position="relative"
            >
              <Image src={product.images[0].src} />
              <Text position="absolute" bottom="15%" w="100%" fontWeight="bold">
                {product.title}
              </Text>
              <Text position="absolute" bottom="5%" w="100%" color="gray.500">
                ${product.variants[0].price}
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>
      <RichText
        heading="Treat yourself"
      />
      <ImageWithText
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
        heading="Some Heading"
        text="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
      />

      <ImageWithText
        reverse
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758"
        heading="Another image Heading"
        text="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
      />
    </Box>
  );
};

export default Home;
