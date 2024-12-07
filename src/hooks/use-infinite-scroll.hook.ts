import { useEffect, useState } from "react";

const useInfiniteScroll = (fetchedData: any) => {
  const [lastItem, setLastItem] = useState(null);
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Array<any>>([]);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      hasMore && setPage((prev) => prev + 1);
      setLastItem(null);
    }
  });

  useEffect(() => {
    if (lastItem) {
      observerRef.observe(lastItem);
    }
    return () => {
      if (lastItem) {
        observerRef.unobserve(lastItem);
      }
    };
  }, [lastItem]);

  useEffect(() => {
    if (fetchedData) {
      handleAddData(fetchedData);
    }
  }, [fetchedData]);

  const handleAddData = (newData: Array<any>) => {
    setData((prev) => {
      const uniqueData = new Map(
        [...prev, ...newData].map((item) => [item.id, item])
      );
      return Array.from(uniqueData.values());
    });

    if (newData.length === 0) {
      setHasMore(false);
    }
  };

  const reset = () => {
    setData([]);
    setPage(1);
    setHasMore(true);
  };

  return { setLastItem, data, page, reset };
};

export default useInfiniteScroll;
