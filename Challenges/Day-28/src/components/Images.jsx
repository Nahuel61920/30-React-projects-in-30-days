import React from "react";
import { Image } from "cloudinary-react";

export default function Images(props) {
  const { url } = props;
  return (
    <div className="image">
      <Image
        cloudName="ddh9cqm0f"
        publicId={url ? url : "sample"}
        width="350"
        crop="scale"
      />
    </div>
  );
}
