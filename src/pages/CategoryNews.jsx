import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/HomeLayout/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);
  // console.log(data);
  useEffect(() => {
    if (id == 0) {
      setCategoryNews(data);
    } else if (id == 1) {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      // console.log(filteredNews);
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      // console.log(filteredNews);
      setCategoryNews(filteredNews);
    }
  }, [data, id]);

  return (
    <div>
      <h1 className="mb-5 font-bold">
        Total <span className="text-secondary">{categoryNews.length} </span>news
        found!!!
      </h1>
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
