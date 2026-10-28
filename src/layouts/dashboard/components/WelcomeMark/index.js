import { useMemo } from "react";

// Array of professional tech/analytics background images
const techImages = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
];

function WelcomeMark() {
  // Selects a random stock image once when the component mounts
  const randomBgImage = useMemo(() => {
    return techImages[Math.floor(Math.random() * techImages.length)];
  }, []);

  return (
    <VuiBox
       sx={{
         backgroundImage: `url(${randomBgImage})`,
         backgroundSize: "cover",
         backgroundPosition: "center",
         // add your card styling here
       }}
    >
      {/* Your card content */}
    </VuiBox>
  );
}