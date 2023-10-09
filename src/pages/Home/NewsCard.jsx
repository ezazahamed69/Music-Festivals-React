const NewsCard = ({ news }) => {
  const { title, imageURL, description } = news;

  return (
    <div className="mb-4">
      <div className="card w-full bg-base-100 shadow-xl space-y-8">
        <figure>
          <img src={imageURL} alt="Music_Pic" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
