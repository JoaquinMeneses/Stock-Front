import React from "react";

const Head = () => {
  const metadata = {
    title: "Stock",
    description: "Gestion de stock",
  };

  return (
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </head>
  );
};

export default Head;
