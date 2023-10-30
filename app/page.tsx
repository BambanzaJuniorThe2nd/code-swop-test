"use client";
import { AiOutlineSearch } from "react-icons/ai";
import { YachtCard, Pagination } from "@/components";
import { useEffect, useState } from "react";
import { YachtData } from "@/common.types";
import { fetchYachtData } from "@/app/api";

const Home = () => {
  const [data, setData] = useState<YachtData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchYachtData();
      setData(res);
    };

    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 24; // Display 24 items per page
  const totalItems: number = data ? data.length : 0; // Total number of yacht data items

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the range of yacht data to display on the current page
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const yachtsToShow: YachtData[] = data ? data.slice(startIndex, endIndex) : [];

  return (
    <div className="w-full h-screen px-40 pt-3">
      <div className="flex justify-between items-center">
        <h1 className="text-[#202D31] font-Alata text-[24px] font-[400]">
          Results: {data?.length} yachts
        </h1>
        <div className="flex justify-between items-center">
          <AiOutlineSearch className="mr-3 text-[#5E9199]" size={"2rem"} />
          <select
            className="w-[206px] h-[51px] px-3 bg-white rounded-md border border-[#EBF1F3]"
            name="cars"
            id="cars"
          >
            <option value="volvo">Sort</option>
          </select>
        </div>
      </div>

      <section className="mt-5 grid grid-cols-3 gap-6">
        {yachtsToShow.map((yacht: YachtData, index: number) => (
          <YachtCard key={index} data={yacht} />
        ))}
      </section>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalItems / itemsPerPage)}
        onPageChange={handlePageChange}
      />
      
    </div>
  );
};

export default Home;
