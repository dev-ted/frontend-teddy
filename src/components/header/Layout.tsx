import { Box } from "./Box";

export const Layout = ({ children }  : {
  children: React.ReactNode,
} ) => (
  <Box
    css={{
      maxW: "100%",
    }}
  >
    {children}

  </Box>
);
