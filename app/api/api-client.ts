import Papa from "papaparse";
import { YachtData } from "@/common.types"


export const fetchYachtData = async (): Promise<YachtData[] | null> => {
    try {
    const apiKey: string = process.env.NEXT_PUBLIC_API_KEY || '';
    const url: string = process.env.NEXT_PUBLIC_API_URL || `https://my.api.mockaroo.com/yacht_listings.json`;
  
      const response = await fetch(url, {
        headers: {
          "X-API-Key": apiKey,
        },
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const csvData = await response.text();
  
      const { data: parsedData } = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
      });
  
      const formattedData: YachtData[] = parsedData.map((entry: any) => ({
        yacht_name: entry.yacht_name,
        manufacturer: entry.manufacturer,
        year_built: parseInt(entry.year_built),
        length: parseFloat(entry.length),
        fuel_type: entry.fuel_type,
        number_of_cabins: parseInt(entry.number_of_cabins),
        price: parseInt(entry.price),
        rating: parseFloat(entry.rating),
        pax: parseInt(entry.pax),
      }));
  
      return formattedData;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
  