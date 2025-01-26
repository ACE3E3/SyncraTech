import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const items = [
  {
    title: "Dashboard",
    description:
      "Our intuitive dashboard offers a centralized view of key performance indicators (KPIs), real-time data, and analytics. This feature ensures seamless monitoring of manufacturing operations, enabling quick decision-making and improved operational efficiency.",
    image: require("../../assets/db.png"),
  },
  {
    title: "Industrial Automation Integration",
    description:
      "Simplify complex processes with advanced industrial automation solutions. Our systems enable intelligent monitoring, control, and optimization of machinery, ensuring higher productivity and reduced downtime.",
    image: require("../../assets/ia4.0.webp"),
  },
  {
    title: "Smart Digitalization",
    description:
      "Revolutionize your operations with cutting-edge digitalization solutions. From predictive maintenance to data-driven insights, we empower industries to achieve greater flexibility and scalability in their workflows.",
    image: require("../../assets/digi.png"),
  },
  {
    title: "Customised Application Development",
    description:
      "Our tailored app development services deliver high-performance platforms designed for industrial needs. Whether it's a custom portal for MES or responsive enterprise applications, we build solutions that drive efficiency and user satisfaction.",
    image: require("../../assets/customApp.jpg"),
  },
];

const StyledChip = styled(Chip)(({ theme, selected }) => ({
  background: selected
    ? "linear-gradient(45deg, #007BFF, #0056b3)"
    : theme.palette.grey[200],
  color: selected ? "#fff" : theme.palette.text.primary,
  fontWeight: selected ? "bold" : "normal",
  cursor: "pointer",
  boxShadow: selected ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none",
}));

function MobileLayout({ selectedItemIndex, handleItemClick, selectedFeature }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: { xs: "flex", sm: "none" },
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", gap: 2, overflowX: "auto", pb: 1 }}>
        {items.map(({ title }, index) => (
          <StyledChip
            key={index}
            label={title}
            selected={selectedItemIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </Box>
      <Card
        variant="outlined"
        sx={{
          p: 2,
          borderRadius: 3,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          component={motion.div}
          layout
          sx={{
            height: 280,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 2,
            mb: 2,
            backgroundImage: `url(${selectedFeature.image})`,
          }}
        />
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", color: "text.primary" }}
        >
          {selectedFeature.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {selectedFeature.description}
        </Typography>
      </Card>
    </Box>
  );
}

MobileLayout.propTypes = {
  handleItemClick: PropTypes.func.isRequired,
  selectedFeature: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  selectedItemIndex: PropTypes.number.isRequired,
};

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSelectedItemIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds interval
    return () => clearInterval(interval);
  }, []);

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container
      id="features"
      sx={{ py: { xs: 6, sm: 10 }, textAlign: "center" }}
    >
      <Typography
        component="h2"
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Product Features
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
        Discover how our innovative solutions transform your business operations
        with cutting-edge tools and technologies.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          gap: 4,
          alignItems: "center",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            width: "100%",
            flex: 1,
            p: 3,
            borderRadius: 3,
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
            display: { xs: "none", sm: "block" },
          }}
        >
          <Box
            component={motion.div}
            layout
            sx={{
              height: 400,
              borderRadius: 2,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${selectedFeature.image})`,
            }}
          />
        </Card>

        <Box
          sx={{
            flex: 1,
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 2,
          }}
        >
          {items.map(({ title, description }, index) => (
            <Button
              key={index}
              onClick={() => handleItemClick(index)}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textTransform: "none",
                p: 2,
                borderRadius: 2,
                boxShadow:
                  selectedItemIndex === index
                    ? "0px 4px 12px rgba(0, 0, 0, 0.2)"
                    : "none",
                bgcolor:
                  selectedItemIndex === index
                    ? "primary.light"
                    : "background.paper",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color:
                    selectedItemIndex === index
                      ? "primary.contrastText"
                      : "text.primary",
                }}
              >
                {title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {description}
              </Typography>
            </Button>
          ))}
        </Box>

        <MobileLayout
          selectedItemIndex={selectedItemIndex}
          handleItemClick={handleItemClick}
          selectedFeature={selectedFeature}
        />
      </Box>
    </Container>
  );
}
