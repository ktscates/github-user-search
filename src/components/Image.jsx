import React from "react"
import NextImage from "next/image";

const Image = ({ src, alt, width, height, onClick }) => (
    <NextImage src={src} alt={alt} width={width} height={height} onClick={onClick} />
  );

export default Image