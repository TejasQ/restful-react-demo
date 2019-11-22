import React from "react";
import { useTrendingStickers } from "./api"

const App = () => {
  const { error, loading, data: gifResponse } = useTrendingStickers({})

  return (
    <div>
      <h1>😍 Hello REACTCONF! ⚛️</h1>
      {error && <h1>{error.message}</h1>}
      {loading && <h2>Loading...</h2>}
      {gifResponse && gifResponse.data?.map(gif => <img key={gif.id} alt={gif.slug} src={gif.images?.original?.url} />)}
    </div>
  );
};

export default App;
