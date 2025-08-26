import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { fetchSingle, fetchCollection, defaultParams } from "@/lib/strapi";
import type { APIResponseData } from "@/types/strapi";

// Example of using Strapi types for header content
type HeaderData = APIResponseData<"api::header.header">;
type FooterData = APIResponseData<"api::footer.footer">;

export function StrapiContent() {
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStrapiData() {
      try {
        setLoading(true);

        // Fetch header data with TypeScript support
        const headerResponse = await fetchSingle<"api::header.header">(
          "header",
          defaultParams
        );
        setHeaderData(headerResponse.data);

        // Fetch footer data with TypeScript support
        const footerResponse = await fetchSingle<"api::footer.footer">(
          "footer",
          defaultParams
        );
        setFooterData(footerResponse.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    }

    fetchStrapiData();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="200px"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" py={4}>
        <Typography color="error" variant="h6">
          Error: {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Strapi Content (TypeScript Enabled)
      </Typography>

      <Box display="flex" gap={2} flexWrap="wrap">
        {/* Header Content Card */}
        <Card sx={{ minWidth: 300, flex: 1 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Header Data
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ID: {headerData?.id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Created:{" "}
              {headerData?.attributes.createdAt
                ? new Date(headerData.attributes.createdAt).toLocaleDateString()
                : "N/A"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Updated:{" "}
              {headerData?.attributes.updatedAt
                ? new Date(headerData.attributes.updatedAt).toLocaleDateString()
                : "N/A"}
            </Typography>
          </CardContent>
        </Card>

        {/* Footer Content Card */}
        <Card sx={{ minWidth: 300, flex: 1 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Footer Data
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ID: {footerData?.id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Created:{" "}
              {footerData?.attributes.createdAt
                ? new Date(footerData.attributes.createdAt).toLocaleDateString()
                : "N/A"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Updated:{" "}
              {footerData?.attributes.updatedAt
                ? new Date(footerData.attributes.updatedAt).toLocaleDateString()
                : "N/A"}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box mt={3}>
        <Typography variant="body2" color="text.secondary">
          <strong>TypeScript Benefits:</strong> All data is fully typed. Try
          hovering over the variables above to see the inferred types!
        </Typography>
      </Box>
    </Box>
  );
}
